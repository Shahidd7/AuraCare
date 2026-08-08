import { ArrowRight, MessageSquare, Calendar, Star, Users, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import heroDentistImg from '../assets/images/hero_dentist_1780931147218.png';
import clinicInteriorImg from '../assets/images/clinic_interior_1780931165466.png';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigateToServices: () => void;
}

export default function HeroSection({ onOpenBooking, onNavigateToServices }: HeroSectionProps) {
  const handleWhatsAppChat = () => {
    const textMessage = encodeURIComponent("Hello, I would like to book a dental appointment.");
    window.open(`https://wa.me/15550199922?text=${textMessage}`, '_blank');
  };

  const trustMetrics = [
    {
      id: 'metric-1',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      value: '12,000+',
      label: 'Happy Patients Smile',
      subtext: 'Treated with absolute care'
    },
    {
      id: 'metric-2',
      icon: <Award className="w-5 h-5 text-blue-600" />,
      value: '15+ Years',
      label: 'Expert Experience',
      subtext: 'Dr. Jenkins & Specialists'
    },
    {
      id: 'metric-3',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      value: '99.4%',
      label: 'Satisfaction Rate',
      subtext: 'Flawless medical evaluations'
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-warm py-16 md:py-24">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-brand-warm border border-brand-gold/30 text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
              <span className="w-2 h-2 rounded-full bg-brand-red inline-block animate-pulse"></span>
              ⭐ Top-Rated Premium American Dental Facility ⭐
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-blue leading-tight max-w-2xl mx-auto lg:mx-0">
              Your Smile Deserves<br />
              <span className="text-brand-red">Vibrant Artistry</span> & <span className="text-brand-gold">Expert Care.</span>
            </h1>

            <p className="text-base text-slate-700 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold italic">
              Experience prestige oral healthcare with advanced interactive 3D imaging, extreme sterilization protocols, and a medical board dedicated to premium veteran & family dentistry.
            </p>

            {/* Core CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-book-cta"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-xl font-extrabold shadow-xl shadow-brand-red/20 border-b-4 border-red-800 hover:bg-red-700 transition-all hover:scale-105 cursor-pointer uppercase tracking-wider text-xs"
              >
                <span>Book Appointment Online</span>
                <span className="material-symbols-outlined text-sm opacity-90">arrow_forward</span>
              </button>
              
              <button
                id="hero-whatsapp-cta"
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00E676] text-brand-blue px-8 py-4 rounded-xl font-extrabold shadow-xl shadow-green-200/50 hover:bg-[#00c853] transition-colors cursor-pointer text-xs uppercase tracking-wider border-b-4 border-emerald-800"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </div>
                <span>Direct WhatsApp Chat</span>
              </button>
            </div>

            {/* Quick Badges / Trust Info */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-brand-blue font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 px-2 py-1 bg-white rounded border border-brand-gold/20">
                <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                In-Network Insurance Approved
              </span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-white rounded border border-brand-gold/20">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                Free Digital Pre-Assessment
              </span>
              <span className="flex items-center gap-1.5 px-2 py-1 bg-white rounded border border-brand-gold/20">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                Top Regional Dental Clinic
              </span>
            </div>
          </div>

          {/* Hero Digital Imagery Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md md:max-w-xl mx-auto aspect-square sm:aspect-auto sm:h-[460px] md:h-[500px]">
              
              {/* Outer decorative square border pattern */}
              <div className="absolute inset-x-0 inset-y-0 border-2 border-brand-gold/30 rounded-3xl transform rotate-2 pointer-events-none"></div>
              
              {/* Main Dentist Picture Card */}
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/10 transform -rotate-1 hover:rotate-0 transition-transform duration-500 border-2 border-brand-gold/30">
                <img
                  src={heroDentistImg}
                  alt="AuraCare Professional Dentist Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Glass Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-transparent text-white border-t border-brand-gold/25">
                  <span className="text-[10px] tracking-widest uppercase font-mono text-brand-gold font-bold">⭐ Verified Board Specialists</span>
                  <h4 className="text-lg font-black font-display mt-0.5">Dr. Sarah Johnson & Clinical Partners</h4>
                  <p className="text-xs text-slate-200 font-sans mt-0.5 font-medium">Academically Renowned Doctors Serving Families & VIP Clientele</p>
                </div>
              </div>

              {/* Smaller secondary picture card - Clinic Interiors */}
              <div className="absolute -bottom-6 -left-6 w-36 sm:w-48 aspect-[4/3] bg-white p-2 rounded-2xl shadow-2xl shadow-brand-blue/15 border-2 border-brand-gold/20 hidden sm:block transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={clinicInteriorImg}
                    alt="AuraCare state-of-the-art clinic equipment"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic & Colorful Statistics Grid */}
        <div className="mt-16 sm:mt-24 border-t-2 border-brand-gold/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-brand-blue text-white rounded-2xl border-b-4 border-brand-gold/80 flex flex-col justify-center shadow-lg transform hover:-translate-y-1 transition-all">
              <span className="text-xs text-brand-gold font-mono font-bold uppercase tracking-widest mb-1">Board Excellence</span>
              <div className="text-5xl font-black font-display">15+ Years</div>
              <div className="text-xs text-slate-300 font-bold uppercase tracking-widest mt-2">Serving Local Communities</div>
            </div>
            
            <div className="p-8 bg-brand-red text-white rounded-2xl border-b-4 border-red-900 flex flex-col justify-center shadow-lg transform hover:-translate-y-1 transition-all">
              <span className="text-xs text-white/80 font-mono font-bold uppercase tracking-widest mb-1">Satisfied Patients</span>
              <div className="text-5xl font-black font-display">12,000+</div>
              <div className="text-xs text-red-100 font-bold uppercase tracking-widest mt-2">Perfect Smiles Crafted</div>
            </div>

            <div className="p-8 bg-white text-brand-blue rounded-2xl border-2 border-brand-gold/40 border-b-4 border-brand-gold flex flex-col justify-center shadow-lg transform hover:-translate-y-1 transition-all">
              <span className="text-xs text-brand-gold font-mono font-bold uppercase tracking-widest mb-1">Clinical Success</span>
              <div className="text-5xl font-black font-display text-brand-blue">99.4%</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Verified Academic Standard</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
