"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/site";

type View = "day" | "night";

/**
 * Entrambi i filmati sono serviti dal sito, non da Pexels: nessuna richiesta a
 * terzi al caricamento, quindi nessun indirizzo IP del visitatore trasmesso
 * prima del consenso (docs/PRIVACY-AUDIT.md). Licenza Pexels: uso commerciale
 * libero, attribuzione non richiesta.
 */
const CLIPS: Record<View, { src: string; poster: string }> = {
  day: { src: asset("/video/miami-day.mp4"), poster: asset("/video/miami-day.jpg") },
  night: { src: asset("/video/miami-night.mp4"), poster: asset("/video/miami-night.jpg") },
};

/** La scelta non viene memorizzata: nessun cookie, nessuno storage. */
const DEFAULT_VIEW: View = "day";

export interface HeroMediaLabels {
  pause: string;
  play: string;
  viewLabel: string;
  day: string;
  night: string;
}

export function HeroMedia({ labels }: { labels: HeroMediaLabels }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [view, setView] = useState<View>(DEFAULT_VIEW);
  /** Chi arriva con reduced-motion resta sul fotogramma fisso, anche cambiando vista. */
  const motionAllowed = useRef(true);

  /**
   * Gira al montaggio e ogni volta che cambia vista. Deve stare in un effetto:
   * il `key` sul <video> lo fa rimontare, quindi chiamare play() dentro il
   * gestore del click agirebbe sull'elemento vecchio e il filmato resterebbe
   * fermo sul fotogramma di copertina.
   */
  useEffect(() => {
    motionAllowed.current = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!motionAllowed.current) {
      setPlaying(false);
      return;
    }

    const element = video.current;
    if (!element) return;
    element.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [view]);

  const choose = (next: View) => {
    if (next !== view) setView(next);
  };

  const toggle = () => {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      void element.play();
      setPlaying(true);
    } else {
      element.pause();
      setPlaying(false);
    }
  };

  const clip = CLIPS[view];

  return (
    <>
      <div className="hero__media" aria-hidden="true">
        <video ref={video} key={view} poster={clip.poster} muted loop playsInline preload="none">
          <source src={clip.src} type="video/mp4" />
        </video>
      </div>

      <div className="hero__controls">
        <div className="hero__views" role="group" aria-label={labels.viewLabel}>
          <button type="button" onClick={() => choose("day")} aria-pressed={view === "day"} className="hero__view">
            {labels.day}
          </button>
          <button type="button" onClick={() => choose("night")} aria-pressed={view === "night"} className="hero__view">
            {labels.night}
          </button>
        </div>
        <button type="button" onClick={toggle} className="hero__view hero__view--toggle">
          {playing ? labels.pause : labels.play}
        </button>
      </div>
    </>
  );
}
