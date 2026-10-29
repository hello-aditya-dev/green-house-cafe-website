import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hello-aditya-dev.github.io";
const PATH = "/green-house-cafe-website";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}${PATH}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
