export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tag?: string; // e.g., 'Chef Choice', 'Best Seller', 'Spicy Flame'
  image?: string;
  vegetarian: boolean;
  spicyLevel: 0 | 1 | 2 | 3; // 0 = mild, 1 = medium, 2 = very, 3 = extreme himalayan spice
  ingredients?: string[];
  rating?: number;
}

export type MenuCategory = 
  | 'kothey' 
  | 'steam' 
  | 'fried' 
  | 'kurkure' 
  | 'spring-rolls' 
  | 'fries';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  verified: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type ActivePage = 'home' | 'menu' | 'about' | 'contact';
