import React, { useState } from 'react';
import { PageId, ReservationBooking } from '../../types';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Sparkles, 
  Wine, 
  Utensils, 
  Info, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface ReservationsPageProps {
  onNavigate: (page: PageId) => void;
  onBookingSuccess?: (booking: ReservationBooking) => void;
}

export const ReservationsPage: React.FC<ReservationsPageProps> = ({ onNavigate, onBookingSuccess }) => {
  const [step, setStep] = useState<'selection' | 'contact' | 'confirmed'>('selection');
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('7:00 PM');
  const [seatingArea, setSeatingArea] = useState<ReservationBooking['seatingArea']>('dining_room');
  const [occasion, setOccasion] = useState<string>('Standard Dinner');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');

  // Contact Info
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [confirmedBooking, setConfirmedBooking] = useState<ReservationBooking | null>(null);

  const seatingAreas = [
    {
      id: 'dining_room',
      name: 'Main Hearth Dining Room',
      description: 'Lively, warm banquette seating surrounded by plaster walls and an open view of the applewood hearth fire.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      vibe: 'Warm & Communal'
    },
    {
      id: 'chefs_counter',
      name: "Chef's Hearth Counter",
      description: 'Front-row high oak stools directly facing Chef Elena and the live flame roasting grills. An immersive dining theater.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      vibe: 'Interactive & Close-Up'
    },
    {
      id: 'garden_terrace',
      name: 'Olive Garden Arbor Terrace',
      description: 'Heated open-air flagstone courtyard under hundred-year-old Tuscan olive trees, wool blankets, and flickering lanterns.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      vibe: 'Al Fresco Romance'
    },
    {
      id: 'wine_nook',
      name: 'Cellar Vault Nook',
      description: 'A deeply intimate corner table tucked against our 300-bottle biodynamic wine collection. Perfect for quiet celebrations.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      vibe: 'Private & Candlelit'
    },
  ];

  const timeSlots = [
    { time: '5:00 PM', period: 'Early Hearth' },
    { time: '5:30 PM', period: 'Early Hearth' },
    { time: '6:15 PM', period: 'Prime Dining' },
    { time: '7:00 PM', period: 'Prime Dining' },
    { time: '7:45 PM', period: 'Prime Dining' },
    { time: '8:30 PM', period: 'Late Supper' },
    { time: '9:15 PM', period: 'Late Supper' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'selection') {
      setStep('contact');
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } else if (step === 'contact') {
      const booking: ReservationBooking = {
        id: `TH-${Math.floor(100000 + Math.random() * 900000)}`,
        name,
        email,
        phone,
        date,
        time: timeSlot,
        guests,
        seatingArea,
        specialOccasion: occasion !== 'Standard Dinner' ? occasion : undefined,
        dietaryNotes: [dietaryNotes, specialRequests].filter(Boolean).join(' | '),
        createdAt: new Date().toISOString(),
      };

      setConfirmedBooking(booking);
      setStep('confirmed');
      if (onBookingSuccess) onBookingSuccess(booking);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-script text-2xl sm:text-3xl text-[#B85433]">
          Join Us Around the Hearth
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#2A2521]">
          Table Reservations
        </h1>
        <p className="text-base text-[#5C554F] leading-relaxed">
          We accept reservations up to 30 days in advance. A selection of seats at our Hearth Bar and Garden Arbor are always reserved for neighborhood walk-ins.
        </p>
      </div>

      {/* Main Reservation Card / Engine */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7DDCF] shadow-xl overflow-hidden">
        {/* Step Tabs */}
        <div className="bg-[#F4EFE6] border-b border-[#E7DDCF] px-6 py-4 flex items-center justify-between text-xs sm:text-sm text-[#5C554F]">
          <div className={`flex items-center gap-2 ${step === 'selection' ? 'font-bold text-[#B85433]' : ''}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'selection' ? 'bg-[#B85433] text-white' : 'bg-[#D3C0A6] text-[#2A2521]'}`}>
              1
            </span>
            <span>Date & Table</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#D3C0A6]" />
          <div className={`flex items-center gap-2 ${step === 'contact' ? 'font-bold text-[#B85433]' : ''}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'contact' ? 'bg-[#B85433] text-white' : 'bg-[#D3C0A6] text-[#2A2521]'}`}>
              2
            </span>
            <span>Guest Information</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#D3C0A6]" />
          <div className={`flex items-center gap-2 ${step === 'confirmed' ? 'font-bold text-[#556B4E]' : ''}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'confirmed' ? 'bg-[#556B4E] text-white' : 'bg-[#D3C0A6] text-[#2A2521]'}`}>
              3
            </span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Step 1: Selection Form */}
        {step === 'selection' && (
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-10 space-y-8">
            {/* 1. Guests */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-3 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#B85433]" />
                <span>Select Number of Guests</span>
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all border ${
                      guests === num
                        ? 'bg-[#B85433] text-white border-[#B85433] shadow-sm ring-2 ring-[#B85433]/20'
                        : 'bg-[#FAF7F2] text-[#2A2521] border-[#E7DDCF] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    {num} {num === 1 ? 'Guest' : ''}
                  </button>
                ))}
              </div>
              {guests >= 6 && (
                <p className="text-xs text-[#556B4E] mt-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Parties of 6+ are served our seasonal family-style sharing menu.</span>
                </p>
              )}
            </div>

            {/* 2. Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#B85433]" />
                  <span>Choose Date</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm text-[#2A2521] focus:ring-2 focus:ring-[#B85433]/20 focus:border-[#B85433]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#B85433]" />
                  <span>Seating Time Slot</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setTimeSlot(slot.time)}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        timeSlot === slot.time
                          ? 'bg-[#44543F] text-white border-[#44543F] shadow-xs'
                          : 'bg-[#FAF7F2] border-[#E7DDCF] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      <div className="text-xs font-bold">{slot.time}</div>
                      <div className={`text-[10px] ${timeSlot === slot.time ? 'text-[#FAF7F2]/80' : 'text-[#8A8179]'}`}>
                        {slot.period}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Seating Atmosphere (With photos) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-3 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#B85433]" />
                <span>Select Dining Atmosphere</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seatingAreas.map((area) => (
                  <div
                    key={area.id}
                    onClick={() => setSeatingArea(area.id as any)}
                    className={`cursor-pointer rounded-2xl overflow-hidden border transition-all p-3 flex gap-3.5 items-center ${
                      seatingArea === area.id
                        ? 'bg-[#F4EFE6] border-[#B85433] ring-2 ring-[#B85433]/20 shadow-xs'
                        : 'bg-[#FAF7F2] border-[#E7DDCF] hover:bg-[#F4EFE6]/50'
                    }`}
                  >
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-[#2A2521]">{area.name}</span>
                        {seatingArea === area.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#B85433]" />
                        )}
                      </div>
                      <span className="inline-block text-[10px] uppercase font-bold text-[#556B4E] bg-[#EDF2EB] px-2 py-0.5 rounded-md">
                        {area.vibe}
                      </span>
                      <p className="text-xs text-[#5C554F] line-clamp-2 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Occasion & Dietary Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                  Occasion (Optional)
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm"
                >
                  <option value="Standard Dinner">Standard Dinner</option>
                  <option value="Birthday">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Romantic Date">Romantic Date</option>
                  <option value="Business Entertaining">Business Entertaining</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                  Allergies / Dietary Restrictions
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 Gluten-free, vegetarian guest, no shellfish"
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Continue to Guest Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Contact Form */}
        {step === 'contact' && (
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-10 space-y-6">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7DDCF] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-[#8A8179] block">Your Selection:</span>
                <span className="font-semibold text-sm text-[#2A2521]">
                  {guests} Guests &bull; {date} &bull; {timeSlot}
                </span>
                <span className="text-[#556B4E] block capitalize">
                  {seatingArea.replace('_', ' ')}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep('selection')}
                className="text-xs text-[#B85433] font-semibold hover:underline"
              >
                Edit Selection
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Henry Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(415) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="henry@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm"
              />
              <p className="text-[11px] text-[#8A8179] mt-1">
                We will send confirmation and table ready notices to this email.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                Special Requests or Notes for Chef Elena
              </label>
              <textarea
                rows={3}
                placeholder="Let us know if you'd like wine pairing recommendations prepared, high chairs, or quiet booth preference..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E7DDCF]">
              <button
                type="button"
                onClick={() => setStep('selection')}
                className="text-sm text-[#5C554F] hover:text-[#2A2521]"
              >
                &larr; Back to Seating
              </button>
              <button
                type="submit"
                className="bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-md"
              >
                Confirm Table Reservation
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmed Screen */}
        {step === 'confirmed' && confirmedBooking && (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#556B4E]/15 rounded-full flex items-center justify-center mx-auto text-[#556B4E]">
              <CheckCircle2 className="w-10 h-10 text-[#556B4E]" />
            </div>

            <div className="space-y-1">
              <span className="font-script text-2xl text-[#B85433]">We look forward to hosting you</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A2521]">
                Reservation Confirmed!
              </h3>
              <p className="text-xs text-[#8A8179]">
                Booking Reference: <strong className="font-mono text-sm text-[#2A2521]">{confirmedBooking.id}</strong>
              </p>
            </div>

            <div className="max-w-md mx-auto bg-[#FAF7F2] border border-[#E7DDCF] rounded-2xl p-6 text-left text-sm space-y-3">
              <div className="flex justify-between border-b border-[#E7DDCF] pb-2">
                <span className="text-[#5C554F]">Guest</span>
                <span className="font-semibold text-[#2A2521]">{confirmedBooking.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#E7DDCF] pb-2">
                <span className="text-[#5C554F]">Date & Time</span>
                <span className="font-semibold text-[#2A2521]">{confirmedBooking.date} at {confirmedBooking.time}</span>
              </div>
              <div className="flex justify-between border-b border-[#E7DDCF] pb-2">
                <span className="text-[#5C554F]">Party Size</span>
                <span className="font-semibold text-[#2A2521]">{confirmedBooking.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C554F]">Atmosphere</span>
                <span className="font-semibold text-[#2A2521] capitalize">{confirmedBooking.seatingArea.replace('_', ' ')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => {
                  setStep('selection');
                  setConfirmedBooking(null);
                }}
                className="w-full sm:w-auto bg-[#44543F] hover:bg-[#384434] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Book Another Date
              </button>

              <button
                onClick={() => onNavigate('menu')}
                className="w-full sm:w-auto border border-[#D3C0A6] text-[#2A2521] hover:bg-[#F4EFE6] px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Browse What We’re Serving
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Policies & Private Dining Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E7DDCF] space-y-3">
          <ShieldCheck className="w-6 h-6 text-[#556B4E]" />
          <h4 className="font-serif text-xl font-semibold text-[#2A2521]">Cancellation Policy</h4>
          <p className="text-xs text-[#5C554F] leading-relaxed">
            Reservations may be modified or cancelled up to 2 hours prior without penalty. Late cancellations or no-shows may incur a $25/guest fee during peak dinner services.
          </p>
        </div>

        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E7DDCF] space-y-3">
          <Wine className="w-6 h-6 text-[#B85433]" />
          <h4 className="font-serif text-xl font-semibold text-[#2A2521]">Living Wine Corkage</h4>
          <p className="text-xs text-[#5C554F] leading-relaxed">
            You are welcome to bring special bottles from your personal cellar that are not represented on our current wine list. Corkage is $35 per 750ml (limit 2 bottles).
          </p>
        </div>

        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E7DDCF] space-y-3">
          <Sparkles className="w-6 h-6 text-[#556B4E]" />
          <h4 className="font-serif text-xl font-semibold text-[#2A2521]">Private Buyouts & Celebrations</h4>
          <p className="text-xs text-[#5C554F] leading-relaxed">
            Planning a rehearsal supper, intimate wedding, or company retreat? The Garden Arbor and full restaurant are available for private buyouts.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs font-semibold text-[#B85433] hover:underline block pt-1"
          >
            Inquire for Private Events &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
