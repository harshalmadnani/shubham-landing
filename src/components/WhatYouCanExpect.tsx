import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { expectations } from "@/content/sections";

/**
 * Three promises, set large.
 *
 * Full-width statements separated by rules rather than three cards in a row.
 * These are the site's commitments, and a commitment set at 2.5rem reads like
 * one; the same words inside a bordered box read like a feature.
 */
export function WhatYouCanExpect() {
  return (
    <section id="what-to-expect" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="Our side of it"
          title="What you can expect from us"
        />

        <ol className="mt-xxl border-t border-ink">
          {expectations.map((expectation, index) => (
            <Reveal key={expectation.title} delay={index * 80}>
              <li className="grid gap-md border-b border-rule py-xl desktop:grid-cols-[4rem_minmax(0,1fr)] desktop:gap-xl">
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-signal-text"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="max-w-[26ch] text-title text-ink">
                    {expectation.title}
                  </h3>
                  <p className="mt-md max-w-[58ch] text-lead text-ink-2">
                    {expectation.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
