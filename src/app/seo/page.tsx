import { Lora } from 'next/font/google'
import { ArrowRight, CheckCircle2, BarChart3, LineChart, Rocket, Users, Shield, Sparkles } from 'lucide-react'

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-lora',
})

export default function SeoPage() {
  return (
    <main className={`min-h-screen bg-[#16181b] text-white ${lora.variable} font-sans`}>      
      {/* Hero */}
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-10 md:pb-16 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 mb-6">
          <Sparkles className="w-4 h-4" />
          SEO with AI analytics
        </div>
        <h1 className="text-3xl md:text-6xl font-light tracking-tight leading-tight max-w-4xl mx-auto">
          AI search analytics for modern teams
        </h1>
        <p className="text-white/70 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Understand demand, create better content, and grow organic acquisition with an
          ultra-fast workflow powered by AI.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#2d2d2d] border border-white/10 hover:bg-[#3a3a3a] transition-colors text-sm">
            <ArrowRight className="w-4 h-4" />
            Get started
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-sm text-white/80">
            Live demo
          </a>
        </div>
        {/* Mock image */}
        <div className="mt-12 md:mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
          <div className="aspect-[16/9] w-full rounded-xl bg-[#0f1215] border border-white/10 flex items-center justify-center text-white/30">
            Dashboard preview
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="px-6 md:px-8 py-10 md:py-12 max-w-6xl mx-auto">
        <p className="text-center text-white/50 text-sm mb-6">Trusted by product-led companies</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 opacity-70">
          {['Nova','Atlas','Pulse','Orbit','Vector','Zen'].map((brand) => (
            <div key={brand} className="h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/40 text-sm">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Features split */}
      <section className="px-6 md:px-8 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Keyword Intelligence
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight">See what your audience really searches</h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              Cluster topics, map intent, and uncover long-tail opportunities with instant AI grouping.
              Eliminate manual spreadsheets and guesswork.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              {[
                'Automatic clustering by intent and similarity',
                'Difficulty, volume and trend in one view',
                'SERP snapshot and entity extraction'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="aspect-[4/3] w-full rounded-xl bg-[#0f1215] border border-white/10 flex items-center justify-center text-white/30">
              Keywords & clusters
            </div>
          </div>
        </div>
      </section>

      {/* Use-cases */}
      <section className="px-6 md:px-8 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <LineChart className="w-5 h-5" />, title: 'Content Planning', desc: 'Plan briefs with headings, questions, and entities that match search intent.'},
            { icon: <Users className="w-5 h-5" />, title: 'Team Workflow', desc: 'Share collections, assign tasks, and track progress in one place.'},
            { icon: <Shield className="w-5 h-5" />, title: 'Site Health', desc: 'Monitor cannibalization, missing internals, and technical gaps.'}
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="inline-flex items-center gap-2 text-white/80">
                {f.icon}
                <h3 className="font-light">{f.title}</h3>
              </div>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">{f.desc}</p>
              <div className="mt-4 h-28 rounded-lg border border-white/10 bg-[#0f1215] flex items-center justify-center text-white/30">preview</div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="px-6 md:px-8 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-white/80 italic">“We replaced three tools and cut research time by 70%. The clustering is insanely useful.”</p>
            <div className="mt-4 text-white/50 text-sm">Head of Growth, SaaS</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-white/80 italic">“Finally a search analytics tool that feels built for product teams.”</p>
            <div className="mt-4 text-white/50 text-sm">Content Lead, Marketplace</div>
          </div>
        </div>
      </section>

      {/* Scatter demo */}
      <section className="px-6 md:px-8 py-14 md:py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] w-full rounded-xl bg-[#0f1215] border border-white/10 flex items-center justify-center text-white/30">
            Opportunity map
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70 mb-4">
              <Rocket className="w-3.5 h-3.5" /> Growth Model
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight">Prioritize where it actually matters</h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              A simple model that balances demand, difficulty, and brand leverage to focus on
              topics you can win now — not just big keywords you can’t rank for.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" /><span>Impact vs. effort scoring</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" /><span>Internal links and entity coverage</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" /><span>Competitor gap insights</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-light tracking-tight">Ship your next SEO win faster</h3>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">Try the workflow. No meetings required.</p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://app.xase.ai/register" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#2d2d2d] border border-white/10 hover:bg-[#3a3a3a] transition-colors text-sm">
              <ArrowRight className="w-4 h-4" />
              Create account
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-sm text-white/80">
              Watch demo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-8 py-14 md:py-20 max-w-5xl mx-auto">
        <h4 className="text-xl md:text-2xl font-light tracking-tight text-center">FAQ</h4>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {q: 'Is this for agencies or in-house teams?', a: 'Both. Collections and permissions make it easy to collaborate across projects.'},
            {q: 'Do you generate content?', a: 'We generate briefs and outlines tailored to intent. You keep control over final copy.'},
            {q: 'Can I import keywords?', a: 'Yes, upload CSVs or paste lists. We enrich and cluster them instantly.'},
            {q: 'Does it replace my rank tracker?', a: 'Keep your tracker. We specialize in opportunity discovery and planning.'},
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-white/80 font-light">{item.q}</div>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/60">
          <div className="text-sm">© {new Date().getFullYear()} XASE</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-white transition-colors" href="/">Home</a>
            <a className="hover:text-white transition-colors" href="/seo">SEO</a>
            <a className="hover:text-white transition-colors" href="https://app.xase.ai/register">Get started</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
