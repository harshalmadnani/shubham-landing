import type { MetadataRoute } from "next";

// `output: "export"` requires metadata routes to declare themselves static.
export const dynamic = "force-static";

const BASE = "https://www.avirowork.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
