import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import { ChatWithUs } from "@/components/ChatWithUs";
import { site } from "@/content/site";

import "./globals.css";

/**
 * One family, every job.
 *
 * The site used to run three faces — a display serif, a grotesk and a mono —
 * which is a lot of personality for a page whose job is to be read quickly.
 * Instrument Sans covers display and body from 400 to 600; the personality now
 * comes from scale, space and one accent colour rather than from typefaces.
 */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
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
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
        {/* Every page gets the WhatsApp route, so it lives here rather than in
            each page's own composition. */}
        <ChatWithUs />
      </body>
    </html>
  );
}
