#!/usr/bin/env node
/**
 * Fix ThemeContext import paths across all docs pages based on actual relative depth.
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'app', 'docs');
const TARGET = path.join(DOCS_DIR, 'ThemeContext');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && entry.name === 'page.tsx') out.push(p);
  }
  return out;
}

function toBrowserRelative(fromFile, toFileNoExt) {
  const fromDir = path.dirname(fromFile);
  let rel = path.relative(fromDir, toFileNoExt);
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel.split(path.sep).join('/');
}

function transform(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');

  const correct = toBrowserRelative(filePath, TARGET);

  const hasImport = /import\s+\{\s*useDocsTheme\s*\}\s+from\s+['"][^'"]*ThemeContext[^'"]*['"];?/m.test(src);
  if (!hasImport) return false;

  src = src.replace(/import\s+\{\s*useDocsTheme\s*\}\s+from\s+['"][^'"]*['"];?/m, `import { useDocsTheme } from '${correct}';`);

  fs.writeFileSync(filePath, src, 'utf8');
  console.log('Fixed:', path.relative(ROOT, filePath), '->', correct);
  return true;
}

function main() {
  const files = walk(DOCS_DIR);
  let count = 0;
  for (const f of files) {
    try {
      if (transform(f)) count++;
    } catch (e) {
      console.error('Failed:', path.relative(ROOT, f), e.message);
    }
  }
  console.log(`Done. Fixed ${count} file(s).`);
}

if (require.main === module) {
  main();
}
