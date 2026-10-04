/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OpeningCalendarSection } from './components/OpeningCalendarSection';
import { VenueSection } from './components/VenueSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { DressCodeSection } from './components/DressCodeSection';
import { AdditionalDetailsSection } from './components/AdditionalDetailsSection';
import { ContactSection } from './components/ContactSection';
import { RsvpSection } from './components/RsvpSection';
import { CountdownAndClosingSection } from './components/CountdownAndClosingSection';
import { AudioPlayerFloating } from './components/AudioPlayerFloating';
import { EnvelopeModal } from './components/EnvelopeModal';
import { romanticAudio } from './utils/romanticAudio';
import { WEDDING_DATA } from './data/weddingData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('wedding_dark_mode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  const [envelopeOpen, setEnvelopeOpen] = useState<boolean>(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('wedding_dark_mode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const handleMusicStatus = (status: boolean) => {
      setIsPlayingMusic(status);
    };
    romanticAudio.addListener(handleMusicStatus);
    return () => {
      romanticAudio.removeListener(handleMusicStatus);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleMusic = () => {
    romanticAudio.toggle();
  };

  const handleOpenInvitation = () => {
    setEnvelopeOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#191816] text-[#2C2B2A] dark:text-[#E7DEC8] paper-pattern transition-colors duration-300 font-sans-clean flex flex-col">
      {/* Interactive Wax-Sealed Envelope Intro Modal */}
      <EnvelopeModal
        isOpen={envelopeOpen}
        onOpenInvitation={handleOpenInvitation}
        guestName="YBhg. Dato' / Datin / Tuan / Puan Sekeluarga"
      />

      {/* Top Bar Navigation (Clean 3-zone contract) */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenEnvelope={() => setEnvelopeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto">
        {/* 1. Hero & Front */}
        <HeroSection
          onToggleMusic={handleToggleMusic}
          isPlayingMusic={isPlayingMusic}
        />

        {/* 2. Opening Greeting & Mini Calendar */}
        <OpeningCalendarSection />

        {/* 3. Venue & Location Navigation */}
        <VenueSection />

        {/* 4. Tentative / Event Timeline & Candid Moments */}
        <TimelineSection />

        {/* Galeri Foto & Memori Indah (Masonry Grid with Lightbox) */}
        <GallerySection />

        {/* 5. Dress Code & Color Swatch Palette */}
        <DressCodeSection />

        {/* 6. Additional Details (Salam Kaut, DuitNow QR & Important Notes) */}
        <AdditionalDetailsSection />

        {/* 7. Contact Coordinators / Wedding Planner */}
        <ContactSection />

        {/* 8. Interactive RSVP Form & Live Guestbook Feed */}
        <RsvpSection />

        {/* 9. Countdown Timer & Closing Blessing */}
        <CountdownAndClosingSection
          onReopenEnvelope={() => setEnvelopeOpen(true)}
        />
      </main>

      {/* Floating Audio Player Control with Vinyl Disk */}
      <AudioPlayerFloating />

      {/* Quiet Editorial Footer */}
      <footer className="w-full border-t border-stone-200/70 dark:border-stone-800/80 py-8 px-4 text-center text-xs text-stone-500 dark:text-stone-400 font-sans-clean mt-12">
        <p className="font-serif-luxury text-base text-stone-700 dark:text-stone-300 mb-1">
          {WEDDING_DATA.couple.shortNames}
        </p>
        <p className="text-[11px] text-stone-400 dark:text-stone-500">
          Walimatulurus Digital Invitation · Hak Cipta Terpelihara © 2026
        </p>
      </footer>
    </div>
  );
}
