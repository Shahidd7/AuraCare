import { Award, GraduationCap, Clock, Languages, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DENTISTS } from '../data/dentalData';

interface DentistsSectionProps {
  onSelectDentist: (dentistName: string) => void;
}

export default function DentistsSection({ onSelectDentist }: DentistsSectionProps) {
  return (
    <section className="py-20 bg-brand-warm/60 border-y border-brand-gold/15" id="dentists-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FAF6F0] bg-brand-red px-4 py-2 rounded-full border border-red-800 shadow-md">⭐ Board Certified Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">Meet Our Distinguished US Guild Clinicians</h2>
          <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
            Our practitioners are certified scholars of prestigious academic Ivy League frameworks, combining surgical level precision with deep, compassionate oral dental care.
          </p>
        </div>

        {/* Dentists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DENTISTS.map((dentist, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={dentist.id}
              className="bg-white rounded-3xl border-2 border-brand-gold/15 shadow-md hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 bg-slate-100 overflow-hidden group">
                  <img
                    src={dentist.photoUrl}
                    alt={dentist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute Badge */}
                  <div className="absolute top-4 right-4 bg-brand-red text-white border border-red-800 font-mono text-[9px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    {dentist.experience} Experience
                  </div>

                  {/* Gradient to darken face lower edge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                  
                  {/* In-photo Tag */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-[9.5px] font-mono font-black text-brand-gold leading-none uppercase tracking-wider">{dentist.role}</p>
                    <h3 className="text-base font-black tracking-tight mt-1 text-white">{dentist.name}</h3>
                  </div>
                </div>

                {/* Info Credentials Blocks */}
                <div className="p-6 space-y-6">
                  {/* Bio statement */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">{dentist.bio}</p>

                  {/* Specialty tag */}
                  <div className="space-y-1.5 pt-4 border-t border-brand-gold/15">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold font-mono">Core Focus Area:</span>
                    <div className="flex items-center gap-2 text-xs font-black text-brand-blue uppercase tracking-wide">
                      <Award className="w-4 h-4 text-brand-red shrink-0" />
                      <span>{dentist.specialization}</span>
                    </div>
                  </div>

                  {/* Academics & Qualifications */}
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold font-mono">Academic Credentials:</span>
                    <ul className="space-y-1.5 font-medium">
                      {dentist.qualifications.map((qual, qIdx) => (
                        <li key={qIdx} className="flex gap-2 text-xs text-slate-600 font-sans leading-relaxed">
                          <GraduationCap className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operating Timings & Languages */}
                  <div className="pt-4 border-t border-brand-gold/15 grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block tracking-wider">Schedules</span>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-700 font-mono font-bold">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span className="truncate">{dentist.availability.split(':')[0]}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block tracking-wider">Languages</span>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-700 font-mono font-bold">
                        <Languages className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{dentist.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 border-t border-brand-gold/15 bg-[#FAF6F0]/40">
                <button
                  id={`book-dentist-${dentist.id}`}
                  onClick={() => onSelectDentist(dentist.name)}
                  className="w-full py-3 bg-brand-blue hover:bg-slate-900 border-b-4 border-slate-950 text-white rounded-xl text-xs font-black font-sans flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/10 hover:scale-103 transition-all cursor-pointer uppercase tracking-wider"
                >
                  <span>Request Primary Doctor</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assurance badges */}
        <div className="mt-16 bg-brand-blue text-white rounded-3xl border border-brand-gold/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl">
          <div className="space-y-1.5">
            <h4 className="text-base font-extrabold text-brand-gold tracking-tight uppercase tracking-wider">Need an expert second opinion?</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-xl font-medium">
              Upload your existing radiographic scans, clinical records, or prescription files using our secure appointment portal to receive a complimentary secondary analysis from our clinical director.
            </p>
          </div>
          <button
            id="opinion-cta"
            onClick={() => onSelectDentist("General Consultation")}
            className="px-6 py-3 bg-brand-red hover:bg-red-700 text-white hover:text-white border-2 border-red-800 shadow-lg shadow-brand-red/10 rounded-xl text-xs font-black tracking-widest whitespace-nowrap cursor-pointer transition-all uppercase hover:scale-105"
          >
            Submit Patient Portal Radiographs
          </button>
        </div>

      </div>
    </section>
  );
}
