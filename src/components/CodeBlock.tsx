'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = 'typescript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0d0e10] border border-[#2d2d2d] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#2d2d2d]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          {filename && <span className="text-xs text-gray-600 ml-2 font-mono">{filename}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-white transition-colors p-1"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto">
        <code className="font-mono text-sm leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}
