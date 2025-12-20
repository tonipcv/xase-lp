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
    
    const props: any = { ...child.props };
    
    // Add light prop if component accepts it
    if (child.type && typeof child.type !== 'string') {
      props.light = light;
    }
    
    // Recursively process children
    if (props.children) {
      props.children = Children.map(props.children, injectLightProp);
    }
    
    return cloneElement(child, props);
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
