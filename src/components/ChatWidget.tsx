"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChatMessage } from './ChatMessage';
import { createLead } from '@/services/leadService';

interface Message {
  text: string;
  isUser: boolean;
}

interface UserData {
  name: string;
  whatsapp: string;
  email: string;
  segment?: string;
  budget?: string;
}

interface ChatWidgetProps {
  showChat?: boolean;
  onClose?: () => void;
}

export function ChatWidget({ showChat = false, onClose }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(showChat);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    whatsapp: '',
    email: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversationFlow = [
    {
      question: "Olá! eu sou o assistente do XASE!\n\nDeixa eu te apresentar o XASE e seus planos?",
      options: ["Claro! Quero conhecer mais detalhes"]
    },
    {
      question: "Qual é o seu nome?",
      isInput: true,
      onAnswer: (answer: string) => {
        const newData = { ...userData, name: answer };
        setUserData(newData);
        return newData;
      }
    },
    {
      question: (data: UserData) => `Prazer, ${data.name}! 👋\n\nQual o seu whatsapp? para enviarmos as informações para você conhecer os nossos planos`,
      isInput: true,
      onAnswer: (answer: string) => {
        const newData = { ...userData, whatsapp: answer };
        setUserData(newData);
        return newData;
      }
    },
    {
      question: (data: UserData) => `Confirma que seu numero de whatsapp está correto? ${data.whatsapp}, é importante que esteja certo para que nosso time consiga falar com você!`,
      options: ["Sim, está correto"]
    },
    {
      question: "Qual o seu e-mail mais utilizado?",
      isInput: true,
      onAnswer: (answer: string) => {
        const newData = { ...userData, email: answer };
        setUserData(newData);
        return newData;
      }
    },
    {
      question: "Você tem uma empresa de qual segmento?",
      options: [
        "Comércio",
        "Serviços",
        "Indústria",
        "Outros"
      ]
    },
    {
      question: "Nosso investimento mínimo anual é de R$2.880,00. Este valor está dentro do seu orçamento atual?",
      options: [
        "Sim, tenho orçamento para investir se tudo fizer sentido.",
        "Não, meu orçamento é menor que R$2.880,00."
      ]
    },
    {
      question: "Obrigado pelas informações, em instantes o nosso time entrará em contato com você, fique atento(a)!",
      isFinal: true
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
      const firstQuestion = typeof conversationFlow[0].question === 'function' 
        ? conversationFlow[0].question(userData)
        : conversationFlow[0].question;
      setMessages([{ text: firstQuestion, isUser: false }]);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(showChat);
  }, [showChat]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const currentQuestion = conversationFlow[currentStep];
    let newUserData = userData;

    if (currentQuestion.onAnswer) {
      newUserData = currentQuestion.onAnswer(inputValue);
      setUserData(newUserData);
    }

    setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');

    setTimeout(() => {
      if (currentStep < conversationFlow.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        const nextQuestion = conversationFlow[nextStep];
        const questionText = typeof nextQuestion.question === 'function'
          ? nextQuestion.question(newUserData)
          : nextQuestion.question;
        setMessages((prev) => [
          ...prev,
          { text: questionText, isUser: false },
        ]);
      }
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    const currentQuestion = conversationFlow[currentStep];
    let newUserData = userData;

    if (currentQuestion.onAnswer) {
      newUserData = currentQuestion.onAnswer(option);
      setUserData(newUserData);
    }

    setMessages((prev) => [...prev, { text: option, isUser: true }]);
    
    setTimeout(() => {
      if (currentStep < conversationFlow.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        const nextQuestion = conversationFlow[nextStep];
        const questionText = typeof nextQuestion.question === 'function'
          ? nextQuestion.question(newUserData)
          : nextQuestion.question;
        setMessages((prev) => [
          ...prev,
          { text: questionText, isUser: false },
        ]);

        if (nextQuestion.isFinal) {
          createLead({
            name: newUserData.name,
            whatsapp: newUserData.whatsapp,
            email: newUserData.email,
            segment: newUserData.segment || '',
            budget: newUserData.budget || '',
          }).catch(error => {
            console.error('Error saving lead:', error);
          });
        }
      }
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const currentQuestion = conversationFlow[currentStep];
  const isFinalStep = currentQuestion.isFinal;
  const currentQuestionText = typeof currentQuestion.question === 'function'
    ? currentQuestion.question(userData)
    : currentQuestion.question;

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#7B61FF] text-white p-4 rounded-full shadow-lg hover:bg-[#6A4FFF] transition-colors"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-[#7B61FF] text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ChatBubbleLeftIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">XASE</h3>
                  <p className="text-sm text-white/80">Como posso ajudar?</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.text}
                    isUser={message.isUser}
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Chat Input or Options */}
            <div className="p-4 border-t border-gray-200">
              {!isFinalStep ? (
                currentQuestion.isInput ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Digite sua resposta..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-[#7B61FF] text-white p-2 rounded-lg hover:bg-[#6A4FFF] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="w-full px-4 py-2 text-left rounded-lg border border-[#7B61FF] bg-[#7B61FF] text-white hover:bg-[#6A4FFF] transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )
              ) : (
                <button
                  onClick={() => window.location.href = 'https://xase.com.br'}
                  className="w-full bg-[#7B61FF] text-white py-2 rounded-lg hover:bg-[#6A4FFF] transition-colors"
                >
                  Acessar agora!
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 