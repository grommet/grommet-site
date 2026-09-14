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
const { execFileSync } = require('child_process');

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
const THEME_HELPERS_DIR = path.join(ROOT, 'src/utils');
const REPORT_JSON = path.join(ROOT, 'tools/.grommet-drift-summary.json');
const REPORT_MD = path.join(ROOT, 'tools/.grommet-drift-report.md');
const GROMMET_THEME_BASELINE_COMMIT =
  '2c872354a2d32cacc8b7d82ec963f83acf03e8ae';

// The existing theme documentation is incomplete, so writing every missing
// theme path would create a huge noisy PR. Revisit this allowlist and replace
// it with a complete theme baseline before adding more theme drift paths.
const THEME_TODO_PATHS = new Set([
  'formField.hover.background.color',
  'formField.hover.border.color',
]);

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
/* eslint-disable no-continue */
function findMatchingBracket(source, openIndex) {
  const openChar = source[openIndex];
  const closeChar = { '{': '}', '(': ')', '[': ']' }[openChar];
  let depth = 0;
  let quote = null;
  for (let i = openIndex; i < source.length; i += 1) {
    const ch = source[i];
    if (quote) {
      if (ch === '\\') i += 1;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
    } else if (ch === openChar) {
      depth += 1;
    } else if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}
/* eslint-enable no-continue */

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
      const cleanEntry = entry.replace(/\/\/.*$/gm, '').trim();
      const colonIndex = cleanEntry.indexOf(':');
      if (colonIndex === -1) return null;
      const name = cleanEntry
        .slice(0, colonIndex)
        .trim()
        .replace(/^["']|["']$/g, '');
      const value = cleanEntry.slice(colonIndex + 1).trim();
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

function extractCodeFromExampleText(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith('{') && cleaned.endsWith('}') && cleaned.length >= 2) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  if (
    (cleaned.startsWith('`') && cleaned.endsWith('`')) ||
    (cleaned.startsWith('"') && cleaned.endsWith('"')) ||
    (cleaned.startsWith("'") && cleaned.endsWith("'"))
  ) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  return cleaned;
}

function getShapeEntriesFromValue(valueSrc) {
  const entries = [];
  const shapeIndex = valueSrc.indexOf('.shape(');
  if (shapeIndex === -1) return entries;
  const openIndex = valueSrc.indexOf('{', shapeIndex);
  if (openIndex === -1) return entries;
  const closeIndex = findMatchingBracket(valueSrc, openIndex);
  if (closeIndex === -1) return entries;

  splitTopLevelEntries(valueSrc.slice(openIndex + 1, closeIndex)).forEach(
    (entry) => {
      const nestedEntries = getShapeEntriesFromValue(entry.value);
      if (!nestedEntries.length) entries.push(entry);
      nestedEntries.forEach((nested) => {
        entries.push({
          name: `${entry.name}.${nested.name}`,
          value: nested.value,
        });
      });
    },
  );
  return entries;
}

function getDocumentedShapeKeysForProperty(componentName, propertyName) {
  const file = path.join(SCREENS_DIR, `${componentName}.js`);
  const content = fs.readFileSync(file, 'utf8');
  // eslint-disable-next-line prefer-regex-literals
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
    const code = extractCodeFromExampleText(text);
    let i = 0;
    while (i < code.length) {
      const openIndex = code.indexOf('{', i);
      if (openIndex === -1) break;
      const closeIndex = findMatchingBracket(code, openIndex);
      if (closeIndex === -1) break;
      const body = code.slice(openIndex + 1, closeIndex);
      splitTopLevelEntries(body).forEach((entry) => {
        names.add(entry.name);
        // eslint-disable-next-line no-use-before-define
        getDocumentedObjectKeys(entry.value).forEach((nested) => {
          names.add(`${entry.name}.${nested}`);
        });
      });
      i = closeIndex + 1;
    }
  });

  return names;
}

