import { Sparkles, Phone, Mail, MapPin, Clock, ShieldCheck, HeartPulse } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clinicSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "AuraCare Dental Group & Clinic",
    "image": "https://auracaredental.com/assets/logo.png",
    "@id": "https://auracaredental.com/#clinic",
    "url": "https://auracaredental.com",
    "telephone": "+15550199922",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "450 Medical Plaza Dr., Suite 200",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94115",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7845347,
      "longitude": -122.4332463
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  };

  return (
    <footer className="bg-[#0F1D3A] text-slate-300 font-sans text-xs pt-16 pb-12 border-t-4 border-brand-gold">
      
      {/* Dynamic structural JSON-LD schema injected natively */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand information module -- Col 4 */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center p-0.5 shadow-lg border-2 border-brand-gold group-hover:scale-105 transition-all shrink-0 overflow-hidden">
              <img
                src="/src/assets/images/auracare_logo_1786196713514.jpg"
                alt="AuraCare Dental Group Emblem Logo"
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-lg font-black font-sans text-white tracking-tight">
                  AURACARE
                </h2>
                <span className="bg-brand-red text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm border border-red-800">
                  DENTAL
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold leading-none mt-1">
                Aesthetic & Family Specialists
              </p>
            </div>
          </div>
          
          <p className="leading-relaxed text-slate-400 font-medium">
            An elite dental practice representing the ultimate convergence of state-of-the-art diagnostic biological scanners, computerized painless local anesthetics, and clinical excellence.
          </p>

          <div className="space-y-1.5 pt-2 font-mono text-[10px] text-brand-gold uppercase tracking-wider font-bold">
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-red" /> ADA Affiliated Member
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-red" /> HIPAA Secure Health Server
            </p>
          </div>
        </div>

        {/* Directory links module -- Col 2 */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-brand-gold font-bold text-xs tracking-widest uppercase font-mono">Directories</h4>
          <ul className="space-y-2.5 font-sans text-xs font-semibold">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-brand-gold transition-colors cursor-pointer text-slate-300">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-brand-gold transition-colors cursor-pointer text-slate-300">
                Dental Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="hover:text-brand-gold transition-colors cursor-pointer text-slate-300">
                Executive Story
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('dentists')} className="hover:text-brand-gold transition-colors cursor-pointer text-slate-300">
                Medical Board
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('gallery')} className="hover:text-brand-gold transition-colors cursor-pointer text-slate-300">
                Case Transform
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('testimonials')} className="hover:text-brand-gold transition-colors cursor-pointer text-slate-300">
                Patient Reviews
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Contact shortcuts module -- Col 3 */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-brand-gold font-bold text-xs tracking-widest uppercase font-mono">Channels</h4>
          
          <ul className="space-y-3 text-xs leading-relaxed font-sans text-slate-300 font-medium">
            <li className="flex gap-2.5">
              <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <span>450 Medical Plaza Dr., Suite 200, San Francisco, CA 94115</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <a href="tel:+15550199922" className="hover:text-brand-gold transition-colors font-extrabold">(555) 019-9922</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
              <a href="mailto:care@auracaredental.com" className="hover:text-brand-gold transition-colors font-semibold">care@auracaredental.com</a>
            </li>
          </ul>
        </div>

        {/* Operating status banner -- Col 3 */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-brand-gold font-bold text-xs tracking-widest uppercase font-mono">Schedules</h4>
          
          <div className="space-y-4 bg-[#0B152A] border border-brand-gold/15 p-5 rounded-2xl">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold animate-pulse" />
              <span className="text-white font-extrabold leading-none select-none uppercase tracking-wide">Administrative Timings</span>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-300 font-medium">
              Mon - Fri: 9:00 AM - 6:00 PM <br />
              Saturday: 9:00 AM - 3:00 PM <br />
              <strong className="text-brand-red uppercase font-mono tracking-widest text-[10px] flex items-center gap-1 mt-2.5 font-bold">
                <HeartPulse className="w-3.5 h-3.5 animate-pulse text-brand-red" /> Emergency Care: 24/7
              </strong>
            </p>
          </div>
        </div>

      </div>

      {/* Licensing details footer line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider font-bold">
        <p>© 2026 AuraCare Dental Group. State health council licensed.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-brand-gold">Privacy Policy</a>
          <span>•</span>
          <a href="#terms" className="hover:text-brand-gold">Terms of Care</a>
        </div>
      </div>

    </footer>
  );
}
