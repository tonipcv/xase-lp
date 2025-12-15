'use client';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { ArrowRight, Shield, CheckCircle2, AlertTriangle, FileCheck, Building2, Heart, Briefcase, Lock } from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className={`min-h-screen bg-[#16181b] text-white ${inter.variable} font-sans`}>
      
      {/* Section 1: Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight leading-tight">
              The Evidence Layer<br />for AI Agents.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light leading-relaxed">
              Turn automated decisions into immutable legal records.
            </p>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 font-light">
              Don't just log what your AI did. Prove why it was right.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 bg-[#1e2024] border border-[#4d4d4d] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#6d6d6d] transition-colors"
              />
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2d2d2d] border border-[#4d4d4d] hover:bg-[#3d3d3d] px-8 py-3 rounded-full transition-all duration-300 text-sm font-light whitespace-nowrap">
                Request Early Access
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-xs text-gray-600 mt-4">
              Limited batch onboarding for Fintech & Health.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#1e2024]/50 backdrop-blur border border-[#4d4d4d] rounded-2xl p-6">
              <div className="text-xs text-gray-500 mb-3 font-mono">INPUT</div>
              <div className="bg-[#16181b] rounded-lg p-4 font-mono text-xs text-gray-400 overflow-hidden">
                <div className="text-blue-400">{'{'}</div>
                <div className="pl-4">"user_id": "u_4829",</div>
                <div className="pl-4">"amount": 50000,</div>
                <div className="pl-4">"credit_score": 720</div>
                <div className="text-blue-400">{'}'}</div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-[#2d2d2d] border border-[#4d4d4d] rounded-full p-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-[#1e2024]/50 backdrop-blur border border-[#4d4d4d] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <div className="text-xs text-gray-500 font-mono">XASE RECORD</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Decision:</span>
                  <span className="text-green-400">APPROVED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="text-gray-400 font-mono">1704067200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Hash:</span>
                  <span className="text-gray-400 font-mono">a3f9c2...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-32 px-6 border-t border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-tight">
            "Logs are not Evidence."
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Old Way */}
            <div className="space-y-6">
              <div className="bg-[#1e2024]/30 border border-red-900/30 rounded-2xl p-8 h-64 overflow-hidden relative">
                <div className="font-mono text-xs text-gray-600 space-y-1">
                  <div>[2024-01-01 10:23:45] INFO: Request received</div>
                  <div>[2024-01-01 10:23:46] DEBUG: Processing...</div>
                  <div>[2024-01-01 10:23:47] WARN: Threshold exceeded</div>
                  <div>[2024-01-01 10:23:48] ERROR: Connection timeout</div>
                  <div>[2024-01-01 10:23:49] INFO: Retry attempt 1</div>
                  <div>[2024-01-01 10:23:50] DEBUG: Model inference</div>
                  <div>[2024-01-01 10:23:51] INFO: Decision made</div>
                  <div>[2024-01-01 10:23:52] DEBUG: Cleanup...</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2024] to-transparent pointer-events-none"></div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-red-400 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-light">Tech Debt</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Fragmented. Mutable. Technical. Useless in court.
                </p>
              </div>
            </div>

            {/* New Way */}
            <div className="space-y-6">
              <div className="bg-[#1e2024]/50 backdrop-blur border border-green-900/30 rounded-2xl p-8 h-64">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 rounded-full p-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-light mb-1">Decision Context</div>
                      <div className="text-xs text-gray-500">Policy: credit_policy_v4</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 rounded-full p-2 mt-1">
                      <Lock className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-light mb-1">Cryptographic Proof</div>
                      <div className="text-xs text-gray-500 font-mono">SHA-256 signed & timestamped</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500/10 rounded-full p-2 mt-1">
                      <FileCheck className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm font-light mb-1">Audit Trail</div>
                      <div className="text-xs text-gray-500">Human-readable + machine-verifiable</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-light">Legal Asset</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Contextualized. Immutable. Signed. Ready for the auditor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Developer Ergonomics */}
      <section className="py-32 px-6 border-t border-[#2d2d2d]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
            Integrates in 3 lines of code.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0d0e10] border border-[#4d4d4d] rounded-2xl p-8 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-xs text-gray-600 ml-2 font-mono">agent.py</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-purple-400">import</span> <span className="text-white">xase</span>
                  {'\n\n'}
                  <span className="text-gray-600"># Wrap your agent's decision function</span>
                  {'\n'}
                  <span className="text-blue-400">@xase.record</span>(<span className="text-orange-400">policy</span>=<span className="text-green-400">"credit_policy_v4"</span>)
                  {'\n'}
                  <span className="text-purple-400">def</span> <span className="text-yellow-400">approve_loan</span>(<span className="text-white">user_data</span>):
                  {'\n'}
                  {'    '}decision = model.predict(user_data)
                  {'\n'}
                  {'    '}<span className="text-purple-400">return</span> decision
                </code>
              </pre>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#2d2d2d] rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-light mb-1">Zero latency impact.</div>
                  <div className="text-sm text-gray-500">Async processing doesn't block your pipeline.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#2d2d2d] rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-light mb-1">Framework agnostic.</div>
                  <div className="text-sm text-gray-500">Works with LangChain, OpenAI, PyTorch, or custom models.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#2d2d2d] rounded-full p-2 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-light mb-1">Production ready.</div>
                  <div className="text-sm text-gray-500">Built for scale with enterprise-grade reliability.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Use Cases */}
      <section className="py-32 px-6 border-t border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
            Built for High-Stakes Autonomy.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fintech */}
            <div className="bg-[#1e2024]/50 backdrop-blur border border-[#4d4d4d] rounded-2xl p-8 hover:border-[#6d6d6d] transition-colors">
              <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-light mb-4">Fintech</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Scenario:</div>
                  <div className="text-gray-300">Credit denials & Fraud detection.</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Outcome:</div>
                  <div className="text-green-400">FCRA Compliance proof generated instantly.</div>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="bg-[#1e2024]/50 backdrop-blur border border-[#4d4d4d] rounded-2xl p-8 hover:border-[#6d6d6d] transition-colors">
              <div className="bg-red-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-light mb-4">Healthcare</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Scenario:</div>
                  <div className="text-gray-300">Diagnostic triage & Claims processing.</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Outcome:</div>
                  <div className="text-green-400">Liability shield against malpractice claims.</div>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-[#1e2024]/50 backdrop-blur border border-[#4d4d4d] rounded-2xl p-8 hover:border-[#6d6d6d] transition-colors">
              <div className="bg-purple-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-light mb-4">Enterprise</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Scenario:</div>
                  <div className="text-gray-300">HR Screening & Dynamic Pricing.</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Outcome:</div>
                  <div className="text-green-400">Defense against bias lawsuits (NYC 144).</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trust Signals */}
      <section className="py-32 px-6 border-t border-[#2d2d2d]">
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

      {/* Section 6: Manifesto */}
      <section className="py-32 px-6 border-t border-[#2d2d2d]">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
            "We believe that as AI moves from 'Chat' to 'Action', the barrier to adoption won't be intelligence—it will be trust. We are building the infrastructure that allows companies to delegate authority to machines without carrying unlimited liability."
          </blockquote>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-32 px-6 border-t border-[#2d2d2d]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Secure your spot in the queue.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <input
              type="email"
              placeholder="work email"
              className="w-full sm:flex-1 bg-[#1e2024] border border-[#4d4d4d] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#6d6d6d] transition-colors"
            />
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2d2d2d] border border-[#4d4d4d] hover:bg-[#3d3d3d] px-8 py-3 rounded-full transition-all duration-300 text-sm font-light whitespace-nowrap">
              Request Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">API Docs</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>© 2025 Xase. Building trust infrastructure for autonomous systems.</p>
        </div>
      </footer>
    </div>
  );
}
