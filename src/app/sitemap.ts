import type { MetadataRoute } from "next";

import { posts } from "@/content/blog";
import { legalDocuments } from "@/content/legal";
import { processes } from "@/content/processes";
import { programDetails } from "@/content/programDetails";

// `output: "export"` requires metadata routes to declare themselves static.
export const dynamic = "force-static";

const BASE = "https://avirowork.com";

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
    { url: `${BASE}/about/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact/`, changeFrequency: "monthly", priority: 0.7 },
    // The consultation is the site's conversion point, so it ranks with the
    // catalogue rather than with the secondary pages.
    { url: `${BASE}/book/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog/`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${BASE}/how-it-works/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...processes.map((process) => ({
      url: `${BASE}/how-it-works/${process.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...pages,
    // Posts are the only pages here that can rank for something other than the
    // brand name, so they get a high priority and a frequent change hint.
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // The policies are low priority but they need to be indexable: a candidate
    // checking whether a training provider has published refund terms is
    // exactly the kind of visitor worth having.
    ...legalDocuments.map((document) => ({
      url: `${BASE}/legal/${document.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...programDetails.map((program) => ({
      url: `${BASE}/programs/${program.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
