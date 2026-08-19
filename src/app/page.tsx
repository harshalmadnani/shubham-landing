import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OurApproach } from "@/components/OurApproach";
import { Services } from "@/components/Services";
import { Struggles } from "@/components/Struggles";
import { TechIndex } from "@/components/TechIndex";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { WhatYouCanExpect } from "@/components/WhatYouCanExpect";
import { WhoWeHelp } from "@/components/WhoWeHelp";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TechIndex />
        <Struggles />
        <WhoWeHelp />
        <Services />
        <HowItWorks />
        <OurApproach />
        <WhatsIncluded />
        <WhatYouCanExpect />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
