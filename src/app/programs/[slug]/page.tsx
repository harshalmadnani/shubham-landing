import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionHeading } from "@/components/SectionHeading";
import {
  countTopics,
  findProgramDetail,
  programDetails,
} from "@/content/programDetails";
import { programEnquiryMessage, site, whatsAppUrl } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programDetails.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = findProgramDetail(slug);

  if (!program) {
    return {};
  }

  return {
    title: `${program.title} — ${site.name}`,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = findProgramDetail(slug);

  if (!program) {
    notFound();
  }

  const enquiryUrl = whatsAppUrl(programEnquiryMessage(program.title));

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <section className="px-md pt-md tablet:px-lg tablet:pt-lg">
          <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-inverse-canvas px-lg py-xxxl tablet:px-xxl">
            <div aria-hidden="true" className="absolute inset-0 bg-mesh" />
            <div aria-hidden="true" className="absolute inset-0 bg-grid" />

            <div className="relative">
              <Link
                href="/#programs"
                className="inline-flex items-center gap-xs text-body-sm text-inverse-ink-muted transition-colors hover:text-inverse-ink"
              >
                <ArrowRightIcon className="h-md w-md rotate-180" />
                All programs
              </Link>

              <p className="mt-lg text-eyebrow uppercase text-accent">
                {program.category}
              </p>
              <h1 className="mt-sm max-w-3xl text-display-md text-inverse-ink">
                {program.title}
              </h1>
              <p className="mt-md max-w-2xl text-body-lg text-inverse-ink-muted">
                {program.description}
              </p>

              <ul className="mt-xl flex flex-wrap gap-xs">
                {[
                  `${program.hours} hours live training`,
                  `${program.modules.length} modules`,
                  `${countTopics(program)} topics`,
                  "Certificate on completion",
                ].map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full glass px-md py-xs text-body-sm text-inverse-ink"
                  >
                    {fact}
                  </li>
                ))}
              </ul>

              <div className="mt-xl flex flex-wrap gap-sm">
                <ButtonLink href={enquiryUrl}>
                  <CalendarIcon className="h-md w-md" />
                  Chat with an advisor
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <SectionHeading
              eyebrow="Curriculum"
              title="A module-by-module breakdown"
              lead="Everything covered in the program, in the order you'll cover it."
            />

            <div className="mt-xxl flex flex-col gap-md">
              {program.modules.map((module, index) => (
                <Reveal key={module.title}>
                  <div className="overflow-hidden rounded-xl border border-hairline bg-canvas shadow-card transition-shadow duration-300 hover:shadow-lift">
                    <div className="flex flex-wrap items-center justify-between gap-md border-b border-hairline bg-surface-1 px-lg py-md">
                      <div className="flex items-center gap-md">
                        <span className="flex h-xl w-xl shrink-0 items-center justify-center rounded-full bg-brand-gradient text-body-emphasis text-on-primary shadow-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-card-title text-ink">
                          {module.title}
                        </h3>
                      </div>
                      <span className="shrink-0 whitespace-nowrap rounded-full bg-canvas px-md py-xxs text-caption text-ink-muted">
                        {module.hours} hours
                      </span>
                    </div>

                    <div className="p-lg">
                      <p className="text-body-sm text-ink-muted">
                        {module.summary}
                      </p>
                      <ul className="mt-md grid grid-cols-1 gap-sm tablet:grid-cols-2">
                        {module.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-xs text-body-sm text-ink"
                          >
                            <CheckIcon className="mt-1 h-md w-md shrink-0 text-primary" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-md pt-section tablet:px-lg">
          <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-brand-gradient px-lg py-xxxl text-center shadow-primary tablet:px-xxl">
            <div aria-hidden="true" className="absolute inset-0 bg-grid" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-headline text-on-primary">
                Ready to talk through {program.title}?
              </h2>
              <p className="mt-md text-body-lg text-on-primary/85">
                No pressure, no commitment — just a real conversation about your
                goals and whether this program fits.
              </p>
              <ButtonLink href={enquiryUrl} variant="inverse" className="mt-xl">
                <CalendarIcon className="h-md w-md" />
                Chat with an advisor
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
