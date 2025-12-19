'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

function NavSection({ section, level = 0 }: { section: NavItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasItems = section.items && section.items.length > 0;

  if (section.href && !hasItems) {
    return (
      <Link
        href={section.href}
        className="block py-2 px-3 text-sm text-gray-400 hover:text-white hover:bg-[#0a0a0a] rounded-lg transition-colors"
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
            className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#0a0a0a] rounded-lg transition-colors"
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
                <NavSection key={i} section={item} level={level + 1} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={section.href || '#'}
          className="block py-2 px-3 text-sm text-gray-400 hover:text-white hover:bg-[#0a0a0a] rounded-lg transition-colors"
        >
          {section.title}
        </Link>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[280px] border-r border-[#222222] h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="text-xl font-light tracking-tight mb-8 block">
          XASE
        </Link>
        <nav className="space-y-1">
          {navigation.map((section, i) => (
            <NavSection key={i} section={section} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
