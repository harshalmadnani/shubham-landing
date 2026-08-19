import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { expectations } from "@/content/sections";
import type { Expectation } from "@/content/types";

/*
 * Three commitments, three surfaces.
 *
 * The tones are carried over from the content model, so the copy still decides
 * which panel is loudest: ink for the first, the accent for the one we most
 * want read, and plain paper for the one about numbers we do not have yet —
 * an admission should not be shouted.
 *
 * The accent panel uses the darkened accent rather than the bright one: paper
 * on full vermilion is 4.25:1, which is fine for the heading and not for the
 * paragraph under it.
 */
const panels: Record<Expectation["tone"], string> = {
  inverse: "bg-night text-bone",
  primary: "bg-flame-ink text-paper",
  outline: "bg-paper text-ink",
};

const bodies: Record<Expectation["tone"], string> = {
  inverse: "text-bone-2",
  primary: "text-paper/85",
  outline: "text-ink-2",
};

const indices: Record<Expectation["tone"], string> = {
  inverse: "text-flame-bright",
  primary: "text-paper",
  outline: "text-flame-ink",
};

export function WhatYouCanExpect() {
  return (
    <Section id="what-you-can-expect" index="07" label="What you can expect">
      <SectionHead
        title={
          <>
            No guarantees — here&apos;s what we <em>actually commit to</em>
          </>
        }
        lead="Plain commitments we're willing to put in writing, rather than outcome promises nobody can make."
      />

      <div className="mt-16 grid overflow-hidden border border-ink desktop:grid-cols-3">
        {expectations.map((expectation, index) => (
          <Reveal
            key={expectation.title}
            delay={index * 70}
            className="-mb-px -mr-px border-b border-r border-ink"
          >
            <div
              className={`flex h-full flex-col gap-4 p-8 tablet:p-10 ${
                panels[expectation.tone]
              }`}
            >
              <span
                className={`font-mono text-index tnum ${
                  indices[expectation.tone]
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-title">
                {expectation.title}
              </h3>
              <p className={`text-body ${bodies[expectation.tone]}`}>
                {expectation.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
