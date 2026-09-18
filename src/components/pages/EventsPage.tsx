import React, { useState } from 'react';
import { PageId, EventItem } from '../../types';
import { EVENTS_DATA } from '../../data/restaurantData';
import { Calendar, Clock, Ticket, CheckCircle2, Sparkles, X, Users, ArrowRight } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate, onOpenReservationModal }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [rsvpGuests, setRsvpGuests] = useState<number>(2);
  const [rsvpName, setRsvpName] = useState<string>('');
  const [rsvpEmail, setRsvpEmail] = useState<string>('');
  const [rsvpPhone, setRsvpPhone] = useState<string>('');
  const [isRsvpSuccess, setIsRsvpSuccess] = useState<boolean>(false);

  const weeklySpecials = [
    {
      title: "Hearth Aperitivo & Golden Hour",
      days: "Tuesday – Friday",
      time: "4:30 PM – 6:00 PM",
      description: "Enjoy $12 wild botanical spritzes, $9 glasses of skin-contact Friulano, and complimentary wood-fired rosemary focaccia skewers at the Hearth Bar.",
      badge: "No Reservations Needed"
    },
    {
      title: "Handmade Pasta & Hearth Wine Flight",
      days: "Wednesdays",
      time: "All Evening",
      description: "A three-course chef pasta journey (stuffed agnolotti, ribbon pappardelle, and seasonal dessert) paired with two natural wine pours for $52 per guest.",
      badge: "Wednesday Special"
    },
    {
      title: "Cellar Sunday Bottle Night",
      days: "Sunday Suppers",
      time: "4:00 PM – 9:00 PM",
      description: "Mateo opens rare archival magnums from Jura, Etna, and Sonoma at retail cellar prices for tables enjoying our Sunday family supper.",
      badge: "Cellar Selection"
    }
  ];

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRsvpSuccess(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsRsvpSuccess(false);
    setRsvpName('');
    setRsvpEmail('');
    setRsvpPhone('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-script text-2xl sm:text-3xl text-[#B85433]">
          Gatherings Around the Fire
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#2A2521]">
          Events & Seasonal Specials
        </h1>
        <p className="text-base text-[#5C554F] leading-relaxed">
          Beyond our nightly dinner service, we host monthly communal suppers, foraging excursions, and winemaker masterclasses that celebrate the seasonal rhythms.
        </p>
      </div>

      {/* Featured Seasonal Dinners & Workshops */}
      <div className="space-y-10">
        <div className="flex items-center justify-between border-b border-[#E7DDCF] pb-4">
          <div>
            <span className="font-script text-xl text-[#556B4E]">Upcoming Dinners & Masterclasses</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2521]">
              Ticketed Hearth Experiences
            </h2>
          </div>
          <span className="text-xs text-[#8A8179] hidden sm:inline">
            Intimate capacity limited to 24 seats
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS_DATA.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E7DDCF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Event Image */}
              <div className="relative aspect-16/9 overflow-hidden bg-[#E7DDCF]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#2A2521] border border-[#E7DDCF] flex items-center gap-1.5 shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#B85433]" />
                  <span>{event.date}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#44543F] text-white px-3 py-1 rounded-full text-xs font-medium shadow-xs">
                  {event.spotsLeft} seats remaining
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-script text-lg text-[#B85433] block">
                    {event.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2521]">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C554F] pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#556B4E]" />
                      <span>{event.time}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="font-semibold text-[#B85433]">{event.price}</span>
                  </div>
                  <p className="text-sm text-[#5C554F] leading-relaxed pt-2">
                    {event.description}
                  </p>
                </div>

                {/* Inclusions */}
                <div className="pt-4 border-t border-[#F4EFE6] space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2A2521]">
                    Experience Includes:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#5C554F]">
                    {event.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#556B4E] font-bold">&bull;</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-[#B85433] hover:bg-[#994127] text-white py-3 rounded-xl text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Reserve Seats &bull; {event.price.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Specials & Rituals */}
      <div className="bg-[#F4EFE6] rounded-3xl p-8 sm:p-12 border border-[#E7DDCF] space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-script text-2xl text-[#B85433]">Regular Rituals</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
            Weekly Happenings at the Hearth
          </h2>
          <p className="text-xs sm:text-sm text-[#5C554F]">
            Drop in during the week for casual neighborhood specials at our hearth counter and garden patio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weeklySpecials.map((sp, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E7DDCF] space-y-3 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2">
                <span className="inline-block bg-[#44543F]/10 text-[#44543F] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  {sp.badge}
                </span>
                <h4 className="font-serif text-xl font-semibold text-[#2A2521]">{sp.title}</h4>
                <div className="text-xs font-semibold text-[#B85433] flex items-center gap-2">
                  <span>{sp.days}</span>
                  <span>&bull;</span>
                  <span>{sp.time}</span>
                </div>
                <p className="text-xs text-[#5C554F] leading-relaxed pt-1">
                  {sp.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenReservationModal}
                  className="text-xs font-semibold text-[#556B4E] hover:text-[#3B4D36] inline-flex items-center gap-1"
                >
                  <span>Book for this night</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP / Ticket Booking Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-[#2A2521]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D3C0A6] text-[#2A2521] relative space-y-6">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-[#5C554F] hover:text-[#2A2521] rounded-full hover:bg-[#F4EFE6]"
            >
              <X className="w-5 h-5" />
            </button>

            {!isRsvpSuccess ? (
              <form onSubmit={handleRsvpSubmit} className="space-y-5">
                <div className="space-y-1">
                  <span className="font-script text-lg text-[#B85433]">Reserve Event Seats</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2521]">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-xs text-[#5C554F]">
                    {selectedEvent.date} &bull; {selectedEvent.time} &bull; {selectedEvent.price}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1.5">
                    Select Tickets
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setRsvpGuests(num)}
                        className={`py-2 rounded-xl text-sm font-semibold border transition-all ${
                          rsvpGuests === num
                            ? 'bg-[#B85433] text-white border-[#B85433]'
                            : 'bg-white border-[#E7DDCF] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        {num} {num === 1 ? 'Seat' : 'Seats'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(415) 555-0182"
                    value={rsvpPhone}
                    onChange={(e) => setRsvpPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#B85433] hover:bg-[#994127] text-white py-3 rounded-xl font-medium text-sm transition-all shadow-xs"
                  >
                    Confirm Event RSVP ({rsvpGuests} Tickets)
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 bg-[#556B4E]/15 rounded-full flex items-center justify-center mx-auto text-[#556B4E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-[#2A2521]">
                  Seats Reserved!
                </h4>
                <p className="text-xs text-[#5C554F] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{rsvpName}</strong>. We have saved <strong>{rsvpGuests} seats</strong> for <strong>{selectedEvent.title}</strong> on <strong>{selectedEvent.date}</strong>.
                </p>
                <p className="text-xs text-[#8A8179]">
                  A confirmation email with arrival directions has been sent to {rsvpEmail}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleCloseModal}
                    className="bg-[#44543F] hover:bg-[#384434] text-white px-6 py-2.5 rounded-xl text-xs font-medium"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
