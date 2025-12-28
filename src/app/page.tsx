'use client';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import { ArrowRight, Menu, X } from 'lucide-react';
import Terminal from '../components/Terminal';
import CodeBlock from '../components/CodeBlock';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import BookCallForm from '../components/BookCallForm';
import BookCallModal from '../components/BookCallModal';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Home() {
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [name, setName] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setMenuOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white ${inter.variable} font-sans selection:bg-white/20`}>
      {/* Subtle background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] left-[20%] w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
      {/* Glassmorphism Nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-xase.png" alt="Xase logo" className="h-5 w-5" />
            <span className="font-light tracking-tight text-sm text-[#BFC3C6]">XASE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[13px] text-gray-400">
            <a href="/docs" className="hover:text-white transition-colors">Docs</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="https://github.com/xaseai/xase" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://app.xase.ai/login?callbackUrl=%2F" className="text-[13px] text-gray-400 hover:text-white transition-colors">Log in</a>
            <button onClick={() => { setWaitlistSubmitted(false); setWaitlistOpen(true); }} className="text-[13px] bg-white text-black px-3 py-1.5 rounded-full font-medium hover:bg-gray-200 transition-all">Sign up</button>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-300"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur">
            <nav className="px-6 py-4 flex flex-col gap-3 text-sm text-gray-300">
              <a href="/docs" onClick={() => setMenuOpen(false)} className="py-2">Docs</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)} className="py-2">Pricing</a>
              <a href="https://github.com/xaseai/xase" target="_blank" rel="noreferrer" className="py-2">GitHub</a>
              <button onClick={() => { setWaitlistSubmitted(false); setWaitlistOpen(true); }} className="mt-2 w-full bg-white text-black px-4 py-2 rounded-full font-medium">Sign up</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] text-gray-400 mb-8">
            <span className="bg-white/10 text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">NEW</span>
            Evidence Bundle 2.0 is out
            <ArrowRight className="w-3 h-3" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-8 leading-[1.12]">
            The Evidence Layer<br />for AI Decisions.
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
            Cryptographic proof of human oversight. Built for the auditors of the EU AI Act and LGPD.
          </p>

          <div className="hidden sm:flex gap-4 items-center mb-20">
            <a href="/docs" className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all inline-flex items-center justify-center">
              Start Building
            </a>
            <button onClick={() => { setWaitlistSubmitted(false); setWaitlistOpen(true); }} className="h-12 px-8 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
              Join Waitlist
            </button>
          </div>

          {/* Terminal Showcase */}
          <div className="w-full max-w-5xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-[#080808] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="p-6">
                <Terminal
                  lines={[
                    '$ xase verify evidence_bundle.zip',
                    '',
                    '✓ Decision signature valid',
                    '✓ Human intervention verified (João Silva, 14:32 UTC)',
                    '✓ Model hash matches registry (credit-v4.2.1)',
                    '✓ Chain integrity: 847 blocks, no tampering detected',
                    '',
                    'VERDICT: Evidence is court-admissible.'
                  ]}
                  speed={50}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            12M+ decisions verified • $2.1B in protected transactions • 0 audit failures
          </div>
        </div>
      </section>

      

      {/* Integration With - Static Minimal */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-xs tracking-wider text-gray-600 mb-6">INTEGRATION WITH</div>
          {/* Mobile: minimal marquee */}
          <div className="block md:hidden relative overflow-hidden">
            <div className="integration-track flex items-center gap-8 py-1">
              {(() => {
                const names = [
                  '1.svg',
                  'DeepMind_logo.png',
                  'OpenAI_Logo.svg (2).png',
                  'Pytorch_logo.png',
                  'grok-3.svg',
                  'tensorflowjs.png',
                ];
                const all = [...names, ...names];
                return all.map((n, i) => (
                  <div
                    key={`m-${i}`}
                    className="h-6 w-[90px] flex items-center justify-center"
                    title={n.replace(/\.[^/.]+$/, '')}
                  >
                    <div
                      aria-label={n.replace(/\.[^/.]+$/, '')}
                      className="w-full h-full"
                      style={{
                        backgroundColor: '#BFC3C6',
                        WebkitMaskImage: `url("/integration/${encodeURIComponent(n)}")`,
                        maskImage: `url("/integration/${encodeURIComponent(n)}")`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                      }}
                    />
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* Desktop: static grid */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-10">
            {(() => {
              const names = [
                '1.svg',
                'DeepMind_logo.png',
                'OpenAI_Logo.svg (2).png',
                'Pytorch_logo.png',
                'grok-3.svg',
                'tensorflowjs.png',
              ];
              return names.map((n, i) => (
                <div
                  key={`d-${i}`}
                  className="h-8 w-[110px] flex items-center justify-center"
                  title={n.replace(/\.[^/.]+$/, '')}
                >
                  <div
                    aria-label={n.replace(/\.[^/.]+$/, '')}
                    className="w-full h-full"
                    style={{
                      backgroundColor: '#BFC3C6',
                      WebkitMaskImage: `url("/integration/${encodeURIComponent(n)}")`,
                      maskImage: `url("/integration/${encodeURIComponent(n)}")`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                </div>
              ));
            })()}
          </div>
          <style jsx>{`
            .integration-track {
              width: max-content;
              animation: xase-scroll 28s linear infinite;
            }
            @keyframes xase-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .integration-track { animation: none; }
            }
          `}</style>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">
            Hand auditors a ZIP, not database access.
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            The XASE Evidence Bundle is a self-contained proof package. Verify integrity without touching your systems.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-white mb-4 font-light text-sm">evidence_txn_8a7f3b2c.zip</div>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"><span className="text-gray-300">decision.json</span><span className="text-gray-600 text-xs">What the model decided</span></div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"><span className="text-gray-300">explanation.json</span><span className="text-gray-600 text-xs">Why (SHAP values)</span></div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"><span className="text-gray-300">intervention.json</span><span className="text-gray-600 text-xs">Who reviewed, when</span></div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"><span className="text-gray-300">model_card.json</span><span className="text-gray-600 text-xs">Model version, hash</span></div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"><span className="text-gray-300">signature.sig</span><span className="text-gray-600 text-xs">RSA-256 signature</span></div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"><span className="text-gray-300">verify.sh</span><span className="text-gray-600 text-xs">Run this. Trust nothing.</span></div>
              </div>
            </div>

            <CodeBlock
              filename="verify.sh"
              language="bash"
              code={`$ ./verify.sh\n\nChecking signature... ✓ Valid (signed by KMS key arn:aws:kms:...)\nChecking hash chain... ✓ Intact (block 847 of 12,847)\nChecking timestamps... ✓ Consistent (decision: 14:31:02, intervention: 14:32:47)\nChecking model registry... ✓ Hash matches credit-scoring-v4.2.1\n\nRESULT: Bundle is authentic and unmodified.`}
            />
          </div>

          <div className="mt-10 text-center text-gray-400">
            "We gave the auditor a USB drive. They verified everything in their air-gapped lab. Audit closed in 4 hours." — Head of Compliance, Series C Fintech
          </div>
        </div>
      </section>

      {/* Compliance Mapping */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">
            Built for the regulations that matter.
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-10">
            XASE maps directly to regulatory requirements. No interpretation needed.
          </p>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="grid grid-cols-4 bg-white/5 text-xs uppercase tracking-wider text-gray-500">
              <div className="px-4 py-3">Requirement</div>
              <div className="px-4 py-3">Regulation</div>
              <div className="px-4 py-3">What Auditors Want</div>
              <div className="px-4 py-3">XASE Delivers</div>
            </div>
            {[
              {
                req: 'Human Oversight',
                reg: 'EU AI Act Art. 14',
                want: 'Proof that humans reviewed high-risk decisions',
                deliver: 'Signed HITL records with identity, timestamp, reason',
              },
              {
                req: 'Right to Explanation',
                reg: 'LGPD Art. 20, GDPR Art. 22',
                want: 'Why the algorithm decided',
                deliver: 'SHAP/LIME explanation in every bundle',
              },
              {
                req: 'Traceability',
                reg: 'SOC 2, ISO 27001',
                want: 'Immutable audit trail',
                deliver: 'WORM ledger + hash chain',
              },
              {
                req: 'Model Documentation',
                reg: 'EU AI Act Art. 11',
                want: 'Technical documentation of AI systems',
                deliver: 'Model cards with version, hash, performance metrics',
              },
              {
                req: 'Accountability',
                reg: 'BACEN, BCB, Central Banks',
                want: 'Who is responsible for each decision',
                deliver: 'Actor identity cryptographically linked',
              },
            ].map((row, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-[#080808]' : 'bg-black'} grid grid-cols-4 text-sm`}>
                <div className="px-4 py-4 text-gray-300">{row.req}</div>
                <div className="px-4 py-4 text-gray-400">{row.reg}</div>
                <div className="px-4 py-4 text-gray-400">{row.want}</div>
                <div className="px-4 py-4 text-gray-200">{row.deliver}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-600 italic">This is technical mapping. Consult legal counsel for compliance certification.</div>
        </div>
      </section>
      {/* The Problem */}
      <section id="problem" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">
            Regulators don't accept "trust us."
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            The EU AI Act, LGPD, and Central Banks now require proof—not promises.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-base font-medium mb-2">The Audit Gap</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Screenshots and emails don't survive forensic examination.
              </p>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-base font-medium mb-2">The Explainability Void</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                "Why did the model reject?" → "It said so." → €35M fine.
              </p>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-base font-medium mb-2">The Timestamp Problem</div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Prove the human reviewed it. Cryptographically. Offline.
              </p>
            </div>
          </div>

          <div className="text-center text-gray-400 italic">
            "If you can't prove the human was in the loop, the human wasn't in the loop."
          </div>
        </div>
      </section>

      {/* The Product */}
      <section id="product" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">
            One integration. Infinite audits.
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            XASE sits between your model and your regulator. We handle the proof.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <CodeBlock
              filename="app.ts"
              language="typescript"
              code={`// 3 lines. That's the integration.\nconst record = await xase.capture({\n  model: "credit-scoring-v4",\n  input: { income: 85000, debt_ratio: 0.32 },\n  output: { decision: "APPROVED", confidence: 0.94 },\n  explain: "shap"  // Auto-generates explanation\n});\n\n// record.id → "rec_8a7f3b2c..."\n// record.hash → "sha256:9f86d08..."`}
            />

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8 text-sm text-gray-400 leading-relaxed">
              <div className="mb-2 text-white font-mono text-xs">Your API → XASE SDK → Immutable Ledger → Hash Chain → KMS Signature</div>
              <div className="text-center text-gray-600">↓</div>
              <div className="mt-2 text-white font-mono text-xs">[Auditor verifies offline]</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start mt-10">
            <CodeBlock
              filename="hitl.ts"
              language="typescript"
              code={`// When a human overrides or approves\nawait xase.intervene({\n  recordId: "rec_8a7f3b2c",\n  actor: "joao.silva@company.com",\n  action: "OVERRIDE",\n  newOutcome: "APPROVED",\n  reason: "Collateral documentation verified manually",\n  evidence: ["doc_upload_id_1", "doc_upload_id_2"]\n});\n\n// Immutable. Signed. Identity-linked. Court-ready.`}
            />

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-[#080808] border border-white/10 rounded-xl p-5">
                <div className="text-sm text-white mb-1.5 font-medium">Immutable by Design</div>
                <div className="text-xs text-gray-400">WORM storage. Hash chain links every record.</div>
              </div>
              <div className="bg-[#080808] border border-white/10 rounded-xl p-5">
                <div className="text-sm text-white mb-1.5 font-medium">Explainable by Default</div>
                <div className="text-xs text-gray-400">SHAP values auto-captured.</div>
              </div>
              <div className="bg-[#080808] border border-white/10 rounded-xl p-5">
                <div className="text-sm text-white mb-1.5 font-medium">Verifiable Offline</div>
                <div className="text-xs text-gray-400">Auditor runs verify.sh. No API calls.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Bento Grid */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 tracking-tight">
            Built for High-Stakes Autonomy.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-medium mb-3">Fintech</h3>
              <div className="space-y-3 text-sm">
                <div className="text-gray-400">Credit denials & Fraud detection.</div>
                <div className="text-gray-500 text-xs">→ FCRA Compliance proof generated instantly.</div>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-medium mb-3">Healthcare</h3>
              <div className="space-y-3 text-sm">
                <div className="text-gray-400">Diagnostic triage & Claims processing.</div>
                <div className="text-gray-500 text-xs">→ Liability shield against malpractice claims.</div>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-medium mb-3">Enterprise</h3>
              <div className="space-y-3 text-sm">
                <div className="text-gray-400">HR Screening & Dynamic Pricing.</div>
                <div className="text-gray-500 text-xs">→ Defense against bias lawsuits (NYC 144).</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-light text-gray-500 mb-12">
            Designed for compliance with:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="text-2xl font-light tracking-wider">EU AI ACT</div>
            <div className="text-2xl font-light tracking-wider">GDPR</div>
            <div className="text-2xl font-light tracking-wider">SOC 2</div>
            <div className="text-2xl font-light tracking-wider">ISO 42001</div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
            "We believe that as AI moves from 'Chat' to 'Action', the barrier to adoption won't be intelligence—it will be trust. We are building the infrastructure that allows companies to delegate authority to machines without carrying unlimited liability."
          </blockquote>
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 tracking-tight">The math is simple.</h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-5xl font-medium mb-2">95%</div>
              <div className="text-gray-400 text-sm">Reduction in audit prep time</div>
              <div className="text-xs text-gray-600 mt-1">From 3 weeks to 4 hours</div>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-5xl font-medium mb-2">$0</div>
              <div className="text-gray-400 text-sm">Additional compliance headcount</div>
              <div className="text-xs text-gray-600 mt-1">Infrastructure, not people</div>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-5xl font-medium mb-2">0</div>
              <div className="text-gray-400 text-sm">Audit failures</div>
              <div className="text-xs text-gray-600 mt-1">Across all customers</div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-white mb-2 font-medium">Regulatory audit</div>
              <div className="text-gray-400 text-xs">3-6 weeks prep, $50-100K consultants → 4 hours, self-service export</div>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-white mb-2 font-medium">Customer dispute</div>
              <div className="text-gray-400 text-xs">Manual evidence gathering → Bundle export, case closed</div>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-white mb-2 font-medium">Model incident</div>
              <div className="text-gray-400 text-xs">"We think human X reviewed it" → Cryptographic proof, timestamp, reason</div>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6">
              <div className="text-white mb-2 font-medium">Due diligence</div>
              <div className="text-gray-400 text-xs">Scramble to document AI governance → Export full audit history instantly</div>
            </div>
          </div>
        </div>
      </section>
      <section id="dx" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">APIs that don't suck.</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">Built by engineers who've integrated terrible compliance tools. We made the opposite.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2.5 text-sm">
              <div className="bg-[#080808] border border-white/10 rounded-xl p-4 text-gray-300">SDKs: Python, Node.js, Go — Type-safe. Async-first.</div>
              <div className="bg-[#080808] border border-white/10 rounded-xl p-4 text-gray-300">Latency: &lt;10ms p99 — Non-blocking. Won't slow your inference.</div>
              <div className="bg-[#080808] border border-white/10 rounded-xl p-4 text-gray-300">Idempotency: Built-in — Safe retries. No duplicate records.</div>
              <div className="bg-[#080808] border border-white/10 rounded-xl p-4 text-gray-300">Webhooks: Real-time — Alert on anomalies, high override rates.</div>
            </div>
            <CodeBlock
              filename="full-flow.ts"
              language="typescript"
              code={`import { Xase } from '@xase/sdk';

const xase = new Xase({ apiKey: process.env.XASE_API_KEY });

// 1. Register your model once
await xase.models.register({
  id: "credit-scoring-v4",
  hash: "sha256:9f86d081884c...",
  metrics: { accuracy: 0.94, auc_roc: 0.97 },
  intendedUse: "Consumer credit decisions under $100K"
});

// 2. Capture every decision (async, non-blocking)
const record = await xase.capture({
  model: "credit-scoring-v4",
  input: { customerId: "cust_123", income: 85000 },
  output: { decision: "APPROVED", limit: 25000 },
  explain: "shap",
  idempotencyKey: "req_abc123"
});

// 3. Record human intervention when it happens
await xase.intervene({
  recordId: record.id,
  actor: "analyst@company.com",
  action: "APPROVED",
  reason: "Manual document verification completed"
});

// 4. Export for audit (or let auditor do it)
const bundle = await xase.export({ recordId: record.id });
// Returns signed ZIP, verifiable offline`}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 tracking-tight">Audit-ready evidence for AI decisions — priced by risk, not volume.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Sandbox */}
            <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-1">Sandbox</h3>
              <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-400">On request</span></div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>1 use case (test)</li>
                <li>Retention: 30 days</li>
                <li>HITL records</li>
                <li>Hash-only (no KMS)</li>
                <li className="text-gray-500">Not audit-grade</li>
              </ul>
              <div className="mt-6">
                <button onClick={() => { setSelectedPlan('Sandbox'); setBookOpen(true); }} className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/5 transition">Start Sandbox</button>
              </div>
            </div>

            {/* Team */}
            <div className="bg-[#0b0c0f] border border-white/14 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-1">Team</h3>
              <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-300">On request</span></div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>2 use cases</li>
                <li>KMS‑signed evidence bundles</li>
                <li>Retention: 2 years</li>
                <li>Offline verification</li>
                <li>Full audit logs</li>
              </ul>
              <div className="mt-6">
                <button onClick={() => { setSelectedPlan('Team'); setBookOpen(true); }} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition">Contact Sales</button>
              </div>
            </div>

            {/* Business */}
            <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-1">Business</h3>
              <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-400">On request</span></div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>5 use cases</li>
                <li>Retention: 5 years</li>
                <li>Legal hold</li>
                <li>Compliance reporting</li>
                <li>Priority support</li>
              </ul>
              <div className="mt-6">
                <button onClick={() => { setSelectedPlan('Business'); setBookOpen(true); }} className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/5 transition">Request Demo</button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-1">Enterprise</h3>
              <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-400">On request</span></div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>10+ use cases</li>
                <li>Retention: 7–10 years</li>
                <li>On‑prem / VPC</li>
                <li>SSO / SIEM • SLA • DPA</li>
                <li>Named security contact</li>
              </ul>
              <div className="mt-6">
                <button onClick={() => { setSelectedPlan('Enterprise'); setBookOpen(true); }} className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/5 transition">Contact Sales</button>
              </div>
            </div>
          </div>
          <div className="mt-12" />
          <BookCallModal isOpen={bookOpen} onClose={() => setBookOpen(false)} plan={selectedPlan} redirectUrl="https://app.cal.eu/xaseai/30min" />
          <div className="mt-12">
            <FAQ
              items={[
                { question: 'What counts as a "decision"?', answer: 'One xase.capture() call = one decision. Human interventions don\'t count separately.' },
                { question: 'Can I change plans?', answer: 'Yes, anytime. Upgrade instantly, downgrade at end of billing cycle.' },
                { question: 'What happens if I exceed limits?', answer: 'You get a warning at 80%. At 100%, new captures queue until you upgrade. We never drop data.' },
                { question: 'Do you offer annual pricing?', answer: 'Yes. 20% discount for annual prepay on Scale and Enterprise.' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight">Trust nothing. Verify everything.</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">Including us. That's why bundles are verifiable without calling our API.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Encryption at Rest</div><div className="text-gray-400 text-xs">AES-256</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Encryption in Transit</div><div className="text-gray-400 text-xs">TLS 1.3</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Hash Algorithm</div><div className="text-gray-400 text-xs">SHA-256</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Signature Algorithm</div><div className="text-gray-400 text-xs">RSA-SHA256 via AWS KMS</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Immutability</div><div className="text-gray-400 text-xs">WORM + SQL triggers + hash chain</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Access Control</div><div className="text-gray-400 text-xs">RBAC + API key scopes</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Audit Logging</div><div className="text-gray-400 text-xs">Every action logged, immutable</div></div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-4"><div className="text-white font-medium mb-1">Data Residency</div><div className="text-gray-400 text-xs">AWS US, EU, or Brazil</div></div>
          </div>
          <div className="text-center mt-8">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all text-sm">Download Security Whitepaper</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Build AI that regulators respect.</h2>
          <p className="text-gray-400 mb-8">Stop building internal audit tools. Use infrastructure designed for the age of AI accountability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => { setWaitlistSubmitted(false); setWaitlistOpen(true); }} className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white text-black font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
              Join Waitlist
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-600">Questions? founders@xase.ai • We respond in &lt;24h.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>© 2025 Xase. Building trust infrastructure for autonomous systems.</p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 inset-x-4 md:hidden z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="bg-black/90 backdrop-blur border border-white/10 rounded-full p-2 flex gap-2">
          <button onClick={() => { setWaitlistSubmitted(false); setWaitlistOpen(true); }} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-white text-black text-sm font-medium hover:bg-gray-200">Join Waitlist <ArrowRight className="w-4 h-4" /></button>
          <a href="/docs" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-transparent text-white border border-white/10 text-sm hover:bg-white/10">Docs</a>
        </div>
      </div>

      {waitlistOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setWaitlistOpen(false)}></div>
          <div className="relative w-full max-w-md mx-auto bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-medium text-white">Join the waitlist</div>
              <button
                aria-label="Close"
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5"
                onClick={() => setWaitlistOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {waitlistSubmitted ? (
              <div className="space-y-4 text-center">
                <div className="text-white text-base font-medium">You're on the list!</div>
                <div className="text-sm text-gray-400">We’ll email you at <span className="text-gray-300">{email}</span> when spots open.</div>
                <div className="flex gap-2 justify-center">
                  <button
                    className="h-10 px-4 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
                    onClick={() => { setWaitlistOpen(false); setWaitlistSubmitted(false); setName(''); setEmail(''); }}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setWaitlistSubmitted(true);
                }}
              >
                <div className="space-y-1.5">
                  <label className="block text-xs text-gray-400">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg bg-black text-white placeholder:text-gray-600 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs text-gray-400">Work email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg bg-black text-white placeholder:text-gray-600 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
                  />
                </div>
                <button type="submit" className="w-full h-10 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all">Join</button>
                <div className="text-[11px] text-gray-600 text-center">We’ll notify you as soon as spots open.</div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
