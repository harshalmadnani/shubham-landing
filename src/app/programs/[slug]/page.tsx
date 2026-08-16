import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { ScrollToTop } from "@/components/ScrollToTop";
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
        <section className="px-md pt-xxl tablet:px-lg">
          <div className="mx-auto max-w-content">
            <Link
              href="/#programs"
              className="inline-flex items-center gap-xs text-body-sm text-ink-muted hover:text-ink"
            >
              <ArrowRightIcon className="h-md w-md rotate-180" />
              All programs
            </Link>

            <p className="mt-lg text-eyebrow text-ink-muted">
              {program.category}
            </p>
            <h1 className="mt-xs text-display-md text-ink">{program.title}</h1>
            <p className="mt-md max-w-2xl text-body-lg text-ink-muted">
              {program.description}
            </p>
            <p className="mt-lg text-body-sm text-ink-muted">
              {program.hours} hours live training · {program.modules.length}{" "}
              modules · {countTopics(program)} topics · Certificate on
              completion
            </p>

            <div className="mt-xl flex flex-wrap gap-md">
              <ButtonLink href={enquiryUrl}>
                <CalendarIcon className="h-md w-md" />
                Chat with an advisor
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <h2 className="text-headline text-ink">Curriculum</h2>
            <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
              A module-by-module breakdown of what&apos;s covered.
            </p>

            <div className="mt-xl flex flex-col gap-lg">
              {program.modules.map((module, index) => (
                <div key={module.title} className="border border-hairline">
                  <div className="flex flex-wrap items-center justify-between gap-md border-b border-hairline bg-surface-1 px-lg py-md">
                    <div className="flex items-center gap-md">
                      <span className="flex h-xl w-xl shrink-0 items-center justify-center bg-primary text-body-emphasis text-on-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-card-title text-ink">
                        {module.title}
                      </h3>
                    </div>
                    <span className="shrink-0 whitespace-nowrap text-caption text-ink-subtle">
                      {module.hours} hours
                    </span>
                  </div>

                  <div className="px-lg py-lg">
                    <p className="text-body-sm text-ink-muted">
                      {module.summary}
                    </p>
                    <ul className="mt-md grid grid-cols-1 gap-sm tablet:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-xs text-body-sm text-ink"
                        >
                          <CheckIcon className="mt-xxs h-md w-md shrink-0 text-primary" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-md pb-section pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <div className="bg-primary p-xxl text-center">
              <h2 className="text-headline text-on-primary">
                Ready to talk through {program.title}?
              </h2>
              <p className="mt-md text-body-lg text-on-primary">
                No pressure, no commitment — just a real conversation about your
                goals and whether this program fits.
              </p>
              <ButtonLink href={enquiryUrl} variant="ghost" className="mt-xl">
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
