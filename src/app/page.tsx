'use client';
import { useState } from 'react';
import BookCallModal from '../components/BookCallModal';

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-xase.png" alt="XASE" className="h-5 w-5 opacity-90" />
            <span className="text-[15px] font-medium tracking-tight text-neutral-300">XASE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-neutral-500">
            <a href="/docs" className="hover:text-neutral-300 transition-colors">Docs</a>
            <a href="/pricing" className="hover:text-neutral-300 transition-colors">Pricing</a>
          </nav>
          <button
            onClick={() => setBookOpen(true)}
            className="h-8 px-4 text-[13px] font-medium bg-white text-black rounded-md hover:bg-neutral-200 transition-colors"
          >
            Get access
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[56px] md:text-[72px] font-medium tracking-[-0.04em] leading-[1.05] text-white mb-6">
            Data access
            <br />
            <span className="text-neutral-500">without data transfer.</span>
          </h1>
          <p className="text-[18px] text-neutral-400 leading-relaxed max-w-xl mb-10">
            AI labs access real-world datasets for training. Data holders keep ownership and control. Every access is policy-evaluated with cryptographic proof.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setBookOpen(true)}
              className="h-11 px-6 text-[14px] font-medium bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Request demo
            </button>
            <a
              href="/docs"
              className="h-11 px-6 text-[14px] font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Documentation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
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

# Train without downloading
for batch in session.stream():
    model.train(batch)

# Evidence generated automatically
print(session.evidence_url)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-[13px] font-mono text-neutral-600 mb-3">01</div>
              <h3 className="text-[17px] font-medium text-white mb-2">Define policy</h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                Data holders set access rules: who, what purpose, how long, at what price.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-mono text-neutral-600 mb-3">02</div>
              <h3 className="text-[17px] font-medium text-white mb-2">Request access</h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                AI labs authenticate and specify intent. Policy is evaluated at runtime.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-mono text-neutral-600 mb-3">03</div>
              <h3 className="text-[17px] font-medium text-white mb-2">Train with proof</h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed">
                Data never leaves. Every access logged with cryptographic evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[28px] font-medium tracking-tight text-white mb-4">
                For AI Labs
              </h2>
              <ul className="space-y-3 text-[15px] text-neutral-400">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1">—</span>
                  Access real data without legal exposure
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1">—</span>
                  Compliance proof for auditors
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1">—</span>
                  Usage-based pricing, no minimums
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[28px] font-medium tracking-tight text-white mb-4">
                For Data Holders
              </h2>
              <ul className="space-y-3 text-[15px] text-neutral-400">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1">—</span>
                  Monetize data without selling it
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1">—</span>
                  Full control, revoke anytime
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-600 mt-1">—</span>
                  Automatic billing and settlement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-neutral-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[36px] md:text-[44px] font-medium tracking-tight text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-[16px] text-neutral-500 mb-8">
            Talk to us about your use case.
          </p>
          <button
            onClick={() => setBookOpen(true)}
            className="h-11 px-8 text-[14px] font-medium bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Get a demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-[13px] text-neutral-600">
          <span>© 2025 Xase</span>
          <a href="mailto:founders@xase.ai" className="hover:text-neutral-400 transition-colors">
            founders@xase.ai
          </a>
        </div>
      </footer>

      <BookCallModal
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
        plan="Demo"
        redirectUrl="/"
      />
    </div>
  );
}
