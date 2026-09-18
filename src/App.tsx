
import React, { useState } from 'react';
import { PageId, ReservationBooking } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { MenuPage } from './components/pages/MenuPage';
import { AboutPage } from './components/pages/AboutPage';
import { ReservationsPage } from './components/pages/ReservationsPage';
import { EventsPage } from './components/pages/EventsPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ContactPage } from './components/pages/ContactPage';
import { ReservationModal } from './components/ReservationModal';
import { Calendar, CheckCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [reservationModalOpen, setReservationModalOpen] = useState<boolean>(false);
  const [activeReservation, setActiveReservation] = useState<ReservationBooking | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleBookingSuccess = (booking: ReservationBooking) => {
    setActiveReservation(booking);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A2521] selection:bg-[#E2B39C]/40 selection:text-[#663022]">
      {/* Toast Notification for Reservations */}
      {showToast && activeReservation && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#44543F] text-[#FAF7F2] p-4 rounded-2xl shadow-2xl border border-[#556B4E] flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-sm">
          <CheckCircle className="w-6 h-6 text-[#E2B39C] shrink-0" />
          <div className="text-xs">
            <p className="font-semibold text-sm">Table Reserved!</p>
            <p className="text-[#D3DCCF]">
              {activeReservation.name} &bull; {activeReservation.date} at {activeReservation.time}
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-[#D3DCCF] hover:text-white text-xs ml-auto font-bold px-1"
          >
            &times;
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenReservationModal={() => setReservationModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReservationModal={() => setReservationModalOpen(true)}
          />
        )}
        {currentPage === 'menu' && (
          <MenuPage
            onNavigate={handleNavigate}
            onOpenReservationModal={() => setReservationModalOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenReservationModal={() => setReservationModalOpen(true)}
          />
        )}
        {currentPage === 'reservations' && (
          <ReservationsPage
            onNavigate={handleNavigate}
            onBookingSuccess={handleBookingSuccess}
          />
        )}
        {currentPage === 'events' && (
          <EventsPage
            onNavigate={handleNavigate}
            onOpenReservationModal={() => setReservationModalOpen(true)}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenReservationModal={() => setReservationModalOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenReservationModal={() => setReservationModalOpen(true)}
          />
        )}
      </main>

      {/* Floating Action Button on Mobile */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 lg:hidden">
        <button
          onClick={() => setReservationModalOpen(true)}
          className="bg-[#B85433] hover:bg-[#994127] text-white px-6 py-3 rounded-full font-medium text-sm shadow-xl flex items-center gap-2 border border-white/20 active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Reserve a Table</span>
        </button>
      </div>

      {/* Quick Global Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Footer with address, hours, phone, social links, embedded map */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservationModal={() => setReservationModalOpen(true)}
      />
    </div>
  );
}
