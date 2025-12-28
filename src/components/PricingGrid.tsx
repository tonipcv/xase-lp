'use client';

import { useState } from 'react';
import BookCallModal from './BookCallModal';

export default function PricingGrid() {
  const [bookOpen, setBookOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const open = (plan: string) => {
    setSelectedPlan(plan);
    setBookOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-4 gap-6 text-left">
        {/* Sandbox */}
        <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-8">
          <div className="text-2xl font-light mb-1">Sandbox</div>
          <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-400">On request</span></div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>1 use case (test)</li>
            <li>Retention: 30 days</li>
            <li>HITL records</li>
            <li>Hash-only (no KMS)</li>
            <li className="text-gray-500">Not audit-grade</li>
          </ul>
          <div className="mt-6">
            <button onClick={() => open('Sandbox')} className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/5 transition">Start Sandbox</button>
          </div>
        </div>

        {/* Team */}
        <div className="bg-[#0b0c0f] border border-white/14 rounded-2xl p-8">
          <div className="text-2xl font-light mb-1">Team</div>
          <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-300">On request</span></div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>2 use cases</li>
            <li>KMS‑signed evidence bundles</li>
            <li>Retention: 2 years</li>
            <li>Offline verification</li>
            <li>Full audit logs</li>
          </ul>
          <div className="mt-6">
            <button onClick={() => open('Team')} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition">Contact Sales</button>
          </div>
        </div>

        {/* Business */}
        <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-8">
          <div className="text-2xl font-light mb-1">Business</div>
          <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-400">On request</span></div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>5 use cases</li>
            <li>Retention: 5 years</li>
            <li>Legal hold</li>
            <li>Compliance reporting</li>
            <li>Priority support</li>
          </ul>
          <div className="mt-6">
            <button onClick={() => open('Business')} className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/5 transition">Request Demo</button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-[#0b0c0f] border border-white/10 rounded-2xl p-8">
          <div className="text-2xl font-light mb-1">Enterprise</div>
          <div className="mb-6"><span className="text-[11px] uppercase tracking-wider text-gray-400">On request</span></div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>10+ use cases</li>
            <li>Retention: 7–10 years</li>
            <li>On‑prem / VPC</li>
            <li>SSO / SIEM • SLA • DPA</li>
            <li>Named security contact</li>
          </ul>
          <div className="mt-6">
            <button onClick={() => open('Enterprise')} className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/5 transition">Contact Sales</button>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={bookOpen} onClose={() => setBookOpen(false)} plan={selectedPlan} redirectUrl="https://cal.com/xaseai/30min" />
    </>
  );
}
