import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PathwayComposition } from "@/components/PathwayComposition";
import { PricingHero } from "@/components/PricingHero";
import { PricingQuote } from "@/components/PricingQuote";
import { ScrollToTop } from "@/components/ScrollToTop";
import { pricingFaqs } from "@/content/pricing";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Pricing & Pathways — ${site.name}`,
  description:
    "What a pathway includes and how it is priced: instructor-led training, a hands-on bootcamp and placement support, quoted as one.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <PricingHero />
        <PathwayComposition />
        <PricingQuote />
        <Faq
          items={pricingFaqs}
          eyebrow="Pricing FAQ"
          title="Questions about cost"
          lead="What we can answer here, and what needs a conversation."
        />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
