import { useState } from 'react';
import { Sparkles, Smile, Shield, Activity, Flame, Layers, Heart, HeartPulse, Clock, HelpCircle, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/dentalData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'general', label: 'General / Preventive' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'orthodontics', label: 'Orthodontics / Braces' },
    { id: 'surgical', label: 'Oral Surgery & Implants' },
    { id: 'pediatric', label: 'Pediatric Care' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500 animate-bounce" />;
      case 'Smile': return <Smile className="w-5 h-5 text-emerald-500" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#3F51B5]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-brand-red" />;
      case 'FlameKindling': return <Flame className="w-5 h-5 text-orange-500 animate-pulse" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-500" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-brand-red animate-pulse" />;
      default: return <Smile className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAF9F5]/40" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FAF6F0] bg-brand-red px-4 py-2 rounded-full border border-red-800 shadow-md">⭐ Elite Specialities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">Vibrant Oral & Cosmetic Dental Solutions</h2>
          <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
            From basic dental hygiene scans to premium restorative bio-implants and spectacular American smile makeovers. Enjoy complete luxury, pain-free therapies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 border-brand-gold'
                  : 'bg-white border-brand-gold/15 text-slate-700 hover:text-brand-red hover:bg-[#FAF6F0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isExpanded = expandedCardId === service.id;
              const isEmergency = service.id === 'emergency-dentistry';
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  className={`bg-white rounded-3xl border-2 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 ${
                    isEmergency
                      ? 'border-brand-red bg-red-50/10'
                      : 'border-brand-gold/15'
                  }`}
                >
                  <div className="p-6 space-y-5">
                    {/* Top Row: Icon & Category Label */}
                    <div className="flex justify-between items-start">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${
                        isEmergency
                          ? 'bg-brand-red/10 text-brand-red border-brand-red/30'
                          : 'bg-[#FAF6F0] text-brand-blue border-brand-gold/25'
                      }`}>
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className={`text-[9.5px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded inline-block border ${
                        service.category === 'general' ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]' :
                        service.category === 'cosmetic' ? 'bg-[#FFF8E1] text-[#F57F17] border-[#FFECB3]' :
                        service.category === 'orthodontics' ? 'bg-[#E8EAF6] text-[#3F51B5] border-[#C5CAE9]' :
                        service.category === 'pediatric' ? 'bg-[#E0F7FA] text-[#00838F] border-[#B2EBF2]' :
                        'bg-[#FFEBEE] text-brand-red border-[#FFCDD2]'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    {/* Main Title & Short Description */}
                    <div className="space-y-1">
                      <h3 className="text-base font-extrabold text-brand-blue tracking-tight leading-tight">{service.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">{service.shortDescription}</p>
                    </div>

                    {/* Meta Indicators */}
                    <div className="flex items-center gap-4 text-[10px] font-mono text-[#0F1D3A] bg-[#FAF6F0] p-2.5 rounded-xl border border-brand-gold/20">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span className="font-bold">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 overflow-hidden">
                        <HelpCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="truncate max-w-[120px] font-bold">{service.suitability}</span>
                      </div>
                    </div>

                    {/* Expandable Benefits Section */}
                    <div className="pt-1">
                      <button
                        onClick={() => setExpandedCardId(isExpanded ? null : service.id)}
                        className="text-[10px] font-black uppercase tracking-wider text-brand-red hover:text-red-700 flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Core Benefits'}</span>
                        <span className="material-symbols-outlined text-[12px] font-bold">{isExpanded ? 'expand_less' : 'expand_more'}</span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-4 space-y-3 overflow-hidden"
                          >
                            <p className="text-xs text-[#0F1D3A] leading-relaxed italic border-l-2 border-brand-gold pl-2 bg-[#FAF6F0]/60 p-2 rounded-r-lg">
                              {service.fullDescription}
                            </p>
                            <div className="space-y-2">
                              <h5 className="text-[9px] font-mono uppercase font-bold text-brand-gold tracking-widest">Key Outcomes:</h5>
                              <ul className="space-y-1.5">
                                {service.benefits.map((benefit, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-snug font-medium">
                                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="p-6 border-t border-brand-gold/15 bg-[#FAF6F0]/40">
                    <button
                      id={`book-service-${service.id}`}
                      onClick={() => onSelectService(service.name)}
                      className={`w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all hover:scale-103 cursor-pointer uppercase tracking-wider ${
                        isEmergency
                          ? 'bg-brand-red hover:bg-red-700 text-white shadow-lg shadow-brand-red/20 border-b-4 border-red-900 animate-pulse'
                          : 'bg-brand-blue text-white hover:bg-slate-900 shadow-lg shadow-brand-blue/15 border-b-4 border-slate-950'
                      }`}
                    >
                      <span>Secure Treatment Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
