import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import {
  countTopics,
  findProgramDetail,
  programDetails,
  weeksForHours,
} from "@/content/programDetails";
import { bootcampProjects } from "@/content/processes";
import { formatPrice, regions } from "@/content/regions";
import { inclusions } from "@/content/sections";
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
    {
      value: `${weeksForHours(program.hours)} weeks`,
      label: "at one hour a day, weekdays",
    },
    { value: `${program.modules.length}`, label: "modules" },
    { value: `${countTopics(program)}`, label: "topics covered" },
  ];

  /*
   * Both regions' prices, side by side, rather than a switcher.
   * The switcher on the training-structure page is a client component holding
   * state across a whole price list; here there is one figure per region, and
   * showing both is less machinery and less ambiguity than asking somebody to
   * find a toggle before they can see what it costs.
   */
  const trainingPrices = regions.map((region) => ({
    region: region.label,
    price: formatPrice(region.id, program.priceKey),
  }));

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-page px-6 pt-10 tablet:px-8">
          <Link
            href="/programs"
            className="group -my-2 inline-flex items-center gap-2 py-2 text-micro text-ink-2 transition-colors hover:text-ink"
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
          <dl className="grid gap-10 tablet:grid-cols-2 desktop:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-title text-ink">{fact.value}</dt>
                <dd className="mt-3 text-small text-ink-2">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-10 border-t border-line pt-16 desktop:grid-cols-2 desktop:gap-16">
            <div>
              <h2 className="text-heading text-ink">Before you start</h2>
              <p className="mt-3 max-w-2xl text-body text-ink-2">
                {program.prerequisites}. If you are not sure whether that
                describes you, the consultation exists to answer exactly that —
                and to tell you if a different programme is the better start.
              </p>
            </div>

            <div>
              <h2 className="text-heading text-ink">Price</h2>
              <dl className="mt-3 flex flex-col gap-3">
                {trainingPrices.map((entry) => (
                  <div
                    key={entry.region}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
                  >
                    <dt className="text-small text-ink-2">{entry.region}</dt>
                    <dd className="text-body tabular-nums text-ink">
                      {entry.price}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-micro text-ink-3">
                Tax included — the price shown is the price you pay. This covers
                the training stage.{" "}
                <Link
                  href="/training-structure"
                  className="underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
                >
                  The bootcamp and placement stages are priced separately
                </Link>
                .
              </p>
            </div>
          </div>
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

        <Section label="Projects" tone="surface">
          <SectionHead
            title={
              <>
                Five projects, in <em>{program.title}</em>
              </>
            }
            lead="The bootcamp runs the same five stages whatever you enrolled in, so the portfolio you finish with is deep in one technology rather than shallow across several. Each is scoped, designed, built and reviewed."
          />

          <ol className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {bootcampProjects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 50} className="h-full">
                <li className="flex h-full flex-col rounded-lg bg-canvas p-7">
                  <h3 className="text-heading text-ink">{project.title}</h3>
                  <p className="mt-2 text-small text-ink-2">
                    <RichTextContent value={project.body} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mt-8 text-small text-ink-2">
              <Link
                href="/how-it-works/bootcamp"
                className="-my-1.5 inline-block py-1.5 text-accent-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
              >
                How the bootcamp runs, in detail
              </Link>
            </p>
          </Reveal>
        </Section>

        <Section label="What's included">
          <SectionHead
            title={
              <>
                Everything in the <em>programme</em>
              </>
            }
            lead="The same seven things in every programme on the site — the subject is what changes."
          />

          <ul className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {inclusions.map((item, index) => (
              <Reveal key={item.label} delay={(index % 3) * 50} className="h-full">
                <li className="flex h-full flex-col rounded-lg bg-surface p-6 tablet:p-7">
                  <h3 className="text-heading text-ink">{item.label}</h3>
                  <p className="mt-2 text-small text-ink-2">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
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
