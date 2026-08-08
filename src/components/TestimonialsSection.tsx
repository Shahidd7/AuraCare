import { useState } from 'react';
import { Star, BadgeCheck, HelpCircle, ChevronDown, ChevronUp, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, FAQS, INSURANCES } from '../data/dentalData';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialsSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  return (
    <section className="py-20 bg-brand-warm/20 border-y-2 border-brand-gold/15" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: Google reviews dashboard overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#FAF6F0] bg-brand-red border border-red-800 px-4 py-2 rounded-full uppercase tracking-widest shadow-md">🔔 Authentic Reputation</span>
            </div>
            <h2 className="text-3xl font-black text-brand-blue tracking-tight">Verified Patient Experiences</h2>
            <p className="text-xs text-slate-600 font-sans leading-relaxed font-semibold">
              We gather feedback metrics directly from our business listing profiles on Google and Yelp to ensure patient integrity.
            </p>

            {/* Scorecard Widget */}
            <div className="bg-white p-6 rounded-3xl border-2 border-brand-gold/20 shadow-xl shadow-brand-blue/5 inline-block w-full max-w-sm">
              <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 font-black block">Overall Rating Score</span>
              <div className="flex justify-center lg:justify-start items-baseline gap-1 mt-2 font-sans">
                <span className="text-4xl font-black text-brand-blue">4.9</span>
                <span className="text-brand-gold font-mono text-xs font-black">/ 5.0</span>
              </div>
              <div className="flex justify-center lg:justify-start text-brand-gold text-sm my-2">★★★★★</div>
              <p className="text-[10px] font-bold text-slate-500 font-sans">Based on 124 authenticated patients</p>
              
              <div className="mt-4 pt-4 border-t border-brand-gold/15 flex items-center justify-between text-[10px] font-mono text-brand-blue font-black">
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-brand-red" /> HIPAA Secure
                </span>
                <span className="flex items-center gap-1 hover:underline hover:text-brand-red cursor-pointer">
                  Go to Google Map <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Slider/List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-3xl border-2 border-brand-gold/15 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-brand-gold text-xs gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  
                  <div className="text-xs text-slate-600 leading-relaxed font-sans font-semibold italic relative">
                    <Quote className="w-10 h-10 text-brand-gold/10 absolute -top-4 -left-3 -z-10" />
                    “{testimonial.reviewText}”
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-brand-gold/15">
                  <div>
                    <h4 className="text-xs font-black text-brand-blue font-sans">{testimonial.patientName}</h4>
                    <p className="text-[10px] font-mono text-slate-500 mt-0.5 font-bold">Age {testimonial.age || 'N/A'} • Verified Treatment</p>
                  </div>
                  <span className="text-[9px] font-mono font-black text-brand-gold bg-brand-blue px-3 py-1 rounded-md border border-brand-gold/35 uppercase tracking-wider">
                    {testimonial.treatmentType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Insurance Organizations Accepted */}
        <div className="border-2 border-brand-gold/20 py-10 my-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-blue/5">
          <div className="text-center max-w-lg mx-auto space-y-1 mb-8">
            <span className="text-[9px] tracking-widest font-mono font-black text-brand-red uppercase block">Seamless Billing Integration</span>
            <h3 className="text-base font-black text-[#0F1D3A] uppercase tracking-wide">We Support Major Preferred Provider Organization (PPO) Plans</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
            {INSURANCES.map((partner) => (
              <div
                key={partner.name}
                className="border-2 border-brand-gold/10 bg-[#FAF6F0]/40 p-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-warm/30 hover:border-brand-gold/30 transition-all group cursor-default"
              >
                <div className={`w-7 h-7 rounded-lg ${partner.color} text-white font-mono text-xs font-black flex items-center justify-center border border-white/20 shadow-sm`}>
                  {partner.logoLetter}
                </div>
                <span className="text-xs font-black text-slate-700 font-sans group-hover:text-brand-blue transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] font-mono text-slate-500 mt-6 leading-relaxed max-w-xl mx-auto font-bold">
            ⭑ Don't see your specific insurance policy? Call us at <strong className="text-brand-red font-black">(555) 019-9922</strong>; our patient desk offers swift, custom verification scans within 5 minutes.
          </p>
        </div>

        {/* SECTION 3: Frequently Asked Questions Accordion */}
        <div className="max-w-3xl mx-auto space-y-6 pt-10" id="faqs-section">
          <div className="text-center space-y-3">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FAF6F0] bg-brand-blue border border-brand-gold/20 px-3.5 py-1.5 rounded-full">ℹ️ Patient FAQ Desk</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-blue tracking-tight">Answers to Your Dental Questions</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
              Read authoritative explanations directly from our clinical coordinator regarding schedules, fees, and safety parameters.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className="bg-white border-2 border-brand-gold/15 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans font-black text-sm text-[#0F1D3A] hover:bg-[#FAF6F0]/20 cursor-pointer transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 px-1.5 bg-brand-blue border-b-2 border-slate-950 rounded-lg text-brand-gold text-xs flex items-center justify-center">
                      <span className="material-symbols-outlined text-xs leading-none font-black">{isOpen ? 'expand_less' : 'expand_more'}</span>
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium border-t border-brand-gold/10 overflow-hidden bg-brand-warm/5"
                      >
                        <div className="pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
