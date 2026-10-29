import { BUSINESS, DIRECTIONS } from "@/lib/data";
import { asset, srcset } from "@/lib/asset";
import { Reveal } from "./Reveal";

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={className}>
      <path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8L12 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-pine text-paper">
      {/* Real photograph of the cafe, captured from its own Google listing */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={asset("/images/hero-1920.jpg")}
          srcSet={srcset("/images/hero", [560, 800, 1080, 1440, 1920])}
          sizes="100vw"
          alt=""
          width={1920}
          height={1337}
          fetchPriority="high"
          className="slow-pan h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine/95 via-pine/72 to-pine/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-transparent to-pine/40" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-28 pt-32 sm:px-6 sm:pb-32">
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">
            <span>{BUSINESS.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/70" />
            <span>{BUSINESS.area}</span>
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7.2vw,5.4rem)] font-medium leading-[1.02] tracking-tight">
            The little green house
            <br />
            that <em className="text-gold">never closes.</em>
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
            {BUSINESS.nameHindi} is a tiffin center and coffee house in River View Colony, Koni —
            serving home-style meals, chai and coffee around the clock.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-pine transition-colors hover:bg-gold-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Get directions
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-paper/40 px-7 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.mapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-1.5 rounded-full px-3 py-3 text-sm font-semibold text-paper/90 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-paper"
            >
              <Star className="text-gold" />
              <span>
                {BUSINESS.rating} on Google
                <span className="sr-only"> — see reviews on the listing</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* 24-hour badge, bottom right */}
      <div className="pointer-events-none absolute bottom-6 right-4 hidden select-none sm:right-6 sm:block">
        <Reveal delay={350}>
          <div className="rounded-2xl border border-gold/30 bg-pine/60 px-5 py-4 text-right backdrop-blur-sm">
            <p className="font-display text-4xl font-semibold leading-none text-gold">24</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-paper/80">
              hours · open now
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
