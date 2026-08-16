import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PricingHero } from "@/components/PricingHero";
import { PricingTiers } from "@/components/PricingTiers";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <PricingHero />
        <PricingTiers />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
