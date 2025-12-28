'use client';

import { useEffect } from 'react';
import BookCallForm from './BookCallForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  plan?: string | null;
  redirectUrl: string;
}

export default function BookCallModal({ isOpen, onClose, plan, redirectUrl }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-[#0b0c0f] border border-white/10 p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-white/40">Book a call</div>
            {plan && <div className="mt-1 text-sm text-white/60">Selected plan: <span className="text-white">{plan}</span></div>}
          </div>
          <button onClick={onClose} aria-label="Close" className="text-white/50 hover:text-white">✕</button>
        </div>
        <BookCallForm redirectUrl={redirectUrl} plan={plan ?? undefined} />
      </div>
    </div>
  );
}
