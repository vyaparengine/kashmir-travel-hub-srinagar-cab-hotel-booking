import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, MessageSquare } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Pricing' | 'Cab Booking' | 'Hotel' | 'Itinerary'>('All');

  const categories: ('All' | 'Pricing' | 'Cab Booking' | 'Hotel' | 'Itinerary')[] = [
    'All', 'Pricing', 'Cab Booking', 'Hotel', 'Itinerary'
  ];

  const filteredFaqs = selectedCategory === 'All' 
    ? FAQS 
    : FAQS.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCustomWhatsAppFaq = (question: string) => {
    return getWhatsAppUrl(`Hi Aniket! I read the FAQ on your website. I have a question about: "${question}". Can you please clarify details for our upcoming Kashmir tour?`);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16" id="faq_head">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider" id="faq_top_tag">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Kashmir Trip Queries Answered</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Your Questions, Directly Answered!
          </h2>
          <p className="font-sans text-gray-600 text-base sm:text-lg">
            We don't keep any secrets. Here are direct answers to the most common questions travelers ask us before booking cabs or hotels in Kashmir.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" id="faq_categories_filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0); // Reset first open on swap
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-emerald-100/30 text-emerald-900 border-emerald-200 hover:bg-emerald-55/40'
              }`}
              id={`faq_filter_chip_${cat.toLowerCase().replace(' ', '_')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq_accordion_container">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen 
                    ? 'border-emerald-600/60 bg-emerald-50/10 shadow-sm' 
                    : 'border-slate-100 hover:border-gray-200 hover:bg-slate-50/20'
                }`}
                id={`faq_block_${index}`}
              >
                
                {/* Header click bar */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 sm:py-5 flex justify-between items-center gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq_btn_trigger_${index}`}
                >
                  <span className="font-display font-bold text-gray-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 p-1.5 rounded-lg shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Content body with smooth reveal */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 space-y-3 border-t border-dashed border-gray-100" id={`faq_body_${index}`}>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                    
                    {/* Secondary WhatsApp nudge per FAQ */}
                    <div className="flex justify-end pt-1">
                      <a 
                        href={handleCustomWhatsAppFaq(faq.question)}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-600 transition-colors"
                        id={`faq_whatsapp_nudge_${index}`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        Discuss this further
                      </a>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Fallback if FAQ has zero contents (unlikely but safe) */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 text-gray-500 text-sm" id="faq_fallback">
            Please select another queries filter category.
          </div>
        )}

        {/* Live Help Desk nudge */}
        <div className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-4" id="faq_helpdesk">
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Have a different query or need custom help with dates/itineraries? Speak to us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href={getWhatsAppUrl("Hi Aniket! I have a custom query regarding hotel options, driver route availability, or airport transfers. Let's discuss!")}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-emerald-300 text-emerald-800 font-bold text-xs sm:text-sm hover:bg-emerald-50"
              id="faq_whatsapp_chat"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
