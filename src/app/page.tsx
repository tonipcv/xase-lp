'use client'
import { MessageSquare, Smartphone, Users, BarChart, Calendar, Zap, Shield, Bot, Tag, Clipboard, Send, Bell, Mail, Globe, Clock, TrendingUp, Activity, LineChart, PieChart, BarChart2, AreaChart, Target, ArrowUpRight, ArrowDownRight, ChevronRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { ChatWidget } from '@/components/ChatWidget';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Múltiplos Canais de Atendimento",
      description: "Integração completa com WhatsApp Oficial (WABA), APIs não oficiais, Facebook Messenger, Instagram, Webchat, Email e Telegram.",
      icon: Globe,
      subFeatures: [
        "API WhatsApp Oficial (WABA)",
        "APIs WhatsApp não oficiais (bailyes, webjs, meow, evolution)",
        "Hub Notificame (Facebook Messenger, Instagram, Webchat, Email)",
        "Telegram"
      ]
    },
    {
      title: "Gestão Centralizada",
      description: "Todos os chats em uma única tela com sistema de tickets e setorização de atendimento.",
      icon: MessageSquare,
      subFeatures: [
        "Todos chats em uma única tela",
        "Sistema de Tickets",
        "Setorização de atendimento (filas)",
        "Múltiplos Atendentes"
      ]
    },
    {
      title: "Automação Inteligente",
      description: "Agendamentos de mensagem e integração com chatbots para otimizar seu atendimento.",
      icon: Bot,
      subFeatures: [
        "Agendamentos de mensagem",
        "Integração com Chatbots",
        "Inteligência artificial integrada",
        "Disparo em massa"
      ]
    },
    {
      title: "Análise e Gestão",
      description: "Dashboard analítico completo com relatórios e métricas de atendimento.",
      icon: BarChart,
      subFeatures: [
        "Dashboard de analítica",
        "Relatórios gerais de atendimento",
        "Avaliações de Atendimento",
        "Exportar contatos do WhatsApp"
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-white ${inter.variable} font-sans`}>
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${scrollY * 0.1}% ${scrollY * 0.2}%, #7B61FF 0%, transparent 50%)`
        }}
      />

      {/* Header */}
      <header className="fixed w-full bg-[#0A0A0A]/80 backdrop-blur-sm z-50 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-xl font-light tracking-tight text-white">XASE</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-[#7B61FF] transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm hover:text-[#7B61FF] transition-colors">Planos</a>
            <a href="#contact" className="text-sm hover:text-[#7B61FF] transition-colors">Contato</a>
          </nav>
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-[#7B61FF] to-[#C0C0C0] hover:from-[#6A4FFF] hover:to-[#A0A0A0] px-6 py-2 rounded-md transition-colors text-sm font-medium"
          >
            Agendar Demonstração
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/5 to-transparent" />
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 mb-6 backdrop-blur-sm">
            <span className="text-xs text-[#7B61FF]">Nova Versão 2.0</span>
            <ChevronRight className="w-3 h-3 text-[#7B61FF]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            CRM Completo para Whatsapp <span className="text-[#7B61FF]">com IA</span> e Múltiplos Canais
          </h1>
          
          <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Gerencie todos os seus canais de atendimento em uma única plataforma. 
            Automatize processos, melhore a experiência do cliente e aumente suas vendas.
          </p>
          
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-[#7B61FF] to-[#C0C0C0] hover:from-[#6A4FFF] hover:to-[#A0A0A0] px-6 py-3 rounded-md transition-all duration-300 text-sm font-medium transform hover:scale-105"
          >
            Agendar Demonstração
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-[-0.03em]">Funcionalidades Principais</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <feature.icon className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2 tracking-[-0.03em]">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                    <ul className="space-y-1.5">
                      {feature.subFeatures.map((subFeature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          {subFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-[-0.03em]">Mais Recursos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Tag, title: "Etiquetas", description: "Organize seus contatos com etiquetas personalizadas" },
              { icon: Clipboard, title: "Protocolos", description: "Crie protocolos de atendimento padronizados" },
              { icon: Send, title: "Disparo em Massa", description: "Envie mensagens para múltiplos contatos" },
              { icon: Users, title: "Gerenciamento de Grupo", description: "Gerencie grupos do WhatsApp com facilidade" },
              { icon: Calendar, title: "Agendamentos", description: "Programe mensagens para datas específicas" },
              { icon: Bell, title: "Notificações", description: "Receba alertas de novos contatos e mensagens" }
            ].map((feature, index) => (
              <div key={index} className="bg-black/30 p-5 rounded-xl border border-purple-500/20">
                <feature.icon className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold mb-1.5 tracking-[-0.03em]">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-[-0.03em]">
                Plugue <span className="text-purple-400">Agentes de I.A</span> com Facilidade
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Integração direta com as principais plataformas de IA do mercado para soluções personalizadas.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Chat GPT", icon: "🤖" },
                  { name: "Gemini", icon: "✨" },
                  { name: "Claude", icon: "🧠" },
                  { name: "Grok", icon: "⚡" },
                  { name: "Deepseek", icon: "🔍" },
                  { name: "Ollama", icon: "🦙" },
                  { name: "Qwen", icon: "🌐" },
                  { name: "LM Studio", icon: "💻" }
                ].map((ai, index) => (
                  <div key={index} className="flex items-center gap-2 bg-black/30 p-3 rounded-lg border border-purple-500/20">
                    <span className="text-xl">{ai.icon}</span>
                    <span className="font-medium text-sm">{ai.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black/30 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 tracking-[-0.03em]">Soluções Open Source</h3>
              <p className="text-gray-300 text-sm mb-6">
                Implemente soluções de IA no seu próprio servidor com total controle e segurança.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Total controle sobre seus dados
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Personalização completa
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Integração simplificada
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Suporte técnico dedicado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-24 px-6 bg-[#0F0F0F] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/5 to-transparent" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Dashboard <span className="text-[#7B61FF]">Inteligente</span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                Análise completa e em tempo real de todos os seus atendimentos e métricas de desempenho.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#7B61FF] animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Gráficos de Evolução */}
            <div className="bg-[#0A0A0A] p-8 rounded-xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold tracking-tight">Evolução de Atendimentos</h3>
                <div className="flex items-center gap-2 text-[#7B61FF] text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="h-64 bg-[#0F0F0F] rounded-lg p-6">
                <div className="h-full flex items-end gap-2">
                  {[30, 45, 60, 40, 75, 90, 65].map((height, index) => (
                    <div key={index} className="flex-1 group">
                      <div 
                        className="bg-[#7B61FF]/20 group-hover:bg-[#7B61FF]/40 transition-colors rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 text-sm text-gray-400">
                  <span>Seg</span>
                  <span>Ter</span>
                  <span>Qua</span>
                  <span>Qui</span>
                  <span>Sex</span>
                  <span>Sáb</span>
                  <span>Dom</span>
                </div>
              </div>
            </div>

            {/* Distribuição por Canal */}
            <div className="bg-[#0A0A0A] p-8 rounded-xl border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold tracking-tight">Distribuição por Canal</h3>
                <div className="text-sm text-gray-400">Últimos 7 dias</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "WhatsApp", value: "45%", color: "#7B61FF" },
                  { name: "Email", value: "25%", color: "#FF6B6B" },
                  { name: "Chat", value: "20%", color: "#4ECDC4" },
                  { name: "Outros", value: "10%", color: "#FFD166" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-2">
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-1.5 bg-[#0F0F0F] rounded-full">
                        <div 
                          className="h-full rounded-full transition-all duration-300"
                          style={{ 
                            width: item.value,
                            backgroundColor: item.color
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KPIs e Métricas */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Total Atendimentos", value: "1,234", change: "+12.5%", icon: MessageSquare },
              { title: "Tempo Médio", value: "2m 34s", change: "-8.2%", icon: Clock },
              { title: "Satisfação", value: "94%", change: "+3.1%", icon: Target },
              { title: "Novos Contatos", value: "156", change: "+24.7%", icon: Users }
            ].map((kpi, index) => (
              <div key={index} className="bg-[#0A0A0A] p-8 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] flex items-center justify-center">
                    <kpi.icon className="w-5 h-5 text-[#7B61FF]" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${kpi.change.startsWith('+') ? 'text-[#7B61FF]' : 'text-[#FF6B6B]'}`}>
                    {kpi.change.startsWith('+') ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span>{kpi.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{kpi.value}</div>
                <div className="text-sm text-gray-400">{kpi.title}</div>
              </div>
            ))}
          </div>

          {/* Gráfico de Área */}
          <div className="bg-[#0A0A0A] p-8 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold tracking-tight">Evolução de Receita</h3>
              <div className="flex items-center gap-2 text-[#7B61FF] text-sm">
                <ArrowUpRight className="w-4 h-4" />
                <span>+18.3%</span>
              </div>
            </div>
            <div className="h-80 bg-[#0F0F0F] rounded-lg p-6">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={[
                    { name: "Jan", value: 20 },
                    { name: "Fev", value: 35 },
                    { name: "Mar", value: 50 },
                    { name: "Abr", value: 30 },
                    { name: "Mai", value: 65 },
                    { name: "Jun", value: 80 },
                    { name: "Jul", value: 55 },
                    { name: "Ago", value: 70 },
                    { name: "Set", value: 45 },
                    { name: "Out", value: 60 },
                    { name: "Nov", value: 75 },
                    { name: "Dez", value: 90 }
                  ]}
                  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="#ffffff10" 
                    vertical={false}
                  />
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff40"
                    tick={{ fill: '#ffffff40', fontSize: 12 }}
                    axisLine={{ stroke: '#ffffff10' }}
                  />
                  <YAxis 
                    stroke="#ffffff40"
                    tick={{ fill: '#ffffff40', fontSize: 12 }}
                    axisLine={{ stroke: '#ffffff10' }}
                    tickFormatter={(value) => `R$ ${value}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A0A0A',
                      border: '1px solid #ffffff10',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: '#ffffff80' }}
                    formatter={(value) => [`R$ ${value}k`, 'Receita']}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#7B61FF"
                    strokeWidth={2}
                    dot={{
                      fill: '#7B61FF',
                      stroke: '#0A0A0A',
                      strokeWidth: 2,
                      r: 4
                    }}
                    activeDot={{
                      fill: '#6A4FFF',
                      stroke: '#0A0A0A',
                      strokeWidth: 2,
                      r: 6
                    }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-6 text-sm text-gray-400">
              <span>2023</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0F0F0F] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/5 to-transparent" />
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 mb-8 backdrop-blur-sm">
            <span className="text-sm text-[#7B61FF]">Agende sua demonstração</span>
            <ChevronRight className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Veja o <span className="text-[#7B61FF]">XASE</span> em ação
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma demonstração personalizada e descubra como o XASE pode transformar seu atendimento ao cliente.
          </p>
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-[#7B61FF] to-[#C0C0C0] hover:from-[#6A4FFF] hover:to-[#A0A0A0] px-8 py-4 rounded-md transition-colors text-sm font-medium"
          >
            Agendar Demonstração
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-purple-500/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4 tracking-[-0.03em]">XASE</div>
              <p className="text-gray-400 text-sm">
                A solução completa para gerenciamento de atendimento e relacionamento com clientes.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Produto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Funcionalidades</li>
                <li>Preços</li>
                <li>Integrações</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Suporte</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Central de Ajuda</li>
                <li>Documentação</li>
                <li>Tutoriais</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Termos de Uso</li>
                <li>Privacidade</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-10 pt-8 text-center text-gray-400 text-sm">
            © 2024 XASE. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <ChatWidget showChat={showChat} onClose={() => setShowChat(false)} />
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12L11 15L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
