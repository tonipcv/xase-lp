"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { createLead, saveChatMessage } from '@/services/leadService';

interface Message {
  text: string;
  isUser: boolean;
}

interface UserData {
  name: string;
  whatsapp: string;
  email: string;
  segment: string;
  budget: string;
}

interface ChatWidgetProps {
  showChat?: boolean;
  onClose?: () => void;
}

export function ChatWidget({ showChat = false, onClose }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(showChat);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    whatsapp: '',
    email: '',
    segment: '',
    budget: ''
  });
  const [currentLead, setCurrentLead] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversationFlow = [
    {
      question: "Hi! I'm here to help you schedule a demo. What's your name?",
      options: [],
      inputType: "text",
      field: "name"
    },
    {
      question: "Great! What's your WhatsApp number?",
      options: [],
      inputType: "text",
      field: "whatsapp"
    },
    {
      question: "What's your email address?",
      options: [],
      inputType: "text",
      field: "email"
    },
    {
      question: "What's your business segment?",
      options: [
        "E-commerce",
        "Retail",
        "Services",
        "Education",
        "Healthcare",
        "Other"
      ],
      inputType: "options",
      field: "segment"
    },
    {
      question: "What's your monthly budget for this solution?",
      options: [
        "Up to $500",
        "$500 - $1,000",
        "$1,000 - $2,000",
        "Above $2,000"
      ],
      inputType: "options",
      field: "budget"
    },
    {
      question: "Perfect! I'll send this information to our team. How would you like to proceed?",
      options: [
        "Contact via WhatsApp",
        "End conversation"
      ],
      inputType: "options",
      field: "final"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: conversationFlow[0].question, isUser: false }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showChat !== isOpen) {
      setIsOpen(showChat);
    }
  }, [showChat]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOptionClick = async (option: string) => {
    const newMessage = { text: option, isUser: true };
    setMessages(prev => [...prev, newMessage]);

    // Save user message
    if (currentLead) {
      await saveChatMessage(currentLead.id, option, true);
    }

    if (step === conversationFlow.length - 1) {
      if (option === "Contact via WhatsApp") {
        const whatsappNumber = "11976638147";
        const message = `Hi! I'm ${userData.name} and I'd like to schedule a demo for XASE.`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        handleClose();
      } else {
        handleClose();
      }
    } else {
      setUserData(prev => ({
        ...prev,
        [conversationFlow[step].field]: option
      }));
      setStep(prev => prev + 1);

      // Add bot response
      const botResponse = { text: conversationFlow[step + 1].question, isUser: false };
      setMessages(prev => [...prev, botResponse]);

      // Save bot message
      if (currentLead) {
        await saveChatMessage(currentLead.id, botResponse.text, false);
      }

      // If we've collected all the data, create the lead
      if (step === conversationFlow.length - 2) {
        try {
          const lead = await createLead(userData);
          setCurrentLead(lead);
        } catch (error) {
          console.error('Error creating lead:', error);
        }
      }
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Save user message
    if (currentLead) {
      await saveChatMessage(currentLead.id, inputValue, true);
    }

    // Process the response based on the current step
    const currentQuestion = conversationFlow[step];
    setUserData(prev => ({
      ...prev,
      [currentQuestion.field]: inputValue
    }));

    // Move to next step
    setStep(prev => prev + 1);

    // Add bot response
    const botResponse = { text: conversationFlow[step + 1].question, isUser: false };
    setMessages(prev => [...prev, botResponse]);

    // Save bot message
    if (currentLead) {
      await saveChatMessage(currentLead.id, botResponse.text, false);
    }

    // If we've collected all the data, create the lead
    if (step === conversationFlow.length - 2) {
      try {
        const lead = await createLead(userData);
        setCurrentLead(lead);
      } catch (error) {
        console.error('Error creating lead:', error);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#7B61FF] text-white p-4 rounded-full shadow-lg hover:bg-[#6A4FFF] transition-colors z-[100]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-24 right-6 w-96 bg-[#0A0A0A] rounded-xl shadow-xl border border-purple-500/20 overflow-hidden z-[100] flex flex-col max-h-[80vh] ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="p-4 border-b border-purple-500/20 flex justify-between items-center">
          <h3 className="text-white font-medium">Schedule a Demo</h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-purple-500/20 bg-[#0A0A0A]">
          {conversationFlow[step].inputType === "options" ? (
            <div className="grid grid-cols-2 gap-2">
              {conversationFlow[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="bg-[#7B61FF]/10 hover:bg-[#7B61FF]/20 text-white px-4 py-2 rounded-md transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-[#0F0F0F] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B61FF]"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#7B61FF] text-white px-4 py-2 rounded-md hover:bg-[#6A4FFF] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
} 