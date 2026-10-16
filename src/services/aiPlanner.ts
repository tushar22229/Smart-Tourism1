import { GoogleGenAI } from '@google/genai';
import { GeneratedItinerary, TripPlannerFormState, ItineraryDay } from '../types';

// Deterministic generator with bespoke itineraries based on chosen destination and style
export function generateCuratedItinerary(form: TripPlannerFormState): GeneratedItinerary {
  const days: ItineraryDay[] = [];
  const duration = Math.min(Math.max(form.durationDays, 2), 14);

  // Daily budget calculation based on budget tier
  const tierCostMap = {
    'Economy Backpacker': 1800,
    'Comfort Explorer': 4200,
    'Royal Luxury': 14000
  };
  const dailyCost = tierCostMap[form.budgetTier] || 4000;

  // Custom activity database by theme
  const destinationLower = form.destination.toLowerCase();
  
  for (let i = 1; i <= duration; i++) {
    let dayTitle = `Day ${i}: Exploring ${form.destination}`;
    let morning = '';
    let afternoon = '';
    let evening = '';
    let meals: string[] = [];
    let transport = 'Pre-paid auto rickshaw or app cab (Uber/Ola)';

    if (destinationLower.includes('jaipur') || destinationLower.includes('rajasthan')) {
      if (i === 1) {
        dayTitle = 'Day 1: Arrival & The Pink City Citadel';
        morning = 'Arrive and check in. Head early to Hawa Mahal (Palace of Winds) to photograph the 953 honeycombed jharokhas before street traffic builds.';
        afternoon = 'Explore the sprawling City Palace complex, Pritam Niwas Chowk peacock gate, and the UNESCO astronomical instruments at Jantar Mantar.';
        evening = 'Stroll through Johari and Bapu Bazaars for lac bangles and block-printed linens. Enjoy sunset tea at Tattoo Cafe overlooking Hawa Mahal.';
        meals = ['Breakfast: Pyaaz kachori with sweet tamarind chutney at Rawat Mishtan Bhandar', 'Lunch: Traditional Thali at LMB (Laxmi Mishtan Bhandar)', 'Dinner: Rooftop royal dining with Laal Maas or Ker Sangri at Handi'];
        transport = 'E-rickshaw or walking inside the Old Walled City gates';
      } else if (i === 2) {
        dayTitle = 'Day 2: Mighty Fortresses & Sunset Vistas';
        morning = 'Early excursion to Amber Fort. Ascend the cobbled ramparts, marvel at the mirrored glass mosaics of Sheesh Mahal, and gaze down at Maota Lake.';
        afternoon = 'Visit the nearby stepwell Panna Meena Ka Kund with symmetrical stair geometries, followed by the Jaigarh Fort housing the massive Jaivana cannon.';
        evening = 'Drive up to Nahargarh Fort ramparts for a 360-degree twilight view as millions of golden city lights illuminate Jaipur valley.';
        meals = ['Breakfast: Masala omelette/poha and kulhad chai near Amer', 'Lunch: 1135 AD inside Amber Fort for regal Rajput recipes', 'Dinner: Outdoor bonfire dining at Chokhi Dhani ethnic village resort'];
        transport = 'Full-day private AC cab or tourist taxi';
      } else if (i === 3) {
        dayTitle = 'Day 3: Art, Pottery & Hidden Gems';
        morning = 'Visit Albert Hall Museum in Ram Niwas Garden. Admire Indo-Saracenic arches, Egyptian mummy, and miniature paintings.';
        afternoon = 'Hands-on Blue Pottery workshop in Sanganer or traditional wooden block-carving studio in Bagru village.';
        evening = 'Peaceful sunset walk around Jal Mahal (Water Palace) promenade. Farewell celebratory dessert of warm Ghewar at LMB.';
        meals = ['Breakfast: Samosa and fresh sugarcane juice', 'Lunch: Anokhi Cafe for organic farm salads and artisanal sourdough', 'Dinner: Baradari inside City Palace courtyard'];
        transport = 'App-cab (Uber/Ola)';
      } else {
        dayTitle = `Day ${i}: Heritage Excursion to Pushkar & Ajmer`;
        morning = 'Morning scenic drive to the sacred desert town of Pushkar surrounding the holy 52-ghat lake.';
        afternoon = 'Visit the rare 14th-century Lord Brahma Temple and wander the vibrant rose water & boho flea markets.';
        evening = 'Sunset camel safari over the soft Thar desert dunes with Rajasthani Kalbelia folk dancers under the star-lit sky.';
        meals = ['Breakfast: Malpua pancake with sweet rabri at Halwai Gali', 'Lunch: Falafel roll at Shiva Cafe Pushkar', 'Dinner: Desert tent dining with Dal Baati Churma'];
        transport = 'Intercity chauffeur taxi or Vande Bharat to Ajmer';
      }
    } else if (destinationLower.includes('varanasi') || destinationLower.includes('kashi')) {
      if (i === 1) {
        dayTitle = 'Day 1: The Timeless River & Evening Aarti';
        morning = 'Arrive in Varanasi. Settle in your heritage riverside Haveli. Visit the ancient Kashi Vishwanath corridor dedicated to Lord Shiva.';
        afternoon = 'Wander the narrow labyrinthine alleys (galis) of Thatheri Bazar, discovering silk weavers crafting world-famous Banarasi silk sarees.';
        evening = 'Take an evening wooden boat to Dashashwamedh Ghat to witness the mesmerizing Grand Ganga Aarti with multi-tiered brass oil lamps and Vedic chants.';
        meals = ['Breakfast: Bedmi Poori and Jalebi at Ram Bhandar', 'Lunch: Sattvic lunch at Keshari Restaurant near Godowlia', 'Dinner: Baati Chokha restaurant with smoked eggplant mash'];
        transport = 'Walking and cycle rickshaws in the old ghat zone';
      } else if (i === 2) {
        dayTitle = 'Day 2: Sunrise Rowboat & Buddhist Sarnath';
        morning = '5:30 AM sunrise rowing boat ride along the 84 ghats from Assi Ghat to Manikarnika Ghat as pilgrims perform morning Surya Namaskar.';
        afternoon = 'Short 10km excursion to Sarnath, where Lord Buddha gave his first sermon. Inspect the Dhamek Stupa and Ashoka Lion Capital museum.';
        evening = 'Subah-e-Banaras cultural music recital or serene meditation at Assi Ghat. Try the iconic Banarasi Paan and cooling saffron lassi.';
        meals = ['Breakfast: Apple pie or pancake at Open Hand Cafe Assi Ghat', 'Lunch: Organic vegetarian cafe in Sarnath', 'Dinner: Pizzeria Vaatika Cafe right on Assi Ghat overlooking the river'];
        transport = 'Morning hand-rowed boat followed by auto-rickshaw to Sarnath';
      } else {
        dayTitle = `Day ${i}: Hidden Ghats, Akharas & Chunar Fort`;
        morning = 'Visit a traditional mud wrestling Akhara at sunrise to watch traditional wrestlers practice ancient Indian Kushti.';
        afternoon = 'Explore Ramnagar Fort across the river and its eccentric vintage car and palanquin museum.';
        evening = 'Quiet sunset river cruise to Raj Ghat and evening classical sitar / flute performance at an ashram.';
        meals = ['Breakfast: Famous Malaiyo (winter milk cloud froth) in Chowk', 'Lunch: Blue Lassi Shop curd specials', 'Dinner: Cantonment garden bistro'];
        transport = 'Heritage boat and tuk-tuk';
      }
    } else if (destinationLower.includes('kerala') || destinationLower.includes('alleppey') || destinationLower.includes('kochi')) {
      if (i === 1) {
        dayTitle = 'Day 1: Fort Kochi Spice Trails & Colonial Charms';
        morning = 'Arrive in Fort Kochi. Walk past the 14th-century Chinese Fishing Nets (Cheena Vala) along the Vasco da Gama Square.';
        afternoon = 'Visit St. Francis Church (oldest European church in India), Santa Cruz Basilica, and the Paradesi Synagogue in Jew Town.';
        evening = 'Attend an expressive evening Kathakali classical dance and Kalaripayattu martial arts performance at the Kerala Kathakali Centre.';
        meals = ['Breakfast: Appam with fragrant vegetable stew and roasted coconut', 'Lunch: Fresh grilled seer fish at oceanfront Seagull restaurant', 'Dinner: Fusion Malabar curries at Kashi Art Cafe'];
        transport = 'Walking and Kochi Water Metro ferry';
      } else if (i === 2) {
        dayTitle = 'Day 2: The Serene Backwaters of Alleppey';
        morning = 'Scenic drive through emerald rubber and coconut groves to Alleppey jetty. Board your private thatched Kettuvallam houseboat.';
        afternoon = 'Glide gently along Vembanad Lake, passing traditional village duck farms, churches, and green paddy fields below sea level.';
        evening = 'Anchor in a quiet lagoon as the captain and private chef prepare freshly caught Karimeen fish and tapioca. Golden sunset reflections.';
        meals = ['Breakfast: Puttu with spiced black chickpea kadala curry', 'Lunch: Houseboat Sadya feast served on fresh banana leaf', 'Dinner: Candlelit dinner on the open deck under tropical stars'];
        transport = 'Private luxury eco-friendly houseboat cruise';
      } else if (i === 3) {
        dayTitle = 'Day 3: Village Canals, Canoeing & Marari Beach';
        morning = 'Sunrise village canoe ride into narrow canals where large houseboats cannot enter. Watch toddy tapping from palm trees.';
        afternoon = 'Disembark and transfer to the powdery white sands of Marari Beach. Enjoy an authentic Ayurvedic herbal massage.';
        evening = 'Sunset barefoot stroll along Marari shoreline watching local fishermen haul in evening coir fishing nets.';
        meals = ['Breakfast: Fresh tropical mango, papaya and Kerala egg roast', 'Lunch: Crab roast and Malabar parotta', 'Dinner: Beachfront coconut-curry dining'];
        transport = 'Shikara canoe and private resort transfer';
      } else {
        dayTitle = `Day ${i}: High Altitude Tea Gardens of Munnar`;
        morning = 'Drive into the misty Western Ghats past cascading Cheeyappara and Valara waterfalls to the rolling tea highlands of Munnar.';
        afternoon = 'Visit the Tea Museum and take a guided sensory walk through Kolukkumalai estate learning tea plucking and orthodox processing.';
        evening = 'Spot the endangered Nilgiri Tahr mountain goat at Eravikulam National Park against the backdrop of Anamudi peak.';
        meals = ['Breakfast: Kerala Idiyappam (string hoppers) with coconut milk', 'Lunch: Hilltop plantation lunch', 'Dinner: Cardamom-infused stew and Kerala rice'];
        transport = 'Hill highway cab';
      }
    } else {
      // General India Destination fallback
      dayTitle = `Day ${i}: Discovering Highlights & Culture of ${form.destination}`;
      morning = `Start the morning early at the most renowned landmark of ${form.destination} to beat peak mid-day lines and capture the best natural light.`;
      afternoon = `Immerse in the local historic quarter and vibrant artisan markets. Sample authentic delicacies and shop for regional textiles.`;
      evening = `Relax with a sunset viewpoint or cultural folk performance, followed by dinner showcasing authentic regional flavors.`;
      meals = [
        `Breakfast: Local specialty breakfast with piping hot spiced tea or filter coffee`,
        `Lunch: Traditional regional thali adhering to ${form.dietPreference} preferences`,
        `Dinner: Recommended local culinary institution with ambient evening setting`
      ];
      transport = 'Dedicated pre-paid AC cab or local auto-rickshaw';
    }

    days.push({
      dayNumber: i,
      title: dayTitle,
      morning,
      afternoon,
      evening,
      recommendedMeals: meals,
      transportAdvice: transport,
      budgetEstimateInr: dailyCost
    });
  }

  // Dietary modifications if needed
  if (form.dietPreference.includes('Jain')) {
    days.forEach(d => {
      d.recommendedMeals = d.recommendedMeals.map(m => `${m} [Customized: Pure Jain / No onion, garlic, or root vegetables]`);
    });
  } else if (form.dietPreference.includes('Vegetarian')) {
    days.forEach(d => {
      d.recommendedMeals = d.recommendedMeals.map(m => `${m} [100% Shuddh Shakahari Vegetarian]`);
    });
  }

  return {
    id: `itinerary-${Date.now()}`,
    title: `${form.durationDays}-Day ${form.vibe} Journey in ${form.destination}`,
    destination: form.destination,
    durationDays: duration,
    vibe: form.vibe,
    budgetTier: form.budgetTier,
    totalEstimatedInr: dailyCost * duration,
    summary: `Tailored for a ${form.travelerType.toLowerCase()} adventure in ${form.destination} with a focus on ${form.vibe.toLowerCase()}. Perfectly calibrated for ${form.monthOfTravel} travel conditions and ${form.dietPreference} cuisine.`,
    packingSuggestions: [
      'Cotton breathable layers & comfortable walking shoes',
      'Shawl / scarf for religious sanctums & temples',
      'Sealed water bottle & oral rehydration electrolytes',
      'Power bank & universal plug adapter (Type D/C)',
      'UPI One World app on smartphone for cashless scan & pay'
    ],
    days,
    createdAt: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
  };
}

