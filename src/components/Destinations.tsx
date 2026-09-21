import React from 'react';
import { Compass, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { DESTINATIONS, getWhatsAppUrl } from '../data';

export default function Destinations() {
  const getCustomWhatsAppMsg = (name: string) => {
    return getWhatsAppUrl(`Hi Aniket! We are interested in booking Rafiq Bhai's cab for visiting ${name}. Please share packages, taxi availability and best hotel suggestions around there!`);
  };

  return (
    <section id="destinations" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-55/10 to-white select-none overflow-hidden text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion scroll enter */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16" 
          id="destinations_head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider" id="destinations_top_tag">
            <Compass className="w-3.5 h-3.5 text-emerald-505" />
            <span>Kashmir Sightseeing Trips</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Your Custom Kashmir Journey, Your Way!
          </h2>
          <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
            Unlike static packages, with Rafiq Bhai you choose where to go. Stop for photos, hot Kahwa, or beautiful mountain views anytime with 100% full freedom of time!
          </p>
        </motion.div>

        {/* Responsive Cards Grid with staggered entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="destinations_grid">
          {DESTINATIONS.map((dest, index) => (
            <motion.div 
              key={dest.id} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
              id={`destination_card_${dest.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              {/* Image Header wrapper */}
              <div className="relative h-56 sm:h-64 overflow-hidden" id={`dest_img_wrap_${dest.id}`}>
                <img 
                  src={dest.image} 
                  alt={`${dest.name} tour guide by Kashmir Travel Hub`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>{dest.timeRequired}</span>
                </div>

                {/* Custom Decorative Category Tag */}
                {dest.tag && (
                  <div className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase border border-emerald-450/20">
                    {dest.tag}
                  </div>
                )}

                {/* Name Headline integrated elegantly inside image */}
                <div className="absolute bottom-4 right-4 text-right">
                  <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">Destination</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-none mt-0.5">{dest.name}</h3>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white" id={`dest_body_${dest.id}`}>
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-emerald-700 font-display uppercase tracking-wide">
                    {dest.description}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {dest.benefit}
                  </p>

                  {/* Highlights Bullet block */}
                  <div className="pt-2 space-y-1.5" id={`dest_highlights_${dest.id}`}>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">Key Spots we cover:</p>
                    {dest.highlights.map((spot, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{spot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Call action of this specific service */}
                <div className="pt-3" id={`dest_actions_${dest.id}`}>
                  <a 
                    href={getCustomWhatsAppMsg(dest.name)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 font-extrabold text-xs sm:text-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200"
                    id={`dest_btn_${dest.id}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book Cab for {dest.name}
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Out of Valley warning/note for extreme credibility */}
        <motion.div 
          className="mt-12 bg-teal-50/50 border border-teal-100/70 rounded-2xl p-4 sm:p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left" 
          id="destination_disclaimer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-4xl" role="img" aria-label="snowflake icon">🚩</span>
          <div className="space-y-1 leading-normal">
            <h4 className="text-sm sm:text-base font-bold text-teal-950 font-display">Special Winter Warnings & Border Permits?</h4>
            <p className="text-xs sm:text-sm text-teal-900 font-sans leading-relaxed">
              No need to worry! Rafiq Bhai takes care of state border permissions, chain tires for heavy snow drives, and local security rules automatically at no extra budget. We arrange everything before you land.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
