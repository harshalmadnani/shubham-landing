import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Every page is prerendered, so the whole site exports to plain files and is
  // served from a CDN with no Node process at runtime.
  output: "export",
  // Emit `about/index.html` rather than `about.html`, which every static host
  // resolves correctly without needing rewrite rules.
  trailingSlash: true,
  images: {
    // The optimizer needs a server; these assets are already sized webp.
    unoptimized: true,
  },
  // This project is self-contained; pin tracing here so a lockfile in a parent
  // directory can't be mistaken for the workspace root.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
