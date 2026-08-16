"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <div className="mx-auto flex h-header max-w-content items-center justify-between px-md tablet:px-lg">
        <Link href="/" aria-label={site.name}>
          <Image
            src={site.logo.primary}
            alt={site.name}
            width={site.logo.width}
            height={site.logo.height}
            className="h-xl w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-xl desktop:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm text-ink-muted transition-colors hover:text-ink"
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
          className="desktop:hidden"
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
          <nav aria-label="Mobile" className="flex flex-col gap-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-body text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={whatsAppUrl(consultationMessage)}
            className="mt-lg w-full justify-center"
          >
            <CalendarIcon className="h-md w-md" />
            Book free consultation
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
