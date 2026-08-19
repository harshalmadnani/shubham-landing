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

        <Section label="The four processes" tone="surface">
          <div className="grid gap-4 tablet:grid-cols-2 desktop:gap-6">
            {processes.map((process, index) => {
              const Illustration = processIllustrations[process.slug];
              return (
                <Reveal key={process.slug} delay={(index % 2) * 60}>
                  <Link
                    href={`/how-it-works/${process.slug}`}
                    className="group flex h-full flex-col rounded-lg bg-card p-8 transition-colors duration-200 hover:bg-surface-2 tablet:p-10"
                  >
                    <p className="text-micro text-ink-3">{process.eyebrow}</p>

                    <h2 className="mt-4 text-title transition-colors duration-200 group-hover:text-accent-ink">
                      {process.headline} <em>{process.headlineAccent}</em>
                    </h2>

                    <p className="mt-4 text-small text-ink-2">
                      <RichTextContent value={process.lead} />
                    </p>

                    {Illustration && (
                      <div className="mt-10 text-ink-3">
                        <Illustration className="w-full" />
                      </div>
                    )}

                    <span className="mt-10 inline-flex items-center gap-2 text-label text-ink">
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
