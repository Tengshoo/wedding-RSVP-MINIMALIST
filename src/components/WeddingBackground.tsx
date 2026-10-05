import React from 'react';

export const WeddingBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* 1. Ambient Warm Lighting Spheres */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#B7A58A]/25 to-[#716C64]/10 dark:from-[#B7A58A]/15 dark:to-[#25231F]/20 blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#DED6C9]/30 to-[#B7A58A]/15 dark:from-[#B7A58A]/10 dark:to-[#171613]/20 blur-3xl" />
      <div className="absolute top-2/3 -left-28 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#B7A58A]/20 to-[#6F7565]/10 dark:from-[#25231F]/20 dark:to-[#171613]/20 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-t from-[#B7A58A]/20 to-[#DED6C9]/15 dark:from-[#25231F]/20 dark:to-[#B7A58A]/10 blur-3xl" />

      {/* 2. Side Botanical Floral Garlands (Left & Right Flanks) */}
      
      {/* Top-Left Botanical Branch */}
      <div className="absolute -top-6 -left-6 w-56 sm:w-80 h-auto text-[#B7A58A]/35 dark:text-[#B7A58A]/20 transition-colors duration-500">
        <svg viewBox="0 0 300 320" fill="none" className="w-full h-full">
          <path
            d="M -20 -20 Q 80 60 120 180 Q 140 240 180 300"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M 30 15 Q 70 20 85 45 Q 60 65 30 15 Z" fill="currentColor" opacity="0.4" />
          <path d="M 65 55 Q 115 50 135 80 Q 105 105 65 55 Z" fill="currentColor" opacity="0.45" />
          <path d="M 85 110 Q 145 105 160 140 Q 125 165 85 110 Z" fill="currentColor" opacity="0.4" />
          <path d="M 115 170 Q 180 165 195 205 Q 155 225 115 170 Z" fill="currentColor" opacity="0.45" />
          <path d="M 140 230 Q 210 220 225 260 Q 185 280 140 230 Z" fill="currentColor" opacity="0.4" />
          <circle cx="180" cy="300" r="4.5" fill="currentColor" />
          <circle cx="135" cy="80" r="3.5" fill="currentColor" />
          <circle cx="160" cy="140" r="3.5" fill="currentColor" />
          <circle cx="195" cy="205" r="3.5" fill="currentColor" />
          <circle cx="225" cy="260" r="3.5" fill="currentColor" />
        </svg>
      </div>

      {/* Top-Right Botanical Branch */}
      <div className="absolute -top-6 -right-6 w-56 sm:w-80 h-auto text-[#B7A58A]/35 dark:text-[#B7A58A]/20 transition-colors duration-500 scale-x-[-1]">
        <svg viewBox="0 0 300 320" fill="none" className="w-full h-full">
          <path
            d="M -20 -20 Q 80 60 120 180 Q 140 240 180 300"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M 30 15 Q 70 20 85 45 Q 60 65 30 15 Z" fill="currentColor" opacity="0.4" />
          <path d="M 65 55 Q 115 50 135 80 Q 105 105 65 55 Z" fill="currentColor" opacity="0.45" />
          <path d="M 85 110 Q 145 105 160 140 Q 125 165 85 110 Z" fill="currentColor" opacity="0.4" />
          <path d="M 115 170 Q 180 165 195 205 Q 155 225 115 170 Z" fill="currentColor" opacity="0.45" />
          <circle cx="180" cy="300" r="4.5" fill="currentColor" />
          <circle cx="135" cy="80" r="3.5" fill="currentColor" />
          <circle cx="160" cy="140" r="3.5" fill="currentColor" />
        </svg>
      </div>

      {/* Mid-Left Ornamental Filigree Motif */}
      <div className="hidden lg:block absolute top-[45%] -left-4 w-40 h-80 text-[#B7A58A]/25 dark:text-[#B7A58A]/15">
        <svg viewBox="0 0 160 320" fill="none" className="w-full h-full">
          <path d="M 20 0 V 320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <path d="M 20 80 C 60 70 80 100 60 120 C 40 135 20 125 20 160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="60" cy="120" r="4" fill="currentColor" opacity="0.5" />
          <path d="M 20 160 C 70 150 90 180 70 205 C 50 220 20 210 20 245" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="70" cy="205" r="4" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Mid-Right Ornamental Filigree Motif */}
      <div className="hidden lg:block absolute top-[45%] -right-4 w-40 h-80 text-[#B7A58A]/25 dark:text-[#B7A58A]/15 scale-x-[-1]">
        <svg viewBox="0 0 160 320" fill="none" className="w-full h-full">
          <path d="M 20 0 V 320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <path d="M 20 80 C 60 70 80 100 60 120 C 40 135 20 125 20 160" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="60" cy="120" r="4" fill="currentColor" opacity="0.5" />
          <path d="M 20 160 C 70 150 90 180 70 205 C 50 220 20 210 20 245" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="70" cy="205" r="4" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* 3. Subtle Hairline Frame Rules (visible on desktop to frame the content) */}
      <div className="hidden xl:block absolute inset-y-0 left-8 w-[1px] bg-gradient-to-b from-transparent via-[#DED6C9]/40 dark:via-[#2F2C27]/40 to-transparent" />
      <div className="hidden xl:block absolute inset-y-0 right-8 w-[1px] bg-gradient-to-b from-transparent via-[#DED6C9]/40 dark:via-[#2F2C27]/40 to-transparent" />

      {/* 4. Floating Gentle Rose / Bunga Melur Petals */}
      <div className="petal-container">
        {[
          { left: '9%', delay: '0s', duration: '14s', size: 14, opacity: 0.55 },
          { left: '20%', delay: '4s', duration: '18s', size: 18, opacity: 0.45 },
          { left: '28%', delay: '8s', duration: '16s', size: 12, opacity: 0.5 },
          { left: '72%', delay: '2s', duration: '15s', size: 16, opacity: 0.5 },
          { left: '82%', delay: '6s', duration: '19s', size: 13, opacity: 0.45 },
          { left: '91%', delay: '10s', duration: '17s', size: 15, opacity: 0.55 },
        ].map((petal, i) => (
          <div
            key={i}
            className="floating-petal absolute text-[#B7A58A]"
            style={{
              left: petal.left,
              top: '-30px',
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              opacity: petal.opacity,
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8 6 3 10 3 15C3 19 7 22 12 22C17 22 21 19 21 15C21 10 16 6 12 2Z" opacity="0.8" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
