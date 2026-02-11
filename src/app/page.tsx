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

      {/* Manifesto hero (minimal prose) */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[18px] text-neutral-900 leading-relaxed mb-6">AGI will not emerge from internet data alone.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">The breakthroughs people talk about — curing cancer, improving healthcare systems, preventing financial crime, optimizing energy grids — require real world data.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">Clinical records. Call center conversations. Financial logs. Operational systems.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">That data already exists. But it lives inside regulated institutions.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">Hospitals cannot export it. Banks cannot copy it. Enterprises cannot risk leaking it.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">So AI is stuck training on what is public, not what is real.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">If we want AI to move beyond chatbots and into civilization scale impact, it needs lawful access to real world data.</p>

          <p className="text-[16px] text-neutral-900 leading-relaxed font-medium mb-6">That is the bottleneck.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">Xase enables AI Labs to access regulated data without transferring ownership, without breaking compliance, and without months of legal overhead.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">Access is governed in runtime. Policies are enforced by code. Every use generates cryptographic evidence.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">Real world data stays where it is. AI accesses it under rules.</p>

          <p className="text-[16px] text-neutral-800 leading-relaxed mb-6">If AGI is going to solve meaningful problems, it will need access to the systems that actually run the world.</p>

          <p className="text-[16px] text-neutral-900 leading-relaxed font-medium">We are building the infrastructure that makes that access possible.</p>
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
