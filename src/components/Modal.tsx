'use client'
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-[#fafafa] p-8 rounded-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto shadow-xl">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-black/40 hover:text-black/60 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
} 