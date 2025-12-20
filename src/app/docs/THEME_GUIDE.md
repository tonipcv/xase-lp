# Docs Theme System Guide

## Overview
The docs section (`/docs`) has a light/dark theme toggle that is **scoped only to docs pages**. The rest of the site remains unchanged.

## How It Works

### 1. Theme Context
- **File**: `src/app/docs/ThemeContext.tsx`
- Provides `useDocsTheme()` hook that returns `boolean` (false = dark, true = light)

### 2. Layout with Toggle
- **File**: `src/app/docs/layout.tsx`
- Manages theme state with `useState`
- Renders Sun/Moon icon toggle button
- Wraps children with `DocsThemeContext.Provider`
- Uses system font (`font-sans`), NOT Lora

### 3. Theme-Aware Components
All shared docs components accept an optional `light?: boolean` prop:

- **Sidebar** (`src/components/docs/Sidebar.tsx`)
  - Navigation items change colors
  - Background/borders adapt
  
- **Search** (`src/components/docs/Search.tsx`)
  - Input and dropdown styles adapt
  
- **CodeBlock** (`src/components/docs/CodeBlock.tsx`)
  - Background, borders, text colors change
  - Copy button adapts
  
- **Callout** (`src/components/docs/Callout.tsx`)
  - Text color adapts (icons stay colored)

### 4. DocsContent Wrapper
- **File**: `src/components/docs/DocsContent.tsx`
- Wraps page content with Sidebar
- Automatically injects `light` prop into child components
- Simplifies page implementation

## Creating a New Docs Page

### Pattern 1: Using DocsContent (Recommended)
```tsx
'use client';
import DocsContent from '../../components/docs/DocsContent';
import CodeBlock from '../../components/docs/CodeBlock';
import Callout from '../../components/docs/Callout';
import { useDocsTheme } from './ThemeContext';

export default function MyDocsPage() {
  const light = useDocsTheme();
  
  return (
    <DocsContent>
      <h1>My Page</h1>
      <p className={light ? 'text-gray-600' : 'text-gray-400'}>
        Description text
      </p>
      
      <CodeBlock light={light} code="..." />
      <Callout light={light} type="info">Note</Callout>
      
      {/* Tables, divs, etc. - use conditional classes */}
      <div className={`border ${light ? 'border-gray-200 bg-gray-50' : 'border-white/10 bg-[#0a0a0a]'}`}>
        Content
      </div>
    </DocsContent>
  );
}
```

### Pattern 2: Manual (for custom layouts)
```tsx
'use client';
import Sidebar from '../../components/docs/Sidebar';
import { useDocsTheme } from './ThemeContext';

export default function CustomPage() {
  const light = useDocsTheme();
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-12 py-10">
        {/* Your content with conditional classes */}
      </main>
    </div>
  );
}
```

## Color Palette Reference

### Dark Mode (default)
- Background: `bg-[#000000]`, `bg-black`, `bg-[#0a0a0a]`, `bg-[#080808]`
- Text: `text-white`, `text-gray-300`, `text-gray-400`
- Borders: `border-white/10`, `border-[#222]`

### Light Mode
- Background: `bg-white`, `bg-gray-50`, `bg-gray-100`
- Text: `text-black`, `text-gray-900`, `text-gray-700`, `text-gray-600`
- Borders: `border-gray-200`, `border-gray-300`

## Common Conditional Classes

```tsx
// Text
className={light ? 'text-gray-600' : 'text-gray-400'}
className={light ? 'text-gray-900' : 'text-white'}

// Backgrounds
className={light ? 'bg-gray-50' : 'bg-[#0a0a0a]'}
className={light ? 'bg-white' : 'bg-black'}

// Borders
className={light ? 'border-gray-200' : 'border-white/10'}

// Hover states
className={light ? 'hover:bg-gray-100' : 'hover:bg-white/5'}
className={light ? 'hover:text-black' : 'hover:text-white'}
```

## Important Notes

1. **Always use `useDocsTheme()`** - Don't create separate theme state
2. **System font only** - Docs use `font-sans`, not Lora
3. **Pass `light` prop** - All shared components need it
4. **Conditional classes** - Use ternary for all theme-dependent styles
5. **Test both modes** - Always verify light and dark appearance

## Checklist for New Pages

- [ ] Import `useDocsTheme` from `'./ThemeContext'`
- [ ] Call `const light = useDocsTheme()` at component top
- [ ] Wrap with `<DocsContent>` or include `<Sidebar />`
- [ ] Pass `light={light}` to CodeBlock, Callout components
- [ ] Use conditional classes for all backgrounds, text, borders
- [ ] Test toggle button - verify all elements change
- [ ] Check mobile responsiveness in both themes
