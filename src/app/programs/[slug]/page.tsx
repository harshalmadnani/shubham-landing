import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
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

  const facts = [
    { value: `${program.hours}`, label: "hours of live training" },
    { value: `${program.modules.length}`, label: "modules" },
    { value: `${countTopics(program)}`, label: "topics covered" },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-page px-6 pt-10 tablet:px-8">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 text-micro text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
            All programs
          </Link>
        </div>

        <PageHero
          label={program.category}
          title={program.title}
          lead={program.description}
          actions={
            <ButtonLink href={enquiryUrl}>Chat with an advisor</ButtonLink>
          }
        />

        <Section tone="surface">
          <dl className="grid gap-10 tablet:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-display text-ink">{fact.value}</dt>
                <dd className="mt-3 text-small text-ink-2">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label="Curriculum">
          <SectionHead
            title={
              <>
                A module-by-module <em>breakdown</em>
              </>
            }
            lead="Everything covered in the program, in the order you'll cover it."
          />

          <div className="mt-16 flex flex-col gap-4 desktop:gap-6">
            {program.modules.map((module, index) => (
              <Reveal key={module.title}>
                <article className="rounded-lg bg-surface p-8 tablet:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="text-title">
                      <span className="mr-3 text-ink-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {module.title}
                    </h3>
                    <span className="text-micro text-ink-3">
                      {module.hours} hours
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-body text-ink-2">
                    {module.summary}
                  </p>

                  {/* Topics as chips: a module can carry a dozen of them, and
                      a dozen bulleted lines per module is what made this page
                      read as a wall of text. */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full bg-canvas px-3.5 py-1.5 text-micro text-ink-2"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <section className="bg-canvas">
          <div className="mx-auto w-full max-w-page px-6 pb-24 tablet:px-8 tablet:pb-32">
            <div className="rounded-lg bg-night px-8 py-20 text-center tablet:px-16">
              <h2 className="mx-auto max-w-2xl text-display text-chalk text-balance">
                Ready to talk through {program.title}?
              </h2>
              <ButtonLink href={enquiryUrl} variant="light" className="mt-10">
                Chat with an advisor
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
