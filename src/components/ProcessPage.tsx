import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
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

  return (
    <>
      <section className="px-md tablet:px-lg">
        <div className="mx-auto max-w-content border-b border-hairline pb-xxl pt-xxl tablet:pt-xxxl">
          <p className="flex items-center gap-sm text-eyebrow uppercase text-ink-muted animate-fade-up">
            <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
            {content.eyebrow}
          </p>

          <h1 className="mt-lg max-w-4xl font-serif text-display-xl-mobile tablet:text-display-lg text-ink animate-fade-up">
            {content.headline}{" "}
            <em className="text-primary">{content.headlineAccent}</em>
          </h1>

          <p className="mt-xl max-w-2xl text-body-lg text-ink-muted animate-fade-up">
            <RichTextContent value={content.lead} />
          </p>

          <div className="mt-xl flex flex-wrap gap-sm animate-fade-up">
            <ButtonLink href={whatsAppUrl(content.enquiry)}>
              <CalendarIcon className="h-md w-md" />
              Book free consultation
            </ButtonLink>
            <ButtonLink href="/training-structure" variant="outline">
              See where this sits, and what it costs
              <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </div>

          <dl className="mt-xxl grid gap-lg tablet:grid-cols-3 animate-fade-up">
            {content.facts.map((fact) => (
              <div key={fact.label} className="border-t border-hairline pt-md">
                <dt className="font-serif text-headline-sm text-ink">
                  {fact.value}
                </dt>
                <dd className="mt-xxs text-body-sm text-ink-muted">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The process itself, as a numbered sequence. */}
      <section className="px-md pt-section tablet:px-lg">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Step by step"
            title={content.stepsTitle}
            lead={<RichTextContent value={content.stepsLead} />}
          />

          <ol className="mt-xl flex flex-col gap-md">
            {content.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 50}>
                <li className="flex gap-md rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-ink/40 tablet:gap-lg tablet:p-xl">
                  <span
                    aria-hidden="true"
                    className="flex h-xl w-xl shrink-0 items-center justify-center rounded-full bg-primary text-body-emphasis text-on-primary"
                  >
                    {index + 1}
                  </span>
                  <div className="max-w-3xl">
                    <p className="text-card-title text-ink">{step.title}</p>
                    <p className="mt-xs text-body text-ink-muted">
                      <RichTextContent value={step.body} />
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get, and who it is for — side by side, both checklists. */}
      <section className="px-md pt-section tablet:px-lg">
        <div className="mx-auto max-w-content grid gap-lg desktop:grid-cols-2 desktop:gap-xl">
          <Reveal>
            <div className="h-full rounded-lg border border-hairline bg-surface-1 p-xl">
              <h2 className="font-serif text-headline-sm text-ink">
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
              <h2 className="font-serif text-headline-sm text-ink">
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
              <h2 className="mt-sm font-serif text-headline-sm text-inverse-ink">
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
