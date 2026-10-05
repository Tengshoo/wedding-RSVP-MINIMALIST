import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const StorySection: React.FC = () => {
  return (
    <section id="kisah" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Chapter Lead Headline */}
      <div className="mb-16 sm:mb-24 text-left">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          02 / Kisah Kami
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-[#25231F] dark:text-[#F7F3EB] font-normal leading-[1.05] tracking-tight">
          And then, <br />
          <span className="italic font-light text-[#B7A58A]">there was us.</span>
        </h2>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Editorial Timeline Chapters with Asymmetric Typography & Fine Details */}
      <div className="space-y-16 sm:space-y-24">
        {WEDDING_DATA.story.map((chapter, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={chapter.year}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Year & Milestone Header */}
              <div
                className={`lg:col-span-5 space-y-3 ${
                  isEven ? 'lg:text-left' : 'lg:col-start-8 lg:text-left'
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl font-light text-[#B7A58A] tabular-nums">
                    {chapter.year}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#DED6C9] dark:bg-[#2F2C26]" />
                </div>

                <p className="text-xs uppercase tracking-[0.3em] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                  {chapter.subtitle}
                </p>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#25231F] dark:text-[#F7F3EB] font-normal">
                  {chapter.title}
                </h3>

                <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed pt-2">
                  {chapter.description}
                </p>
              </div>

              {/* Editorial Graphic Plate / Photo Snapshot */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? 'lg:col-start-6' : 'lg:col-start-1 lg:row-start-1'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFECE4] dark:bg-[#1E1C18] border border-[#DED6C9] dark:border-[#2F2C27] shadow-sm flex items-center justify-center p-6 group">
                  
                  {/* Subtle Abstract Fine Line Silhouette Vector */}
                  <svg
                    viewBox="0 0 400 250"
                    fill="none"
                    className="w-full h-full text-[#B7A58A]/30 dark:text-[#B7A58A]/20 transition-transform duration-700 group-hover:scale-105"
                  >
                    <path
                      d="M 50 200 Q 150 80 250 140 T 350 70"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="150" cy="120" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="280" cy="110" r="5" fill="#B7A58A" />
                    <circle cx="150" cy="120" r="4" fill="#B7A58A" />
                    <circle cx="90" cy="160" r="3" fill="#DED6C9" />
                  </svg>

                  {/* Caption Stamp */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans-clean uppercase tracking-widest text-[#716C64] dark:text-[#B7A58A] bg-[#F7F3EB]/85 dark:bg-[#171613]/85 backdrop-blur-xs py-2 px-3 rounded-lg border border-[#DED6C9]/60 dark:border-[#2F2C27]">
                    <span>Babak {index + 1}</span>
                    <span>Koleksi Memori Atif & Isma</span>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
