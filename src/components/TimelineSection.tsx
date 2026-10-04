import React from 'react';
import { Clock, Sparkles, Heart, Camera } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="atur-cara" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Garis Masa Perjalanan Majlis
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            Atur Cara Majlis
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans-clean">
            Sabtu, 14 November 2026 · Mengikut Waktu Standard Malaysia (MYT)
          </p>
        </div>

        {/* Two-column layout: Timeline on left, Candid Polaroid moments on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Timeline (7 cols) */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-stone-200 dark:border-stone-800 space-y-8 ml-2 sm:ml-4">
            {WEDDING_DATA.timeline.map((item, index) => (
              <div key={item.time} className="relative group">
                
                {/* Timeline Node Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 rounded-full bg-white dark:bg-stone-850 border-2 border-[#8D735C] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-[#8D735C]" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#8D735C] dark:text-[#C5B5A3] bg-[#F8F6F0] dark:bg-stone-800 px-2 py-0.5 rounded-md">
                      {item.time}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 dark:text-stone-500 font-sans">
                      {item.category === 'formal' ? 'Upacara Rasmi' : item.category === 'reception' ? 'Keraian & Santapan' : 'Penutup'}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-stone-800 dark:text-stone-200 group-hover:text-[#8D735C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans-clean text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Polaroid Candid Cards & Notes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 pt-4 lg:pt-0">
            
            {/* Polaroid Card 1 */}
            <div className="w-full max-w-xs bg-white dark:bg-stone-800 p-4 rounded-xl shadow-md border border-stone-200/80 dark:border-stone-700/80 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Tape effect */}
              <div className="w-20 h-5 bg-[#E7DEC8]/80 dark:bg-stone-700 mx-auto -mt-6 mb-3 rounded-xs shadow-xs" />
              
              {/* Photo Frame with fine art couple vector */}
              <div className="aspect-square bg-[#F3EFE9] dark:bg-stone-900 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 relative border border-stone-100 dark:border-stone-800">
                <svg
                  className="w-28 h-28 text-stone-400/60 dark:text-stone-600/50"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="50" cy="50" r="44" strokeDasharray="3 3" />
                  <path d="M50 30 C45 20, 30 20, 25 32 C20 45, 50 68, 50 68 C50 68, 80 45, 75 32 C70 20, 55 20, 50 30 Z" fill="#8D735C" stroke="none" opacity="0.75" />
                  <circle cx="50" cy="50" r="18" stroke="#5A3825" strokeWidth="1" />
                </svg>
                <span className="text-[10px] tracking-widest uppercase font-sans-clean text-stone-400 mt-2">
                  Janji Suci · Kuala Lumpur
                </span>
              </div>

              {/* Handwritten style caption */}
              <div className="pt-3 text-center">
                <p className="font-script-calligraphy text-2xl text-stone-800 dark:text-stone-200">
                  "Satu Takdir, Selamanya Kasih"
                </p>
                <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean mt-0.5">
                  14 November 2026
                </p>
              </div>
            </div>

            {/* Note box */}
            <div className="w-full max-w-xs bg-[#FAF8F5] dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800 text-xs font-sans-clean text-stone-600 dark:text-stone-400 leading-relaxed">
              <p className="font-semibold text-stone-800 dark:text-stone-200 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8D735C]" />
                <span>Peringatan Mesra</span>
              </p>
              <p>
                Upacara akad nikah bermula tepat jam 4:30 petang. Tetamu dialu-alukan hadir seawal jam 4:00 petang untuk menikmati santapan ringan sebelum upacara bermula.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
