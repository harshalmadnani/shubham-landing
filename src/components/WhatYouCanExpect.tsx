import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { expectations } from "@/content/sections";
import type { Expectation } from "@/content/types";

const cardTone: Record<Expectation["tone"], string> = {
  inverse: "bg-inverse-canvas text-inverse-ink shadow-lift",
  primary: "bg-brand-gradient text-on-primary shadow-primary",
  outline: "border border-hairline bg-canvas text-ink shadow-card",
};

const bodyTone: Record<Expectation["tone"], string> = {
  inverse: "text-inverse-ink-muted",
  primary: "text-on-primary/85",
  outline: "text-ink-muted",
};

export function WhatYouCanExpect() {
  return (
    <section id="what-you-can-expect" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="What you can expect"
          title="No guarantees — here's what we actually commit to"
          lead="Plain commitments we're willing to put in writing, rather than outcome promises nobody can make."
        />

        <div className="mt-xxl grid grid-cols-1 gap-lg tablet:grid-cols-3">
          {expectations.map((expectation, index) => (
            <Reveal key={expectation.title} delay={index * 90}>
              <div
                className={`h-full rounded-xl p-xl transition-transform duration-300 hover:-translate-y-1 ${
                  cardTone[expectation.tone]
                }`}
              >
                <p className="text-card-title">{expectation.title}</p>
                <p className={`mt-sm text-body-sm ${bodyTone[expectation.tone]}`}>
                  {expectation.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
