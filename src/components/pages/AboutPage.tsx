import React from 'react';
import { PageId } from '../../types';
import { FARM_PARTNERS, RESTAURANT_INFO } from '../../data/restaurantData';
import { Flame, Leaf, Heart, Award, ArrowRight, Sparkles, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenReservationModal }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO / INTRO */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-script text-2xl sm:text-3xl text-[#B85433]">
              Our Hearth & Origins
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#2A2521]">
              Born from wood smoke, morning mist, and good neighbors.
            </h1>
            <p className="text-base sm:text-lg text-[#5C554F] leading-relaxed">
              Terra & Hearth began in 2018 as an ode to Northern California’s wild coastline and agricultural valley. A quiet, candlelit gathering place where time slows down.
            </p>
          </div>

          {/* Large Atmospheric Photo Banner */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-xl aspect-16/9 sm:aspect-21/9 max-h-[520px] w-full relative">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
              alt="Terra and Hearth dining room atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2521]/70 via-transparent to-transparent flex items-end p-6 sm:p-10">
              <p className="font-script text-2xl text-[#FAF7F2]">
                "To sit at our hearth is to taste the exact soil and sunshine of this week."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY OF ELENA & MATEO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-3/4">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Chef in kitchen tasting herbs"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#2A2521]/90 backdrop-blur-xs p-4 rounded-2xl text-[#FAF7F2] border border-[#443C36]">
                <h4 className="font-serif text-lg font-semibold">Chef Elena Rostova</h4>
                <p className="text-xs text-[#E2B39C]">Executive Chef & Co-Founder</p>
              </div>
            </div>

            {/* Floating quote badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#44543F] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#556B4E]">
              <span className="font-script text-xl text-[#E2B39C] block">Daily Ritual</span>
              <p className="text-xs leading-relaxed text-[#D3DCCF]">
                "Every sunrise we visit the docks and organic furrows before lighting the morning white oak embers."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="space-y-2">
              <span className="font-script text-2xl text-[#B85433]">The Founders</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
                Elena Rostova & Mateo Ruiz
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed">
              Elena spent twelve years working in farmhouse kitchens across Piedmont, the Basque country, and Mendocino. She fell in love with open-fire live coals—a primal culinary method that strips away pretense and forces the cook to listen to the heat and grain of the wood.
            </p>

            <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed">
              Her partner, Mateo Ruiz, is a certified organic sommelier who grew up among biodynamic vineyards in Chile. Mateo curates our living wine cellar of over 300 bottles—all wild-fermented, un-fined, and un-filtered, capturing the authentic spirit of small family vignerons.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#E7DDCF] text-xs">
              <div className="space-y-1">
                <span className="font-serif text-2xl font-bold text-[#B85433] block">100%</span>
                <span className="text-[#5C554F]">Wood-Fired Line (Zero Gas Burners)</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl font-bold text-[#556B4E] block">50 Miles</span>
                <span className="text-[#5C554F]">Average Ingredient Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS */}
      <section className="bg-[#F4EFE6] py-16 sm:py-24 border-y border-[#E7DDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="font-script text-2xl text-[#B85433]">Our Guiding Commitments</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
              How We Cook Every Single Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DDCF] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#B85433]/10 text-[#B85433] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2A2521]">Hyper-Seasonality</h3>
              <p className="text-xs text-[#5C554F] leading-relaxed">
                We never buy hothouse tomatoes in December or asparagus in autumn. When an ingredient’s season concludes, it rests until next year.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DDCF] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#556B4E]/10 text-[#556B4E] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2A2521]">Whole-Animal & Zero-Waste</h3>
              <p className="text-xs text-[#5C554F] leading-relaxed">
                Heritage pigs and cows are butchered in-house. Bones yield broths; fats are rendered for focaccia; vegetable scraps feed our compost.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DDCF] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#B85433]/10 text-[#B85433] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2A2521]">Ancient Heirloom Grains</h3>
              <p className="text-xs text-[#5C554F] leading-relaxed">
                We mill Sonora and Spelt berries cold on stone mills right inside our kitchen every morning, retaining live wheat germ and nutrients.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E7DDCF] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#556B4E]/10 text-[#556B4E] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2A2521]">Equitable Kitchen Team</h3>
              <p className="text-xs text-[#5C554F] leading-relaxed">
                All kitchen cooks and dishwashers receive comprehensive living wages, healthcare, and two paid farm visit retreat days per season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FARM PARTNER SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="font-script text-2xl text-[#B85433]">The Stewards of the Land</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
              Meet Our Partner Family Farms
            </h2>
          </div>
          <p className="text-sm text-[#5C554F] max-w-md">
            Our menu is only as vibrant as the hands that tend the soil. We celebrate their tireless devotion on every plate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FARM_PARTNERS.map((farm, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-[#E7DDCF] shadow-xs flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#E7DDCF]">
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-[#2A2521]">
                  {farm.distance} away
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-script text-sm text-[#556B4E] block">{farm.location}</span>
                  <h4 className="font-serif text-lg font-semibold text-[#2A2521]">{farm.name}</h4>
                  <p className="text-xs font-medium text-[#B85433] mt-0.5">{farm.products}</p>
                  <p className="text-xs text-[#5C554F] mt-2 leading-relaxed">{farm.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GUEST INVITATION */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <span className="font-script text-2xl text-[#B85433]">Pull up a chair</span>
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
          We would be honored to cook for you.
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenReservationModal}
            className="bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-md transition-all"
          >
            Reserve Your Table
          </button>
          <button
            onClick={() => onNavigate('menu')}
            className="border border-[#D3C0A6] text-[#2A2521] hover:bg-[#F4EFE6] px-6 py-3.5 rounded-full text-sm font-medium transition-all"
          >
            Explore Today's Menu
          </button>
        </div>
      </section>
    </div>
  );
};
