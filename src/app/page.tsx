'use client'
import { Shield, Search, Zap, ChevronRight, Mail, Github, Linkedin, Twitter, Database, Rocket, Target, Users, BarChart, DollarSign, Video, Share } from "lucide-react";
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
          "@type": "Organization",
          name: "XASE",
          url: "https://xase.com",
          logo: "https://xase.com/logo.png",
          description: "Enterprise Technology Infrastructure for Content Creators. Build and scale your content empire with our advanced tech solutions.",
          slogan: "Power Your Content Empire",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "sales",
            areaServed: "Worldwide",
            availableLanguage: ["English", "Portuguese"]
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
                name: "Content Platform",
                description: "Custom-built platforms for content monetization and audience engagement"
              },
              {
                "@type": "Offer",
                name: "Community Hub",
                description: "Scalable community platforms with advanced member management"
              },
              {
                "@type": "Offer",
                name: "Analytics Dashboard",
                description: "Real-time analytics and insights for audience engagement"
              },
              {
                "@type": "Offer",
                name: "Monetization System",
                description: "Robust payment infrastructure for multiple revenue streams"
              }
            ]
          },
          knowsAbout: [
            "Content Platform Development",
            "Community Management",
            "Audience Analytics",
            "Monetization Systems",
            "Live Streaming",
            "Digital Product Delivery",
            "Member Management",
            "Content Distribution"
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
        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-gray-900" 
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
      setIsSubmitted(true);
    };

    if (isSubmitted) {
      return <ConfirmationModal />;
    }

    const inputStyles = "w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all text-gray-900 placeholder:text-gray-500";
    const labelStyles = "block text-sm font-medium mb-2 text-gray-900";
    const selectStyles = "w-full border border-gray-200 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all text-gray-900";

    return (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-gray-900 font-medium tracking-tight mb-2">Schedule a Call</h2>
        <p className="text-gray-700 text-lg mb-8">
          Let&apos;s discuss how we can help scale your content platform.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Linha 1: Informações Básicas */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className={labelStyles}>Name</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className={labelStyles}>Email</label>
              <input
                type="email"
                className={inputStyles}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className={labelStyles}>Platform/Network</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Instagram, YouTube, etc."
              />
            </div>
          </div>

          {/* Linha 2: Métricas */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className={labelStyles}>Audience Size</label>
              <select className={selectStyles} required>
                <option value="">Select size</option>
                <option value="10-50k">10K - 50K followers</option>
                <option value="50-100k">50K - 100K followers</option>
                <option value="100-500k">100K - 500K followers</option>
                <option value="500k-1m">500K - 1M followers</option>
                <option value="1m+">1M+ followers</option>
              </select>
            </div>
            <div>
              <label className={labelStyles}>Monthly Revenue</label>
              <select className={selectStyles} required>
                <option value="">Select range</option>
                <option value="0-5k">$0 - $5K</option>
                <option value="5-20k">$5K - $20K</option>
                <option value="20-50k">$20K - $50K</option>
                <option value="50-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>
            <div>
              <label className={labelStyles}>Content Type</label>
              <select className={selectStyles} required>
                <option value="">Select type</option>
                <option value="video">Video Content</option>
                <option value="courses">Online Courses</option>
                <option value="community">Community/Membership</option>
                <option value="coaching">Coaching/Consulting</option>
                <option value="mixed">Mixed Content</option>
              </select>
            </div>
          </div>

          {/* Linha 3: Necessidades */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyles}>Primary Needs</label>
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                {[
                  "Content Platform",
                  "Community Management",
                  "Payment Systems",
                  "Analytics Dashboard",
                  "Live Streaming",
                  "Course Platform",
                  "Mobile App",
                  "API Integration"
                ].map((need, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span>{need}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelStyles}>Project Details</label>
              <textarea
                className={`${inputStyles} h-[158px] resize-none`}
                placeholder="Tell us about your goals and specific needs..."
                required
              />
            </div>
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
      <h2 className="text-3xl text-gray-900 font-medium tracking-tight mb-2">Our Solutions</h2>
      <p className="text-gray-700 text-lg mb-8">
        Enterprise-grade technology infrastructure for content creators
      </p>
      <div className="space-y-4">
        {[
          {
            title: "Content Platform",
            description: "Custom-built platforms for content monetization, delivery, and audience engagement",
            icon: Rocket,
          },
          {
            title: "Community Hub",
            description: "Scalable community platforms with advanced member management",
            icon: Users,
          },
          {
            title: "Analytics Dashboard",
            description: "Real-time analytics and insights for audience engagement",
            icon: BarChart,
          },
          {
            title: "Monetization System",
            description: "Robust payment infrastructure for multiple revenue streams",
            icon: DollarSign,
          },
          {
            title: "Live Streaming",
            description: "High-performance streaming infrastructure with chat integration",
            icon: Video,
          },
          {
            title: "Content Distribution",
            description: "Multi-platform content delivery and syndication system",
            icon: Share,
          },
        ].map((service, index) => (
          <div 
            key={index} 
            className="border border-[#1d1d1f] p-8 hover:border-[#2d2d2f] transition-colors bg-black relative hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-black group-hover:bg-gray-900 group-hover:scale-110 transition-all">
                <service.icon className="w-8 h-8 mb-6 text-white group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#f5f5f7] text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setActiveModal('contact')}
        className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors text-sm font-light mt-8 flex items-center justify-center gap-2 group"
      >
        Book a Demo
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  return (
    <>
      <JsonLd />
      <div className={`min-h-screen bg-black text-white ${montserrat.className} relative overflow-hidden`}>
        {/* Geometric Decorations - ajuste para tons mais escuros */}
        <div className="absolute top-20 right-[10%] w-64 h-64 border border-gray-800 rounded-full opacity-20 transform rotate-45" />
        <div className="absolute top-40 right-[5%] w-32 h-32 border border-gray-800 rounded-full opacity-20" />
        <div className="absolute top-60 left-[5%] w-96 h-96 bg-gray-900 rounded-full opacity-30 blur-3xl" />
        
        {/* Grid Pattern - ajuste para um tom mais escuro */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), 
                                linear-gradient(90deg, #fff 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} 
        />

        {/* Navigation - ajuste para fundo escuro */}
        <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-xl tracking-[0.4em] font-extralight text-white" style={{
              textTransform: 'uppercase',
              fontFeatureSettings: '"salt" 1, "ss01" 1',
            }}>XASE</span>
            
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors font-light">Services</a>
              <a href="#solutions" className="text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors font-light">Solutions</a>
              <a href="#process" className="text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors font-light">Process</a>
              <a href="#contact" className="text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors font-light">Contact</a>
            </div>

            <button 
              onClick={() => setActiveModal('contact')}
              className="border border-white hover:bg-white hover:text-black px-6 py-2 transition-colors text-sm font-light"
            >
              Book a Demo
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 relative">
          <div className="container mx-auto max-w-3xl text-center relative">
            <h1 className="text-white text-4xl md:text-5xl font-extralight tracking-tight leading-tight mb-8">
              Power Your Content Empire with Enterprise Tech
            </h1>
            <p className="text-[#f5f5f7] text-lg leading-relaxed font-light mb-12">
              We provide enterprise-grade technology infrastructure for influencers and content creators 
              to scale their digital presence and maximize revenue.
            </p>
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => setActiveModal('contact')}
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 transition-colors text-sm font-normal group font-light"
              >
                Start Your Project
                <div className="w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveModal('services')}
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 transition-colors text-sm font-normal font-light"
              >
                View Solutions
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 border-t border-[#1d1d1f] bg-black relative">
          <div className="container mx-auto max-w-4xl relative">
            <h2 className="text-[#f5f5f7] text-3xl font-light mb-6 text-center tracking-tight">Our Expertise</h2>
            <p className="text-[#a1a1a6] text-center mb-16 max-w-2xl mx-auto font-light">
              Enterprise-grade technology infrastructure for content creators
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Scalable Platforms",
                  description: "Custom-built content and community platforms that grow with your audience",
                  Icon: Users,
                },
                {
                  title: "Revenue Systems",
                  description: "Multi-channel monetization infrastructure for sustainable growth",
                  Icon: DollarSign,
                },
                {
                  title: "Audience Insights",
                  description: "Advanced analytics and engagement tracking for data-driven decisions",
                  Icon: BarChart,
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="border border-[#1d1d1f] p-8 hover:border-[#2d2d2f] transition-colors bg-black relative hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-black group-hover:bg-gray-900 group-hover:scale-110 transition-all">
                      <service.Icon className="w-8 h-8 mb-6 text-white stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-4 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#f5f5f7] text-sm leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-black">
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
                <div key={index} className="text-center p-6 bg-black rounded-lg border border-gray-700 hover:border-gray-600 hover:shadow-sm transition-all">
                  <h3 className="font-medium mb-1">{tech.name}</h3>
                  <p className="text-gray-600 text-sm font-normal">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 border-t border-[#1d1d1f]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-[#f5f5f7] text-3xl font-light mb-6 text-center tracking-tight">Key Features</h2>
            <p className="text-[#a1a1a6] text-center mb-16 max-w-2xl mx-auto font-light">
              Everything you need to build and scale your SaaS
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Multi-Platform Integration",
                  description: "Seamless integration with major social media and content platforms"
                },
                {
                  title: "Revenue Optimization",
                  description: "Advanced systems for subscriptions, products, and sponsorships"
                },
                {
                  title: "Community Management",
                  description: "Tools for member engagement, moderation, and content access control"
                },
                {
                  title: "Performance Analytics",
                  description: "Real-time metrics and insights for content and audience growth"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-black border border-gray-800 rounded-lg hover:border-gray-700 hover:shadow-sm transition-all">
                  <h3 className="text-white font-light mb-2">{feature.title}</h3>
                  <p className="text-[#f5f5f7] font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-6 bg-black text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-[#f5f5f7] text-3xl font-light mb-6">Ready to Transform Your SaaS?</h2>
            <p className="text-[#a1a1a6] mb-12 max-w-2xl mx-auto font-light">
              Join successful SaaS companies that trust us with their scaling journey
            </p>
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => setActiveModal('contact')}
                className="bg-white/90 text-black hover:bg-white px-8 py-3 transition-colors text-sm font-light border border-transparent"
              >
                Book a Demo
              </button>
              <button 
                onClick={() => setActiveModal('services')}
                className="border border-white/80 hover:border-white hover:bg-white hover:text-black px-8 py-3 transition-colors text-sm font-normal font-light"
              >
                View Services
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-6 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium mb-12 text-center tracking-tight">Our Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Build from Scratch */}
              <div className="relative">
                <div className="absolute -inset-4 border border-gray-700 -z-10 rounded-lg" />
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Rocket className="w-6 h-6 text-white" />
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
                <div className="absolute -inset-4 border border-gray-700 -z-10 rounded-lg" />
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Target className="w-6 h-6 text-white" />
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
        <section className="py-16 px-6 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "10M+", label: "Monthly Active Users" },
                { number: "99.9%", label: "Platform Uptime" },
                { number: "24/7", label: "Technical Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center relative">
                  <span className="block text-white text-3xl font-light mb-1">{stat.number}</span>
                  <span className="text-[#f5f5f7] text-sm font-light">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 border-t border-gray-800 relative">
          <div className="container mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-medium mb-4 tracking-tight">Ready to Scale Your SaaS?</h2>
            <p className="text-gray-700 mb-8 font-normal">
              Let's discuss how we can help you build or scale your SaaS with enterprise-grade security and performance
            </p>
            <form className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gray-300 flex-1 max-w-sm text-sm font-normal font-light"
              />
              <button className="bg-black text-white hover:bg-gray-900 px-8 py-3 transition-colors text-sm font-normal font-light">
                Get Started
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section - Movido para o final */}
        <section className="py-20 px-6 border-t border-gray-800 bg-black">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-medium mb-4 text-center tracking-tight">Common Questions</h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
            <div className="space-y-6">
              {[
                {
                  question: "How can your infrastructure help me scale my content business?",
                  answer: "Our solutions provide enterprise-grade technology for content delivery, community management, and monetization, allowing you to focus on creating while we handle the technical infrastructure."
                },
                {
                  question: "What types of monetization do you support?",
                  answer: "We support multiple revenue streams including subscriptions, digital products, live events, sponsorships, and custom community features."
                },
                {
                  question: "Can you handle my existing audience size?",
                  answer: "Yes, our infrastructure is built to scale. We support creators with audiences from thousands to millions of followers."
                },
                {
                  question: "Do you provide analytics and insights?",
                  answer: "Yes, we offer comprehensive analytics covering audience engagement, revenue metrics, content performance, and growth trends."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all bg-black">
                  <h3 className="text-white font-light mb-2">{faq.question}</h3>
                  <p className="text-[#f5f5f7] font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1d1d1f] py-12 px-6 bg-black relative">
          <div className="absolute inset-0 opacity-[0.02]">
            {randomDots.map((dot, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white"
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
                <span className="text-white text-xl tracking-[0.4em] font-extralight block mb-4">XASE</span>
                <p className="text-[#86868b] font-extralight">
                  Leading the way in technology
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-4">Services</h3>
                <ul className="text-[#f5f5f7] space-y-2 font-light hover:text-white">
                  <li>Content Platform</li>
                  <li>Community Hub</li>
                  <li>Analytics Dashboard</li>
                  <li>Monetization System</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <ul className="text-[#f5f5f7] space-y-2 font-light hover:text-white">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Connect</h3>
                <div className="flex gap-4 text-gray-500">
                  <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors stroke-[1.5]" />
                  <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors stroke-[1.5]" />
                  <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors stroke-[1.5]" />
                  <Mail className="w-5 h-5 hover:text-white cursor-pointer transition-colors stroke-[1.5]" />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-700 font-normal">
              <p>© 2024 XASE - Technology Infrastructure for Creators. All rights reserved.</p>
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
