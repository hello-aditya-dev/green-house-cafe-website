import { BUSINESS } from "@/lib/data";
import { asset, srcset } from "@/lib/asset";
import { Reveal } from "./Reveal";

const SERVE = [
  {
    no: "01",
    title: "Coffee & chai",
    body: "The counter keeps both on — proper chai and cup coffee, at tiffin-center prices. Listed on Google as a coffee shop, and that is exactly what the kettle is for.",
    note: "All day · all night",
  },
  {
    no: "02",
    title: "Tiffin — home-style meals",
    body: "The heart of the house. Tiffin here means the day's home-style Indian meal, decided fresh by the kitchen — not a printed card. Call ahead to hear what's cooking today.",
    note: "Tap to call for today's tiffin",
    href: BUSINESS.phoneHref,
    cta: "Call the kitchen",
  },
  {
    no: "03",
    title: "Evening snacks",
    body: "The 9 pm-to-4 am crowd gets snack plates alongside the coffee. The menu follows the kitchen's rhythm rather than a brochure — ask what's fresh.",
    note: "Late evening & after midnight",
  },
];

export function Serve() {
  return (
    <section id="serve" className="relative overflow-hidden bg-pine py-20 text-paper sm:py-28">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-gold">
                What we serve
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-medium leading-[1.12] tracking-tight">
                A menu that lives
                <br />
                in the kitchen,
                <br />
                <em className="text-gold">not on a laminated card.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/75">
                We&apos;d rather tell you the truth than print a guess: the daily tiffin and snack
                list at Green House Cafe changes with the kitchen, so this page doesn&apos;t invent
                one. What doesn&apos;t change is below — and the phone answers 24 hours.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <figure className="mt-8 max-w-sm">
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={asset("/images/canopy-900.jpg")}
                    srcSet={srcset("/images/canopy", [640, 900, 1200])}
                    sizes="(min-width: 1024px) 380px, 92vw"
                    alt="Fairy lights strung over the canopy of Green House Cafe at night"
                    width={900}
                    height={698}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-paper/60">
                  The fairy-lit canopy — where the evening crowd takes their snack plates.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <ul className="space-y-4">
            {SERVE.map((s, i) => (
              <Reveal key={s.no} delay={i * 90}>
                <li className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-gold/40 sm:p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-medium sm:text-2xl">
                      <span className="mr-3 align-super text-xs font-bold tracking-widest text-gold/70">
                        {s.no}
                      </span>
                      {s.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-gold/30 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-gold">
                      {s.note}
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-paper/75">{s.body}</p>
                  {s.href && (
                    <a
                      href={s.href}
                      className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-pine transition-colors hover:bg-gold-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                      {s.cta}
                    </a>
                  )}
                </li>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <li className="pt-2 text-[13px] leading-relaxed text-paper/50">
                Honest note — dish names and prices are deliberately not listed on this page: no
                verified, dated price list exists for the cafe, and we won&apos;t print one that the
                kitchen never approved. The phone number above is the cafe&apos;s own, from its
                Google listing.
              </li>
            </Reveal>
          </ul>
        </div>
      </div>
    </section>
  );
}
