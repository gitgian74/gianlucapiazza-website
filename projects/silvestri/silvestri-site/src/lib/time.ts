/**
 * Time-zone maths for the office-hours figure.
 *
 * The prototype hard-coded a 13:00–16:00 UTC overlap and fixed UTC+2 / UTC−3 /
 * UTC−4 labels, which stop being true at every daylight-saving change — and the
 * three countries do not switch on the same weekend. Everything here is derived
 * from the IANA zones instead, for the date it is given.
 */

export interface Interval {
  /** Hours on a 0–24 UTC axis. */
  start: number;
  end: number;
}

/** Offset of `timeZone` from UTC, in minutes, at `date` (positive = east). */
export function tzOffsetMinutes(timeZone: string, date: Date): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = dtf.formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((p) => p.type === type)?.value ?? "0");
  const asUtc = Date.UTC(
    read("year"),
    read("month") - 1,
    read("day"),
    read("hour"),
    read("minute"),
    read("second"),
  );
  // formatToParts drops milliseconds, so compare against a whole-second instant.
  const whole = date.getTime() - date.getMilliseconds();
  return Math.round((asUtc - whole) / 60000);
}

export function offsetLabel(minutes: number): string {
  const sign = minutes < 0 ? "−" : "+";
  const abs = Math.abs(minutes);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return `UTC${sign}${h}${m ? `:${String(m).padStart(2, "0")}` : ""}`;
}

/** A local opening window expressed on the UTC axis, split when it wraps midnight. */
export function windowOnUtcAxis(opens: number, closes: number, offsetMinutes: number): Interval[] {
  const shift = offsetMinutes / 60;
  const start = opens - shift;
  const end = closes - shift;
  return normalise(start, end);
}

function normalise(start: number, end: number): Interval[] {
  const mod = (n: number) => ((n % 24) + 24) % 24;
  const s = mod(start);
  const e = mod(end);
  if (end - start >= 24) return [{ start: 0, end: 24 }];
  if (s < e) return [{ start: s, end: e }];
  if (s === e) return [];
  return [
    { start: s, end: 24 },
    { start: 0, end: e },
  ];
}

function intersectPair(a: Interval[], b: Interval[]): Interval[] {
  const out: Interval[] = [];
  for (const x of a) {
    for (const y of b) {
      const start = Math.max(x.start, y.start);
      const end = Math.min(x.end, y.end);
      if (end - start > 1 / 60) out.push({ start, end });
    }
  }
  return out;
}

export function intersectAll(sets: Interval[][]): Interval[] {
  if (sets.length === 0) return [];
  return sets.reduce((acc, set) => intersectPair(acc, set));
}

export function formatHour(hours: number): string {
  const total = Math.round(hours * 60);
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function formatIntervals(intervals: Interval[]): string {
  return intervals.map((i) => `${formatHour(i.start)}–${formatHour(i.end)} UTC`).join(" · ");
}

/** "HH:mm" in the given zone. Identical output on the server and in the browser. */
export function localTime(timeZone: string, date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
