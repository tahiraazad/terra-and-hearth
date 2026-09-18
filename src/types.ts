export type PageId = 'home' | 'menu' | 'about' | 'reservations' | 'events' | 'gallery' | 'contact';

export type MenuCategory = 'all' | 'starters' | 'mains' | 'pastas' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  category: 'starters' | 'mains' | 'pastas' | 'desserts' | 'drinks';
  description: string;
  price: number;
  dietary: ('GF' | 'Vegan' | 'Vegetarian' | 'Hearth' | 'Farm-Direct')[];
  farmSource?: string;
  winePairing?: string;
  image: string;
  isSeasonalSpecial?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  price: string;
  spotsLeft: number;
  description: string;
  included: string[];
  image: string;
  category: 'special_dinner' | 'workshop' | 'weekly';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'dishes' | 'drinks' | 'interior' | 'farm';
  image: string;
  caption: string;
}

export interface FarmPartner {
  name: string;
  location: string;
  distance: string;
  products: string;
  description: string;
  image: string;
}

export interface ReservationBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'dining_room' | 'chefs_counter' | 'garden_terrace' | 'wine_nook';
  specialOccasion?: string;
  dietaryNotes?: string;
  createdAt: string;
}
