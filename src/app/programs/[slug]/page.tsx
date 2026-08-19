import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { Marker } from "@/components/Marker";
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
    { value: `${program.hours}`, label: "hours live training" },
    { value: `${program.modules.length}`, label: "modules" },
    { value: `${countTopics(program)}`, label: "topics covered" },
    { value: "Yes", label: "certificate on completion" },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-page px-6 pt-8 tablet:px-10">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 font-mono text-label uppercase text-ink-2 transition-colors hover:text-flame-ink"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
            All programs
          </Link>
        </div>

        <PageHero
          index={String(
            programDetails.findIndex((entry) => entry.slug === program.slug) + 1,
          ).padStart(2, "0")}
          label={program.category}
          title={program.title}
          lead={program.description}
          actions={
            <ButtonLink href={enquiryUrl}>Chat with an advisor</ButtonLink>
          }
        />

        {/* The specification block: four figures, set as a table, directly
            under the head — the questions everyone asks first, answered before
            the curriculum begins. */}
        <div className="border-b border-rule bg-paper-2">
          <dl className="mx-auto grid w-full max-w-page grid-cols-2 px-6 tablet:grid-cols-4 tablet:px-10">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`border-rule py-8 ${
                  index % 2 === 0 ? "pr-6" : "border-l pl-6"
                } tablet:border-l tablet:pl-6 tablet:first:border-l-0 tablet:first:pl-0`}
              >
                <dt className="font-display text-display-sm tnum text-ink">
                  {fact.value}
                </dt>
                <dd className="mt-1 font-mono text-meta uppercase text-ink-3">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Section index="01" label="Curriculum">
          <SectionHead
            title={
              <>
                A module-by-module <em>breakdown</em>
              </>
            }
            lead="Everything covered in the program, in the order you'll cover it."
          />

          <div className="mt-16 border-t border-ink">
            {program.modules.map((module, index) => (
              <Reveal key={module.title}>
                <article className="grid gap-x-10 gap-y-6 border-b border-rule py-10 desktop:grid-cols-12">
                  <header className="desktop:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-index tnum text-flame-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-title text-ink">
                        {module.title}
                      </h3>
                    </div>
                    <p className="mt-3 pl-10 font-mono text-meta uppercase text-ink-3">
                      {module.hours} hours
                    </p>
                  </header>

                  <div className="desktop:col-span-8">
                    <p className="text-body text-ink-2">{module.summary}</p>

                    <ul className="mt-6 grid gap-x-10 gap-y-2.5 tablet:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 text-small text-ink"
                        >
                          <Marker className="mt-1.5 h-2.5 w-2.5 shrink-0 text-flame" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <section className="border-t border-rule bg-night text-bone">
          <div className="mx-auto w-full max-w-page px-6 py-20 tablet:px-10 tablet:py-24">
            <div className="grid gap-10 desktop:grid-cols-12">
              <h2 className="font-display text-display-sm text-bone desktop:col-span-7">
                Ready to talk through {program.title}?
              </h2>
              <div className="desktop:col-span-4 desktop:col-start-9">
                <p className="text-lead text-bone-2">
                  No pressure, no commitment — just a real conversation about
                  your goals and whether this program fits.
                </p>
                <ButtonLink
                  href={enquiryUrl}
                  variant="onNight"
                  className="mt-8"
                >
                  Chat with an advisor
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
