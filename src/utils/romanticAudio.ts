/**
 * Soothing Romantic Acoustic Music Synthesizer
 * Uses Web Audio API to generate a warm, gentle acoustic harp/piano progression
 * in C Major / G Major pentatonic scale with soft decay and reverb-like echo.
 * 100% reliable, zero external network audio loading errors, zero CORS blocks.
 */

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private volumeNode: GainNode | null = null;
  private intervalId: number | null = null;
  private volume: number = 0.35;
  private step: number = 0;
  private listeners: ((playing: boolean) => void)[] = [];

  // Gentle acoustic melody frequencies (Harp / Celesta / Rhodes harmonic frequencies)
  private readonly chordProgression = [
    // Chord 1: Cmaj9
    [261.63, 329.63, 392.00, 493.88, 523.25, 659.25],
    // Chord 2: Am9
    [220.00, 261.63, 329.63, 392.00, 493.88, 587.33],
    // Chord 3: Fmaj7#11
    [174.61, 261.63, 329.63, 369.99, 440.00, 523.25],
    // Chord 4: Gsus4 / G
    [196.00, 293.66, 392.00, 440.00, 493.88, 587.33],
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.volumeNode = this.ctx.createGain();
      this.volumeNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.volumeNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playGentleNote(freq: number, timeOffset: number = 0, duration: number = 2.4) {
    if (!this.ctx || !this.volumeNode) return;
    const now = this.ctx.currentTime + timeOffset;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm soft acoustic tone
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now); // soft harmonic shimmer
    
    // Warm lowpass filter like a wooden harp/piano
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(400, now + duration);

    // Envelope
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.35, now + 0.05); // smooth attack
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration); // gentle decay

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(filter);
    filter.connect(this.volumeNode);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  private triggerChordArpeggio() {
    const chord = this.chordProgression[this.step % this.chordProgression.length];
    this.step++;

    // Play an undulating gentle arpeggio pattern
    chord.forEach((freq, i) => {
      this.playGentleNote(freq, i * 0.42, 3.2);
    });

    // Sub bass grounding note
    const bassFreq = chord[0] / 2;
    this.playGentleNote(bassFreq, 0, 4.0);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  public play() {
    try {
      this.initContext();
      if (!this.isPlaying) {
        this.isPlaying = true;
        this.triggerChordArpeggio();
        this.intervalId = window.setInterval(() => {
          this.triggerChordArpeggio();
        }, 2800);
        this.notifyListeners();
      }
    } catch {
      console.warn("Audio playback waiting for user gesture");
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.notifyListeners();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.volumeNode && this.ctx) {
      this.volumeNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public addListener(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
  }

  public removeListener(fn: (playing: boolean) => void) {
    this.listeners = this.listeners.filter((l) => l !== fn);
  }

  private notifyListeners() {
    this.listeners.forEach((l) => l(this.isPlaying));
  }
}

export const romanticAudio = new RomanticAudioEngine();
