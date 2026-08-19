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
        className={`flex items-center gap-1.5 text-label transition-colors ${
          isSectionActive || isOpen ? "text-ink" : "text-ink-2 hover:text-ink"
        }`}
      >
        {link.label}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={link.label}
          className="absolute left-1/2 top-[calc(100%+18px)] z-50 w-[22rem] -translate-x-1/2 animate-rise rounded-lg border border-line bg-card p-2"
        >
          {link.children?.map((child) => {
            const isCurrent = pathname.replace(/\/+$/, "") === child.href;
            return (
              <Link
                key={child.href}
                role="menuitem"
                href={child.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`block rounded-md px-4 py-3 transition-colors ${
                  isCurrent ? "bg-surface" : "hover:bg-surface"
                }`}
              >
                <span className="block text-label text-ink">{child.label}</span>
                {child.summary && (
                  <span className="mt-1 block text-micro text-ink-3">
                    {child.summary}
                  </span>
                )}
              </Link>
            );
          })}

          <Link
            role="menuitem"
            href={link.href}
            className="mt-1 block rounded-md px-4 py-3 text-micro text-ink-2 transition-colors hover:bg-surface hover:text-ink"
          >
            Overview — all four together
          </Link>
        </div>
      )}
    </div>
  );
}
