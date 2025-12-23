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
      title: "Multiple Service Channels",
      description: "Complete integration with Official WhatsApp (WABA), unofficial APIs, Facebook Messenger, Instagram, Webchat, Email, and Telegram.",
      icon: Globe,
      subFeatures: [
        "Official WhatsApp API (WABA)",
        "Unofficial WhatsApp APIs (bailyes, webjs, meow, evolution)",
        "Notificame Hub (Facebook Messenger, Instagram, Webchat, Email)",
        "Telegram"
      ]
    },
    {
      title: "Centralized Management",
      description: "All chats in a single screen with ticket system and service sectorization.",
      icon: MessageSquare,
      subFeatures: [
        "All chats in one screen",
        "Ticket System",
        "Service sectorization (queues)",
        "Multiple Agents"
      ]
    },
    {
      title: "Smart Automation",
      description: "Message scheduling and chatbot integration to optimize your service.",
      icon: Bot,
      subFeatures: [
        "Message scheduling",
        "Chatbot integration",
        "Integrated artificial intelligence",
        "Bulk messaging"
      ]
    },
    {
      title: "Analysis and Management",
      description: "Complete analytical dashboard with reports and service metrics.",
      icon: BarChart,
      subFeatures: [
        "Analytics dashboard",
        "General service reports",
        "Service evaluations",
        "Export WhatsApp contacts"
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
            <img src="/logo-xase.png" alt="Xase logo" className="h-5 w-5" />
            <span className="font-light tracking-tight text-sm text-[#BFC3C6]">XASE</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/5 to-transparent" />
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 mb-6 backdrop-blur-sm">
            <span className="text-xs text-[#7B61FF]">New Version 2.0</span>
            <ChevronRight className="w-3 h-3 text-[#7B61FF]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Complete CRM for WhatsApp <span className="text-[#7B61FF]">with AI</span> and Multiple Channels
          </h1>
          
          <p className="text-base text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Manage all your customer service channels in a single platform. 
            Automate processes, improve customer experience, and increase your sales.
          </p>
          
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-[#7B61FF] to-[#C0C0C0] hover:from-[#6A4FFF] hover:to-[#A0A0A0] px-6 py-3 rounded-md transition-all duration-300 text-sm font-medium transform hover:scale-105"
          >
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-[-0.03em]">Key Features</h2>
          
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
          <h2 className="text-3xl font-bold text-center mb-12 tracking-[-0.03em]">More Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Tag, title: "Labels", description: "Organize your contacts with custom labels" },
              { icon: Clipboard, title: "Protocols", description: "Create standardized service protocols" },
              { icon: Send, title: "Bulk Messaging", description: "Send messages to multiple contacts" },
              { icon: Users, title: "Group Management", description: "Manage WhatsApp groups easily" },
              { icon: Calendar, title: "Scheduling", description: "Schedule messages for specific dates" },
              { icon: Bell, title: "Notifications", description: "Receive alerts for new contacts and messages" }
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
                Plug <span className="text-purple-400">AI Agents</span> with Ease
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Direct integration with leading AI platforms in the market for customized solutions.
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
              <h3 className="text-xl font-bold mb-4 tracking-[-0.03em]">Open Source Solutions</h3>
              <p className="text-gray-300 text-sm mb-6">
                Implement AI solutions on your own server with total control and security.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Total control over your data
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Complete customization
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Simplified integration
                </li>
                <li className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Dedicated technical support
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
                Smart <span className="text-[#7B61FF]">Dashboard</span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                Complete and real-time analysis of all your services and performance metrics.
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
                <h3 className="text-xl font-bold tracking-tight">Service Evolution</h3>
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
                <h3 className="text-xl font-bold tracking-tight">Distribution by Channel</h3>
                <div className="text-sm text-gray-400">Last 7 days</div>
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
              <h3 className="text-xl font-bold tracking-tight">Revenue Evolution</h3>
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
            <span className="text-sm text-[#7B61FF]">Schedule your demo</span>
            <ChevronRight className="w-4 h-4 text-[#7B61FF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            See <span className="text-[#7B61FF]">XASE</span> in Action
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized demo and discover how XASE can transform your customer service.
          </p>
          <button 
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-[#7B61FF] to-[#C0C0C0] hover:from-[#6A4FFF] hover:to-[#A0A0A0] px-8 py-4 rounded-md transition-colors text-sm font-medium"
          >
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-purple-500/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <img src="/logo-xase.png" alt="Xase logo" className="h-5 w-5" />
                  <span className="font-light tracking-tight text-sm text-[#BFC3C6]">XASE</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                The complete solution for customer service management and customer relationship.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-10 pt-8 text-center text-gray-400 text-sm">
            © 2024 XASE. All rights reserved.
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
