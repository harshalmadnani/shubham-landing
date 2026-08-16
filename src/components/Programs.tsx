"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { programCategories, totalProgramCount } from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";
import type { Program } from "@/content/types";

const ALL = "All Programs";

function ProgramCard({ program }: { program: Program }) {
  const href =
    program.href ?? whatsAppUrl(programEnquiryMessage(program.title));
  const isExternal = href.startsWith("http");
  const linkClasses =
    "inline-flex items-center justify-center gap-xs rounded-none px-md py-sm text-button transition-colors border border-transparent bg-canvas text-primary hover:bg-surface-1 mt-lg -ml-md";

  const label = (
    <>
      {program.ctaLabel} →
    </>
  );

  return (
    <div className="flex flex-col border border-hairline">
      <div className="relative aspect-3/2 w-full overflow-hidden bg-inverse-canvas">
        <Image
          src={`/images/${program.image}.webp`}
          alt=""
          width={1200}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Scrim so the title stays readable over any photo. */}
        <div className="absolute inset-0 bg-linear-to-t from-inverse-canvas/90 via-inverse-canvas/10 to-transparent" />
        {program.brand && (
          <div className="absolute right-0 top-0 m-md flex h-xl w-xl items-center justify-center bg-inverse-canvas/70">
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

      <div className="p-lg">
        <p className="text-body text-ink">
          <RichTextContent value={program.description} />
        </p>
        <p className="mt-md text-body-sm text-ink-muted">
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
    { name: ALL, label: `${ALL} · ${totalProgramCount}` },
    ...programCategories.map((category) => ({
      name: category.name,
      label: `${category.name} · ${category.programs.length}`,
    })),
  ];

  return (
    <section id="programs" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">Programs</h2>
        <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
          {totalProgramCount} programs across {programCategories.length}{" "}
          specializations — from hands-on technical roles to the analyst and
          support paths around them.
        </p>

        <div
          role="tablist"
          aria-label="Program categories"
          className="mt-xl flex flex-wrap gap-md"
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
                className={`shrink-0 whitespace-nowrap rounded-none px-tab-x py-tab-y text-button transition-colors ${
                  isSelected
                    ? "bg-primary text-on-primary"
                    : "bg-canvas text-ink-muted"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-xl flex flex-col gap-xxl">
          {visibleCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-baseline justify-between gap-md">
                <h3 className="text-card-title text-ink">{category.name}</h3>
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
