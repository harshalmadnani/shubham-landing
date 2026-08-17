import type { MetadataRoute } from "next";

import { programDetails } from "@/content/programDetails";

// `output: "export"` requires metadata routes to declare themselves static.
export const dynamic = "force-static";

const BASE = "https://www.avirowork.com";

/**
 * Emitted as a static sitemap.xml at build time.
 *
 * The curriculum pages are the bulk of the site and none of them are linked
 * from anywhere a crawler reaches without JavaScript except the catalogue, so
 * listing them explicitly is what gets all 37 indexed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/programs/`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${BASE}/training-structure/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [
    ...pages,
    ...programDetails.map((program) => ({
      url: `${BASE}/programs/${program.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
