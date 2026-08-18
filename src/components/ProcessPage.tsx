import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { processIllustrations } from "@/components/Illustrations";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
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
  const Illustration = processIllustrations[content.slug];

  return (
    <>
      {/* Dark band. The rest of the site is white, and these four pages
          benefit from reading as their own place — it also gives the artwork
          a ground to sit on rather than floating in more white. */}
      <section className="bg-inverse-canvas px-md tablet:px-lg">
        <div className="mx-auto grid max-w-content items-center gap-xl pb-xxxl pt-xxl desktop:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] desktop:gap-xxl desktop:pt-xxxl">
          <div>
            <p className="flex items-center gap-sm text-eyebrow uppercase text-inverse-ink-muted animate-fade-up">
              <span aria-hidden="true" className="h-px w-6 bg-inverse-ink/40" />
              {content.eyebrow}
            </p>

            <h1 className="mt-lg max-w-3xl text-display-xl-mobile tablet:text-display-lg text-inverse-ink animate-fade-up">
              {content.headline}{" "}
              <em className="text-primary-bright">{content.headlineAccent}</em>
            </h1>

            <p className="mt-lg max-w-2xl text-body-lg text-inverse-ink-muted animate-fade-up">
              <RichTextContent value={content.lead} />
            </p>

            <dl className="mt-xl grid gap-sm tablet:grid-cols-3 animate-fade-up">
              {content.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-inverse-hairline bg-inverse-surface-1 px-md py-sm"
                >
                  <dt className="text-body-emphasis text-primary-bright">
                    {fact.value}
                  </dt>
                  <dd className="mt-xxs text-body-sm text-inverse-ink-muted">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-xl flex flex-wrap gap-sm animate-fade-up">
              <ButtonLink href={whatsAppUrl(content.enquiry)}>
                <CalendarIcon className="h-md w-md" />
                Book free consultation
              </ButtonLink>
              <ButtonLink href="/training-structure" variant="glass">
                Where this sits, and what it costs
                <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </div>

          {Illustration && (
            <div className="animate-fade-up rounded-lg bg-canvas p-md tablet:p-lg">
              <Illustration className="w-full" />
            </div>
          )}
        </div>
      </section>

      {/* The whole sequence in one line, before any of it is explained. This
          is what stops the page reading as an undifferentiated wall: you can
          see how many steps there are and where you are going first. */}
      <section className="px-md pt-xxl tablet:px-lg">
        <div className="mx-auto max-w-content">
          <Reveal>
            <ol className="flex flex-col gap-xs tablet:flex-row tablet:items-stretch">
              {content.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex flex-1 items-center gap-sm tablet:flex-col tablet:items-start tablet:gap-xs"
                >
                  <span className="flex items-center gap-sm tablet:w-full">
                    <span className="flex h-lg w-lg shrink-0 items-center justify-center rounded-full bg-primary text-caption text-on-primary">
                      {index + 1}
                    </span>
                    {index < content.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-px flex-1 bg-hairline tablet:block"
                      />
                    )}
                  </span>
                  <span className="text-body-sm text-ink-muted tablet:pr-md">
                    {step.title}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* The process itself, as a numbered sequence. */}
      <section className="px-md pt-xxxl tablet:px-lg">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Step by step"
            title={content.stepsTitle}
            lead={<RichTextContent value={content.stepsLead} />}
          />

          <ol className="mt-xl border-b border-hairline">
            {content.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 50}>
                <li className="grid gap-sm border-t border-hairline py-lg desktop:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] desktop:gap-xl desktop:py-xl">
                  <div className="flex items-start gap-sm">
                    <span
                      aria-hidden="true"
                      className="flex h-lg w-lg shrink-0 items-center justify-center rounded-full bg-primary-soft text-caption text-primary"
                    >
                      {index + 1}
                    </span>
                    <p className="text-card-title text-ink">{step.title}</p>
                  </div>
                  <p className="max-w-[46rem] text-body text-ink-muted">
                    <RichTextContent value={step.body} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Detail blocks: the five projects, the guidelines, what we ask of you.
          A grid rather than a second numbered list — these are a set, and
          numbering them again would imply an order they do not have. */}
      {content.details?.map((detail) => (
        <section key={detail.title} className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <SectionHeading
              title={detail.title}
              lead={<RichTextContent value={detail.lead} />}
            />
            <div className="mt-xl grid gap-md tablet:grid-cols-2 desktop:grid-cols-3">
              {detail.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 50} className="h-full">
                  <div className="h-full rounded-lg border border-hairline bg-surface-1 p-lg transition-colors duration-300 hover:border-ink/40">
                    <p className="text-card-title text-ink">{item.title}</p>
                    <p className="mt-xs text-body-sm text-ink-muted">
                      <RichTextContent value={item.body} />
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* What you get, and who it is for — side by side, both checklists. */}
      <section className="px-md pt-section tablet:px-lg">
        <div className="mx-auto max-w-content grid gap-lg desktop:grid-cols-2 desktop:gap-xl">
          <Reveal>
            <div className="h-full rounded-lg border border-hairline bg-surface-1 p-xl">
              <h2 className="text-headline-sm text-ink">
                {content.includedTitle}
              </h2>
              <ul className="mt-lg flex flex-col gap-sm">
                {content.included.map((item, index) => (
                  <li key={index} className="flex gap-sm">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-body-sm text-ink">
                      <RichTextContent value={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-lg border border-hairline bg-canvas p-xl">
              <h2 className="text-headline-sm text-ink">
                {content.suitsTitle}
              </h2>
              <ul className="mt-lg flex flex-col gap-sm">
                {content.suits.map((item, index) => (
                  <li key={index} className="flex gap-sm">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span className="text-body-sm text-ink">
                      <RichTextContent value={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The boundaries. Saying what a stage is not is what makes the rest of
          the page believable. */}
      <section className="px-md pt-section tablet:px-lg">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="rounded-lg bg-inverse-canvas p-xl tablet:p-xxl">
              <p className="text-eyebrow uppercase text-inverse-ink-muted">
                Straight answers
              </p>
              <h2 className="mt-sm text-headline-sm text-inverse-ink">
                {content.boundariesTitle}
              </h2>
              <ul className="mt-lg grid gap-md tablet:grid-cols-3">
                {content.boundaries.map((item, index) => (
                  <li
                    key={index}
                    className="border-t border-inverse-hairline pt-md text-body-sm text-inverse-ink-muted"
                  >
                    <RichTextContent value={item} />
                  </li>
                ))}
              </ul>
              <p className="mt-xl max-w-2xl text-body-sm text-inverse-ink-muted">
                <RichTextContent value={content.pathwayNote} />{" "}
                <Link
                  href="/training-structure"
                  className="text-inverse-ink underline underline-offset-4 hover:no-underline"
                >
                  See the four pathways
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* On to the next process. */}
      <section className="px-md pt-section tablet:px-lg">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="The rest of the programme"
            title="How the other parts work"
          />
          <div className="mt-xl grid gap-md tablet:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 60} className="h-full">
                <Link
                  href={`/how-it-works/${other.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-primary"
                >
                  <p className="text-eyebrow uppercase text-ink-subtle">
                    {other.eyebrow}
                  </p>
                  <p className="mt-xs text-card-title text-ink">
                    {other.navLabel}
                  </p>
                  <p className="mt-xs text-body-sm text-ink-muted">
                    {other.headline} {other.headlineAccent}
                  </p>
                  <span className="mt-lg inline-flex items-center gap-xs text-body-sm text-primary">
                    Read the process
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
