import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Newsreader } from "next/font/google";

import { ChatWithUs } from "@/components/ChatWithUs";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/content/site";

import "./globals.css";

/**
 * Three faces, three jobs.
 *
 * Bricolage sets the signs — a grotesque with enough width and weight to hold
 * a wall at 5rem and enough character not to read as a system default.
 * Newsreader is what you actually read: a screen serif, because this site is
 * long-form and a serif invites reading where a sans invites skimming. Mono
 * carries the timetable register — route codes, prices, counts, labels.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  // Absolute URLs are needed for share previews; relative ones resolve against
  // this base rather than against whatever host happens to serve the page.
  metadataBase: new URL("https://www.avirowork.com"),
  title: `${site.name} — IT Training & Placement Support`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — IT Training & Placement Support`,
    description: site.description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    // summary_large_image, since there is now an image worth showing at size.
    card: "summary_large_image",
    title: `${site.name} — IT Training & Placement Support`,
    description: site.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${bricolage.variable} ${newsreader.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        {/* Every page gets the WhatsApp route, so it lives here rather than in
            each page's own composition. */}
        <ChatWithUs />
      </body>
    </html>
  );
}
