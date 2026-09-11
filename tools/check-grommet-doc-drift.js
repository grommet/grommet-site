/**
 * Detects components and props that exist in the installed `grommet`
 * package but are not yet documented on grommet-site, and (with --write)
 * scaffolds stub documentation for them so a human only has to fill in
 * descriptions/examples instead of authoring the whole page from scratch.
 *
 * Usage:
 *   node tools/check-grommet-doc-drift.js            # report only
 *   node tools/check-grommet-doc-drift.js --write     # also write skeleton files
 *
 * This script is intentionally dependency-free (plain CommonJS + fs/path)
 * so it can run in CI without babel-node.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GROMMET_COMPONENTS_DIR = path.join(
  ROOT,
  'node_modules/grommet/components',
);
const GROMMET_THEME_FILE = path.join(
  ROOT,
  'node_modules/grommet/themes/base.d.ts',
);
const SCREENS_DIR = path.join(ROOT, 'src/screens');
const STRUCTURE_FILE = path.join(ROOT, 'src/structure.js');
const CONTENT_FILE = path.join(ROOT, 'src/components/Content.js');
const COMPONENT_ITEMS_FILE = path.join(ROOT, 'src/screens/Components/items.js');
const COMPONENT_INDEX_FILE = path.join(ROOT, 'src/screens/Components/index.js');
const REPORT_JSON = path.join(ROOT, 'tools/.grommet-drift-summary.json');
const REPORT_MD = path.join(ROOT, 'tools/.grommet-drift-report.md');

const WRITE = process.argv.includes('--write');

// grommet folders that are documented as part of a parent component's page
// (e.g. Card's Body/Footer/Header), not as their own top-level screen.
// Update this list if grommet intentionally ships a new sub-component
// pattern that should never get its own page.
const SUB_COMPONENTS = new Set([
  'AccordionPanel',
  'CardBody',
  'CardFooter',
  'CardHeader',
  'FocusedContainer',
  'NameValuePair',
  'PageContent',
  'SkeletonItem',
  'SkipLink',
  'SkipLinkTarget',
  'Tab',
  'TableBody',
  'TableCell',
  'TableFooter',
  'TableHeader',
  'TableRow',
]);

function getGrommetComponentNames() {
  return fs
    .readdirSync(GROMMET_COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) =>
      fs.existsSync(path.join(GROMMET_COMPONENTS_DIR, name, 'propTypes.js')),
    )
    .sort();
}

function isDocumented(name) {
  return fs.existsSync(path.join(SCREENS_DIR, `${name}.js`));
}

// Returns the index of the closing bracket matching the bracket at
// `openIndex` (which must be '{', '(' or '[').
function findMatchingBracket(source, openIndex) {
  const openChar = source[openIndex];
  const closeChar = { '{': '}', '(': ')', '[': ']' }[openChar];
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (source[i] === openChar) depth += 1;
    else if (source[i] === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// Splits an object literal body into top-level `key: value` entries,
// respecting nested {}, [], (), and quoted strings.
function splitTopLevelEntries(body) {
  const entries = [];
  let depth = 0;
  let quote = null;
  let start = 0;
  for (let i = 0; i < body.length; i += 1) {
    const ch = body[i];
    if (quote) {
      if (ch === '\\') i += 1;
      else if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
    } else if (ch === '{' || ch === '[' || ch === '(') {
      depth += 1;
    } else if (ch === '}' || ch === ']' || ch === ')') {
      depth -= 1;
    } else if (ch === ',' && depth === 0) {
      entries.push(body.slice(start, i));
      start = i + 1;
    }
  }
  const last = body.slice(start);
  if (last.trim()) entries.push(last);

  return entries
    .map((entry) => {
      const colonIndex = entry.indexOf(':');
      if (colonIndex === -1) return null;
      const name = entry
        .slice(0, colonIndex)
        .trim()
        .replace(/^["']|["']$/g, '');
      const value = entry.slice(colonIndex + 1).trim();
      return name ? { name, value } : null;
    })
    .filter(Boolean);
}

function getGrommetPropNames(componentName) {
  const file = path.join(GROMMET_COMPONENTS_DIR, componentName, 'propTypes.js');
  const source = fs.readFileSync(file, 'utf8');

  const warnParseFailure = (reason) => {
    // eslint-disable-next-line no-console
    console.warn(
      `Warning: could not parse propTypes for \`${componentName}\` (${reason}). Skipping drift check for this component.`,
    );
  };

  // The local variable populated inside the
  // `if (process.env.NODE_ENV !== 'production')` guard is commonly named
  // `${componentName}PropType` (e.g. `CarouselPropType`) or `PropType`.
  // Newer components can also export `${componentName}PropTypes` from a
  // differently named local variable, e.g. `export const WizardPropTypes = propType;`.
  // Collect all likely assignment targets and take the LAST assignment.
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const candidateNames = new Set([`${componentName}PropType`, 'PropType']);
  const propTypesAliasRe = new RegExp(
    `(?:exports\\.${componentName}PropTypes\\s*=|export\\s+const\\s+${componentName}PropTypes\\s*=)\\s*([A-Za-z_$][A-Za-z0-9_$]*)`,
    'g',
  );
  let aliasMatch = propTypesAliasRe.exec(source);
  while (aliasMatch) {
    candidateNames.add(aliasMatch[1]);
    aliasMatch = propTypesAliasRe.exec(source);
  }
  const assignRe = new RegExp(
    `(?:^|[^A-Za-z0-9_$])(?:${[...candidateNames]
      .map(escapeRegExp)
      .join('|')})\\s*=`,
    'g',
  );
  let match;
  let lastMatch;
  // eslint-disable-next-line no-cond-assign
  while ((match = assignRe.exec(source))) lastMatch = match;
  if (!lastMatch) return [];
  let i = lastMatch.index + lastMatch[0].length;
  while (i < source.length && /\s/.test(source[i])) i += 1;
  if (i >= source.length) {
    warnParseFailure('unexpected end of file after PropType assignment');
    return null;
  }

  const entries = [];
  if (source[i] === '{') {
    const close = findMatchingBracket(source, i);
    if (close === -1) {
      warnParseFailure('unbalanced braces in PropType object literal');
      return null;
    }
    entries.push(...splitTopLevelEntries(source.slice(i + 1, close)));
  } else {
    // Merge-style assignment: pull entries out of every object literal
    // passed as an argument (shared prop bags referenced by identifier,
    // e.g. `_generalPropTypes.genericProps`, are not expanded here).
    const parenStart = source.indexOf('(', i);
    if (parenStart === -1) {
      warnParseFailure('expected "(" after PropType assignment');
      return null;
    }
    const parenEnd = findMatchingBracket(source, parenStart);
    if (parenEnd === -1) {
      warnParseFailure('unbalanced parentheses in PropType merge call');
      return null;
    }
    let j = parenStart + 1;
    while (j < parenEnd) {
      if (source[j] === '{') {
        const close = findMatchingBracket(source, j);
        if (close === -1) {
          warnParseFailure('unbalanced braces inside PropType merge call');
          return null;
        }
        entries.push(...splitTopLevelEntries(source.slice(j + 1, close)));
        j = close + 1;
      } else {
        j += 1;
      }
    }
  }

  // De-dupe by name (later entries win, matching object spread semantics).
  const byName = new Map();
  entries.forEach((entry) => byName.set(entry.name, entry));
  return [...byName.values()];
}

function getDocumentedPropNames(componentName) {
  const file = path.join(SCREENS_DIR, `${componentName}.js`);
  const content = fs.readFileSync(file, 'utf8');
  const names = new Set();
  const re = /<Property\s+name="([^"]+)"/g;
  let match = re.exec(content);
  while (match) {
    names.add(match[1]);
    match = re.exec(content);
  }
  return names;
}

function getShapeKeysFromValue(valueSrc) {
  const names = new Set();
  const shapeMatches = [
    ...valueSrc.matchAll(/\.shape\(\s*\{([\s\S]*?)\}\s*\)/g),
  ];
  shapeMatches.forEach((match) => {
    splitTopLevelEntries(match[1]).forEach((entry) => {
      names.add(entry.name);
    });
  });
  return [...names];
}

function getDocumentedShapeKeysForProperty(componentName, propertyName) {
  const file = path.join(SCREENS_DIR, `${componentName}.js`);
  const content = fs.readFileSync(file, 'utf8');
  const propertyRe = new RegExp(
    `<Property\\s+name="${propertyName.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&',
    )}"[^>]*>([\\s\\S]*?)<\\/Property>`,
    'm',
  );
  const match = propertyRe.exec(content);
  if (!match) return new Set();

  const block = match[1];
  const names = new Set();
  const exampleTexts = [
    ...block.matchAll(/<Example(?:[^>]*)>([\s\S]*?)<\/Example>/g),
  ].map((entry) => entry[1]);

  exampleTexts.forEach((text) => {
    let i = 0;
    while (i < text.length) {
      const openIndex = text.indexOf('{', i);
      if (openIndex === -1) break;
      const closeIndex = findMatchingBracket(text, openIndex);
      if (closeIndex === -1) break;
      const body = text.slice(openIndex + 1, closeIndex);
      splitTopLevelEntries(body).forEach((entry) => names.add(entry.name));
      i = closeIndex + 1;
    }
  });

  return names;
}

function getDocumentedThemePropertyNames() {
  const names = new Set();
  const files = fs.readdirSync(SCREENS_DIR, { withFileTypes: true });
  files.forEach((entry) => {
    if (!entry.isFile() || !entry.name.endsWith('.js')) return;
    const file = path.join(SCREENS_DIR, entry.name);
    const content = fs.readFileSync(file, 'utf8');
    const themeDocMatches = [
      ...content.matchAll(/<ThemeDoc\b[\s\S]*?<\/ThemeDoc>/g),
    ];
    themeDocMatches.forEach((match) => {
      const block = match[0];
      const re = /<Property\s+name="([^"]+)"/g;
      let propMatch = re.exec(block);
      while (propMatch) {
        names.add(propMatch[1]);
        propMatch = re.exec(block);
      }
    });
  });
  return names;
}

function getGrommetThemePropertyNames() {
  if (!fs.existsSync(GROMMET_THEME_FILE)) return [];

  const source = fs.readFileSync(GROMMET_THEME_FILE, 'utf8');
  const themeTypeStart = source.indexOf('interface ThemeType');
  if (themeTypeStart === -1) return [];
  const themeTypeOpen = source.indexOf('{', themeTypeStart);
  if (themeTypeOpen === -1) return [];
  const themeTypeClose = findMatchingBracket(source, themeTypeOpen);
  if (themeTypeClose === -1) return [];

  const names = new Set();
  const body = source.slice(themeTypeOpen + 1, themeTypeClose);

  const walk = (value, prefix = '') => {
    let index = 0;
    while (index < value.length) {
      while (index < value.length && /\s/.test(value[index])) index += 1;
      if (index >= value.length) break;

      const match = value.slice(index).match(/^([A-Za-z0-9_$]+)\s*(\?\s*:|:)/);
      if (!match) {
        index += 1;
        continue;
      }

      const [, propertyName] = match;
      const fullName = prefix ? `${prefix}.${propertyName}` : propertyName;
      let nextIndex = index + match[0].length;
      while (nextIndex < value.length && /\s/.test(value[nextIndex]))
        nextIndex += 1;

      if (nextIndex < value.length && value[nextIndex] === '{') {
        const closeIndex = findMatchingBracket(value, nextIndex);
        if (closeIndex !== -1) {
          names.add(fullName);
          walk(value.slice(nextIndex + 1, closeIndex), fullName);
          index = closeIndex + 1;
          continue;
        }
      }

      names.add(fullName);
      let endIndex = nextIndex;
      while (endIndex < value.length) {
        if (value[endIndex] === ';' || value[endIndex] === ',') break;
        if (
          value[endIndex] === '{' ||
          value[endIndex] === '[' ||
          value[endIndex] === '('
        ) {
          const closing = findMatchingBracket(value, endIndex);
          if (closing !== -1) {
            endIndex = closing + 1;
            continue;
          }
        }
        endIndex += 1;
      }
      index = endIndex + (endIndex < value.length ? 1 : 0);
    }
  };

  walk(body);
  return [...names].sort((a, b) => a.localeCompare(b));
}

// Best-effort guess of a PropertyValue "type" + placeholder example from
// the raw prop-types validator source, e.g. `_propTypes["default"].bool`
// or `_propTypes["default"].oneOf(['12', '24'])`.
function guessPropertyValue(valueSrc) {
  const oneOfMatch = valueSrc.match(/\.oneOf\(\[([\s\S]*?)\]\)/);
  if (oneOfMatch) {
    const options = oneOfMatch[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    return {
      type: 'string',
      examples: options.length ? options : ['"TODO"'],
    };
  }
  if (/\.bool\b/.test(valueSrc)) {
    return { type: 'boolean', examples: ['true', 'false'] };
  }
  if (/\.func\b/.test(valueSrc)) {
    return { type: 'function', examples: ['() => {}'] };
  }
  if (/\.number\b/.test(valueSrc)) {
    return { type: 'number', examples: ['0'] };
  }
  if (/\.node\b/.test(valueSrc)) {
    return { type: 'node | element', examples: ['TODO: add example'] };
  }
  if (/\.(shape|object)\b/.test(valueSrc)) {
    return { type: 'object', examples: ['{}'] };
  }
  if (/\.(arrayOf|array)\b/.test(valueSrc)) {
    return { type: 'array', examples: ['[]'] };
  }
  return { type: 'string', examples: ['"TODO"'] };
}

function escapeTemplateLiteral(value) {
  return String(value).replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function buildPropertyStub(propName, valueSrc) {
  const { type, examples } = guessPropertyValue(valueSrc);
  const exampleLines = examples
    .map((example) => {
      const value = String(example);
      if (/[<>{}]/.test(value)) {
        return `            <Example>{\`${escapeTemplateLiteral(
          value,
        )}\`}</Example>`;
      }
      return `            <Example>${value}</Example>`;
    })
    .join('\n');
  return `        <Property name="${propName}">
          {/* TODO: auto-generated stub, please review */}
          <Description>TODO: describe ${propName}.</Description>
          <PropertyValue type="${type}">
