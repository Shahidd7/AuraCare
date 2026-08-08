import { useState } from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data/dentalData';
import { motion, AnimatePresence } from 'motion/react';

interface BlogSectionProps {
  onSuggestTreatment: (serviceName: string) => void;
}

export default function BlogSection({ onSuggestTreatment }: BlogSectionProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = BLOG_POSTS.find(p => p.id === selectedPostId);

  return (
    <section className="py-20 bg-[#FAF9F5]/40 border-b border-brand-gold/15" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedPostId ? (
            /* BLOG LIST VIEW */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FAF6F0] bg-brand-red px-4 py-2 rounded-full border border-red-800 shadow-md">📚 Clinical Library</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">AuraCare Dental Clinical Editorial</h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
                  Protecting teeth extends beyond dental checkups. Read expert oral hygiene analyses, developmental guides, and preventive summaries written by our lead physicians.
                </p>
              </div>

              {/* Grid List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-3xl border-2 border-brand-gold/15 overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Thumbnail photo */}
                      <div className="relative h-48 overflow-hidden bg-slate-50">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-brand-blue/95 border border-brand-gold/30 px-3 py-1 rounded-lg text-[9px] font-mono font-black text-brand-gold uppercase tracking-widest shadow-md">
                          {post.category}
                        </div>
                      </div>

                      {/* Snippet info */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 font-bold">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                            {post.publishDate}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-sans font-black text-base text-[#0F1D3A] group-hover:text-brand-red transition-colors tracking-tight leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border-t border-brand-gold/15 bg-[#FAF6F0]/40">
                      <button
                        onClick={() => setSelectedPostId(post.id)}
                        className="text-xs font-black text-brand-red hover:text-red-700 flex items-center gap-1 transition-all cursor-pointer uppercase tracking-widest"
                      >
                        <span>Full Article Analysis</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform font-bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* DETAILED POST READING VIEW */
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              {/* Back CTA */}
              <button
                onClick={() => setSelectedPostId(null)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-brand-blue hover:text-brand-red cursor-pointer uppercase tracking-widest"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brand-red" />
                <span>Return to Library</span>
              </button>

              {/* Cover Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-slate-500">
                  <span className="text-white bg-brand-red border border-red-800 px-3 py-1.5 rounded-lg inline-block uppercase tracking-wider">
                    {activePost?.category}
                  </span>
                  <span>•</span>
                  <span>{activePost?.publishDate}</span>
                  <span>•</span>
                  <span>{activePost?.readTime}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight leading-tight font-sans">
                  {activePost?.title}
                </h1>

                <div className="flex items-center gap-2.5 py-2">
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-gold border border-brand-gold/30 font-mono text-xs font-extrabold flex items-center justify-center shadow-md">
                    ★
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#0F1D3A] leading-none">{activePost?.author}</p>
                    <p className="text-[10px] font-mono font-bold text-brand-gold mt-1 uppercase tracking-wider">Lead Medical Specialist</p>
                  </div>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border-2 border-brand-gold/15 p-1.5 bg-white">
                <img
                  src={activePost?.imageUrl}
                  alt={activePost?.title}
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Rich Content body */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans space-y-6">
                <p className="text-xs font-bold text-brand-blue italic border-l-4 border-brand-gold pl-4 py-2 bg-brand-warm/40 rounded-r-xl">
                  {activePost?.excerpt}
                </p>
                <p className="text-xs leading-relaxed text-slate-600 font-medium">
                  {activePost?.content}
                </p>
                <p className="text-[10px] text-slate-400 leading-relaxed border-t border-brand-gold/15 pt-6 font-mono font-bold">
                  Disclaimer: This clinical blog post possesses informational intent. Patients should prioritize scheduling specific teeth evaluations with a certified AuraCare Dental Group specialist rather than self-diagnosing severe oral pathology.
                </p>
              </div>

              {/* Bottom Quick Suggest Treatment Box */}
              <div className="bg-white p-6 rounded-3xl border-2 border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 shadow-md">
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand-red">Experiencing these symptoms?</h4>
                  <p className="text-xs text-slate-600 font-bold font-sans">Ensure optimal clinical therapy before minor concerns escalate.</p>
                </div>
                <button
                  id="suggest-booking-cta"
                  onClick={() => {
                    if (activePost) {
                      onSuggestTreatment(activePost.category);
                    }
                  }}
                  className="px-6 py-3 bg-brand-blue hover:bg-slate-900 text-white rounded-xl text-xs font-black shadow-lg shadow-brand-blue/15 transition-all border-b-4 border-slate-950 hover:scale-103 cursor-pointer uppercase tracking-wider"
                >
                  Book Priority Assessment
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
