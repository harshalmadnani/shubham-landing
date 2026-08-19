"use client";

import Link from "next/link";
import { useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { programCategories, totalProgramCount } from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";
import type { Program } from "@/content/types";

const ALL = "All programmes";

/**
 * A catalogue cell.
 *
 * Cells in a ruled grid rather than floating cards: thirty-seven bordered
 * boxes with their own shadows is what made this page feel like a directory
 * dump. The grid does the dividing, the cell just holds content.
 *
 * A vendor mark appears where one exists, drawn in ink rather than brand
 * colour — thirty-seven cells of assorted logo colours would fight the page,
 * and the ticker in the hero is where those marks get to be themselves.
 */
function ProgramCell({ program }: { program: Program }) {
  const href =
    program.href ?? whatsAppUrl(programEnquiryMessage(program.title));
  const isExternal = href.startsWith("http");

  const inner = (
    <>
      <div className="flex items-start justify-between gap-md">
        <h3 className="text-card text-ink">{program.title}</h3>
        {program.brand && (
          <svg
            aria-hidden="true"
            viewBox={program.brand.viewBox}
            fill="currentColor"
            className="mt-[3px] h-4 w-4 shrink-0 text-ink-3"
          >
            {program.brand.paths.map((d, index) => (
              <path key={index} d={d} />
            ))}
          </svg>
        )}
      </div>

      <p className="mt-sm text-small text-ink-2">
        <RichTextContent value={program.description} />
      </p>

      <div className="mt-auto pt-lg">
        <p className="border-t border-rule pt-sm font-mono text-data text-ink-3">
          <RichTextContent value={program.meta} />
        </p>
        <span className="mt-sm inline-flex items-center gap-xs font-mono text-nav uppercase text-ink transition-colors group-hover:text-signal-text">
          {program.ctaLabel}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </>
  );

  const cellClasses =
    "group flex h-full flex-col bg-paper p-lg transition-colors duration-200 hover:bg-raised";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cellClasses}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cellClasses}>
      {inner}
    </Link>
  );
}

export function Programs() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const visibleCategories =
    activeCategory === ALL
      ? programCategories
      : programCategories.filter(
          (category) => category.name === activeCategory,
        );

  const tabs = [
    { name: ALL, count: totalProgramCount },
    ...programCategories.map((category) => ({
      name: category.name,
      count: category.programs.length,
    })),
  ];

  return (
    <section className="mt-xxxl">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <div
          role="tablist"
          aria-label="Programme specialisations"
          className="flex flex-wrap gap-xs border-b border-ink pb-lg"
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
                className={`flex shrink-0 items-center gap-xs whitespace-nowrap border px-sm py-[9px] font-mono text-data transition-colors duration-150 ${
                  isSelected
                    ? "border-ink bg-ink text-paper"
                    : "border-rule-strong bg-transparent text-ink-2 hover:border-ink hover:text-ink"
                }`}
              >
                {tab.name}
                <span
                  className={
                    isSelected ? "text-paper/60" : "text-ink-3"
                  }
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-xxl flex flex-col gap-xxxl">
          {visibleCategories.map((category) => (
            <div key={category.name}>
              {/* A signage band per specialisation. The photographs that used
                  to sit here were licensed and generated stand-ins; a plate
                  with the count on it says the same thing and belongs to this
                  site rather than to a stock library. */}
              <div className="flex items-baseline justify-between gap-md border-l-2 border-signal bg-pine px-lg py-md">
                <h2 className="text-subtitle text-pine-ink">
                  {category.name}
                </h2>
                <span className="shrink-0 font-mono text-data text-pine-ink-2">
                  {String(category.programs.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid gap-px border-x border-b border-rule bg-rule tablet:grid-cols-2 desktop:grid-cols-3">
                {category.programs.map((program) => (
                  <ProgramCell key={program.title} program={program} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
