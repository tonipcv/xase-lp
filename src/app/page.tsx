'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from '../components/Terminal';
import CodeBlock from '../components/CodeBlock';
import BookCallModal from '../components/BookCallModal';
import AnimatedText from '../components/AnimatedText';
import GradientMesh from '../components/GradientMesh';
import AnimatedTerminal from '../components/AnimatedTerminal';

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-white/20`}>
      {/* Subtle background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] left-[20%] w-[60%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
      {/* Minimal Nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-xase.png" alt="Xase logo" className="h-5 w-5" />
            <span className="font-light tracking-tight text-sm text-[#BFC3C6]">XASE</span>
          </div>
        </div>
      </header>

      {/* Hero Section - EPIC VERSION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Layers */}
        <GradientMesh />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Animated Headline with Reveal */}
          <AnimatedText 
            text="Governed Access To Real-World Data For AI"
            className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent mb-8 leading-[1.12]"
          />

          {/* Subtitle with fade-in */}
          <motion.p 
            className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Use real data without legal risk, without loss of control, and without transferring ownership.
          </motion.p>

          {/* CTA with magnetic hover effect */}
          <motion.div 
            className="hidden sm:flex gap-4 items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button 
              onClick={() => { setSelectedPlan('Demo'); setBookOpen(true); }} 
              className="group relative h-12 px-8 rounded-lg bg-white/5 border border-white/10 text-white font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Get a demo</span>
            </motion.button>
          </motion.div>

          {/* Mobile CTA */}
          <motion.div 
            className="sm:hidden mb-16 w-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button 
              onClick={() => { setSelectedPlan('Demo'); setBookOpen(true); }} 
              className="h-11 px-6 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Get a demo
            </button>
          </motion.div>

          {/* Terminal Showcase - EPIC CRT VERSION */}
          <motion.div 
            className="w-full max-w-5xl relative group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            {/* Glow effect on hover */}
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header with CRT aesthetic */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gradient-to-r from-green-950/20 to-transparent">
                <div className="flex items-center gap-1.5">
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/60"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/60"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-green-500/60 border border-green-500/80"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <div className="text-xs text-green-400/60 font-mono">xase-terminal v2.0</div>
              </div>

              {/* Terminal Content with CRT effects */}
              <div className="relative p-6 bg-black/40">
                {/* Matrix rain background effect */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="text-green-400 text-xs font-mono leading-tight overflow-hidden h-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: -100 }}
                        animate={{ y: 600 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: 'linear',
                        }}
                      >
                        {Math.random().toString(36).substring(7)}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated Terminal */}
                <AnimatedTerminal
                  lines={[
                    '$ xase access --dataset customer-calls-2024 --purpose training',
                    '',
                    'Evaluating policy...',
                    'Purpose: model-training ✓',
                    'Duration: 30 days ✓', 
                    'Tenant: ai-lab-beta ✓',
                    'Cost: $0.12/hour ✓',
                    '',
                    'ACCESS GRANTED',
                    'Session: sess_8a7f3b2c',
                    'Evidence recorded.'
                  ]}
                  speed={40}
                />
              </div>

              {/* CRT Screen Curvature Effect */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-xl"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
                }}
              />
            </div>
          </motion.div>

          <div className="mt-12 text-sm text-gray-500">
            Policy-evaluated access • Cryptographic evidence • Zero ownership transfer
          </div>
        </div>
      </section>

      {/* Production Ready Banner */}
      <section className="py-12 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Production Ready</span>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-light text-white mb-1">End-to-end</div>
                <div className="text-xs text-gray-500">Policy enforcement + billing + evidence</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-1">AI Labs</div>
                <div className="text-xs text-gray-500">Complete testing environment</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-1">Live metrics</div>
                <div className="text-xs text-gray-500">Real-time usage & revenue tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflow */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Ownership with control
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            The Data Holder defines policies. The AI Lab executes within them. Evidence is automatic.
          </p>

          {/* Visual Flow */}
          <div className="flex items-center justify-center mb-16 overflow-x-auto">
            <div className="flex items-center gap-4 min-w-fit">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 border border-white/15 bg-white/5">
                  <span className="text-gray-200 font-mono text-sm">01</span>
                </div>
                <span className="text-xs text-gray-500 text-center">Data Holder<br />Creates Policy</span>
              </div>
              
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-gray-700 to-gray-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 border border-white/15 bg-white/5">
                  <span className="text-gray-200 font-mono text-sm">02</span>
                </div>
                <span className="text-xs text-gray-500 text-center">AI Lab<br />Requests Access</span>
              </div>
              
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-gray-700 to-gray-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 border border-white/15 bg-white/5">
                  <span className="text-gray-200 font-mono text-sm">03</span>
                </div>
                <span className="text-xs text-gray-500 text-center">Evidence<br />Generated</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Step 1 */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full w-6 h-6 flex items-center justify-center border border-white/25 bg-white/10">
                <span className="text-gray-100 font-mono text-xs">01</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 mt-2">Data Holder</div>
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Create Access Policy</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>Define who can access</div>
                <div>Set purpose and duration</div>
                <div>Specify cost per hour</div>
                <div>Enable runtime enforcement</div>
              </div>
              <div className="mt-6 text-xs text-gray-600 font-mono">No files sold. No ownership transferred.</div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full w-6 h-6 flex items-center justify-center border border-white/25 bg-white/10">
                <span className="text-gray-100 font-mono text-xs">02</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 mt-2">AI Lab</div>
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Request Access</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>Authenticate with API key</div>
                <div>Specify intended purpose</div>
                <div>System evaluates policy</div>
                <div>Access granted or denied</div>
              </div>
              <div className="mt-6 text-xs text-gray-600 font-mono">No downloads. No file custody.</div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full w-6 h-6 flex items-center justify-center border border-white/25 bg-white/10">
                <span className="text-gray-100 font-mono text-xs">03</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 mt-2">Evidence</div>
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Automatic Proof</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>Every access logged</div>
                <div>Every denial recorded</div>
                <div>Cryptographic signatures</div>
                <div>Exportable evidence bundles</div>
              </div>
              <div className="mt-6 text-xs text-gray-600 font-mono">Court-admissible. Offline verifiable.</div>
            </div>
          </div>
        </div>
      </section>

      {/* For Data Holders - Commercial Value */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Turn idle data into revenue
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Data Holders monetize datasets without selling files. Set your price, define access rules, track usage in real-time.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-3xl font-light text-white mb-2">$X/hour</div>
              <div className="text-sm font-medium text-gray-300 mb-3">You set the price</div>
              <div className="text-sm text-gray-400">
                Define cost per compute hour. AI Labs pay for usage, not ownership. Automatic billing and settlement.
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-3xl font-light text-white mb-2">Live metrics</div>
              <div className="text-sm font-medium text-gray-300 mb-3">Real-time dashboard</div>
              <div className="text-sm text-gray-400">
                Track active sessions, total usage hours, revenue per dataset, and access patterns as they happen.
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-3xl font-light text-white mb-2">Take-rate</div>
              <div className="text-sm font-medium text-gray-300 mb-3">Platform fee model</div>
              <div className="text-sm text-gray-400">
                Xase takes a percentage of each transaction. You keep control, we handle infrastructure and compliance.
              </div>
            </div>
          </div>

          <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
            <div className="text-lg font-medium text-white mb-4">What you get</div>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div className="space-y-3">
                <div><span className="text-white">Revenue stream:</span> Monetize data you already own</div>
                <div><span className="text-white">Zero risk:</span> No file transfers, no custody loss</div>
                <div><span className="text-white">Full control:</span> Revoke access anytime, audit everything</div>
              </div>
              <div className="space-y-3">
                <div><span className="text-white">Automatic billing:</span> Usage tracked to the second</div>
                <div><span className="text-white">Compliance proof:</span> Every access logged and exportable</div>
                <div><span className="text-white">Policy enforcement:</span> Runtime guarantees, not promises</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Real world data is valuable but ungoverned data is unusable
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            AI Labs need real data to improve models, but legal exposure makes it impossible. Data Holders have valuable assets sitting idle.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-base font-medium mb-4 text-white">For AI Labs</div>
              <div className="space-y-3 text-sm text-gray-400">
                <div>Real data improves models significantly</div>
                <div>But brings massive legal exposure</div>
                <div>No proof of correct usage</div>
                <div>Compliance teams always block</div>
              </div>
            </div>
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-base font-medium mb-4 text-white">For Data Holders</div>
              <div className="space-y-3 text-sm text-gray-400">
                <div>Valuable data sits completely idle</div>
                <div>Monetization seems impossible</div>
                <div>Legal always says "too risky"</div>
                <div>No control after data transfer</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 italic">
            "The current model is: give us your data and trust us. That's not governance — that's hope."
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Data Access as a Runtime
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            The AI Lab never downloads the dataset. It executes an authorized access. Every call is evaluated, allowed or denied, with evidence generated.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <CodeBlock
              filename="access_request.py"
              language="python"
              code={`# AI Lab requests access to data