// Live AI Generation using @google/genai with fallback
export async function generateSmartItineraryWithAI(form: TripPlannerFormState): Promise<GeneratedItinerary> {
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
                 (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ||
                 '';

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    // Generate intelligent instant curated itinerary
    // Small realistic delay for UI animation feel
    await new Promise(resolve => setTimeout(resolve, 800));
    return generateCuratedItinerary(form);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are the lead travel architect for "Smart Tourism", an elite tourism companion for Incredible India.
Generate a comprehensive, hyper-authentic, day-by-day travel itinerary in JSON format for the following trip request:
- Destination/Circuit: ${form.destination}
- Duration: ${form.durationDays} Days
- Traveler Type: ${form.travelerType}
- Vibe/Theme: ${form.vibe}
- Budget Level: ${form.budgetTier}
- Dietary Restrictions: ${form.dietPreference}
- Travel Month: ${form.monthOfTravel}
- Special Notes: ${form.customNotes || 'None'}

Return ONLY a valid JSON object matching this TypeScript interface without any markdown backticks or commentary:
{
  "title": string,
  "summary": string,
  "totalEstimatedInr": number,
  "packingSuggestions": string[],
  "days": [
    {
      "dayNumber": number,
      "title": string,
      "morning": string,
      "afternoon": string,
      "evening": string,
      "recommendedMeals": string[],
      "transportAdvice": string,
      "budgetEstimateInr": number
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text?.trim() || '';
    if (text) {
      const parsed = JSON.parse(text);
      return {
        id: `itinerary-${Date.now()}`,
        title: parsed.title || `${form.durationDays}-Day Tour of ${form.destination}`,
        destination: form.destination,
        durationDays: form.durationDays,
        vibe: form.vibe,
        budgetTier: form.budgetTier,
        totalEstimatedInr: parsed.totalEstimatedInr || (form.budgetTier === 'Royal Luxury' ? 14000 : 4200) * form.durationDays,
        summary: parsed.summary || `A bespoke ${form.durationDays}-day experience in ${form.destination}.`,
        packingSuggestions: parsed.packingSuggestions || [
          'Lightweight cotton apparel',
          'Temple modest scarf',
          'Universal power adapter',
          'UPI payment app',
          'Electral rehydration salts'
        ],
        days: parsed.days || [],
        createdAt: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
      };
    }
  } catch (err) {
    console.warn('Gemini API call failed or timed out, using curated smart generator:', err);
  }

  // Fallback to our curated generator
  return generateCuratedItinerary(form);
}
