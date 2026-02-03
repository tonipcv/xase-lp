'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white border border-neutral-200 rounded-xl p-6 shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-[24px] font-medium text-neutral-900 mb-1 tracking-tight">
              Request access
            </h2>
            <p className="text-[13px] text-neutral-600">
              Talk to us about your use case
            </p>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close" 
            className="text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <BookCallForm redirectUrl={redirectUrl} plan={plan ?? undefined} />
      </div>
    </div>,
    document.body
  );
}
