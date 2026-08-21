"use client";

import { useId, useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/content/sections";
import type { FaqItem } from "@/content/types";

function Question({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="border-b border-rule">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="group flex w-full items-start gap-md py-lg text-left"
      >
        <span
          aria-hidden="true"
          className="mt-[5px] font-mono text-label text-signal-text"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-subtitle text-ink transition-colors group-hover:text-signal-text">
          {item.question}
        </span>
        {/* A plus that becomes a minus — no chevron, and no rotation that
            reads as a different control mid-animation. */}
        <span
          aria-hidden="true"
          className="relative mt-[10px] h-[14px] w-[14px] shrink-0"
        >
          <span className="absolute left-0 top-[6px] h-[2px] w-[14px] bg-ink" />
          <span
            className={`absolute left-[6px] top-0 h-[14px] w-[2px] bg-ink transition-transform duration-200 ${
              isOpen ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div id={panelId} className="pb-lg pl-[calc(4rem)] desktop:pr-rail">
          <p className="max-w-[64ch] text-body text-ink-2">
            <RichTextContent value={item.answer} />
          </p>
        </div>
      )}
    </li>
  );
}

/**
 * Questions, on rules.
 *
 * Every answer collapsed by default: an open accordion of nine long answers is
 * the single fastest way to make a page look like a wall.
 */
export function Faq({
  items = faqs,
  label = "Questions",
  title = "The things people ask before enrolling",
  lead = "Straight answers. If yours is not here, the consultation is free.",
}: {
  items?: readonly FaqItem[];
  label?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section id="faq" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading label={label} title={title} lead={lead} />

        <ul className="mt-xxl border-t border-ink">
          {items.map((item, index) => (
            <Question key={item.question} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
