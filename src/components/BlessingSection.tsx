import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const BlessingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto text-center border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Bismillah */}
      <p className="font-serif-luxury text-2xl sm:text-3xl text-[#25231F] dark:text-[#F7F3EB] tracking-wider mb-6">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>

      {/* Quran Verse */}
      <blockquote className="space-y-4 max-w-2xl mx-auto mb-10">
        <p className="font-serif-luxury text-lg sm:text-xl text-[#25231F] dark:text-[#F7F3EB] leading-relaxed">
          "{WEDDING_DATA.quranVerse.arabic}"
        </p>
        <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] italic leading-relaxed">
          {WEDDING_DATA.quranVerse.translation}
        </p>
        <p className="text-[10px] font-sans-clean uppercase tracking-[0.25em] text-[#B7A58A] font-semibold">
          — {WEDDING_DATA.quranVerse.surah}
        </p>
      </blockquote>

      {/* Parents' Gracious Invitation */}
      <div className="pt-8 border-t border-[#DED6C9]/50 dark:border-[#2A2722]/50 max-w-xl mx-auto space-y-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#716C64] dark:text-[#B7A58A] font-sans-clean">
          Undangan Penuh Kesyukuran Daripada
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif-luxury text-[#25231F] dark:text-[#F7F3EB]">
          <div className="p-4 rounded-xl bg-[#EFECE4]/60 dark:bg-[#1E1C18]/60 border border-[#DED6C9]/60 dark:border-[#2F2C27]">
            <p className="text-[9px] uppercase tracking-wider text-[#716C64] dark:text-[#B7A58A] font-sans mb-1">
              Keluarga Pengantin Lelaki
            </p>
            <p className="font-medium text-sm">{WEDDING_DATA.couple.parentsGroom}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#EFECE4]/60 dark:bg-[#1E1C18]/60 border border-[#DED6C9]/60 dark:border-[#2F2C27]">
            <p className="text-[9px] uppercase tracking-wider text-[#716C64] dark:text-[#B7A58A] font-sans mb-1">
              Keluarga Pengantin Perempuan
            </p>
            <p className="font-medium text-sm">{WEDDING_DATA.couple.parentsBride}</p>
          </div>
        </div>

        <p className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] leading-relaxed pt-2">
          Dengan penuh rasa hormat menjemput Dato' / Datin / Tuan / Puan / Encik / Cik sekeluarga hadir menyerikan hari penyatuan dua jiwa anakanda kami.
        </p>
      </div>

    </section>
  );
};
