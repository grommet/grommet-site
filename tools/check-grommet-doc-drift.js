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
const SCREENS_DIR = path.join(ROOT, 'src/screens');
const STRUCTURE_FILE = path.join(ROOT, 'src/structure.js');
const CONTENT_FILE = path.join(ROOT, 'src/components/Content.js');
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

// Returns the index just after the closing bracket matching the bracket at
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

  // The local (non-exported) variable populated inside the
  // `if (process.env.NODE_ENV !== 'production')` guard is named either
  // `${componentName}PropType` (e.g. `CarouselPropType`) or, in many
  // components, just the generic `PropType`. It's declared once (usually
  // as an empty placeholder, e.g. `var PropType = {};`) and then reassigned
  // with the real value inside the guard, so we want the LAST assignment,
  // which is either a plain object literal or a merge via
  // `_extends({}, sharedProps, { ...own })`.
  const escaped = componentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const assignRe = new RegExp(
    `(?:${escaped}PropType|(?<![A-Za-z0-9_])PropType) = `,
    'g',
  );
  let match;
  let lastMatch;
  // eslint-disable-next-line no-cond-assign
  while ((match = assignRe.exec(source))) lastMatch = match;
  if (!lastMatch) return [];
  let i = lastMatch.index + lastMatch[0].length;
  while (/\s/.test(source[i])) i += 1;

  const entries = [];
  if (source[i] === '{') {
    const close = findMatchingBracket(source, i);
    entries.push(...splitTopLevelEntries(source.slice(i + 1, close)));
  } else {
    // Merge-style assignment: pull entries out of every object literal
    // passed as an argument (shared prop bags referenced by identifier,
    // e.g. `_generalPropTypes.genericProps`, are not expanded here).
    const parenStart = source.indexOf('(', i);
    const parenEnd = findMatchingBracket(source, parenStart);
    let j = parenStart + 1;
    while (j < parenEnd) {
      if (source[j] === '{') {
        const close = findMatchingBracket(source, j);
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
    return { type: 'node | element', examples: ['<Box />'] };
  }
  if (/\.(shape|object)\b/.test(valueSrc)) {
    return { type: 'object', examples: ['{}'] };
  }
  if (/\.(arrayOf|array)\b/.test(valueSrc)) {
    return { type: 'array', examples: ['[]'] };
  }
  return { type: 'string', examples: ['"TODO"'] };
}

function buildPropertyStub(propName, valueSrc) {
  const { type, examples } = guessPropertyValue(valueSrc);
  const exampleLines = examples
    .map((example) => `            <Example>${example}</Example>`)
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
  const stubs = missingProps
    .map(({ name, value }) => buildPropertyStub(name, value))
    .join('\n\n');
  fs.writeFileSync(file, `${before}\n\n${stubs}\n\n      ${after}`);
  return true;
}

function buildSkeletonScreen(componentName, props) {
  const propertyStubs = props
    .map(({ name, value }) => buildPropertyStub(name, value))
    .join('\n\n');
  return `import React from 'react';
import { ${componentName} } from 'grommet';
import Page from '../components/Page';
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
          label: 'Github',
        },
      ]}
      description="TODO: describe ${componentName}"
      code={\`<${componentName} />\`}
    >
      <Properties>
${propertyStubs}
      </Properties>
    </ComponentDoc>
  </Page>
);

export default ${componentName}Page;
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
    ...content.matchAll(/^import .*from '\.\.\/screens\/.*';\n/gm),
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

function main() {
  const grommetComponents = getGrommetComponentNames().filter(
    (name) => !SUB_COMPONENTS.has(name),
  );

  const newComponents = [];
  const updatedProps = {};

  grommetComponents.forEach((name) => {
    const props = getGrommetPropNames(name);
    if (!isDocumented(name)) {
      newComponents.push({ name, props });
      return;
    }
    const documented = getDocumentedPropNames(name);
    const missing = props.filter((p) => !documented.has(p.name));
    if (missing.length) updatedProps[name] = missing;
  });

  if (WRITE) {
    newComponents.forEach(({ name, props }) => {
      const file = path.join(SCREENS_DIR, `${name}.js`);
      fs.writeFileSync(file, buildSkeletonScreen(name, props));
      addComponentToStructure(name);
      addComponentToContent(name);
    });
    Object.entries(updatedProps).forEach(([name, missing]) => {
      insertPropsIntoScreen(name, missing);
    });
  }

  const hasDrift =
    newComponents.length > 0 || Object.keys(updatedProps).length > 0;

  const summary = {
    hasDrift,
    newComponents: newComponents.map((c) => c.name),
    updatedProps: Object.fromEntries(
      Object.entries(updatedProps).map(([name, props]) => [
        name,
        props.map((p) => p.name),
      ]),
    ),
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
    reportLines.push(
      WRITE
        ? '_Skeleton files/stubs were generated. Please review descriptions and examples before merging._'
        : '_Run with --write to generate skeleton files/stubs._',
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
