"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export interface MenuEntry {
  label: string;
  href: string;
  current: boolean;
}

export function MobileMenu({
  entries,
  openLabel,
  closeLabel,
  menuLabel,
  langHref,
  langCode,
  langLabel,
  ctaLabel,
  ctaHref,
}: {
  entries: MenuEntry[];
  openLabel: string;
  closeLabel: string;
  menuLabel: string;
  langHref: string;
  langCode: string;
  langLabel: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    trigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panel.current) return;

      const focusable = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(true)}
      >
        <span className="nav__burger" aria-hidden="true" />
        {openLabel}
      </button>

      {open ? (
        <div
          id="site-menu"
          ref={panel}
          className="menu"
          role="dialog"
          aria-modal="true"
          aria-label={menuLabel}
        >
          <div className="menu__head">
            <span className="nav__brand" aria-hidden="true">
              SILVESTRI<span className="dot">.</span>
            </span>
            <button type="button" className="nav__toggle" onClick={close}>
              {closeLabel}
            </button>
          </div>

          <ul className="menu__list">
            {entries.map((entry) => (
              <li key={entry.href} className="menu__item">
                <Link
                  href={entry.href}
                  className="menu__anchor"
                  aria-current={entry.current ? "page" : undefined}
                  onClick={close}
                >
                  {entry.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="menu__foot">
            <Link href={ctaHref} className="btn btn--primary btn--block" onClick={close}>
              {ctaLabel}
            </Link>
            <Link href={langHref} className="nav__lang" hrefLang={langCode.toLowerCase()} onClick={close}>
              <span aria-hidden="true">{langCode}</span>
              <span className="sr-only">{langLabel}</span>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
