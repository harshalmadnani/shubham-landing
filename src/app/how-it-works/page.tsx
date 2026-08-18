import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
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
      <main className="flex flex-1 flex-col">
        <section className="px-md tablet:px-lg">
          <div className="mx-auto max-w-content border-b border-hairline pb-xxl pt-xxl tablet:pt-xxxl">
            <p className="flex items-center gap-sm text-eyebrow uppercase text-ink-muted animate-fade-up">
              <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
              {processIndex.eyebrow}
            </p>

            <h1 className="mt-lg max-w-4xl text-display-xl-mobile tablet:text-display-lg text-ink animate-fade-up">
              {processIndex.headline}{" "}
              <em className="text-primary">{processIndex.headlineAccent}</em>
            </h1>

            <p className="mt-xl max-w-2xl text-body-lg text-ink-muted animate-fade-up">
              {processIndex.body}
            </p>

            <div className="mt-xl flex flex-wrap gap-sm animate-fade-up">
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                <CalendarIcon className="h-md w-md" />
                Book free consultation
              </ButtonLink>
              <ButtonLink href="/training-structure" variant="outline">
                See the four pathways
                <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content grid gap-lg tablet:grid-cols-2">
            {processes.map((process, index) => {
              const Illustration = processIllustrations[process.slug];
              return (
                <Reveal key={process.slug} delay={index * 70} className="h-full">
                  <Link
                    href={`/how-it-works/${process.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-hairline bg-canvas transition-colors duration-300 hover:border-primary"
                  >
                    {Illustration && (
                      <div className="border-b border-hairline bg-surface-1 px-lg pt-lg">
                        <Illustration className="w-full" />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-xl">
                      <p className="text-eyebrow uppercase text-ink-subtle">
                        {process.eyebrow}
                      </p>
                      <h2 className="mt-sm text-headline-sm text-ink">
                        {process.headline}{" "}
                        <em className="text-primary">
                          {process.headlineAccent}
                        </em>
                      </h2>
                      <p className="mt-md text-body-sm text-ink-muted">
                        <RichTextContent value={process.lead} />
                      </p>

                      <span className="mt-auto inline-flex items-center gap-xs pt-lg text-body-sm text-primary">
                        Read the {process.navLabel.toLowerCase()} process
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
