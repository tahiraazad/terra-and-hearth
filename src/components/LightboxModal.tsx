import React from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C1917]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      <div
        className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
          />
        </div>

        <div className="w-full bg-[#2A2521] border border-[#443C36] mt-4 p-4 rounded-xl text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            <span className="font-script text-[#E2B39C] text-lg block -mb-1">
              Terra & Hearth Collection
            </span>
            <h4 className="font-serif text-xl font-medium text-[#FAF7F2]">
              {photo.title}
            </h4>
            <p className="text-xs text-[#D3C0A6] mt-0.5">{photo.caption}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8A8179]">
              {currentIndex + 1} of {photos.length}
            </span>
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 bg-white/10 rounded-lg text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 bg-white/10 rounded-lg text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
