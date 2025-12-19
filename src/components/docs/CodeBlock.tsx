'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export default function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = false,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden my-4">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#222222] bg-[#0a0a0a]">
          <span className="text-xs text-gray-500 font-mono">{filename}</span>
          <span className="text-xs text-gray-600">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-[#0a0a0a] border border-[#222222] hover:bg-[#111111] transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="font-mono text-sm leading-relaxed">
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div
                  key={i}
                  className={`${
                    highlightLines.includes(i + 1) ? 'bg-[#1a1a1a]' : ''
                  }`}
                >
                  <span className="inline-block w-8 text-gray-600 select-none">
                    {i + 1}
                  </span>
                  <span className="text-gray-300">{line}</span>
                </div>
              ))
            ) : (
              <span className="text-gray-300">{code}</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
