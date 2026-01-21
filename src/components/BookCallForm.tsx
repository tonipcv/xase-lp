'use client';

import { useState } from 'react';

interface Props {
  redirectUrl: string;
  plan?: string;
}

export default function BookCallForm({ redirectUrl, plan }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [dataType, setDataType] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          dataType,
          source: 'homepage_modal',
        }),
      });

      if (response.ok) {
        const params = new URLSearchParams();
        if (name) params.set('name', name);
        if (email) params.set('email', email);
        if (company) params.set('company', company);
        
        const notes = [];
        if (role) notes.push(`Role: ${role}`);
        if (dataType) notes.push(`Data type: ${dataType}`);
        if (plan) notes.push(`Plan: ${plan}`);
        if (notes.length > 0) params.set('notes', notes.join(' | '));

        const url = new URL(redirectUrl, window.location.origin);
        params.forEach((value, key) => {
          url.searchParams.set(key, value);
        });
        window.location.href = url.toString();
      }
    } catch (error) {
      console.error('Failed to submit lead:', error);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2.5 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2.5 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2.5 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
        required
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2.5 text-[14px] text-white focus:outline-none focus:border-neutral-500 transition-colors"
        required
      >
        <option value="" disabled>I'm a...</option>
        <option value="data-holder">Data Holder (monetize datasets)</option>
        <option value="ai-lab">AI Lab (access data for training)</option>
        <option value="other">Other</option>
      </select>
      <input
        type="text"
        placeholder="What type of data? (optional)"
        value={dataType}
        onChange={(e) => setDataType(e.target.value)}
        className="w-full rounded-lg bg-black border border-neutral-700 px-3 py-2.5 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-4 h-11 rounded-lg bg-white text-black text-[14px] font-medium hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {submitting ? 'Submitting...' : 'Request demo'}
      </button>
      <p className="text-center text-[12px] text-neutral-600">
        We'll reach out within 24 hours
      </p>
    </form>
  );
}
