#!/usr/bin/env node
/**
 * Fix DocsContent import paths across all docs pages based on actual relative depth.
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'app', 'docs');
const TARGET = path.join(ROOT, 'src', 'components', 'docs', 'DocsContent');

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
  // Build relative and normalize to posix with leading './' removed if present
  const fromDir = path.dirname(fromFile);
  let rel = path.relative(fromDir, toFileNoExt);
  if (!rel.startsWith('.')) rel = './' + rel;
  // Next/TS import without extension
  return rel.split(path.sep).join('/');
}

function transform(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');

  // Compute correct relative import path (no extension)
  const correct = toBrowserRelative(filePath, TARGET);

  const importRe = /import\s+DocsContent\s+from\s+['"][^'"]*['"];?/;
  if (importRe.test(src)) {
    src = src.replace(importRe, `import DocsContent from '${correct}';`);
    fs.writeFileSync(filePath, src, 'utf8');
    console.log('Fixed:', path.relative(ROOT, filePath), '->', correct);
    return true;
  }
  return false;
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
