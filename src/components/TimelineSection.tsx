import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="atur-cara" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-left mb-16 sm:mb-20">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          04 / Atur Cara Majlis
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          The Celebration
        </h2>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Pure Editorial Vertical Timeline without Chunky Cards */}
      <div className="relative pl-8 sm:pl-12 border-l border-[#DED6C9] dark:border-[#2F2C26] space-y-12 sm:space-y-16 ml-3 sm:ml-4">
        {WEDDING_DATA.timeline.map((item, index) => (
          <div key={item.time} className="relative group">
            
            {/* Minimal Dot Node */}
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#F7F3EB] dark:bg-[#171613] border-2 border-[#B7A58A] group-hover:scale-125 transition-transform" />

            {/* Time & Title */}
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B7A58A] block">
                {item.time}
              </span>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#25231F] dark:text-[#F7F3EB] font-normal group-hover:text-[#B7A58A] transition-colors">
                {item.title}
              </h3>

              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed max-w-xl pt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
