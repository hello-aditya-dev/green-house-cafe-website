"use client";

import { useEffect, useRef, useState } from "react";
import { BUSINESS } from "@/lib/data";

const NAV = [
  { href: "#story", label: "The story" },
  { href: "#serve", label: "What we serve" },
  { href: "#house", label: "The house" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape and lock scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-pine/95 text-paper backdrop-blur-sm"
          : "bg-transparent text-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight"
          aria-label="Green House Cafe — back to top"
        >
          <span className="italic">Green House</span>
          <span className="text-gold transition-colors group-hover:text-gold-2">Cafe</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="rounded-full border border-gold/70 px-4 py-1.5 text-gold transition-colors hover:bg-gold hover:text-pine"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <nav
          className="flex flex-col gap-1 border-b border-white/10 bg-pine px-4 pb-6 pt-2 text-paper"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3.5 font-display text-2xl font-medium hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-3 rounded-full bg-gold px-4 py-3 text-center font-semibold text-pine"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
