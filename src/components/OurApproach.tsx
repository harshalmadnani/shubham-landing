"use client";

import { useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { pathways } from "@/content/sections";

export function OurApproach() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = pathways[selectedIndex];

  return (
    <section id="our-approach" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">Our Approach</h2>
        <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
          Four pathways, depending on where you&apos;re starting from.
        </p>

        <div className="mt-xl grid grid-cols-1 gap-xl desktop:grid-cols-3 desktop:gap-xxl">
          <div
            role="tablist"
            aria-label="Pathways"
            className="grid grid-cols-1 gap-sm tablet:grid-cols-2 desktop:grid-cols-1"
          >
            {pathways.map((pathway, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={pathway.name}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex items-center gap-md border border-hairline p-lg text-left transition-colors ${
                    isSelected
                      ? "border-l-4 border-l-primary bg-surface-1"
                      : "hover:border-hairline-strong hover:bg-surface-1"
                  }`}
                >
                  <span
                    className={`text-caption ${
                      isSelected ? "text-primary" : "text-ink-subtle"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-card-title ${
                      isSelected ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {pathway.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border border-hairline bg-canvas p-xl desktop:col-span-2">
            <p className="text-eyebrow text-primary">{selected.name}</p>
            <div className="mt-xs flex flex-col gap-xs tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-md">
              <p className="max-w-2xl text-body-lg text-ink-muted">
                {selected.description}
              </p>
              <span className="shrink-0 whitespace-nowrap text-caption text-ink-subtle">
                {selected.steps.length} steps
              </span>
            </div>

            <ol className="mt-xl flex max-w-2xl flex-col">
              {selected.steps.map((step, index) => {
                const isLast = index === selected.steps.length - 1;
                return (
                  <li key={step.title} className="flex gap-md">
                    <div className="flex flex-col items-center">
                      <span className="flex h-xl w-xl shrink-0 items-center justify-center rounded-none bg-ink text-body-emphasis text-inverse-ink">
                        {index + 1}
                      </span>
                      {/* Connector down to the next step. */}
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="mt-xs w-px flex-1 bg-hairline"
                        />
                      )}
                    </div>
                    <div className={isLast ? "" : "pb-lg"}>
                      <p className="text-card-title text-ink">{step.title}</p>
                      <p className="mt-xs text-body-sm text-ink-muted">
                        <RichTextContent value={step.body} />
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
