"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { NavMenu } from "@/components/NavMenu";
import { consultationMessage, navLinks, site, whatsAppUrl } from "@/content/site";

/**
 * Which nav entry, if any, describes the page you are on.
 *
 * Anchor links point at sections of the home page rather than pages, so they
 * never light up. "/" matches only itself — otherwise it would be active
 * everywhere — while a section root like "/programs" stays lit on the
 * curriculum pages beneath it.
 */
function isCurrentPage(href: string, pathname: string): boolean {
  if (href.includes("#")) return false;
  const path = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

/**
 * A short bar: the monogram, the pages, one action.
 *
 * The full wordmark lockup is 2060px wide and was being scaled down to a
 * strip of unreadable type; the monogram says the same thing at 40px and
 * leaves the row to the navigation.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);

  // A full-screen sheet over a scrolling page scrolls the page behind it.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-xl">
        <div className="mx-auto flex h-header max-w-page items-center justify-between gap-8 px-6 tablet:px-8">
          <Link href="/" aria-label={site.name} className="shrink-0">
            <Image
              src="/logo/mark.png"
              alt={site.name}
              width={512}
              height={512}
              className="h-10 w-10 rounded-md"
              priority
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 desktop:flex"
          >
            {navLinks.map((link) => {
              const isCurrent = isCurrentPage(link.href, pathname);

              if (link.children) {
                return (
                  <NavMenu
                    key={link.href}
                    link={link}
                    isSectionActive={isCurrent}
                    pathname={pathname}
                  />
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`text-label transition-colors ${
                    isCurrent ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden desktop:block">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              Book a call
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface desktop:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 top-header z-50 overflow-y-auto bg-canvas desktop:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-page flex-col gap-1 px-6 pb-12 pt-4"
          >
            {navLinks.map((link) => {
              const isCurrent = isCurrentPage(link.href, pathname);
              return (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`block rounded-md px-3 py-3.5 text-title ${
                      isCurrent ? "text-accent-ink" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Four children, so they sit open rather than behind a
                      second tap. A nested accordion inside a menu that is
                      already an accordion is one drawer too many. */}
                  {link.children && (
                    <div className="flex flex-col gap-1 pb-2 pl-3">
                      {link.children.map((child) => {
                        const isChildCurrent = isCurrentPage(child.href, pathname);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={isChildCurrent ? "page" : undefined}
                            className={`rounded-md px-3 py-2 text-body transition-colors ${
                              isChildCurrent
                                ? "text-accent-ink"
                                : "text-ink-2 hover:text-ink"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <ButtonLink
              href={whatsAppUrl(consultationMessage)}
              className="mt-6 w-full"
            >
              Book a free consultation
            </ButtonLink>
          </nav>
        </div>
      )}
    </>
  );
}
