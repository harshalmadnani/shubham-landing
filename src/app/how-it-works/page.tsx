import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { processIllustrations } from "@/components/Illustrations";
import { PageHero } from "@/components/PageHero";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
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
        <PageHero
          label={processIndex.eyebrow}
          title={
            <>
              {processIndex.headline} <em>{processIndex.headlineAccent}</em>
            </>
          }
          lead={processIndex.body}
          actions={
            <>
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                Book free consultation
              </ButtonLink>
              <ButtonLink href="/training-structure" variant="outline">
                See the four pathways
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </>
          }
        />

        <Section index="01" label="The four processes">
          <div className="grid overflow-hidden border-l border-t border-rule-2 tablet:grid-cols-2">
            {processes.map((process, index) => {
              const Illustration = processIllustrations[process.slug];
              return (
                <Reveal
                  key={process.slug}
                  delay={(index % 2) * 60}
                  className="-mb-px -mr-px border-b border-r border-rule-2"
                >
                  <Link
                    href={`/how-it-works/${process.slug}`}
                    className="group flex h-full flex-col p-7 transition-colors duration-200 hover:bg-paper-2 tablet:p-9"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-mono text-label uppercase text-ink-3">
                        {process.eyebrow}
                      </p>
                      <span className="font-mono text-index tnum text-flame-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-title text-ink transition-colors duration-200 group-hover:text-flame-ink">
                      {process.headline}{" "}
                      <em>{process.headlineAccent}</em>
                    </h2>

                    <p className="mt-4 text-small text-ink-2">
                      <RichTextContent value={process.lead} />
                    </p>

                    {Illustration && (
                      <div className="mt-8 text-ink-3">
                        <Illustration className="w-full" />
                      </div>
                    )}

                    <span className="mt-8 inline-flex items-center gap-2 font-mono text-label uppercase text-ink">
                      Read the {process.navLabel.toLowerCase()} process
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
