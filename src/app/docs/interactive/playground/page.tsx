'use client';
"use client";
import { useState } from 'react';
import { useDocsTheme } from '../../ThemeContext';
import DocsContent from '../../../../components/docs/DocsContent';
import CodeBlock from '../../../../components/docs/CodeBlock';
import Callout from '../../../../components/docs/Callout';

export default function PlaygroundPage() {
  const [method, setMethod] = useState('POST');
  const [endpoint, setEndpoint] = useState('/records');
  const [body, setBody] = useState(`{
  "model_id": "credit-model-v2",
  "input": {"customer_id": "cust_123", "income": 85000},
  "output": {"decision": "APPROVED", "limit": 25000},
  "confidence": 0.94
}`);
  const [response, setResponse] = useState('');

  const onRun = () => {
    // Placeholder: simulate API call
    setResponse(`{
  "id": "rec_8a7f3b2c4d5e6f7a",
  "model_id": "credit-model-v2",
  "hash": "sha256:9f86d081884c...",
  "created_at": "2025-01-15T14:32:00.000Z"
}`);
  };

  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">API Playground</h1>
        <p className="text-lg text-gray-400 mb-8">Test XASE API endpoints interactively.</p>

        <Callout type="warning">This is a client-side simulation. Use your real API key in production.</Callout>

        <div className="mt-6 space-y-4">
          <div className="flex gap-2">
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="px-4 py-2 bg-[#0a0a0a] border border-[#222] rounded-lg text-white">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            <input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-[#222] rounded-lg text-white" placeholder="/records" />
            <button onClick={onRun} className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Run</button>
          </div>

          <div>
            <div className="text-sm text-gray-400 mb-2">Request Body</div>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="w-full h-48 p-4 bg-[#0a0a0a] border border-[#222] rounded-lg text-white font-mono text-sm" />
          </div>

          {response && (
            <div>
              <div className="text-sm text-gray-400 mb-2">Response</div>
              <CodeBlock language="json" code={response} />
            </div>
          )}
        </div>
      </main>
    </DocsContent>
  );
}
