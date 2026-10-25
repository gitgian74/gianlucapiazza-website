"use client";

import { useMemo } from "react";
import { OFFICES } from "@/content/firm";
import type { Dict } from "@/content/types";
import { formatIntervals, intersectAll, localTime, offsetLabel, tzOffsetMinutes, windowOnUtcAxis } from "@/lib/time";
import { useNow } from "@/lib/useNow";

export function OfficeHours({ copy, isoNow }: { copy: Dict["home"]["hours"]; isoNow: string }) {
  const now = useNow(isoNow);

  const rows = useMemo(
    () =>
      OFFICES.map((office) => {
        const offset = tzOffsetMinutes(office.timeZone, now);
        return {
          office,
          offset,
          segments: windowOnUtcAxis(office.opens, office.closes, offset),
          local: localTime(office.timeZone, now),
        };
      }),
    [now],
  );

  const overlap = useMemo(() => intersectAll(rows.map((row) => row.segments)), [rows]);
  const overlapText = overlap.length > 0 ? `${copy.overlapLegend} — ${formatIntervals(overlap)}` : copy.overlapUnavailable;

  return (
    <div className="hours">
      <figure className="hours__chart">
        <div className="hours__axis">
          <p>{copy.officeLabel}</p>
          <div className="hours__ticks" aria-hidden="true">
            <span>00</span>
            <span>06</span>
            <span>12</span>
            <span>18</span>
            <span>24</span>
          </div>
          <p>{copy.nowLabel}</p>
        </div>

        {rows.map((row) => (
          <div key={row.office.id} className="hours__row">
            <p className="hours__city">
              {row.office.city}
              <br />
              <span className="hours__window">
                {offsetLabel(row.offset)} — {String(row.office.opens).padStart(2, "0")}:00–
                {String(row.office.closes).padStart(2, "0")}:00
              </span>
            </p>
            <div className="hours__track" aria-hidden="true">
              {overlap.map((segment) => (
                <span
                  key={`overlap-${segment.start}`}
                  className="hours__overlap"
                  style={{ left: `${(segment.start / 24) * 100}%`, width: `${((segment.end - segment.start) / 24) * 100}%` }}
                />
              ))}
              {row.segments.map((segment) => (
                <span
                  key={`bar-${segment.start}`}
                  className="hours__bar"
                  style={{ left: `${(segment.start / 24) * 100}%`, width: `${((segment.end - segment.start) / 24) * 100}%` }}
                />
              ))}
            </div>
            <p className="hours__now">
              <time dateTime={now.toISOString()}>{row.local}</time>
            </p>
          </div>
        ))}
      </figure>

      <div className="hours__legend">
        <span className="hours__key">
          <span className="hours__swatch" style={{ background: "var(--color-text)" }} aria-hidden="true" />
          {copy.localLegend}
        </span>
        <span className="hours__key">
          <span className="hours__swatch hours__swatch--overlap" aria-hidden="true" />
          {overlapText}
        </span>
      </div>
      <p className="hours__note" style={{ marginTop: "12px" }}>
        {copy.note}
      </p>
    </div>
  );
}
