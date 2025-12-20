'use client';
import { useDocsTheme } from '../../app/docs/ThemeContext';
import Sidebar from './Sidebar';
import { ReactNode, cloneElement, isValidElement, Children } from 'react';

interface DocsContentProps {
  children: ReactNode;
}

export default function DocsContent({ children }: DocsContentProps) {
  const light = useDocsTheme();

  // Recursively inject light prop into all components
  const injectLightProp = (child: ReactNode): ReactNode => {
    if (!isValidElement(child)) return child;

    const origProps = (child as any).props as Record<string, any> | undefined;
    const newProps: Record<string, any> = origProps ? { ...origProps } : {};

    // Add light prop for composite components (not DOM strings)
    if ((child as any).type && typeof (child as any).type !== 'string') {
      newProps.light = light;
    }

    // Recurse into children if present
    if (newProps.children) {
      newProps.children = Children.map(newProps.children, injectLightProp);
    }

    return cloneElement(child, newProps);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        {Children.map(children, injectLightProp)}
      </main>
    </div>
  );
}
