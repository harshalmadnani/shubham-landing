"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { programCategories, totalProgramCount } from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";
import type { Program } from "@/content/types";

const ALL = "All Programs";

/**
 * A program is a row in a catalogue, not a card in a grid.
 *
 * Thirty-seven cards is a wall; thirty-seven ruled rows is an index you can
 * run your eye down. Each row carries the same four things in the same four
 * places — number, title, what it is, how long it runs — so comparing two
 * programs is a matter of scanning a column rather than reading two boxes.
 */
function ProgramRow({
  program,
  position,
}: {
  program: Program;
  position: number;
}) {
  const href =
    program.href ?? whatsAppUrl(programEnquiryMessage(program.title));
  const isExternal = href.startsWith("http");

  const body = (
    <>
      <span className="font-mono text-index tnum text-ink-3 transition-colors duration-200 group-hover:text-flame-ink desktop:col-span-1">
        {String(position).padStart(2, "0")}
      </span>

      <span className="flex items-start gap-3 desktop:col-span-4">
        <span className="text-subtitle text-ink transition-colors duration-200 group-hover:text-flame-ink">
          {program.title}
        </span>
        {program.brand && (
          <svg
            role="img"
            aria-label={program.brand.label}
            viewBox={program.brand.viewBox}
            fill="currentColor"
            className="mt-1 h-4 w-4 shrink-0 text-ink-3"
          >
            {program.brand.paths.map((d, index) => (
              <path key={index} d={d} />
            ))}
          </svg>
        )}
      </span>

      <span className="text-small text-ink-2 desktop:col-span-4">
        <RichTextContent value={program.description} />
      </span>

      <span className="font-mono text-meta uppercase text-ink-3 desktop:col-span-2">
        <RichTextContent value={program.meta} />
      </span>

      <span className="flex items-center gap-2 font-mono text-label uppercase text-ink transition-colors duration-200 group-hover:text-flame-ink desktop:col-span-1 desktop:justify-end">
        <span className="desktop:sr-only">{program.ctaLabel}</span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </>
  );

  const rowClasses =
    "group grid gap-x-6 gap-y-3 border-b border-rule px-2 py-6 transition-colors duration-200 hover:bg-paper-2 desktop:grid-cols-12 desktop:items-baseline";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={rowClasses}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={rowClasses}>
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
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-page px-6 py-16 tablet:px-10 tablet:py-20">
        <div
          role="tablist"
          aria-label="Program categories"
          className="flex flex-wrap gap-x-6 gap-y-3 border-b border-ink pb-5"
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
                className={`group flex shrink-0 items-baseline gap-2 whitespace-nowrap font-mono text-label uppercase transition-colors duration-200 ${
                  isSelected ? "text-flame-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {tab.label}
                <span className="tnum text-ink-3">{tab.count}</span>
                {isSelected && (
                  <span
                    aria-hidden="true"
                    className="ml-1 h-1.5 w-1.5 shrink-0 self-center bg-flame"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {visibleCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-baseline gap-5 border-b border-ink pb-5">
                <h3 className="flex-1 font-display text-title text-ink">
                  {category.name}
                </h3>
                <span className="shrink-0 font-mono text-meta uppercase tnum text-ink-3">
                  {category.programs.length}{" "}
                  {category.programs.length === 1 ? "program" : "programs"}
                </span>
              </div>

              <div>
                {category.programs.map((program, index) => (
                  <ProgramRow
                    key={program.title}
                    program={program}
                    position={index + 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
