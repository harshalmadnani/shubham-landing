import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { processIllustrations } from "@/components/Illustrations";
import { Marker } from "@/components/Marker";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import type { ProcessPage as ProcessContent } from "@/content/processes";
import { processes } from "@/content/processes";
import { whatsAppUrl } from "@/content/site";

/**
 * One process page: what happens during this part of the programme.
 *
 * All four share this layout deliberately. Somebody comparing the bootcamp
 * against marketing is comparing two things that differ in substance, and
 * giving each its own shape would add a second difference that means nothing.
 */
export function ProcessPage({ content }: { content: ProcessContent }) {
  const others = processes.filter((process) => process.slug !== content.slug);
  const position = processes.findIndex(
    (process) => process.slug === content.slug,
  );
  const Illustration = processIllustrations[content.slug];

  return (
    <>
      {/* The head runs on the inverse surface: these four pages are a section
          of their own, and the plate needs a ground to sit on. */}
      <section className="relative overflow-hidden bg-night text-bone">
        <div
          aria-hidden="true"
          className="rule-grid-night pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
        />

        <div className="relative mx-auto w-full max-w-page px-6 py-16 tablet:px-10 tablet:py-20">
          <p className="flex items-center gap-4 font-mono text-label uppercase text-bone-2">
            <span className="tnum text-flame-bright">
              {String(position + 1).padStart(2, "0")}
            </span>
            {content.eyebrow}
          </p>

          <div className="mt-10 grid gap-x-10 gap-y-12 desktop:grid-cols-12">
            <div className="desktop:col-span-7">
              <h1 className="font-display text-display text-bone [text-wrap:balance]">
                {content.headline} <em className="text-flame-bright">{content.headlineAccent}</em>
              </h1>

              <p className="mt-8 max-w-2xl text-lead text-bone-2">
                <RichTextContent value={content.lead} tone="dark" />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={whatsAppUrl(content.enquiry)} variant="onNight">
                  Book free consultation
                </ButtonLink>
                <ButtonLink href="/training-structure" variant="onNight">
                  Where this sits, and what it costs
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </ButtonLink>
              </div>
            </div>

            {Illustration && (
              <div className="desktop:col-span-4 desktop:col-start-9">
                <Illustration className="w-full text-bone" />
              </div>
            )}
          </div>

          {/* The figures, as a ruled table across the foot of the band. */}
          {content.facts.length > 0 && (
            <dl className="mt-16 grid border-t border-night-rule tablet:grid-cols-3">
              {content.facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`border-b border-night-rule py-6 tablet:border-b-0 ${
                    index > 0 ? "tablet:border-l tablet:pl-6" : "tablet:pr-6"
                  }`}
                >
                  <dt className="font-display text-display-sm text-bone">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 font-mono text-meta uppercase text-bone-2">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* The whole sequence in one line, before any of it is explained. This
          is what stops the page reading as an undifferentiated wall: you can
          see how many steps there are and where you are going first. */}
      <div className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-page px-6 py-6 tablet:px-10">
          <ol className="flex flex-col gap-3 tablet:flex-row tablet:items-center tablet:gap-6">
            {content.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-1 items-center gap-3 font-mono text-meta uppercase text-ink-2"
              >
                <span className="tnum text-flame-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{step.title}</span>
                {index < content.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px w-6 shrink-0 bg-rule-2 tablet:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Section index="01" label="Step by step">
        <SectionHead
          title={content.stepsTitle}
          lead={<RichTextContent value={content.stepsLead} />}
        />

        <ol className="mt-16 border-t border-ink">
          {content.steps.map((step, index) => (
            <Reveal key={step.title}>
              <li className="grid gap-x-10 gap-y-3 border-b border-rule py-8 desktop:grid-cols-12">
                <div className="flex items-baseline gap-4 desktop:col-span-4">
                  <span className="font-mono text-index tnum text-flame-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-subtitle text-ink">{step.title}</p>
                </div>
                <p className="text-body text-ink-2 desktop:col-span-8">
                  <RichTextContent value={step.body} />
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Detail blocks: the five projects, the guidelines, what we ask of you.
          A ruled grid rather than a second numbered list — these are a set,
          and numbering them again would imply an order they do not have. */}
      {content.details?.map((detail, detailIndex) => (
        <Section
          key={detail.title}
          index={String(detailIndex + 2).padStart(2, "0")}
          label="In detail"
          tone="paper-2"
        >
          <SectionHead
            title={detail.title}
            lead={<RichTextContent value={detail.lead} />}
          />

          <div className="mt-16 grid overflow-hidden border-l border-t border-rule-2 tablet:grid-cols-2 desktop:grid-cols-3">
            {detail.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 50}
                className="-mb-px -mr-px border-b border-r border-rule-2"
              >
                <div className="h-full bg-paper p-6 tablet:p-7">
                  <p className="text-subtitle text-ink">{item.title}</p>
                  <p className="mt-2 text-small text-ink-2">
                    <RichTextContent value={item.body} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      {/* What you get, and who it is for — side by side, both lists. */}
      <Section
        index={String((content.details?.length ?? 0) + 2).padStart(2, "0")}
        label="What you get"
      >
        <div className="grid gap-x-10 gap-y-12 desktop:grid-cols-12">
          <Reveal className="desktop:col-span-6">
            <h2 className="font-display text-title text-ink">
              {content.includedTitle}
            </h2>
            <ul className="mt-8 border-t border-rule">
              {content.included.map((item, index) => (
                <li key={index} className="flex gap-3 border-b border-rule py-4">
                  <Marker className="mt-1.5 h-2.5 w-2.5 shrink-0 text-flame" />
                  <span className="text-small text-ink">
                    <RichTextContent value={item} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60} className="desktop:col-span-5 desktop:col-start-8">
            <h2 className="font-display text-title text-ink">
              {content.suitsTitle}
            </h2>
            <ul className="mt-8 border-t border-rule">
              {content.suits.map((item, index) => (
                <li key={index} className="flex gap-3 border-b border-rule py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink-3"
                  />
                  <span className="text-small text-ink">
                    <RichTextContent value={item} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* The boundaries. Saying what a stage is not is what makes the rest of
          the page believable. */}
      <Section
        index={String((content.details?.length ?? 0) + 3).padStart(2, "0")}
        label="Straight answers"
        tone="night"
      >
        <SectionHead tone="night" title={content.boundariesTitle} />

        <ul className="mt-12 grid gap-x-10 border-t border-night-rule tablet:grid-cols-3">
          {content.boundaries.map((item, index) => (
            <li
              key={index}
              className="border-b border-night-rule py-6 text-small text-bone-2 tablet:border-b-0"
            >
              <RichTextContent value={item} tone="dark" />
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-small text-bone-2">
          <RichTextContent value={content.pathwayNote} tone="dark" />{" "}
          <Link
            href="/training-structure"
            className="link-sweep text-bone hover:text-flame-bright"
          >
            See the four pathways
          </Link>
          .
        </p>
      </Section>

      {/* On to the next process. */}
      <Section
        index={String((content.details?.length ?? 0) + 4).padStart(2, "0")}
        label="The rest of the programme"
      >
        <SectionHead
          title={
            <>
              How the <em>other parts</em> work
            </>
          }
        />

        <div className="mt-12 border-t border-ink">
          {others.map((other, index) => (
            <Reveal key={other.slug} delay={index * 50}>
              <Link
                href={`/how-it-works/${other.slug}`}
                className="group grid gap-x-10 gap-y-2 border-b border-rule py-7 transition-colors duration-200 hover:bg-paper-2 desktop:grid-cols-12 desktop:items-baseline"
              >
                <span className="font-mono text-label uppercase text-ink-3 desktop:col-span-3">
                  {other.eyebrow}
                </span>
                <span className="font-display text-title text-ink transition-colors duration-200 group-hover:text-flame-ink desktop:col-span-3">
                  {other.navLabel}
                </span>
                <span className="text-small text-ink-2 desktop:col-span-5">
                  {other.headline} {other.headlineAccent}
                </span>
                <span className="flex items-center desktop:col-span-1 desktop:justify-end">
                  <ArrowRightIcon className="h-4 w-4 text-ink transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
