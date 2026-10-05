import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';

export const AudioPlayerFloating: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(romanticAudio.getIsPlaying());

  useEffect(() => {
    const handleStatus = (status: boolean) => {
      setIsPlaying(status);
    };
    romanticAudio.addListener(handleStatus);
    return () => {
      romanticAudio.removeListener(handleStatus);
    };
  }, []);

  const handleToggle = () => {
    const status = romanticAudio.toggle();
    setIsPlaying(status);
  };

  return (
    <aside aria-label="Muzik Latar" className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleToggle}
        type="button"
        className="group flex items-center gap-3 py-2.5 px-4 rounded-full bg-[#F7F3EB]/90 dark:bg-[#1E1C18]/90 backdrop-blur-md border border-[#DED6C9] dark:border-[#2F2C27] shadow-lg hover:border-[#B7A58A] transition-all cursor-pointer select-none"
        title={isPlaying ? "Jeda Muzik" : "Mainkan Muzik"}
      >
        {/* Animated Waveform Bars or Pause Icon */}
        <div className="w-5 h-5 flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-3.5">
              <span className="w-[2px] bg-[#B7A58A] rounded-full animate-waveform-1" />
              <span className="w-[2px] bg-[#B7A58A] rounded-full animate-waveform-2" />
              <span className="w-[2px] bg-[#B7A58A] rounded-full animate-waveform-3" />
              <span className="w-[2px] bg-[#B7A58A] rounded-full animate-waveform-4" />
            </div>
          ) : (
            <Play className="w-3.5 h-3.5 text-[#716C64] dark:text-[#B7A58A] ml-0.5" />
          )}
        </div>

        {/* Minimal Typography Label */}
        <div className="text-left pr-1 hidden sm:block">
          <p className="text-[10px] font-sans-clean uppercase tracking-[0.25em] text-[#716C64] dark:text-[#B7A58A] leading-tight">
            {isPlaying ? 'Alunan Akustik' : 'Muzik Latar'}
          </p>
          <p className="text-[9px] font-sans-clean text-[#716C64]/70 dark:text-[#B7A58A]/70 leading-tight">
            {isPlaying ? 'Sentuh untuk jeda' : 'Sentuh untuk main'}
          </p>
        </div>
      </button>
    </aside>
  );
};
