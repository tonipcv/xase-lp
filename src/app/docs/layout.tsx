import Link from 'next/link';
import DocsHeaderClient from './DocsHeaderClient';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      {/* Header - Desktop only */}
      <header className="hidden md:block sticky top-0 z-50 bg-[#0A0A0A] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-xase.png" alt="XASE" className="h-5 w-5 opacity-90" />
            <span className="text-[13px] font-medium tracking-tight text-neutral-400">XASE</span>
          </Link>
          <nav className="flex items-center gap-8 text-[13px] text-neutral-500">
            <DocsHeaderClient />
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
