import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PathwayStages } from "@/components/PathwayStages";
import { QuoteProcess } from "@/components/QuoteProcess";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StructureHero } from "@/components/StructureHero";
import { site } from "@/content/site";
import { structureFaqs } from "@/content/trainingStructure";

export const metadata: Metadata = {
  title: `Training Structure — ${site.name}`,
  description:
    "How an AVIROwork Consultancy programme runs: instructor-led training — regular or AI-focused — a hands-on project bootcamp, and resume marketing that continues until you are hired.",
};

export default function TrainingStructurePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <StructureHero />
        <PathwayStages />
        <QuoteProcess />
        <Faq
          items={structureFaqs}
          eyebrow="Structure FAQ"
          title="Questions about how it runs"
          lead="Scheduling, attendance and what a place actually costs."
        />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
