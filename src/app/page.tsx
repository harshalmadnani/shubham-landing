import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OurApproach } from "@/components/OurApproach";
import { ProgramsTeaser } from "@/components/ProgramsTeaser";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Struggles } from "@/components/Struggles";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { WhatYouCanExpect } from "@/components/WhatYouCanExpect";
import { WhoWeHelp } from "@/components/WhoWeHelp";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Struggles />
        <WhoWeHelp />
        <Services />
        <HowItWorks />
        <OurApproach />
        <WhatsIncluded />
        <ProgramsTeaser />
        <WhatYouCanExpect />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
