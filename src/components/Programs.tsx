"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { SectionHeading } from "@/components/SectionHeading";
import { programCategories, totalProgramCount } from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";
import type { Program } from "@/content/types";

const ALL = "All Programs";

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
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-canvas shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-3/2 w-full overflow-hidden bg-inverse-canvas">
        <Image
          src={`/images/${program.image}.webp`}
          alt=""
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Scrim so the title stays readable over any photo. */}
        <div className="absolute inset-0 bg-linear-to-t from-inverse-canvas/92 via-inverse-canvas/25 to-transparent" />
        {program.brand && (
          <div className="absolute right-md top-md flex h-xl w-xl items-center justify-center rounded-full glass">
            <svg
              role="img"
              aria-label={program.brand.label}
              viewBox={program.brand.viewBox}
              fill="currentColor"
              className="h-md w-md text-inverse-ink"
            >
              {program.brand.paths.map((d, index) => (
                <path key={index} d={d} />
              ))}
            </svg>
          </div>
        )}
        <p className="absolute inset-x-0 bottom-0 p-lg text-card-title text-inverse-ink">
          {program.title}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-lg">
        <p className="text-body text-ink">
          <RichTextContent value={program.description} />
        </p>
        <p className="mt-md text-body-sm text-ink-muted">
          <RichTextContent value={program.meta} />
        </p>
        <div className="mt-auto">
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
    <section id="programs" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Programs"
          title={`${totalProgramCount} programs across ${programCategories.length} specializations`}
          lead="From hands-on technical roles to the analyst and support paths around them."
        />

        <div
          role="tablist"
          aria-label="Program categories"
          className="mt-xl flex flex-wrap gap-xs"
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
                className={`flex shrink-0 items-center gap-xs whitespace-nowrap rounded-full border px-tab-x py-tab-y text-button transition-[background-color,border-color,color,box-shadow] duration-200 ${
                  isSelected
                    ? "border-transparent bg-brand-gradient text-on-primary shadow-primary"
                    : "border-hairline bg-canvas text-ink-muted hover:border-primary/40 hover:text-ink"
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-xs text-caption ${
                    isSelected ? "bg-white/20" : "bg-surface-1 text-ink-subtle"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-xxl flex flex-col gap-xxl">
          {visibleCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-baseline justify-between gap-md border-b border-hairline pb-md">
                <h3 className="text-headline-sm text-ink">{category.name}</h3>
                <span className="shrink-0 whitespace-nowrap text-caption text-ink-subtle">
                  {category.programs.length}{" "}
                  {category.programs.length === 1 ? "program" : "programs"}
                </span>
              </div>

              <div className="mt-lg grid grid-cols-1 gap-lg tablet:grid-cols-2 desktop:grid-cols-3">
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
