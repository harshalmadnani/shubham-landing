"use client";

import { useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { SectionHeading } from "@/components/SectionHeading";
import { pathways } from "@/content/sections";

export function OurApproach() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = pathways[selectedIndex];

  return (
    <section id="our-approach" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Our approach"
          title="Four pathways, depending on where you're starting from"
          lead="Pick the route that matches your background — each one is a full sequence, not a menu of modules."
        />

        <div className="mt-xxl grid grid-cols-1 gap-lg desktop:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] desktop:gap-xl">
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
                  className={`flex items-center gap-md rounded-xl border p-lg text-left transition-[background-color,border-color,box-shadow,transform] duration-300 ${
                    isSelected
                      ? "border-transparent bg-ink"
                      : "border-hairline bg-canvas hover:border-ink/40"
                  }`}
                >
                  <span
                    className={`flex h-xl w-xl shrink-0 items-center justify-center rounded-full text-caption ${
                      isSelected
                        ? "bg-white/20 text-on-primary"
                        : "bg-surface-1 text-ink-subtle"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-card-title ${
                      isSelected ? "text-on-primary" : "text-ink"
                    }`}
                  >
                    {pathway.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-hairline bg-canvas p-xl">
            <div className="flex flex-col gap-xs tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-md">
              <div>
                <p className="text-eyebrow uppercase text-ink-muted">
                  {selected.name}
                </p>
                <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
                  {selected.description}
                </p>
              </div>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-surface-1 px-md py-xs text-caption text-ink-muted">
                {selected.steps.length} steps
              </span>
            </div>

            <ol className="mt-xl flex max-w-2xl flex-col">
              {selected.steps.map((step, index) => {
                const isLast = index === selected.steps.length - 1;
                return (
                  <li key={step.title} className="flex gap-md">
                    <div className="flex flex-col items-center">
                      <span className="flex h-xl w-xl shrink-0 items-center justify-center rounded-full bg-ink font-serif text-body text-inverse-ink">
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
