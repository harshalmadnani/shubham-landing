"use client";

import { useId, useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { faqs } from "@/content/sections";
import type { FaqItem } from "@/content/types";

/**
 * The shared accordion. Defaults to the site-wide questions; other pages pass
 * their own set rather than standing up a second accordion.
 *
 * Rows are ruled and full width, and the marker is a cross that rotates into a
 * minus — the same cross the lists elsewhere use as a bullet, so the page has
 * one vocabulary of marks rather than a separate set of chevrons.
 */
export function Faq({
  items = faqs,
  index = "08",
  label = "FAQ",
  title = (
    <>
      Frequently asked <em>questions</em>
    </>
  ),
  lead = "Still unsure about something? The consultation call is free and there's no script.",
}: {
  items?: readonly FaqItem[];
  index?: string;
  label?: string;
  title?: React.ReactNode;
  lead?: string;
} = {}) {
  // One panel open at a time; the first starts expanded.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" index={index} label={label} tone="paper-2">
      <SectionHead title={title} lead={lead} />

      <div className="mt-16 border-t border-ink">
        {items.map((faq, itemIndex) => {
          const isOpen = itemIndex === openIndex;
          const panelId = `${baseId}-panel-${itemIndex}`;
          const buttonId = `${baseId}-button-${itemIndex}`;

          return (
            <div key={faq.question} className="border-b border-rule">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : itemIndex)}
                  className="group flex w-full items-start gap-6 py-7 text-left"
                >
                  <span className="mt-2 font-mono text-index tnum text-flame-ink">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-title text-ink transition-colors duration-200 group-hover:text-flame-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative mt-3 h-3 w-3 shrink-0 text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                  </span>
                </button>
              </h3>

              {/* Grid-rows trick: the panel animates open without a measured
                  height, and stays in the DOM so it is searchable when shut. */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="grid pl-12 desktop:grid-cols-12"
              >
                <p className="max-w-prose pb-8 text-body text-ink-2 desktop:col-span-8">
                  <RichTextContent value={faq.answer} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
