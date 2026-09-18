import React, { useState } from 'react';
import { PageId, MenuCategory, MenuItem } from '../../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../../data/restaurantData';
import { 
  Sparkles, 
  Flame, 
  Leaf, 
  Printer, 
  Calendar, 
  Info, 
  Wine, 
  Check, 
  X,
  FileText
} from 'lucide-react';

interface MenuPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate, onOpenReservationModal }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'starters', label: 'Starters & Crudo' },
    { id: 'pastas', label: 'Handmade Pastas' },
    { id: 'mains', label: 'Wood-Fired Hearth' },
    { id: 'desserts', label: 'Dessert & Farmstead' },
    { id: 'drinks', label: 'Cocktails & Wine' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDietary =
      dietaryFilter === 'all' ||
      (dietaryFilter === 'Vegetarian' && item.dietary.includes('Vegetarian')) ||
      (dietaryFilter === 'Vegan' && item.dietary.includes('Vegan')) ||
      (dietaryFilter === 'GF' && item.dietary.includes('GF')) ||
      (dietaryFilter === 'Hearth' && item.dietary.includes('Hearth'));
    return matchesCategory && matchesDietary;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-script text-2xl sm:text-3xl text-[#B85433]">
          {RESTAURANT_INFO.currentSeason.name}
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#2A2521]">
          The Seasonal Menu
        </h1>
        <p className="text-base text-[#5C554F] leading-relaxed">
          Our kitchen works directly with four local organic farms within a 50-mile radius. Because we follow the morning harvest, items shift weekly based on peak ripeness.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setShowPrintModal(true)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#556B4E] hover:text-[#3B4D36] bg-[#EDF2EB] px-4 py-2 rounded-full border border-[#D3DCCF] transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Printable / PDF View</span>
          </button>

          <button
            onClick={onOpenReservationModal}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#B85433] hover:bg-[#994127] px-4 py-2 rounded-full transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table for This Menu</span>
          </button>
        </div>
      </div>

      {/* Chef's Tasting Menu Special Feature Card */}
      <div className="bg-[#F4EFE6] border border-[#E7DDCF] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-[#B85433] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Signature Experience
              </span>
              <span className="font-script text-lg text-[#556B4E]">Nightly by Reservation</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2521]">
              The 6-Course Chef’s Autumn Tasting
            </h2>
            <p className="text-xs sm:text-sm text-[#5C554F] leading-relaxed">
              Curated daily by Chef Elena Rostova featuring the day's most exceptional foraged herbs, seafood, hand-pinched pasta, and hearth roasts.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-baseline md:items-center gap-4">
            <div className="text-right">
              <span className="text-3xl font-serif font-bold text-[#2A2521]">$125</span>
              <span className="text-xs text-[#8A8179] block">+ $65 Sommelier Wine Pairing</span>
            </div>
            <button
              onClick={onOpenReservationModal}
              className="bg-[#44543F] hover:bg-[#384434] text-white px-5 py-2.5 rounded-xl text-xs font-medium shadow-xs transition-colors"
            >
              Reserve Tasting
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation & Dietary Filters */}
      <div className="space-y-4 sticky top-20 z-20 bg-[#FAF7F2]/95 backdrop-blur-md py-4 border-y border-[#E7DDCF]">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#B85433] text-white shadow-xs'
                  : 'bg-white text-[#4A433E] border border-[#E7DDCF] hover:bg-[#F4EFE6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dietary Filters Pill Row */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#5C554F]">
          <span className="font-medium text-[#2A2521]">Filter Dietary:</span>
          {[
            { id: 'all', label: 'All Dishes' },
            { id: 'Vegetarian', label: 'Vegetarian' },
            { id: 'Vegan', label: 'Vegan' },
            { id: 'GF', label: 'Gluten-Free' },
            { id: 'Hearth', label: 'Hearth-Fired Only' },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setDietaryFilter(d.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                dietaryFilter === d.id
                  ? 'bg-[#556B4E] text-white'
                  : 'bg-[#F4EFE6] text-[#5C554F] hover:bg-[#E7DDCF]'
              }`}
            >
              {d.label}
            </button>
          ))}
          <span className="text-[11px] text-[#8A8179] ml-auto">
            Showing {filteredItems.length} dishes
          </span>
        </div>
      </div>

      {/* Dishes Grid with Large Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((dish) => (
          <div
            key={dish.id}
            className="group bg-white rounded-3xl overflow-hidden border border-[#E7DDCF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Food Image */}
            <div className="relative aspect-4/3 overflow-hidden bg-[#E7DDCF]">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#2A2521] border border-[#E7DDCF] shadow-xs">
                ${dish.price}
              </div>

              {dish.isSeasonalSpecial && (
                <div className="absolute bottom-3 left-3 bg-[#B85433] text-white px-2.5 py-0.5 rounded-full text-[11px] font-medium flex items-center gap-1 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#E2B39C]" />
                  <span>Harvest Special</span>
                </div>
              )}

              <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                {dish.dietary.map((d) => (
                  <span
                    key={d}
                    className="bg-[#2A2521]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-bold px-2 py-0.5 rounded-full"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                {dish.italianName && (
                  <p className="font-script text-base text-[#556B4E]">
                    {dish.italianName}
                  </p>
                )}
                <h3 className="font-serif text-2xl font-semibold text-[#2A2521] group-hover:text-[#B85433] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm text-[#5C554F] leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Provenance & Wine Pairing */}
              <div className="pt-4 border-t border-[#F4EFE6] space-y-2 text-xs">
                {dish.farmSource && (
                  <div className="text-[#8A8179] flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-[#556B4E] shrink-0" />
                    <span><strong className="text-[#556B4E]">Farm:</strong> {dish.farmSource}</span>
                  </div>
                )}
                {dish.winePairing && (
                  <div className="text-[#B85433] bg-[#FAF7F2] p-2.5 rounded-xl flex items-start gap-1.5">
                    <Wine className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span><strong>Wine Pairing:</strong> {dish.winePairing}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Allergen & Kitchen Policy Notes */}
      <div className="bg-[#FAF7F2] border border-[#E7DDCF] p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#5C554F]">
        <div className="space-y-1">
          <strong className="text-sm font-serif font-semibold text-[#2A2521] block">Dietary & Allergies</strong>
          <p>Please inform your server of any dietary allergies. We grind heritage grains on site; cross-contact with gluten is possible.</p>
        </div>
        <div className="space-y-1">
          <strong className="text-sm font-serif font-semibold text-[#2A2521] block">Living Wines & Corkage</strong>
          <p>We pour only natural, biodynamic, and low-intervention wines. Corkage is $35 per 750ml bottle (maximum 2 bottles per party).</p>
        </div>
        <div className="space-y-1">
          <strong className="text-sm font-serif font-semibold text-[#2A2521] block">Living Wage Surcharge</strong>
          <p>A 4% kitchen equity fee is added to all checks to support equitable healthcare for our non-tipped kitchen culinary family.</p>
        </div>
      </div>

      {/* Printable / PDF Preview Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-[#2A2521]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#D3C0A6] text-[#2A2521] space-y-6">
            <div className="flex justify-between items-start border-b border-[#E7DDCF] pb-4">
              <div>
                <span className="font-script text-xl text-[#B85433]">Terra & Hearth</span>
                <h3 className="font-serif text-3xl font-semibold">Seasonal Dinner Menu</h3>
                <p className="text-xs text-[#5C554F]">{RESTAURANT_INFO.currentSeason.name} &bull; Mill Valley, CA</p>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="p-2 text-[#5C554F] hover:text-[#2A2521]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-sm">
              <div className="border-b border-[#E7DDCF] pb-4">
                <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#B85433] mb-3">
                  Starters & Crudo
                </h4>
                <div className="space-y-3">
                  {MENU_ITEMS.filter((i) => i.category === 'starters').map((i) => (
                    <div key={i.id} className="flex justify-between items-baseline gap-4">
                      <div>
                        <span className="font-medium text-[#2A2521]">{i.name}</span>
                        <p className="text-xs text-[#5C554F]">{i.description}</p>
                      </div>
                      <span className="font-serif font-bold text-[#B85433]">${i.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-b border-[#E7DDCF] pb-4">
                <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#B85433] mb-3">
                  Hand-Rolled Pastas & Hearth Mains
                </h4>
                <div className="space-y-3">
                  {MENU_ITEMS.filter((i) => i.category === 'pastas' || i.category === 'mains').map((i) => (
                    <div key={i.id} className="flex justify-between items-baseline gap-4">
                      <div>
                        <span className="font-medium text-[#2A2521]">{i.name}</span>
                        <p className="text-xs text-[#5C554F]">{i.description}</p>
                      </div>
                      <span className="font-serif font-bold text-[#B85433]">${i.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold uppercase tracking-wider text-[#B85433] mb-3">
                  Dessert & Digestifs
                </h4>
                <div className="space-y-3">
                  {MENU_ITEMS.filter((i) => i.category === 'desserts').map((i) => (
                    <div key={i.id} className="flex justify-between items-baseline gap-4">
                      <div>
                        <span className="font-medium text-[#2A2521]">{i.name}</span>
                        <p className="text-xs text-[#5C554F]">{i.description}</p>
                      </div>
                      <span className="font-serif font-bold text-[#B85433]">${i.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7DDCF] flex items-center justify-between">
              <span className="text-xs text-[#8A8179]">Menu printed for today's harvest</span>
              <button
                onClick={() => window.print()}
                className="bg-[#B85433] text-white px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-[#994127]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
