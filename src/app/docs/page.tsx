import DocsContent from '../../components/docs/DocsContent';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DocsIntroduction() {
  return (
    <DocsContent>
      {/* Hero */}
      <div className="mb-20">
        <h1 className="text-[32px] md:text-[40px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Documentation
        </h1>
        <p className="text-[18px] text-neutral-400 leading-relaxed max-w-2xl mb-8">
          Xase is the infrastructure where AI use of real data becomes <span className="text-white">legally valid</span>, <span className="text-white">governed at runtime</span>, and <span className="text-white">billed per use</span>.
        </p>
        <div className="text-[14px] text-neutral-500 leading-relaxed max-w-2xl">
          Xase doesn't sell data. Xase doesn't sell compliance.<br />
          Xase sells <span className="text-neutral-300">governed access</span> + <span className="text-neutral-300">legal proof of use</span>.
        </div>
      </div>

      {/* The Problem */}
      <section className="mb-20">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          The problem
        </h2>
        <div className="space-y-4 text-[15px] text-neutral-400 leading-relaxed max-w-2xl">
          <p>
            AI needs <span className="text-white">real data</span> — voice, video, logs, documents.
          </p>
          <p>
            This data is <span className="text-white">sensitive, regulated, and litigable</span>.
          </p>
          <p>
            When AI uses the data, there's no executable proof of:
          </p>
          <ul className="space-y-2 ml-4 text-neutral-500">
            <li>— who authorized the access</li>
            <li>— for what purpose</li>
            <li>— for how long</li>
            <li>— under which regulatory constraints</li>
          </ul>
          <p className="pt-2">
            This becomes <span className="text-white">open legal risk</span> — LGPD, EU AI Act, lawsuits, audits.
          </p>
          <p className="text-neutral-600">
            Nobody trusts "contract + promise".
          </p>
        </div>
      </section>

      {/* What Xase Does */}
      <section className="mb-20">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What Xase does
        </h2>
        <p className="text-[15px] text-neutral-400 mb-10">
          Xase enters <span className="text-white">at the moment of use</span>, not after.
        </p>
        
        <div className="space-y-12">
          {/* Policy Engine */}
          <div>
            <div className="text-[13px] font-mono text-neutral-600 mb-3">01</div>
            <h3 className="text-[17px] font-medium text-white mb-3">Policy Engine in runtime</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Decides at access time:
            </p>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-4">
              <li>— which model can access</li>
              <li>— for what purpose (training, prod, QA)</li>
              <li>— for how long</li>
              <li>— with which regulatory restrictions</li>
            </ul>
            <p className="text-[14px] text-neutral-400 mt-4">
              No valid policy → <span className="text-white">access doesn't happen</span>.
            </p>
          </div>

          {/* Evidence Bundle */}
          <div>
            <div className="text-[13px] font-mono text-neutral-600 mb-3">02</div>
            <h3 className="text-[17px] font-medium text-white mb-3">Immutable Evidence Bundle</h3>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
              Every access automatically generates:
            </p>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-4">
              <li>— cryptographic logs</li>
              <li>— auditable trail</li>
              <li>— exportable package</li>
              <li>— defensible proof for audit, regulator, or court</li>
            </ul>
            <p className="text-[14px] text-neutral-400 mt-4">
              Not a manual report. <span className="text-white">Technical evidence with legal value</span>.
            </p>
          </div>

          {/* Billing */}
          <div>
            <div className="text-[13px] font-mono text-neutral-600 mb-3">03</div>
            <h3 className="text-[17px] font-medium text-white mb-3">Automatic billing per use</h3>
            <ul className="space-y-2 text-[14px] text-neutral-500 ml-4">
              <li>— charge by hour / execution / event</li>
              <li>— no manual negotiation</li>
              <li>— no subjective invoices</li>
            </ul>
            <p className="text-[14px] text-neutral-400 mt-4">
              Use happened → charged → proof recorded.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-20">
        <div className="bg-[#111111] border border-neutral-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
            <div className="w-3 h-3 rounded-full bg-neutral-700" />
            <div className="w-3 h-3 rounded-full bg-neutral-700" />
            <div className="w-3 h-3 rounded-full bg-neutral-700" />
            <span className="ml-3 text-[12px] text-neutral-500 font-mono">train.py</span>
          </div>
          <pre className="p-6 text-[13px] leading-relaxed font-mono overflow-x-auto">
<code className="text-neutral-300">{`import xase

client = xase.Client(api_key="sk_...")

# Request governed access
session = client.access(
    dataset="medical-records-2024",
    purpose="model-training",
    duration="30d"
)

# Train without downloading data
for batch in session.stream():
    model.train(batch)

# Evidence generated automatically
print(session.evidence_url)
# → https://xase.ai/evidence/bundle_a8f2c...`}</code>
          </pre>
        </div>
      </section>

      {/* The Shift */}
      <section className="mb-20">
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-8">
          What changes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-neutral-800/50 rounded-xl">
            <div className="text-[12px] text-neutral-600 uppercase tracking-wider mb-4">Before</div>
            <p className="text-[15px] text-neutral-500 italic">
              "Can I use this data?"
            </p>
          </div>
          <div className="p-6 border border-neutral-800 rounded-xl bg-white/[0.02]">
            <div className="text-[12px] text-neutral-500 uppercase tracking-wider mb-4">After Xase</div>
            <p className="text-[15px] text-white">
              "If it went through Xase, it's authorized, proven, and paid."
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-3 text-[14px] text-neutral-500">
          <p>This creates:</p>
          <ul className="space-y-2 ml-4">
            <li>— <span className="text-neutral-300">Legal peace</span> — use is defensible</li>
            <li>— <span className="text-neutral-300">Cost predictability</span> — no surprise invoices</li>
            <li>— <span className="text-neutral-300">Regulatory lock-in</span> — hard to switch off</li>
          </ul>
        </div>
      </section>

      {/* For AI Labs / Data Holders */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[20px] font-medium tracking-tight text-white mb-4">
              For AI Labs
            </h2>
            <ul className="space-y-3 text-[14px] text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">—</span>
                Access real data without legal exposure
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">—</span>
                Compliance proof for auditors
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">—</span>
                Usage-based pricing, no minimums
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] font-medium tracking-tight text-white mb-4">
              For Data Holders
            </h2>
            <ul className="space-y-3 text-[14px] text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">—</span>
                Monetize data without selling it
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">—</span>
                Full control, revoke anytime
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">—</span>
                Automatic billing and settlement
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
          Get started
        </h2>
        <div className="space-y-3">
          {[
            { title: 'Quickstart', desc: 'Integrate in 10 minutes', href: '/docs/quickstart' },
            { title: 'Core Concepts', desc: 'Policy engine, evidence bundles, billing', href: '/docs/concepts' },
            { title: 'API Reference', desc: 'Access, sessions, evidence', href: '/docs/api/records' },
            { title: 'Compliance', desc: 'LGPD, EU AI Act, SOC 2', href: '/docs/compliance' },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors group"
            >
              <div>
                <span className="text-[15px] text-white">{item.title}</span>
                <span className="text-[14px] text-neutral-600 ml-3">{item.desc}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-neutral-800/50 flex items-center justify-between text-[13px] text-neutral-600">
        <span>© 2025 Xase</span>
        <a href="mailto:founders@xase.ai" className="hover:text-neutral-400 transition-colors">
          founders@xase.ai
        </a>
      </div>
    </DocsContent>
  );
}
