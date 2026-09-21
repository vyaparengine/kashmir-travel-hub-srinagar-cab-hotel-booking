import React from 'react';
import { Phone, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, getCallUrl, getWhatsAppUrl } from '../data';

export default function Navbar() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20" id="nav_container">
          
          {/* Logo Brand Brand details */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="nav_brand">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl" role="img" aria-label="chinar leaf">🍁</span>
              <span className="font-display font-bold text-gray-900 tracking-tight text-base sm:text-lg leading-tight">
                Kashmir Travel Hub
              </span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] sm:text-xs text-emerald-600 font-medium flex items-center gap-0.5">
                <ShieldCheck className="w-3 h-3 inline" /> Direct local with Rafiq Bhai
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-gray-600" id="desktop_nav_links">
            <button 
              onClick={() => handleScrollTo('destinations')} 
              className="hover:text-emerald-600 cursor-pointer transition-colors duration-150 py-2 hover:border-b-2 hover:border-emerald-600"
              id="link_destinations"
            >
              Our Trips
            </button>
            <button 
              onClick={() => handleScrollTo('scenic-gallery')} 
              className="hover:text-emerald-600 cursor-pointer transition-colors duration-150 py-2 hover:border-b-2 hover:border-emerald-600"
              id="link_scenic_gallery"
            >
              Scenic Spots
            </button>
            <button 
              onClick={() => handleScrollTo('calculator')} 
              className="hover:text-emerald-600 cursor-pointer transition-colors duration-150 py-2 hover:border-b-2 hover:border-emerald-600"
              id="link_calculator"
            >
              Fare Calculator
            </button>
            <button 
              onClick={() => handleScrollTo('trust')} 
              className="hover:text-emerald-600 cursor-pointer transition-colors duration-150 py-2 hover:border-b-2 hover:border-emerald-600"
              id="link_why_us"
            >
              Why Rafiq Bhai
            </button>
            <button 
              onClick={() => handleScrollTo('faqs')} 
              className="hover:text-emerald-600 cursor-pointer transition-colors duration-150 py-2 hover:border-b-2 hover:border-emerald-600"
              id="link_faqs"
            >
              Queries Answered
            </button>
          </div>

          {/* Direct CTA actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5" id="nav_ctas">
            <a 
              href={getWhatsAppUrl("Hi Aniket! I'm planning a visit to Kashmir. Can you help me check dates and book a cab / hotel structure with Rafiq Bhai?")}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-medium hover:bg-emerald-100 transition-all duration-200 border border-emerald-200/50"
              id="nav_whatsapp"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <a 
              href={getCallUrl()} 
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-medium hover:from-emerald-700 hover:to-teal-700 shadow-sm shadow-emerald-600/10 transition-all duration-250 animate-float"
              id="nav_call"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Call Rafiq Bhai</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
