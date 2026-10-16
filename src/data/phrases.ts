import { Phrase } from '../types';

export const ESSENTIAL_PHRASES: Phrase[] = [
  {
    id: 'namaste',
    category: 'Greetings & Etiquette',
    english: 'Hello / Greetings (respectful)',
    hindi: 'नमस्ते / नमस्कार',
    romanized: 'Namaste / Namaskar',
    meaning: 'Traditional respectful Indian greeting with folded hands at chest level.',
    regionalAlternative: {
      language: 'Tamil',
      text: 'Vanakkam (வணக்கம்)'
    }
  },
  {
    id: 'dhanyawad',
    category: 'Greetings & Etiquette',
    english: 'Thank you very much',
    hindi: 'धन्यवाद / शुक्रिया',
    romanized: 'Dhanyawad / Shukriya',
    meaning: 'Universal polite expression of gratitude.',
    regionalAlternative: {
      language: 'Bengali',
      text: 'Dhonyobad (ধন্যবাদ)'
    }
  },
  {
    id: 'how-much',
    category: 'Shopping & Bargaining',
    english: 'How much does this cost?',
    hindi: 'यह कितने का है?',
    romanized: 'Yeh kitne ka hai?',
    meaning: 'Essential for flea markets, auto rides, and street stalls.',
    regionalAlternative: {
      language: 'Kannada',
      text: 'Idu eshtu? (ಇದು ಎಷ್ಟು?)'
    }
  },
  {
    id: 'meter-se-chalo',
    category: 'Transit & Rickshaw',
    english: 'Please run by the meter',
    hindi: 'भैया, मीटर से चलो',
    romanized: 'Bhaiya, meter se chalo',
    meaning: 'Say this to auto-rickshaw drivers in Mumbai, Bengaluru, and Pune to avoid overcharging.',
    regionalAlternative: {
      language: 'Marathi',
      text: 'Meter pramane chala (मीटर प्रमाणे चला)'
    }
  },
  {
    id: 'stop-here',
    category: 'Transit & Rickshaw',
    english: 'Please stop here',
    hindi: 'यहाँ रोक दीजिए',
    romanized: 'Yahan rok dijiye',
    meaning: 'Used to alight from taxis, autos, or buses.',
    regionalAlternative: {
      language: 'Malayalam',
      text: 'Ivide nirthoo (ഇവിടെ നിർത്തൂ)'
    }
  },
  {
    id: 'less-spicy',
    category: 'Dining & Water',
    english: 'Please make it less spicy (mild)',
    hindi: 'कृपया तीखा कम कीजिए',
    romanized: 'Kripya teekha kam kijiye',
    meaning: 'Crucial phrase when ordering curries and street food if you have sensitive spice tolerance.',
    regionalAlternative: {
      language: 'Telugu',
      text: 'Karam thakkuva veyandi (కారం తక్కువ వేయండి)'
    }
  },
  {
    id: 'bottled-water',
    category: 'Dining & Water',
    english: 'Please give a sealed bottle of mineral water',
    hindi: 'सीलबंद मिनरल पानी की बोतल दीजिए',
    romanized: 'Sealed mineral paani ki botal dijiye',
    meaning: 'Ensures you receive an unopened, reputable bottled drinking water.',
    regionalAlternative: {
      language: 'Tamil',
      text: 'Seal panna water bottle kudunga'
    }
  },
  {
    id: 'vegetarian-only',
    category: 'Dining & Water',
    english: 'Is this 100% vegetarian?',
    hindi: 'क्या यह शुद्ध शाकाहारी है?',
    romanized: 'Kya yeh shuddh shakahari hai?',
    meaning: 'Confirms no meat, fish, poultry, or gelatin is used.',
    regionalAlternative: {
      language: 'Gujarati',
      text: 'Aa shuddh shakahari chhe?'
    }
  },
  {
    id: 'bargain-reasonable',
    category: 'Shopping & Bargaining',
    english: 'Please give a reasonable / fair price',
    hindi: 'थोड़ा ठीक-ठीक लगाइए',
    romanized: 'Thoda theek-theek lagaiye',
    meaning: 'Friendly and cultural way to negotiate prices in local souvenir bazaars.',
    regionalAlternative: {
      language: 'Hindi Street',
      text: 'Sahi daam lagao bhaiya'
    }
  },
  {
    id: 'help-me',
    category: 'Emergency & Direction',
    english: 'I need help / Please help me',
    hindi: 'कृपया मेरी मदद कीजिए',
    romanized: 'Kripya meri madad kijiye',
    meaning: 'Urgent assistance call in public places.',
    regionalAlternative: {
      language: 'Tamil',
      text: 'Enakku udhavi thevai (எனக்கு உதவி தேவை)'
    }
  },
  {
    id: 'where-is-station',
    category: 'Emergency & Direction',
    english: 'Where is the railway station / metro?',
    hindi: 'रेलवे स्टेशन / मेट्रो कहाँ है?',
    romanized: 'Railway station / metro kahan hai?',
    meaning: 'Direction inquiry for public transit.',
    regionalAlternative: {
      language: 'Bengali',
      text: 'Station-ta kothay? (স্টেশনটা কোথায়?)'
    }
  },
  {
    id: 'no-thank-you',
    category: 'Greetings & Etiquette',
    english: 'No, thank you (firm but polite)',
    hindi: 'नहीं, धन्यवाद, मुझे नहीं चाहिए',
    romanized: 'Nahi, dhanyawad, mujhe nahi chahiye',
    meaning: 'Polite and clear refusal for persistent hawkers or touts without being rude.',
    regionalAlternative: {
      language: 'Hindi Short',
      text: 'Bas, zaroorat nahi hai'
    }
  }
];
