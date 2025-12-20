"use client";
import { createContext, useContext } from 'react';

export const DocsThemeContext = createContext(false); // false = dark, true = light

export function useDocsTheme() {
  return useContext(DocsThemeContext);
}
