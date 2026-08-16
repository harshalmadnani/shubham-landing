"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { CalendarIcon, CloseIcon, MenuIcon } from "@/components/icons";
import {
  consultationMessage,
  navLinks,
  site,
  whatsAppUrl,
} from "@/content/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // The header is flush with the page at rest and only earns its border and
  // shadow once there's content behind it.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled || isMenuOpen
          ? "border-b border-hairline bg-canvas/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-canvas"
      }`}
    >
      <div className="mx-auto flex h-header max-w-content items-center justify-between px-md tablet:px-lg">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Image
            src={site.logo.primary}
            alt={site.name}
            width={site.logo.width}
            height={site.logo.height}
            className="h-xl w-auto"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-xxs desktop:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-md py-xs text-body-sm text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden desktop:block">
          <ButtonLink href={whatsAppUrl(consultationMessage)}>
            <CalendarIcon className="h-md w-md" />
            Book free consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-xl w-xl items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-1 desktop:hidden"
        >
          {isMenuOpen ? (
            <CloseIcon className="h-lg w-lg" />
          ) : (
            <MenuIcon className="h-lg w-lg" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-hairline bg-canvas px-md py-lg desktop:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-xxs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-sm py-sm text-body text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={whatsAppUrl(consultationMessage)}
            className="mt-lg w-full"
          >
            <CalendarIcon className="h-md w-md" />
            Book free consultation
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
