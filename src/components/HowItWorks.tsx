import Link from "next/link";

import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { howItWorks } from "@/content/sections";

/**
 * The four steps, drawn on a line.
 *
 * The signature device of the whole site: a route with stops on it. The line
 * is a real element rather than a border, so the nodes can sit on top of it
 * and the last stop can terminate rather than trail off.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="How it works"
          title="First call to first day, in four stops"
          lead="You always know which stop you are at and what the next one is."
        />

        <ol className="relative mt-xxxl grid gap-xxl tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-lg">
          {/* The line the stops sit on. Desktop only — stacked, the rules
              between rows already carry the sequence. */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-[5px] hidden h-[2px] w-full bg-rule-strong desktop:block"
          />

          {howItWorks.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 90}>
                <span
                  aria-hidden="true"
                  className="block h-[12px] w-[12px] rounded-full border-2 border-signal bg-paper"
                />
                <p className="mt-lg font-mono text-label uppercase text-ink-3">
                  Stop {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-xs text-subtitle text-ink">{step.title}</h3>
                <p className="mt-sm max-w-[38ch] text-small text-ink-2">
                  <RichTextContent value={step.body} />
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={300}>
          <Link
            href="/how-it-works"
            className="mt-xxl inline-flex items-center gap-sm border-b-2 border-signal py-xs font-mono text-nav uppercase text-ink transition-colors hover:text-signal-text"
          >
            Read each part in full
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
