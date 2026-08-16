"use client";

import { useId, useState } from "react";

import { ChevronDownIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/content/sections";

export function Faq() {
  // One panel open at a time; the first starts expanded.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          lead="Still unsure about something? The consultation call is free and there's no script."
          align="center"
        />

        <div className="mx-auto mt-xxl flex max-w-3xl flex-col gap-sm">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-[background-color,border-color,box-shadow] duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-canvas shadow-card"
                    : "border-hairline bg-canvas hover:border-primary/30"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-md p-lg text-left"
                >
                  <span className="text-card-title text-ink">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-xl w-xl shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-brand-gradient text-on-primary"
                        : "bg-surface-1 text-ink-muted"
                    }`}
                  >
                    <ChevronDownIcon
                      className={`h-md w-md transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Grid-rows trick: animates to the panel's natural height
                    without measuring it in JS. */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      id={panelId}
                      aria-hidden={!isOpen}
                      className="px-lg pb-lg text-body text-ink-muted"
                    >
                      <RichTextContent value={faq.answer} />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
