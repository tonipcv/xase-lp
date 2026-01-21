'use client';
"use client";
import { useCallback, useState } from 'react';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

interface CheckResult {
  label: string;
  status: 'pending' | 'ok' | 'fail';
  detail?: string;
}

export default function InteractiveVerifierPage() {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [results, setResults] = useState<CheckResult[]>([]);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setFileName(file.name);

    // Placeholder verification flow (client-only simulation)
    const steps: CheckResult[] = [
      { label: 'Checking signature', status: 'ok', detail: 'Valid (RSA-SHA256)' },
      { label: 'Checking hash chain', status: 'ok', detail: 'Intact (block 847 of 12,847)' },
      { label: 'Checking timestamps', status: 'ok', detail: 'Consistent' },
      { label: 'Checking model registry', status: 'ok', detail: 'Hash matches credit-scoring-v4.2.1' },
    ];
    setResults(steps);
  }, []);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Interactive: Verify Evidence Bundle</h1>
        <p className="text-lg text-gray-400 mb-8">Drag & drop a .zip bundle to simulate verification checks in the browser.</p>

        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${dragOver ? 'border-white bg-[#0a0a0a]' : 'border-[#222] bg-[#0a0a0a]/50'}`}
        >
          <div className="text-gray-400 mb-2">Drop your evidence .zip here</div>
          <div className="text-xs text-gray-600">This is a local simulation for UI. Offline verification is done with verify.sh</div>
        </div>

        {fileName && (
          <div className="mt-6">
            <div className="text-sm text-gray-400 mb-2">File: {fileName}</div>
            <div className="bg-[#0a0a0a] border border-[#222] rounded-xl p-4">
              {results.map((r, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#111] last:border-0">
                  <div className="text-gray-300">{r.label}</div>
                  <div className="text-gray-500 text-sm">{r.detail}</div>
                  <div className={`text-sm ${r.status === 'ok' ? 'text-green-400' : r.status === 'fail' ? 'text-red-400' : 'text-gray-500'}`}>
                    {r.status.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-green-400">RESULT: Evidence bundle is AUTHENTIC</div>
          </div>
        )}

        <h2 className="text-2xl font-light mt-10 mb-3">Offline Verification</h2>
        <CodeBlock language="bash" code={`unzip evidence_bundle.zip\n./verify.sh`} />
        <Callout type="info">This UI simulates checks for demo purposes. Auditors verify offline with the provided shell script.</Callout>
      </main>
    </DocsContent>
  );
}
