import React, { useState } from 'react';
import { Calendar as CalendarIcon, Download, ExternalLink, Check, Heart, Bell } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const OpeningCalendarSection: React.FC = () => {
  const [copiedAlert, setCopiedAlert] = useState(false);

  // November 2026 calendar construction
  // Nov 1, 2026 is Sunday (day index 0)
  // November has 30 days
  const daysOfWeek = ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'];
  const totalDaysInNov = 30;
  // In November 2026: Nov 1 is Sunday (index 0)
  const days = Array.from({ length: totalDaysInNov }, (_, i) => i + 1);

  // Google Calendar URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Walimatulurus ${WEDDING_DATA.couple.shortNames}`);
    // 2026-11-14 16:00 to 23:00 GMT+8 -> in UTC: 20261114T080000Z to 20261114T150000Z
    const dates = "20261114T080000Z/20261114T150000Z";
    const details = encodeURIComponent(
      `Walimatulurus ${WEDDING_DATA.couple.groomFullName} & ${WEDDING_DATA.couple.brideFullName}.\n\nLokasi: ${WEDDING_DATA.venue.name}\nAlamat: ${WEDDING_DATA.venue.address}\n\nKehadiran anda melengkapkan hari bahagia kami.`
    );
    const location = encodeURIComponent(WEDDING_DATA.venue.name + ", " + WEDDING_DATA.venue.address);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // iCal (.ics) file generator and download
  const downloadIcsFile = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Walimatulurus Daniel Iman//Wedding Event//MS",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:walimatulurus-daniel-iman-20261114@wedding.my",
      "DTSTAMP:20261004T090000Z",
      "DTSTART:20261114T080000Z",
      "DTEND:20261114T150000Z",
      `SUMMARY:Walimatulurus ${WEDDING_DATA.couple.shortNames}`,
      `DESCRIPTION:Walimatulurus ${WEDDING_DATA.couple.groomFullName} & ${WEDDING_DATA.couple.brideFullName}`,
      `LOCATION:${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Walimatulurus_${WEDDING_DATA.couple.shortNames.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedAlert(true);
    setTimeout(() => setCopiedAlert(false), 3000);
  };

  return (
    <section id="kalendar" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
      {/* Quranic Verse / Blessing Card */}
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800 text-center mb-12">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F3EF] dark:bg-stone-800 text-[#8D735C] mb-4">
          <Heart className="w-5 h-5 fill-[#8D735C]/20" />
        </div>

        {/* Bismillah */}
        <p className="font-serif-luxury text-xl sm:text-2xl text-stone-800 dark:text-stone-200 mb-4 tracking-wide">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Surah Arabic text */}
        <p className="font-serif-luxury text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-loose max-w-2xl mx-auto mb-4 px-2">
          "{WEDDING_DATA.quranVerse.arabic}"
        </p>

        {/* Translation */}
        <p className="font-sans-clean text-xs sm:text-sm text-stone-500 dark:text-stone-400 italic max-w-2xl mx-auto leading-relaxed mb-3">
          {WEDDING_DATA.quranVerse.translation}
        </p>
        <p className="text-[11px] font-sans-clean uppercase tracking-widest text-[#8D735C] dark:text-[#C5B5A3] font-semibold">
          — {WEDDING_DATA.quranVerse.surah}
        </p>

        {/* Parents' Invitation Note */}
        <div className="mt-8 pt-8 border-t border-stone-100 dark:border-stone-800/80 max-w-xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-sans-clean">
            Undangan Kasih & Mesra Daripada
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif-luxury text-stone-800 dark:text-stone-200">
            <div className="p-3 bg-stone-50/70 dark:bg-stone-800/40 rounded-xl">
              <p className="text-[10px] text-stone-400 uppercase tracking-wider font-sans mb-1">Keluarga Pengantin Lelaki</p>
              <p className="font-medium">{WEDDING_DATA.couple.parentsGroom}</p>
            </div>
            <div className="p-3 bg-stone-50/70 dark:bg-stone-800/40 rounded-xl">
              <p className="text-[10px] text-stone-400 uppercase tracking-wider font-sans mb-1">Keluarga Pengantin Perempuan</p>
              <p className="font-medium">{WEDDING_DATA.couple.parentsBride}</p>
            </div>
          </div>

          <p className="text-xs font-sans-clean text-stone-600 dark:text-stone-400 leading-relaxed pt-2">
            Menjemput Dato’ / Datin / Tuan / Puan / Encik / Cik sekeluarga hadir menyerikan majlis perkahwinan putera-puteri kami yang dikasihi.
          </p>
        </div>
      </div>

      {/* Mini Calendar Card */}
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Simpan Tarikh Bahagia
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            November 2026
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Majlis bermula jam 4:00 petang di The Glasshouse at Seputeh
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="max-w-md mx-auto">
          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {daysOfWeek.map((day) => (
              <span
                key={day}
                className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 py-1"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Days Numbers */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center">
            {days.map((d) => {
              const isEventDay = d === WEDDING_DATA.event.dayOfMonth;

              return (
                <div key={d} className="relative aspect-square flex items-center justify-center">
                  {isEventDay ? (
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#5A3825] to-[#8D735C] text-white flex flex-col items-center justify-center shadow-md relative animate-pulse ring-4 ring-[#E7DEC8] dark:ring-stone-700">
                      <span className="text-xs sm:text-sm font-bold font-sans-clean">{d}</span>
                      <span className="text-[7px] tracking-tight uppercase leading-none font-sans font-medium text-[#E7DEC8]">
                        Nikah
                      </span>
                    </div>
                  ) : (
                    <span
                      className={`text-xs sm:text-sm font-sans-clean rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center ${
                        d < 14
                          ? 'text-stone-400 dark:text-stone-600'
                          : 'text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      {d}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Special date badge & notes */}
          <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800 text-center">
            <div className="inline-flex items-center gap-2 bg-[#F8F6F0] dark:bg-stone-800/80 px-4 py-2 rounded-full border border-stone-200/60 dark:border-stone-700/60 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8D735C] animate-ping" />
              <p className="text-xs font-medium text-stone-800 dark:text-stone-200">
                Sabtu, 14 November 2026 · Hari Bersejarah Kami
              </p>
            </div>

            {/* Calendar CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-750 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-sans-clean text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <CalendarIcon className="w-3.5 h-3.5 text-[#8D735C]" />
                <span>Simpan di Google Calendar</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <button
                onClick={downloadIcsFile}
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2C2B2A] hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-sans-clean text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                {copiedAlert ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                    <span>Fail .ICS Dimuat Turun!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Muat Turun Kalendar (.ICS)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