${exampleLines}
          </PropertyValue>
        </Property>`;
}

function insertPropsIntoScreen(componentName, missingProps) {
  const file = path.join(SCREENS_DIR, `${componentName}.js`);
  const content = fs.readFileSync(file, 'utf8');
  const closeIndex = content.indexOf('</Properties>');
  if (closeIndex === -1) return false;
  const before = content.slice(0, closeIndex).replace(/\s+$/, '');
  const after = content.slice(closeIndex);
  const stubs = [...missingProps]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, value }) => buildPropertyStub(name, value))
    .join('\n\n');
  fs.writeFileSync(file, `${before}\n\n${stubs}\n\n      ${after}`);
  return true;
}

function buildSkeletonScreen(componentName, props) {
  const propertyStubs = [...props]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, value }) => buildPropertyStub(name, value))
    .join('\n\n');
  return `import React from 'react';
import { Box, Text } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
} from '../components/Doc';

// TODO: auto-generated by tools/check-grommet-doc-drift.js because
// \`${componentName}\` was found in the installed grommet package with no
// matching documentation on grommet-site. Please review the description,
// code example, and every prop below before merging.
const ${componentName}Page = () => (
  <Page>
    <ComponentDoc
      name="${componentName}"
      availableAt={[
        {
          url: 'https://github.com/grommet/grommet/tree/master/src/js/components/${componentName}',
          label: 'GitHub',
        },
      ]}
      description="TODO: describe ${componentName}"
      code="TODO: add ${componentName} code"
    >
      <Properties>
${propertyStubs}
      </Properties>
    </ComponentDoc>
  </Page>
);

