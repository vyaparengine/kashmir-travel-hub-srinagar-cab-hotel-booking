import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Flame, CheckCircle, X, ShieldAlert } from 'lucide-react';
import { getWhatsAppUrl } from '../data';

interface LiveBooking {
  id: string;
  source: string;
  details: string;
  destination: string;
  timeAgo: string;
  icon: string;
}

const LIVE_BOOKINGS_DATA: LiveBooking[] = [
  {
    id: 'booking_1',
    source: 'Amit & Family (Mumbai)',
    details: 'just booked a 6-Day Innova Srinagar Tour',
    destination: 'Gulmarg & Pahalgam',
    timeAgo: '4 mins ago',
    icon: '🚕'
  },
  {
    id: 'booking_2',
    source: 'Mehta Couple (Ahmedabad)',
    details: 'just reserved Dal Lake Houseboat stay + Cab',
    destination: 'Srinagar & Sonamarg',
    timeAgo: '12 mins ago',
    icon: '🏡'
  },
  {
    id: 'booking_3',
    source: 'Dr. Nair (Bangalore)',
    details: 'locked 8-Day winter trip with Rafiq Bhai',
    destination: 'Doodhpathri & Gulmarg',
    timeAgo: '28 mins ago',
    icon: '❄️'
  },
  {
    id: 'booking_4',
    source: 'Gupta Family (Delhi NCR)',
    details: 'completed booking for 12-Seater Tempo Traveler',
    destination: 'Gulmarg Gondola Tour',
    timeAgo: '42 mins ago',
    icon: '🚌'
  },
  {
    id: 'booking_5',
    source: 'Honeymooners (Hyderabad)',
    details: 'secured exclusive driver slots & premium hotel',
    destination: 'Pahalgam Valley',
    timeAgo: '1 hour ago',
    icon: '👩‍❤️‍👨'
  },
  {
    id: 'booking_6',
    source: 'Chittaranjan Group (Kolkata)',
    details: 'blocked Swift Dzire for budget local sightseeing',
    destination: 'Srinagar Gardens',
    timeAgo: '2 hours ago',
    icon: '🚗'
  }
];

export default function BookingTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  // Control ticker sequence loop times
  useEffect(() => {
    if (hasClosed) return;

    // Initially wait 3 seconds before showing the first popup
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Continuous interval to change slides
    const slideInterval = setInterval(() => {
      setIsVisible(false);
      
      // Delay to let the close animation complete, then cycle
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_BOOKINGS_DATA.length);
        setIsVisible(true);
      }, 500);

    }, 12000); // Display each alert for 12s

    return () => {
      clearTimeout(startTimeout);
      clearInterval(slideInterval);
    };
  }, [hasClosed]);

  const activeBooking = LIVE_BOOKINGS_DATA[currentIndex];

  const handleInquireBooking = () => {
    const msg = `Hi Aniket! I saw that ${activeBooking.source} recently booked a package for '${activeBooking.destination}' on your website. I want to check slot availability and obtain a custom family itinerary for the same tour on our upcoming Kashmir vacation dates!`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setHasClosed(true);
  };

  if (hasClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-[88px] xs:bottom-[96px] sm:bottom-28 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-sm z-45 bg-zinc-950 text-white rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.35)] border border-amber-500/20 p-4 select-none overflow-hidden"
          id="live_booking_ticker_toast"
        >
          {/* Subtle background glow effect (amber theme) */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Toast Header Details */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <p className="text-[10px] uppercase font-black tracking-widest text-amber-400 font-mono">
                Live Srinagar Activity Tracker
              </p>
            </div>
            
            {/* Close Cross trigger */}
            <button
              onClick={handleDismiss}
              type="button"
              className="p-1 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close live updates notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Toast Body Layout */}
          <div className="flex items-start gap-3 mt-1 cursor-pointer" onClick={handleInquireBooking}>
            {/* Emoji Circle Avatar */}
            <div className="w-10 h-10 rounded-full bg-amber-950/40 border border-amber-500/20 flex items-center justify-center text-xl shrink-0">
              {activeBooking.icon}
            </div>

            {/* Narrative Content */}
            <div className="space-y-0.5 min-w-0 flex-1">
              <h5 className="font-bold text-xs sm:text-sm text-gray-100 truncate font-display">
                {activeBooking.source}
              </h5>
              <p className="text-[11px] text-gray-350 leading-normal font-sans">
                {activeBooking.details} around <strong className="text-white">{activeBooking.destination}</strong>.
              </p>
              
              {/* Timing Metadata info */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[10px] text-amber-400 font-bold bg-amber-950/40 border border-amber-500/30 px-1.5 py-0.5 rounded">
                  ✓ Verified Trip Block
                </span>
                <span className="text-[10px] text-gray-550 italic">
                  {activeBooking.timeAgo}
                </span>
              </div>
            </div>
          </div>

          {/* Trigger Alert CTA link block */}
          <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]" onClick={handleInquireBooking}>
            <button
              type="button"
              className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire about this slot</span>
            </button>
            <span className="text-gray-500 text-[10px] font-mono leading-none">
              Direct Contact
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
