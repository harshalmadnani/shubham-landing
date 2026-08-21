"use client";

import { useId, useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { faqs } from "@/content/sections";
import type { FaqItem } from "@/content/types";

/**
 * The shared accordion. Defaults to the site-wide questions; other pages pass
 * their own set rather than standing up a second accordion.
 */
export function Faq({
  items = faqs,
  label = "FAQ",
  title = (
    <>
      Frequently asked <em>questions</em>
    </>
  ),
  lead = "Still unsure about something? The consultation call is free and there's no script.",
}: {
  items?: readonly FaqItem[];
  label?: string;
  title?: React.ReactNode;
  lead?: string;
} = {}) {
  // One panel open at a time; the first starts expanded.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" label={label}>
      <SectionHead title={title} lead={lead} />

      <div className="mt-16 flex max-w-3xl flex-col gap-3">
        {items.map((faq, itemIndex) => {
          const isOpen = itemIndex === openIndex;
          const panelId = `${baseId}-panel-${itemIndex}`;
          const buttonId = `${baseId}-button-${itemIndex}`;

          return (
            <div
              key={faq.question}
              className={`rounded-lg transition-colors duration-200 ${
                isOpen ? "bg-surface" : "bg-surface/60 hover:bg-surface"
              }`}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : itemIndex)}
                  className="flex w-full items-start gap-6 p-7 text-left"
                >
                  <span className="flex-1 text-heading">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className={`relative mt-1.5 h-3.5 w-3.5 shrink-0 text-ink-2 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                  </span>
                </button>
              </h3>

              {/* Kept in the DOM when shut so the answer is still findable. */}
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                <p className="px-7 pb-7 text-body text-ink-2">
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
