import Image from "next/image";
import Link from "next/link";

import { PendingChip } from "@/components/PendingData";
import { footerColumns, footerContactTokens, site } from "@/content/site";

export function Footer() {
  return (
    <footer id="footer" className="bg-inverse-canvas px-md py-footer tablet:px-lg">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-xl tablet:grid-cols-2 desktop:grid-cols-5">
          <div>
            <Image
              src={site.logo.reversed}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              className="h-xl w-auto"
            />
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="text-body-emphasis text-inverse-ink">
                {column.heading}
              </p>
              <ul className="mt-md flex flex-col gap-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-inverse-ink-muted hover:text-inverse-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-body-emphasis text-inverse-ink">Contact</p>
            <ul className="mt-md flex flex-col gap-sm">
              {footerContactTokens.map((token) => (
                <li key={token}>
                  <PendingChip token={token} tone="dark" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-xxl border-t border-inverse-surface-1 pt-lg">
          <PendingChip token="social links" tone="dark" />
        </div>
      </div>
    </footer>
  );
}
