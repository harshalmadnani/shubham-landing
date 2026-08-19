import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons";
import { footerColumns, footerContacts, site } from "@/content/site";

/**
 * The colophon.
 *
 * A printed prospectus ends with the imprint — who made it, where they are,
 * how to reach them — and so does this. The address block sits first because
 * it is the thing a visitor scrolls to the bottom looking for, and the
 * navigation follows as an index rather than as four columns of link soup.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-rule bg-night text-bone">
      <div className="mx-auto w-full max-w-page px-6 py-20 tablet:px-10 tablet:py-24">
        <div className="grid gap-12 desktop:grid-cols-12">
          <div className="desktop:col-span-5">
            <Image
              src={site.logo.reversed}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              className="h-8 w-auto"
            />
            <p className="mt-8 max-w-sm text-lead text-bone-2">
              {site.description}
            </p>

            <ul className="mt-10 flex flex-col gap-2">
              {footerContacts.map((contact) => (
                <li key={contact.label} className="font-mono text-meta uppercase text-bone-2">
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="link-sweep transition-colors hover:text-bone"
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

          <div className="grid gap-10 tablet:grid-cols-3 desktop:col-span-6 desktop:col-start-7">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="border-b border-night-rule pb-3 font-mono text-label uppercase text-bone-2">
                  {column.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group/link inline-flex items-baseline gap-1.5 text-small text-bone transition-colors hover:text-flame-bright"
                      >
                        <span className="link-sweep">{link.label}</span>
                        <ArrowUpRightIcon className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover/link:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The name set at scale, cropped by the edge of the page — the last
          thing you see, and the only place the wordmark gets to be big. */}
      <div className="overflow-hidden border-t border-night-rule">
        <p
          aria-hidden="true"
          className="mx-auto max-w-page whitespace-nowrap px-6 pt-8 font-display text-[clamp(3rem,13vw,11rem)] leading-[0.8] tracking-[-0.03em] text-night-2 tablet:px-10"
        >
          {site.name}
        </p>
      </div>

      <div className="border-t border-night-rule">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-6 py-6 font-mono text-meta uppercase text-bone-2 tablet:flex-row tablet:items-center tablet:justify-between tablet:px-10">
          <span>
            © {year} {site.name}
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
