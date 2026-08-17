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
        <section className="px-md tablet:px-lg">
          <div className="mx-auto max-w-content border-b border-hairline pb-xxl pt-xxl">
            <Link
              href="/programs"
              className="inline-flex items-center gap-xs text-body-sm text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowRightIcon className="h-md w-md rotate-180" />
              All programs
            </Link>

            <p className="mt-xl flex items-center gap-sm text-eyebrow uppercase text-ink-muted">
              <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
              {program.category}
            </p>
            <h1 className="mt-sm max-w-3xl font-serif text-display-md text-ink">
              {program.title}
            </h1>
            <p className="mt-md max-w-2xl text-body-lg text-ink-muted">
              {program.description}
            </p>

            <ul className="mt-xl flex flex-wrap gap-x-lg gap-y-xs">
              {[
                `${program.hours} hours live training`,
                `${program.modules.length} modules`,
                `${countTopics(program)} topics`,
                "Certificate on completion",
              ].map((fact) => (
                <li
                  key={fact}
                  className="flex items-center gap-xs text-body-sm text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-primary"
                  />
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
        </section>

        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <SectionHeading
              eyebrow="Curriculum"
              title="A module-by-module breakdown"
              lead="Everything covered in the program, in the order you'll cover it."
            />

            <div className="mt-xxl flex flex-col gap-lg">
              {program.modules.map((module, index) => (
                <Reveal key={module.title}>
                  <div className="rounded-lg border border-hairline bg-canvas transition-colors duration-300 hover:border-ink/40">
                    <div className="flex flex-wrap items-center justify-between gap-md border-b border-hairline px-lg py-md">
                      <div className="flex items-baseline gap-md">
                        <span
                          aria-hidden="true"
                          className="font-serif text-headline-sm text-ink-subtle"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-headline-sm text-ink">
                          {module.title}
                        </h3>
                      </div>
                      <span className="shrink-0 whitespace-nowrap text-body-sm text-ink-subtle">
                        {module.hours} hours
                      </span>
                    </div>

                    <div className="p-lg">
                      <p className="text-body-sm text-ink-muted">
                        {module.summary}
                      </p>
                      <ul className="mt-lg grid grid-cols-1 gap-sm tablet:grid-cols-2 tablet:gap-x-xl">
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
          <div className="mx-auto max-w-content rounded-lg bg-inverse-canvas px-lg py-xxxl text-center tablet:px-xxl">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-serif text-headline text-inverse-ink">
                Ready to talk through {program.title}?
              </h2>
              <p className="mt-md text-body-lg text-inverse-ink-muted">
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
