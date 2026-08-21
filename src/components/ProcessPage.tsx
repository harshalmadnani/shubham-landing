import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { Marker } from "@/components/CheckIcon";
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
 * giving each its own shape would add a difference that means nothing.
 */
export function ProcessPage({ content }: { content: ProcessContent }) {
  const others = processes.filter((process) => process.slug !== content.slug);
  const Illustration = processIllustrations[content.slug];

  return (
    <>
      {/* Pine hero. The rest of the site is bone, and these four pages benefit
          from reading as their own place — it also gives the schematic a
          ground to sit on rather than floating in more paper. */}
      <section className="panel-pine">
        <div className="mx-auto grid max-w-page items-center gap-xxl px-gutter pb-xxxl pt-xxl tablet:px-rail tablet:pt-xxxl desktop:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div>
            <p className="flex items-center gap-sm font-mono text-label uppercase text-pine-ink-2">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              {content.eyebrow}
            </p>

            <h1 className="mt-lg max-w-[20ch] text-display text-pine-ink">
              {content.headline}{" "}
              <em className="text-signal-on-pine">{content.headlineAccent}</em>
            </h1>

            <p className="mt-lg max-w-[52ch] text-lead text-pine-ink-2">
              <RichTextContent value={content.lead} tone="dark" />
            </p>

            <dl className="mt-xl grid gap-px bg-pine-rule tablet:grid-cols-3">
              {content.facts.map((fact) => (
                <div key={fact.label} className="bg-pine py-md pr-md">
                  <dt className="font-mono text-data text-signal-on-pine">
                    {fact.value}
                  </dt>
                  <dd className="mt-xxs text-small text-pine-ink-2">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-xl flex flex-wrap gap-sm">
              <ButtonLink href={whatsAppUrl(content.enquiry)}>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/training-structure" variant="onPine">
                Routes and prices
              </ButtonLink>
            </div>
          </div>

          {Illustration && (
            <div className="border border-pine-rule bg-paper p-md">
              <Illustration className="w-full" />
            </div>
          )}
        </div>
      </section>

      {/* The whole sequence in one line before any of it is explained — you
          can see how many stops there are and where they go first. */}
      <section className="border-b border-rule bg-paper-sunk">
        <div className="mx-auto max-w-page px-gutter py-lg tablet:px-rail">
          <ol className="flex flex-col gap-sm tablet:flex-row tablet:items-start">
            {content.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-1 items-start gap-sm tablet:flex-col tablet:gap-xs"
              >
                <span className="flex items-center gap-sm tablet:w-full">
                  <span
                    aria-hidden="true"
                    className="h-[9px] w-[9px] shrink-0 rounded-full border-2 border-signal bg-paper-sunk"
                  />
                  {index < content.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-[2px] flex-1 bg-rule-strong tablet:block"
                    />
                  )}
                </span>
                <span className="font-mono text-data text-ink-2 tablet:pr-md">
                  {step.title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The process itself. */}
      <section className="mt-xxxl">
        <div className="mx-auto max-w-page px-gutter tablet:px-rail">
          <SectionHeading
            label="Step by step"
            title={content.stepsTitle}
            lead={<RichTextContent value={content.stepsLead} />}
          />

          <ol className="mt-xxl border-t border-ink">
            {content.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 50}>
                <li className="grid gap-sm border-b border-rule py-lg desktop:grid-cols-[4rem_minmax(0,17rem)_minmax(0,1fr)] desktop:gap-xl desktop:py-xl">
                  <span
                    aria-hidden="true"
                    className="font-mono text-label text-signal-text"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-subtitle text-ink">{step.title}</h3>
                  <p className="max-w-[62ch] text-body text-ink-2">
                    <RichTextContent value={step.body} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Detail blocks: the five projects, the guidelines, what we ask. */}
      {content.details?.map((detail) => (
        <section key={detail.title} className="mt-band">
          <div className="mx-auto max-w-page px-gutter tablet:px-rail">
            <SectionHeading
              title={detail.title}
              lead={<RichTextContent value={detail.lead} />}
            />
            <div className="mt-xxl grid gap-px border border-rule bg-rule tablet:grid-cols-2 desktop:grid-cols-3">
              {detail.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 50} className="h-full">
                  <div className="flex h-full flex-col bg-paper p-lg">
                    <p className="text-card text-ink">{item.title}</p>
                    <p className="mt-xs text-small text-ink-2">
                      <RichTextContent value={item.body} />
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* What you get, and who it is for. */}
      <section className="mt-band">
        <div className="mx-auto grid max-w-page gap-xxl px-gutter tablet:px-rail desktop:grid-cols-2 desktop:gap-xxxl">
          <Reveal>
            <div>
              <p className="font-mono text-label uppercase text-ink-3">
                {content.includedTitle}
              </p>
              <ul className="mt-lg border-t border-ink">
                {content.included.map((item, index) => (
                  <li key={index} className="flex gap-sm border-b border-rule py-sm">
                    <Marker />
                    <span className="text-body text-ink">
                      <RichTextContent value={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p className="font-mono text-label uppercase text-ink-3">
                {content.suitsTitle}
              </p>
              <ul className="mt-lg border-t border-ink">
                {content.suits.map((item, index) => (
                  <li key={index} className="flex gap-sm border-b border-rule py-sm">
                    <span
                      aria-hidden="true"
                      className="mt-[0.58em] block h-[2px] w-3 shrink-0 bg-rule-strong"
                    />
                    <span className="text-body text-ink-2">
                      <RichTextContent value={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The boundaries — what makes the rest of the page believable. */}
      <section className="mt-band">
        <div className="mx-auto max-w-page px-gutter tablet:px-rail">
          <Reveal>
            <div className="panel-pine border-l-2 border-signal p-lg tablet:p-xl">
              <p className="font-mono text-label uppercase text-pine-ink-2">
                Straight answers
              </p>
              <h2 className="mt-sm max-w-[24ch] text-title text-pine-ink">
                {content.boundariesTitle}
              </h2>
              <ul className="mt-xl grid gap-lg tablet:grid-cols-3">
                {content.boundaries.map((item, index) => (
                  <li
                    key={index}
                    className="border-t border-pine-rule pt-md text-small text-pine-ink-2"
                  >
                    <RichTextContent value={item} tone="dark" />
                  </li>
                ))}
              </ul>
              <p className="mt-xl max-w-[62ch] text-small text-pine-ink-2">
                <RichTextContent value={content.pathwayNote} tone="dark" />{" "}
                <Link
                  href="/training-structure"
                  className="text-pine-ink underline decoration-signal underline-offset-4 hover:no-underline"
                >
                  See the four routes
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* On to the next process. */}
      <section className="mt-band">
        <div className="mx-auto max-w-page px-gutter tablet:px-rail">
          <SectionHeading
            label="The rest of the programme"
            title="How the other parts work"
          />
          <div className="mt-xxl grid gap-px border border-rule bg-rule tablet:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 60} className="h-full">
                <Link
                  href={`/how-it-works/${other.slug}`}
                  className="group flex h-full flex-col bg-paper p-lg transition-colors duration-200 hover:bg-raised"
                >
                  <p className="font-mono text-label uppercase text-ink-3">
                    {other.eyebrow}
                  </p>
                  <p className="mt-sm text-subtitle text-ink">
                    {other.navLabel}
                  </p>
                  <p className="mt-xs text-small text-ink-2">
                    {other.headline} {other.headlineAccent}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-xs pt-lg font-mono text-nav uppercase text-ink transition-colors group-hover:text-signal-text">
                    Read it
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
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
