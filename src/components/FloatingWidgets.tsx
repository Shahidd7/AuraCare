import { MessageSquare, Calendar, Phone, Activity, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface FloatingWidgetsProps {
  onOpenBooking: () => void;
}

export default function FloatingWidgets({ onOpenBooking }: FloatingWidgetsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // We only show these widgets after scrolling past hero section for optimal layout elegance
    const handleScrollVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleWhatsAppChat = () => {
    const textMessage = encodeURIComponent("Hello, I would like to book a dental appointment.");
    window.open(`https://wa.me/15550199922?text=${textMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Sticky/Floating Phone Call Link for Mobile patients */}
            <motion.a
              href="tel:+15550199922"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#0F1D3A] border-2 border-brand-gold/35 text-brand-gold flex items-center justify-center hover:bg-slate-800 shadow-xl transition-all cursor-pointer block sm:hidden hover:scale-105"
              title="Call Primary Desk Call Desk"
            >
              <Phone className="w-5 h-5 text-brand-gold" />
            </motion.a>

            {/* Sticky Book Appointment Panel */}
            <motion.button
              onClick={onOpenBooking}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              id="sticky-book-btn"
              className="pointer-events-auto bg-brand-red border-2 border-brand-gold/30 text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-red-800 shadow-2xl transition-all cursor-pointer font-sans font-black text-xs hover:scale-105"
            >
              <Calendar className="w-4.5 h-4.5 text-brand-gold" />
              <span>Book Appointment</span>
            </motion.button>

            {/* Floating WhatsApp Quick Action Button */}
            <motion.button
              onClick={handleWhatsAppChat}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              id="floating-whatsapp-btn"
              className="pointer-events-auto bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-full flex items-center gap-2 hover:indigo shadow-2xl transition-all cursor-pointer font-sans font-extrabold text-xs animate-bounce"
              title="Start WhatsApp Consultation"
            >
              <MessageSquare className="w-5 h-5 text-emerald-150" />
              <span>WhatsApp Us</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
