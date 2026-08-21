import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { OurApproach } from "@/components/OurApproach";
import { Placement } from "@/components/Placement";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { Struggles } from "@/components/Struggles";
import { TechIndex } from "@/components/TechIndex";
import { WhatYouCanExpect } from "@/components/WhatYouCanExpect";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { WhyUs } from "@/components/WhyUs";

/**
 * The landing page, in the order somebody actually asks the questions:
 * what do you teach, what do I get, how does it run, what happens at the end,
 * who says so — and only then the softer material about fit and approach.
 *
 * Two sections were replaced rather than added to, because the new ones say
 * the same thing better and two of each would have made the page longer
 * without making it clearer:
 *   - `Journey` replaces `HowItWorks`. Both are the programme as a sequence;
 *     the journey has the five named stages and points each one at the service
 *     that does the work.
 *   - `WhyUs` replaces `WhatsIncluded`. Both list what a programme includes;
 *     `WhyUs` is the seven-line version that can be read at a glance.
 * Both replaced components are still in the tree and still work, so either
 * swap can be undone in one line.
 *
 * `Proof` renders nothing until `src/content/proof.ts` has real entries.
 */
export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TechIndex />
        <FeaturedPrograms />
        <WhyUs />
        <Journey />
        <Placement />
        <Proof />
        <Struggles />
        <WhoWeHelp />
        <Services />
        <OurApproach />
        <WhatYouCanExpect />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
