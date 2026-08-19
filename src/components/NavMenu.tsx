"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ChevronDownIcon } from "@/components/icons";
import type { NavLink } from "@/content/site";

/**
 * A nav entry that opens a menu instead of navigating.
 *
 * Click, not hover. A hover menu is unreachable on a touch screen and fires
 * on every pass of the cursor; the parent is a real button so it behaves the
 * same for a mouse, a finger and a keyboard.
 *
 * The parent does not double as a link. An element that both navigates and
 * opens a menu has to guess which one a tap meant, and guesses wrong on
 * touch — so the overview lives inside the menu as its own entry.
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

  // Any navigation closes it — including a click on an item already current,
  // which would otherwise leave the menu hanging open over the new page.
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

  /** Down-arrow from the button lands on the first item, as a menu should. */
  const onButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setIsOpen(true);
    window.setTimeout(() => {
      container.current?.querySelector<HTMLAnchorElement>("[role='menuitem']")?.focus();
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
        className={`relative flex items-center gap-1.5 py-1 font-mono text-label uppercase transition-colors ${
          isSectionActive || isOpen
            ? "text-ink"
            : "text-ink-2 hover:text-flame-ink"
        }`}
      >
        {link.label}
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {isSectionActive && (
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 left-0 h-px w-full bg-flame"
          />
        )}
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={link.label}
          className="absolute left-0 top-[calc(100%+13px)] z-50 w-[24rem] animate-rise border border-ink bg-paper"
        >
          <Link
            role="menuitem"
            href={link.href}
            className="block border-b border-rule px-5 py-3 font-mono text-label uppercase text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
          >
            Overview — all four processes
          </Link>

          {link.children?.map((child, index) => {
            const isCurrent = pathname.replace(/\/+$/, "") === child.href;
            return (
              <Link
                key={child.href}
                role="menuitem"
                href={child.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`group/item flex gap-4 border-b border-rule px-5 py-4 transition-colors last:border-b-0 ${
                  isCurrent ? "bg-paper-2" : "hover:bg-paper-2"
                }`}
              >
                <span className="mt-1 font-mono text-index tnum text-flame-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-subtitle text-ink">
                    {child.label}
                  </span>
                  {child.summary && (
                    <span className="mt-1 block text-small text-ink-2">
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
