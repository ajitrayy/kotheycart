import { MenuItem, CategoryInfo, Review } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'kothey',
    name: 'Kothey Momos',
    description: 'Our signature pan-seared crescent shape. Crispy golden bottom, velvety soft steamed dome.',
    iconName: 'Flame'
  },
  {
    id: 'steam',
    name: 'Classic Steam',
    description: 'Juicy, healthy, and hand-pleated dumplings, cooked over timber-fueled steaming pots.',
    iconName: 'Sparkles'
  },
  {
    id: 'fried',
    name: 'Crispy Fried',
    description: 'Chef-pleated dumplings deep-fried to a textured mahogany finish, crunchy outside, rich and moist inside.',
    iconName: 'FlameKindling'
  },
  {
    id: 'kurkure',
    name: 'Kurkure Crunch',
    description: 'Double-dusted in our secret spiced cornflake coating for a dramatic, extreme crunchy crust.',
    iconName: 'Zap'
  },
  {
    id: 'spring-rolls',
    name: 'Spring Rolls',
    description: 'Paper-thin wheat skins rolled with savory Himalayan glass noodles and mountain vegetables.',
    iconName: 'Shuffle'
  },
  {
    id: 'fries',
    name: 'Mountain Fries',
    description: 'Thick hand-cut fries dressed in mountain spice rubs and rich charcoal-grilled dipping sauces.',
    iconName: 'Utensils'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // KOTHEY MOMOS
  {
    id: 'm1',
    name: 'Signature Veg Kothey',
    description: 'Crescent-shaped pastry stuffed with fine farm paneer, cabbage, ginger, and wild mountain herbs. Flat pan-seared to crispy perfection.',
    price: 180,
    category: 'kothey',
    tag: 'Best Seller',
    vegetarian: true,
    spicyLevel: 1,
    rating: 4.9,
    ingredients: ['Fresh Paneer', 'Himalayan Cabbage', 'Ginger Shoots', 'Local Herbs']
  },
  {
    id: 'm2',
    name: 'Juicy Chicken Kothey',
    description: 'Our most-demanded signature. Minced pasture-fed chicken blended with scallions and butter, slow pan-fried with a crisp-bottom lattice.',
    price: 210,
    category: 'kothey',
    tag: 'Most Loved',
    vegetarian: false,
    spicyLevel: 1,
    rating: 5.0,
    ingredients: ['Pasture Chicken', 'Scallions', 'Clarified Butter', 'Nepali Garam Masala']
  },
  {
    id: 'm3',
    name: 'Spiced Cheese & Spinach Kothey',
    description: 'Melted yak-style artisan cheese paired with shredded baby spinach, hints of nutmeg, cooked on cast iron skillet.',
    price: 220,
    category: 'kothey',
    vegetarian: true,
    spicyLevel: 0,
    rating: 4.8,
    ingredients: ['Artisan Cheese', 'Baby Spinach', 'Nutmeg Powder', 'Coriander Root']
  },

  // STEAM MOMOS
  {
    id: 'm4',
    name: 'Classic Mountain Veg Steam',
    description: 'Perfect round-pleat momos filled with garden greens, grated carrots, cottage cheese, served hot with toasted sesame tomato achar.',
    price: 150,
    category: 'steam',
    vegetarian: true,
    spicyLevel: 0,
    rating: 4.7,
    ingredients: ['Grated Paneer', 'Cabbage', 'Garden Carrots', 'Sesame Achar']
  },
  {
    id: 'm5',
    name: 'Everest Juicy Chicken Steam',
    description: 'Traditional round momos filled with slow-kneaded, masterly seasoned minced chicken. Broth exploder in every single bite.',
    price: 180,
    category: 'steam',
    tag: 'Traditional',
    vegetarian: false,
    spicyLevel: 1,
    rating: 4.9,
    ingredients: ['Juicy Minced Chicken', 'Himalayan Broth', 'Coriander Seeding', 'Momo Chutney']
  },

  // CRISPY FRIED MOMOS
  {
    id: 'm6',
    name: 'Crispy Deep-Fried Veg Momo',
    description: 'Fresh veg momos deep fried to a rich rust-gold crunch, brushed with mountain ghee, served with sweet chilli relish.',
    price: 170,
    category: 'fried',
    vegetarian: true,
    spicyLevel: 1,
    rating: 4.6,
    ingredients: ['Seasoned Veg Blend', 'Crispy Pastry Sheath', 'Mountain Ghee', 'Chilli Relish']
  },
  {
    id: 'm7',
    name: 'Golden Fried Spiced Chicken Momo',
    description: 'Crisp chicken momos deep fried, ensuring the shell is beautifully crunchy while the internal chicken filling stays tender.',
    price: 190,
    category: 'fried',
    vegetarian: false,
    spicyLevel: 2,
    rating: 4.8,
    ingredients: ['Pre-steamed Chicken Dumplings', 'Crisp Fry Glaze', 'Ginger-Garlic Paste']
  },

  // KURKURE MOMOS
  {
    id: 'm8',
    name: 'Kurkure Crunchy Veg Momo',
    description: 'Dipped in our special heritage red pepper batter, rolled in organic crunchy flakes, and crisp-fried. Intense modern textures.',
    price: 190,
    category: 'kurkure',
    tag: 'Extreme Crunch',
    vegetarian: true,
    spicyLevel: 2,
    rating: 4.8,
    ingredients: ['Veg Farce', 'Secret Batter Coating', 'Crispy Cornflake Shards']
  },
  {
    id: 'm9',
    name: 'Fiery Timur Kurkure Chicken',
    description: 'Crispy cornflake-crusted chicken momos dusted heavily with crushed Nepali Timur Sichuan peppercorns for a numbing, satisfying tingle.',
    price: 230,
    category: 'kurkure',
    tag: 'Spicy Hot',
    vegetarian: false,
    spicyLevel: 3,
    rating: 4.9,
    ingredients: ['Minced Chicken', 'Spiced Cornflake Batter', 'Timur Sichuan Peppercorns']
  },

  // SPRING ROLLS
  {
    id: 'm10',
    name: 'Himalayan Harvest Forest Roll',
    description: 'Wheat shells rolled with wild bamboo shoots, glass noodles, wood-ear forest mushrooms, and mountain wild greens.',
    price: 160,
    category: 'spring-rolls',
    vegetarian: true,
    spicyLevel: 1,
    rating: 4.7,
    ingredients: ['Bamboo Shoots', 'Glass Noodles', 'Wood-ear Mushrooms', 'Spring Herbs']
  },
  {
    id: 'm11',
    name: 'Golden Claypot Smoked Chicken Roll',
    description: 'Smoked pulled chicken tossed in dark soy sauce and green wild onions, wrapped and deep-fried until crystal flaky.',
    price: 190,
    category: 'spring-rolls',
    tag: 'Chef Choice',
    vegetarian: false,
    spicyLevel: 1,
    rating: 4.8,
    ingredients: ['Smoked Pulled Chicken', 'Sweet Soy', 'Flaky Wheat Pastry', 'Spring Onions']
  },

  // FRIES
  {
    id: 'm12',
    name: 'Lhasa Timur Masala Fries',
    description: 'Double-fried thick potato wedges dry tossed in Himalayan pink salt and freshly crushed numbing Timur peppercorn dusting.',
    price: 140,
    category: 'fries',
    vegetarian: true,
    spicyLevel: 2,
    rating: 4.8,
    ingredients: ['Idaho Potatoes', 'Himalayan Pink Salt', 'Timur Chili Dusting']
  },
  {
    id: 'm13',
    name: 'Loaded Achar Cheese Fries',
    description: 'Golden skin-on french fries blanketed in cheese sauce and swirled with our hot fermented momo red-tomato dip.',
    price: 180,
    category: 'fries',
    tag: 'Delectably Wild',
    vegetarian: true,
    spicyLevel: 2,
    rating: 4.9,
    ingredients: ['Skin-on Potatoes', 'Cheddar Dusting', 'Achar Tomato Coulis', 'Chopped Herbs']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anjali Shrestha',
    rating: 5,
    comment: 'The pan-seared Veg Kothey took me straight back to the streets of Kathmandu! That crispy lattice bottom is proof of true hand-craftsmanship. Absolute masterpiece.',
    date: '3 days ago',
    location: 'Kathmandu Valley Diner',
    verified: true
  },
  {
    id: 'r2',
    name: 'Vikram Sengupta',
    rating: 5,
    comment: 'I am extremely picky about momos. Most places use store-bought thick wraps. Kothey Cart makes paper-thin wrappers with unbelievably juicy fillings. The Timur Kurkure Momo is a spicy, numbing wonder!',
    date: '1 week ago',
    location: 'Food Critic',
    verified: true
  },
  {
    id: 'r3',
    name: 'Pema Lhaze',
    rating: 5,
    comment: 'Reminds me of my grandmothers kitchen in Dharamshala. Authentic, warm spices, cooked with respect. Not a generic fast-food clone. The antique branding and storytelling are beautifully matched here.',
    date: '2 weeks ago',
    location: 'Himalayan Culture Enthusiast',
    verified: true
  }
];

export const BRAND_STORY = {
  quote: "Every fold we pinch holds a century of mountain fire, fresh glacier herbs, and culinary devotion.",
  journey: "Born at the high crossroads of commercial handcarts and deep family kitchens, Kothey Cart is an homage to the sacred craft of Himalayan dumpling making. Our recipe traces back to ancient Nepalese and Tibetan trading paths, where traditional 'kothey' momos—partially steamed and partially pan-fried on thick cast-iron tawas—were prepared to comfort weary mountain merchants.",
  secret: "Every single momo at Kothey Cart is hand-pleated daily by generational cooks who understand that the thickness of the pastry wall must precisely balance the moisture content of the hand-chopped spiced fillings. No industrial presses. No frozen supply lines. Just pure flour, glacier water, hand-ground Timur peppercorns, and honest passion. We present street food at its absolute pinnacle, framed by rich storytelling and warm mountain hospitality."
};
