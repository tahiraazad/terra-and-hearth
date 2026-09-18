import React, { useState } from 'react';
import { PageId } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Share2, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservationModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
    }
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'events', label: 'Events & Specials' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  return (
    <footer className="bg-[#2A2521] text-[#FAF7F2] border-t border-[#3D3631]">
      {/* Top Banner with Newsletter */}
      <div className="border-b border-[#3D3631] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-script text-[#E2B39C] text-2xl tracking-wide block">
              The Hearth Chronicle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF7F2]">
              Follow the harvest as the seasons change.
            </h3>
            <p className="text-sm text-[#D3C0A6] max-w-lg leading-relaxed">
              Receive our weekly foraged specials, early alerts when new tasting reservations open, and seasonal hearth recipes from Chef Elena.
            </p>
          </div>

          <div className="lg:col-span-6">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-3 bg-[#384434] border border-[#556B4E] p-4 rounded-xl text-[#FAF7F2]">
                <CheckCircle2 className="w-5 h-5 text-[#8FA587] shrink-0" />
                <div>
                  <p className="font-medium text-sm">Welcome to our table.</p>
                  <p className="text-xs text-[#D3DCCF]">You'll receive the next harvest journal before reservations open to the public.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 bg-[#1C1917] border border-[#443C36] rounded-xl text-sm text-[#FAF7F2] placeholder-[#8A8179] focus:outline-hidden focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] transition-colors"
                />
                <button
                  type="submit"
                  id="newsletter-subscribe-btn"
                  className="bg-[#B85433] hover:bg-[#994127] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-xs shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Sparkles className="w-4 h-4 text-[#E2B39C]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Restaurant Story & Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <h2 className="font-serif text-3xl tracking-tight text-[#FAF7F2] font-semibold">
                Terra & Hearth
              </h2>
              <p className="font-script text-lg text-[#E2B39C]">
                Seasonal Kitchen & Hearth Bar
              </p>
            </div>
            <p className="text-sm text-[#D3C0A6] leading-relaxed">
              Rooted in the organic farms and coastal forests of Northern California. Cooking with live orchard embers, whole animals, stone-milled grains, and natural wines since 2018.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenReservationModal}
                className="inline-flex items-center gap-2 bg-[#B85433] hover:bg-[#994127] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-xs"
              >
                <span>Book a Table Online</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3">
              <p className="text-xs uppercase tracking-wider text-[#8A8179] mb-2 font-medium">Follow Our Journey</p>
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#3D3631] hover:bg-[#B85433] flex items-center justify-center text-[#FAF7F2] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#3D3631] hover:bg-[#B85433] flex items-center justify-center text-[#FAF7F2] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok / Social"
                  className="w-9 h-9 rounded-full bg-[#3D3631] hover:bg-[#B85433] flex items-center justify-center text-[#FAF7F2] transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Hours & Dining Schedule */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xl font-semibold text-[#FAF7F2] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C85A32]" />
              <span>Opening Hours</span>
            </h4>

            <div className="space-y-3 text-sm">
              {RESTAURANT_INFO.hours.map((h, index) => (
                <div key={index} className="border-b border-[#3D3631] pb-2.5 last:border-0">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-[#FAF7F2]">{h.days}</span>
                    <span className="text-[#E2B39C] font-semibold">{h.dinner}</span>
                  </div>
                  <p className="text-xs text-[#A89E94] mt-0.5">{h.notes}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8FA587] font-sans pt-1">
              * Kitchen last seating 45 mins prior to closing.
            </p>
          </div>

          {/* Column 3: Address, Phone & Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xl font-semibold text-[#FAF7F2]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#D3C0A6] hover:text-[#B85433] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2 space-y-2 text-xs text-[#A89E94]">
              <p>Valet Parking Available</p>
              <p>Corkage: $35 / 750ml</p>
              <p>Wheelchair Accessible</p>
            </div>
          </div>

          {/* Column 4: Address, Contact & Small Embedded Map */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xl font-semibold text-[#FAF7F2] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C85A32]" />
              <span>Location & Map</span>
            </h4>

            <div className="space-y-2 text-sm text-[#D3C0A6]">
              <p className="font-medium text-[#FAF7F2]">{RESTAURANT_INFO.address.street}</p>
              <p>{RESTAURANT_INFO.address.district}</p>
              <p>{RESTAURANT_INFO.address.city}</p>
              
              <div className="pt-1 flex flex-col gap-1.5 text-xs">
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 text-[#E2B39C] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="flex items-center gap-2 text-[#D3C0A6] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{RESTAURANT_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Small Embedded Map Card */}
            <div className="rounded-xl overflow-hidden border border-[#443C36] bg-[#1C1917] relative group">
              <div className="h-32 w-full relative">
                {/* Embed Map iframe */}
                <iframe
                  title="Terra & Hearth Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50364.55160074218!2d-122.5654924!3d37.9060371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a850117ec83%3A0x6b6cfa4db90ad9d4!2sMill%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) opacity(0.85)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Map Overlay Badge */}
                <div className="absolute top-2 left-2 bg-[#2A2521]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-[#FAF7F2] border border-[#443C36] flex items-center gap-1.5 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
                  <span>Terra & Hearth</span>
                </div>
              </div>

              {/* Map Footer Link */}
              <div className="p-2.5 bg-[#1C1917] flex items-center justify-between text-xs">
                <span className="text-[#8A8179]">418 Hearthstone Way</span>
                <a
                  href={RESTAURANT_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E2B39C] hover:text-[#FAF7F2] inline-flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Dietary & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#3D3631] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8179]">
          <p>
            &copy; {new Date().getFullYear()} Terra & Hearth LLC. All rights reserved. Locally foraged & wood-fired.
          </p>
          <div className="flex items-center gap-6">
            <span>GF & Vegan options clearly designated</span>
            <span>Zero-waste compost kitchen</span>
            <span>Organic & Biodynamic cellar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
