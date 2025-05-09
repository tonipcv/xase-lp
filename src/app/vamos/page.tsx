'use client'
import { Shield, Search, Zap, ChevronRight, Mail, Github, Linkedin, Twitter, Database, Rocket, Target, Users, BarChart, DollarSign, Video, Share, Image, Mic, ThumbsUp } from "lucide-react";
import { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import { Montserrat } from 'next/font/google';

// Configure a fonte Montserrat com os pesos que queremos usar
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-montserrat',
});

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Guia Definitivo: Contrate os Melhores Talentos usando IA",
          description: "Aprenda como otimizar seu processo de recrutamento usando inteligência artificial. Guia completo para RH e gestores.",
          image: "https://xase.com/guide-cover.jpg",
          author: {
            "@type": "Organization",
            name: "XASE",
            url: "https://xase.com"
          },
          publisher: {
            "@type": "Organization",
            name: "XASE",
            logo: {
              "@type": "ImageObject",
              url: "https://xase.com/logo.png"
            }
          },
          datePublished: "2024-01-01",
          dateModified: "2024-03-14",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://xase.com"
          },
          about: {
            "@type": "Thing",
            name: "Recrutamento com IA",
            description: "Métodos e estratégias para otimizar contratações usando inteligência artificial"
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: "https://xase.com",
            description: "Guia gratuito sobre como ganhar dinheiro com IA"
          }
        })
      }}
    />
  )
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Aqui você implementaria a lógica de salvar o contato
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section Simplificado */}
      <main className="flex-1 flex items-center justify-center px-4 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), 
                             linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />

        <div className="max-w-xl w-full mx-auto text-center relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-extralight tracking-tight leading-tight mb-6">
            Guia Definitivo: Contrate os Melhores Talentos usando IA
          </h1>
          
          <p className="text-[#f5f5f7] text-lg leading-relaxed font-light mb-8">
            Descubra como empresas estão economizando +R$10.000 por contratação 
            e encontrando candidatos 3x melhores usando inteligência artificial. 
            Receba nosso guia exclusivo gratuitamente.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail corporativo"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp profissional"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 px-8 py-4 rounded-lg transition-colors text-sm font-medium"
              >
                RECEBER GUIA DE RECRUTAMENTO COM IA
              </button>
            </form>
          ) : (
            <div className="bg-white/10 border border-white/20 p-8 rounded-lg">
              <h2 className="text-2xl font-light mb-4">Excelente Decisão!</h2>
              <p className="text-[#f5f5f7] mb-4">
                Seu guia de recrutamento com IA foi enviado. 
                Confira seu WhatsApp para dicas exclusivas de implementação.
              </p>
              <p className="text-[#a1a1a6] text-sm">
                Não recebeu? Verifique sua caixa de spam ou entre em contato com nosso suporte.
              </p>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-8 text-[#a1a1a6]">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">+500 empresas</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">97% de satisfação</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="py-6 text-center text-[#86868b] text-sm">
        <p>© 2024 XASE - Revolucionando o Recrutamento com IA</p>
      </footer>
    </div>
  );
}
