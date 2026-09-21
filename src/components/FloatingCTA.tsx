import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, getCallUrl, getWhatsAppUrl } from '../data';

export default function FloatingCTA() {
  const whatsappStickyMsg = "Hi Aniket! I am checking out your Kashmir Travel Hub website. I want to check availability for Rafiq Bhai for my family trip and get customized rates. Please help!";
  
  // State to track soft keyboard bottom shift on mobile visual viewports
  const [viewportBottomOffset, setViewportBottomOffset] = useState(0);

  useEffect(() => {
    const handleViewportChange = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      
      // Calculate layout shift when virtual keyboard is open or safari UI is layout zoomed
      const offset = window.innerHeight - vv.height - vv.offsetTop;
      setViewportBottomOffset(Math.max(0, Math.round(offset)));
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
      window.visualViewport.addEventListener('scroll', handleViewportChange);
      
      // Initial trigger
      handleViewportChange();
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
        window.visualViewport.removeEventListener('scroll', handleViewportChange);
      }
    };
  }, []);

  return (
    <>
      {/* Mobile Floating CTA Bar - Matches selector exactly */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] flex gap-4 items-center justify-center md:hidden transition-all duration-200" 
        id="floating_cta_mobile"
        style={{ 
          bottom: `${viewportBottomOffset}px`,
          position: 'fixed'
        }}
      >
        {/* Call button with beautiful shadow pulse animation */}
        <a
          href={getCallUrl()}
          className="flex-grow inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 text-white font-extrabold text-sm shadow-md active:scale-95 transition-all animate-cta-pulse"
          id="floating_call_trigger_mobile"
        >
          <Phone className="w-4 h-4" />
          <span>Call Rafiq Bhai Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={getWhatsAppUrl(whatsappStickyMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border-2 border-indigo-600 text-indigo-950 font-extrabold text-sm hover:bg-indigo-50 active:scale-95 transition-all shadow-xs"
          id="floating_whatsapp_trigger_mobile"
        >
          <MessageSquare className="w-4 h-4 text-indigo-655" />
          <span>WhatsApp Plan</span>
        </a>
      </div>

      {/* Desktop / Tablet Persistent CTA Bar */}
      <div 
        className="hidden md:block fixed bottom-0 left-0 right-0 z-45 bg-white/95 backdrop-blur-md border-t border-indigo-100 shadow-[0_-8px_30px_rgb(0,0,0,0.1)] p-4 transition-all duration-300" 
        id="floating_bar_root"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3" id="floating_bar_inner">
          
          <div className="flex items-center gap-2 leading-none" id="floating_bar_text">
            <span className="text-xl" role="img" aria-label="taxi">🚕</span>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-black text-gray-900 leading-tight">₹4000/Day</span>
                <span className="bg-amber-100 text-amber-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none border border-amber-200">All Cabs</span>
              </div>
              <p className="text-xs text-gray-500 font-semibold font-sans mt-0.5">
                Toll, Fuel & Permits included. 0 hidden surcharges. Direct Tour Operator System.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3" id="floating_bar_buttons">
            <a
              href={getCallUrl()}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-600 hover:to-indigo-750 text-white text-sm font-black shadow-md shadow-indigo-600/10 active:scale-95 transition-all animate-cta-pulse"
              id="floating_call_trigger"
            >
              <Phone className="w-4 h-4" />
              <span>Call Rafiq Bhai Now</span>
            </a>

            <a
              href={getWhatsAppUrl(whatsappStickyMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-white border-2 border-indigo-650 text-indigo-950 text-sm font-black hover:bg-indigo-50 active:scale-95 transition-all shadow-sm"
              id="floating_whatsapp_trigger"
            >
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span>WhatsApp Mini-Plan</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

