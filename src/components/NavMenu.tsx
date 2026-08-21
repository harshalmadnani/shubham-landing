"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import type { NavLink } from "@/content/site";

/**
 * The one nav entry that opens a menu instead of navigating.
 *
 * Click, not hover — a hover menu cannot be reached with a finger and fires
 * on every pass of the cursor. The parent is a button rather than a link,
 * because an element that both navigates and opens a menu has to guess what a
 * tap meant; the overview lives inside the menu as its own entry.
 */
export function NavMenu({
  link,
  isSectionActive,
  pathname,
}: {
  link: NavLink;
  isSectionActive: boolean;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      container.current?.querySelector("button")?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const onButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setIsOpen(true);
    window.setTimeout(() => {
      container.current
        ?.querySelector<HTMLAnchorElement>("[role='menuitem']")
        ?.focus();
    }, 0);
  };

  return (
    <div ref={container} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={onButtonKeyDown}
        className={`flex items-center gap-xs border-b-2 px-xs py-sm font-mono text-nav uppercase transition-colors ${
          isSectionActive || isOpen
            ? "border-signal text-ink"
            : "border-transparent text-ink-2 hover:text-ink"
        }`}
      >
        {link.label}
        <span
          aria-hidden="true"
          className={`text-[0.6em] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={link.label}
          className="absolute left-0 top-[calc(100%+10px)] z-50 w-[23rem] animate-rise border border-ink bg-raised shadow-raise"
        >
          <Link
            role="menuitem"
            href={link.href}
            className="block border-b border-rule px-lg py-sm font-mono text-data text-ink-2 transition-colors hover:bg-paper-sunk hover:text-ink"
          >
            Overview — all four
          </Link>

          {link.children?.map((child, index) => {
            const isCurrent = pathname.replace(/\/+$/, "") === child.href;
            return (
              <Link
                key={child.href}
                role="menuitem"
                href={child.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`flex gap-md px-lg py-md transition-colors ${
                  isCurrent ? "bg-paper-sunk" : "hover:bg-paper-sunk"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="mt-[3px] font-mono text-label text-signal-text"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-card text-ink">
                    {child.label}
                  </span>
                  {child.summary && (
                    <span className="mt-xxs block text-small text-ink-2">
                      {child.summary}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
