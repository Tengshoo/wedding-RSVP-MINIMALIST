import React, { useState, useEffect } from 'react';
import { Check, Calendar, ArrowRight, ArrowLeft, Heart, User, ShieldCheck } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface RsvpFormData {
  attending: boolean | null;
  fullName: string;
  phone: string;
  paxCount: number;
  guestNames: string[];
  dietary: string;
  wishes: string;
}

export const RsvpSection: React.FC = () => {
  // Conversational step state
  // 1: Attendance choice
  // 2: Main contact info
  // 3: Pax count & guest names (if attending)
  // 4: Dietary & Special wishes
  // 5: Confirmed success
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceCode, setReferenceCode] = useState<string>('');

  const [formData, setFormData] = useState<RsvpFormData>(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_draft');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      attending: null,
      fullName: '',
      phone: '',
      paxCount: 1,
      guestNames: [''],
      dietary: '',
      wishes: '',
    };
  });

  // Save draft to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wedding_rsvp_draft', JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const handleAttendanceChoice = (willAttend: boolean) => {
    setFormData((prev) => ({ ...prev, attending: willAttend }));
    setErrorMessage(null);
    if (!willAttend) {
      // If cannot make it, go straight to contact & blessing
      setCurrentStep(2);
    } else {
      setCurrentStep(2);
    }
  };

  const handlePaxChange = (count: number) => {
    const updatedGuestNames = Array.from({ length: count }, (_, i) => {
      if (i === 0) return formData.fullName || '';
      return formData.guestNames[i] || '';
    });

    setFormData((prev) => ({
      ...prev,
      paxCount: count,
      guestNames: updatedGuestNames,
    }));
  };

  const handleGuestNameChange = (index: number, name: string) => {
    const updated = [...formData.guestNames];
    updated[index] = name;
    setFormData((prev) => ({ ...prev, guestNames: updated }));
  };

  const validateStep2 = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Sila masukkan nama penuh anda.');
      return false;
    }
    if (formData.fullName.trim().length < 3) {
      setErrorMessage('Nama mestilah sekurang-kurangnya 3 huruf.');
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleNextFromStep2 = () => {
    if (!validateStep2()) return;

    if (formData.attending) {
      setCurrentStep(3);
    } else {
      // If declining, go straight to wishes step
      setCurrentStep(4);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = `ATIF-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(randomCode);

      // Save submission
      try {
        const history = JSON.parse(localStorage.getItem('wedding_rsvp_submissions') || '[]');
        history.push({
          ...formData,
          referenceCode: randomCode,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('wedding_rsvp_submissions', JSON.stringify(history));

        // Add to guestbook wishes if message exists
        if (formData.wishes.trim()) {
          const existingWishes = JSON.parse(localStorage.getItem('wedding_guest_wishes') || '[]');
          const newWish = {
            id: `w-${Date.now()}`,
            name: formData.fullName.trim(),
            attendance: formData.attending ? 'hadir' : 'tidak_hadir',
            pax: formData.attending ? formData.paxCount : 0,
            message: formData.wishes.trim(),
            date: 'Sebentar tadi',
            likes: 1,
          };
          localStorage.setItem('wedding_guest_wishes', JSON.stringify([newWish, ...existingWishes]));
          window.dispatchEvent(new Event('guestbook_updated'));
        }
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setCurrentStep(5);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      attending: null,
      fullName: '',
      phone: '',
      paxCount: 1,
      guestNames: [''],
      dietary: '',
      wishes: '',
    });
    localStorage.removeItem('wedding_rsvp_draft');
    setCurrentStep(1);
    setErrorMessage(null);
  };

  return (
    <section id="rsvp" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-left mb-12 sm:mb-16">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          08 / Pengesahan Kehadiran
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          The RSVP
        </h2>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Main Conversational Box */}
      <div className="bg-[#EFECE4] dark:bg-[#1E1C18] p-8 sm:p-14 rounded-3xl border border-[#DED6C9] dark:border-[#2F2C27] shadow-sm">
        
        {/* Step Progress Indicator (Dots) */}
        {currentStep < 5 && (
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div
                key={stepNum}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentStep === stepNum
                    ? 'w-8 bg-[#25231F] dark:bg-[#F7F3EB]'
                    : currentStep > stepNum
                    ? 'w-4 bg-[#B7A58A]'
                    : 'w-4 bg-[#DED6C9] dark:bg-[#332F28]'
                }`}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Attendance Choice */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                Kehadiran Anda
              </p>
              <h3 className="font-serif-luxury text-3xl sm:text-5xl text-[#25231F] dark:text-[#F7F3EB] font-normal leading-tight">
                We'd love to celebrate with you.
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A]">
                Adakah anda berpeluang hadir meraikan hari bahagia kami pada 12 Disember 2026?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleAttendanceChoice(true)}
                className="p-6 rounded-2xl border-2 border-[#25231F] dark:border-[#F7F3EB] bg-[#25231F] dark:bg-[#F7F3EB] text-[#F7F3EB] dark:text-[#25231F] text-left hover:scale-[1.02] transition-all cursor-pointer group shadow-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] opacity-80 block mb-1">Pilihan 01</span>
                <span className="font-serif-luxury text-xl sm:text-2xl font-medium block">
                  Yes, I'll be there
                </span>
                <span className="text-xs font-sans-clean opacity-80 mt-1 block">
                  Hadir dengan penuh sukacita
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleAttendanceChoice(false)}
                className="p-6 rounded-2xl border border-[#DED6C9] dark:border-[#38332B] hover:border-[#716C64] bg-white/40 dark:bg-stone-900/40 text-left hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#716C64] dark:text-[#B7A58A] block mb-1">Pilihan 02</span>
                <span className="font-serif-luxury text-xl sm:text-2xl text-[#25231F] dark:text-[#F7F3EB] font-medium block">
                  Sorry, I can't make it
                </span>
                <span className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] mt-1 block">
                  Tidak dapat hadir, titip doa
                </span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Name & Phone */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                Maklumat Tetamu
              </p>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB] font-normal">
                {formData.attending ? "Wonderful. Who should we expect?" : "Terima kasih atas ingatan ikhlas."}
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A]">
                Sila nyatakan nama penuh anda dan nombor telefon untuk rekod jemputan rasmi.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#716C64] dark:text-[#B7A58A] font-sans-clean mb-1.5">
                  Nama Penuh Tetamu
                </label>
                <input
                  type="text"
                  required
                  placeholder="cth: Dr. Zulkifli / Puan Farah sekeluarga"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errorMessage) setErrorMessage(null);
                  }}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F7F3EB] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] text-sm text-[#25231F] dark:text-[#F7F3EB] focus:outline-hidden focus:border-[#B7A58A] transition-all font-sans-clean"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#716C64] dark:text-[#B7A58A] font-sans-clean mb-1.5">
                  Nombor WhatsApp / Telefon
                </label>
                <input
                  type="tel"
                  placeholder="cth: 012-3456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F7F3EB] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] text-sm text-[#25231F] dark:text-[#F7F3EB] focus:outline-hidden focus:border-[#B7A58A] transition-all font-sans-clean"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-amber-700 dark:text-amber-400 font-sans-clean">
                  {errorMessage}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#DED6C9]/60 dark:border-[#2F2C26]">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs font-sans-clean uppercase tracking-wider text-[#716C64] hover:text-[#25231F] dark:hover:text-[#F7F3EB] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>

              <button
                type="button"
                onClick={handleNextFromStep2}
                className="py-3 px-6 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Seterusnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Pax Count & Dynamic Guest Names (Only if attending) */}
        {currentStep === 3 && formData.attending && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                Kiraan Tetamu
              </p>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB] font-normal">
                How many seats should we reserve?
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A]">
                Pilih bilangan kerusi untuk memudahkan susun atur meja dewan.
              </p>
            </div>

            {/* Pax Buttons */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => handlePaxChange(count)}
                  className={`py-3.5 rounded-xl text-center text-sm font-sans-clean font-medium transition-all cursor-pointer ${
                    formData.paxCount === count
                      ? 'bg-[#25231F] text-[#F7F3EB] dark:bg-[#F7F3EB] dark:text-[#25231F] shadow-sm'
                      : 'bg-[#F7F3EB] dark:bg-[#171613] text-[#716C64] border border-[#DED6C9] dark:border-[#2F2C27]'
                  }`}
                >
                  <span className="font-serif-luxury text-xl block">{count}</span>
                  <span className="text-[10px] uppercase tracking-wider block opacity-75">Pax</span>
                </button>
              ))}
            </div>

            {/* Dynamically Revealed Guest Names */}
            <div className="space-y-3 pt-4 border-t border-[#DED6C9]/60 dark:border-[#2F2C26]">
              <p className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] uppercase tracking-wider">
                Nama Individu Tetamu:
              </p>
              {Array.from({ length: formData.paxCount }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#B7A58A] w-14">
                    {idx === 0 ? 'Tetamu 1' : `Tetamu ${idx + 1}`}
                  </span>
                  <input
                    type="text"
                    placeholder={idx === 0 ? formData.fullName : `Nama Tetamu ${idx + 1}`}
                    value={formData.guestNames[idx] || ''}
                    onChange={(e) => handleGuestNameChange(idx, e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F7F3EB] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] text-xs text-[#25231F] dark:text-[#F7F3EB] focus:outline-hidden focus:border-[#B7A58A] font-sans-clean"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#DED6C9]/60 dark:border-[#2F2C26]">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs font-sans-clean uppercase tracking-wider text-[#716C64] hover:text-[#25231F] dark:hover:text-[#F7F3EB] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="py-3 px-6 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Seterusnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Dietary & Special Message */}
        {currentStep === 4 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                Langkah Terakhir
              </p>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB] font-normal">
                Anything we should know?
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A]">
                Keperluan diet atau titipan doa buat Atif & Isma.
              </p>
            </div>

            {formData.attending && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#716C64] dark:text-[#B7A58A] font-sans-clean mb-1.5">
                  Alahan Makanan / Diet Khas (Pilihan)
                </label>
                <input
                  type="text"
                  placeholder="cth: Alahan makanan laut, vegetarian, dll."
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F3EB] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] text-xs text-[#25231F] dark:text-[#F7F3EB] focus:outline-hidden focus:border-[#B7A58A] font-sans-clean"
                />
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#716C64] dark:text-[#B7A58A] font-sans-clean mb-1.5">
                Titipan Doa & Ucapan Buat Mempelai
              </label>
              <textarea
                rows={3}
                placeholder="Titipkan doa keberkatan atau kata-kata manis buat kami..."
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F7F3EB] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] text-xs text-[#25231F] dark:text-[#F7F3EB] focus:outline-hidden focus:border-[#B7A58A] font-sans-clean"
              />
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#DED6C9]/60 dark:border-[#2F2C26]">
              <button
                type="button"
                onClick={() => setCurrentStep(formData.attending ? 3 : 2)}
                className="text-xs font-sans-clean uppercase tracking-wider text-[#716C64] hover:text-[#25231F] dark:hover:text-[#F7F3EB] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3.5 px-8 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-semibold tracking-[0.2em] uppercase transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Mengesahkan...' : 'Hantar Pengesahan'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 5: SUCCESS STATE */}
        {currentStep === 5 && (
          <div className="py-8 text-center space-y-6 animate-fade-in max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#25231F] dark:bg-[#F7F3EB] text-[#F7F3EB] dark:text-[#25231F] flex items-center justify-center mx-auto shadow-md">
              <Check className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] font-sans-clean text-[#B7A58A]">
                RSVP Confirmed
              </p>
              <h3 className="font-serif-luxury text-4xl sm:text-5xl text-[#25231F] dark:text-[#F7F3EB] font-normal">
                You're on the list.
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed pt-1">
                {formData.attending
                  ? `Terima kasih, ${formData.fullName}. Pengesahan kehadiran sebanyak ${formData.paxCount} orang telah berjaya disimpan.`
                  : `Terima kasih atas maklum balas dan doa tulus anda, ${formData.fullName}.`}
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 rounded-xl bg-[#F7F3EB] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] inline-block mx-auto">
              <p className="text-[10px] uppercase tracking-widest text-[#716C64] font-sans-clean">
                Nombor Rujukan
              </p>
              <p className="font-mono text-lg font-bold text-[#25231F] dark:text-[#F7F3EB] tracking-wider mt-0.5">
                {referenceCode}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href="#tarikh"
                className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#25231F] dark:bg-[#F7F3EB] text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase shadow-xs"
              >
                Tambah ke Kalendar
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto py-3 px-6 rounded-full border border-[#DED6C9] dark:border-[#2F2C27] text-[#716C64] dark:text-[#B7A58A] text-xs font-sans-clean tracking-wider uppercase transition-colors"
              >
                Hantar Maklum Balas Lain
              </button>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
