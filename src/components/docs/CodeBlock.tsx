'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  light?: boolean;
}

export default function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = false,
  highlightLines = [],
  light = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={`rounded-lg overflow-hidden my-4 border ${light ? 'bg-gray-50 border-gray-200' : 'bg-[#111111] border-[#222222]'}`}>
      {filename && (
        <div className={`flex items-center justify-between px-4 py-2 border-b ${light ? 'bg-gray-100 border-gray-200' : 'bg-[#0a0a0a] border-[#222222]'}`}>
          <span className={`text-xs font-mono ${light ? 'text-gray-600' : 'text-gray-500'}`}>{filename}</span>
          <span className={`text-xs ${light ? 'text-gray-500' : 'text-gray-600'}`}>{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className={`absolute top-3 right-3 p-2 rounded-lg border transition-colors ${light ? 'bg-white border-gray-300 hover:bg-gray-50' : 'bg-[#0a0a0a] border-[#222222] hover:bg-[#111111]'}`}
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className={`w-4 h-4 ${light ? 'text-gray-600' : 'text-gray-400'}`} />
          )}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="font-mono text-sm leading-relaxed">
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div
                  key={i}
                  className={`${
                    highlightLines.includes(i + 1) ? (light ? 'bg-gray-100' : 'bg-[#1a1a1a]') : ''
                  }`}
                >
                  <span className={`inline-block w-8 select-none ${light ? 'text-gray-500' : 'text-gray-600'}`}>
                    {i + 1}
                  </span>
                  <span className={light ? 'text-gray-800' : 'text-gray-300'}>{line}</span>
                </div>
              ))
            ) : (
              <span className={light ? 'text-gray-800' : 'text-gray-300'}>{code}</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
