"use client";
import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, FileText } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  href: string;
  category: string;
}

const searchIndex: SearchResult[] = [
  { title: 'Introduction', href: '/docs', category: 'Getting Started' },
  { title: 'Quickstart', href: '/docs/quickstart', category: 'Getting Started' },
  { title: 'Core Concepts', href: '/docs/concepts', category: 'Getting Started' },
  { title: 'Authentication', href: '/docs/auth', category: 'Getting Started' },
  { title: 'Python SDK', href: '/docs/sdk/python', category: 'Installation' },
  { title: 'Node.js SDK', href: '/docs/sdk/nodejs', category: 'Installation' },
  { title: 'Go SDK', href: '/docs/sdk/go', category: 'Installation' },
  { title: 'Capturing Decisions', href: '/docs/guides/capturing', category: 'Guides' },
  { title: 'Human-in-the-Loop', href: '/docs/guides/hitl', category: 'Guides' },
  { title: 'Explainability (XAI)', href: '/docs/guides/xai', category: 'Guides' },
  { title: 'Model Cards', href: '/docs/guides/model-cards', category: 'Guides' },
  { title: 'Exporting Evidence', href: '/docs/guides/exports', category: 'Guides' },
  { title: 'Verifying Bundles', href: '/docs/guides/verify', category: 'Guides' },
  { title: 'Dashboard & Alerts', href: '/docs/guides/dashboard', category: 'Guides' },
  { title: 'Webhooks', href: '/docs/guides/webhooks', category: 'Guides' },
  { title: 'Records API', href: '/docs/api/records', category: 'API Reference' },
  { title: 'Interventions API', href: '/docs/api/interventions', category: 'API Reference' },
  { title: 'Models API', href: '/docs/api/models', category: 'API Reference' },
  { title: 'Exports API', href: '/docs/api/exports', category: 'API Reference' },
  { title: 'Alerts API', href: '/docs/api/alerts', category: 'API Reference' },
  { title: 'EU AI Act', href: '/docs/compliance/eu-ai-act', category: 'Compliance' },
  { title: 'LGPD', href: '/docs/compliance/lgpd', category: 'Compliance' },
  { title: 'SOC 2', href: '/docs/compliance/soc2', category: 'Compliance' },
  { title: 'Security Architecture', href: '/docs/security/architecture', category: 'Security' },
  { title: 'Encryption', href: '/docs/security/encryption', category: 'Security' },
  { title: 'Data Residency', href: '/docs/security/residency', category: 'Security' },
  { title: 'Support', href: '/docs/support', category: 'Resources' },
];

export default function Search() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (q.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q.toLowerCase()) ||
        item.category.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered.slice(0, 8));
    setIsOpen(filtered.length > 0);
  }, [q]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full">
      <SearchIcon className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => q.length >= 2 && setIsOpen(true)}
        placeholder="Search docs..."
        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#0a0a0a] border border-white/10 text-xs md:text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-white/20"
      />

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl max-h-[400px] overflow-y-auto z-50">
          {results.map((result, i) => (
            <Link
              key={i}
              href={result.href}
              onClick={() => {
                setIsOpen(false);
                setQ("");
              }}
              className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
            >
              <FileText className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{result.title}</div>
                <div className="text-xs text-gray-500">{result.category}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
