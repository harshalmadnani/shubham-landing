"use client";

import { useId, useState } from "react";

import { ChevronDownIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { faqs } from "@/content/sections";

export function Faq() {
  // One panel open at a time; the first starts expanded.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">Frequently asked questions</h2>

        <div className="mt-xl max-w-2xl border border-hairline bg-canvas">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`border-l-4 pl-lg transition-colors duration-300 ${
                  isOpen
                    ? "border-l-primary bg-surface-1"
                    : "border-l-transparent"
                }${index === 0 ? "" : " border-t border-hairline"}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-md py-lg pr-lg text-left"
                >
                  <span className="text-card-title text-ink">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-lg w-lg shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-ink-muted"
                    }`}
                  />
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
                      className="pb-lg pr-lg text-body text-ink-muted"
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
