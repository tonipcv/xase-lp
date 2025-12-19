"use client";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function ToC() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const container = document.getElementById("docs-content") || document.body;
    const nodes = Array.from(
      container.querySelectorAll("h1, h2, h3")
    ) as HTMLHeadingElement[];
    const list: Heading[] = nodes
      .filter((n) => n.innerText && n.id !== "")
      .map((n) => ({ id: n.id, text: n.innerText, level: Number(n.tagName.substring(1)) }));

    // Ensure IDs exist
    nodes.forEach((n) => {
      if (!n.id) n.id = n.innerText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    });

    setHeadings(list);
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block w-64 sticky top-0 h-screen overflow-y-auto border-l border-[#222222]">
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-3">On this page</div>
        <nav className="space-y-1 text-sm">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`block px-2 py-1 rounded hover:bg-[#0a0a0a] text-gray-400 hover:text-white transition-colors ${
                h.level === 1 ? "ml-0" : h.level === 2 ? "ml-2" : "ml-4"
              }`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
