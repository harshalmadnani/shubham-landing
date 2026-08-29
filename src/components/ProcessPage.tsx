import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { processIllustrations } from "@/components/Illustrations";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { bookingPath } from "@/content/booking";
import type { ProcessPage as ProcessContent } from "@/content/processes";
import { processes } from "@/content/processes";

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
      <section className="relative overflow-hidden bg-night text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-page px-6 pb-20 pt-16 tablet:px-8 tablet:pb-24 tablet:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full bg-night-2 px-3.5 py-1.5 text-micro text-chalk-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {content.eyebrow}
          </p>

          <div className="mt-8 grid items-center gap-12 desktop:grid-cols-12">
            <div className="desktop:col-span-7">
              <h1 className="text-hero text-balance text-chalk">
                {content.headline}{" "}
                <em className="text-accent-bright">{content.headlineAccent}</em>
              </h1>

              <p className="mt-8 max-w-xl text-lead text-chalk-2">
                <RichTextContent value={content.lead} tone="dark" />
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href={bookingPath} variant="light">
                  Book a free consultation
                </ButtonLink>
                <ButtonLink href="/training-structure" variant="onNight">
                  See where this sits
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </ButtonLink>
              </div>
            </div>

            {Illustration && (
              <div className="desktop:col-span-5">
                <Illustration className="w-full text-chalk" />
              </div>
            )}
          </div>
        </div>
      </section>

      {content.facts.length > 0 && (
        <Section tone="surface">
          <dl className="grid gap-10 tablet:grid-cols-3">
            {content.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-display text-ink">{fact.value}</dt>
                <dd className="mt-3 text-small text-ink-2">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section label="Step by step">
        <SectionHead
          title={content.stepsTitle}
          lead={<RichTextContent value={content.stepsLead} />}
        />

        <ol className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:gap-6">
          {content.steps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 2) * 60}>
              <li className="h-full rounded-lg bg-surface p-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-micro text-ink-2">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-heading">{step.title}</h3>
                <p className="mt-2 text-small text-ink-2">
                  <RichTextContent value={step.body} />
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {content.details?.map((detail) => (
        <Section key={detail.title} label="In detail" tone="surface">
          <SectionHead
            title={detail.title}
            lead={<RichTextContent value={detail.lead} />}
          />

          <div className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
            {detail.items.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 50}>
                <div className="h-full rounded-lg bg-card p-7">
                  <p className="text-heading">{item.title}</p>
                  <p className="mt-2 text-small text-ink-2">
                    <RichTextContent value={item.body} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section label="What you get">
        <div className="grid gap-12 desktop:grid-cols-2 desktop:gap-16">
          <Reveal>
            <h2 className="text-title">{content.includedTitle}</h2>
            <ul className="mt-8 flex flex-col gap-4">
              {content.included.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="text-body text-ink-2">
                    <RichTextContent value={item} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-title">{content.suitsTitle}</h2>
            <ul className="mt-8 flex flex-col gap-4">
              {content.suits.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-line-2"
                  />
                  <span className="text-body text-ink-2">
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
      <Section label="Straight answers" tone="night">
        <SectionHead tone="night" title={content.boundariesTitle} />

        <ul className="mt-14 grid gap-10 tablet:grid-cols-3">
          {content.boundaries.map((item, index) => (
            <li key={index} className="text-body text-chalk-2">
              <RichTextContent value={item} tone="dark" />
            </li>
          ))}
        </ul>

        <p className="mt-14 max-w-2xl text-small text-chalk-2">
          <RichTextContent value={content.pathwayNote} tone="dark" />{" "}
          <Link
            href="/training-structure"
            className="link-sweep -my-1.5 inline-block py-1.5 text-chalk hover:text-accent-bright"
          >
            See the four pathways
          </Link>
          .
        </p>
      </Section>

      <Section label="The rest of the programme" tone="surface">
        <SectionHead
          title={
            <>
              How the <em>other parts</em> work
            </>
          }
        />

        <div className="mt-14 grid gap-4 tablet:grid-cols-3 desktop:gap-6">
          {others.map((other, index) => (
            <Reveal key={other.slug} delay={index * 60}>
              <Link
                href={`/how-it-works/${other.slug}`}
                className="group flex h-full flex-col justify-between rounded-lg bg-card p-8 transition-colors duration-200 hover:bg-surface-2"
              >
                <div>
                  <p className="text-micro text-ink-3">{other.eyebrow}</p>
                  <p className="mt-3 text-heading transition-colors duration-200 group-hover:text-accent-ink">
                    {other.navLabel}
                  </p>
                </div>
                <ArrowRightIcon className="mt-10 h-4 w-4 text-ink-3 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
