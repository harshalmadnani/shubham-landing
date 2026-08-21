import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { expectations } from "@/content/sections";
import type { Expectation } from "@/content/types";

/*
 * Three commitments, three surfaces.
 *
 * The tones come from the content model, so the copy still decides which panel
 * is loudest: ink for the first, the accent for the one we most want read, and
 * a plain card for the one about numbers we do not have yet.
 */
const panels: Record<Expectation["tone"], string> = {
  inverse: "bg-night text-chalk",
  primary: "bg-accent-ink text-canvas",
  outline: "bg-surface text-ink",
};

const bodies: Record<Expectation["tone"], string> = {
  inverse: "text-chalk-2",
  primary: "text-canvas/85",
  outline: "text-ink-2",
};

export function WhatYouCanExpect() {
  return (
    <Section id="what-you-can-expect" label="What you can expect" tone="surface">
      <SectionHead
        title={
          <>
            No guarantees — here&apos;s what we <em>actually commit to</em>
          </>
        }
        lead="Plain commitments we're willing to put in writing, rather than outcome promises nobody can make."
      />

      <div className="mt-16 grid gap-4 desktop:grid-cols-3 desktop:gap-6">
        {expectations.map((expectation, index) => (
          <Reveal key={expectation.title} delay={index * 70}>
            <div
              className={`flex h-full flex-col rounded-lg p-8 tablet:p-10 ${
                panels[expectation.tone]
              }`}
            >
              <h3 className="text-title">{expectation.title}</h3>
              <p className={`mt-4 text-body ${bodies[expectation.tone]}`}>
                {expectation.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
