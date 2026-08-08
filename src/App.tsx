import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import DentistsSection from './components/DentistsSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const handleOpenBooking = () => {
    setSelectedTreatment('');
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedTreatment(serviceName);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-4">
            {/* Primary conversion hero */}
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onNavigateToServices={() => setCurrentPage('services')}
            />

            {/* Quick Service previews with filter selectors */}
            <div className="bg-slate-50/50 py-12 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 text-center space-y-4 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full font-bold">Comprehensive Care</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 leading-tight">Interactive Dental Care</h3>
                <p className="text-xs text-slate-400 max-w-lg mx-auto font-medium">
                  Select key capabilities below to preview treatment guidelines, check duration estimates, and request secure slots immediately.
                </p>
              </div>
              <ServicesSection onSelectService={handleSelectServiceForBooking} />
            </div>

            {/* Transformations and Case Previews */}
            <BeforeAfterGallery />

            {/* Brief Medical Team introduction container */}
            <div className="bg-slate-50/50 py-12 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center space-y-3 pb-8">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full font-bold">Leading Clinicians</span>
                  </div>
                  <p className="text-xl font-bold text-slate-850">Operated by Academic Experts</p>
                </div>
                <DentistsSection onSelectDentist={handleSelectServiceForBooking} />
              </div>
            </div>

            {/* Direct testimonials widget */}
            <TestimonialsSection />

            {/* Scientific blog editorial previews for local authority */}
            <div className="bg-white py-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center space-y-3 pb-8">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full font-bold">Oral Education</span>
                  </div>
                  <p className="text-xl font-bold text-slate-850">Learn Tips From Lead Doctors</p>
                </div>
                <BlogSection onSuggestTreatment={handleSelectServiceForBooking} />
              </div>
            </div>

            {/* GPS alignment coordinates contact panels */}
            <ContactSection />
          </div>
        );

      case 'services':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <ServicesSection onSelectService={handleSelectServiceForBooking} />

            {/* Core Blog Tips segment in services to add local authority detail */}
            <div className="bg-slate-50/50 py-12 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center space-y-3 pb-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full font-bold font-mono">Healthy Habits Guide</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-850">Expert Tips on Maintaining Enamel</h4>
                </div>
                <BlogSection onSuggestTreatment={handleSelectServiceForBooking} />
              </div>
            </div>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AboutSection onNavigateToDentists={() => {
              setCurrentPage('dentists');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
          </motion.div>
        );

      case 'dentists':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <DentistsSection onSelectDentist={handleSelectServiceForBooking} />
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BeforeAfterGallery />
          </motion.div>
        );

      case 'testimonials':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TestimonialsSection />
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ContactSection />
          </motion.div>
        );

      case 'booking':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookingSection initialTreatment={selectedTreatment} />
          </motion.div>
        );

      default:
        return <div className="text-center py-20 text-xs font-mono text-slate-400">Rendering Clinical Area...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-blue-600/10 selection:text-blue-700">
      <div>
        {/* Dynamic header navigation bar */}
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onOpenBooking={handleOpenBooking}
        />

        {/* Content View with structured animation boundaries */}
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {renderActiveView()}
          </AnimatePresence>
        </main>
      </div>

      {/* Structured Google-verified footer coordinates */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating active helper channels (WhatsApp & sticky scheduling widgets) */}
      <FloatingWidgets onOpenBooking={handleOpenBooking} />
    </div>
  );
}
