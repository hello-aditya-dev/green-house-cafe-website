"use client";

import { useEffect, useState } from "react";
import { BUSINESS, DIRECTIONS } from "@/lib/data";

export function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-pine/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold text-[15px] font-bold text-pine"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          Call the cafe
        </a>
        <a
          href={DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-paper/40 text-[15px] font-semibold text-paper"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Directions
        </a>
      </div>
    </div>
  );
}
