import React, { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, MessageSquare, Compass, ShieldCheck, Eye, MapPin, Sparkles, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../data';

interface GalleryImage {
  id: string;
  category: 'Gulmarg' | 'Pahalgam' | 'Sonamarg' | 'Doodhpathri' | 'Srinagar & Dal Lake';
  title: string;
  tagline: string;
  imageUrl: string;
  rafiqTip: string;
  bestTime: string;
  featuredHeightClass: string; // for custom masonry aspect-ratio rhythm
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gulmarg_1',
    category: 'Gulmarg',
    title: 'Apharwat Peak Covered Slopes',
    tagline: 'Asia’s highest cable car viewpoint and pristine white snow skiing slopes.',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "Book Gondola tickets online 15 days in advance! I will drive you early morning to avoid the tourist queue.",
    bestTime: 'December to April for heavy snow',
    featuredHeightClass: 'h-64 sm:h-72'
  },
  {
    id: 'dal_lake_1',
    category: 'Srinagar & Dal Lake',
    title: 'Iconic Sunset Shikara Ride',
    tagline: 'Gently float past cozy cedar floating houseboats and vibrant local floating markets.',
    imageUrl: 'https://images.unsplash.com/photo-1615966614134-2e40fe30da6a?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "Avoid booking Shikarariders from random lakeside touts. I have trusted local boatmen who charge half price!",
    bestTime: '4:30 PM to 6:30 PM for sunset photos',
    featuredHeightClass: 'h-80 sm:h-96'
  },
  {
    id: 'pahalgam_1',
    category: 'Pahalgam',
    title: 'Gushing Blue Lidder River',
    tagline: 'Lush crystal clear alpine streams bordered by majestic dense pine woodlands.',
    imageUrl: 'https://images.unsplash.com/photo-1621849400072-f554417f744f?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "Buy authentic Kashmiri walnuts and real Saffron here. I will take you directly to a local grower's farm for best rates.",
    bestTime: 'May to October for deep emerald valleys',
    featuredHeightClass: 'h-72 sm:h-80'
  },
  {
    id: 'sonamarg_1',
    category: 'Sonamarg',
    title: 'Thajiwas Glacier Majesty',
    tagline: 'Magnificent silver glaciers wrapping beautiful flower fields in mountain meadows.',
    imageUrl: 'https://images.unsplash.com/photo-1511316695398-afe0e8fc899a?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "If you want to experience zero-point sledge slides or snowy glaciers, do not panic! I have warm coats in my cab.",
    bestTime: 'April to September for glacier walks',
    featuredHeightClass: 'h-80 sm:h-96'
  },
  {
    id: 'doodhpathri_1',
    category: 'Doodhpathri',
    title: 'Emerald Meadows of Shaliganga',
    tagline: 'Untouched pristine grasslands with clean, milky river streams flowing.',
    imageUrl: 'https://images.unsplash.com/photo-1595878715977-2e84003d5504?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "This is completely crowd-free and pristine. Let's do a quiet riverside family picnic tea here with fresh Kashmiri flatbread!",
    bestTime: 'June to October for deep green meadows',
    featuredHeightClass: 'h-64 sm:h-72'
  },
  {
    id: 'srinagar_1',
    category: 'Srinagar & Dal Lake',
    title: 'Royal Mughal Shalimar Gardens',
    tagline: 'Historical tiered water fountains framed by giant century-old Chinar trees.',
    imageUrl: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "Put on traditional Kashmiri Phiran dresses in Nishat garden for a memorable photo session. I'll shoot best angles for you!",
    bestTime: 'April for tulip blossom and October for autumn leaves',
    featuredHeightClass: 'h-72 sm:h-80'
  },
  {
    id: 'gulmarg_2',
    category: 'Gulmarg',
    title: 'Gulmarg Valley Winter Blanket',
    tagline: 'A snowy fairytale land with serene pine forests under deep winter powder.',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "We equip our premium taxis with imported heavy snow chains, ensuring your family stays absolutely safe.",
    bestTime: 'January & February for heavy snow',
    featuredHeightClass: 'h-80 sm:h-96'
  },
  {
    id: 'pahalgam_2',
    category: 'Pahalgam',
    title: 'Aru Valley Alpine Mist',
    tagline: 'Tranquil mountain settlement surrounded by beautiful mist clouds and wild ponies.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "Let's visit early morning around 7:30 AM to catch the amazing local mountain mist rising from Lidder streams.",
    bestTime: 'April to September for pleasant chill',
    featuredHeightClass: 'h-72 sm:h-80'
  },
  {
    id: 'dal_lake_2',
    category: 'Srinagar & Dal Lake',
    title: 'Magical Shimmering Dal Lake',
    tagline: 'Row of colorful wooden Shikara boats lined on pristine mirrored waters.',
    imageUrl: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599cd5?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "Our special direct hotel connections secure you deluxe houseboats at genuine rates bypassing offline commissions.",
    bestTime: 'Year-round comfort',
    featuredHeightClass: 'h-64 sm:h-72'
  },
  {
    id: 'sonamarg_2',
    category: 'Sonamarg',
    title: 'Zero Point Zojila Pass Trial',
    tagline: 'Behold raw giant snow cliffs on the high-altitude pass driving to Ladakh.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "This is 11,500 feet high! If traveling with elders, I carry optional medical oxygen in our Toyota Innova.",
    bestTime: 'May to October for road opening',
    featuredHeightClass: 'h-80 sm:h-96'
  },
  {
    id: 'doodhpathri_2',
    category: 'Doodhpathri',
    title: 'Prisinte Milky Water Cascades',
    tagline: 'Fresh glacial meltwater rushing over river gravel appearing exactly like thick frothy milk.',
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "We will drink fresh organic hot tea from friendly local shepherds. It is the most scenic, pure experience!",
    bestTime: 'May to September for flower carpets',
    featuredHeightClass: 'h-72 sm:h-80'
  },
  {
    id: 'srinagar_2',
    category: 'Srinagar & Dal Lake',
    title: 'Indira Gandhi Spring tulip Blooms',
    tagline: 'Asia’s largest sprawling garden of multi-colored tulips in gorgeous spring blossom.',
    imageUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=800',
    rafiqTip: "The Tulip garden only opens for 30 days around March-April! Plan early with Aniket so we secure the best rooms.",
    bestTime: 'Late March to April only',
    featuredHeightClass: 'h-64 sm:h-72'
  }
];

