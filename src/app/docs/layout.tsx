"use client";
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Search from '../../components/docs/Search';
import { DocsThemeContext } from './ThemeContext';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [light, setLight] = useState(false);
  return (
    <DocsThemeContext.Provider value={light}>
      <div className={`min-h-screen font-sans ${light ? 'bg-white text-black' : 'bg-[#000000] text-white'}`}>
      <div className={`sticky top-0 z-50 backdrop-blur border-b ${light ? 'bg-white/80 border-gray-200' : 'bg-[#000]/80 border-white/10'}`}>
        {/* Mobile: compact single row */}
        <div className="md:hidden max-w-7xl mx-auto px-4 py-3 flex items-center gap-2">
          <div className="flex-1">
            <Search light={light} />
          </div>
          <button
            onClick={() => setLight(!light)}
            className={`p-2 rounded-lg border ${light ? 'border-gray-300 bg-white text-black' : 'border-white/10 bg-white/5 text-white'}`}
            aria-label="Toggle theme"
          >
            {light ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
        {/* Desktop: two rows with title then logo + search */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo-xase.png" alt="Xase logo" className="h-5 w-5" />
              <span className="font-light tracking-tight text-sm text-[#BFC3C6]">XASE</span>
            </a>
            <div className="flex-1 max-w-xl">
              <Search light={light} />
            </div>
            <button
              onClick={() => setLight(!light)}
              className={`p-2 rounded-lg border ${light ? 'border-gray-300 bg-white text-black' : 'border-white/10 bg-white/5 text-white'}`}
              aria-label="Toggle theme"
            >
              {light ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {children}
      </div>
    </DocsThemeContext.Provider>
  );
}