import xase

# Authenticate and specify purpose
client = xase.Client(api_key="lab_key_abc123")

# Request access with clear intent
access = client.request_access(
    dataset_id="customer_calls_2024",
    purpose="model_training",
    duration_days=30,
    tenant="ai_lab_beta"
)

if access.granted:
    # Use data within policy constraints
    for batch in access.stream_batches():
        model.train(batch)
        
# Evidence automatically recorded`}
            />

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8 text-sm text-gray-400 leading-relaxed">
              <div className="mb-4 text-white font-medium">How it works:</div>
              <div className="space-y-3">
                <div><span className="text-white">1. Policy Check:</span> Every access request evaluated against data holder's rules</div>
                <div><span className="text-white">2. Runtime Control:</span> Data never leaves the secure environment</div>
                <div><span className="text-white">3. Evidence Generation:</span> Every action cryptographically logged</div>
                <div><span className="text-white">4. Automatic Compliance:</span> Audit trail generated in real-time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Labs Environment */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Complete AI Labs environment
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Test access policies, simulate workloads, export evidence — all before paying for production usage.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Sandbox Testing</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div><span className="text-white">Free tier:</span> Test policies without consuming credits</div>
                <div><span className="text-white">Policy simulation:</span> See what gets allowed or denied</div>
                <div><span className="text-white">API playground:</span> Try access patterns before production</div>
                <div><span className="text-white">Evidence preview:</span> Export sample bundles to verify format</div>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Production Workflow</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div><span className="text-white">Authenticate:</span> API key-based access control</div>
                <div><span className="text-white">Request access:</span> Specify purpose and duration</div>
                <div><span className="text-white">Execute:</span> Run models in secure environment</div>
                <div><span className="text-white">Track usage:</span> Real-time billing and metrics</div>
              </div>
            </div>
          </div>

          <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
            <div className="text-lg font-medium text-white mb-4">Use cases</div>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <div className="text-white mb-2">Model Evaluation</div>
                <div>Test against real-world edge cases, benchmark on actual user data, validate before production</div>
              </div>
              <div>
                <div className="text-white mb-2">Domain Adaptation</div>
                <div>Fine-tune for specific industries, learn domain patterns, adapt to regional contexts</div>
              </div>
              <div>
                <div className="text-white mb-2">Research & Development</div>
                <div>Experiment with architectures, study failure modes, develop safety mechanisms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Bundles Detail */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Evidence bundles explained
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Not just logs. Cryptographically signed, offline-verifiable proof of policy enforcement.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>What's inside</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div><span className="text-white">Policy snapshot:</span> Exact rules that were enforced</div>
                <div><span className="text-white">Access records:</span> Who, when, what, why — timestamped</div>
                <div><span className="text-white">Denials logged:</span> Every rejected request with reason</div>
                <div><span className="text-white">Cryptographic signatures:</span> Tamper-proof chain of custody</div>
                <div><span className="text-white">Audit metadata:</span> Environment, versions, checksums</div>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-4 text-white" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Why it matters</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div><span className="text-white">Court-admissible:</span> Designed for legal proceedings</div>
                <div><span className="text-white">Offline verifiable:</span> No database access needed</div>
                <div><span className="text-white">Compliance ready:</span> GDPR, SOC2, industry standards</div>
                <div><span className="text-white">Export anytime:</span> ZIP file with all proofs</div>
                <div><span className="text-white">Third-party auditable:</span> Hand to regulators directly</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/40" />
              </div>
              <div>
                <div className="text-white font-medium mb-2">Difference from simple logs</div>
                <div className="text-sm text-gray-400">
                  Traditional logs can be edited, deleted, or lost. Evidence bundles are cryptographically signed at generation time, 
                  include the complete policy context, and provide offline verification. You can prove compliance without giving auditors 
                  database access or trusting a third party's word.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Real-world applications
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Production deployments across regulated industries where data governance is non-negotiable.
          </p>

          <div className="space-y-8">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="mt-1 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Healthcare & Medical AI</h3>
                  <div className="text-sm text-gray-400 mb-4">
                    Hospital network monetizes de-identified patient records for AI research. Research labs access data for model training without HIPAA violations.
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-white mb-1">Policy example</div>
                      <div className="text-gray-500">Purpose: medical research only. Duration: 90 days. Cost: $500/hour. No PII export.</div>
                    </div>
                    <div>
                      <div className="text-white mb-1">Evidence generated</div>
                      <div className="text-gray-500">Every query logged, access timestamps, denied requests, audit trail for compliance officers.</div>
                    </div>
                    <div>
                      <div className="text-white mb-1">Revenue impact</div>
                      <div className="text-gray-500">$45K/month from 3 research partners. Zero legal incidents. Full audit trail.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="mt-1 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Financial Services & Fraud Detection</h3>
                  <div className="text-sm text-gray-400 mb-4">
                    Bank provides transaction data to fintech for fraud model training. Data never leaves secure environment. Every access logged for regulators.
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-white mb-1">Policy example</div>
                      <div className="text-gray-500">Purpose: fraud detection. Duration: 6 months. Cost: $1000/hour. No customer data export.</div>
                    </div>
                    <div>
                      <div className="text-white mb-1">Evidence generated</div>
                      <div className="text-gray-500">Model training runs, feature extraction logs, compliance reports for SOC2 and PCI-DSS audits.</div>
                    </div>
                    <div>
                      <div className="text-white mb-1">Revenue impact</div>
                      <div className="text-gray-500">$120K/month from 2 fintech partners. Regulator-approved evidence bundles. Zero breaches.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="mt-1 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>Call Centers & Voice AI</h3>
                  <div className="text-sm text-gray-400 mb-4">
                    Enterprise call center licenses conversation data to voice AI startups. Models train on real customer interactions with full consent tracking.
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-white mb-1">Policy example</div>
                      <div className="text-gray-500">Purpose: voice model training. Duration: 12 months. Cost: $300/hour. Anonymized transcripts only.</div>
                    </div>
                    <div>
                      <div className="text-white mb-1">Evidence generated</div>
                      <div className="text-gray-500">Training session logs, data access patterns, consent verification records, GDPR compliance proof.</div>
                    </div>
                    <div>
                      <div className="text-white mb-1">Revenue impact</div>
                      <div className="text-gray-500">$36K/month from 4 AI labs. Automated billing. Legal approved all evidence bundles.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical FAQ */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            How it works
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-3 text-white">If it's not a download, how does training happen?</h3>
              <p className="text-gray-400 leading-relaxed">
                Your model executes within our secure environment. Data never leaves our infrastructure. You get gradients, weights, and results — not raw files.
              </p>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-3 text-white">What does my model actually receive?</h3>
              <p className="text-gray-400 leading-relaxed">
                Processed data streams, embeddings, or API responses — whatever the policy allows. The data holder defines exactly what format and level of access you get.
              </p>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-3 text-white">How do I prove compliance to auditors?</h3>
              <p className="text-gray-400 leading-relaxed">
                Every access generates cryptographic evidence bundles. Hand auditors a ZIP file with policy enforcement proof — no database access needed.
              </p>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-3 text-white">What's the economic model?</h3>
              <p className="text-gray-400 leading-relaxed">
                Usage-based access. Data holders set price per hour, AI Labs pay to use, Xase facilitates settlement. No upfront costs, no minimums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Build AI with real-world data
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
            Stop avoiding real data because of legal risk. Use infrastructure designed for governed access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => { setSelectedPlan('Demo'); setBookOpen(true); }} className="h-12 px-8 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-all">
              Get a demo
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

      <BookCallModal 
        isOpen={bookOpen} 
        onClose={() => setBookOpen(false)} 
        plan={selectedPlan}
        redirectUrl="/"
      />

    </div>
  );
}