export default ${componentName}Page;

export const ${componentName}Item = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Box pad="medium" align="center">
      <Text size="small">TODO: add ${componentName} item</Text>
    </Box>
  </Item>
);

${componentName}Item.propTypes = Item.propTypes;
`;
}

function addComponentToStructure(componentName) {
  const content = fs.readFileSync(STRUCTURE_FILE, 'utf8');
  const sectionMarker = "name: 'Needs Review'";
  if (content.includes(sectionMarker)) {
    const sectionIndex = content.indexOf(sectionMarker);
    const componentsIndex = content.indexOf('components: [', sectionIndex);
    const insertAt = componentsIndex + 'components: ['.length;
    const updated = `${content.slice(
      0,
      insertAt,
    )}\n        '${componentName}',${content.slice(insertAt)}`;
    fs.writeFileSync(STRUCTURE_FILE, updated);
    return;
  }
  // Create a "Needs Review" section right before the closing `],\n};` of
  // `structure.sections`.
  const closeMarker = '\n  ],\n};';
  const closeIndex = content.lastIndexOf(closeMarker);
  const newSection = `    {
      name: 'Needs Review',
      components: [
        '${componentName}',
      ],
    },
`;
  const updated =
    content.slice(0, closeIndex + 1) +
    newSection +
    content.slice(closeIndex + 1);
  fs.writeFileSync(STRUCTURE_FILE, updated);
}

function addComponentToContent(componentName) {
  const content = fs.readFileSync(CONTENT_FILE, 'utf8');
  const importLine = `import ${componentName} from '../screens/${componentName}';\n`;
  const lastImportMatch = [
    ...content.matchAll(/^import .*from '\.\.\/screens\/[^/']+';\n/gm),
  ].pop();
  const importInsertAt = lastImportMatch
    ? lastImportMatch.index + lastImportMatch[0].length
    : content.indexOf('\n') + 1;
  let updated =
    content.slice(0, importInsertAt) +
    importLine +
    content.slice(importInsertAt);

  const routeLine = `    <Route exact path="/${componentName.toLowerCase()}" component={${componentName}} />\n`;
  const routesCloseIndex = updated.lastIndexOf('  </Routes>');
  updated =
    updated.slice(0, routesCloseIndex) +
    routeLine +
    updated.slice(routesCloseIndex);

  fs.writeFileSync(CONTENT_FILE, updated);
}

function addComponentToItems(componentName) {
  const content = fs.readFileSync(COMPONENT_ITEMS_FILE, 'utf8');
  const exportLine = `export { ${componentName}Item } from '../${componentName}';\n`;
  if (content.includes(exportLine)) return;
  const lines = content.split('\n').filter(Boolean);
  lines.push(exportLine.trimEnd());
  lines.sort((a, b) => a.localeCompare(b));
  fs.writeFileSync(COMPONENT_ITEMS_FILE, `${lines.join('\n')}\n`);
}

function addComponentToComponentsIndex(componentName) {
  const content = fs.readFileSync(COMPONENT_INDEX_FILE, 'utf8');
  const importMarker = "} from './items';";
  const importLine = `  ${componentName}Item,\n`;
  let updated = content;
  if (!content.includes(importLine)) {
    const importStart = content.indexOf('import {\n');
    const importEnd = content.indexOf(importMarker, importStart);
    const importBlock = content.slice(importStart, importEnd);
    const importEntries = importBlock
      .split('\n')
      .slice(1)
      .filter((line) => line.trim())
      .map((line) => line.trim().replace(/,$/, ''));
    importEntries.push(`${componentName}Item`);
    importEntries.sort((a, b) => a.localeCompare(b));
    const rebuiltImport = `import {\n${importEntries
      .map((entry) => `  ${entry},`)
      .join('\n')}\n${importMarker}`;
    updated =
      content.slice(0, importStart) +
      rebuiltImport +
      content.slice(importEnd + importMarker.length);
  }

  const itemsBlockMarker = 'const Items = {';
  const itemsStart = updated.indexOf(itemsBlockMarker);
  const itemsEnd = updated.indexOf('\n};', itemsStart);
  const itemsBlock = updated.slice(itemsStart, itemsEnd);
  const itemLine = `  ${componentName}: ${componentName}Item,`;
  if (!itemsBlock.includes(itemLine)) {
    const existingLines = itemsBlock
      .split('\n')
      .slice(1)
      .filter((line) => line.trim())
      .map((line) => line.trim().replace(/,$/, ''));
    existingLines.push(`${componentName}: ${componentName}Item`);
    existingLines.sort((a, b) => a.localeCompare(b));
    const rebuiltItems = `const Items = {\n${existingLines
      .map((entry) => `  ${entry},`)
      .join('\n')}`;
    updated =
      updated.slice(0, itemsStart) + rebuiltItems + updated.slice(itemsEnd);
  }

  fs.writeFileSync(COMPONENT_INDEX_FILE, updated);
}

function main() {
  const grommetComponents = getGrommetComponentNames().filter(
    (name) => !SUB_COMPONENTS.has(name),
  );

  const newComponents = [];
  const updatedProps = {};
  const updatedNestedProps = {};
  const unparseableComponents = [];
  const documentedThemeProps = getDocumentedThemePropertyNames();
  const grommetThemeProps = getGrommetThemePropertyNames();
  const missingThemeProps = grommetThemeProps.filter(
    (name) => !documentedThemeProps.has(name),
  );

  grommetComponents.forEach((name) => {
    const props = getGrommetPropNames(name);
    if (props === null) {
      // propTypes.js couldn't be parsed safely (unbalanced brackets/unknown
      // syntax); skip this component rather than risk acting on bad data.
      unparseableComponents.push(name);
      return;
    }
    if (!isDocumented(name)) {
      newComponents.push({ name, props });
      return;
    }
    const documented = getDocumentedPropNames(name);
    const missing = props.filter((p) => !documented.has(p.name));
    if (missing.length) updatedProps[name] = missing;

    const nestedMissing = props.flatMap((p) => {
      if (!p.value || !p.value.includes('shape(')) return [];
      const nestedNames = getShapeKeysFromValue(p.value);
      if (!nestedNames.length) return [];
      const documentedNested = getDocumentedShapeKeysForProperty(name, p.name);
      return nestedNames
        .filter((nestedName) => !documentedNested.has(nestedName))
        .map((nestedName) => `${p.name}.${nestedName}`);
    });
    if (nestedMissing.length) updatedNestedProps[name] = nestedMissing;
  });

  if (WRITE) {
    newComponents.forEach(({ name, props }) => {
      const file = path.join(SCREENS_DIR, `${name}.js`);
      fs.writeFileSync(file, buildSkeletonScreen(name, props));
      addComponentToStructure(name);
      addComponentToContent(name);
      addComponentToItems(name);
      addComponentToComponentsIndex(name);
    });
    Object.entries(updatedProps).forEach(([name, missing]) => {
      insertPropsIntoScreen(name, missing);
    });
  }

  const hasDrift =
    newComponents.length > 0 ||
    Object.keys(updatedProps).length > 0 ||
    Object.keys(updatedNestedProps).length > 0 ||
    missingThemeProps.length > 0;

  const summary = {
    hasDrift,
    newComponents: newComponents.map((c) => c.name),
    updatedProps: Object.fromEntries(
      Object.entries(updatedProps).map(([name, props]) => [
        name,
        props.map((p) => p.name),
      ]),
    ),
    updatedNestedProps,
    missingThemeProps,
    unparseableComponents,
  };

  const reportLines = ['# Grommet documentation drift report', ''];
  if (!hasDrift) {
    reportLines.push(
      'No drift detected between grommet and grommet-site docs.',
    );
  } else {
    if (newComponents.length) {
      reportLines.push('## New components missing documentation', '');
      newComponents.forEach(({ name }) => reportLines.push(`- \`${name}\``));
      reportLines.push('');
    }
    if (Object.keys(updatedProps).length) {
      reportLines.push('## Existing components with undocumented props', '');
      Object.entries(updatedProps).forEach(([name, props]) => {
        reportLines.push(
          `- \`${name}\`: ${props.map((p) => `\`${p.name}\``).join(', ')}`,
        );
      });
      reportLines.push('');
    }
    if (Object.keys(updatedNestedProps).length) {
      reportLines.push(
        '## Existing components with undocumented nested object keys',
        '',
      );
      Object.entries(updatedNestedProps).forEach(([name, props]) => {
        reportLines.push(
          `- \`${name}\`: ${props.map((p) => `\`${p}\``).join(', ')}`,
        );
      });
      reportLines.push('');
    }
    if (missingThemeProps.length) {
      reportLines.push('## Theme keys missing documentation', '');
      missingThemeProps.forEach((name) => reportLines.push(`- \`${name}\``));
      reportLines.push('');
    }
    reportLines.push(
      WRITE
        ? '_Skeleton files/stubs were generated. Please review descriptions and examples before merging._'
        : '_Run with --write to generate skeleton files/stubs._',
    );
  }

  if (unparseableComponents.length) {
    reportLines.push(
      '',
      '## Components skipped due to parse errors',
      '',
      "_These components' `propTypes.js` couldn't be parsed safely and were" +
        ' not checked for drift. Please review manually. See the workflow' +
        ' logs for details._',
      '',
      ...unparseableComponents.map((name) => `- \`${name}\``),
    );
  }

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(summary, null, 2));
  fs.writeFileSync(REPORT_MD, reportLines.join('\n'));

  // eslint-disable-next-line no-console
  console.log(reportLines.join('\n'));
  process.exitCode = 0;
}

main();
