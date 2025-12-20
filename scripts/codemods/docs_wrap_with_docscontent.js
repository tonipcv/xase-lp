#!/usr/bin/env node
/**
 * Codemod: Wrap all docs pages with DocsContent and remove direct Sidebar usage
 * - Targets: all files matching src/app/docs/(any subpath)/page.tsx (excluding layout.tsx, ThemeContext)
 * - Actions:
 *   - Ensure 'use client'
 *   - Import DocsContent and useDocsTheme
 *   - Remove Sidebar import and <Sidebar /> usage
 *   - Wrap main JSX with <DocsContent> ... </DocsContent>
 *   - Keep page content as-is for safety (theme will be applied via context)
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'src', 'app', 'docs');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && entry.name === 'page.tsx') out.push(p);
  }
  return out;
}

function transform(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');

  // Skip layout or ThemeContext just in case (shouldn't match as only page.tsx)
  if (filePath.endsWith('layout.tsx')) return false;

  let changed = false;

  // Ensure 'use client' at top
  if (!src.startsWith("'use client'")) {
    src = `'use client';\n` + src;
    changed = true;
  }

  // Remove Sidebar import
  const sidebarImportRe = /\n?import\s+Sidebar\s+from\s+['"].*?Sidebar['"];?/g;
  if (sidebarImportRe.test(src)) {
    src = src.replace(sidebarImportRe, '');
    changed = true;
  }

  // Add DocsContent import if missing
  if (!src.includes("from '../../components/docs/DocsContent'")) {
    // Insert after first import
    const firstImportMatch = src.match(/import[^\n]*\n/);
    if (firstImportMatch) {
      const insertPos = firstImportMatch.index + firstImportMatch[0].length;
      src = src.slice(0, insertPos) + "import DocsContent from '../../components/docs/DocsContent';\n" + src.slice(insertPos);
    } else {
      src = `import DocsContent from '../../components/docs/DocsContent';\n` + src;
    }
    changed = true;
  }

  // Add useDocsTheme import if missing (optional, but helpful for pages to use later)
  if (!src.includes("from './ThemeContext'")) {
    src = src.replace(/(import[^\n]*\n)/, `$1import { useDocsTheme } from './ThemeContext';\n`);
    changed = true;
  }

  // Remove <Sidebar /> usage
  const sidebarUsageRe = /<Sidebar\s*\/>/g;
  if (sidebarUsageRe.test(src)) {
    src = src.replace(sidebarUsageRe, '');
    changed = true;
  }

  // Replace top-level container div with <DocsContent> if a simple pattern is found
  // Common pattern: return (\n    <div className="flex min-h-screen ..."> ... </div> );
  const returnDivRe = /return\s*\(\s*<div[^>]*>\s*/m;
  if (returnDivRe.test(src)) {
    src = src.replace(returnDivRe, 'return (\n    <DocsContent>\n      ');
    // Replace closing div just before );
    // Try to replace the last closing tag of that top-level div; as a heuristic, replace the last \n\s*</div> before \n\s*\); with nothing and add </DocsContent>
    src = src.replace(/\n\s*<\/div>\s*\)\s*;?\s*$/m, '\n    </DocsContent>\n  );');
    changed = true;
  } else if (!src.includes('<DocsContent>')) {
    // If pattern not found and not already wrapped, try a conservative wrap: wrap the main JSX content
    src = src.replace(/return\s*\(/, 'return (\n    <DocsContent>');
    src = src.replace(/\)\s*;?\s*$/, '    </DocsContent>\n  );');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, src, 'utf8');
    return true;
  }
  return false;
}

function main() {
  const files = walk(DOCS_DIR).filter(p => !p.endsWith(path.join('docs', 'layout.tsx')));
  let count = 0;
  for (const f of files) {
    try {
      if (transform(f)) {
        console.log('Updated:', path.relative(ROOT, f));
        count++;
      }
    } catch (e) {
      console.error('Failed:', path.relative(ROOT, f), e.message);
    }
  }
  console.log(`Done. Updated ${count} file(s).`);
}

if (require.main === module) {
  main();
}
