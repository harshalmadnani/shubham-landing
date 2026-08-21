import Link from "next/link";

import { Wordmark } from "@/components/Wordmark";
import { footerColumns, footerContacts, site } from "@/content/site";

/**
 * The footer is the last signage panel on the page: night ground, mono column
 * headings, and links given real vertical room — 18px-tall link rows were
 * under the 24px minimum a touch target needs.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-band panel-night">
      <div className="mx-auto max-w-page px-gutter py-xxxl tablet:px-rail">
        <div className="grid gap-xxl desktop:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div>
            <Wordmark tone="dark" className="text-night-ink" />
            <p className="mt-lg max-w-[34ch] text-body text-night-ink-2">
              {site.description}
            </p>

            <ul className="mt-xl flex flex-col gap-xs">
              {footerContacts.map((contact) => (
                <li key={contact.label}>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="inline-block py-xxs font-mono text-data text-night-ink underline decoration-night-rule underline-offset-4 transition-colors hover:decoration-signal"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span className="inline-block py-xxs font-mono text-data text-night-ink-2">
                      {contact.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-xl tablet:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <div className="flex items-center gap-sm">
                  <span
                    aria-hidden="true"
                    className="h-[6px] w-[6px] shrink-0 rounded-full bg-signal"
                  />
                  <p className="font-mono text-label uppercase text-night-ink-2">
                    {column.heading}
                  </p>
                </div>
                <ul className="mt-md flex flex-col">
                  {column.links.map((linkItem) => (
                    <li key={linkItem.href}>
                      <Link
                        href={linkItem.href}
                        className="block py-[7px] text-small text-night-ink transition-colors hover:text-signal-on-night"
                      >
                        {linkItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-xxxl flex flex-col gap-sm border-t border-night-rule pt-lg font-mono text-data text-night-ink-2 tablet:flex-row tablet:items-center tablet:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="uppercase tracking-[0.14em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
