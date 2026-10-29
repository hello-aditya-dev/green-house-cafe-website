import { BUSINESS, DIRECTIONS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-2xl font-semibold">
              <span className="italic">Green House</span> <span className="text-gold">Cafe</span>
            </p>
            <p className="mt-1 font-hindi text-sm text-paper/60">{BUSINESS.nameHindi}</p>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-paper/60">
              {BUSINESS.category} · {BUSINESS.area}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold hover:bg-white/10"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold hover:bg-white/10"
              >
                Directions
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-paper/40">
              On this page
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
              <li><a className="hover:text-gold" href="#story">The story</a></li>
              <li><a className="hover:text-gold" href="#serve">What we serve</a></li>
              <li><a className="hover:text-gold" href="#house">The house</a></li>
              <li><a className="hover:text-gold" href="#visit">Visit</a></li>
              <li>
                <a className="hover:text-gold" href={BUSINESS.mapsListing} target="_blank" rel="noopener noreferrer">
                  Google Maps listing ↗
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-paper/40">
              Credits
            </p>
            <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed text-paper/60">
              <li>
                Photographs: the cafe&apos;s own public{" "}
                <a className="underline decoration-gold/50 underline-offset-2 hover:text-gold" href={BUSINESS.mapsListing} target="_blank" rel="noopener noreferrer">
                  Google Maps listing
                </a>
                .
              </li>
              <li>Facts (hours, phone, category, rating) verified from the same listing, Oct 2026.</li>
              <li>
                Independent design concept by{" "}
                <a
                  className="underline decoration-gold/50 underline-offset-2 hover:text-gold"
                  href="https://github.com/hello-aditya-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello-aditya-dev
                </a>{" "}
                — this is a demo, not the cafe&apos;s official website.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12.5px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Green House Cafe · {BUSINESS.hoursShort} · Built with care
            in Bilaspur&apos;s neighbourhood
          </p>
          <p className="flex items-center gap-4">
            <a className="hover:text-gold" href="https://github.com/hello-aditya-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-gold" href="https://dev-aditya.com" target="_blank" rel="noopener noreferrer">dev-aditya.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
