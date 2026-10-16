export interface EssentialGuide {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  steps: string[];
  keyFact: string;
}

export const TRAVEL_ESSENTIALS: EssentialGuide[] = [
  {
    id: 'upi-guide',
    title: 'UPI for International Travelers (Cashless India)',
    icon: 'Smartphone',
    badge: 'Game Changer',
    description: 'UPI (Unified Payments Interface) is used by 350+ million Indians for 99% of transactions. Foreign tourists can now use UPI without an Indian domestic bank account!',
    steps: [
      'At IGI Airport Delhi, Mumbai CSMIA, Bengaluru BLR, or Ahmedabad airports, visit designated ICICI, IDFC First Bank, or Transcorp counters.',
      'Provide your valid Passport and Indian E-Visa copy to issue a prepaid "UPI One World" digital wallet.',
      'Alternatively download licensed apps like "Cheq UPI" before landing and verify via your passport.',
      'Load money into the wallet using your international Visa, Mastercard, or foreign currency cash.',
      'Scan ANY merchant QR code (PhonePe, Google Pay, Paytm, BharatPe) at roadside chai stalls, rickshaws, and fine dining!'
    ],
    keyFact: 'UPI transactions have zero credit-card foreign markup fees and settle instantly in exact Indian Rupees down to 1 Rupee.'
  },
  {
    id: 'sim-card',
    title: 'Tourist SIM Card & 5G Connectivity',
    icon: 'Wifi',
    badge: 'Essential First Hour',
    description: 'Getting an Indian SIM card gives you ultra-fast 5G data at some of the world’s lowest rates (approx ₹300-₹500 / $4-$6 for 1.5GB daily for 28 days).',
    steps: [
      'Do not buy expensive international roaming. Go to official Airtel or Jio kiosks located immediately in the arrivals hall after customs at Delhi, Mumbai, or Bengaluru airports.',
      'Bring original physical Passport, hardcopy or printed Indian E-Visa, and 1 passport-size color photograph (some airport booths take digital webcam photo).',
      'The telecom agent will activate your prepaid number within 2 to 4 hours via automated tele-verification (dialing 59059).',
      'Recommended plan: 1.5GB to 2.5GB per day with unlimited pan-India calling valid for 28 or 84 days.',
      'Tip: In Ladakh and Jammu & Kashmir, standard prepaid SIM cards from other states stop working by law; you must purchase a local J&K/Ladakh postpaid or local SIM in Leh.'
    ],
    keyFact: 'Airtel has strongest coverage in remote Himalayas and Northeast; Jio has pervasive 5G throughout major and tier-2 cities.'
  },
  {
    id: 'train-ftq',
    title: 'Trains & Foreign Tourist Quota (FTQ)',
    icon: 'Train',
    badge: 'Secret Travel Hack',
    description: 'Indian Railways (IRCTC) reserves exclusive seats on popular luxury express trains (Vande Bharat, Shatabdi, Rajdhani) specifically for international passport holders even when general seats are sold out months in advance.',
    steps: [
      'Visit the International Tourist Bureau at major stations (e.g. 1st Floor, New Delhi Railway Station, or CSMT Mumbai).',
      'Bring original passport and valid visa. Pay using international credit card or INR.',
      'Alternatively, create an IRCTC account online at irctc.co.in using an international mobile number (one-time registration fee of ₹122 + GST).',
      'Select "Foreign Tourist" quota during seat selection. Available up to 365 days in advance!',
      'For fast day journeys, book Executive Class (EC) or Chair Car (CC) on the modern Vande Bharat Express.'
    ],
    keyFact: 'The Foreign Tourist Quota is the ultimate lifesaver during peak festival seasons when trains appear fully booked.'
  },
  {
    id: 'e-visa-checklist',
    title: 'Indian E-Visa Official Protocol',
    icon: 'FileCheck',
    badge: 'Mandatory',
    description: 'Travelers from over 165+ countries can apply for an Indian e-Visa online without mailing physical passports.',
    steps: [
      'ALWAYS use the ONLY official government portal: "indianvisaonline.gov.in" (Beware of thousands of deceptive copycat scam websites that charge $200+ extra fees!).',
      'Apply at least 4 to 7 days before your intended arrival date.',
      'Available variants: 30-day double entry e-Tourist Visa, 1-Year multiple entry, or 5-Year multiple entry.',
      'Upload a white-background passport photo and PDF of passport bio page.',
      'Print 2 color copies of the Electronic Travel Authorization (ETA) PDF to present to immigration upon landing.'
    ],
    keyFact: 'Valid for arrival through 30 designated international airports (Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Kochi, Goa, etc.) and 5 major seaports.'
  }
];

export const PACKING_CHECKLIST = [
  { category: 'Documents & Money', items: ['Passport with 6+ months validity', 'Printed E-Visa (ETA) copies (at least 2)', 'Credit cards with zero foreign transaction fee', 'Small cash reserve (₹3,000 in ₹100/₹200 notes)', 'Travel health insurance policy document'] },
  { category: 'Health & Wellness', items: ['Electral ORS (oral rehydration packets)', 'Mosquito repellent spray (Odomos with DEET)', 'Broad spectrum sunscreen SPF 50+', 'Probiotics & digestive medication', 'Hand sanitizer gel bottles'] },
  { category: 'Clothing & Culture', items: ['Lightweight breathable cotton or linen clothing', 'Scarf/Dupatta to cover head and shoulders at religious shrines', 'Slip-on shoes/sandals for easy removal at temple steps', 'Warm fleece/thermals if visiting Himalayas or desert nights', 'Sun hat and polarized UV sunglasses'] },
  { category: 'Electronics', items: ['Universal travel adapter (India uses Type D and Type C round prongs at 230V)', 'High capacity Power Bank (10,000–20,000 mAh)', 'Offline maps downloaded on Google Maps / OsmAnd', 'Noise-canceling earphones for train and street immersion'] }
];
