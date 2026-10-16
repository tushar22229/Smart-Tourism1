import { UNESCOSite } from '../types';

export const UNESCO_SITES: UNESCOSite[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    state: 'Uttar Pradesh (Agra)',
    yearInscribed: 1983,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    historicalEra: '17th Century Mughal (1631–1648 CE by Shah Jahan)',
    description: 'An immense mausoleum of white marble, built in Agra by order of the Mughal emperor Shah Jahan in memory of his favourite wife Mumtaz Mahal. Universally admired masterpiece of the world’s heritage.',
    openingHours: 'Sunrise to Sunset (Closed on Fridays)',
    entryFee: {
      indian: '₹50 (Mausoleum interior: +₹200)',
      foreigner: '₹1,100 (Mausoleum interior: +₹200)'
    },
    photographyTip: 'Arrive at the East Gate by 5:45 AM. The sunrise light casts a delicate pinkish-gold reflection on the white Makrana marble without midday heat or crowds.'
  },
  {
    id: 'hampi-monuments',
    name: 'Group of Monuments at Hampi',
    state: 'Karnataka (Vijayanagara)',
    yearInscribed: 1986,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443a9b1?auto=format&fit=crop&w=1200&q=80',
    historicalEra: '14th–16th Century Vijayanagara Empire',
    description: 'The spectacular capital of the last great Hindu Kingdom of Vijayanagara. Its fabulously wealthy princes built Dravidian temples and palaces that won the admiration of medieval travelers from Portugal, Persia, and Venice.',
    openingHours: '6:00 AM to 6:00 PM Daily',
    entryFee: {
      indian: '₹40 (Vittala & Zenana enclosure)',
      foreigner: '₹600'
    },
    photographyTip: 'Climb Hemakuta Hill or Matanga Hill at sunset for a golden-hour panorama showing the monolithic Virupaksha tower against the boulder-strewn landscape.'
  },
  {
    id: 'ajanta-ellora',
    name: 'Ajanta & Ellora Caves',
    state: 'Maharashtra (Chhatrapati Sambhajinagar)',
    yearInscribed: 1983,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    historicalEra: '2nd Century BCE – 10th Century CE',
    description: '34 monolithic rock-cut cave temples carved directly into basalt volcanic cliffs. Ellora’s Cave 16 (Kailasa Temple) is the largest single monolithic rock excavation on Earth, carved top-to-bottom using only hammer and chisel.',
    openingHours: '9:00 AM to 5:30 PM (Ajanta closed Mondays, Ellora closed Tuesdays)',
    entryFee: {
      indian: '₹40',
      foreigner: '₹600'
    },
    photographyTip: 'Tripods and flash are prohibited inside painted caves to preserve organic pigments; bring a fast lens (f/1.8 or f/2.8) for handheld low-light photography.'
  },
  {
    id: 'sun-temple-konark',
    name: 'Sun Temple, Konark',
    state: 'Odisha (Puri Coast)',
    yearInscribed: 1984,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=1200&q=80',
    historicalEra: '13th Century (1250 CE by King Narasimhadeva I)',
    description: 'Conceived as a colossal chariot of the Sun God Surya, with 24 intricately carved stone wheels (which function as precise sundials) pulled by seven energetic horses galloping toward the Bay of Bengal.',
    openingHours: '6:00 AM to 8:00 PM Daily',
    entryFee: {
      indian: '₹40',
      foreigner: '₹600'
    },
    photographyTip: 'Inspect the spokes of the stone sundials in late afternoon—local guides can demonstrate how shadow alignment calculates exact local standard time down to the minute.'
  },
  {
    id: 'kaziranga',
    name: 'Kaziranga National Park',
    state: 'Assam (Golaghat & Nagaon)',
    yearInscribed: 1985,
    category: 'Natural',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    historicalEra: 'Protected since 1905 by Lord Curzon',
    description: 'Home to the world’s largest population of Great Indian One-horned Rhinoceroses (over 2,600 rhinos), along with tigers, wild Asian elephants, swamp deer, and Ganges river dolphins across the Brahmaputra floodplain.',
    openingHours: 'Safari gates: 7:00 AM to 4:00 PM (Closed June to September for monsoon)',
    entryFee: {
      indian: '₹100 + Jeep safari permit',
      foreigner: '₹650 + Jeep safari permit'
    },
    photographyTip: 'Book the Western (Bagori) or Central (Kohora) range early morning safari for mist rising off the wetlands with rhinos grazing in golden elephant grass.'
  },
  {
    id: 'rani-ki-vav',
    name: 'Rani ki Vav (The Queen’s Stepwell)',
    state: 'Gujarat (Patan)',
    yearInscribed: 2014,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1609137144827-02081d39281a?auto=format&fit=crop&w=1200&q=80',
    historicalEra: '11th Century Chaulukya Dynasty (Queen Udayamati)',
    description: 'Designed as an inverted temple honoring water sanctity. Descending seven subterranean terraces, it houses more than 500 principal sculptures and over 1,000 minor ones showcasing Vishnu’s ten avatars in immaculate stone carving.',
    openingHours: '8:00 AM to 6:00 PM Daily',
    entryFee: {
      indian: '₹40',
      foreigner: '₹600'
    },
    photographyTip: 'Featured on the reverse of the Indian ₹100 banknote! Bring a 100-rupee note along and photograph it aligned in front of the real stepwell.'
  },
  {
    id: 'western-ghats',
    name: 'Western Ghats Biodiversity Hotspot',
    state: 'Kerala, Tamil Nadu, Karnataka & Maharashtra',
    yearInscribed: 2012,
    category: 'Natural',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
    historicalEra: 'Older than the Himalayas (Geomorphic formation)',
    description: 'One of the world’s eight ‘hottest hotspots’ of biological diversity. Influences the Indian monsoon weather pattern and hosts thousands of endemic flora, bird species, and rare mammals like the Lion-tailed Macaque and Nilgiri Tahr.',
    openingHours: 'Varies by national sanctuary (e.g. Periyar, Silent Valley, Kudremukh)',
    entryFee: {
      indian: '₹50 - ₹150',
      foreigner: '₹350 - ₹700'
    },
    photographyTip: 'Best photographed in post-monsoon months (September to November) when the hills are coated in neon green moss, roaring cascading waterfalls, and wild orchids.'
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar & Its Monuments',
    state: 'Delhi (Mehrauli)',
    yearInscribed: 1993,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    historicalEra: '12th–13th Century Delhi Sultanate',
    description: 'A 72.5-meter-high fluted red sandstone minaret built in 1192 CE. The complex includes the mysterious 4th-century rust-resistant Iron Pillar of Chandragupta II and the Quwwat-ul-Islam Mosque with intricately carved stone colonnades.',
    openingHours: '7:00 AM to 8:00 PM Daily (Lit until 10 PM)',
    entryFee: {
      indian: '₹40',
      foreigner: '₹600'
    },
    photographyTip: 'Visit in the late afternoon to catch warm directional light striking the calligraphy bands and sandstone flanges, then stay for the twilight floodlighting.'
  }
];
