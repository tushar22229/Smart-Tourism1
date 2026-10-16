import { Circuit } from '../types';

export const CIRCUITS: Circuit[] = [
  {
    id: 'golden-triangle',
    title: 'The Iconic Golden Triangle',
    subtitle: 'Delhi • Agra • Jaipur: India’s Most Legendary Introduction',
    duration: '6 Days / 5 Nights',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    idealFor: ['First-Time India Visitors', 'History Buffs', 'Photography Enthusiasts'],
    bestMonths: 'October to March',
    estimatedCostInr: 26000,
    transportMode: 'High-speed Vande Bharat / Gatimaan Express & Private AC Cab',
    route: ['New Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur', 'New Delhi'],
    overview: 'The quintessential introduction to India, connecting the vibrant political capital New Delhi, the marble wonder Taj Mahal in Agra, and the pink desert citadel of Jaipur. Experience Mughal architecture, Rajput fortresses, vibrant bazaars, and world-class hospitality.',
    stops: [
      {
        city: 'New Delhi',
        state: 'Delhi (NCT)',
        days: 2,
        highlights: ['Qutub Minar', 'Humayun’s Tomb', 'Old Delhi Chandni Chowk rickshaw ride', 'India Gate']
      },
      {
        city: 'Agra',
        state: 'Uttar Pradesh',
        days: 2,
        highlights: ['Taj Mahal sunrise view', 'Agra Fort', 'Sunset at Mehtab Bagh', 'Ghost city of Fatehpur Sikri']
      },
      {
        city: 'Jaipur',
        state: 'Rajasthan',
        days: 2,
        highlights: ['Amber Fort mirror palace', 'Hawa Mahal breeze facade', 'City Palace & Jantar Mantar', 'Chokhi Dhani dinner']
      }
    ]
  },
  {
    id: 'kerala-backwaters-hills',
    title: 'God’s Own Country Serenity',
    subtitle: 'Kochi • Munnar • Thekkady • Alleppey Backwaters',
    duration: '7 Days / 6 Nights',
    region: 'South',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    idealFor: ['Couples & Honeymooners', 'Wellness Seekers', 'Nature Lovers'],
    bestMonths: 'September to March',
    estimatedCostInr: 32000,
    transportMode: 'Scenic Western Ghats Road Journey & Private Kettuvallam Houseboat',
    route: ['Kochi (Cochin)', 'Munnar Tea Highlands', 'Thekkady Spice Sanctuaries', 'Alleppey Backwaters', 'Marari Beach'],
    overview: 'From spice trading ports and Chinese fishing nets of Fort Kochi to mist-shrouded green tea carpet hills of Munnar, aromatic cardamom plantations of Periyar, and slow drifting overnight houseboats on emerald backwaters.',
    stops: [
      {
        city: 'Fort Kochi',
        state: 'Kerala',
        days: 1,
        highlights: ['Chinese Fishing Nets', 'Kathakali classical dance performance', 'Jew Town & Mattancherry Palace']
      },
      {
        city: 'Munnar',
        state: 'Kerala',
        days: 2,
        highlights: ['Kolukkumalai world highest tea plantation sunrise', 'Eravikulam National Park Nilgiri Tahr', 'Mattupetty Dam']
      },
      {
        city: 'Thekkady',
        state: 'Kerala',
        days: 1,
        highlights: ['Periyar Wildlife Sanctuary boat safari', 'Spice plantation herbal tour', 'Kalaripayattu martial arts show']
      },
      {
        city: 'Alleppey (Alappuzha)',
        state: 'Kerala',
        days: 2,
        highlights: ['Overnight traditional luxury houseboat cruise', 'Village canoe trail', 'Traditional Karimeen & Sadya banquet']
      }
    ]
  },
  {
    id: 'rajasthan-royal-heritage',
    title: 'Royal Rajasthan Desert & Palaces',
    subtitle: 'Jaipur • Jodhpur Blue City • Udaipur Lake City • Jaisalmer Dunes',
    duration: '9 Days / 8 Nights',
    region: 'West',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    idealFor: ['Cultural Explorers', 'Architecture Aficionados', 'Couples'],
    bestMonths: 'November to February',
    estimatedCostInr: 45000,
    transportMode: 'Comfort AC Tourist Chauffeur & Vande Bharat Express',
    route: ['Jaipur', 'Pushkar Holy Lake', 'Jodhpur', 'Ranakpur Jain Temples', 'Udaipur', 'Jaisalmer Sand Dunes'],
    overview: 'An extraordinary royal journey through the land of Maharajas. Sleep under glittering stars in the Thar Desert dunes, wander indigo-painted alleyways beneath Mehrangarh Fort, admire delicate marble lace temples at Ranakpur, and boat across Udaipur’s tranquil lake.',
    stops: [
      {
        city: 'Jaipur',
        state: 'Rajasthan',
        days: 2,
        highlights: ['Amber Fort', 'Nahargarh sunset view', 'Bapu Bazaar textiles']
      },
      {
        city: 'Jodhpur',
        state: 'Rajasthan',
        days: 2,
        highlights: ['Mehrangarh Fort ramparts', 'Blue City walking maze', 'Jaswant Thada marble cenotaph']
      },
      {
        city: 'Udaipur',
        state: 'Rajasthan',
        days: 3,
        highlights: ['Lake Pichola sunset boat cruise', 'City Palace courtyards', 'Ranakpur 1,444 unique marble pillars']
      },
      {
        city: 'Jaisalmer',
        state: 'Rajasthan',
        days: 2,
        highlights: ['Golden Fort (Sonar Qila) living fort', 'Sam Sand Dunes camel safari & folk music bonfire']
      }
    ]
  },
  {
    id: 'himalayan-ladakh-expedition',
    title: 'High Passes of the Himalayas',
    subtitle: 'Leh • Nubra Valley • Turtuk • Pangong Tso • Magnetic Hill',
    duration: '7 Days / 6 Nights',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    idealFor: ['Adventure Seekers', 'Photographers', 'Motorcyclists & Trekkers'],
    bestMonths: 'May to September',
    estimatedCostInr: 38000,
    transportMode: '4x4 High-Clearance Himalayan SUV / Royal Enfield Bullet',
    route: ['Leh', 'Sham Valley', 'Khardung La Pass', 'Nubra Valley (Hunder)', 'Turtuk (Balti border village)', 'Pangong Tso Lake', 'Chang La Pass', 'Leh'],
    overview: 'Drive across Khardung La (one of the highest motorable passes on the planet), camp under billions of stars beside the color-shifting saltwater Pangong Tso lake, ride double-humped camels through white sand dunes, and experience serene gompas.',
    stops: [
      {
        city: 'Leh City',
        state: 'Ladakh',
        days: 2,
        highlights: ['Mandatory acclimatization rest', 'Shanti Stupa sunset panorama', 'Leh Market & Thiksey prayer chanting']
      },
      {
        city: 'Nubra Valley & Turtuk',
        state: 'Ladakh',
        days: 2,
        highlights: ['Khardung La top (17,582 ft)', 'Diskit giant Maitreya Buddha statue', 'Hunder sand dunes Bactrian camel ride', 'Turtuk apricot orchards']
      },
      {
        city: 'Pangong Tso Lake',
        state: 'Ladakh',
        days: 2,
        highlights: ['Cobalt and cyan shoreline walks', 'Stargazing in pristine dark skies', 'Chang La high pass crossing']
      }
    ]
  },
  {
    id: 'spiritual-ganges-trail',
    title: 'The Sacred Soul of India',
    subtitle: 'Delhi • Varanasi Kashi • Ayodhya • Prayagraj • Haridwar • Rishikesh',
    duration: '8 Days / 7 Nights',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    idealFor: ['Spiritual Seekers', 'Yoga & Meditation Enthusiasts', 'Cultural Travelers'],
    bestMonths: 'October to March',
    estimatedCostInr: 28000,
    transportMode: 'Vande Bharat Express & Sacred Ganges Wooden Boat',
    route: ['Varanasi', 'Sarnath', 'Prayagraj Triveni Sangam', 'Haridwar', 'Rishikesh'],
    overview: 'Experience the mystical spiritual heart of Bharat. Witness timeless Vedic rituals on the ghats of Varanasi, bathe in the confluence of holy rivers at Prayagraj, and practice yogic meditation on the banks of the Himalayan Ganga in Rishikesh.',
    stops: [
      {
        city: 'Varanasi',
        state: 'Uttar Pradesh',
        days: 3,
        highlights: ['Grand Dashashwamedh Evening Ganga Aarti', 'Sunrise wooden boat cruise', 'Kashi Vishwanath Corridor', 'Sarnath Deer Park']
      },
      {
        city: 'Prayagraj (Allahabad)',
        state: 'Uttar Pradesh',
        days: 1,
        highlights: ['Triveni Sangam confluence of Ganga, Yamuna & Saraswati', 'Anand Bhavan historical residence']
      },
      {
        city: 'Rishikesh & Haridwar',
        state: 'Uttarakhand',
        days: 4,
        highlights: ['Har Ki Pauri Aarti in Haridwar', 'Himalayan yoga session in Tapovan', 'Parmarth Niketan', 'Beatles Ashram']
      }
    ]
  },
  {
    id: 'northeast-living-wonders',
    title: 'Northeast Living Wonders & Wildlife',
    subtitle: 'Guwahati • Shillong • Cherrapunji • Dawki • Kaziranga Rhino Safari',
    duration: '7 Days / 6 Nights',
    region: 'Northeast',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    idealFor: ['Eco-Travelers', 'Trekkers', 'Wildlife Aficionados'],
    bestMonths: 'November to April',
    estimatedCostInr: 34000,
    transportMode: 'Scenic Mountain Cabs & Brahmaputra Ferries',
    route: ['Guwahati', 'Umiam Lake', 'Shillong', 'Cherrapunji (Sohra)', 'Nongriat', 'Dawki Border River', 'Kaziranga National Park'],
    overview: 'Discover the lush, biodiverse realm of Northeast India. Trek to bio-engineered Living Root Bridges hand-guided across centuries, float on glass-like transparent river waters, and take dawn jeep safaris to spot the majestic endangered Great One-horned Rhinoceros.',
    stops: [
      {
        city: 'Shillong & Umiam',
        state: 'Meghalaya',
        days: 2,
        highlights: ['Umiam scenic pine reservoir', 'Don Bosco Indigenous Cultural Museum', 'Police Bazar Khasi food trail']
      },
      {
        city: 'Cherrapunji (Sohra) & Nongriat',
        state: 'Meghalaya',
        days: 2,
        highlights: ['Double Decker Living Root Bridge hike', 'Rainbow Falls turquoise natural pool', 'Nohkalikai Falls gorge']
      },
      {
        city: 'Kaziranga National Park',
        state: 'Assam',
        days: 2,
        highlights: ['Elephant & 4x4 Jeep Safari for One-Horned Rhinoceros', 'Wild water buffaloes & swamp deer', 'Assam tea garden visit']
      }
    ]
  }
];
