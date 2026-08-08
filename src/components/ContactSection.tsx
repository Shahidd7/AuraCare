import { MapPin, Phone, Mail, Clock, ShieldAlert, Navigation, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [copiedState, setCopiedState] = useState(false);

  const contactInfos = [
    {
      id: 'c1',
      icon: <MapPin className="w-4 h-4 text-blue-600" />,
      title: 'Physical Address',
      lines: [
        'AuraCare Clinical Tower',
        '450 Medical Plaza Dr., Suite 200',
        'San Francisco, CA 94115'
      ],
      actionLabel: 'Copy Address',
      action: () => {
        navigator.clipboard.writeText('450 Medical Plaza Dr., Suite 200, San Francisco, CA 94115');
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2000);
      }
    },
    {
      id: 'c2',
      icon: <Phone className="w-4 h-4 text-blue-600" />,
      title: 'Phone Priorities',
      lines: [
        'Main Desk: (555) 019-9922',
        'Urgent Line: (555) 019-9920',
        'Fax Server: (555) 019-9921'
      ],
      actionLabel: 'Call Reception',
      action: () => {
        window.open('tel:+15550199922');
      }
    },
    {
      id: 'c3',
      icon: <Mail className="w-4 h-4 text-blue-600" />,
      title: 'Clinical Mailbox',
      lines: [
        'Scheduling: schedule@auracaredental.com',
        'Inquiries: care@auracaredental.com',
        'Billing: finance@auracaredental.com'
      ],
      actionLabel: 'Send Inquiry',
      action: () => {
        window.open('mailto:care@auracaredental.com?subject=Dental Inquiry');
      }
    }
  ];

  const timings = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM', status: 'Full Operations' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', status: 'Full Operations' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', status: 'Full Operations' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM', status: 'Full Operations' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM', status: 'Full Operations' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM', status: 'Morning Priority' },
    { day: 'Sunday', hours: 'Closed', status: 'Emergency On-Call Only' }
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">Find Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Our Clinic Locations & Operating Hours</h2>
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
            Our diagnostic tower is situated at the epicenter of the San Francisco Medical Plaza with ample underground parking, structural accessibility ramps, and local transport networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Cards -- Col Span 7 */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Quick Informational Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactInfos.map((info) => (
                <div
                  key={info.id}
                  className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{info.title}</h4>
                      <div className="space-y-1">
                        {info.lines.map((line, lIdx) => (
                          <p key={lIdx} className="text-[10px] text-slate-450 font-mono leading-tight">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={info.action}
                    id={`contact-action-${info.id}`}
                    className="w-full mt-6 py-2 bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-mono font-bold rounded-lg hover:border-blue-200 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {info.id === 'c1' && copiedState ? (
                      <span className="flex items-center justify-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>Copied Address!</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5">
                        {info.id === 'c1' ? <Copy className="w-3 h-3" /> : <Navigation className="w-3 h-3" />}
                        <span>{info.actionLabel}</span>
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Custom Google Map Simulated Interactive Element */}
            <div className="relative aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <iframe
                title="SmileCare Dental Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2843075211933!2d-122.433246324213!3d37.78453477198305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580bbfec29381%3A0xb351e60f08be2d5!2sMedical%20Plaza!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-85 group-hover:grayscale-0 transition-all duration-500"
              ></iframe>

              {/* Floating Address Bar overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <h5 className="text-[9px] font-mono font-bold text-slate-450 uppercase tracking-wider">Interactive Map</h5>
                  <p className="text-xs font-bold text-slate-850 mt-0.5">AuraCare Clinic Tower - Suite 200</p>
                </div>
                <a
                  href="https://maps.google.com/?q=450+Medical+Plaza+Dr,+San+Francisco,+CA"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[9px] font-mono font-bold tracking-widest shadow-md transition-colors uppercase"
                >
                  GPS Map
                </a>
              </div>
            </div>

          </div>

          {/* Timings Sidebar List -- Col Span 5 */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100/40 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Clinic Timings Schedule
                </h3>
                <p className="text-xs text-slate-500 mt-1">Our hospital maintains precise administrative timings but accepts urgent dental emergencies 24/7 on priority queues.</p>
              </div>

              {/* Timing Slots */}
              <div className="space-y-3 font-sans">
                {timings.map((t) => (
                  <div
                    key={t.day}
                    className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0 text-xs text-slate-700 font-sans"
                  >
                    <span className="font-bold text-slate-800">{t.day}</span>
                    <div className="text-right space-y-0.5">
                      <p className="font-mono text-xs text-slate-900 font-extrabold">{t.hours}</p>
                      <p className={`text-[9px] font-mono font-medium ${
                        t.day === 'Sunday' ? 'text-red-600 font-bold' : 'text-slate-450'
                      }`}>{t.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Hotline segment */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="p-4 bg-red-50/50 border border-red-100 rounded-2xl flex gap-3.5">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl h-10 w-10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-red-900 font-mono uppercase tracking-widest">24x7 Emergency Line</h4>
                  <p className="text-xs text-red-700 mt-1 leading-snug font-sans">
                    Are you experiencing severe swelling, uncontrollable bleeding, or severe dental pain? Call our critical care team immediately.
                  </p>
                  <a
                    href="tel:+15550199920"
                    id="contact-urgent-phone-cta"
                    className="inline-block mt-3 text-xs font-bold text-red-950 hover:text-red-900 hover:underline uppercase tracking-wider"
                  >
                    Call: (555) 019-9920
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
