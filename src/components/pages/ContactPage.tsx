import React, { useState } from 'react';
import { PageId } from '../../types';
import { RESTAURANT_INFO } from '../../data/restaurantData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Car, 
  Sparkles, 
  Send,
  Navigation
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReservationModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenReservationModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Check if restaurant is currently open (simple heuristic based on local time)
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday
  const isCurrentlyOpen = currentDay !== 1 && currentHour >= 17 && currentHour < 22;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-script text-2xl sm:text-3xl text-[#B85433]">
          Find Us in Mill Valley
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#2A2521]">
          Contact & Location
        </h1>
        <p className="text-base text-[#5C554F] leading-relaxed">
          Tucked away in the historic arts district at the base of Mount Tamalpais. We are always happy to answer dietary questions, discuss private event buyouts, or help you find our door.
        </p>
      </div>

      {/* Main Grid: Details + Map + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Contact info & Hours */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Info Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DDCF] shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#E7DDCF] pb-4">
              <div>
                <span className="font-script text-lg text-[#B85433] block">Direct Contact</span>
                <h3 className="font-serif text-2xl font-semibold text-[#2A2521]">Reach Our Team</h3>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-[#D3C0A6] bg-[#FAF7F2]">
                <span className={`w-2 h-2 rounded-full ${isCurrentlyOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`} />
                <span>{isCurrentlyOpen ? 'Open Tonight' : 'Kitchen Opens 5 PM'}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B85433] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2A2521] block">Terra & Hearth Kitchen</strong>
                  <p className="text-[#5C554F]">{RESTAURANT_INFO.address.street}</p>
                  <p className="text-[#5C554F]">{RESTAURANT_INFO.address.district}</p>
                  <p className="text-[#5C554F]">{RESTAURANT_INFO.address.city}</p>
                  <a
                    href={RESTAURANT_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#B85433] hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Phone className="w-5 h-5 text-[#556B4E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2A2521] block">Phone Reservations & Inquiries</strong>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#5C554F] hover:text-[#B85433]">
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#8A8179]">Phones answered Tuesday–Sunday from 1:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Mail className="w-5 h-5 text-[#556B4E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2A2521] block">Email Correspondence</strong>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#5C554F] hover:text-[#B85433]">
                    {RESTAURANT_INFO.email}
                  </a>
                  <p className="text-xs text-[#8A8179]">Private dining: {RESTAURANT_INFO.privateEventsEmail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="bg-[#F4EFE6] rounded-3xl p-6 sm:p-8 border border-[#E7DDCF] shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#B85433]" />
              <h3 className="font-serif text-2xl font-semibold text-[#2A2521]">Service Schedule</h3>
            </div>

            <div className="space-y-3 text-sm">
              {RESTAURANT_INFO.hours.map((h, i) => (
                <div key={i} className="border-b border-[#E7DDCF] pb-2.5 last:border-0">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-[#2A2521]">{h.days}</span>
                    <span className="text-[#B85433] font-bold">{h.dinner}</span>
                  </div>
                  <p className="text-xs text-[#5C554F] mt-0.5">{h.notes}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservationModal}
                className="w-full bg-[#B85433] hover:bg-[#994127] text-white py-3 rounded-xl text-sm font-medium transition-all shadow-xs"
              >
                Book a Table for Tonight
              </button>
            </div>
          </div>

          {/* Parking & Transit Tips */}
          <div className="bg-white rounded-3xl p-6 border border-[#E7DDCF] space-y-3 text-xs text-[#5C554F]">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#2A2521]">
              <Car className="w-4 h-4 text-[#556B4E]" />
              <span>Arrival & Parking Information</span>
            </div>
            <p>
              <strong>Complimentary Valet:</strong> Available Friday and Saturday evenings from 5:00 PM at our front portico.
            </p>
            <p>
              <strong>Street Parking:</strong> 2-hour parking along Hearthstone Way and Sunnyside Ave (free after 6:00 PM).
            </p>
            <p>
              <strong>Ride Share:</strong> Dedicated passenger drop-off bay directly facing our garden gates.
            </p>
          </div>
        </div>

        {/* Right Column: Embedded Map & Interactive Message Form */}
        <div className="lg:col-span-7 space-y-8">
          {/* Map Display */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E7DDCF] shadow-md">
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E7DDCF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#B85433]" />
                <span className="font-medium text-xs text-[#2A2521]">Interactive Neighborhood Map</span>
              </div>
              <a
                href={RESTAURANT_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#B85433] hover:underline flex items-center gap-1"
              >
                <span>Get Turn-by-Turn Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="h-80 w-full relative">
              <iframe
                title="Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50364.55160074218!2d-122.5654924!3d37.9060371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a850117ec83%3A0x6b6cfa4db90ad9d4!2sMill%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Interactive Message / Inquiry Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DDCF] shadow-xs">
            <div className="space-y-1 mb-6">
              <span className="font-script text-lg text-[#B85433]">Send a Note</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2521]">
                Get in Touch with Our Hearth
              </h3>
              <p className="text-xs text-[#5C554F]">
                Have a question about dietary accommodations, event buyouts, or press requests? Send us a message and our host will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3 bg-[#FAF7F2] border border-[#E7DDCF] rounded-2xl p-6">
                <CheckCircle2 className="w-10 h-10 text-[#556B4E] mx-auto" />
                <h4 className="font-serif text-2xl font-semibold text-[#2A2521]">
                  Message Received
                </h4>
                <p className="text-xs text-[#5C554F] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your note regarding <em>"{formData.topic}"</em> has been forwarded to our management team. We will write to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' });
                  }}
                  className="mt-2 text-xs font-semibold text-[#B85433] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Green"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="samuel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(415) 555-0144"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                      Topic of Inquiry
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Private Event Buyout">Private Event / Buyout Inquiry</option>
                      <option value="Dietary Questions">Dietary & Allergen Accommodations</option>
                      <option value="Wine Cellar Bottles">Wine Cellar Consultation</option>
                      <option value="Press & Media">Press & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C554F] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#D3C0A6] rounded-xl text-sm focus:ring-1 focus:ring-[#B85433] focus:border-[#B85433]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#B85433] hover:bg-[#994127] text-white px-8 py-3 rounded-xl text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
