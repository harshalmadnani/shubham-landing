import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PathwayRoutes } from "@/components/PathwayRoutes";
import { PathwayStages } from "@/components/PathwayStages";
import { QuoteProcess } from "@/components/QuoteProcess";
import { RegionProvider } from "@/components/RegionProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StructureHero } from "@/components/StructureHero";
import { site } from "@/content/site";
import { structureFaqs } from "@/content/trainingStructure";

export const metadata: Metadata = {
  title: `Training Structure — ${site.name}`,
  description:
    "Four pathways into a tech role, priced for the UK and Canada: instructor-led training — regular or AI-focused — a hands-on project bootcamp, and resume marketing that continues until you are hired.",
};

export default function TrainingStructurePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <StructureHero />
        {/* Both priced sections share one region choice, so the route totals
            and the stage prices can never be shown in different currencies. */}
        <RegionProvider>
          <PathwayRoutes />
          <PathwayStages />
        </RegionProvider>
        <QuoteProcess />
        <Faq
          items={structureFaqs}
          eyebrow="Structure FAQ"
          title="Questions about how it runs"
          lead="Scheduling, attendance, payment and what each stage covers."
        />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
