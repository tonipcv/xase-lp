"use client";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [q, setQ] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: wire to Algolia DocSearch here
    const algoliaUrl = process.env.NEXT_PUBLIC_DOCSEARCH_URL || "https://docsearch.algolia.com/";
    window.open(algoliaUrl, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-xl">
      <SearchIcon className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search docs (Algolia)..."
        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#0a0a0a] border border-[#222] text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-[#333]"
      />
    </form>
  );
}
