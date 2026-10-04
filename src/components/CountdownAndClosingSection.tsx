import React, { useState, useEffect } from 'react';
import { Heart, Share2, Copy, Check, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface CountdownAndClosingSectionProps {
  onReopenEnvelope: () => void;
}

export const CountdownAndClosingSection: React.FC<CountdownAndClosingSectionProps> = ({
  onReopenEnvelope,
}) => {
  // Target: 2026-11-14T16:00:00+08:00
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(WEDDING_DATA.event.targetDateIso).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShareWhatsApp = () => {
    const shareText = `*Walimatulurus ${WEDDING_DATA.couple.shortNames}*\n\nDengan rasa penuh kesyukuran, kami menjemput anda ke majlis perkahwinan kami pada ${WEDDING_DATA.event.dateFormatted} di ${WEDDING_DATA.venue.name}.\n\nSila layari laman jemputan & RSVP:\n${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section className="py-12 sm:py-20 px-4 max-w-4xl mx-auto space-y-12">
      
      {/* Real-time Countdown Timer Card */}
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800 text-center">
        
        <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
          Menghitung Detik Bahagia
        </p>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mb-8">
          Kira Detik Hari Perkahwinan
        </h2>

        {/* 4 Time Units Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto mb-8">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Minit', value: timeLeft.minutes },
            { label: 'Saat', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="p-3 sm:p-5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 flex flex-col items-center justify-center shadow-xs"
            >
              <span className="font-mono text-2xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs font-sans-clean text-stone-500 dark:text-stone-400">
          Sabtu, 14 November 2026 · 4:00 Petang di The Glasshouse at Seputeh
        </p>
      </div>

      {/* Closing Fine Art & Thank You Card */}
      <div className="relative rounded-3xl p-8 sm:p-14 text-center overflow-hidden bg-gradient-to-b from-white to-[#F8F6F0] dark:from-stone-850 dark:to-stone-900 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-full bg-[#FAF8F5] dark:bg-stone-800 mx-auto flex items-center justify-center text-[#8D735C] dark:text-[#C5B5A3] border border-stone-200/80 dark:border-stone-700 shadow-xs mb-6">
          <span className="font-serif-luxury font-bold text-xl tracking-wider">
            {WEDDING_DATA.couple.initials}
          </span>
        </div>

        {/* Closing Thank You Text */}
        <p className="font-serif-luxury text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 max-w-xl mx-auto leading-relaxed mb-4">
          "Kehadiran dan doa restu anda melengkapkan hari bahagia kami."
        </p>

        <p className="font-sans-clean text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto leading-relaxed mb-8">
          Dengan penuh keikhlasan hati daripada kedua-dua mempelai dan seisi keluarga.
        </p>

        {/* Share & Reopen Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-stone-200/60 dark:border-stone-800">
          <button
            onClick={handleShareWhatsApp}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans-clean font-medium flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Kongsi ke WhatsApp</span>
          </button>

          <button
            onClick={handleCopyLink}
            type="button"
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-750 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 text-xs font-sans-clean font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pautan Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-400" />
                <span>Salin Pautan Laman</span>
              </>
            )}
          </button>

          <button
            onClick={onReopenEnvelope}
            type="button"
            className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-sans-clean font-medium transition-colors cursor-pointer"
          >
            Buka Semula Sampul Surat
          </button>
        </div>

        {/* Official Hashtag */}
        <div className="mt-8 pt-4">
          <p className="text-xs uppercase tracking-widest font-mono text-[#8D735C] dark:text-[#C5B5A3]">
            #DanielImanForever · 14.11.2026
          </p>
        </div>

      </div>

    </section>
  );
};
