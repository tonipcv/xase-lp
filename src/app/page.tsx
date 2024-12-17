'use client'
import { Shield, Search, Zap, ChevronRight, Mail, Github, Linkedin, Twitter, Database, Rocket, Target } from "lucide-react";
import { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "XASE",
          url: "https://xase.com",
          logo: "https://xase.com/logo.png",
          description: "Enterprise SaaS Development & Scaling Solutions. We help companies build and scale secure, high-performance SaaS products.",
          slogan: "Build & Scale Your SaaS with Confidence",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "sales",
            areaServed: "Worldwide",
            availableLanguage: ["English"]
          },
          sameAs: [
            "https://twitter.com/xase",
            "https://linkedin.com/company/xase",
            "https://github.com/xase"
          ],
          offers: {
            "@type": "AggregateOffer",
            offers: [
              {
                "@type": "Offer",
                name: "SaaS Development",
                description: "Full-cycle development of SaaS products from idea to launch"
              },
              {
                "@type": "Offer",
                name: "Security Implementation",
                description: "Enterprise-grade security setup and compliance implementation"
              },
              {
                "@type": "Offer",
                name: "Database Optimization",
                description: "Performance tuning and scaling of database infrastructure"
              },
              {
                "@type": "Offer",
                name: "Growth Consulting",
                description: "Strategic planning and implementation for SaaS scaling"
              }
            ]
          },
          knowsAbout: [
            "SaaS Development",
            "Cloud Architecture",
            "Database Scaling",
            "Security Implementation",
            "Performance Optimization",
            "Enterprise Software",
            "API Development",
            "DevOps"
          ]
        })
      }}
    />
  )
}

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [randomDots, setRandomDots] = useState<Array<{ left: string; top: string }>>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Gerar os pontos aleatórios apenas no cliente
    const dots = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setRandomDots(dots);
  }, []);

  const closeModal = () => setActiveModal(null);

  // Componentes dos Modais
  const ConfirmationModal = () => (
    <div className="text-center">
      <div className="mb-6 relative">
        <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
      </div>
      
      <h2 className="text-3xl text-gray-900 font-medium tracking-tight mb-4">
        Thank You!
      </h2>
      
      <div className="space-y-4 mb-8">
        <p className="text-gray-700 text-lg">
          Your request has been successfully submitted.
        </p>
        <p className="text-gray-600">
          Our team will review your information and contact you within the next 24 hours to schedule a call.
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">What's Next?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">1</span>
              <span>Review of your project requirements</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">2</span>
              <span>Initial proposal preparation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">3</span>
              <span>Scheduling discovery call</span>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Have Questions?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Feel free to reach out to us directly:
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="mailto:contact@xase.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Mail className="w-4 h-4" />
              contact@xase.com
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          setIsSubmitted(false);
          setActiveModal(null);
        }}
        className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black/90 transition-colors text-sm font-medium mt-8"
      >
        Close
      </button>
    </div>
  );

  const ContactModal = () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Aqui você adicionaria a lógica de envio do formulário
      setIsSubmitted(true);
    };

    if (isSubmitted) {
      return <ConfirmationModal />;
    }

    return (
      <div>
        <h2 className="text-3xl text-gray-900 font-medium tracking-tight mb-2">Schedule a Call</h2>
        <p className="text-gray-700 text-lg mb-8">
          Let&apos;s discuss your project and how we can help you scale your SaaS.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Informações da Empresa */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Company Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Company Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Company Size</label>
                <select className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all">
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
            </div>
          </div>

          {/* Informações do Projeto */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Project Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Project Stage</label>
                <select className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all">
                  <option value="">Select stage</option>
                  <option value="idea">Idea/Concept</option>
                  <option value="mvp">MVP Development</option>
                  <option value="launched">Already Launched</option>
                  <option value="scaling">Scaling Phase</option>
                  <option value="enterprise">Enterprise Level</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Monthly Revenue</label>
                <select className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all">
                  <option value="">Select range</option>
                  <option value="pre-revenue">Pre-revenue</option>
                  <option value="1-10k">$1K - $10K</option>
                  <option value="10-50k">$10K - $50K</option>
                  <option value="50-100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Investment Capacity (Monthly)</label>
                <select className="w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all">
                  <option value="">Select budget</option>
                  <option value="5-10k">$5K - $10K</option>
                  <option value="10-25k">$10K - $25K</option>
                  <option value="25-50k">$25K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Necessidades Específicas */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Project Requirements</h3>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-900">Primary Needs</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Security Implementation",
                  "Performance Optimization",
                  "Architecture Design",
                  "Database Scaling",
                  "API Development",
                  "Cloud Infrastructure",
                  "DevOps Setup",
                  "Compliance & Regulations"
                ].map((need, index) => (
                  <label key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                    <span>{need}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Additional Information</label>
            <textarea
              className="w-full border border-gray-200 p-3 rounded-lg bg-white h-32 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all resize-none"
              placeholder="Tell us more about your project and specific needs..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black/90 transition-colors text-sm font-medium"
          >
            Schedule Call
          </button>
        </form>
      </div>
    );
  };

  const ServicesModal = () => (
    <div>
      <h2 className="text-3xl text-gray-900 font-medium tracking-tight mb-2">Our Services</h2>
      <p className="text-gray-700 text-lg mb-8">
        Comprehensive solutions for your SaaS journey
      </p>
      <div className="space-y-4">
        {[
          {
            title: "SaaS Development",
            description: "Full-cycle development of your SaaS product from idea to launch",
            icon: Rocket,
          },
          {
            title: "Security Implementation",
            description: "Enterprise-grade security setup and compliance implementation",
            icon: Shield,
          },
          {
            title: "Database Optimization",
            description: "Performance tuning and scaling of your database infrastructure",
            icon: Database,
          },
          {
            title: "Growth Consulting",
            description: "Strategic planning and implementation for SaaS scaling",
            icon: Target,
          },
          {
            title: "Performance Monitoring",
            description: "Real-time analytics and system performance optimization",
            icon: Zap,
          },
          {
            title: "API Integration",
            description: "Seamless third-party integrations and API development",
            icon: Search,
          },
        ].map((service, index) => (
          <div 
            key={index} 
            className="border border-gray-200 p-6 rounded-lg bg-white hover:border-red-100 transition-all hover:shadow-sm group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-50/50 group-hover:bg-red-50 group-hover:scale-110 transition-all">
                <service.icon className="w-6 h-6 text-red-600/80 group-hover:text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-red-900/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setActiveModal('contact')}
        className="w-full bg-red-900 text-white py-3 px-4 rounded-lg hover:bg-red-950 transition-colors text-sm font-medium mt-8 flex items-center justify-center gap-2 group"
      >
        Get Started
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-[#fafafa] text-black font-helvetica relative overflow-hidden">
        {/* Geometric Decorations */}
        <div className="absolute top-20 right-[10%] w-64 h-64 border border-gray-200 rounded-full opacity-20 transform rotate-45" />
        <div className="absolute top-40 right-[5%] w-32 h-32 border border-gray-200 rounded-full opacity-20" />
        <div className="absolute top-60 left-[5%] w-96 h-96 bg-gray-50 rounded-full opacity-30 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{
               backgroundImage: `linear-gradient(#000 1px, transparent 1px), 
                                linear-gradient(90deg, #000 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} 
        />

        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-xl tracking-[0.2em] font-medium" style={{
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFeatureSettings: '"salt" 1, "ss01" 1',
            }}>XASE</span>
            
            <div className="hidden md:flex gap-8">
              <a href="#services" className="font-normal hover:text-gray-500 transition-colors">Services</a>
              <a href="#solutions" className="font-normal hover:text-gray-500 transition-colors">Solutions</a>
              <a href="#process" className="font-normal hover:text-gray-500 transition-colors">Process</a>
              <a href="#contact" className="font-normal hover:text-gray-500 transition-colors">Contact</a>
            </div>

            <button 
              onClick={() => setActiveModal('contact')}
              className="border border-black hover:bg-black hover:text-white px-6 py-2 transition-colors text-sm font-normal"
            >
              Scale Your SaaS
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="absolute right-0 top-20 w-40 h-40">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-pulse">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" className="fill-none stroke-gray-200 stroke-[0.5]" />
                  <circle cx="50" cy="50" r="20" className="fill-none stroke-gray-200 stroke-[0.5]" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative">
            {/* Decorative Line */}
            <div className="absolute left-0 top-1/2 w-20 h-[1px] bg-gray-200 hidden lg:block" />
            <div className="absolute right-0 top-1/2 w-20 h-[1px] bg-gray-200 hidden lg:block" />
            
            <h1 className="text-5xl md:text-6xl font-medium mb-6 tracking-tight">
              Build &amp; Scale Your SaaS with Confidence
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
              We specialize in creating secure, scalable SaaS solutions from scratch or 
              transforming existing products for enterprise-scale growth.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setActiveModal('contact')}
                className="bg-black text-white hover:bg-gray-900 px-8 py-3 transition-colors text-sm font-normal group"
              >
                Start Your Project
                <div className="w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveModal('services')}
                className="border border-black hover:bg-black hover:text-white px-8 py-3 transition-colors text-sm font-normal"
              >
                View Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 border-t border-gray-100 bg-white relative">
          <div className="container mx-auto max-w-4xl relative">
            <h2 className="text-2xl font-medium mb-12 text-center tracking-tight">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Security First",
                  description: "Enterprise-grade security implementation from day one, with continuous monitoring and compliance",
                  Icon: Shield,
                },
                {
                  title: "Database Architecture",
                  description: "Scalable database design and optimization for high-performance SaaS applications",
                  Icon: Database,
                },
                {
                  title: "Growth Strategy",
                  description: "Data-driven marketing and scalability planning for sustainable SaaS growth",
                  Icon: Target,
                }
              ].map((service, index) => (
                <div key={index} className="border border-gray-100 p-6 hover:border-gray-200 transition-colors bg-[#fafafa] relative">
                  <service.Icon className="w-8 h-8 mb-4 text-gray-900 stroke-[1.5]" />
                  <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                  <p className="text-gray-700 font-normal">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium mb-4 text-center tracking-tight">Tech Stack</h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable and secure SaaS solutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Next.js", description: "Frontend Framework" },
                { name: "Node.js", description: "Backend Runtime" },
                { name: "PostgreSQL", description: "Primary Database" },
                { name: "Redis", description: "Caching Layer" },
                { name: "AWS", description: "Cloud Infrastructure" },
                { name: "Docker", description: "Containerization" },
                { name: "Kubernetes", description: "Orchestration" },
                { name: "Terraform", description: "Infrastructure as Code" }
              ].map((tech, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg border border-gray-100">
                  <h3 className="font-medium mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-700">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-gray-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium mb-4 text-center tracking-tight">Key Features</h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to build and scale your SaaS
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Multi-Tenant Architecture",
                  description: "Isolated and secure multi-tenant infrastructure for optimal resource utilization"
                },
                {
                  title: "Scalable Infrastructure",
                  description: "Auto-scaling capabilities to handle growing user base and traffic spikes"
                },
                {
                  title: "Security Compliance",
                  description: "Built-in security features meeting industry standards (SOC2, GDPR, HIPAA)"
                },
                {
                  title: "Performance Monitoring",
                  description: "Real-time monitoring and analytics for system performance"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white border border-gray-100 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-6 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-medium mb-4">Ready to Transform Your SaaS?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join successful SaaS companies that trust us with their scaling journey
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setActiveModal('contact')}
                className="bg-white/90 text-black hover:bg-white px-8 py-3 transition-colors text-sm font-medium border border-transparent"
              >
                Schedule a Call
              </button>
              <button 
                onClick={() => setActiveModal('services')}
                className="border border-white/80 hover:border-white hover:bg-white hover:text-black px-8 py-3 transition-colors text-sm font-medium"
              >
                View Services
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-6 border-t border-gray-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium mb-12 text-center tracking-tight">Our Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Build from Scratch */}
              <div className="relative">
                <div className="absolute -inset-4 border border-gray-100 -z-10 rounded-lg" />
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Rocket className="w-6 h-6 text-gray-900" />
                      Building from Scratch
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We transform your SaaS idea into a scalable, secure, and market-ready product with our comprehensive development approach.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50">
                        <span className="text-sm text-gray-400">01</span>
                      </div>
                      <h4 className="font-medium mb-2">Foundation Planning</h4>
                      <p className="text-sm text-gray-700">Architecture design, security framework, and scalability strategy</p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50">
                        <span className="text-sm text-gray-400">02</span>
                      </div>
                      <h4 className="font-medium mb-2">Core Development</h4>
                      <p className="text-sm text-gray-700">Secure codebase, optimized database, and essential features</p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50">
                        <span className="text-sm text-gray-400">03</span>
                      </div>
                      <h4 className="font-medium mb-2">Growth Implementation</h4>
                      <p className="text-sm text-gray-700">Analytics integration, marketing tools, and scaling capabilities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scale Existing */}
              <div className="relative">
                <div className="absolute -inset-4 border border-gray-100 -z-10 rounded-lg" />
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Target className="w-6 h-6 text-gray-900" />
                      Scaling Existing SaaS
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We optimize and enhance your existing SaaS platform for improved security, performance, and market growth.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50">
                        <span className="text-sm text-gray-400">01</span>
                      </div>
                      <h4 className="font-medium mb-2">Technical Assessment</h4>
                      <p className="text-sm text-gray-700">Security audit, performance analysis, and scalability evaluation</p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50">
                        <span className="text-sm text-gray-400">02</span>
                      </div>
                      <h4 className="font-medium mb-2">Strategic Enhancement</h4>
                      <p className="text-sm text-gray-700">Infrastructure optimization, security hardening, and performance tuning</p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-50">
                        <span className="text-sm text-gray-400">03</span>
                      </div>
                      <h4 className="font-medium mb-2">Scale Acceleration</h4>
                      <p className="text-sm text-gray-700">Growth optimization, market expansion, and continuous improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 border-t border-gray-100">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "100%", label: "Success Rate" },
                { number: "10x", label: "Average Scale Factor" },
                { number: "24/7", label: "Security Monitoring" }
              ].map((stat, index) => (
                <div key={index} className="text-center relative">
                  <span className="block text-3xl font-medium mb-1">{stat.number}</span>
                  <span className="text-gray-600 text-sm font-normal">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 border-t border-gray-100 relative">
          <div className="container mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-medium mb-4 tracking-tight">Ready to Scale Your SaaS?</h2>
            <p className="text-gray-700 mb-8 font-normal">
              Let's discuss how we can help you build or scale your SaaS with enterprise-grade security and performance
            </p>
            <form className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gray-300 flex-1 max-w-sm text-sm font-normal"
              />
              <button className="bg-black text-white hover:bg-gray-900 px-8 py-3 transition-colors text-sm font-normal">
                Get Started
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section - Movido para o final */}
        <section className="py-20 px-6 border-t border-gray-100 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium mb-4 text-center tracking-tight">Common Questions</h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
            <div className="space-y-6">
              {[
                {
                  question: "How long does it typically take to build a SaaS from scratch?",
                  answer: "The timeline varies based on complexity, but typically 3-6 months for MVP and 6-12 months for a full-featured product."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Yes, we offer continuous monitoring, maintenance, and support packages tailored to your needs."
                },
                {
                  question: "What security standards do you comply with?",
                  answer: "We implement security measures compliant with SOC2, GDPR, HIPAA, and other industry standards as required."
                },
                {
                  question: "Can you help with existing SaaS applications?",
                  answer: "Yes, we specialize in optimizing and scaling existing SaaS applications for better performance and security."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-6">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-12 px-6 bg-white relative">
          <div className="absolute inset-0 opacity-[0.02]">
            {randomDots.map((dot, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black"
                style={{
                  left: dot.left,
                  top: dot.top,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <span className="text-xl font-medium block mb-4 tracking-tight">XASE</span>
                <p className="text-gray-700 font-normal">
                  Leading the way in cybersecurity
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-4">Services</h3>
                <ul className="text-gray-700 space-y-2 font-normal">
                  <li>Threat Detection</li>
                  <li>Penetration Testing</li>
                  <li>Incident Response</li>
                  <li>Security Consulting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <ul className="text-gray-700 space-y-2 font-normal">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Connect</h3>
                <div className="flex gap-4 text-gray-700">
                  <Twitter className="w-5 h-5 hover:text-black cursor-pointer stroke-[1.5]" />
                  <Linkedin className="w-5 h-5 hover:text-black cursor-pointer stroke-[1.5]" />
                  <Github className="w-5 h-5 hover:text-black cursor-pointer stroke-[1.5]" />
                  <Mail className="w-5 h-5 hover:text-black cursor-pointer stroke-[1.5]" />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-600 font-normal">
              <p>© 2024 XASE - SaaS Security & Scaling Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <Modal isOpen={activeModal === 'contact'} onClose={closeModal}>
        <ContactModal />
      </Modal>

      <Modal isOpen={activeModal === 'services'} onClose={closeModal}>
        <ServicesModal />
      </Modal>
    </>
  );
}
