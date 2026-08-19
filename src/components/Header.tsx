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
  navLinks,
  site,
  whatsAppUrl,
} from "@/content/site";

/**
 * Which nav entry, if any, describes the page you are on.
 *
 * Anchor links point at sections of the home page rather than pages, so they
 * never light up. "/" matches only itself — otherwise it would be active
 * everywhere — while a section root like "/programs" stays lit beneath it.
 */
function isCurrentPage(href: string, pathname: string): boolean {
  if (href.includes("#")) return false;
  const path = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

/**
 * The header is a signage rail: a hairline under it at all times, the current
 * destination underscored in vermilion, and one action at the end.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-header max-w-page items-center justify-between gap-md px-gutter tablet:px-rail">
        <Link
          href="/"
          aria-label={site.name}
          className="shrink-0"
        >
          <Image
            src={site.logo.primary}
            alt={site.name}
            width={site.logo.width}
            height={site.logo.height}
            className="h-[26px] w-auto tablet:h-[30px]"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-md desktop:flex"
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
                className={`border-b-2 px-xs py-sm font-mono text-nav uppercase transition-colors ${
                  isCurrent
                    ? "border-signal text-ink"
                    : "border-transparent text-ink-2 hover:text-ink"
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
          className="-mr-xs flex h-11 w-11 items-center justify-center border border-rule-strong text-ink transition-colors hover:border-ink desktop:hidden"
        >
          {isMenuOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-rule bg-paper px-gutter py-lg desktop:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => {
              const isCurrent = isCurrentPage(link.href, pathname);
              return (
                <div key={link.href} className="border-b border-rule">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`block py-md font-mono text-nav uppercase transition-colors ${
                      isCurrent ? "text-signal-text" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Four children, so they sit open rather than behind a
                      second tap — an accordion inside an accordion is one
                      drawer too many. */}
                  {link.children && (
                    <ul className="mb-md ml-sm border-l border-rule">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-sm pl-md text-body text-ink-2 transition-colors hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>

          <ButtonLink
            href={whatsAppUrl(consultationMessage)}
            className="mt-lg w-full"
          >
            Book a call
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