function getDocumentedObjectKeys(valueSrc) {
  const openIndex = valueSrc.indexOf('{');
  if (openIndex === -1) return [];
  const closeIndex = findMatchingBracket(valueSrc, openIndex);
  if (closeIndex === -1) return [];
  const keys = [];
  splitTopLevelEntries(valueSrc.slice(openIndex + 1, closeIndex)).forEach(
    (entry) => {
      keys.push(entry.name);
      getDocumentedObjectKeys(entry.value).forEach((nested) => {
        keys.push(`${entry.name}.${nested}`);
      });
    },
  );
  return keys;
}

function insertMessageKeysIntoScreen(componentName, missingEntries) {
  const file = path.join(SCREENS_DIR, `${componentName}.js`);
  let content = fs.readFileSync(file, 'utf8');
  // eslint-disable-next-line prefer-regex-literals
  const propertyRe = new RegExp(
    `<Property\\s+name="messages"[^>]*>([\\s\\S]*?)<\\/Property>`,
    'm',
  );
  const propertyMatch = propertyRe.exec(content);
  if (!propertyMatch) return false;

  const propertyStart = propertyMatch.index;
  let propertyBlock = propertyMatch[0].replace(
    /^\x20{2}[A-Za-z_$][A-Za-z0-9_$]*: "TODO: add example",\n/gm,
    '',
  );
  const firstMessagesObject = propertyBlock.indexOf('\n  messages: {');
  const generatedMessagesObject = propertyBlock.lastIndexOf('\n  messages: {');
  if (generatedMessagesObject > firstMessagesObject) {
    const generatedEnd = propertyBlock.indexOf(
      '\n  },\n  onAnalytics: "TODO: add example",',
      generatedMessagesObject,
    );
    if (generatedEnd !== -1) {
      const generatedMarker = '\n  },\n  onAnalytics: "TODO: add example",';
      propertyBlock =
        propertyBlock.slice(0, generatedMessagesObject) +
        propertyBlock.slice(generatedEnd + generatedMarker.length);
    }
  }
  const exampleStart = propertyBlock.search(/<Example(?:[^>]*)>\s*\{`/);
  if (exampleStart === -1) return false;

  const templateStart = propertyBlock.indexOf('`', exampleStart);
  const templateEnd = propertyBlock.indexOf('`', templateStart + 1);
  if (templateStart === -1 || templateEnd === -1) return false;

  let exampleBody = propertyBlock.slice(templateStart + 1, templateEnd);
  const rootOpen = exampleBody.indexOf('{');
  if (rootOpen === -1) return false;

  if (componentName === 'Grommet') {
    const entries = missingEntries.map((entry) => ({
      path: entry.name.replace(/^messages\.(messages\.)?/, '').split('.'),
    }));
    const targetEnd = exampleBody.lastIndexOf('\n  }\n}');
    if (targetEnd === -1) return false;
    // eslint-disable-next-line no-use-before-define
    const stubs = buildNestedMessageStub(entries);
    const insertion = `,\n${stubs}`;
    exampleBody =
      exampleBody.slice(0, targetEnd) +
      insertion +
      exampleBody.slice(targetEnd);
    const updatedPropertyBlock =
      propertyBlock.slice(0, templateStart + 1) +
      exampleBody +
      propertyBlock.slice(templateEnd);
    content =
      content.slice(0, propertyStart) +
      updatedPropertyBlock +
      content.slice(propertyStart + propertyMatch[0].length);
    fs.writeFileSync(file, content);
    return true;
  }

  const grouped = {};
  missingEntries.forEach((entry) => {
    const parts = entry.name.replace(/^messages\./, '').split('.');
    const parent = parts.slice(0, -1).join('.');
    if (!grouped[parent]) grouped[parent] = [];
    grouped[parent].push(parts[parts.length - 1]);
  });

  Object.entries(grouped).forEach(([parent, keys]) => {
    const pathParts = parent ? parent.split('.') : [];
    let existingParts = pathParts;
    // eslint-disable-next-line no-use-before-define
    let target = findObjectForPath(exampleBody, existingParts, rootOpen);
    while (!target && existingParts.length) {
      existingParts = existingParts.slice(0, -1);
      // eslint-disable-next-line no-use-before-define
      target = findObjectForPath(exampleBody, existingParts, rootOpen);
    }
    if (!target) return;
    const body = exampleBody.slice(target.open + 1, target.close);
    const trailingWhitespace = body.match(/\s*$/)[0];
    const contentEnd = body.length - trailingWhitespace.length;
    const existing = body.slice(0, contentEnd);
    const leafStubs = [...new Set(keys)]
      .sort()
      .map((key) => `  ${key}: "TODO: add example",`)
      .join('\n');
    const missingParts = pathParts.slice(existingParts.length);
    const stubs = missingParts.reduceRight(
      (value, segment) => `${segment}: {\n${value}\n},`,
      leafStubs,
    );
    const insertion = `${
      existing && !/,\s*$/.test(existing) ? ',' : ''
    }\n${stubs}`;
    const absoluteInsertAt = target.open + 1 + contentEnd;
    exampleBody =
      exampleBody.slice(0, absoluteInsertAt) +
      insertion +
      exampleBody.slice(absoluteInsertAt);
  });

  const updatedPropertyBlock =
    propertyBlock.slice(0, templateStart + 1) +
    exampleBody +
    propertyBlock.slice(templateEnd);
  content =
    content.slice(0, propertyStart) +
    updatedPropertyBlock +
    content.slice(propertyStart + propertyMatch[0].length);
  fs.writeFileSync(file, content);
  return true;
}

function isDocumentedMessagePath(componentName, propertyName, pathName) {
  const file = path.join(SCREENS_DIR, `${componentName}.js`);
  const content = fs.readFileSync(file, 'utf8');
  const propertyRe = new RegExp(
    `<Property\\s+name="${propertyName}"[^>]*>([\\s\\S]*?)<\\/Property>`,
  );
  const propertyMatch = propertyRe.exec(content);
  if (!propertyMatch) return false;
  const exampleMatch = propertyMatch[1].match(
    /<Example(?:[^>]*)>([\s\S]*?)<\/Example>/,
  );
  if (!exampleMatch) return false;
  const code = extractCodeFromExampleText(exampleMatch[1]);
  const rootOpen = code.indexOf('{');
  if (rootOpen === -1) return false;
  const segments = pathName.split('.');
  let object = { open: rootOpen, close: findMatchingBracket(code, rootOpen) };
  for (let i = 0; i < segments.length; i += 1) {
    // eslint-disable-next-line no-use-before-define
    const child = findDirectObjectKey(
      code,
      object.open,
      object.close,
      segments[i],
    );
    if (!child) {
      if (componentName === 'Grommet') break;
      return false;
    }
    if (i < segments.length - 1) {
      if (child.open === -1) return false;
      object = {
        open: child.open,
        close: findMatchingBracket(code, child.open),
      };
    }
  }
  if (!object || componentName !== 'Grommet') return true;
  const component = segments[segments.length - 2];
  const leaf = segments[segments.length - 1];
  if (component) {
    const componentRe = new RegExp(
      `\\n\\s+${component}: \\{[\\s\\S]*?\\b${leaf}:`,
    );
    return componentRe.test(code);
  }
  return true;
}

function buildNestedMessageStub(entries) {
  const tree = {};
  entries.forEach((entry) => {
    let node = tree;
    entry.path.forEach((part, index) => {
      if (!node[part]) node[part] = index === entry.path.length - 1 ? null : {};
      node = node[part];
    });
  });
  const render = (node, indent) =>
    Object.entries(node)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => {
        if (value === null) return `${indent}${key}: "TODO: add example",`;
        return `${indent}${key}: {\n${render(
          value,
          `${indent}  `,
        )}\n${indent}},`;
      })
      .join('\n');
  return render(tree, '  ');
}

function findObjectForPath(source, segments, openIndex) {
  if (!segments.length) {
    return { open: openIndex, close: findMatchingBracket(source, openIndex) };
  }
  const closeIndex = findMatchingBracket(source, openIndex);
  if (closeIndex === -1) return null;
  // eslint-disable-next-line no-use-before-define
  const child = findDirectObjectKey(source, openIndex, closeIndex, segments[0]);
  if (!child) return null;
  return findObjectForPath(source, segments.slice(1), child.open);
}

/* eslint-disable no-continue */
function findDirectObjectKey(source, openIndex, closeIndex, key) {
  let depth = 0;
  let quote = null;
  for (let i = openIndex + 1; i < closeIndex; i += 1) {
    const ch = source[i];
    if (quote) {
      if (ch === '\\') i += 1;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '{' || ch === '[' || ch === '(') {
      depth += 1;
      continue;
    }
    if (ch === '}' || ch === ']' || ch === ')') {
      depth -= 1;
      continue;
    }
    if (depth !== 0) continue;
    const match = source
      .slice(i)
      .match(new RegExp(`^${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:`));
    if (match) {
      const valueStart = i + match[0].length;
      let valueIndex = valueStart;
      while (/\s/.test(source[valueIndex] || '')) valueIndex += 1;
      return {
        open: source[valueIndex] === '{' ? valueIndex : -1,
      };
    }
  }
  return null;
}
/* eslint-enable no-continue */

function getDocumentedThemePropertyNames() {
  const names = new Set();
  const collectFiles = (directory) => {
    const files = [];
    fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) files.push(...collectFiles(file));
      else if (entry.isFile() && entry.name.endsWith('.js')) files.push(file);
    });
    return files;
  };

  [...collectFiles(SCREENS_DIR), ...collectFiles(THEME_HELPERS_DIR)].forEach(
    (file) => {
      const content = fs.readFileSync(file, 'utf8');
      const blocks = [
        ...content.matchAll(/<ThemeDoc\b[\s\S]*?<\/ThemeDoc>/g),
      ].map((match) => match[0]);
      if (file.startsWith(THEME_HELPERS_DIR)) blocks.push(content);
      blocks.forEach((block) => {
        const re = /<Property\s+name="([^"]+)"/g;
        let propMatch = re.exec(block);
        while (propMatch) {
          names.add(propMatch[1]);
          propMatch = re.exec(block);
        }
      });
    },
  );
  return names;
}

