import Image from "next/image";
import Link from "next/link";

import { footerColumns, footerContacts, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-night text-chalk">
      <div className="mx-auto w-full max-w-page px-6 py-20 tablet:px-8 tablet:py-24">
        <div className="grid gap-12 desktop:grid-cols-12">
          <div className="desktop:col-span-4">
            <Image
              src="/logo/mark.png"
              alt={site.name}
              width={512}
              height={512}
              className="h-11 w-11 rounded-md ring-1 ring-night-line"
            />
            <p className="mt-6 max-w-xs text-body text-chalk-2">
              {site.description}
            </p>

            <ul className="mt-8 flex flex-col gap-2.5">
              {footerContacts.map((contact) => (
                <li key={contact.label} className="text-small text-chalk-2">
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="link-sweep transition-colors hover:text-chalk"
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

          <div className="grid gap-10 tablet:grid-cols-3 desktop:col-span-7 desktop:col-start-6">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="text-micro text-chalk-2">{column.heading}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-small text-chalk transition-colors hover:text-accent-bright"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-night-line pt-8 text-micro text-chalk-2 tablet:flex-row tablet:items-center tablet:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
