'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Search from './Search';
import { useDocsTheme } from '../../app/docs/ThemeContext';

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'Core Concepts', href: '/docs/concepts' },
      { title: 'Authentication', href: '/docs/auth' },
    ],
  },
  {
    title: 'Installation',
    items: [
      { title: 'Python SDK', href: '/docs/sdk/python' },
      { title: 'Node.js SDK', href: '/docs/sdk/nodejs' },
      { title: 'Go SDK', href: '/docs/sdk/go' },
      { title: 'REST API', href: '/docs/api' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Capturing Decisions', href: '/docs/guides/capturing' },
      { title: 'Human-in-the-Loop', href: '/docs/guides/hitl' },
      { title: 'Explainability (XAI)', href: '/docs/guides/xai' },
      { title: 'Model Cards', href: '/docs/guides/model-cards' },
      { title: 'Exporting Evidence', href: '/docs/guides/exports' },
      { title: 'Verifying Bundles', href: '/docs/guides/verify' },
      { title: 'Dashboard & Alerts', href: '/docs/guides/dashboard' },
      { title: 'CLI', href: '/docs/guides/cli' },
      { title: 'Webhooks', href: '/docs/guides/webhooks' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Records', href: '/docs/api/records' },
      { title: 'Interventions', href: '/docs/api/interventions' },
      { title: 'Models', href: '/docs/api/models' },
      { title: 'Exports', href: '/docs/api/exports' },
      { title: 'Alerts', href: '/docs/api/alerts' },
      { title: 'Errors', href: '/docs/api/errors' },
    ],
  },
  {
    title: 'Compliance',
    items: [
      { title: 'EU AI Act', href: '/docs/compliance/eu-ai-act' },
      { title: 'LGPD', href: '/docs/compliance/lgpd' },
      { title: 'SOC 2', href: '/docs/compliance/soc2' },
      { title: 'Evidence Standards', href: '/docs/compliance/standards' },
    ],
  },
  {
    title: 'Security',
    items: [
      { title: 'Architecture', href: '/docs/security/architecture' },
      { title: 'Encryption', href: '/docs/security/encryption' },
      { title: 'Data Residency', href: '/docs/security/residency' },
      { title: 'Certifications', href: '/docs/security/certs' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Changelog', href: '/changelog' },
      { title: 'Status Page', href: 'https://status.xase.ai' },
      { title: 'Support', href: '/docs/support' },
      { title: 'GitHub', href: 'https://github.com/xase-ai' },
    ],
  },
];

function NavSection({ section, level = 0, light = false }: { section: NavItem; level?: number; light?: boolean }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasItems = section.items && section.items.length > 0;

  if (section.href && !hasItems) {
    return (
      <Link
        href={section.href}
        className={`block py-2 px-3 text-sm rounded-lg transition-colors ${light ? 'text-gray-600 hover:text-black hover:bg-gray-100' : 'text-gray-400 hover:text-white hover:bg-[#0a0a0a]'}`}
      >
        {section.title}
      </Link>
    );
  }

  return (
    <div className="mb-1">
      {hasItems ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full flex items-center justify-between py-2 px-3 text-sm font-medium rounded-lg transition-colors ${light ? 'text-gray-700 hover:text-black hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-[#0a0a0a]'}`}
          >
            <span>{section.title}</span>
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {isOpen && (
            <div className="ml-2 mt-1 space-y-1">
              {section.items?.map((item, i) => (
                <NavSection key={i} section={item} level={level + 1} light={light} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={section.href || '#'}
          className={`block py-2 px-3 text-sm rounded-lg transition-colors ${light ? 'text-gray-600 hover:text-black hover:bg-gray-100' : 'text-gray-400 hover:text-white hover:bg-[#0a0a0a]'}`}
        >
          {section.title}
        </Link>
      )}
    </div>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const light = useDocsTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Top Bar with Logo + Menu */}
      <div className={`md:hidden fixed top-0 inset-x-0 z-[60] h-14 backdrop-blur flex items-center gap-3 px-4 border-b ${light ? 'bg-white/80 border-gray-200' : 'bg-black/80 border-white/10'}`}>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`p-2 rounded-lg border ${light ? 'border-gray-300 text-black' : 'border-white/10 text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link href="/" className={`${light ? 'text-black' : 'text-white'} font-light tracking-tight`}>XASE</Link>
        <div className="flex-1 min-w-0">
          <Search light={light} />
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:sticky top-14 md:top-0 left-0 z-40 w-[280px] h-screen overflow-y-auto transition-transform duration-300 border-r ${light ? 'bg-white border-gray-200' : 'bg-black border-white/10'}`}
      >
        <div className="p-6">
          <Link
            href="/"
            className="md:hidden text-xl font-light tracking-tight mb-8 block"
            onClick={() => setMobileOpen(false)}
          >
            XASE
          </Link>
          <nav className="space-y-1">
            {navigation.map((section, i) => (
              <div key={i} onClick={() => setMobileOpen(false)}>
                <NavSection section={section} light={light} />
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