function parseThemePropertyNames(source) {
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
      } else {
        const [, propertyName] = match;
        const fullName = prefix ? `${prefix}.${propertyName}` : propertyName;
        let nextIndex = index + match[0].length;
        while (nextIndex < value.length && /\s/.test(value[nextIndex])) {
          nextIndex += 1;
        }

        if (nextIndex < value.length && value[nextIndex] === '{') {
          const closeIndex = findMatchingBracket(value, nextIndex);
          if (closeIndex !== -1) {
            names.add(fullName);
            walk(value.slice(nextIndex + 1, closeIndex), fullName);
            index = closeIndex + 1;
          } else {
            names.add(fullName);
            index = nextIndex + 1;
          }
        } else {
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
              } else {
                endIndex += 1;
              }
            } else {
              endIndex += 1;
            }
          }
          index = endIndex + (endIndex < value.length ? 1 : 0);
        }
      }
    }
  };

  walk(body);
  return [...names].sort((a, b) => a.localeCompare(b));
}

function getGrommetThemePropertyNames() {
  if (!fs.existsSync(GROMMET_THEME_FILE)) return [];
  return parseThemePropertyNames(fs.readFileSync(GROMMET_THEME_FILE, 'utf8'));
}

function getBaselineThemePropertyNames() {
  const url = `https://raw.githubusercontent.com/grommet/grommet/${GROMMET_THEME_BASELINE_COMMIT}/src/js/themes/base.d.ts`;
  const source = execFileSync('curl', ['-fsSL', url], { encoding: 'utf8' });
  return parseThemePropertyNames(source);
}

