import React from 'react';
import { PageId } from '../../types';
import { RESTAURANT_INFO, MENU_ITEMS, REVIEWS } from '../../data/restaurantData';
import { Calendar, ArrowRight, Flame, Sparkles, Award, Clock, MapPin, HeartHandshake, Leaf, Wine } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenReservationModal }) => {
  // Select 3 featured seasonal dishes for the homepage
  const featuredDishes = MENU_ITEMS.filter((item) => item.isSeasonalSpecial).slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center bg-[#FAF7F2] overflow-hidden pt-4 pb-12 sm:pb-20">
        {/* Subtle background warm texture / gradient */}
        <div className="absolute inset-0 bg-radial from-[#F4EFE6] via-[#FAF7F2] to-[#FAF7F2] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 bg-[#F4EFE6] border border-[#E2B39C]/60 px-4 py-1.5 rounded-full">
                <Flame className="w-4 h-4 text-[#B85433]" />
                <span className="font-script text-lg text-[#B85433]">
                  {RESTAURANT_INFO.currentSeason.name}
                </span>
                <span className="text-xs text-[#5C554F] hidden sm:inline">&bull; Daily Wood-Fired Hearth</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-[#2A2521] leading-[1.08]">
                  Rooted in local soil,{' '}
                  <span className="italic font-normal text-[#B85433] block sm:inline">
                    elevated by flame.
                  </span>
                </h1>
                <p className="font-script text-2xl sm:text-3xl text-[#556B4E]">
                  A cozy kitchen celebrating Northern California's morning harvests.
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#5C554F] max-w-xl leading-relaxed">
                Welcome to our intimate dining room in Mill Valley. We cook with live white oak embers, hand-roll heirloom grain pastas, and pour low-intervention wines from winemakers who care as much about the soil as we do.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenReservationModal}
                  id="hero-reserve-btn"
                  className="bg-[#B85433] hover:bg-[#994127] text-white px-8 py-4 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-98"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Reserve a Table</span>
                </button>

                <button
                  onClick={() => onNavigate('menu')}
                  id="hero-menu-btn"
                  className="bg-white hover:bg-[#F4EFE6] border border-[#D3C0A6] text-[#2A2521] px-7 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore Seasonal Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#B85433]" />
                </button>
              </div>

              {/* Service Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#E7DDCF] text-xs text-[#5C554F]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#556B4E]" />
                  <div>
                    <span className="font-medium text-[#2A2521] block">Dinner Nightly</span>
                    <span>5:00 PM – 10:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B85433]" />
                  <div>
                    <span className="font-medium text-[#2A2521] block">Mill Valley, CA</span>
                    <span>Historic Arts Quarter</span>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#556B4E]" />
                  <div>
                    <span className="font-medium text-[#2A2521] block">Michelin Guide</span>
                    <span>Green Star Distinction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Large Food Photography Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Large Visual Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5 bg-[#E7DDCF]">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                    alt="Wood-fired hearth dining at Terra and Hearth"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2521]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                    <span className="font-script text-xl text-[#E2B39C] block">Hearth Craft</span>
                    <h3 className="font-serif text-2xl font-semibold">Wood-Seared Berkshire Pork & Ember Fig</h3>
                    <p className="text-xs text-[#D3C0A6] mt-1">Carved daily over seasoned applewood</p>
                  </div>
                </div>

                {/* Floating Secondary Mini Card */}
                <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-[#E7DDCF] max-w-xs flex items-center gap-3.5">
                  <img
                    src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=300&q=80"
                    alt="Fresh Stracciatella dish"
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-[#556B4E] font-medium">
                      <Sparkles className="w-3 h-3 text-[#B85433]" />
                      <span>Farm Delivery 7:30 AM</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#2A2521]">House Stracciatella</h4>
                    <p className="text-xs text-[#8A8179]">Hand-pulled raw curds & honey</p>
                  </div>
                </div>

                {/* Organic Olive Branch Stamp */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#44543F] text-[#FAF7F2] px-4 py-2 rounded-2xl shadow-lg border border-[#556B4E] rotate-6 text-center">
                  <span className="font-script text-sm text-[#E2B39C] block">100% Biodynamic</span>
                  <span className="font-serif text-xs font-semibold tracking-wider uppercase">Natural Cellar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE HEARTH PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="font-script text-2xl text-[#B85433]">Our Intimate Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
            Cooking Guided by Nature’s Clock
          </h2>
          <p className="text-sm sm:text-base text-[#5C554F]">
            We do not believe in static menus. We cook whatever our family farmers harvest when dawn breaks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E7DDCF] space-y-4 hover:border-[#B85433]/40 transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E7DDCF] flex items-center justify-center text-[#B85433]">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#2A2521]">The Live Hearth</h3>
            <p className="text-sm text-[#5C554F] leading-relaxed">
              No gas burners in our main line. Everything is seared, braised, or smoked over fragrant local almond wood, apple branches, and white oak coals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E7DDCF] space-y-4 hover:border-[#556B4E]/40 transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E7DDCF] flex items-center justify-center text-[#556B4E]">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#2A2521]">50-Mile Radius Harvest</h3>
            <p className="text-sm text-[#5C554F] leading-relaxed">
              Over 90% of our produce, dairy, and ancient grains originate within 50 miles. We preserve gluts through lacto-fermentation, drying, and cold smoking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E7DDCF] space-y-4 hover:border-[#B85433]/40 transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E7DDCF] flex items-center justify-center text-[#B85433]">
              <Wine className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#2A2521]">Unfiltered Wines</h3>
            <p className="text-sm text-[#5C554F] leading-relaxed">
              Low-intervention, organic, and biodynamic selections curated by Mateo Ruiz. Living bottles that harmonize effortlessly with hearth smoke.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CHEF'S SEASONAL SPOTLIGHT (Large Food Photography Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-script text-2xl text-[#B85433]">This Week's Harvest</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
              Autumn Hearth Highlights
            </h2>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="text-sm font-semibold text-[#B85433] hover:text-[#994127] inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All 17 Seasonal Dishes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E7DDCF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Dish Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E7DDCF]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#2A2521] border border-[#E7DDCF]">
                  ${dish.price}
                </div>
                {dish.dietary.length > 0 && (
                  <div className="absolute top-3 right-3 flex gap-1">
                    {dish.dietary.slice(0, 2).map((d) => (
                      <span
                        key={d}
                        className="bg-[#44543F]/90 backdrop-blur-xs text-[#FAF7F2] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Dish Content */}
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

                <div className="pt-4 border-t border-[#F4EFE6] space-y-2 text-xs">
                  {dish.farmSource && (
                    <p className="text-[#8A8179] flex items-center gap-1.5">
                      <span className="font-semibold text-[#556B4E]">Sourced from:</span>
                      <span>{dish.farmSource}</span>
                    </p>
                  )}
                  {dish.winePairing && (
                    <p className="text-[#B85433] bg-[#FAF7F2] p-2 rounded-lg font-medium">
                      Pair with: {dish.winePairing}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CHEF'S TASTING MENU BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#44543F] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#556B4E] rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-script text-2xl sm:text-3xl text-[#E2B39C]">
                An Immersive Evening
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-tight">
                The 6-Course Chef’s Hearth Tasting
              </h2>
              <p className="text-[#D3DCCF] text-sm sm:text-base max-w-2xl leading-relaxed">
                Take a seat at our live hearth counter or main dining room for a blind 6-course progression featuring rare foraged botanicals, live ember seafood, hand-pinched pasta, and pasture meats. Accompanied by optional natural wine pairings.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-[#FAF7F2]">
                <div>
                  <strong className="text-xl font-serif">$125</strong>
                  <span className="text-[#B4C3AE] text-xs block">per guest</span>
                </div>
                <div className="h-8 w-px bg-[#556B4E]" />
                <div>
                  <strong className="text-xl font-serif">+$65</strong>
                  <span className="text-[#B4C3AE] text-xs block">Sommelier wine pairing</span>
                </div>
                <div className="h-8 w-px bg-[#556B4E]" />
                <div>
                  <strong className="text-xl font-serif">Approx. 2.5 hrs</strong>
                  <span className="text-[#B4C3AE] text-xs block">unhurried dining</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenReservationModal}
                className="bg-[#B85433] hover:bg-[#994127] text-white px-6 py-3.5 rounded-full text-sm font-medium shadow-md transition-all text-center"
              >
                Reserve Tasting Experience
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="bg-transparent hover:bg-white/10 border border-[#FAF7F2]/40 text-[#FAF7F2] px-6 py-3.5 rounded-full text-sm font-medium transition-all text-center"
              >
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRESS & GUEST VOICES */}
      <section className="bg-[#F4EFE6] py-16 sm:py-24 border-y border-[#E7DDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="font-script text-2xl text-[#B85433]">Accolades & Kind Words</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
              Shared at Our Hearth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#E7DDCF] flex flex-col justify-between space-y-6 shadow-xs"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-[#44543F]/10 text-[#44543F] rounded-full text-xs font-semibold">
                    {review.badge}
                  </span>
                  <p className="font-serif text-lg text-[#2A2521] italic leading-relaxed">
                    "{review.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7DDCF]">
                  <p className="font-semibold text-sm text-[#2A2521]">{review.author}</p>
                  <p className="text-xs text-[#8A8179]">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO GATHER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#2A2521] text-[#FAF7F2] p-8 sm:p-14 text-center space-y-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B85433_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-script text-2xl sm:text-3xl text-[#E2B39C]">
              Join us this evening
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold">
              The fire is lit. We saved a seat for you.
            </h2>
            <p className="text-sm sm:text-base text-[#D3C0A6]">
              Walk-ins welcome at the Hearth Bar and Garden Arbor. Reservations recommended for main dining tables and the Chef's Counter.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenReservationModal}
                className="w-full sm:w-auto bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-md transition-all"
              >
                Book a Table Now
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto border border-[#D3C0A6] text-[#FAF7F2] hover:bg-white/10 px-6 py-3.5 rounded-full text-sm font-medium transition-all"
              >
                Hours & Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
