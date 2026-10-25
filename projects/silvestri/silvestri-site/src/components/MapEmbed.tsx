"use client";

import { useState } from "react";
import type { Dict } from "@/content/types";

/**
 * Nothing is requested from Google until the visitor asks for it: no third-party
 * cookie, no IP disclosure on page load, no consent banner needed.
 */
export function MapEmbed({ src, city, copy }: { src: string; city: string; copy: Dict["contact"]["map"] }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="map">
      {loaded ? (
        <iframe src={src} title={`${copy.title} — ${city}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="map__consent">
          <p>{copy.consent}</p>
          <div>
            <button type="button" className="btn btn--ghost" onClick={() => setLoaded(true)}>
              {copy.load}
            </button>
          </div>
          <p className="caption">{copy.provider}</p>
        </div>
      )}
    </div>
  );
}
