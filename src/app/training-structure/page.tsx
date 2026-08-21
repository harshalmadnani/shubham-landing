import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PathwayRows } from "@/components/PathwayRows";
import { QuoteProcess } from "@/components/QuoteProcess";
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
      <main id="main" className="flex flex-1 flex-col">
        <StructureHero />
        <PathwayRows />
        <QuoteProcess />
        <Faq
          items={structureFaqs}
          label="Structure FAQ"
          title="Questions about how it runs"
          lead="Scheduling, attendance, payment and what each stop covers."
        />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
