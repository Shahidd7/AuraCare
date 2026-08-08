import { useState } from 'react';
import { Eye, ShieldAlert, Sparkles, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BeforeAfterGallery() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [showAfterState, setShowAfterState] = useState(true);

  const cases = [
    {
      id: 'case-1',
      patientName: 'Gabriella Vance',
      age: '32',
      treatment: 'Minimal-Prep Porcelain Veneers',
      dentist: 'Dr. Sarah Jenkins, DDS',
      duration: '2 Sessions (10 Days)',
      problem: 'Uneven margins, chipped forward lateral incisors, deep intrinsic fluoride staining.',
      solution: 'Designed 10 custom ultra-thin porcelain veneers matching organic tooth contours, elevating the shade grid to natural bright white.',
      difficulty: 'Moderate',
      rating: '★★★★★',
      review: "I am absolutely shocked by how realistic they feel. I can laugh without hiding my mouth anymore!",
      beforePhoto: '/src/assets/images/dental_before_case1_1786196732523.jpg',
      afterPhoto: '/src/assets/images/dental_after_case1_1786196753609.jpg'
    },
    {
      id: 'case-2',
      patientName: 'Julian Sterling',
      age: '40',
      treatment: 'Invisalign Teeth Straightening',
      dentist: 'Dr. Arthur Stone, DDS',
      duration: '11 Months',
      problem: 'Severe dental crowding on the lower jaw, upper jaw lateral spacing leading to pronunciation lisp.',
      solution: 'Mapped 22 sequentially ordered dental aligners, shifting dental roots progressively without standard iron brackets.',
      difficulty: 'High',
      rating: '★★★★★',
      review: "Nobody even noticed I was wearing aligners. My lisp is gone, and flossing is a piece of cake now.",
      beforePhoto: '/src/assets/images/dental_before_case2_1786196823049.jpg',
      afterPhoto: '/src/assets/images/dental_after_case2_1786196843399.jpg'
    }
  ];

  const currentCase = cases[activeCaseIdx];

  return (
    <section className="py-20 bg-brand-warm/30 border-b border-brand-gold/15 animate-fade-in" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FAF6F0] bg-brand-red px-3.5 py-1.5 rounded-full border border-red-800 shadow-md">Clinical Transmutation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">Spectacular Smile Makeover Gallery</h2>
          <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
            Review actual dental outcome transformations accomplished inside our clinic operations. We restore biological symmetry, dental alignment, and natural enamel sheen.
          </p>
        </div>

        {/* Case Viewer Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Comparison Card Slot -- Col Span 6 */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white p-6 rounded-3xl border-2 border-brand-gold/15 shadow-xl shadow-brand-blue/5">
            <div>
              {/* Interaction Controls */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono font-black text-brand-blue uppercase tracking-widest">Before / After Toggle</span>
                <div className="inline-flex bg-brand-warm border border-brand-gold/20 p-1.5 rounded-full shadow-inner">
                  <button
                    onClick={() => setShowAfterState(false)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      !showAfterState
                        ? 'bg-brand-blue text-white shadow-md'
                        : 'text-slate-500 hover:text-brand-red'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowAfterState(true)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      showAfterState
                        ? 'bg-brand-red text-white shadow-md'
                        : 'text-slate-500 hover:text-brand-red'
                    }`}
                  >
                    After
                  </button>
                </div>
              </div>

              {/* Photo Display Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-brand-gold/25 bg-white p-1.5 shadow-md">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={showAfterState ? 'after' : 'before'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      src={showAfterState ? currentCase.afterPhoto : currentCase.beforePhoto}
                      alt={showAfterState ? 'After Smile Restoration' : 'Before Tooth Trauma'}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

                {/* State Tag overlay */}
                <div className={`absolute top-6 left-6 font-mono text-[9px] font-bold px-3 py-1.5 bg-brand-blue/95 border border-brand-gold/30 backdrop-blur-sm rounded-full uppercase tracking-widest text-white shadow-md`}>
                  {showAfterState ? '★ Aesthetic Outcome' : '✏️ Initial Condition'}
                </div>
              </div>
            </div>

            {/* Helper Hint */}
            <div className="mt-6 flex items-center gap-1.5 text-[#0F1D3A] text-[10px] font-mono justify-center font-bold">
              <Eye className="w-4 h-4 text-brand-red" />
              <span>Toggle between the Before / After states to examine clinical outcomes.</span>
            </div>
          </div>

          {/* Clinical Diagnostic Data -- Col Span 6 */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Case Picker Switcher */}
              <div className="flex gap-2">
                {cases.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCaseIdx(idx);
                      setShowAfterState(true);
                    }}
                    className={`px-5 py-3 rounded-full text-[10px] font-mono font-black uppercase tracking-widest border transition-all cursor-pointer ${
                      activeCaseIdx === idx
                        ? 'bg-brand-blue border-brand-gold text-brand-gold shadow-md'
                        : 'bg-white border-brand-gold/20 text-slate-500 hover:text-brand-red hover:border-brand-red'
                    }`}
                  >
                    Case Study #{idx + 1}
                  </button>
                ))}
              </div>

              {/* Case Details Block */}
              <div className="space-y-5">
                <div>
                  <span className="text-[9.5px] uppercase font-mono tracking-widest text-brand-gold font-bold block">Case Parameters</span>
                  <h3 className="text-xl font-extrabold text-brand-blue mt-1 leading-tight">{currentCase.treatment}</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-slate-500 mt-2 font-black">
                    <span>Patient: <strong className="text-slate-800 font-extrabold">{currentCase.patientName}</strong> (Age {currentCase.age})</span>
                    <span>•</span>
                    <span>Lead Surgeon: <strong className="text-brand-red font-black">{currentCase.dentist}</strong></span>
                    <span>•</span>
                    <span>Period: <strong className="text-[#0F1D3A] font-black">{currentCase.duration}</strong></span>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl space-y-4 border-2 border-brand-gold/15 font-sans shadow-inner">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono font-bold text-brand-red flex items-center gap-1">
                        <ShieldAlert className="w-4.5 h-4.5 shrink-0 animate-pulse" /> Clinical Diagnosis:
                      </span>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{currentCase.problem}</p>
                    </div>

                    <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-brand-gold/15 sm:pl-4">
                      <span className="text-[10px] uppercase font-mono font-bold text-emerald-700 flex items-center gap-1">
                        <Sparkles className="w-4.5 h-4.5 shrink-0" /> Restorative Action:
                      </span>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{currentCase.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="border-2 border-brand-gold/25 bg-[#FFFDF9] p-5 rounded-2xl flex gap-3 shadow-md relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-12 -mb-12 pointer-events-none"></div>
                  <div className="text-brand-gold text-4xl font-serif leading-none mt-1 shrink-0">“</div>
                  <div className="space-y-1.5 relative z-10">
                    <p className="text-xs text-slate-700 italic leading-relaxed font-sans font-semibold">
                      {currentCase.review}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-gold text-[10px]">★★★★★</span>
                      <span className="text-[9px] uppercase tracking-widest font-mono font-black text-brand-blue">Verified Patient Review</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-[10px] font-mono text-slate-400 leading-relaxed pt-4 border-t border-brand-gold/15">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-brand-gold" />
              <span>Diagnostic outcome photos have been verified by AuraCare Dental Group. Individual physiological results vary depending on periodontal health indices, biological structure densities, and care-plan adherence.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
