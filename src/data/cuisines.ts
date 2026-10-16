import { RegionalCuisine } from '../types';

export const REGIONAL_CUISINES: RegionalCuisine[] = [
  {
    id: 'rajasthan',
    regionName: 'Royal Marwari & Rajputana',
    state: 'Rajasthan',
    specialityNotes: 'Formed by arid desert conditions where water and fresh greens were scarce. Rich in pure desi ghee, gram flour (besan), buttermilk, dried beans (ker sangri), and fragrant warming spices.',
    beverage: 'Kesar Chai & Masala Chhach (Spiced buttermilk with roasted cumin)',
    sweetTreat: 'Ghewar (disc honeycomb pastry soaked in saffron syrup)',
    iconicDishes: [
      {
        name: 'Dal Baati Churma',
        description: 'Hard wheat flour dough balls baked over coal embers, dipped in hot ghee, served with spicy mixed lentil stew and sweet crushed wheat churma.',
        diet: 'Vegetarian',
        spiceLevel: 3
      },
      {
        name: 'Laal Maas',
        description: 'Fiery royal mutton curry braised with aromatic whole spices, yogurt, and authentic vibrant Mathania red chilies.',
        diet: 'Non-Veg',
        spiceLevel: 5
      },
      {
        name: 'Ker Sangri',
        description: 'Unique desert berry and wild bean stir-fry tempered with dry mango powder (amchur), fenugreek, and mustard oil.',
        diet: 'Jain-Friendly',
        spiceLevel: 2
      },
      {
        name: 'Pyaaz Kachori',
        description: 'Crisp golden flaky pastry spheres stuffed with a spicy onion, fennel, and coriander filling served with sweet tamarind chutney.',
        diet: 'Vegetarian',
        spiceLevel: 3
      }
    ]
  },
  {
    id: 'kerala',
    regionName: 'Malabar & Travancore Coastal',
    state: 'Kerala',
    specialityNotes: 'Influenced by centuries of spice maritime trade (Arab, Portuguese, Dutch, Jewish). Features freshly grated coconut, cold-pressed coconut oil, fresh curry leaves, mustard seeds, and black Tellicherry peppercorns.',
    beverage: 'Fresh Tender Coconut Water & Cardamom Spiced Sulaimani Black Tea',
    sweetTreat: 'Ada Pradhaman (steamed rice flakes in jaggery and coconut milk)',
    iconicDishes: [
      {
        name: 'Kerala Sadya Feast',
        description: 'Traditional vegetarian banquet of 24+ dishes served on a fresh green plantain leaf, including Sambar, Avial, Thoran, Olan, and Payasam.',
        diet: 'Vegetarian',
        spiceLevel: 2
      },
      {
        name: 'Karimeen Pollichathu',
        description: 'Pearl spot fish marinated in shallots, ginger, garlic, and freshly ground spices, wrapped in tender banana leaves and slow-pan roasted.',
        diet: 'Non-Veg',
        spiceLevel: 4
      },
      {
        name: 'Appam with Vegetable Stew',
        description: 'Bowl-shaped crispy-edged fermented rice batter hoppers with a fluffy center, dipped in fragrant coconut milk and vegetable stew.',
        diet: 'Vegan',
        spiceLevel: 1
      },
      {
        name: 'Malabar Chicken Biryani',
        description: 'Made with fragrant small-grain Khaima rice, tender chicken, caramelized fried onions (bista), cashews, and mild whole spices.',
        diet: 'Non-Veg',
        spiceLevel: 3
      }
    ]
  },
  {
    id: 'punjab-delhi',
    regionName: 'Punjabi & Mughal Tandoori',
    state: 'Delhi & Punjab',
    specialityNotes: 'Robust, comforting, and celebrated worldwide. Clay tandoor oven baking, slow-simmered rich tomato gravies, homemade white butter (makhan), and whole wheat breads.',
    beverage: 'Tall Kulhad Sweet Lassi with thick clotted cream top',
    sweetTreat: 'Hot Gulab Jamun & Jalebi with Rabri',
    iconicDishes: [
      {
        name: 'Butter Chicken (Murgh Makhani)',
        description: 'Charcoal-grilled tandoori chicken simmered in a silky, buttery tomato sauce infused with fenugreek leaves (kasoori methi).',
        diet: 'Non-Veg',
        spiceLevel: 2
      },
      {
        name: 'Dal Makhani',
        description: 'Whole black urad lentils and kidney beans slow-simmered overnight for 12 hours with butter, fresh ginger, and cream.',
        diet: 'Vegetarian',
        spiceLevel: 2
      },
      {
        name: 'Chole Bhature',
        description: 'Puffed deep-fried leavened bread served with tangy, dark, tea-infused spicy chickpea masala, pickled carrots, and green chili.',
        diet: 'Vegan',
        spiceLevel: 4
      },
      {
        name: 'Amritsari Kulcha',
        description: 'Crispy layered flatbread stuffed with spiced potatoes and paneer, baked in a clay tandoor and brushed generously with desi ghee.',
        diet: 'Vegetarian',
        spiceLevel: 3
      }
    ]
  },
  {
    id: 'tamil-nadu',
    regionName: 'Chettinad & Tamil Sangam',
    state: 'Tamil Nadu',
    specialityNotes: 'Characterized by the culinary brilliance of the Nattukottai Chettiars with sun-dried meats, star anise, kalpasi (black stone flower), marathi moggu, and complex rice batter delicacies.',
    beverage: 'South Indian Filter Coffee brewed in traditional brass dabarah',
    sweetTreat: 'Mysore Pak & Tirunelveli Halwa',
    iconicDishes: [
      {
        name: 'Crispy Masala Dosa',
        description: 'Golden fermented rice and lentil crepe stuffed with aromatic spiced potato mash, served with fresh coconut chutney and piping hot sambar.',
        diet: 'Vegan',
        spiceLevel: 2
      },
      {
        name: 'Chettinad Pepper Chicken',
        description: 'Bold, dark, fiery curry flavored with fresh ground Tellicherry black peppercorns, fennel seeds, and kalpasi stone flower.',
        diet: 'Non-Veg',
        spiceLevel: 5
      },
      {
        name: 'Idli Sambar & Medu Vada',
        description: 'Feather-light steamed rice cakes and crispy savory lentil donuts served with gun powder (podi) and hot clarified butter.',
        diet: 'Jain-Friendly',
        spiceLevel: 1
      },
      {
        name: 'Lemon Rice & Curd Rice',
        description: 'Soothing cooling rice tempered with mustard seeds, curry leaves, ginger, green chilies, and crunchy roasted split chickpeas.',
        diet: 'Vegetarian',
        spiceLevel: 1
      }
    ]
  },
  {
    id: 'bengal',
    regionName: 'Kolkata & Bengali Panch Phoron',
    state: 'West Bengal',
    specialityNotes: 'A subtle harmony of sweet and fiery flavors. Renowned for freshwater river fish, mustard oil pungency, poppy seed paste (posto), and the sacred five-spice blend (Panch Phoron).',
    beverage: 'Chaat Masala Lemon Cha in clay Bhar cups & Gondhoraj Ghol',
    sweetTreat: 'Spongy Rosogolla, Mishti Doi & Sandesh',
    iconicDishes: [
      {
        name: 'Shorshe Ilish (Hilsa in Mustard Gravy)',
        description: 'Delicate river hilsa fish slow-steamed in stone-ground yellow and black mustard paste with green slit chilies and pungent mustard oil.',
        diet: 'Non-Veg',
        spiceLevel: 4
      },
      {
        name: 'Kolkata Kathi Roll',
        description: 'Paratha layered with whipped egg, wrapped around spiced skewered meat or paneer, sliced red onions, and lime juice.',
        diet: 'Non-Veg',
        spiceLevel: 3
      },
      {
        name: 'Aloo Posto with Luchi',
        description: 'Diced potatoes cooked in a velvety, nutty white poppy seed paste with green chilies, accompanied by puffed deep-fried maida flatbreads.',
        diet: 'Jain-Friendly',
        spiceLevel: 2
      },
      {
        name: 'Kosha Mangsho',
        description: 'Rich, dark, slow-roasted mutton curry cooked until the velvety spices cling tightly to each tender morsel.',
        diet: 'Non-Veg',
        spiceLevel: 4
      }
    ]
  }
];
