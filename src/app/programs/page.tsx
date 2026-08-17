import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Programs } from "@/components/Programs";
import { ProgramsHero } from "@/components/ProgramsHero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { programCategories, totalProgramCount } from "@/content/programs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Programs — ${site.name}`,
  description: `${totalProgramCount} instructor-led IT programs across ${programCategories.length} specializations — web development, data, AI, cloud, cybersecurity, DevOps, analyst and support tracks — each with a full curriculum.`,
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <ProgramsHero />
        <Programs />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