function buildThemePropertyStub(themePath) {
  return `        <Property name="${themePath}">
          {/* TODO: auto-generated stub, please review */}
          <Description>TODO: describe ${themePath}.</Description>
          <PropertyValue type="string">
            <Example>"TODO: add example"</Example>
          </PropertyValue>
        </Property>`;
}

function insertThemePropertiesIntoScreen(componentName, themePaths) {
  const screenName = fs
    .readdirSync(SCREENS_DIR)
    .find((name) => name.toLowerCase() === `${componentName.toLowerCase()}.js`);
  if (!screenName) return false;
  const file = path.join(SCREENS_DIR, screenName);
  const content = fs.readFileSync(file, 'utf8');
  const themeDocEnd = content.indexOf('</ThemeDoc>');
  if (themeDocEnd === -1) return false;
  const stubs = themePaths
    .sort((a, b) => a.localeCompare(b))
    .map((themePath) => buildThemePropertyStub(themePath))
    .join('\n\n');
  const before = content.slice(0, themeDocEnd).replace(/\s+$/, '');
  const after = content.slice(themeDocEnd);
  fs.writeFileSync(file, `${before}\n\n${stubs}\n\n      ${after}`);
  return true;
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
  const baselineThemeProps = getBaselineThemePropertyNames();
  const missingThemeProps = grommetThemeProps.filter(
    (name) => !documentedThemeProps.has(name),
  );
  const themeTodoPaths = [...THEME_TODO_PATHS].filter(
    (name) => !documentedThemeProps.has(name),
  );
  const newThemeProps = [
    ...new Set([
      ...grommetThemeProps.filter(
        (name) =>
          !baselineThemeProps.includes(name) && !documentedThemeProps.has(name),
      ),
      ...themeTodoPaths,
    ]),
  ];

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
      if (p.name !== 'messages' || !p.value || !p.value.includes('shape('))
        return [];
      const nestedEntries = getShapeEntriesFromValue(p.value);
      if (!nestedEntries.length) return [];
      const documentedNested = getDocumentedShapeKeysForProperty(name, p.name);
      return nestedEntries
        .filter(
          (entry) =>
            !documentedNested.has(entry.name) &&
            !documentedNested.has(`${p.name}.${entry.name}`) &&
            !isDocumentedMessagePath(name, p.name, entry.name),
        )
        .map((entry) => ({
          name: `${p.name}.${entry.name}`,
          value: entry.value,
        }));
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
    Object.entries(updatedNestedProps).forEach(([name, missing]) => {
      insertMessageKeysIntoScreen(name, missing);
    });
    const themePathsByComponent = {};
    newThemeProps.forEach((themePath) => {
      const componentName = themePath.split('.')[0];
      if (!themePathsByComponent[componentName])
        themePathsByComponent[componentName] = [];
      themePathsByComponent[componentName].push(themePath);
    });
    Object.entries(themePathsByComponent).forEach(
      ([componentName, themePaths]) => {
        insertThemePropertiesIntoScreen(componentName, themePaths);
      },
    );
  }

  const hasDrift =
    newComponents.length > 0 ||
    Object.keys(updatedProps).length > 0 ||
    Object.keys(updatedNestedProps).length > 0 ||
    newThemeProps.length > 0;

  const summary = {
    hasDrift,
    newComponents: newComponents.map((c) => c.name),
    updatedProps: Object.fromEntries(
      Object.entries(updatedProps).map(([name, props]) => [
        name,
        props.map((p) => p.name),
      ]),
    ),
    updatedNestedProps: Object.fromEntries(
      Object.entries(updatedNestedProps).map(([name, props]) => [
        name,
        props.map((prop) => prop.name),
      ]),
    ),
    themeTodoPaths,
    newThemeProps,
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
        '## Existing components with undocumented message keys',
        '',
      );
      Object.entries(updatedNestedProps).forEach(([name, props]) => {
        reportLines.push(
          `- \`${name}\`: ${props.map((p) => `\`${p.name}\``).join(', ')}`,
        );
      });
      reportLines.push('');
    }
    if (newThemeProps.length) {
      reportLines.push('## New theme keys missing documentation', '');
      newThemeProps.forEach((name) => reportLines.push(`- \`${name}\``));
      reportLines.push('');
    }
    if (newThemeProps.length && WRITE) {
      reportLines.push('## Theme TODOs generated', '');
      newThemeProps.forEach((name) => reportLines.push(`- \`${name}\``));
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
