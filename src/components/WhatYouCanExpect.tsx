import { expectations } from "@/content/sections";
import type { Expectation } from "@/content/types";

const cardTone: Record<Expectation["tone"], string> = {
  inverse: "bg-inverse-canvas text-inverse-ink",
  primary: "bg-primary text-on-primary",
  outline: "border border-hairline bg-canvas text-ink",
};

const bodyTone: Record<Expectation["tone"], string> = {
  inverse: "text-inverse-ink-muted",
  primary: "text-on-primary/80",
  outline: "text-ink-muted",
};

export function WhatYouCanExpect() {
  return (
    <section id="what-you-can-expect" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">What You Can Expect</h2>
        <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
          No guarantees — here&apos;s what we actually commit to.
        </p>

        <div className="mt-xl grid grid-cols-1 gap-lg tablet:grid-cols-3">
          {expectations.map((expectation) => (
            <div
              key={expectation.title}
              className={`p-xl ${cardTone[expectation.tone]}`}
            >
              <p className="text-card-title">{expectation.title}</p>
              <p className={`mt-sm text-body-sm ${bodyTone[expectation.tone]}`}>
                {expectation.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
