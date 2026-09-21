import React from 'react';
import { Compass, ShieldAlert, BadgeCheck, Phone, MessageSquare, Flame } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import ScenicGallery from './components/ScenicGallery';
import PricingCalculator from './components/PricingCalculator';
import TrustFactor from './components/TrustFactor';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import BookingTicker from './components/BookingTicker';
import AisChatbot from './components/AisChatbot';
import { getCallUrl, getWhatsAppUrl } from './data';

export default function App() {
  const alertWhatsAppMsg = "Hi Aniket! I saw the Kashmiri Houseboat Complimentary offer on the website. We are planning our Kashmir vacation. Please help book Rafiq Bhai's cab and share houseboat direct deals!";

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased font-sans pb-16 xs:pb-12" id="app_root">
      
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Urgent Season Special Offer Alert Banner, sits perfectly below header during scroll */}
      <div className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white py-2 px-4 shadow-sm relative z-40 mt-16 sm:mt-20 select-none" id="season_alert_banner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs font-semibold" id="season_alert_inner">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse fill-amber-400" />
            <span>🍁 Saffron & Gondola Season Offer! Book cab dates this week and receive Complimentary Associated Dal Lake Houseboat booking consultation.</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={getWhatsAppUrl(alertWhatsAppMsg)}
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-900 font-extrabold hover:bg-amber-300 transition-colors"
            >
              🎁 Claim Direct Deal
            </a>
          </div>
        </div>
      </div>

      {/* 3. Hero Header Area (Headline, Call Action & Visual Intro) */}
      <Hero />

      {/* 4. Trust Pillars & Client Feedbacks (Testimonials) */}
      <TrustFactor />

      {/* 5. Direct Cabs & Destinations Grid (Our Trips & Cabs) */}
      <Destinations />

      {/* Visual Trust Booster: Custom-built Touch Swiper Gallery with Modal Lightroom */}
      <ScenicGallery />

      {/* 6. Interactive Price fare calculation block & Vehicle list (Fare Calculator) */}
      <PricingCalculator />

      {/* 7. General FAQs Accordion (Queries Answered) */}
      <FaqSection />

      {/* 8. Localised Hospitality footer */}
      <Footer />

      {/* 9. Mobile Sticky action triggers */}
      <FloatingCTA />

      {/* 10. Live Recent Booking Social Proof Ticker */}
      <BookingTicker />

      {/* 11. Interactive Kashmiri Hospitality Virtual Assistant Assist Dashboard */}
      <AisChatbot />

    </div>
  );
}
