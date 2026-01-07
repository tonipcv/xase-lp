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
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 rounded-3xl bg-white border border-black/10 p-7 md:p-8 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <div
              className="text-3xl md:text-4xl font-light text-black mb-1 tracking-tight"
              style={{ fontFamily: 'var(--font-canela), Canela, ui-serif, serif' }}
            >
              Book a call
            </div>
            <div className="text-sm uppercase tracking-wider text-black/50">We’ll get you scheduled</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-black/60 hover:text-black text-xl leading-none">✕</button>
        </div>
        <div className="light-override">
          <BookCallForm redirectUrl={redirectUrl} plan={plan ?? undefined} />
        </div>
        <style jsx global>{`
          .light-override form { margin-top: 1.75rem; }
          .light-override input,
          .light-override textarea,
          .light-override select {
            background-color: #fff !important;
            color: #000 !important;
            border: 1px solid rgba(0,0,0,0.12) !important;
            border-radius: 12px !important;
            padding: 10px 12px !important;
            box-shadow: none !important;
            transition: border-color 160ms ease, box-shadow 160ms ease !important;
          }
          .light-override input::placeholder,
          .light-override textarea::placeholder {
            color: rgba(0,0,0,0.38) !important;
          }
          .light-override input:focus,
          .light-override textarea:focus,
          .light-override select:focus {
            outline: none !important;
            border-color: rgba(0,0,0,0.4) !important;
            box-shadow: 0 0 0 4px rgba(0,0,0,0.06) !important;
          }
          .light-override button[type="submit"] {
            width: 100% !important;
            background-color: #000 !important;
            color: #fff !important;
            border-radius: 9999px !important;
            padding: 10px 16px !important;
            font-size: 15px !important;
          }
          .light-override button[type="submit"]:hover { background-color: #111 !important; }
          .light-override .text-xs { color: rgba(0,0,0,0.5) !important; text-align: center; }
        `}</style>
      </div>
    </div>
  );
}
