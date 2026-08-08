import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, HeartPulse, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth shadow emergence on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'dentists', label: 'Our Dentists' },
    { id: 'gallery', label: 'Transformations' },
    { id: 'testimonials', label: 'Reviews & FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppChat = () => {
    const textMessage = encodeURIComponent("Hello, I would like to book a dental appointment.");
    window.open(`https://wa.me/15550199922?text=${textMessage}`, '_blank');
  };

  return (
    <header className="w-full relative z-50">
      {/* Emergency & Trust Header Bar */}
      <div className="bg-brand-blue text-slate-100 py-2.5 px-4 text-xs font-sans tracking-wide border-b border-brand-gold/25">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-brand-red font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-red inline-block animate-pulse"></span>
            <span>24/7 Dental Emergency & Critical Care Response Group</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 border-r border-slate-800 pr-4 last:border-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
              Open Now: <strong className="text-white">9:00 AM - 6:00 PM</strong>
            </span>
            <span className="flex items-center gap-1 text-brand-gold font-bold">
              <span className="text-amber-400">★★★★★</span>
              <span>4.9 / 5.0 Google Reviews</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Premium Sticky Header */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-brand-warm/95 backdrop-blur-md shadow-lg shadow-brand-blue/5 py-3.5 border-brand-gold/15'
            : 'bg-brand-warm py-5 border-brand-gold/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand/Logo Design - AuraCare Dental Group */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-brand-blue flex items-center justify-center p-0.5 shadow-md group-hover:scale-105 group-hover:shadow-brand-red/30 transition-all duration-300 border-2 border-brand-gold shrink-0 overflow-hidden">
              <img
                src="/src/assets/images/auracare_logo_1786196713514.jpg"
                alt="AuraCare Dental Group Emblem Logo"
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl font-black tracking-tight text-brand-blue group-hover:text-brand-red transition-colors flex items-center">
                  AURACARE
                </h1>
                <span className="bg-brand-red text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm border border-red-800">
                  DENTAL
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-extrabold leading-none mt-1 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                Aesthetic & Family Specialists
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-white p-1 rounded-full border border-brand-gold/20 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4.5 py-1.5 rounded-full font-sans text-xs font-bold tracking-tight transition-all duration-200 relative ${
                  currentPage === item.id
                    ? 'text-white bg-brand-blue shadow-sm'
                    : 'text-slate-600 hover:text-brand-red hover:bg-[#FAF6F0]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-brand-red font-bold bg-brand-red/5 border border-brand-red/20 px-3.5 py-1.5 rounded-full">
              EMERGENCY: (555) 019-9922
            </span>
            <button
              id="header-booking-cta"
              onClick={onOpenBooking}
              className="bg-brand-red text-white border-b-2 border-red-800 px-6 py-2.5 rounded-full text-xs font-black shadow-lg shadow-brand-red/15 hover:bg-red-700 hover:shadow-xl hover:shadow-brand-red/25 transition-all scale-active cursor-pointer uppercase tracking-wider"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0F1D3A] hover:bg-white hover:text-brand-red transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Accordion Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-warm border-b border-brand-gold/20 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-black flex items-center justify-between ${
                    currentPage === item.id
                      ? 'text-[#0F1D3A] bg-white border-l-4 border-brand-red'
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs uppercase font-mono tracking-wider text-brand-gold font-bold">Section</span>
                </button>
              ))}

              <div className="pt-4 border-t border-brand-gold/10 flex flex-col gap-3">
                <button
                  id="mobile-whatsapp-cta"
                  onClick={handleWhatsAppChat}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-100" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  id="mobile-booking-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 bg-brand-red border-b-2 border-red-800 hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all uppercase tracking-wider text-xs"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Appointment Form</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
