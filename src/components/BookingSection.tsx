import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, FileText, CheckCircle2, ClipboardList, MessageSquare, ArrowRight, User, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/dentalData';
import { AppointmentFormInput, AppointmentRecord } from '../types';

interface BookingSectionProps {
  initialTreatment?: string;
}

export default function BookingSection({ initialTreatment = '' }: BookingSectionProps) {
  const [formData, setFormData] = useState<AppointmentFormInput>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    treatmentRequired: initialTreatment || '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createdRecord, setCreatedRecord] = useState<AppointmentRecord | null>(null);
  const [myBookings, setMyBookings] = useState<AppointmentRecord[]>([]);

  // Keep state sync with external selected treatment updates
  useEffect(() => {
    if (initialTreatment) {
      setFormData(prev => ({ ...prev, treatmentRequired: initialTreatment }));
    }
  }, [initialTreatment]);

  // Load existing personal bookings from localStorage
  useEffect(() => {
    const records = localStorage.getItem('smilecare_appointments');
    if (records) {
      try {
        setMyBookings(JSON.parse(records));
      } catch (e) {
        console.error('Error parsing dental records', e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      treatmentRequired: '',
      message: ''
    });
    setIsSubmitted(false);
    setCreatedRecord(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      alert("Please complete all required fields (*).");
      return;
    }

    const newRecord: AppointmentRecord = {
      id: 'apt-' + Date.now(),
      ...formData,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    const updatedBookings = [newRecord, ...myBookings];
    localStorage.setItem('smilecare_appointments', JSON.stringify(updatedBookings));
    setMyBookings(updatedBookings);
    setCreatedRecord(newRecord);
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!createdRecord) return;
    
    const textMsg = `Hello! I would like to book a dental appointment. Here are my details:
- Name: ${createdRecord.name}
- Phone: ${createdRecord.phone}
- Email: ${createdRecord.email || 'N/A'}
- Treatment: ${createdRecord.treatmentRequired || 'General Consultation'}
- Preferred Date: ${createdRecord.preferredDate}
- Preferred Time: ${createdRecord.preferredTime}
- Message: ${createdRecord.message || 'No additional comments'}`;

    const textEncoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/15550199922?text=${textEncoded}`, '_blank');
  };

  const handleDeleteBooking = (id: string) => {
    const updated = myBookings.filter(b => b.id !== id);
    localStorage.setItem('smilecare_appointments', JSON.stringify(updated));
    setMyBookings(updated);
  };

  return (
    <section className="py-20 bg-brand-warm/30 border-t border-brand-gold/15 animate-fade-in" id="booking-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FAF6F0] bg-brand-red px-3.5 py-1.5 rounded-full border border-red-800 shadow-md">🔔 Clinical Reservations Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">Schedule Your Dental Appointment</h2>
          <p className="text-xs text-slate-600 max-w-lg mx-auto font-medium">
            Fill out our secure medical scheduling questionnaire. A dedicated clinical scheduling coordinator will contact you immediately to lock in your preferred time slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Booking Form Card -- Col Span 7 */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand-gold/20 shadow-xl shadow-brand-blue/5">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form header details */}
                <div className="border-b border-brand-gold/20 pb-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-brand-blue">Quick Patient Reservation Form</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Fields indicated with an asterisk (*) are required to process clinical scheduling.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-brand-blue flex items-center justify-between">
                      <span>Full Name *</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Gabriella Vance"
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 font-extrabold"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-brand-blue flex items-center justify-between">
                      <span>Phone Number *</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. (555) 019-9922"
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 font-extrabold"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-brand-blue flex items-center justify-between">
                      <span>Email Address</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-brand-gold" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. patient@example.com"
                        className="w-full pl-11 pr-4 py-2.5 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 font-extrabold"
                      />
                    </div>
                  </div>

                  {/* Treatment dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-brand-blue">Select Treatment</label>
                    <div className="relative">
                      <DropIcon className="absolute right-3.5 top-3.5 w-4 h-4 text-brand-gold pointer-events-none" />
                      <select
                        name="treatmentRequired"
                        value={formData.treatmentRequired}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 font-extrabold appearance-none cursor-pointer"
                      >
                        <option value="">Select Treatment</option>
                        {SERVICES.map((serv) => (
                          <option key={serv.id} value={serv.name}>{serv.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-brand-blue">Preferred Date *</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 cursor-pointer font-extrabold"
                      />
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-black text-brand-blue">Preferred Time Slot *</label>
                    <div className="relative font-sans">
                      <DropIcon className="absolute right-3.5 top-3.5 w-4 h-4 text-brand-gold pointer-events-none" />
                      <select
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 cursor-pointer font-extrabold appearance-none"
                      >
                        <option value="">Choose a time...</option>
                        <option value="09:00 AM">09:00 AM - Morning Slot</option>
                        <option value="10:30 AM">10:30 AM - Morning Slot</option>
                        <option value="12:00 PM">12:00 PM - Mid-Day Slot</option>
                        <option value="02:00 PM">02:00 PM - Afternoon Slot</option>
                        <option value="04:30 PM">04:30 PM - Afternoon Slot</option>
                        <option value="05:30 PM">05:30 PM - Late Priority Slot</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black text-brand-blue">Symptoms & Explanations</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe any specific tooth concerns or expectations..."
                    className="w-full p-4 bg-[#FAF6F0]/30 border-2 border-brand-gold/15 rounded-xl text-xs outline-none focus:border-brand-gold focus:bg-white transition-all text-slate-800 resize-none font-extrabold"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="submit-appointment-form"
                  className="w-full bg-brand-red text-white py-3.5 rounded-xl font-black shadow-lg shadow-brand-red/10 hover:bg-slate-900 border-b-4 border-red-950 transition-all cursor-pointer text-xs uppercase tracking-wider"
                >
                  Send Reservation Request
                </button>

              </form>
            ) : (
              /* Submission Success view */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 space-y-6"
              >
                <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto border-2 border-brand-gold/30">
                  <span className="material-symbols-outlined text-3xl font-bold">verified</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-brand-blue leading-tight">Request Logged Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-semibold">
                    We have verified your request parameters. To receive immediate SMS sync and lock in the dentist, please dispatch the parameters using link below.
                  </p>
                </div>

                {/* Recap card */}
                <div className="bg-[#FAF6F0]/60 p-6 rounded-2xl border-2 border-brand-gold/25 max-w-sm mx-auto text-left space-y-3.5 shadow-md font-sans">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-gold block uppercase tracking-wider">Patient Name</span>
                    <p className="text-xs font-black text-slate-800">{createdRecord?.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-gold block uppercase tracking-wider">Date</span>
                      <p className="font-extrabold text-xs text-slate-700">{createdRecord?.preferredDate}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-gold block uppercase tracking-wider">Time</span>
                      <p className="font-extrabold text-xs text-slate-700">{createdRecord?.preferredTime}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-gold block uppercase tracking-wider">Treatment Requested</span>
                    <p className="text-[10px] font-black text-white bg-brand-blue px-3 py-1.5 rounded-lg inline-block border border-brand-gold/30 mt-1 uppercase tracking-wider">
                      {createdRecord?.treatmentRequired || 'General Assessment'}
                    </p>
                  </div>
                </div>

                {/* Dynamic WhatsApp Submission Block */}
                <div className="pt-4 border-t border-brand-gold/15 max-w-md mx-auto space-y-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    id="booking-whatsapp-dispatch"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-black shadow-lg shadow-green-100 hover:bg-green-700 transition-all hover:scale-103 border-b-4 border-green-950 cursor-pointer text-xs uppercase tracking-wider"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                    <span>Dispatch to Clinical desk</span>
                  </button>

                  <button
                    onClick={handleClearForm}
                    className="w-full text-center text-[10px] font-black text-brand-gold hover:text-brand-blue uppercase tracking-widest mt-2 block"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Persistent client's appointment list -- Col Span 5 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* New Client Special Offer Badge */}
            <div className="bg-gradient-to-br from-brand-red to-red-950 rounded-3xl p-6 text-white relative overflow-hidden border-2 border-brand-gold/40 shadow-xl shadow-brand-red/15">
              <div className="relative z-10 font-sans">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">New Patient Special</div>
                <div className="text-4xl font-extrabold text-brand-gold">50% OFF</div>
                <div className="text-xs font-semibold text-slate-100 mt-1 leading-relaxed">Initial complete diagnostic CBCT scans & deep cleaning</div>
              </div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-8 -mb-8 pointer-events-none"></div>
            </div>

            {/* Trust Shield Card */}
            <div className="bg-white border-2 border-brand-gold/20 p-6 rounded-3xl space-y-4 shadow-sm">
              <span className="text-[9px] font-mono tracking-widest uppercase text-brand-blue font-black bg-brand-gold/15 px-3 py-1 rounded inline-block border border-brand-gold/25">Security Protocol</span>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F1D3A]">Our Zero-Fear clinical commitment:</h4>
              
              <ul className="space-y-3 text-xs text-slate-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-brand-red text-sm mt-0.5 font-bold">verified</span>
                  <span><strong>100% Free Consultation:</strong> Diagnostics, digital previews, and treatment layout mapping are initial non-binding services.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-brand-red text-sm mt-0.5 font-bold">verified</span>
                  <span><strong>Instant Rescheduling:</strong> Modify or reschedule slots up to 12 hours prior without any fee liabilities.</span>
                </li>
              </ul>
            </div>

            {/* Browser saved bookings */}
            <div className="bg-[#FAF6F0] border-2 border-brand-gold/25 rounded-3xl p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-brand-blue border-b border-brand-gold/15 pb-3 justify-between">
                <div className="flex items-center gap-1.5">
                  <ClipboardList className="w-4.5 h-4.5 text-brand-red" />
                  <h4 className="text-xs font-black uppercase tracking-wider">My Appointments ({myBookings.length})</h4>
                </div>
              </div>

              {myBookings.length === 0 ? (
                <div className="text-center py-6 text-slate-400 text-xs font-mono font-bold">
                  No appointments registered in this browser session.
                </div>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {myBookings.map((bk) => (
                    <div
                      key={bk.id}
                      className="bg-white p-3.5 rounded-xl border-2 border-brand-gold/15 shadow-sm flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-1 bg-white">
                        <span className="text-[9px] font-mono bg-brand-blue text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded font-black max-w-fit inline-block">
                          ★ Local Record
                        </span>
                        <h5 className="text-xs font-extrabold text-brand-blue leading-none pt-1">{bk.treatmentRequired || 'General Consultation'}</h5>
                        <p className="text-[10px] font-mono text-slate-500 font-bold">
                          {bk.preferredDate} at {bk.preferredTime}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400 font-bold">Patient: {bk.name}</p>
                      </div>

                      <button
                        onClick={() => handleDeleteBooking(bk.id)}
                        id={`delete-booking-${bk.id}`}
                        className="p-1.5 text-slate-400 hover:text-brand-red hover:bg-[#FAF6F0] rounded-lg transition-all cursor-pointer shrink-0 mt-0.5 border border-transparent hover:border-brand-gold/15"
                        title="Delete record from your local device browser"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Simple Dropdown Assist Icon
function DropIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