type CategoryFilter = 'All' | 'Gulmarg' | 'Pahalgam' | 'Sonamarg' | 'Doodhpathri' | 'Srinagar & Dal Lake';

interface CategoryBadgeConfig {
  bgColor: string;
  textColor: string;
  icon: string;
}

const CATEGORY_STYLES: Record<CategoryFilter, CategoryBadgeConfig> = {
  All: { bgColor: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100', textColor: 'text-indigo-800', icon: '🌸' },
  Gulmarg: { bgColor: 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100', textColor: 'text-sky-800', icon: '❄️' },
  Pahalgam: { bgColor: 'bg-emerald-50 border-emerald-250 text-emerald-800 hover:bg-emerald-100', textColor: 'text-emerald-800', icon: '🌲' },
  Sonamarg: { bgColor: 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100', textColor: 'text-amber-800', icon: '🏔️' },
  Doodhpathri: { bgColor: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100', textColor: 'text-teal-800', icon: '🥛' },
  'Srinagar & Dal Lake': { bgColor: 'bg-rose-50 border-rose-200 text-rose-800 hover:bg-rose-100', textColor: 'text-rose-800', icon: 'Boat' }
};

export default function ScenicGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  // Keyboard navigation for Lightroom Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleBookCab = (destinationName: string) => {
    const msg = `Hi Aniket & Rafiq Bhai! I saw the stunning high-quality photography of "${destinationName}" on your website gallery. We want to check tourist cab availability and book a comfortable hotel block for our family!`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="scenic-gallery" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-stone-50 select-none relative overflow-hidden">
      
      {/* Playful Colorful Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-36 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-rose-450/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with colorful gradient elements */}
        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16" 
          id="gallery_head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm" id="gallery_top_tag">
            <Camera className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span className="flex items-center gap-1">Kashmir Real Photographic Tour Guide <Sparkles className="w-3 h-3 text-amber-200" /></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore the Real, Famous Sights <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent italic filter drop-shadow-xs">
              Hand-Guided by Native Operators
            </span>
          </h2>
          
          <p className="font-sans text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            No generic mock vector illustrations or fake travel desk renders! These are real, high-resolution visuals of actual pristine locations where we personally coordinate and navigate our family tourists.
          </p>
        </motion.div>

        {/* Dynamic & Colorful Filter Category Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto p-1 bg-white/60 backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-205 shadow-sm" id="gallery_filters">
          {(['All', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Doodhpathri', 'Srinagar & Dal Lake'] as CategoryFilter[]).map((cat) => {
            const isActive = selectedCategory === cat;
            const style = CATEGORY_STYLES[cat];
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-305 flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white border-transparent shadow-md scale-[1.03]'
                    : `${style.bgColor} border-slate-200 text-slate-700`
                }`}
                id={`cat_chip_${cat.replace(/\s+/g, '')}`}
              >
                <span>{style.icon === 'Boat' ? '🚤' : style.icon}</span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* 1. Desktop & Mobile Unified High-End Masonry Layout with CSS Columns */}
        <div 
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6" 
          id="gallery_masonry_grid_wrapper"
        >
          {filteredImages.map((img, index) => {
            const labelStyle = CATEGORY_STYLES[img.category];
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="break-inside-avoid bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl group relative hover:border-emerald-300 transition-all duration-300 flex flex-col mb-4 sm:mb-6"
                id={`masonry_card_${img.id}`}
              >
                {/* Photo Space with dynamic programmatic height */}
                <div className={`relative overflow-hidden w-full ${img.featuredHeightClass}`}>
                  <img 
                    src={img.imageUrl} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[9px] uppercase font-extrabold tracking-wider border shadow-xs ${labelStyle.bgColor} backdrop-blur-xs`}>
                    {img.category}
                  </span>

                  {/* High Definition Zoom Lightroom Button */}
                  <button 
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full border border-white/20 hover:bg-emerald-600 hover:border-emerald-500 transition-all cursor-pointer shadow-md"
                    title="Open HD Lightbox"
                    id={`zoom_btn_${img.id}`}
                  >
                    <Eye className="w-4 h-4 text-white" />
                  </button>

                  {/* Sightseeing Spot Title over Bottom margin of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-emerald-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Real Spot Viewpoint
                    </p>
                    <h3 className="font-serif text-base sm:text-lg font-bold leading-tight mt-0.5">{img.title}</h3>
                  </div>
                </div>

                {/* Local hospitality suggestion body */}
                <div className="p-4 sm:p-5 space-y-3.5 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {img.tagline}
                  </p>
                  
                  {/* Local guide wisdom quote box */}
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-100 text-xs">
                    <p className="font-extrabold text-emerald-800 uppercase tracking-widest text-[9px] flex items-center gap-1 mb-1 leading-none">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Rafiq Bhai’s Operator Tip:</span>
                    </p>
                    <p className="text-slate-900 font-medium italic leading-relaxed">
                      "{img.rafiqTip}"
                    </p>
                  </div>

                  {/* Small Action buttons and Season details info */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1 font-sans">
                      <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
                      <span>Season: <strong>{img.bestTime.split(' for ')[0]}</strong></span>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => handleBookCab(img.category)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-extrabold text-[11px] hover:bg-emerald-500 shadow-xs transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Plan {img.category.split(' ')[0]}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* 2. Advanced Professional Lightbox Viewer (Full-Screen overlay and controls) */}
        <AnimatePresence>
          {activeImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/98 backdrop-blur-md"
              onClick={() => setLightboxIndex(null)}
              id="lightroom_modal_overlay"
            >
              {/* Close Button positioning on Top Margin */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 hover:bg-rose-600 shadow-md text-white p-3 rounded-full transition-all border border-white/20 cursor-pointer z-50 flex items-center justify-center pointer-events-auto"
                title="Close Image Zoom"
                id="lightbox_close"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Slider Prev Carriage Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                type="button"
                className="absolute left-2 md:left-6 p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-emerald-600 hover:text-white transition-all z-20 cursor-pointer pointer-events-auto focus:outline-hidden"
                aria-label="Previous Slide Selection"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Slider Next Carriage Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                type="button"
                className="absolute right-2 md:right-6 p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-emerald-600 hover:text-white transition-all z-20 cursor-pointer pointer-events-auto focus:outline-hidden"
                aria-label="Next Slide Selection"
                id="lightbox_next"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Modal Box frame structure container */}
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 max-h-[92vh] md:max-h-[82vh]"
                onClick={(e) => e.stopPropagation()}
                id="lightroom_modal_body"
              >
                {/* Photo Area Column (Col Span 7) */}
                <div className="md:col-span-7 relative bg-slate-900 flex items-center justify-center min-h-[35vh] sm:min-h-[45vh] md:min-h-full overflow-hidden">
                  <img 
                    src={activeImage.imageUrl} 
                    alt={activeImage.title} 
                    className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain w-full select-none"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  
                  {/* Image Counter status indicators */}
                  <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold border border-white/10 shadow-md">
                    🖼️ Photo {lightboxIndex !== null ? lightboxIndex + 1 : 0} of {filteredImages.length}
                  </span>

                  {/* Destination Location Label tag overlay */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-emerald-800 to-teal-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-emerald-500/20 shadow-lg">
                    <Compass className="w-4 h-4 text-amber-300 animate-spin-slow" />
                    <span>{activeImage.category} Sightseeing Circuit</span>
                  </div>
                </div>

                {/* Informational Side Column (Col Span 5) */}
                <div className="md:col-span-5 p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5 md:space-y-6 overflow-y-auto bg-stone-50 border-l border-slate-100">
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-1 text-[10px] uppercase font-black text-emerald-800 tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Kashmir Tourist Sightseeing Guide</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-black text-slate-900 mt-1">{activeImage.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {activeImage.tagline}
                    </p>

                    {/* Best season info and dates */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 font-display">Best Season to Visit:</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xs">
                        📅 {activeImage.bestTime}
                      </p>
                    </div>

                    {/* Genuine local operator advice */}
                    <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50/50 rounded-2xl border border-emerald-100/80 space-y-1.5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-sm pointer-events-none" />
                      <p className="text-[10px] uppercase font-black text-emerald-800 tracking-wider flex items-center gap-1 leading-none">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Trusted Driver's Advice (Rafiq Bhai):</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-900 font-semibold italic leading-relaxed pt-0.5">
                        "{activeImage.rafiqTip}"
                      </p>
                    </div>

                  </div>

                  {/* Primary Direct Conversions Booking Block */}
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => {
                        handleBookCab(activeImage.category);
                        setLightboxIndex(null);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer pointer-events-auto"
                    >
                      <MessageSquare className="w-5 h-5 text-white animate-bounce" />
                      Book Package for {activeImage.category}
                    </button>
                    
                    <p className="text-[9px] text-slate-400 text-center uppercase tracking-widest font-mono font-bold">
                      ⚡ WhatsApp: 24/7 direct Tourist support helpline
                    </p>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
