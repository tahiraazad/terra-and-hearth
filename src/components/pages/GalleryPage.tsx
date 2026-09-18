import React, { useState } from 'react';
import { PageId, GalleryPhoto } from '../../types';
import { GALLERY_PHOTOS } from '../../data/restaurantData';
import { LightboxModal } from '../LightboxModal';
import { Maximize2, Sparkles, Camera } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenReservationModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dishes' | 'drinks' | 'interior' | 'farm'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photographs' },
    { id: 'dishes', label: 'Hearth & Dishes' },
    { id: 'drinks', label: 'Wine & Libations' },
    { id: 'interior', label: 'Dining Rooms & Arbor' },
    { id: 'farm', label: 'Morning Harvest' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeFilter === 'all') return true;
    return photo.category === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-script text-2xl sm:text-3xl text-[#B85433]">
          Atmosphere & Fire
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#2A2521]">
          The Visual Chronicle
        </h1>
        <p className="text-base text-[#5C554F] leading-relaxed">
          Glimpses into our live-fire hearth, morning pasta rolling, wild garden terrace, and the Northern California farms where our food is born.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeFilter === tab.id
                ? 'bg-[#B85433] text-white shadow-xs'
                : 'bg-white text-[#4A433E] border border-[#E7DDCF] hover:bg-[#F4EFE6]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#E7DDCF] border border-[#E7DDCF] shadow-xs hover:shadow-xl transition-all duration-300 aspect-4/3 sm:aspect-square"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2521]/90 via-[#2A2521]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#FAF7F2]">
              <div className="flex items-center justify-between">
                <span className="font-script text-lg text-[#E2B39C]">
                  {photo.category.toUpperCase()}
                </span>
                <span className="p-2 bg-white/20 rounded-full text-white">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mt-1">
                {photo.title}
              </h3>
              <p className="text-xs text-[#D3C0A6] mt-1 line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />

      {/* Bottom CTA */}
      <div className="bg-[#F4EFE6] border border-[#E7DDCF] rounded-3xl p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
        <span className="font-script text-2xl text-[#B85433]">Experience It in Person</span>
        <h3 className="font-serif text-3xl font-semibold text-[#2A2521]">
          Reserve a seat at our table this evening
        </h3>
        <p className="text-sm text-[#5C554F] max-w-lg mx-auto">
          Whether you choose the warmth of the live hearth counter or the olive garden arbor, we promise an evening of slow food and genuine hospitality.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenReservationModal}
            className="bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3 rounded-full text-sm font-medium shadow-xs transition-all"
          >
            Find an Available Table
          </button>
        </div>
      </div>
    </div>
  );
};
