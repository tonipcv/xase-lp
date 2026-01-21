'use client';
import DocsContent from '../../components/docs/DocsContent';
import CodeBlock from '../../components/docs/CodeBlock';
import Callout from '../../components/docs/Callout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useDocsTheme } from './ThemeContext';

export default function DocsIntroduction() {
  const light = useDocsTheme();
  return (
    <DocsContent>
      <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-3">Introduction</h1>
      <p className={`text-base md:text-lg mb-6 ${light ? 'text-gray-600' : 'text-gray-400'}`}>
          Evidence infrastructure for AI decisions. Cryptographic proof of human oversight for EU AI Act, LGPD, SOC 2.
        </p>

      <h2 className="text-xl md:text-2xl font-light mt-8 md:mt-12 mb-3">What XASE Does</h2>
      <div className={`overflow-x-auto rounded-lg border ${light ? 'border-gray-200' : 'border-white/10'}`}>
        <table className="w-full text-xs md:text-sm">
          <thead className={light ? 'bg-gray-50' : 'bg-white/5'}>
            <tr>
              <th className={`text-left px-4 py-3 font-medium ${light ? 'text-gray-700' : 'text-gray-400'}`}>Capability</th>
              <th className={`text-left px-4 py-3 font-medium ${light ? 'text-gray-700' : 'text-gray-400'}`}>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Decision Capture', 'Record every AI decision with input, output, and model metadata'],
                ['Human-in-the-Loop', 'Immutable proof of human review, approval, or override'],
                ['Explainability', 'Automatic SHAP/LIME explanations stored with each decision'],
                ['Model Registry', 'Track which model version made each decision'],
                ['Evidence Export', 'Generate offline-verifiable bundles for audits'],
              ].map(([cap, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? (light ? 'bg-gray-50' : 'bg-white/5') : (light ? 'bg-white' : 'bg-black')}>
                  <td className={`px-4 py-3 font-medium ${light ? 'text-gray-900' : 'text-white'}`}>{cap}</td>
                  <td className={`px-4 py-3 ${light ? 'text-gray-600' : 'text-gray-400'}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>

      <h2 className="text-xl md:text-2xl font-light mt-8 md:mt-12 mb-3">What XASE is NOT</h2>
      <div className="space-y-2">
        {[
          'A workflow tool (we record actions, not manage them)',
          "A model training platform (we don't touch your ML)",
          "A monitoring tool (we don't track model drift)",
          'Blockchain (we use hash chains, much simpler)',
        ].map((item, i) => (
          <div key={i} className={`flex items-start gap-3 ${light ? 'text-gray-600' : 'text-gray-400'}`}>
            <span className="text-red-400 mt-1">✗</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-light mt-8 md:mt-12 mb-3">How It Works</h2>
      <div className={`rounded-lg p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto border ${light ? 'bg-gray-50 border-gray-200' : 'bg-[#080808] border-white/10'}`}>
        <pre className={`leading-relaxed whitespace-pre ${light ? 'text-gray-700' : 'text-gray-300'}`}>{`Your AI System          XASE                Auditor
   │                   │                     │
   ├── Decision made ──────────►             │
   │                   │ Record + Hash       │
   │                   │ + Sign              │
   │                   │                     │
   ├── Human reviews ──────────►             │
   │                   │ HITL + Identity     │
   │                   │ + Timestamp         │
   │                   │                     │
   │                   │ ◄────── Request audit
   │                   │                     │
   │                   ├── Export Bundle ───────►
   │                   │                     │
   │                   │         [Verify offline: ✓ Valid]`}</pre>
      </div>

      <Callout type="tip" light={light}>
        XASE bundles are verifiable offline. Auditors don't need to call our API or trust our infrastructure.
      </Callout>

      <h2 className="text-2xl font-light mt-12 mb-4">Quick Example</h2>
      <CodeBlock
        light={light}
          language="python"
          filename="example.py"
          code={`import xase

client = xase.Client(api_key="xase_pk_...")

# 1. Record AI decision
record = client.records.create(
    model_id="credit-model-v1",
    input={"customer_id": "cust_123", "income": 85000},
    output={"decision": "APPROVED", "limit": 25000}
)

# 2. Record human intervention
intervention = client.records.intervene(
    record_id=record.id,
    actor_email="analyst@company.com",
    action="APPROVED",
    reason="Documentation verified"
)

# 3. Export for audit
bundle = client.exports.create(record_id=record.id)
bundle.download("./evidence.zip")`}
      />

      <h2 className="text-2xl font-light mt-12 mb-4">Next Steps</h2>
      <div className="grid gap-4">
          {[
            { title: 'Quickstart', desc: 'Get running in 5 minutes', href: '/docs/quickstart' },
            { title: 'Core Concepts', desc: 'Understand the architecture', href: '/docs/concepts' },
            { title: 'CLI', desc: 'Use the command-line interface', href: '/docs/guides/cli' },
            { title: 'Python SDK', desc: 'Full installation guide', href: '/docs/sdk/python' },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center justify-between p-4 rounded-lg transition-colors group border ${light ? 'bg-gray-50 border-gray-200 hover:border-gray-300' : 'bg-[#0a0a0a] border-[#222] hover:border-[#333]'}`}
          >
            <div>
              <div className={`font-medium mb-1 ${light ? 'text-gray-900' : 'text-white'}`}>{item.title}</div>
              <div className={`text-sm ${light ? 'text-gray-600' : 'text-gray-500'}`}>{item.desc}</div>
            </div>
            <ArrowRight className={`w-5 h-5 transition-colors ${light ? 'text-gray-400 group-hover:text-black' : 'text-gray-600 group-hover:text-white'}`} />
          </Link>
        ))}
      </div>

      <div className={`mt-16 pt-8 border-t flex items-center justify-between text-sm ${light ? 'border-gray-200 text-gray-600' : 'border-[#222] text-gray-500'}`}>
        <div>Was this helpful?</div>
        <a href="https://github.com/xase-ai/docs" target="_blank" rel="noreferrer" className={`transition-colors ${light ? 'hover:text-black' : 'hover:text-white'}`}>
          Edit on GitHub
        </a>
      </div>
    </DocsContent>
  );
}
