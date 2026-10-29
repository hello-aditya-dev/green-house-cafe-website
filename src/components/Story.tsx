import { BUSINESS } from "@/lib/data";
import { asset, srcset } from "@/lib/asset";
import { Reveal } from "./Reveal";

const FACTS = [
  { k: "24", unit: "hours", label: "Open every day, around the clock" },
  { k: "5.0", unit: "stars", label: "Google rating — linked to the live listing" },
  { k: "2", unit: "min", label: "From Guru Ghasidas University gate road, Koni" },
];

export function Story() {
  return (
    <section id="story" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-moss">
              The story
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-medium leading-[1.12] tracking-tight">
              A green-meshed house on a Koni lane,
              <br className="hidden sm:block" /> glowing long after midnight.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-6 max-w-xl space-y-5 text-[15.5px] leading-relaxed text-ink-soft sm:text-base">
              <p>
                Green House Cafe sits in River View Colony, a few lanes from the university side of
                Koni, Bilaspur. The name is literal: the front of the cafe is dressed in green mesh,
                strung with warm fairy lights, with a hand-lettered sign above the counter.
              </p>
              <p>
                By day it works as a <strong className="font-semibold text-ink">tiffin center</strong>{" "}
                — the kind of place where the day&apos;s home-style menu is decided in the kitchen
                that morning — and as a <strong className="font-semibold text-ink">coffee house</strong>{" "}
                that keeps the kettle on at every other hour. It is listed open 24 hours, which makes
                it the rare late-night address in this part of town.
              </p>
              <p className="border-l-2 border-gold pl-4 font-display text-lg italic text-ink">
                When the engineering college lets out and the city goes quiet, this is where the
                light stays on.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-sand pt-8">
              {FACTS.map((f) => (
                <div key={f.k}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="font-display text-3xl font-semibold text-pine sm:text-4xl">
                      {f.k}
                    </span>{" "}
                    <span className="text-xs font-bold uppercase tracking-widest text-moss">
                      {f.unit}
                    </span>
                    <p className="mt-2 text-xs leading-snug text-ink-soft sm:text-[13px]">
                      {f.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={120}>
            <figure className="group relative">
              <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(18,53,36,0.45)]">
                <img
                  src={asset("/images/facade-1200.jpg")}
                  srcSet={srcset("/images/facade", [640, 900, 1200])}
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 92vw"
                  alt="The green-meshed wall of Green House Cafe glowing under warm string lights at night"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/5.4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 flex items-start gap-2 text-xs text-ink-soft">
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 shrink-0 text-moss">
                  <path d="M4 19V5m0 14h16M8 15l3-5 3 3 4-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                </svg>
                The cafe&apos;s real front — photographed from its own Google Maps listing.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={220}>
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-pine px-5 py-4 text-paper shadow-lg sm:block lg:-left-10">
              <p className="font-hindi text-lg leading-tight text-gold">{BUSINESS.nameHindi}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-paper/70">
                as the cafe writes its own name
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
