'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Overview',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'Core Concepts', href: '/docs/concepts' },
    ],
  },
  {
    title: 'Governed Access',
    items: [
      { title: 'Policy Engine', href: '/docs/guides/policy' },
      { title: 'Access Sessions', href: '/docs/guides/sessions' },
      { title: 'Data Streaming', href: '/docs/guides/streaming' },
    ],
  },
  {
    title: 'Evidence',
    items: [
      { title: 'Evidence Bundles', href: '/docs/guides/bundles' },
      { title: 'Audit Trail', href: '/docs/guides/audit' },
      { title: 'Verification', href: '/docs/guides/verify' },
    ],
  },
  {
    title: 'Billing',
    items: [
      { title: 'Usage Metering', href: '/docs/guides/metering' },
      { title: 'Settlement', href: '/docs/guides/settlement' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Access', href: '/docs/api/access' },
      { title: 'Sessions', href: '/docs/api/sessions' },
      { title: 'Evidence', href: '/docs/api/evidence' },
      { title: 'Billing', href: '/docs/api/billing' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'LGPD', href: '/docs/legal/lgpd' },
      { title: 'EU AI Act', href: '/docs/legal/eu-ai-act' },
    ],
  },
];

function NavSection({ section, level = 0 }: { section: NavItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const hasItems = section.items && section.items.length > 0;

  const isActive = section.href === pathname;

  if (section.href && !hasItems) {
    return (
      <Link
        href={section.href}
        className={`block py-1.5 px-3 text-[13px] transition-colors ${
          isActive 
            ? 'text-white' 
            : 'text-neutral-500 hover:text-neutral-300'
        }`}
      >
        {section.title}
      </Link>
    );
  }

  return (
    <div className="mb-2">
      {hasItems ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between py-1.5 px-3 text-[13px] font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <span>{section.title}</span>
            {isOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-neutral-600" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            )}
          </button>
          {isOpen && (
            <div className="mt-1 space-y-0.5">
              {section.items?.map((item, i) => (
                <NavSection key={i} section={item} level={level + 1} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={section.href || '#'}
          className={`block py-1.5 px-3 text-[13px] transition-colors ${
            isActive 
              ? 'text-white' 
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          {section.title}
        </Link>
      )}
    </div>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-[60] h-14 bg-[#0A0A0A] flex items-center gap-3 px-4 border-b border-neutral-800">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-xase.png" alt="Xase" className="h-5 w-5 opacity-90" />
          <span className="text-[13px] font-medium tracking-tight text-neutral-400">XASE</span>
        </Link>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:sticky top-14 md:top-0 left-0 z-40 w-[240px] h-screen overflow-y-auto transition-transform duration-200 border-r bg-[#0A0A0A] border-neutral-800`}
      >
        <div className="p-5 pt-6">
          <nav className="space-y-1">
            {navigation.map((section, i) => (
              <div key={i} onClick={() => setMobileOpen(false)}>
                <NavSection section={section} />
              </div>
            ))}
          </nav>
          
          {/* Footer links */}
          <div className="mt-8 pt-6 border-t border-neutral-800/50">
            <a 
              href="https://github.com/xase-ai" 
              target="_blank" 
              rel="noreferrer"
              className="block py-1.5 px-3 text-[13px] text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="/changelog" 
              className="block py-1.5 px-3 text-[13px] text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Changelog
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
