import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Menu as MenuIcon, X, Calendar, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenReservationModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-announcement banner */}
      <div className="bg-[#44543F] text-[#FAF7F2] text-xs py-1.5 px-4 text-center tracking-wide font-sans flex items-center justify-center gap-2">
        <span className="font-script text-base text-[#E2B39C] inline-block -mt-0.5">Now Serving</span>
        <span>{RESTAURANT_INFO.currentSeason.name} — Fresh Morel, White Truffle Butter & Ember Roast</span>
        <button
          onClick={() => handleNavClick('reservations')}
          className="underline decoration-[#E2B39C] hover:text-[#E2B39C] ml-2 font-medium transition-colors"
        >
          Reserve Table &rarr;
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E7DDCF]'
            : 'bg-[#FAF7F2] border-b border-[#E7DDCF]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group focus:outline-hidden"
              id="nav-brand-logo"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#2A2521] font-semibold group-hover:text-[#B85433] transition-colors">
                  Terra & Hearth
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B85433]"></span>
              </div>
              <p className="font-script text-sm sm:text-base text-[#556B4E] -mt-1 tracking-wide">
                Seasonal Kitchen & Hearth Bar
              </p>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg ${
                      isActive
                        ? 'text-[#B85433] font-semibold bg-[#F4EFE6]'
                        : 'text-[#4A433E] hover:text-[#B85433] hover:bg-[#F4EFE6]/60'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#B85433] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Actions (Call & Reserve) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-xs text-[#5C554F] hover:text-[#2A2521] flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:bg-[#F4EFE6] transition-colors"
                title="Call for table questions"
              >
                <Phone className="w-3.5 h-3.5 text-[#556B4E]" />
                <span className="font-medium">{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenReservationModal}
                id="header-reserve-btn"
                className="inline-flex items-center gap-2 bg-[#B85433] hover:bg-[#994127] text-white px-4 py-2 rounded-full text-sm font-medium shadow-xs transition-all hover:shadow-md active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Find a Table</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenReservationModal}
                className="sm:hidden bg-[#B85433] text-white px-3 py-1.5 rounded-full text-xs font-medium"
              >
                Reserve
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#2A2521] hover:bg-[#F4EFE6] focus:outline-hidden transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E7DDCF] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-left transition-colors ${
                      isActive
                        ? 'bg-[#B85433] text-white font-semibold'
                        : 'text-[#2A2521] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="font-script text-sm opacity-80">viewing</span>}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E7DDCF] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservationModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#B85433] text-white py-3 rounded-xl font-medium shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table Online</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 border border-[#D3C0A6] text-[#2A2521] py-2.5 rounded-xl text-sm font-medium hover:bg-[#F4EFE6]"
              >
                <Phone className="w-4 h-4 text-[#556B4E]" />
                <span>Call Restaurant: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
