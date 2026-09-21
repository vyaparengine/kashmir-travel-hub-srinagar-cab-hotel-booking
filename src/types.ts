export interface Destination {
  id: string;
  name: string;
  description: string;
  benefit: string;
  image: string;
  timeRequired: string;
  highlights: string[];
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  date: string;
  rating: number;
  avatar: string;
  groupType: 'Family Group' | 'Honeymoon Couple' | 'Solo Traveler' | 'Friends Reunion';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Cab Booking' | 'Hotel' | 'Itinerary';
}

export interface TaxiType {
  id: string;
  name: string;
  capacity: string;
  luggage: string;
  features: string[];
  bestFor: string;
}
