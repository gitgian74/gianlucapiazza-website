"use client";

import { useEffect, useRef, useState } from "react";

const POSTER =
  "https://images.pexels.com/videos/19109601/florida-miami-miami-drone-miami-florida-19109601.jpeg?auto=compress&cs=tinysrgb&w=1920";
const SOURCE = "https://videos.pexels.com/video-files/19109601/19109601-hd_1920_1080_24fps.mp4";

/**
 * Only rendered when NEXT_PUBLIC_REFERENCE_MEDIA is on: the Pexels clip is an
 * unlicensed art-direction reference. The poster carries the first paint, the
 * clip never blocks it, and reduced-motion visitors keep the still frame.
 */
export function HeroMedia({ pauseLabel, playLabel }: { pauseLabel: string; playLabel: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, []);

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

  return (
    <>
      <div className="hero__media" aria-hidden="true">
        <video ref={video} poster={POSTER} muted loop playsInline preload="none">
          <source src={SOURCE} type="video/mp4" />
        </video>
      </div>
      <button
        type="button"
        onClick={toggle}
        className="btn btn--ghost-ink"
        style={{ position: "absolute", right: "var(--gutter)", bottom: "16px", zIndex: 3, minHeight: "40px", padding: "8px 14px" }}
      >
        {playing ? pauseLabel : playLabel}
      </button>
    </>
  );
}
