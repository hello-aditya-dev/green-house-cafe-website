import { BUSINESS, DIRECTIONS } from "@/lib/data";
import { Reveal } from "./Reveal";

const HOURS = [
  ["Monday", "Open 24 hours"],
  ["Tuesday", "Open 24 hours"],
  ["Wednesday", "Open 24 hours"],
  ["Thursday", "Open 24 hours"],
  ["Friday", "Open 24 hours"],
  ["Saturday", "Open 24 hours"],
  ["Sunday", "Open 24 hours"],
];

export function Visit() {
  return (
    <section id="visit" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-moss">Visit</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-medium leading-[1.12] tracking-tight">
            Whenever you&apos;re hungry —
            <br /> the light is on.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-2xl border border-sand bg-cream p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-moss">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Find the house
              </h3>
              <address className="mt-3 not-italic text-[15px] leading-relaxed text-ink-soft">
                {BUSINESS.address}
                <br />
                <span className="text-[13px]">Plus code {BUSINESS.plusCode}</span>
              </address>
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-pine-2"
              >
                Open in Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H9m8 0v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex h-full flex-col rounded-2xl border border-sand bg-cream p-6 sm:p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-moss">
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Hours
              </h3>
              <table className="mt-3 text-[14px]">
                <tbody>
                  {HOURS.map(([day, val]) => (
                    <tr key={day} className="border-b border-sand/70 last:border-0">
                      <th scope="row" className="py-1.5 pr-4 text-left font-medium text-ink-soft">
                        {day}
                      </th>
                      <td className="py-1.5 text-right font-semibold text-pine">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[12.5px] leading-snug text-ink-soft">
                Listed on the cafe&apos;s Google profile — it&apos;s the only 24-hour cafe listing in
                this stretch of Koni.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex h-full flex-col rounded-2xl border border-sand bg-pine p-6 text-paper sm:p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-gold">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Call the kitchen
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/80">
                The surest way to know today&apos;s tiffin — the number rings the counter, and the
                counter is always staffed.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 py-3 font-display text-lg font-bold text-pine transition-colors hover:bg-gold-2"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <p className="mt-3 text-[12.5px] text-paper/60">
                Number verified from the cafe&apos;s own Google listing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
