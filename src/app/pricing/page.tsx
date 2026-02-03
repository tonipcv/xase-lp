'use client';

import { useState } from 'react';

import BookCallModal from '../../components/BookCallModal';
import JsonLd from '../../components/JsonLd';

export default function PricingPage() {
  const [bookOpen, setBookOpen] = useState(false);

  const faq = [
    {
      q: 'How is usage measured?',
      a: 'Usage is measured in normalized access units generated at runtime by the policy engine. Each unit corresponds to an enforced execution and its evidence bundle.',
    },
    {
      q: 'When is billing triggered?',
      a: 'Billing is triggered on executed access. If policy blocks access, no usage is executed and no billing occurs.',
    },
    {
      q: 'Can pricing change retroactively?',
      a: 'No. Pricing is determined at execution time and recorded as part of the evidence trail for that access.',
    },
    {
      q: 'Is pricing negotiable?',
      a: 'No. Pricing is a system rule: data holders define base pricing, and Xase enforces multipliers at runtime based on policy and risk factors.',
    },
    {
      q: 'What happens if a policy requires approval?',
      a: 'Access does not execute until the approval condition is satisfied. Only executed access generates usage and evidence.',
    },
    {
      q: 'How is evidence generated?',
      a: 'Every executed access produces audit-grade logs and a cryptographically signed evidence bundle that can be verified offline.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <main className="min-h-screen px-6 py-24 text-white bg-[#0A0A0A]">
      <JsonLd data={faqSchema} />
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Usage-based Regulatory Tariffs
          </h1>
          <p className="text-neutral-400 mb-4">
            Governed access to real-world data, enforced at runtime and priced by execution risk.
          </p>
          <p className="text-[13px] text-neutral-600">
            No subscriptions. No plans. No negotiated contracts.
          </p>
        </div>

        <section className="mt-16">
          <div className="max-w-3xl rounded-2xl border border-neutral-800 bg-[#0b0c0f] p-8">
            <div className="text-[13px] uppercase tracking-wider text-neutral-500 mb-3">Base Pricing Rule</div>
            <div className="text-[16px] text-neutral-300 leading-relaxed">
              Access to governed data is priced using normalized access units. Each unit represents one enforced execution with a corresponding evidence bundle.
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-800/60">
              <div className="text-[13px] uppercase tracking-wider text-neutral-500 mb-2">Reference unit</div>
              <div className="text-[14px] text-neutral-400 leading-relaxed">
                Audio / Video → per governed hour (e.g. $10 per hour as a market reference)
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Data modality examples
            </h2>
            <div className="space-y-2 text-[15px] text-neutral-300">
              <div>Audio / Video → per hour</div>
              <div>Text → per 1,000 governed tokens</div>
              <div>Images → per dataset execution</div>
              <div>Structured data → per governed request</div>
            </div>
            <p className="mt-6 text-[13px] text-neutral-600">
              All modalities are normalized internally using the same governance and risk framework.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Runtime risk multipliers
            </h2>
            <p className="text-[15px] text-neutral-300 leading-relaxed mb-6">
              Final pricing is determined at execution time based on policy-enforced risk factors.
            </p>
            <div className="space-y-2 text-[15px] text-neutral-300">
              <div>Usage type (training vs production)</div>
              <div>Regulatory classification</div>
              <div>Data sensitivity</div>
              <div>Jurisdiction</div>
              <div>Replay, audit or simulation access</div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Pricing governance
            </h2>
            <div className="space-y-2 text-[15px] text-neutral-300">
              <div>Data holders define base pricing for their datasets</div>
              <div>Xase enforces access, billing, and evidence generation</div>
              <div>AI Labs accept pricing at execution or do not access the data</div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Xase governance fee
            </h2>
            <p className="text-[15px] text-neutral-300 leading-relaxed">
              Xase automatically retains a governance fee on every executed access. This covers policy enforcement, cryptographic evidence bundles, audit-ready logs, and billing infrastructure.
            </p>
            <p className="mt-4 text-[13px] text-neutral-600">
              The fee is applied invisibly and requires no manual reconciliation.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Included by default
            </h2>
            <div className="space-y-2 text-[15px] text-neutral-300">
              <div>Runtime policy enforcement</div>
              <div>Immutable decision &amp; access logs</div>
              <div>Cryptographically signed evidence bundles</div>
              <div>Audit-ready export (regulatory &amp; legal)</div>
              <div>Automatic usage-based billing</div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <h2 className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-6">FAQ</h2>
            <div className="space-y-3">
              {faq.map((f, i) => (
                <details key={i} className="bg-[#0b0c0f] border border-neutral-800 rounded-xl">
                  <summary className="px-4 py-3 cursor-pointer select-none text-neutral-200">
                    {f.q}
                  </summary>
                  <div className="px-4 pb-4 text-neutral-400 text-[14px] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl pt-10 border-t border-neutral-800/60 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={() => setBookOpen(true)}
              className="h-11 px-6 text-[14px] font-medium bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Simulate governed access
            </button>
            <a
              href="/docs/guides/policy"
              className="text-[13px] text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              View enforcement model
            </a>
          </div>
        </section>
      </div>

      <BookCallModal
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
        plan="Demo"
        redirectUrl="https://app.cal.eu/xaseai/30min?overlayCalendar=true"
      />
    </main>
  );√
}
