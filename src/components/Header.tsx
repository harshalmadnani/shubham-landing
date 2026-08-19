"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { NavMenu } from "@/components/NavMenu";
import {
  consultationMessage,
  footerContacts,
  navLinks,
  site,
  whatsAppUrl,
} from "@/content/site";

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
 * A masthead, not a floating bar.
 *
 * A folio line runs above it carrying what the place is and how to reach it —
 * the strip a printed prospectus puts at the head of every page. It scrolls
 * away; only the masthead itself sticks, so the sticky element stays one row
 * tall and the page keeps its full height for reading.
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

  const email = footerContacts[0];

  return (
    <>
      <div className="hidden border-b border-rule bg-paper desktop:block">
        <div className="mx-auto flex h-9 max-w-page items-center justify-between px-10 font-mono text-meta uppercase text-ink-3">
          <span>{site.tagline}</span>
          <span className="flex items-center gap-6">
            <span>London</span>
            {email?.href && (
              <a href={email.href} className="link-sweep hover:text-ink">
                {email.label}
              </a>
            )}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-rule bg-paper">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-8 px-6 tablet:h-20 tablet:px-10">
          <Link href="/" aria-label={site.name} className="shrink-0">
            <Image
              src={site.logo.primary}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              className="h-7 w-auto tablet:h-8"
              priority
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 desktop:flex"
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
                  className={`relative py-1 font-mono text-label uppercase transition-colors ${
                    isCurrent ? "text-ink" : "text-ink-2 hover:text-flame-ink"
                  }`}
                >
                  {link.label}
                  {/* The current page is marked with a rule, the same device
                      the rest of the page uses to mean "this one". */}
                  {isCurrent && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-flame"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden desktop:block">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              Book consultation
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 flex h-10 w-10 items-center justify-center text-ink desktop:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* The mobile menu is a page of its own: numbered entries set at reading
          size, in the serif, rather than a cramped drawer of small links. */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 overflow-y-auto bg-paper tablet:top-20 desktop:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-page flex-col px-6 pb-10 tablet:px-10"
          >
            {navLinks.map((link, index) => {
              const isCurrent = isCurrentPage(link.href, pathname);
              return (
                <div key={link.href} className="border-b border-rule py-5">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isCurrent ? "page" : undefined}
                    className="flex items-baseline gap-4"
                  >
                    <span className="font-mono text-index tnum text-flame-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-display-sm ${
                        isCurrent ? "text-flame-ink" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>

                  {/* Four children, so they sit open rather than behind a
                      second tap. A nested accordion inside a menu that is
                      already an accordion is one drawer too many. */}
                  {link.children && (
                    <div className="ml-10 mt-3 flex flex-col gap-2">
                      {link.children.map((child) => {
                        const isChildCurrent = isCurrentPage(child.href, pathname);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={isChildCurrent ? "page" : undefined}
                            className={`font-mono text-label uppercase transition-colors ${
                              isChildCurrent
                                ? "text-flame-ink"
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
              className="mt-8 w-full"
            >
              Book free consultation
            </ButtonLink>
          </nav>
        </div>
      )}
    </>
  );
}
