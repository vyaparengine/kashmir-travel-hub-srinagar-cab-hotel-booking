import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, Send, X, HelpCircle, MapPin, Sparkles, Check, ChevronDown } from 'lucide-react';
import { CONTACT_INFO, getCallUrl, getWhatsAppUrl } from '../data';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  timestamp: Date;
}

export default function AisChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberSubmitted, setNumberSubmitted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg_1',
      sender: 'bot',
      text: "As-salamu alaykum! 🙏 Welcome to Srinagar! I am your Kashmir Travel Assistant. Rafiq Bhai and our local coordinator team are here to help you design a beautiful tour. How can we make your trip magical?",
      options: [
        '🗺️ Famous Sights & Routes',
        '💵 Get Calculated Cab Fare',
        '🚤 associated Houseboat Deals',
        '📞 Direct Emergency Call'
      ],
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Scroll to bottom helper
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const addBotMessage = (text: string, options?: string[], delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg_bot_${Date.now()}`,
          sender: 'bot',
          text,
          options,
          timestamp: new Date()
        }
      ]);
    }, delay);
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: `msg_user_${Date.now()}`,
        sender: 'user',
        text: option,
        timestamp: new Date()
      }
    ]);

    // Handle responses dynamically
    if (option.includes('Famous Sights')) {
      addBotMessage(
        "Kashmir has gorgeous places! My personal highlights recommendation:\n\n1. 🏔️ **Gulmarg**: Famous Gondola Cable Car Ride and high snow glaciers.\n2. 🏞️ **Pahalgam**: Calm Lidder River with beautiful pine valleys (Betaab Meadow).\n3. 🚤 **Dal Lake**: Sunset wooden Shikara rides and sleeping in local hand-crafted houseboats.\n\nRafiq Bhai operates private clean cars for all these circuits. Would you like a personalized travel plan?",
        ['💬 Yes, Plan on WhatsApp', '📞 Speak to Rafiq Bhai']
      );
    } else if (option.includes('Cab Fare')) {
      addBotMessage(
        "Our pricing model is 100% direct and wholesale!\n• ₹4,000/day: Swift Dzire or Toyota Etios (Sedan)\n• Toyota Innova Crysta / Tempo Travelers available at competitive rates.\n\nThis flat rate covers fuel, state permits, highway tolls, and clean drivers with no dynamic surcharges!",
        ['🗓️ Book Dates', '📞 Ask Custom Budget']
      );
    } else if (option.includes('Houseboat')) {
      addBotMessage(
        "Yes! Rafiq Bhai has direct-owner associations with certified handpicked houseboats in Dal Lake and Nigeen Lake. Because we skip middle-agent portal taxes, we can secure you premium accommodations at 30% to 40% discount!\n\nWant to see real pictures and pricing?",
        ['💬 Send Houseboat Photos', '🗺️ Main Menu']
      );
    } else if (option.includes('Emergency Call') || option.includes('Speak to Rafiq')) {
      addBotMessage(
        `You can dial Rafiq Bhai directly at +91 ${CONTACT_INFO.driverPhone}. He provides direct tourist consults for families year-round. Tap the Call button below, or type your mobile number and we will telephone you!`,
        ['📞 Place Phone Call Now', '💬 Chat on WhatsApp instead']
      );
    } else if (option.includes('WhatsApp') || option.includes('Houseboat Photos') || option.includes('Book Dates') || option.includes('Plan on WhatsApp')) {
      const msg = "Hi Aniket! I'm chatting with your virtual guide on the Kashmir Travel Hub website. I want to check dates, receive associated hotel photos, and get a custom quote. Please help!";
      window.open(getWhatsAppUrl(msg), '_blank');
      addBotMessage("Opened WhatsApp for you! Aniket is answering live now. Please tap send on the chat box!");
    } else if (option.includes('Main Menu')) {
      addBotMessage("Back to our tourist dashboard! Choose any category:", [
        '🗺️ Famous Sights & Routes',
        '💵 Get Calculated Cab Fare',
        '🚤 associated Houseboat Deals',
        '📞 Direct Emergency Call'
      ]);
    } else if (option.includes('Call Now') || option.includes('Phone Call')) {
      window.location.href = getCallUrl();
      addBotMessage("Triggering telephone call... If your device supports dialer, your call will open now!");
    } else {
      addBotMessage("Wonderful! Let's connect you to Aniket to finalize details. Please input your mobile contact number below so we can ring you back immediately!");
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText('');

    setMessages((prev) => [
      ...prev,
      {
        id: `msg_user_${Date.now()}`,
        sender: 'user',
        text: userText,
        timestamp: new Date()
      }
    ]);

    // Handle generic custom text input
    if (userText.match(/^\d{10}$/) || userText.length >= 10 && userText.match(/[0-9]+/)) {
      setPhoneNumber(userText);
      setNumberSubmitted(true);
      addBotMessage(
        `Thank you! I have saved your number: **${userText}**. Aniket will contact you shortly via WhatsApp & Phone call to provide your customized Kashmir itinerary. Click below to start immediately on WhatsApp:`,
        ['💬 Instant WhatsApp Chat']
      );
    } else {
      addBotMessage(
        "Koshur hospitality is our hallmark! Rafiq Bhai's coordinator Aniket is available on WhatsApp right now to help with your custom question list.",
        ['💬 Instant WhatsApp Chat', '🗺️ Main Menu']
      );
    }
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    
    setNumberSubmitted(true);
    addBotMessage(
      `Received! We have registered your number: **${phoneNumber}** for an instant trip structures slot callback. Our team (Aniket & Rafiq Bhai) will call you within 15 minutes!`,
      ['💬 Instant WhatsApp Chat', '🗺️ Main Menu']
    );
    
    // Auto-ping on WhatsApp with details too for high conversion
    setTimeout(() => {
      const msg = `Hi Aniket! I just submitted my phone number (${phoneNumber}) on your Kashmir Travel website for trip booking. Please call me back with the best custom family plan!`;
      window.open(getWhatsAppUrl(msg), '_blank');
    }, 1500);
  };

  return (
    <div className="fixed bottom-20 xs:bottom-24 sm:bottom-6 right-4 sm:right-6 z-50">
      
      {/* 1. Chat Bubbles Icon / Launcher with pulsing accent colors */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            className="relative"
          >
            {/* Pulsing indicator ring */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[10px] items-center justify-center font-black text-slate-950 font-sans leading-none">
                {unreadCount > 0 ? unreadCount : '!'}
              </span>
            </span>

            {/* Main Circle Floating Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 text-white font-extrabold text-sm shadow-[0_8px_30px_rgba(29,78,216,0.3)] hover:shadow-[0_12px_40px_rgba(29,78,216,0.5)] hover:from-indigo-600 hover:to-indigo-700 transition-all cursor-pointer border border-indigo-500/30 font-display"
              id="chatbot_launcher"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center relative">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              </div>
              <span>Kashmir Help Chat</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Interactive Chat Window Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-[calc(100vw-32px)] sm:w-96 h-[500px] sm:h-[540px] bg-white rounded-3xl shadow-[0_16px_50px_rgba(15,23,42,0.22)] border border-indigo-100 flex flex-col overflow-hidden"
            id="chatbot_window"
          >
            {/* Header section - highly colorful & branded with traditional Kashmiri details */}
            <div className="bg-gradient-to-r from-indigo-800 via-indigo-750 to-indigo-950 text-white p-4 relative" id="chat_header">
              
              {/* Traditional Kashmiri Graphic Accent & Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl relative shadow-inner">
                    🍁
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-amber-450 border-2 border-indigo-850 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm sm:text-base tracking-tight flex items-center gap-1">
                      Kashmir Guest Desk
                      <span className="text-[10px] bg-amber-500/30 text-amber-200 border border-amber-400/20 px-1 py-0.5 rounded uppercase font-mono tracking-widest">Live</span>
                    </h4>
                    <p className="text-[11px] text-indigo-100/90 leading-tight font-sans">
                      Supervised by Rafiq Bhai & Aniket
                    </p>
                  </div>
                </div>

                {/* Close Button action */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="Close support chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Verified Badge banner */}
              <div className="mt-3 bg-white/10 rounded-lg p-2 flex items-center justify-between text-[10px] border border-white/5">
                <div className="flex items-center gap-1 text-slate-200 font-bold">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  <span>No commissions. Bypassing middle-agents.</span>
                </div>
                <span className="text-amber-300 font-bold">Regd Partner ✓</span>
              </div>

            </div>

            {/* Chat message streams */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50" id="chat_messages_area">
              
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-1.5 animate-fadeIn">
                  
                  {/* Sender alignment */}
                  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    
                    <div className={`max-w-[85%] rounded-2xl p-3 shadow-xs text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-indigo-700 to-indigo-800 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 border border-indigo-500/5 rounded-tl-none font-sans'
                    }`}>
                      {/* Markdown mock renderer for bold values */}
                      <p className="whitespace-pre-line">
                        {msg.text}
                      </p>
                    </div>

                  </div>

                  {/* Options render block (if applicable) */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pl-2 mt-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/50 hover:bg-indigo-100 hover:border-indigo-300 text-indigo-950 font-semibold text-xs sm:text-xs transition-colors cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              ))}

              {/* Live typing feedback placeholder */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl p-3 border border-indigo-100 rounded-tl-none flex items-center gap-1 text-xs">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce [animation-delay:0.2s]">●</span>
                    <span className="animate-bounce [animation-delay:0.4s]">●</span>
                    <span className="text-gray-400 pl-1 font-sans">Kashmiri Guide is typing...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Phone Quick Form for instant callback */}
            {!numberSubmitted && (
              <div className="p-3 bg-amber-50 border-t border-amber-100 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">📞</span>
                  <p className="text-[11px] font-bold text-amber-950 font-display">
                    Want an instant callback plan? Drop your number:
                  </p>
                </div>
                <form onSubmit={handlePhoneSubmit} className="flex gap-1.5">
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    required
                    pattern="[0-9]{10}"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 bg-white border border-amber-200 text-xs px-2.5 py-1.5 rounded-lg outline-hidden text-gray-800 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-700 hover:bg-indigo-655 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-0.5"
                  >
                    <span>Request</span>
                  </button>
                </form>
              </div>
            )}

            {numberSubmitted && (
              <div className="bg-indigo-50 border-t border-indigo-100 p-2.5 text-center text-[11px] text-indigo-950 font-sans flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4 text-indigo-600" />
                <span>Your callback has been prioritized! Aniket will dial you.</span>
              </div>
            )}

            {/* Footer input controller */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-100 bg-white flex items-center gap-2" id="chat_input_section">
              <input
                type="text"
                placeholder="Ask list of sightseeing spots or type query..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-gray-800 outline-hidden focus:border-indigo-600 focus:bg-white font-sans transition-all"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-700 to-indigo-650 text-white hover:from-indigo-600 hover:to-indigo-550 shadow-sm shadow-indigo-650/10 transition-all cursor-pointer"
                title="Send your message to guide"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick quick call support footer */}
            <div className="bg-slate-100 text-[11px] text-gray-500 py-1.5 px-3 flex items-center justify-between border-t border-gray-100">
              <a href={getCallUrl()} className="text-indigo-800 hover:text-indigo-700 font-bold flex items-center gap-1">
                <Phone className="w-3 h-3 animate-pulse" />
                <span>Call operator directly</span>
              </a>
              <span className="font-mono text-[9px] text-gray-400">Response time: &lt;5 min</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
