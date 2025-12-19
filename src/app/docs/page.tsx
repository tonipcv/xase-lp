import Sidebar from '../../components/docs/Sidebar';
import CodeBlock from '../../components/docs/CodeBlock';
import Callout from '../../components/docs/Callout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DocsIntroduction() {
  return (
    <div className="flex min-h-screen bg-[#000] text-white">
      <Sidebar />
      <main className="flex-1 px-8 md:px-12 py-10 max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-4">Introduction</h1>
        <p className="text-lg text-gray-400 mb-8">
          XASE is the evidence infrastructure for AI decisions. We provide cryptographic proof that humans supervised AI outputs, enabling compliance with EU AI Act, LGPD, SOC 2, and other regulations.
        </p>

        <h2 className="text-2xl font-light mt-12 mb-4">What XASE Does</h2>
        <div className="overflow-hidden rounded-lg border border-[#222]">
          <table className="w-full text-sm">
            <thead className="bg-[#0a0a0a]">
              <tr>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Capability</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Description</th>
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
                <tr key={i} className={i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-black'}>
                  <td className="px-4 py-3 text-white font-medium">{cap}</td>
                  <td className="px-4 py-3 text-gray-400">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-light mt-12 mb-4">What XASE is NOT</h2>
        <div className="space-y-2">
          {[
            'A workflow tool (we record actions, not manage them)',
            "A model training platform (we don't touch your ML)",
            "A monitoring tool (we don't track model drift)",
            'Blockchain (we use hash chains, much simpler)',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-gray-400">
              <span className="text-red-400 mt-1">✗</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-light mt-12 mb-4">How It Works</h2>
        <div className="bg-[#0a0a0a] border border-[#222] rounded-lg p-6 font-mono text-sm">
          <pre className="text-gray-300 leading-relaxed whitespace-pre">{`Your AI System          XASE                Auditor
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

        <Callout type="tip">
          XASE bundles are verifiable offline. Auditors don't need to call our API or trust our infrastructure.
        </Callout>

        <h2 className="text-2xl font-light mt-12 mb-4">Quick Example</h2>
        <CodeBlock
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
            { title: 'Python SDK', desc: 'Full installation guide', href: '/docs/sdk/python' },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-[#222] rounded-lg hover:border-[#333] transition-colors group"
            >
              <div>
                <div className="font-medium text-white mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#222] flex items-center justify-between text-sm text-gray-500">
          <div>Was this helpful?</div>
          <a href="https://github.com/xase-ai/docs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Edit on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
