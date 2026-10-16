import { SafetyTip } from '../types';

export const EMERGENCY_NUMBERS = [
  {
    title: 'National Emergency Support',
    number: '112',
    description: 'All-in-one single pan-India emergency number for Police, Fire, and Ambulance (dialable from any SIM or roaming phone without country code).'
  },
  {
    title: 'Incredible India Tourist Helpline',
    number: '1363 / 1800-11-1363',
    description: '24x7 Multi-lingual toll-free helpline operated by Ministry of Tourism in 12 languages (English, Hindi, French, German, Spanish, Japanese, Russian, etc.).'
  },
  {
    title: 'Police Assistance',
    number: '100',
    description: 'Direct PCR van dispatch for urgent security or dispute resolution.'
  },
  {
    title: 'Ambulance & Medical Crisis',
    number: '108 / 102',
    description: 'Emergency medical triage and ambulance transit.'
  },
  {
    title: 'Women Safety Helpline',
    number: '1091',
    description: 'Specialized 24x7 women support cell across all major Indian states.'
  },
  {
    title: 'Railway Security & Passenger Safety',
    number: '139 (RailMadad)',
    description: 'Instant security assistance inside train coaches and station premises.'
  }
];

export const SAFETY_TIPS: SafetyTip[] = [
  {
    id: 'scam-closed-monument',
    title: 'The "Monument / Temple is Closed" Scam',
    category: 'Scam Alert',
    tip: 'Tuk-tuk or taxi drivers, or men loitering near monument gates, might politely claim: "Sir, Taj Mahal / Red Fort is closed today for a festival, but I can take you to an official government handicraft emporium instead!"',
    scamWarning: 'Monuments rarely close unannounced (Taj Mahal is closed only on Fridays). They earn up to 40% commission if you buy rugs, marble, or jewelry.',
    whatToDo: 'Politely say "I have an ASI e-ticket already, please drop me at the ticket gate." Walk directly to the official turnstile.'
  },
  {
    id: 'scam-fake-train-counter',
    title: 'The "New Delhi Station Train Cancelled" Scam',
    category: 'Scam Alert',
    tip: 'Near New Delhi Railway Station (Paharganj side), well-dressed individuals with fake ID badges say: "Your train is cancelled due to track repair. You must visit the government tourist booking office in Connaught Place to rebook."',
    scamWarning: 'They will usher you into an unscrupulous travel agency that charges $500 for cheap private taxis.',
    whatToDo: 'Never trust anyone on the street. Check the real-time status of your train on the official NTES (National Train Enquiry System) app or RailMadad 139.'
  },
  {
    id: 'safe-transit-meter',
    title: 'Cabs, Metro & Auto-Rickshaws',
    category: 'Transit',
    tip: 'In major cities (Delhi, Mumbai, Bengaluru, Kolkata, Chennai, Jaipur), use app-based cabs (Uber or Ola) or city Metros for guaranteed transparent pricing and GPS tracking.',
    scamWarning: 'Street auto drivers near airports or train stations may quote 3x to 5x higher rates.',
    whatToDo: 'Always choose Pre-paid Taxi / Auto booths inside airport terminals or railway stations operated by Traffic Police. If hailing on the street, insist: "Meter se chalo" (Run by the meter).'
  },
  {
    id: 'water-hygiene',
    title: 'Drinking Water & Stomach Hygiene',
    category: 'Health & Water',
    tip: 'Avoid tap water everywhere in India. Drink water from sealed packaged mineral bottles (reputable brands: Kinley, Aquafina, Bisleri, Himalayan) or RO-purified dispensers in verified hotels.',
    scamWarning: 'Inspect the bottle cap seal before purchasing at roadside stalls to confirm it was not refilled.',
    whatToDo: 'Carry oral rehydration salts (Electral ORS) in your daypack. Avoid raw salads or fruit already cut and exposed to flies on street carts. Always eat hot, freshly cooked, sizzling street food.'
  },
  {
    id: 'temple-etiquette',
    title: 'Temples, Mosques & Gurudwaras Etiquette',
    category: 'Cultural Respect',
    tip: 'Religious sanctums are spaces of deep reverence. Always remove shoes at the designated shoe stand (Joota Ghar) outside.',
    scamWarning: 'Unsolicited priests may tie a red thread on your wrist and aggressively demand ₹500 - ₹2,000 as a "mandatory donation".',
    whatToDo: 'Dress modestly (shoulders and knees covered). Cover your head in Sikh Gurudwaras (scarves provided free at entry). Donations in temple donation boxes (Hundi) are strictly voluntary.'
  },
  {
    id: 'digital-payments-upi',
    title: 'UPI Cashless Superpower for Foreigners',
    category: 'Digital & Payments',
    tip: 'India runs virtually 100% on UPI (Unified Payments Interface) QR codes—from five-star restaurants down to ₹10 roadside chai stalls. International tourists can now use "UPI One World" wallets at international airports or apps like Cheq UPI.',
    scamWarning: 'Never enter your UPI PIN to RECEIVE money. Entering your PIN always deducts money from your account.',
    whatToDo: 'Keep ₹2,000 in physical cash (₹100 and ₹200 small denominations) as backup, and use UPI or chip/contactless credit cards for all other transactions.'
  }
];
