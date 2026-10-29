import type { Metadata, Viewport } from "next";
import { Fraunces, Karla, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hello-aditya-dev.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/green-house-cafe-website`),
  title: {
    default: "Green House Cafe — 24-hour tiffin & coffee house in Koni, Bilaspur",
    template: "%s · Green House Cafe",
  },
  description:
    "Green House Cafe is a small 24-hour tiffin center and coffee house in River View Colony, Koni, Bilaspur. Call for today's tiffin, find directions, and see the real cafe.",
  keywords: [
    "Green House Cafe Bilaspur",
    "cafe in Koni Bilaspur",
    "tiffin center Koni",
    "24 hour cafe Bilaspur",
    "coffee shop Koni Bilaspur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Green House Cafe — the little green house that never closes",
    description:
      "A 24-hour tiffin and coffee house in River View Colony, Koni, Bilaspur. Real photographs, real hours, tap-to-call.",
    url: "/",
    siteName: "Green House Cafe",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Green House Cafe at dusk — signboard, fairy lights and its green facade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green House Cafe — Koni, Bilaspur",
    description: "A 24-hour tiffin and coffee house in River View Colony, Koni, Bilaspur.",
    images: ["/images/og.jpg"],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#123524",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Green House Cafe",
  alternateName: "ग्रीन हाउस कैफे",
  description:
    "A small 24-hour tiffin center and coffee house in River View Colony, Koni, Bilaspur, Chhattisgarh.",
  telephone: "+919589264628",
  address: {
    "@type": "PostalAddress",
    streetAddress: "River View Colony, Koni",
    addressLocality: "Bilaspur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.1313335, longitude: 82.1257748 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasMap: BUSINESS.mapsListing,
  image: [`${SITE_URL}/green-house-cafe-website/images/og.jpg`],
  isAccessibleForFree: true,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable} ${devanagari.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-body text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
