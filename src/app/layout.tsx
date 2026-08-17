import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import { ChatWithUs } from "@/components/ChatWithUs";
import { site } from "@/content/site";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-sans",
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
    <html lang="en" className={`${ibmPlexSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Every page gets the WhatsApp route, so it lives here rather than in
            each page's own composition. */}
        <ChatWithUs />
      </body>
    </html>
  );
}
