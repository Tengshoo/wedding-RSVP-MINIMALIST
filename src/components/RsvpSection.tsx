import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, Users, MessageSquareQuote, ThumbsUp, Sparkles, User } from 'lucide-react';
import { WEDDING_DATA, GuestWish } from '../data/weddingData';

export const RsvpSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir'>('hadir');
  const [pax, setPax] = useState<number>(2);
  const [session, setSession] = useState<'sesi_1' | 'sesi_2'>('sesi_1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Guestbook wishes state with localStorage persistence
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_guest_wishes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return WEDDING_DATA.initialWishes;
  });

  const [likedWishIds, setLikedWishIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_liked_wishes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wedding_guest_wishes', JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  useEffect(() => {
    try {
      localStorage.setItem('wedding_liked_wishes', JSON.stringify(likedWishIds));
    } catch {
      // ignore
    }
  }, [likedWishIds]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Trigger celebration confetti
      if (attendance === 'hadir') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#5A3825', '#8D735C', '#C5B5A3', '#E7DEC8', '#B79E8C'],
        });
      }

      // Add to guestbook wishes if message provided
      if (message.trim()) {
        const newWish: GuestWish = {
          id: `w-${Date.now()}`,
          name: name.trim(),
          attendance,
          pax: attendance === 'hadir' ? pax : 0,
          message: message.trim(),
          date: 'Sebentar tadi',
          likes: 1,
        };
        setWishes((prev) => [newWish, ...prev]);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleLikeWish = (wishId: string) => {
    if (likedWishIds.includes(wishId)) return;

    setLikedWishIds((prev) => [...prev, wishId]);
    setWishes((prev) =>
      prev.map((w) => (w.id === wishId ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setName('');
    setMessage('');
  };

  return (
    <section id="rsvp" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto space-y-12">
      
      {/* RSVP Form Card */}
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Pengesahan Kehadiran Tetamu
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            Borang RSVP Majlis
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans-clean max-w-md mx-auto">
            Mohon sahkan kehadiran anda selewat-lewatnya pada{' '}
            <strong className="text-stone-700 dark:text-stone-300">1 November 2026</strong> bagi memudahkan urusan penyusunan meja & hidangan.
          </p>
        </div>

        {isSubmitted ? (
          /* Success Screen */
          <div className="py-10 text-center space-y-4 max-w-md mx-auto animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
              Terima Kasih, {name}!
            </h3>

            <p className="font-sans-clean text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {attendance === 'hadir'
                ? `Pengesahan kehadiran anda sebanyak ${pax} orang telah berjaya direkodkan. Kami berbesar hati menantikan kehadiran anda di The Glasshouse at Seputeh!`
                : `Terima kasih atas maklum balas anda. Kami menghargai doa serta ucapan ingatan yang dititipkan buat kami.`}
            </p>

            <div className="pt-4">
              <button
                onClick={handleResetForm}
                type="button"
                className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-300 text-xs font-sans-clean font-medium transition-colors cursor-pointer"
              >
                Hantar Maklum Balas Lain
              </button>
            </div>
          </div>
        ) : (
          /* Form Elements */
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            
            {/* Guest Name */}
            <div>
              <label htmlFor="guest-name" className="block text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 font-sans-clean font-medium mb-1.5">
                Nama Penuh Tetamu <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="guest-name"
                  type="text"
                  required
                  placeholder="cth: Dato' Farhan & Keluarga"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#8D735C] transition-all font-sans-clean placeholder:text-stone-400"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="guest-phone" className="block text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 font-sans-clean font-medium mb-1.5">
                Nombor WhatsApp / Telefon
              </label>
              <input
                id="guest-phone"
                type="tel"
                placeholder="cth: 012-3456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#8D735C] transition-all font-sans-clean placeholder:text-stone-400"
              />
            </div>

            {/* Attendance Status */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 font-sans-clean font-medium mb-2">
                Status Kehadiran <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance('hadir')}
                  className={`py-3 px-4 rounded-xl text-xs font-sans-clean font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    attendance === 'hadir'
                      ? 'bg-[#2C2B2A] text-white dark:bg-stone-100 dark:text-stone-900 border-[#2C2B2A] dark:border-white shadow-xs'
                      : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-stone-300'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hadir dengan Sukacita</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('tidak_hadir')}
                  className={`py-3 px-4 rounded-xl text-xs font-sans-clean font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    attendance === 'tidak_hadir'
                      ? 'bg-[#2C2B2A] text-white dark:bg-stone-100 dark:text-stone-900 border-[#2C2B2A] dark:border-white shadow-xs'
                      : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-stone-300'
                  }`}
                >
                  <span>Maaf, Tidak Dapat Hadir</span>
                </button>
              </div>
            </div>

            {/* Attendance conditional options (if Hadir) */}
            {attendance === 'hadir' && (
              <div className="space-y-4 pt-2">
                {/* Pax Count */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 font-sans-clean font-medium">
                      Bilangan Kehadiran (Pax)
                    </label>
                    <span className="text-xs text-stone-400 font-sans-clean">Termasuk pasangan / anak</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPax(num)}
                        className={`py-2.5 rounded-xl text-xs font-sans-clean font-medium border transition-all cursor-pointer ${
                          pax === num
                            ? 'bg-[#8D735C] text-white border-[#8D735C] shadow-xs'
                            : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {num} Pax
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Session */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 font-sans-clean font-medium mb-2">
                    Cadangan Sesi Kehadiran
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setSession('sesi_1')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        session === 'sesi_1'
                          ? 'border-[#8D735C] bg-[#FAF8F5] dark:bg-stone-800/80 ring-1 ring-[#8D735C]'
                          : 'border-stone-200 dark:border-stone-700 bg-transparent'
                      }`}
                    >
                      <p className="font-semibold text-stone-800 dark:text-stone-200">Sesi 1: Akad Nikah & Jamuan Awal</p>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">4:00 Petang — 7:30 Malam</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSession('sesi_2')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        session === 'sesi_2'
                          ? 'border-[#8D735C] bg-[#FAF8F5] dark:bg-stone-800/80 ring-1 ring-[#8D735C]'
                          : 'border-stone-200 dark:border-stone-700 bg-transparent'
                      }`}
                    >
                      <p className="font-semibold text-stone-800 dark:text-stone-200">Sesi 2: Santapan Santai & Malam</p>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">7:30 Malam — 11:00 Malam</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Ucapan & Titipan Doa */}
            <div>
              <label htmlFor="guest-message" className="block text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 font-sans-clean font-medium mb-1.5">
                Ucapan & Titipan Doa Buat Mempelai
              </label>
              <textarea
                id="guest-message"
                rows={3}
                placeholder="Titipkan doa keberkatan, ucapan selamat pengantin baru, atau kata-kata manis..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#8D735C] transition-all font-sans-clean placeholder:text-stone-400"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-2xl bg-[#2C2B2A] hover:bg-[#1A1918] dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-sans-clean text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Menghantar Pengesahan...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Hantar Pengesahan Kehadiran</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>

      {/* Guestbook Feed Card */}
      <div id="ucapan" className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-0.5">
              Buku Tetamu Digital
            </p>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
              Titipan Doa & Ucapan Kasih ({wishes.length})
            </h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-stone-800 flex items-center justify-center text-[#8D735C]">
            <Heart className="w-4 h-4 fill-[#8D735C]/20" />
          </div>
        </div>

        {/* Wishes List */}
        <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
          {wishes.map((wish) => {
            const isLiked = likedWishIds.includes(wish.id);

            return (
              <div
                key={wish.id}
                className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-xs font-semibold text-stone-700 dark:text-stone-300 font-serif-luxury">
                      {wish.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200 font-sans-clean">
                        {wish.name}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-stone-400 font-sans-clean">
                        <span>{wish.date}</span>
                        <span>·</span>
                        <span className={wish.attendance === 'hadir' ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-stone-400'}>
                          {wish.attendance === 'hadir' ? `Hadir (${wish.pax} pax)` : 'Tidak Hadir'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLikeWish(wish.id)}
                    type="button"
                    disabled={isLiked}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans-clean transition-colors cursor-pointer ${
                      isLiked
                        ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                        : 'bg-white dark:bg-stone-800 text-stone-500 hover:text-rose-500 border border-stone-200 dark:border-stone-700'
                    }`}
                    title="Suka ucapan ini"
                  >
                    <Heart className={`w-3 h-3 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span className="text-[11px] font-mono">{wish.likes}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm font-sans-clean text-stone-600 dark:text-stone-300 leading-relaxed pl-10">
                  {wish.message}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
