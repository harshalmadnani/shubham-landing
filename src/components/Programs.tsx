"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { programCategories, totalProgramCount } from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";
import type { Program } from "@/content/types";

const ALL = "All programs";

/**
 * A program in the catalogue: its name and its facts, and nothing else.
 *
 * The paragraph each of these used to carry is on the program's own page,
 * where somebody who has picked it will read it. Thirty-seven paragraphs
 * stacked in a list is a page nobody reads at all.
 */
function ProgramCard({ program }: { program: Program }) {
  const href =
    program.href ?? whatsAppUrl(programEnquiryMessage(program.title));
  const isExternal = href.startsWith("http");

  const body = (
    <>
      <span className="flex items-start justify-between gap-4">
        <span className="text-heading transition-colors duration-200 group-hover:text-accent-ink">
          {program.title}
        </span>
        {program.brand && (
          <svg
            role="img"
            aria-label={program.brand.label}
            viewBox={program.brand.viewBox}
            fill="currentColor"
            className="mt-1 h-5 w-5 shrink-0 text-ink-3"
          >
            {program.brand.paths.map((d, index) => (
              <path key={index} d={d} />
            ))}
          </svg>
        )}
      </span>

      <span className="mt-8 flex items-center justify-between gap-4">
        <span className="text-micro text-ink-3">
          <RichTextContent value={program.meta} />
        </span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink-3 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </>
  );

  const cardClasses =
    "group flex h-full flex-col justify-between rounded-lg bg-surface p-7 transition-colors duration-200 hover:bg-surface-2";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClasses}>
      {body}
    </Link>
  );
}

export function Programs() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const visibleCategories =
    activeCategory === ALL
      ? programCategories
      : programCategories.filter((category) => category.name === activeCategory);

  const tabs = [
    { name: ALL, label: ALL, count: totalProgramCount },
    ...programCategories.map((category) => ({
      name: category.name,
      label: category.name,
      count: category.programs.length,
    })),
  ];

  return (
    <section className="bg-canvas">
      <div className="mx-auto w-full max-w-page px-6 py-20 tablet:px-8 tablet:py-24">
        <div
          role="tablist"
          aria-label="Program categories"
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab) => {
            const isSelected = tab.name === activeCategory;
            return (
              <button
                key={tab.name}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(tab.name)}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-micro transition-colors duration-200 ${
                  isSelected
                    ? "bg-ink text-canvas"
                    : "bg-surface text-ink-2 hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {tab.label}
                <span className={isSelected ? "text-canvas/60" : "text-ink-3"}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {visibleCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-title">{category.name}</h2>

              <div className="mt-8 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
                {category.programs.map((program) => (
                  <ProgramCard key={program.title} program={program} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
