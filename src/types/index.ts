export type Region = 'North' | 'South' | 'West' | 'East' | 'Central' | 'Northeast';

export type TravelVibe = 'Heritage' | 'Nature & Wildlife' | 'Spiritual' | 'Beach & Coastal' | 'Himalayan Adventure' | 'Culinary & Art';

export interface Destination {
  id: string;
  name: string;
  state: string;
  region: Region;
  tagline: string;
  image: string;
  vibe: TravelVibe[];
  bestSeason: string;
  idealDays: number;
  avgDailyCostInr: number;
  rating: number;
  description: string;
  highlights: string[];
  localFood: string[];
  nearestAirport: string;
  nearestRailway: string;
  insiderTip: string;
  mustVisitMonuments?: string[];
  weatherOverview: {
    tempRange: string;
    monsoonMonths: string;
  };
}

export interface CircuitStop {
  city: string;
  state: string;
  days: number;
  highlights: string[];
}

export interface Circuit {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  region: Region | 'Pan-India';
  image: string;
  idealFor: string[];
  bestMonths: string;
  estimatedCostInr: number;
  route: string[];
  stops: CircuitStop[];
  transportMode: string;
  overview: string;
}

export interface UNESCOSite {
  id: string;
  name: string;
  state: string;
  yearInscribed: number;
  category: 'Cultural' | 'Natural' | 'Mixed';
  image: string;
  historicalEra: string;
  description: string;
  openingHours: string;
  entryFee: {
    indian: string;
    foreigner: string;
  };
  photographyTip: string;
}

export interface RegionalCuisine {
  id: string;
  regionName: string;
  state: string;
  iconicDishes: {
    name: string;
    description: string;
    diet: 'Vegetarian' | 'Non-Veg' | 'Vegan' | 'Jain-Friendly';
    spiceLevel: 1 | 2 | 3 | 4 | 5;
  }[];
  sweetTreat: string;
  beverage: string;
  specialityNotes: string;
}

export interface Phrase {
  id: string;
  category: 'Greetings & Etiquette' | 'Transit & Rickshaw' | 'Shopping & Bargaining' | 'Dining & Water' | 'Emergency & Direction';
  english: string;
  hindi: string;
  romanized: string;
  meaning: string;
  regionalAlternative?: {
    language: string;
    text: string;
  };
}

export interface SafetyTip {
  id: string;
  title: string;
  category: 'Transit' | 'Digital & Payments' | 'Health & Water' | 'Cultural Respect' | 'Scam Alert';
  tip: string;
  scamWarning?: string;
  whatToDo: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  recommendedMeals: string[];
  transportAdvice: string;
  budgetEstimateInr: number;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  destination: string;
  durationDays: number;
  vibe: string;
  budgetTier: 'Economy Backpacker' | 'Comfort Explorer' | 'Royal Luxury';
  totalEstimatedInr: number;
  summary: string;
  packingSuggestions: string[];
  days: ItineraryDay[];
  createdAt: string;
}

export interface TripPlannerFormState {
  destination: string;
  durationDays: number;
  travelerType: 'Solo' | 'Couple' | 'Family with Kids' | 'Friends Group' | 'Senior Travelers';
  vibe: TravelVibe;
  budgetTier: 'Economy Backpacker' | 'Comfort Explorer' | 'Royal Luxury';
  dietPreference: 'All Foods' | 'Vegetarian Only' | 'Jain (No Root Veg)' | 'Vegan' | 'Mild Spice Only';
  monthOfTravel: string;
  customNotes?: string;
}

export interface PersonalGuide {
  id: string;
  name: string;
  title: string;
  location: string;
  state: string;
  region: Region;
  targetAudience: 'domestic' | 'international' | 'both';
  photo: string;
  rating: number;
  reviewsCount: number;
  badge: 'Ministry of Tourism Certified' | 'State Tourism Licensed' | 'ASI Heritage Guide' | 'Naturalist & Trek Expert' | 'Culinary Connoisseur';
  licenseNumber: string;
  languages: string[];
  specialties: string[];
  dailyRateInr: number;
  hourlyRateInr: number;
  experienceYears: number;
  bio: string;
  includedServices: string[];
  domesticHighlights?: string[];
  internationalHighlights?: string[];
}

export interface GuideBookingInquiry {
  guideId: string;
  guideName: string;
  travelerName: string;
  travelerEmail: string;
  travelerPhone: string;
  travelerOrigin: 'International' | 'Domestic (Indian)';
  countryOrState: string;
  preferredLanguage: string;
  serviceType: 'Half-Day (4 Hours)' | 'Full-Day (8 Hours)' | 'Multi-Day (Full Trip)';
  date: string;
  partySize: number;
  specialRequests: string;
}

