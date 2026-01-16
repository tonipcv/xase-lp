'use client';
import { useState } from 'react';
import Terminal from '../components/Terminal';
import CodeBlock from '../components/CodeBlock';
import BookCallModal from '../components/BookCallModal';

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-8 leading-[1.12]" style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}>
            Governed Access To<br />Real-World Data For AI
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
            Use real data without legal risk, without loss of control, and without transferring ownership.
          </p>

          <div className="hidden sm:flex gap-4 items-center mb-20">
            <button onClick={() => { setSelectedPlan('Demo'); setBookOpen(true); }} className="h-12 px-8 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
              Get a demo
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden mb-16 w-full flex items-center justify-center">
            <button onClick={() => { setSelectedPlan('Demo'); setBookOpen(true); }} className="h-11 px-6 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all">
              Get a demo
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
                  speed={50}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            Policy-evaluated access • Cryptographic evidence • Zero ownership transfer
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

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Step 1 */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Step 1 • Data Holder</div>
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
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Step 2 • AI Lab</div>
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
            <div className="bg-[#080808] border border-white/10 rounded-xl p-8">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Step 3 • Evidence</div>
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
