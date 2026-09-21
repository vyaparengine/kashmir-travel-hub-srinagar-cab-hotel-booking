import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Heart, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, getCallUrl, getWhatsAppUrl } from '../data';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-905 bg-zinc-950 text-white pt-16 pb-28 sm:pb-16 select-none" id="footer_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Quick Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10" id="footer_grid">
          
          {/* Column 1: Local Brand details */}
          <div className="md:col-span-5 space-y-4" id="footer_col_brand">
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="chinar leaf">🍁</span>
              <span className="font-display font-black text-xl tracking-tight text-white">
                Kashmir Travel Hub
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans max-w-sm">
              Helping travelers experience the real magic of Kashmir safely! We provide pristine cabs, associated houseboats, and affordable tour guidance without any agent commissions. Direct booking with Rafiq Bhai.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold" id="footer_verified">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified local driver & pricing (No hidden costs)</span>
            </div>
          </div>

          {/* Column 2: Easy Jumps */}
          <div className="md:col-span-3 space-y-4" id="footer_col_links">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 font-display">
              Quick Highlights
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-gray-400 font-medium" id="footer_links">
              <button onClick={() => handleScrollTo('destinations')} className="hover:text-emerald-300 text-left cursor-pointer">
                🏔️ Gulmarg & Sonamarg Trips
              </button>
              <button onClick={() => handleScrollTo('destinations')} className="hover:text-emerald-300 text-left cursor-pointer">
                🏞️ Pahalgam & Doodhpathri Valley
              </button>
              <button onClick={() => handleScrollTo('calculator')} className="hover:text-emerald-300 text-left cursor-pointer">
                🧮 Cab Fare Budget Estimator
              </button>
              <button onClick={() => handleScrollTo('trust')} className="hover:text-emerald-300 text-left cursor-pointer">
                🤝 Testimonials & Reviews
              </button>
            </div>
          </div>

          {/* Column 3: Genuine Direct Contacts */}
          <div className="md:col-span-4 space-y-4" id="footer_col_contact">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 font-display">
              Contact Details (No Agents!)
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-sans" id="footer_contact_list">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Srinagar, Jammu and Kashmir, India (Airport pickup available)</span>
              </div>

              {/* Direct Driver phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <p className="font-bold text-white">Call Rafiq Bhai (Local Driver):</p>
                  <a href={getCallUrl()} className="text-emerald-400 font-black hover:underline tracking-wide bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900">
                    +91 {CONTACT_INFO.driverPhone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Booking manager */}
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">WhatsApp Booking Desk (Aniket):</p>
                  <a 
                    href={getWhatsAppUrl("Hi Aniket! Planning a Kashmir family tour. Please share custom quotes and block driver dates with Rafiq Bhai.")}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-400 font-black hover:underline tracking-wide bg-teal-950/40 px-2 py-0.5 rounded border border-teal-900"
                  >
                    +91 {CONTACT_INFO.bookingManagerWhatsApp}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lower row with Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500" id="footer_bottom">
          <p>© 2026 Kashmir Travel Hub (Rafiq Bhai). All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400 font-medium" id="co_brand_credit">
            <span>Powering genuine local hospitality by</span>
            <span className="text-emerald-400 font-bold">Aniket (ShubbiVision)</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
