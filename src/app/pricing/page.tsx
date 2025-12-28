import JsonLd from '../../components/JsonLd';
import PricingGrid from '../../components/PricingGrid';

export default function PricingPage() {
  const faq = [
    { q: 'What counts as a "decision"?', a: 'One xase.capture() call = one decision. Human interventions don\'t count separately.' },
    { q: 'Can I change plans?', a: 'Yes, anytime. Upgrade instantly, downgrade at end of billing cycle.' },
    { q: 'What happens if I exceed limits?', a: 'You get a warning at 80%. At 100%, new captures queue until you upgrade. We never drop data.' },
    { q: 'Do you offer annual pricing?', a: 'Yes. 20% discount for annual prepay on Scale and Enterprise.' },
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
    <main className="min-h-screen px-6 py-24 text-white bg-[#16181b]">
      <JsonLd data={faqSchema} />
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Pricing</h1>
        <p className="text-gray-400 mb-12">Audit-ready evidence for AI decisions — priced by risk, not volume.</p>
        <PricingGrid />
        <div className="max-w-3xl mx-auto text-left mt-16">
          <h2 className="text-2xl font-light mb-4">FAQ</h2>
          <div className="space-y-3">
            {faq.map((f, i) => (
              <details key={i} className="bg-[#0A0A0A] border border-[#222222] rounded-xl">
                <summary className="px-4 py-3 cursor-pointer select-none">{f.q}</summary>
                <div className="px-4 pb-4 text-gray-400">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
