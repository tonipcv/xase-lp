import Sidebar from './Sidebar';
import { ReactNode } from 'react';

interface DocsContentProps {
  children: ReactNode;
}

export default function DocsContent({ children }: DocsContentProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 w-full md:w-auto px-6 md:px-12 py-8 md:py-12 max-w-full md:max-w-[800px]">
        {children}
      </main>
    </div>
  );
}
