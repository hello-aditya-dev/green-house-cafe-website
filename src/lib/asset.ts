// Prefixes public asset paths with the deploy base path (GitHub Pages project
// sites serve under /<repo>/). Plain <img> tags do not receive Next.js's
// basePath handling automatically, so every public image reference goes
// through this helper.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}

export function srcset(base: string, widths: number[]): string {
  return widths.map((w) => `${asset(`${base}-${w}.jpg`)} ${w}w`).join(", ");
}
