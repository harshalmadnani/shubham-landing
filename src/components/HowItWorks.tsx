import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { howItWorks } from "@/content/sections";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from first call to hired"
          lead="No mystery process — you always know which stage you're in and what comes next."
        />

        <ol className="mt-xxl grid grid-cols-1 gap-x-xxl gap-y-xxl tablet:grid-cols-2 desktop:grid-cols-4">
          {howItWorks.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 80} className="h-full">
                <div className="h-full border-t border-hairline pt-lg">
                  <span
                    aria-hidden="true"
                    className="flex h-xl w-xl items-center justify-center rounded-full bg-primary text-body-emphasis text-on-primary"
                  >
                    {index + 1}
                  </span>
                  <p className="mt-lg text-card-title text-ink">{step.title}</p>
                  <p className="mt-xs text-body-sm text-ink-muted">
                    <RichTextContent value={step.body} />
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* The four steps in summary; the process pages are where each one is
            actually described. */}
        <Reveal delay={320}>
          <Link
            href="/how-it-works"
            className="group mt-xxl inline-flex items-center gap-xs text-body text-primary"
          >
            Read how each part actually works
            <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
