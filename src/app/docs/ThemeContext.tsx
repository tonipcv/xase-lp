'use client';

import React, { createContext, useContext } from 'react';

type DocsThemeContextValue = {
  light: boolean;
};

const DocsThemeContext = createContext<DocsThemeContextValue>({ light: false });

export function DocsThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsThemeContext.Provider value={{ light: false }}>
      {children}
    </DocsThemeContext.Provider>
  );
}

export function useDocsTheme() {
  return useContext(DocsThemeContext).light;
}
