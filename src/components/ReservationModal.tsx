import React, { useState } from 'react';
import { ReservationBooking } from '../types';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, MapPin, Wine, Utensils } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess?: (booking: ReservationBooking) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  onBookingSuccess
}) => {
  const [step, setStep] = useState<'details' | 'contact' | 'confirmed'>('details');
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('7:00 PM');
  const [seatingArea, setSeatingArea] = useState<ReservationBooking['seatingArea']>('dining_room');
  const [specialOccasion, setSpecialOccasion] = useState<string>('Casual Dining');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<ReservationBooking | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    { label: '5:15 PM', tag: 'Early Hearth' },
    { label: '5:45 PM', tag: 'Early Hearth' },
    { label: '6:30 PM', tag: 'Prime Dining' },
    { label: '7:00 PM', tag: 'Prime Dining' },
    { label: '7:30 PM', tag: 'Prime Dining' },
    { label: '8:15 PM', tag: 'Late Supper' },
    { label: '8:45 PM', tag: 'Late Supper' },
  ];

  const seatingOptions = [
    {
      id: 'dining_room',
      title: 'Main Hearth Dining Room',
      description: 'Warm buzz, banquette seating, view of the open fire.'
    },
    {
      id: 'chefs_counter',
      title: "Chef's Hearth Counter",
      description: 'Front-row high-top counter overlooking live wood flames.'
    },
    {
      id: 'garden_terrace',
      title: 'Olive Garden Terrace',
      description: 'Heated outdoor arbor surrounded by stone planters & lanterns.'
    },
    {
      id: 'wine_nook',
      title: 'Cellar Vault Nook',
      description: 'Intimate candlelit alcove near the natural wine archive.'
    },
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('contact');
    } else if (step === 'contact') {
      const newBooking: ReservationBooking = {
        id: `TH-${Math.floor(100000 + Math.random() * 900000)}`,
        name,
        email,
        phone,
        date,
        time: timeSlot,
        guests,
        seatingArea,
        specialOccasion: specialOccasion !== 'Casual Dining' ? specialOccasion : undefined,
        dietaryNotes: dietaryNotes.trim() || undefined,
        createdAt: new Date().toISOString(),
      };

      setConfirmedBooking(newBooking);
      setStep('confirmed');
      if (onBookingSuccess) onBookingSuccess(newBooking);
    }
  };

  const handleReset = () => {
    setStep('details');
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2521]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E7DDCF] overflow-hidden text-[#2A2521]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#44543F] text-[#FAF7F2] p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="font-script text-[#E2B39C] text-xl block">
              Reserve Your Experience
            </span>
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#FAF7F2]">
              Terra & Hearth Table Booking
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#FAF7F2] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-[#F4EFE6] px-6 py-2.5 border-b border-[#E7DDCF] flex items-center justify-between text-xs text-[#5C554F]">
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step === 'details' ? 'bg-[#B85433] text-white' : 'bg-[#D3C0A6] text-[#2A2521]'}`}>1</span>
            <span className={step === 'details' ? 'font-semibold text-[#B85433]' : ''}>Table & Time</span>
          </div>
          <span className="text-[#D3C0A6]">&rarr;</span>
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step === 'contact' ? 'bg-[#B85433] text-white' : 'bg-[#D3C0A6] text-[#2A2521]'}`}>2</span>
            <span className={step === 'contact' ? 'font-semibold text-[#B85433]' : ''}>Guest Info</span>
          </div>
          <span className="text-[#D3C0A6]">&rarr;</span>
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${step === 'confirmed' ? 'bg-[#556B4E] text-white' : 'bg-[#D3C0A6] text-[#2A2521]'}`}>3</span>
            <span className={step === 'confirmed' ? 'font-semibold text-[#556B4E]' : ''}>Confirmation</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {step === 'details' && (
            <form onSubmit={handleNextStep} className="space-y-6">
              {/* Party Size */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#B85433]" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-2 rounded-xl text-sm font-semibold transition-all border ${
                        guests === num
                          ? 'bg-[#B85433] text-white border-[#B85433] shadow-xs'
                          : 'bg-white text-[#2A2521] border-[#E7DDCF] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : ''}
                    </button>
                  ))}
                </div>
                {guests >= 7 && (
                  <p className="text-xs text-[#B85433] mt-2">
                    * Large gatherings (7+ guests) enjoy our family-style seasonal chef menu.
                  </p>
                )}
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B85433]" />
                  <span>Dining Date</span>
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm text-[#2A2521] focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B85433]" />
                  <span>Available Seating Times</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.label}
                      type="button"
                      onClick={() => setTimeSlot(slot.label)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        timeSlot === slot.label
                          ? 'bg-[#556B4E] text-white border-[#556B4E] shadow-xs'
                          : 'bg-white border-[#E7DDCF] hover:border-[#B85433]'
                      }`}
                    >
                      <div className="font-semibold text-sm">{slot.label}</div>
                      <div className={`text-[10px] ${timeSlot === slot.label ? 'text-[#FAF7F2]/80' : 'text-[#8A8179]'}`}>
                        {slot.tag}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Area Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-2 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#B85433]" />
                  <span>Preferred Atmosphere</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {seatingOptions.map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setSeatingArea(area.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        seatingArea === area.id
                          ? 'bg-[#F4EFE6] border-[#B85433] ring-1 ring-[#B85433]'
                          : 'bg-white border-[#E7DDCF] hover:bg-[#F4EFE6]/50'
                      }`}
                    >
                      <div className="font-serif font-semibold text-sm text-[#2A2521] flex items-center justify-between">
                        <span>{area.title}</span>
                        {seatingArea === area.id && (
                          <span className="w-2 h-2 rounded-full bg-[#B85433]"></span>
                        )}
                      </div>
                      <p className="text-xs text-[#5C554F] mt-1 leading-snug">
                        {area.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3 rounded-xl font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Continue to Guest Details</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </form>
          )}

          {step === 'contact' && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="bg-[#F4EFE6] p-4 rounded-xl border border-[#E7DDCF] text-xs text-[#5C554F] space-y-1">
                <p className="font-semibold text-sm text-[#2A2521]">Reservation Summary</p>
                <p>
                  <strong className="text-[#2A2521]">{guests} {guests === 1 ? 'Guest' : 'Guests'}</strong> on{' '}
                  <strong className="text-[#2A2521]">{date}</strong> at <strong className="text-[#2A2521]">{timeSlot}</strong>
                </p>
                <p>
                  Seating: <span className="capitalize">{seatingArea.replace('_', ' ')}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clara Thorne"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(415) 555-0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
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
                  placeholder="clara@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                />
                <p className="text-[11px] text-[#8A8179] mt-1">
                  Confirmation and calendar invite will be sent here.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                  Celebrating an Occasion?
                </label>
                <select
                  value={specialOccasion}
                  onChange={(e) => setSpecialOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                >
                  <option value="Casual Dining">Casual Dining / Gathering</option>
                  <option value="Birthday">Birthday Celebration</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Date Night">Romantic Date Night</option>
                  <option value="Business Dinner">Business Dinner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                  Dietary Restrictions & Allergies
                </label>
                <textarea
                  rows={2}
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  placeholder="e.g. 1 Gluten-free, shellfish allergy, preference for mocktails..."
                  className="w-full px-4 py-2 bg-white border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2.5 text-sm text-[#5C554F] hover:text-[#2A2521]"
                >
                  &larr; Back
                </button>
                <button
                  type="submit"
                  className="bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3 rounded-xl font-medium text-sm transition-all shadow-xs"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}

          {step === 'confirmed' && confirmedBooking && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-[#556B4E]/15 rounded-full flex items-center justify-center mx-auto text-[#556B4E]">
                <CheckCircle2 className="w-10 h-10 text-[#556B4E]" />
              </div>

              <div className="space-y-1">
                <span className="font-script text-xl text-[#B85433]">We can't wait to host you</span>
                <h4 className="font-serif text-3xl font-semibold text-[#2A2521]">
                  Table Confirmed!
                </h4>
                <p className="text-sm text-[#5C554F]">
                  Reservation Code: <strong className="text-[#2A2521] font-mono">{confirmedBooking.id}</strong>
                </p>
              </div>

              <div className="bg-[#F4EFE6] border border-[#E7DDCF] rounded-2xl p-5 text-left text-sm space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#E7DDCF]">
                  <span className="text-[#5C554F]">Guest Name</span>
                  <span className="font-semibold text-[#2A2521]">{confirmedBooking.name}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E7DDCF]">
                  <span className="text-[#5C554F]">Date & Time</span>
                  <span className="font-semibold text-[#2A2521]">{confirmedBooking.date} at {confirmedBooking.time}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E7DDCF]">
                  <span className="text-[#5C554F]">Party Size</span>
                  <span className="font-semibold text-[#2A2521]">{confirmedBooking.guests} Guests</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E7DDCF]">
                  <span className="text-[#5C554F]">Seating Location</span>
                  <span className="font-semibold text-[#2A2521] capitalize">{confirmedBooking.seatingArea.replace('_', ' ')}</span>
                </div>
                {confirmedBooking.specialOccasion && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#5C554F]">Occasion</span>
                    <span className="font-medium text-[#B85433]">{confirmedBooking.specialOccasion}</span>
                  </div>
                )}
              </div>

              <div className="text-xs text-[#8A8179] bg-white p-3 rounded-xl border border-[#E7DDCF]">
                A confirmation has been sent to <strong>{confirmedBooking.email}</strong>. If your schedule changes, you may adjust or cancel up to 2 hours prior without fee.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-[#44543F] hover:bg-[#384434] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Dinner at Terra & Hearth\nDESCRIPTION:Reservation for ${confirmedBooking.guests} guests\nLOCATION:418 Hearthstone Way, Mill Valley, CA\nEND:VEVENT\nEND:VCALENDAR`;
                    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `terra-hearth-${confirmedBooking.id}.ics`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full sm:w-auto border border-[#D3C0A6] text-[#2A2521] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#F4EFE6] transition-colors"
                >
                  Add to Calendar (.ics)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
