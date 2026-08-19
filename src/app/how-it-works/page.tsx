import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { processIllustrations } from "@/components/Illustrations";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { processIndex, processes } from "@/content/processes";
import { consultationMessage, site, whatsAppUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `How It Works — ${site.name}`,
  description:
    "The four processes behind every pathway: how the training runs day to day, how the bootcamp is built, what a mentor is there for, and how resume marketing works.",
};

/**
 * The overview the "How It Works" menu opens onto.
 *
 * It exists so the menu's parent has somewhere real to point and a typed URL
 * resolves, and it earns its place by showing the four side by side — which
 * the menu, being a menu, cannot.
 */
export default function HowItWorksPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        <section>
          <div className="mx-auto max-w-page border-b border-ink px-gutter pb-xxl pt-xxl tablet:px-rail tablet:pt-xxxl">
            <p className="flex items-center gap-sm font-mono text-label uppercase text-ink-3">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              {processIndex.eyebrow}
            </p>

            <h1 className="mt-lg max-w-[22ch] text-mega text-ink">
              {processIndex.headline}{" "}
              <em className="text-pine">{processIndex.headlineAccent}</em>
            </h1>

            <p className="mt-xl max-w-[52ch] text-lead text-ink-2">
              {processIndex.body}
            </p>

            <div className="mt-xl flex flex-wrap gap-sm">
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/training-structure" variant="outline">
                See the four routes
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="mt-xxxl">
          <div className="mx-auto grid max-w-page gap-px border border-rule bg-rule px-0 tablet:grid-cols-2">
            {processes.map((process, index) => {
              const Illustration = processIllustrations[process.slug];
              return (
                <Reveal key={process.slug} delay={index * 70} className="h-full">
                  <Link
                    href={`/how-it-works/${process.slug}`}
                    className="group flex h-full flex-col bg-paper transition-colors duration-200 hover:bg-raised"
                  >
                    {Illustration && (
                      <div className="border-b border-rule">
                        <Illustration className="w-full" />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-lg">
                      <p className="font-mono text-label uppercase text-ink-3">
                        {process.eyebrow}
                      </p>
                      <h2 className="mt-sm max-w-[24ch] text-title text-ink">
                        {process.headline}{" "}
                        <em className="text-pine">
                          {process.headlineAccent}
                        </em>
                      </h2>
                      <p className="mt-md max-w-[52ch] text-body text-ink-2">
                        <RichTextContent value={process.lead} />
                      </p>

                      <span className="mt-auto inline-flex items-center gap-xs pt-lg font-mono text-nav uppercase text-ink transition-colors group-hover:text-signal-text">
                        Read the {process.navLabel.toLowerCase()} process
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
