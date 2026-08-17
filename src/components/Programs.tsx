"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import {
  categoryImage,
  programCategories,
  totalProgramCount,
} from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";
import type { Program } from "@/content/types";

const ALL = "All Programs";

/**
 * An editorial program card: category, serif title, description, meta, link.
 *
 * The generated 3D artwork that used to cap each card is gone — thirty-seven
 * near-identical neon renders said "template" louder than anything else on the
 * site. A vendor mark (AWS, Azure, Google Cloud) still appears where one
 * exists, because those are real logos with real meaning.
 */
function ProgramCard({ program }: { program: Program }) {
  const href =
    program.href ?? whatsAppUrl(programEnquiryMessage(program.title));
  const isExternal = href.startsWith("http");
  const linkClasses =
    "mt-lg inline-flex items-center gap-xs text-button text-primary transition-colors hover:text-violet-hover";

  const label = (
    <>
      {program.ctaLabel}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  return (
    <div className="group flex h-full flex-col rounded-lg border border-hairline bg-canvas p-xl transition-colors duration-300 hover:border-ink/40">
      <div className="flex items-start justify-between gap-md">
        <h4 className="text-card-title font-semibold text-ink">
          {program.title}
        </h4>
        {program.brand && (
          <svg
            role="img"
            aria-label={program.brand.label}
            viewBox={program.brand.viewBox}
            fill="currentColor"
            className="mt-1 h-lg w-lg shrink-0 text-ink-subtle"
          >
            {program.brand.paths.map((d, index) => (
              <path key={index} d={d} />
            ))}
          </svg>
        )}
      </div>

      <p className="mt-sm text-body-sm text-ink-muted">
        <RichTextContent value={program.description} />
      </p>

      <div className="mt-auto pt-lg">
        <p className="border-t border-hairline pt-md text-body-sm text-ink-subtle">
          <RichTextContent value={program.meta} />
        </p>
        {isExternal ? (
          <a
            href={href}
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ) : (
          <Link href={href} className={linkClasses}>
            {label}
          </Link>
        )}
      </div>
    </div>
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
    <section className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <div
          role="tablist"
          aria-label="Program categories"
          className="flex flex-wrap gap-xs"
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
                className={`flex shrink-0 items-center gap-xs whitespace-nowrap rounded-full border px-tab-x py-tab-y text-button transition-[background-color,border-color,color] duration-200 ${
                  isSelected
                    ? "border-transparent bg-primary text-on-primary"
                    : "border-hairline bg-canvas text-ink-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-xs text-caption ${
                    isSelected
                      ? "bg-white/20 text-on-primary"
                      : "bg-surface-1 text-ink-subtle"
                  }`}
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
              {/* A banner per specialization: the image carries the section,
                  the label sits on a scrim so it stays legible over any of
                  them. Decorative, so the alt text is empty. */}
              <div className="relative overflow-hidden rounded-lg bg-inverse-canvas">
                {categoryImage(category.name) && (
                  <Image
                    src={categoryImage(category.name) as string}
                    alt=""
                    width={1200}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                  />
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-r from-inverse-canvas via-inverse-canvas/80 to-inverse-canvas/55"
                />
                <div className="relative flex items-baseline justify-between gap-md px-lg py-xl tablet:px-xl">
                  <h3 className="text-headline-sm font-semibold text-inverse-ink">
                    {category.name}
                  </h3>
                  <span className="shrink-0 whitespace-nowrap text-caption text-inverse-ink-muted">
                    {category.programs.length}{" "}
                    {category.programs.length === 1 ? "program" : "programs"}
                  </span>
                </div>
              </div>

              <div className="mt-xl grid grid-cols-1 gap-xl tablet:grid-cols-2 desktop:grid-cols-3">
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
