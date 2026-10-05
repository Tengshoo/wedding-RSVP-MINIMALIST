import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { WEDDING_DATA, GuestWish } from '../data/weddingData';

export const GuestbookSection: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_guest_wishes');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return WEDDING_DATA.initialWishes;
  });

  const [likedIds, setLikedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_liked_wishes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Listen to cross-component updates from RSVP
  useEffect(() => {
    const handleUpdate = () => {
      try {
        const saved = localStorage.getItem('wedding_guest_wishes');
        if (saved) setWishes(JSON.parse(saved));
      } catch {
        // ignore
      }
    };

    window.addEventListener('guestbook_updated', handleUpdate);
    return () => window.removeEventListener('guestbook_updated', handleUpdate);
  }, []);

  const handleLike = (id: string) => {
    if (likedIds.includes(id)) return;
    const nextLiked = [...likedIds, id];
    setLikedIds(nextLiked);
    try {
      localStorage.setItem('wedding_liked_wishes', JSON.stringify(nextLiked));
    } catch {
      // ignore
    }

    setWishes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item))
    );
  };

  return (
    <section id="ucapan" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-left mb-12 sm:mb-16">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          09 / Titipan Doa
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          Words for the Couple
        </h2>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Editorial Note Cards Grid (not social media look, pure editorial stationery) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishes.map((item) => {
          const isLiked = likedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#EFECE4] dark:bg-[#1E1C18] border border-[#DED6C9] dark:border-[#2F2C27] flex flex-col justify-between space-y-4 hover:border-[#B7A58A] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-2 border-b border-[#DED6C9]/60 dark:border-[#2F2C26] pb-3">
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#25231F] dark:text-[#F7F3EB] font-medium truncate">
                    {item.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#716C64] dark:text-[#B7A58A] font-sans-clean shrink-0">
                    {item.date}
                  </span>
                </div>

                <p className="font-serif-luxury text-base sm:text-lg text-[#25231F]/90 dark:text-[#F7F3EB]/90 leading-relaxed italic">
                  "{item.message}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] uppercase tracking-widest font-sans-clean text-[#716C64]">
                  {item.attendance === 'hadir' ? 'Hadir' : 'Doa Ingatan'}
                </span>

                <button
                  type="button"
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1.5 text-xs text-[#716C64] dark:text-[#B7A58A] hover:text-[#B7A58A] transition-colors cursor-pointer"
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#B7A58A] text-[#B7A58A]' : ''}`} />
                  <span className="font-mono text-[11px]">{item.likes}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
