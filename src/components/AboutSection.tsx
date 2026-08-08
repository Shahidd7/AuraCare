import { ShieldCheck, Heart, Stethoscope, Microscope, Zap, ClipboardCheck } from 'lucide-react';
import { FACILITIES } from '../data/dentalData';

interface AboutSectionProps {
  onNavigateToDentists: () => void;
}

export default function AboutSection({ onNavigateToDentists }: AboutSectionProps) {
  const values = [
    {
      id: 'val-1',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Safety & Autoclave Perfection',
      desc: 'We follow absolute hospital-grade autoclave sterilization matching strict ADA standards.'
    },
    {
      id: 'val-2',
      icon: <Heart className="w-5 h-5 text-brand-red" />,
      title: 'Dental Fear Elimination',
      desc: 'Through gentle computer-guided anesthetics, we completely eradicate treatment anxieties.'
    },
    {
      id: 'val-3',
      icon: <Stethoscope className="w-5 h-5 text-brand-blue" />,
      title: 'Tooth Structure Preservation',
      desc: 'Our clinicians prioritize conservative micro-treatments to rescue and keep your natural enamel.'
    },
    {
      id: 'val-4',
      icon: <ClipboardCheck className="w-4.5 h-4.5 text-brand-gold" />,
      title: 'Pre-Fee Transparency',
      desc: 'Get absolute digital invoices with pre-approved insurance alignments. Zero hidden costs.'
    }
  ];

  return (
    <section className="bg-brand-warm/60 py-20 border-y border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Clinic Photo Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-2 border-brand-gold/30 bg-white p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/src/assets/images/clinic_interior_1780931165466.png"
                  alt="AuraCare Dental Hospital Operating Suite"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-2 bg-slate-900/5 mix-blend-multiply rounded-2xl pointer-events-none"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-blue/95 border border-brand-gold/20 text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red text-white rounded-xl flex items-center justify-center shrink-0 border border-brand-gold/25">
                  <span className="material-symbols-outlined text-white text-lg">microscope</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white tracking-wide">Surgically Clean HEPA Rooms</h5>
                  <p className="text-[10px] text-brand-gold font-bold uppercase tracking-wider mt-0.5">HEPA Negative-Pressure cycles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Story & Mission Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0F1D3A] bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1.5 rounded-full">Our Medical Identity</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight leading-tight">
              Pristine Dental Medicine Guided by Artistry and Empathy
            </h2>
            
            <p className="text-slate-700 text-sm leading-relaxed font-sans font-medium">
              AuraCare Dental Group was established to dismantle the old, painful paradigms of standard dentistry. We bring together highly distinguished medical scholars equipped with high-resolution digital scanning suites to secure comprehensive oral health.
            </p>

            <div className="pt-4 border-t border-brand-gold/25">
              <h4 className="text-xs font-bold uppercase text-brand-gold tracking-widest mb-4 font-mono">Our Core Clinic Commitments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((val) => (
                  <div key={val.id} className="flex gap-3">
                    <div className="mt-0.5 shrink-0 bg-white p-2 rounded-xl border border-brand-gold/20 shadow-sm flex items-center justify-center h-9 w-9">
                      {val.icon}
                    </div>
                    <div>
                      <h5 className="text-xs font-extrabold text-brand-blue uppercase tracking-wide">{val.title}</h5>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                id="about-meet-dentists-cta"
                onClick={onNavigateToDentists}
                className="inline-flex items-center gap-1 text-xs font-black text-brand-red hover:text-red-700 transition-all cursor-pointer uppercase tracking-widest"
              >
                <span>Meet Our Medical Advisory Board</span>
                <span className="material-symbols-outlined text-xs font-bold">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic Medical Instruments Showcase */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-white bg-brand-red border border-red-800 px-3.5 py-1.5 rounded-full uppercase tracking-widest">Aesthetic & Surgical Technology</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F1D3A]">State-of-the-Art Clinical Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
              We constantly invest in cutting-edge diagnostic gear that keeps radiographic scans quick, therapies painless, and results completely predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {FACILITIES.map((fac) => {
              return (
                <div
                  key={fac.id}
                  className="bg-white p-6 rounded-2xl border-2 border-brand-gold/15 relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-brand-red/5 text-brand-red rounded-xl flex items-center justify-center border border-brand-red/20">
                      <span className="material-symbols-outlined text-brand-red text-lg font-bold">medical_services</span>
                    </div>
                    <h4 className="font-extrabold text-xs text-brand-blue tracking-tight leading-tight uppercase tracking-wider">{fac.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">{fac.description}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-widest mt-6 block">★ Tech Guarantee</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
