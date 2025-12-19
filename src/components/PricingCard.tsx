'use client';
import { ArrowRight, Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export default function PricingCard({ name, price, period, features, cta, highlighted }: PricingCardProps) {
  return (
    <div className={`bg-[#1e2024]/50 backdrop-blur border ${highlighted ? 'border-white/20' : 'border-[#2d2d2d]'} rounded-2xl p-8 hover:border-[#4d4d4d] transition-all`}>
      <h3 className="text-2xl font-light mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-light">{price}</span>
        {period && <span className="text-gray-500 ml-2">{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full flex items-center justify-center gap-2 ${highlighted ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#2d2d2d] border border-[#4d4d4d] hover:bg-[#3d3d3d]'} px-6 py-3 rounded-full transition-all duration-300 text-sm font-light`}>
        {cta}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
