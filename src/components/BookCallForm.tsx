'use client';

import { useState } from 'react';

interface Props {
  redirectUrl: string; // e.g. https://app.cal.eu/xaseai/30min
  plan?: string;
}

export default function BookCallForm({ redirectUrl, plan }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Best-effort: pass prefill params if supported; otherwise Cal will ignore them
    const params = new URLSearchParams();
    if (name) params.set('name', name);
    if (email) params.set('email', email);
    if (company) params.set('company', company);
    if (useCase) params.set('notes', `Use case: ${useCase}`);
    if (plan) {
      params.set('plan', plan);
      const existing = params.get('notes');
      params.set('notes', existing ? `${existing} | Plan: ${plan}` : `Plan: ${plan}`);
    }

    const url = `${redirectUrl}?${params.toString()}`;
    window.location.href = url;
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto mt-10 grid gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
          required
        />
        <input
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
      />
      <input
        type="text"
        placeholder="Primary use case (optional)"
        value={useCase}
        onChange={(e) => setUseCase(e.target.value)}
        className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
      />
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-white text-black text-sm px-5 py-2 font-medium hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? 'Redirecting…' : 'Book a 30‑min call'}
      </button>
      <div className="text-center text-xs text-white/40">Well redirect you to schedule your time.</div>
    </form>
  );
}
