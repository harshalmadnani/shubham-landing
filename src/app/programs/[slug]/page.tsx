import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { Marker } from "@/components/CheckIcon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

      <main id="main" className="flex flex-1 flex-col">
        <section>
          <div className="mx-auto max-w-page border-b border-ink px-gutter pb-xxl pt-xl tablet:px-rail">
            <Link
              href="/programs"
              className="-my-xs inline-flex items-center gap-xs py-xs font-mono text-nav uppercase text-ink-2 transition-colors hover:text-signal-text"
            >
              <span aria-hidden="true">←</span>
              All programmes
            </Link>

            <p className="mt-xl flex items-center gap-sm font-mono text-label uppercase text-ink-3">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              {program.category}
            </p>

            <h1 className="mt-lg max-w-[22ch] text-display text-ink">
              {program.title}
            </h1>
            <p className="mt-lg max-w-[56ch] text-lead text-ink-2">
              {program.description}
            </p>

            <dl className="mt-xl grid gap-lg tablet:grid-cols-4">
              {[
                { v: String(program.hours), l: "hours of live training" },
                { v: String(program.modules.length), l: "modules, taught in order" },
                { v: String(countTopics(program)), l: "topics covered" },
                { v: "Yes", l: "certificate on completion" },
              ].map((fact) => (
                <div key={fact.l} className="border-t-2 border-signal pt-sm">
                  <dt className="font-mono text-figure text-ink">{fact.v}</dt>
                  <dd className="mt-xs max-w-[22ch] text-small text-ink-2">
                    {fact.l}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-xl flex flex-wrap gap-sm">
              <ButtonLink href={enquiryUrl}>Chat with an advisor</ButtonLink>
              <ButtonLink href="/training-structure" variant="outline">
                See the four routes
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="mt-xxxl">
          <div className="mx-auto max-w-page px-gutter tablet:px-rail">
            <SectionHeading
              label="Curriculum"
              title="A module-by-module breakdown"
              lead="Everything covered in the programme, in the order you will cover it."
            />

            <div className="mt-xxl border-t border-ink">
              {program.modules.map((module, index) => (
                <Reveal key={module.title}>
                  <div className="border-b border-rule py-lg desktop:grid desktop:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] desktop:gap-xxl desktop:py-xl">
                    <div>
                      <div className="flex items-baseline gap-sm">
                        <span
                          aria-hidden="true"
                          className="font-mono text-label text-signal-text"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-subtitle text-ink">
                          {module.title}
                        </h3>
                      </div>
                      <p className="mt-xs font-mono text-data text-ink-3">
                        {module.hours} hours
                      </p>
                      <p className="mt-sm max-w-[42ch] text-small text-ink-2">
                        {module.summary}
                      </p>
                    </div>

                    <ul className="mt-lg grid gap-x-xl gap-y-xs desktop:mt-0 tablet:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-sm">
                          <Marker />
                          <span className="text-small text-ink">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-band">
          <div className="mx-auto max-w-page px-gutter tablet:px-rail">
            <div className="panel-night border-l-2 border-signal p-lg tablet:p-xxl">
              <p className="font-mono text-label uppercase text-night-ink-2">
                Next departure
              </p>
              <h2 className="mt-lg max-w-[26ch] text-title text-night-ink">
                Ready to talk through {program.title}?
              </h2>
              <p className="mt-md max-w-[52ch] text-lead text-night-ink-2">
                No pressure and no commitment — a real conversation about your
                goals and whether this programme fits them.
              </p>
              <ButtonLink href={enquiryUrl} className="mt-xl">
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
