"use client";

import { useCallback, useSyncExternalStore } from "react";

const TICK_MS = 30_000;
const bucket = (ms: number) => Math.floor(ms / TICK_MS);

/**
 * The wall clock as an external store: the server snapshot keeps the first
 * render identical on both sides, then the browser takes over on its own ticks.
 * A static build renders a build-time timestamp, which is corrected as soon as
 * the component hydrates.
 */
export function useNow(isoNow: string): Date {
  const subscribe = useCallback((onChange: () => void) => {
    const id = window.setInterval(onChange, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  const serverBucket = bucket(Date.parse(isoNow));
  const current = useSyncExternalStore(
    subscribe,
    () => bucket(Date.now()),
    () => serverBucket,
  );

  return new Date(current * TICK_MS);
}
