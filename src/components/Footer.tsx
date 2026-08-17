import Image from "next/image";
import Link from "next/link";

import { footerColumns, footerContacts, site } from "@/content/site";

export function Footer() {
  return (
    <footer
      id="footer"
      className="mt-section bg-inverse-canvas px-md py-footer tablet:px-lg"
    >
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-xl tablet:grid-cols-2 desktop:grid-cols-5">
          <div className="desktop:col-span-2">
            <Image
              src={site.logo.reversed}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              className="h-xl w-auto"
            />
            <p className="mt-lg max-w-[22rem] text-body-sm text-inverse-ink-muted">
              {site.description}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="text-eyebrow uppercase text-inverse-ink">
                {column.heading}
              </p>
              <ul className="mt-md flex flex-col gap-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-inverse-ink-muted transition-colors hover:text-inverse-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-xxxl border-t border-inverse-hairline pt-lg">
          <div className="flex flex-col gap-md tablet:flex-row tablet:items-center tablet:justify-between">
            <ul className="flex flex-wrap gap-x-lg gap-y-xs">
              {footerContacts.map((contact) => (
                <li
                  key={contact.label}
                  className="text-body-sm text-inverse-ink-muted"
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="transition-colors hover:text-inverse-ink"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    contact.label
                  )}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-lg text-caption text-inverse-ink-muted">
            © {site.name}. {site.tagline}.
          </p>
        </div>
      </div>
    </footer>
  );
}
