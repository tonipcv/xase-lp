'use client';
import { useState } from 'react';
import { Lora } from 'next/font/google';
import { ArrowRight, BookOpen, X } from 'lucide-react';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-lora',
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className={`min-h-screen bg-[#16181b] text-white ${lora.variable} font-sans flex flex-col justify-center items-center`}>
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
          AI Agent Provider for Whatsapp
        </h1>
        
        <p className="text-lg text-gray-300 mb-10 max-w-md mx-auto leading-relaxed">
          A real cx agent that can handle all your customer service needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://app.xase.ai/register" 
            className="flex items-center justify-center gap-2 text-center bg-[#2d2d2d] border border-[#4d4d4d] hover:bg-[#3d3d3d] px-6 py-3 rounded-full transition-all duration-300 text-sm font-light"
          >
            <ArrowRight className="w-4 h-4 text-white" />
            Get Started
          </a>
          <button 
            onClick={openModal} 
            className="flex items-center justify-center gap-2 text-center bg-[#2d2d2d] border border-[#4d4d4d] hover:bg-[#3d3d3d] px-6 py-3 rounded-full transition-all duration-300 text-sm font-light"
          >
            <BookOpen className="w-4 h-4 text-white" />
            Documentation
          </button>
        </div>
      </div>
      
      {/* Documentation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#16181b] border border-[#4d4d4d] rounded-lg max-w-lg w-full p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-light mb-6 tracking-tight">Getting Started</h2>
            
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                After creating your account, you'll receive access to your personal instance. Simply scan the QR code with WhatsApp to connect.
              </p>
              
              <p className="leading-relaxed">
                Our AI agent behaves like a human assistant by:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Appearing online during conversations</li>
                <li>Reading and processing incoming messages</li>
                <li>Displaying typing indicators when composing responses</li>
                <li>Responding naturally to customer inquiries</li>
                <li>Capturing and organizing important data</li>
              </ul>
              
              <p className="leading-relaxed font-light text-lg mt-6">
                It's that simple. Professional customer service automation in minutes.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
