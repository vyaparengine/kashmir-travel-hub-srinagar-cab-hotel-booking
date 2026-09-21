import { Destination, Testimonial, FaqItem, TaxiType } from './types';

export const CONTACT_INFO = {
  driverName: 'Rafiq Bhai',
  driverPhone: '8491022312',
  bookingManagerName: 'Aniket (ShubbiVision)',
  bookingManagerWhatsApp: '8076173175',
  baseFarePerDay: 4000,
  role: 'Master Kashmir Tour Operator',
  servicesCovered: 'Premium Local Taxis & Handpicked Associated Hotels Network',
};

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/91${CONTACT_INFO.bookingManagerWhatsApp}?text=${encodeURIComponent(message)}`;
};

export const getCallUrl = () => {
  return `tel:+91${CONTACT_INFO.driverPhone}`;
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'gulmarg',
    name: 'Gulmarg',
    description: 'The Meadow of Flowers',
    benefit: 'Asia’s highest cable car ride with pristine snow-covered peaks surrounding you.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
    timeRequired: '1 Full Day',
    highlights: ['Gulmarg Gondola Ride (Phase 1 & 2)', 'Gulmarg Golf Course', 'St. Mary’s Church', 'Snow adventures (Skiing & Sledging)'],
    tag: 'Most Popular'
  },
  {
    id: 'pahalgam',
    name: 'Pahalgam',
    description: 'The Valley of Shepherds',
    benefit: 'Relax by the rushing crystal-blue Lidder River, walk through tall pine forests, and visit spectacular film-shooting valleys.',
    image: 'https://images.unsplash.com/photo-1621849400072-f554417f744f?auto=format&fit=crop&q=80&w=800',
    timeRequired: '1 to 2 Days',
    highlights: ['Betaab Valley (Movie Spot)', 'Aru Valley Viewpoints', 'Chandanwari Scenic Drive', 'Pony Ride to Baisaran (Mini Switzerland)'],
    tag: 'Family Favorite'
  },
  {
    id: 'sonamarg',
    name: 'Sonamarg',
    description: 'The Meadow of Gold',
    benefit: 'Breathtaking gateways surrounded by giant Himalayan glaciers, alpine meadows, and gushing snow melt-water.',
    image: 'https://images.unsplash.com/photo-1511316695398-afe0e8fc899a?auto=format&fit=crop&q=80&w=800',
    timeRequired: '1 Full Day',
    highlights: ['Thajiwas Glacier Trekking / Pony ride', 'Sindh River side tea stall', 'Zero Point Snowy Pass (Zojila)', 'Zero-point sledge rides'],
    tag: 'Adventurer Spot'
  },
  {
    id: 'doodhpathri',
    name: 'Doodhpathri',
    description: 'The Valley of Milk',
    benefit: 'A completely peaceful, less-crowded paradise with sprawling emerald carpets of grass and roaring milk-white water streams.',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800',
    timeRequired: '1 Day Trip',
    highlights: ['Shaliganga Stream Walk', 'Virgin pine forest trails', 'Local Kashmiri tea on grass', 'Less crowd, 100% serene peace'],
    tag: 'Unexplored Gem'
  },
  {
    id: 'srinagar_sightseeing',
    name: 'Srinagar Local Sightseeing',
    description: 'Heart of the Kashmir Valley',
    benefit: 'Explore the historical Mughal gardens, vintage landmarks, and take unforgettable photos in traditional Kashmiri dresses.',
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&q=80&w=800',
    timeRequired: '1 Day Visit',
    highlights: ['Nishat Bagh & Shalimar Bagh', 'Shankaracharya Temple Hilltop', 'Chashme Shahi (Royal Spring)', 'Authentic Shawl & Saffron Shopping'],
    tag: 'Culture & Heritage'
  },
  {
    id: 'shikara_ride',
    name: 'Dal Lake Shikara Ride',
    description: 'Iconic Floating Wooden Boat Journey',
    benefit: 'Slide gently across the calm waters, watch beautiful floating lotus fields, shop in water markets, and capture magical sunset photography.',
    image: 'https://images.unsplash.com/photo-1615966614134-2e40fe30da6a?auto=format&fit=crop&q=80&w=800',
    timeRequired: '2 to 3 Hours',
    highlights: ['Beautiful sunset wooden craft ride', 'Floating Saffron & handicraft shopping', 'Kabutarkhana / Nehru Park sights', 'Stunning houseboat background photos'],
    tag: 'Romantic Vibe'
  }
];

export const TAXI_FLEET: TaxiType[] = [
  {
    id: 'innova',
    name: 'Toyota Innova / Crysta',
    capacity: '6-7 Seats',
    luggage: '4 Large Bags',
    features: ['Plush Seating', 'Dual AC/Heater', 'Highly Experienced in Snow Driving', 'Toll taxes & Fuel Included'],
    bestFor: 'Families & Premium comfort lovers'
  },
  {
    id: 'etios_swift',
    name: 'Toyota Etios / Swift Dzire',
    capacity: '4 Seats + Driver',
    luggage: '2 Medium Bags',
    features: ['Compact & Quick', 'Excellent Heater', 'Spacious Legroom', 'Comfortable ride on twists & turns'],
    bestFor: 'Couples, Solo Travelers, Small Groups'
  },
  {
    id: 'tempo_traveler',
    name: 'Force Tempo Traveler',
    capacity: '12-17 Seats',
    luggage: '10+ Bags (Carrier included)',
    features: ['Spacious Cabin', 'Great audio system', 'Strong engine for high altitudes', 'Comfortable family layout'],
    bestFor: 'Corporate groups, large extended families'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test_1',
    name: 'Abhishek & Riya Sharma',
    location: 'Delhi',
    content: 'We booked through Rafiq Bhai’s operator network for our 6-day honeymoon. We were worried about safety in Kashmir, but Rafiq Bhai coordinates the entire logistics system like a family elder! He assigned a polite verified local driver, reserved a stunning associated Srinagar houseboat at half the online rates, and checked on us daily. 100% stress-free and pure Kashmiri hospitality!',
    date: 'February 2026',
    rating: 5,
    avatar: '👩‍❤️‍👨',
    groupType: 'Honeymoon Couple'
  },
  {
    id: 'test_2',
    name: 'The Iyer Family',
    location: 'Chennai',
    content: 'All-inclusive ₹4000 per day flat rate is incredibly honest. Other online travel portals charge cheap fares first then impose extra driver fuel adjustments, holiday surcharges, and nightly commissions. Here, Rafiq Bhai’s master system has absolutely zero hidden costs. Our cab was pristine and our driver was police-verified and extremely safe in Gulmarg’s winter snow bends.',
    date: 'January 2026',
    rating: 5,
    avatar: '👨‍👩‍👧‍👦',
    groupType: 'Family Group'
  },
  {
    id: 'test_3',
    name: 'Preeti Deshmukh',
    location: 'Mumbai',
    content: 'Travelling solo is intimidating, but Aniket on WhatsApp designed a lovely customized plan, and Rafiq Bhai’s local driver fleet made me feel incredibly secure. Because they operate a direct hotel-booking association, I saved almost ₹15,000 on luxury pine cottages in Pahalgam. Kashmir felt like home!',
    date: 'April 2026',
    rating: 5,
    avatar: '👩',
    groupType: 'Solo Traveler'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Pricing',
    question: 'Is ₹4000/day really flat? Does it include everything?',
    answer: 'Yes! Our ₹4000/day price is fully transparent and all-inclusive of professional driver charges, luxury winter heating fuel, toll taxes, inter-district border permits, and Srinagar airport entry parking. There are strictly no hidden daily allowances or night surcharges. As Kashmir’s primary local tour operator, Rafiq Bhai believes in 100% honesty.'
  },
  {
    category: 'Cab Booking',
    question: 'Can Rafiq Bhai pick us up from Srinagar Airport?',
    answer: "Absolutely! Free reliable airport pickup is included. As soon as your flight lands, your assigned driver partner from Rafiq Bhai’s system will greet you with a personalized welcome board at the arrival gate, ready with a warm Kashmiri welcome card and a fresh bottle of water."
  },
  {
    category: 'Hotel',
    question: 'Can you help us book good budget/premium hotels too?',
    answer: "Yes, indeed! As Kashmir’s local operator network, Rafiq Bhai has direct partnerships with cozy lakeside houseboats on Dal Lake and pine-view luxury cottages in Gulmarg & Pahalgam. Because we bypass digital OTA commissions and intermediate booking agents, we pass our wholesale direct-to-owner discounts (usually 35% less!) straight to your package."
  },
  {
    category: 'Itinerary',
    question: 'What if we want to change our itinerary midway?',
    answer: 'No worries at all! Deep local flexibility is our biggest highlight. Unlike rigid travel platforms which penalize modifications, Rafiq Bhai’s travel system lets you adjust daily schedules or extend your time next to a gorgeous rushing pine stream immediately without penalty!'
  },
  {
    category: 'Cab Booking',
    question: 'Which taxi models are included for the ₹4000/day rate?',
    answer: 'Spacious family sedans like Toyota Etios, Swift Dzire, and clean hatchbacks are immediately booked at ₹4000/day. For premium demands like Toyota Innova Crysta or large tourist Tempo Travelers, we charge very competitive adjusted direct-operator rates. Chat with Aniket on WhatsApp to get real-time rates!'
  }
];
