import React from 'react';
import { ShieldCheck, Users, Heart, Star, Compass, AlertCircle, Quote, CheckCircle2, Award, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS, CONTACT_INFO, getCallUrl, getWhatsAppUrl } from '../data';

export default function TrustFactor() {
  const whatsappTrustMsg = "Hi! I am reading about Rafiq Bhai on your website. I want to know about current weather/road status in Kashmir and check driver booking details.";

  return (
    <section id="trust" className="py-16 sm:py-24 bg-gray-50 select-none overflow-hidden text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with Scroll-In Animation */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4 mb-16" 
          id="trust_head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider" id="trust_top_tag">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pure trust, Zero Dynamic Pricing Surcharges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Why Travelers Choose Rafiq Bhai
          </h2>
          <p className="font-sans text-gray-655 text-base sm:text-lg leading-relaxed">
            We bypass dynamic agent commissions to offer you genuine Kashmiri hospitality and a warm welcome. Learn why hundreds of families trust us for their safest Kashmir adventures.
          </p>
        </motion.div>

        {/* 4 Core Trust Attributes grid with Staggered Scroll-In view */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20" id="trust_benefits_grid">
          
          <motion.div 
            className="bg-white rounded-2xl p-6 border border-emerald-100/50 hover:border-emerald-300 shadow-sm space-y-3 transition-all duration-300 transform hover:-translate-y-1" 
            id="trust_card_1"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              🧔
            </div>
            <h3 className="font-display font-semibold text-gray-900 text-sm sm:text-base leading-snug">
              Veteran local Tour Operator
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-normal font-sans">
              Born & raised in Srinagar. Rafiq Bhai leads a custom cooperative network of highly skilled, verified local driver partners and guarantees direct-to-owner hotel stays.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 border border-emerald-100/50 hover:border-emerald-300 shadow-sm space-y-3 transition-all duration-300 transform hover:-translate-y-1" 
            id="trust_card_2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              🛡️
            </div>
            <h3 className="font-display font-semibold text-gray-900 text-sm sm:text-base leading-snug">
              100% Couples & Family Safe
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-normal font-sans">
              Traveling with infants or senior parents? Rafiq Bhai drives carefully, schedules timely toilet stops, and avoids unnecessary mountain speed triggers.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 border border-emerald-100/50 hover:border-emerald-300 shadow-sm space-y-3 transition-all duration-300 transform hover:-translate-y-1" 
            id="trust_card_3"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              🚫
            </div>
            <h3 className="font-display font-semibold text-gray-900 text-sm sm:text-base leading-snug">
              Saved from Local Scams
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-normal font-sans">
              We save you from tourist overcharging! Whether buying dry fruits, booking Dal Lake Shikaras, or pony rides, Rafiq Bhai guides you on standard prices.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 border border-emerald-100/50 hover:border-emerald-300 shadow-sm space-y-3 transition-all duration-300 transform hover:-translate-y-1" 
            id="trust_card_4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              🤝
            </div>
            <h3 className="font-display font-semibold text-gray-900 text-sm sm:text-base leading-snug">
              No Agent Commissions
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-normal font-sans">
              No middleware platforms or travel desks inflating charges. Your booking supports the local driver and team directly, keeping costs remarkably cheap.
            </p>
          </motion.div>

        </div>

        {/* Real Customer Stories / Testimonial Feed */}
        <div id="customer_stories" className="space-y-8">
          <motion.div 
            className="text-center space-y-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase font-bold text-emerald-850 tracking-widest font-display">Real Customer Testimonial</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">What Our Guests Say About Us</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="testimonials_grid">
            {TESTIMONIALS.map((test, index) => (
              <motion.div 
                key={test.id} 
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative flex flex-col justify-between"
                id={`testimonial_card_${test.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-6 right-6 text-gray-100 pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>

                <div className="space-y-4">
                  {/* Rating Block */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Testimonial body text */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic font-sans">
                    "{test.content}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="flex items-center gap-3 pt-6 border-t border-gray-50 mt-6" id={`test_user_${test.id}`}>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-lg shadow-inner">
                    {test.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{test.name}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{test.location} | {test.date}</p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100">
                      {test.groupType}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Beautiful "Verified Local Partner" Section to double down on confidence */}
        <motion.div 
          className="mt-16 mb-16 max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl border border-emerald-500/20"
          id="verified_local_credentials"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Decorative graphic glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="verified_layout">
            
            {/* Badge Credentials Column Left */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-emerald-900/30 pb-6 lg:pb-0 lg:pr-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-3xl shadow-lg relative animate-pulse">
                🏅
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 font-mono">Governing Certificate</span>
                <h4 className="font-serif text-lg sm:text-xl font-bold mt-0.5 leading-tight">Verified J&K Local Partner</h4>
                <p className="text-xs text-slate-300 mt-1">Srinagar Tourism Regd. ID: <strong>91-JK-SRINAGAR-77B</strong></p>
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-900/40 rounded-full border border-emerald-500/20 text-[10px] text-emerald-300 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified credentials</span>
                </div>
              </div>
            </div>

            {/* Core Verification Features Column Right */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>100% Family Peace of Mind Guarantee</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Srinagar Registered Tour Fleet Licensing
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  We understand that safety is your absolute priority when exploring high-altitude mountain locations like Gulmarg & Sonamarg. Rest assured with our direct qualifications:
                </p>
              </div>

              {/* Grid of badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="badges_inner_grid">
                
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-100 text-xs sm:text-sm leading-snug">Commercial Yellow J&K Plates</h5>
                    <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Fully insured commercial cabs with registered permits. No unsafe black-market private cars that put your trip at risk.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-100 text-xs sm:text-sm leading-snug">Police Verified Character Certificate</h5>
                    <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Every driver partners carry background verified, fully scrutinized local police records keeping women and kids secure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-100 text-xs sm:text-sm leading-snug">Heavy Heavy Duty Snow Chains</h5>
                    <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Heavy metal ropes & snow chain equipment are always stacked in vehicles during cold terms for slip-free winter runs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-100 text-xs sm:text-sm leading-snug">No Touts / Safe Shopping Guides</h5>
                    <p className="text-[11px] text-slate-300 leading-normal mt-0.5">We avoid the commission traps at local spice & shawl shops. Rafiq Bhai takes you directly to authentic government cooperative emporiums.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* Small trust banner inside the section */}
        <motion.div 
          className="rounded-3xl text-white p-6 sm:p-10 shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6" 
          id="trust-banner"
          style={{ background: "linear-gradient(135deg, #059669 0%, #0d9488 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider">
              No Advance Surcharges
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
              Pay major amount only after you arrive!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl font-sans">
              Unlike online travel agents who demand 100% payments months in advance, you only pay a nominal booking fee to block your travel dates, and the rest when you successfully meet Rafiq Bhai in Srinagar! Genuine local trust you can rely on!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 justify-center">
            <a 
              href={getCallUrl()} 
              className="px-6 py-3 rounded-xl bg-white text-emerald-800 font-extrabold text-xs sm:text-sm text-center shadow-md hover:bg-slate-50 transition-colors"
            >
              📞 Direct Call Driver
            </a>
            <a 
              href={getWhatsAppUrl(whatsappTrustMsg)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-950 text-white font-extrabold text-xs sm:text-sm text-center border border-emerald-500/30 hover:bg-emerald-900 transition-colors"
            >
              💬 Chat with Aniket
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
