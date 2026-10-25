"use client";

import { OFFICES } from "@/content/firm";
import { localTime } from "@/lib/time";
import { useNow } from "@/lib/useNow";

export function LocalClocks({ isoNow, label }: { isoNow: string; label: string }) {
  const now = useNow(isoNow);

  return (
    <dl className="hero__clocks" aria-label={label}>
      {OFFICES.map((office) => (
        <div key={office.id} className="hero__clock">
          <dt>{office.city}</dt>
          <dd>
            <time dateTime={now.toISOString()}>{localTime(office.timeZone, now)}</time>
          </dd>
        </div>
      ))}
    </dl>
  );
}
