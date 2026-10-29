"use client";

import { useCallback, useEffect, useState } from "react";
import { asset, srcset } from "@/lib/asset";

type Shot = {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const SHOTS: Shot[] = [
  {
    src: asset("/images/hero-1920.jpg"),
    srcSet: srcset("/images/hero", [560, 800, 1080, 1440, 1920]),
    sizes: "(min-width: 1024px) 640px, 92vw",
    width: 1920,
    height: 1440,
    alt: "Green House Cafe exterior at night with its signboard and fairy-lit canopy",
    caption: "The front of the house, after dusk — the green mesh, the lights, the tree.",
  },
  {
    src: asset("/images/sign-1200.jpg"),
    srcSet: srcset("/images/sign", [640, 900, 1200]),
    sizes: "(min-width: 1024px) 420px, 92vw",
    width: 1200,
    height: 804,
    alt: "Close view of the Green House Cafe signboard in yellow cursive lettering",
    caption: "\"Green House\" — hand-lettered in warm yellow on black.",
  },
  {
    src: asset("/images/street-1200.jpg"),
    srcSet: srcset("/images/street", [640, 900, 1200]),
    sizes: "(min-width: 1024px) 420px, 92vw",
    width: 1200,
    height: 900,
    alt: "The Green House Cafe sign at dusk above the Koni street",
    caption: "The sign at last light — the Koni street settling around it.",
  },
];

export function House() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i === null ? i : (i + dir + SHOTS.length) % SHOTS.length));
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <section id="house" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-moss">The house</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-medium leading-[1.12] tracking-tight">
              Three photographs. One address.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
            Every image on this page is the actual cafe, taken from its public Google Maps listing —
            nothing staged, nothing borrowed. Tap any photo to view it larger.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-5 sm:gap-5">
          {/* Large left tile */}
          <figure className="group sm:col-span-3 sm:row-span-2">
            <button
              type="button"
              onClick={() => setIndex(0)}
              className="block w-full overflow-hidden rounded-2xl focus-visible:outline-gold"
              aria-label="Open larger view: the cafe front at night"
            >
              <img
                src={SHOTS[0].src}
                srcSet={SHOTS[0].srcSet}
                sizes={SHOTS[0].sizes}
                alt={SHOTS[0].alt}
                width={SHOTS[0].width}
                height={SHOTS[0].height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
            <figcaption className="mt-3 text-xs text-ink-soft">{SHOTS[0].caption}</figcaption>
          </figure>

          {/* Two stacked right tiles */}
          {[1, 2].map((i) => (
            <figure key={i} className="group sm:col-span-2">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="block w-full overflow-hidden rounded-2xl focus-visible:outline-gold"
                aria-label={`Open larger view: ${SHOTS[i].alt}`}
              >
                <img
                  src={SHOTS[i].src}
                  srcSet={SHOTS[i].srcSet}
                  sizes={SHOTS[i].sizes}
                  alt={SHOTS[i].alt}
                  width={SHOTS[i].width}
                  height={SHOTS[i].height}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="mt-3 text-xs text-ink-soft">{SHOTS[i].caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex flex-col bg-pine/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-between text-paper">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {index + 1} / {SHOTS.length}
            </p>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/25 px-4 hover:bg-white/10"
              aria-label="Close photo viewer (Esc)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={SHOTS[index].src}
              srcSet={SHOTS[index].srcSet}
              sizes="90vw"
              alt={SHOTS[index].alt}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>
          <div className="flex items-center justify-between gap-3 pt-4 text-paper" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => step(-1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 py-2 text-sm font-semibold hover:bg-white/10"
              aria-label="Previous photo"
            >
              ← Prev
            </button>
            <p className="mx-auto max-w-md text-center text-xs text-paper/70 sm:text-sm">
              {SHOTS[index].caption}
            </p>
            <button
              type="button"
              onClick={() => step(1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 py-2 text-sm font-semibold hover:bg-white/10"
              aria-label="Next photo"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
