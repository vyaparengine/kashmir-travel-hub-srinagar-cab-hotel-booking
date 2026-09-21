import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Heart, Users, Star, Award, ChevronDown, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_INFO, getCallUrl, getWhatsAppUrl } from '../data';

export default function Hero() {
  const whatsappHeroMsg = "Hi Aniket! We are planning a trip to beautiful Kashmir. We want to check driver availability for Rafiq Bhai and discuss custom itineraries with hotels. Please help us!";

  const scrollToCalculator = () => {
    const calc = document.getElementById('calculator');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-indigo-55/60 via-slate-50/40 to-white" id="hero_section">
      
      {/* Decorative floral or mountain light background accent */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[35%] h-[35%] bg-amber-100/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero_grid">
          
          {/* Landing Copy Content (Left Column) with elegant stagger entry */}
          <motion.div 
            className="lg:col-span-7 space-y-6 sm:space-y-8" 
            id="hero_content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            
            {/* Quick Trust Hook Banner */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-900 text-xs sm:text-sm font-semibold" id="hero_badge">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Flat Direct Rate Promise: No Agent Cuts</span>
              <span className="text-indigo-300">|</span>
              <span className="font-extrabold text-amber-950">Direct Rafiq Bhai (Local Legend)</span>
            </div>

            {/* Powerful Main Headline */}
            <div className="space-y-4" id="hero_headlines">
              <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.12] tracking-tight">
                Explore Kashmir <br />
                <span className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-amber-600 bg-clip-text text-transparent italic font-serif leading-none">
                  With Absolute Family Safety!
                </span>
              </h1>
              <p className="font-sans text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Skip third-party agency commissions. Book your comfortable private cab & scenic hotels directly with <strong className="text-gray-900 font-bold">Rafiq Bhai</strong>. Experience genuine hospitality with all-inclusive transparent costs starting at just <span className="bg-amber-100 hover:bg-amber-200 text-amber-950 px-2.5 py-0.5 rounded-lg font-extrabold transition-colors border border-amber-200/40">₹4,000/day</span>!
              </p>
            </div>

            {/* Quick Benefits Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-2 text-sm sm:text-base text-gray-750" id="hero_checkmarks">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-indigo-650 shrink-0" />
                <span><strong>No Extra Tolls:</strong> Fuel, Permits & Parking included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 fill-rose-350" />
                <span><strong>Pure Family Comfort:</strong> strict alcohol-free driver</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-indigo-650 shrink-0" />
                <span><strong>Custom Flexi-Route:</strong> change sightseeing spots anytime</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-5 h-5 text-amber-500 shrink-0 fill-amber-500" />
                <span><strong>Free Airport Welcome</strong> with custom nameboard banner</span>
              </div>
            </div>

            {/* Super Highlighted Conversion CTA blocks - Instant actions */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center" id="hero_actions">
              <a 
                href={getCallUrl()} 
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 text-center animate-cta-pulse"
                id="hero_btn_call"
              >
                <Phone className="w-5 h-5" />
                Call Rafiq Bhai Now (Direct Line)
              </a>
              <a 
                href={getWhatsAppUrl(whatsappHeroMsg)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-xl bg-white text-indigo-950 font-black text-base sm:text-lg border-2 border-indigo-650 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200 text-center"
                id="hero_btn_whatsapp"
              >
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                WhatsApp for Instant Plan
              </a>
            </div>

            {/* Premium Note */}
            <div className="flex items-center gap-2 text-xs text-slate-550" id="hero_subnote">
              <CheckCircle className="w-4 h-4 text-indigo-600" />
              <span>Zero advance deposit needed for basic itinerary customization! Clean, pristine cars always guaranteed.</span>
            </div>

          </motion.div>

          {/* Interactive Trust Photo Cards (Right Column) with Entry Animation */}
          <motion.div 
            className="lg:col-span-5 relative" 
            id="hero_showcase_wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            
            {/* Background elements decoration */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600/10 to-amber-600/5 rounded-3xl blur-2xl pointer-events-none" />

            {/* Main Kashmir Collage frame styled as a luxury family travel poster */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white flex flex-col" id="hero_collage_card">
              
              {/* Premium Kashmir Family/Group Poster Image */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Astonishing snowy peaks and vibrant valleys of Kashmir in absolute high fidelity" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                
                {/* Visual Cover Gradient Overlap */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Instant Call conversion banner directly on the image */}
                <div className="absolute top-4 left-4 bg-indigo-700 text-white rounded-lg px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider shadow-md">
                  Slots booking live
                </div>

                {/* Local authenticity badge floating */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-indigo-100 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5" id="driver_floating_tag">
                  <span className="text-sm">🧔</span>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-indigo-700 font-extrabold leading-none">Tour Operator</p>
                    <p className="text-xs font-black text-gray-900 leading-tight">Rafiq Bhai (System Lead)</p>
                  </div>
                </div>

                {/* Pricing Tag Overlay */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl px-3.5 py-2 shadow-lg flex flex-col items-center justify-center leading-tight border border-amber-400" id="pricing_floating_tag">
                  <span className="text-[10px] uppercase font-extrabold text-amber-950 tracking-tight">Direct Local Rate</span>
                  <span className="text-base sm:text-lg font-black">₹4000/Day</span>
                  <span className="text-[9px] font-bold text-slate-800">Fuel & Toll Covered</span>
                </div>

                {/* Happy family tagline on poster */}
                <div className="absolute bottom-4 left-4 text-white space-y-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-serif text-lg font-bold leading-tight">"Beautiful Kashmir With Family!"</h4>
                  <p className="text-[11px] text-slate-200">Elite coordinates by Srinagar local operator network</p>
                </div>

              </div>

              {/* Poster info footer section designed to trigger instant booking calls */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-slate-950 to-indigo-950 text-white space-y-4" id="collage_caption">
                <div className="flex items-center justify-between border-b border-white/10 pb-3" id="poster_mini_stats">
                  <div>
                    <p className="text-gray-450 text-[10px] uppercase font-bold">Client Rating</p>
                    <p className="text-sm font-extrabold text-amber-400">4.9 / 5.0 (Family Trust)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-450 text-[10px] uppercase font-bold">Weekly Slots</p>
                    <p className="text-sm font-extrabold text-amber-350">Only 3 Cabs Left</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  "Ensure absolute peace of mind for your senior parents and daughters. Avoid random taxi touts or high commission operators at Srinagar airport."
                </p>

                <div className="pt-1 flex flex-col sm:flex-row gap-2" id="poster_ctas">
                  <a
                    href={getCallUrl()}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black shadow-md transition-all text-center uppercase"
                  >
                    📞 Call & Block Dates
                  </a>
                  <a
                    href={getWhatsAppUrl(whatsappHeroMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg bg-transparent border border-white/30 hover:border-white text-white text-xs font-bold transition-all text-center"
                  >
                    💬 Get Free Itinerary
                  </a>
                </div>
              </div>

            </div>

            {/* Local savings advice line */}
            <div className="mt-4 bg-gradient-to-r from-indigo-50/70 to-indigo-100/70 border border-indigo-200/80 rounded-xl p-3 flex items-center gap-3 shadow-xs" id="hero_mini_review">
              <span className="text-2xl text-indigo-700 shrink-0">💡</span>
              <p className="text-xs sm:text-xs text-indigo-950 font-medium leading-normal">
                By booking directly with Rafiq Bhai, families save an average of <strong>₹12,000 to ₹18,000</strong> on middle-agent travel commission fees.
              </p>
            </div>

          </motion.div>

        </div>

        {/* Scroll indicator hint pointing to destinations & dynamic calculation */}
        <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 pointer-events-none" id="scroll_hint">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-gray-450 uppercase">
            Calculate Itinerary Fare & Book
          </p>
          <button 
            onClick={scrollToCalculator} 
            className="mt-2 text-indigo-650 animate-bounce pointer-events-auto cursor-pointer"
            aria-label="Scroll to trip details"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}
