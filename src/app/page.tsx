'use client';
import { useState } from 'react';
import BookCallModal from '../components/BookCallModal';

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-xase.png" alt="XASE" className="h-5 w-5 opacity-90" />
            <span className="text-[15px] font-medium tracking-tight text-neutral-900">XASE</span>
          </div>
          <nav className="flex md:hidden items-center gap-8 text-[13px] text-neutral-600">
            <a href="/docs" className="hover:text-neutral-900 transition-colors">Docs</a>
            <a href="/pricing" className="hover:text-neutral-900 transition-colors">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Manifesto hero (minimal, wiki/arXiv vibe) */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[14px] text-neutral-600 mb-5">To those building AI that matters,</p>
          <h1 className="text-[34px] md:text-[40px] font-medium tracking-[-0.02em] leading-[1.15] text-neutral-900 mb-6">
            What will make AI capable of curing cancer?
          </h1>
          <p className="text-[18px] text-neutral-900 leading-relaxed mb-2">Not bigger models.</p>
          <p className="text-[18px] text-neutral-900 leading-relaxed mb-4">Not more scraped text.</p>
          <p className="text-[20px] text-neutral-900 leading-relaxed font-medium mb-8">Real-world data.</p>

          <ul className="space-y-2 text-[16px] text-neutral-800 mb-8">
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Clinical voice records.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Medical imaging.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Operational hospital logs.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Scientific experiments.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Financial systems.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Industrial processes.</li>
          </ul>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-4">
            The breakthroughs we want from AI — in healthcare, energy, science, infrastructure — require access to reality.
          </p>
          <p className="text-[16px] text-neutral-800 leading-relaxed mb-8">But reality is regulated.</p>

          <ul className="space-y-2 text-[16px] text-neutral-800 mb-8">
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Hospitals cannot just “share data.”</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Banks cannot just “export records.”</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Governments cannot just “upload systems.”</li>
          </ul>

          <ul className="space-y-2 text-[16px] text-neutral-800 mb-8">
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Every access must be justified.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Every use constrained.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Every decision defensible.</li>
          </ul>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-4">
            Without enforcement, AI is limited to the surface of the internet.
          </p>
          <p className="text-[16px] text-neutral-800 leading-relaxed mb-8">
            With governed access, AI can safely learn from the systems that actually matter.
          </p>

          <p className="text-[16px] text-neutral-900 leading-relaxed font-medium mb-4">
            Xase makes real-world data usable by AI — without transferring ownership, without violating compliance, without losing control.
          </p>

          <ul className="space-y-2 text-[16px] text-neutral-800 mb-8">
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Policy executes in runtime.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Consent is provable.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Usage is metered.</li>
            <li className="flex items-start gap-3"><span className="text-neutral-400">—</span>Evidence is cryptographic.</li>
          </ul>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-4">
            If AI is going to solve the hardest problems of our time, it must move beyond public data.
          </p>
          <p className="text-[16px] text-neutral-900 leading-relaxed font-medium mb-4">
            It must access the real world — legally.
          </p>
          <p className="text-[16px] text-neutral-800 leading-relaxed mb-8">
            We are building the infrastructure that makes that possible.
          </p>
          <p className="text-[16px] text-neutral-700 leading-relaxed mb-1">With respect,</p>
          <p className="text-[16px] text-neutral-900 leading-relaxed font-medium">Xase</p>
        </div>
      </section>

      {/* Code Example */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-200">
              <div className="w-3 h-3 rounded-full bg-neutral-300" />
              <div className="w-3 h-3 rounded-full bg-neutral-300" />
              <div className="w-3 h-3 rounded-full bg-neutral-300" />
              <span className="ml-3 text-[12px] text-neutral-500 font-mono">train.py</span>
            </div>
            <pre className="p-6 text-[13px] leading-relaxed font-mono overflow-x-auto">
<code className="text-neutral-800">{`import xase

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
      <section className="py-24 px-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[13px] font-medium text-neutral-400 uppercase tracking-wider mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-[13px] font-mono text-neutral-400 mb-3">01</div>
              <h3 className="text-[17px] font-medium text-neutral-900 mb-2">Define policy</h3>
              <p className="text-[14px] text-neutral-700 leading-relaxed">
                Data holders set access rules: who, what purpose, how long, at what price.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-mono text-neutral-400 mb-3">02</div>
              <h3 className="text-[17px] font-medium text-neutral-900 mb-2">Request access</h3>
              <p className="text-[14px] text-neutral-700 leading-relaxed">
                AI labs authenticate and specify intent. Policy is evaluated at runtime.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-mono text-neutral-400 mb-3">03</div>
              <h3 className="text-[17px] font-medium text-neutral-900 mb-2">Train with proof</h3>
              <p className="text-[14px] text-neutral-700 leading-relaxed">
                Data never leaves. Every access logged with cryptographic evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[28px] font-medium tracking-tight text-neutral-900 mb-4">
                For AI Labs
              </h2>
              <ul className="space-y-3 text-[15px] text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1">—</span>
                  Access real data without legal exposure
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1">—</span>
                  Compliance proof for auditors
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1">—</span>
                  Usage-based pricing, no minimums
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[28px] font-medium tracking-tight text-neutral-900 mb-4">
                For Data Holders
              </h2>
              <ul className="space-y-3 text-[15px] text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1">—</span>
                  Monetize data without selling it
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1">—</span>
                  Full control, revoke anytime
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1">—</span>
                  Automatic billing and settlement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-neutral-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[36px] md:text-[44px] font-medium tracking-tight text-neutral-900 mb-4">
            Ready to start?
          </h2>
          <p className="text-[16px] text-neutral-700 mb-8">
            Talk to us about your use case.
          </p>
          <button
            onClick={() => setBookOpen(true)}
            className="h-11 px-8 text-[14px] font-medium bg-black text-white rounded-lg hover:bg-neutral-900 transition-colors"
          >
            Get a demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-[13px] text-neutral-500">
          <span>© 2025 Xase</span>
          <a href="mailto:founders@xase.ai" className="hover:text-neutral-700 transition-colors">
            founders@xase.ai
          </a>
        </div>
      </footer>

      <BookCallModal
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
        plan="Demo"
        redirectUrl="https://app.cal.eu/xaseai/30min?overlayCalendar=true"
      />
    </div>
  );
}
