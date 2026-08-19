import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { consultationMessage, site, whatsAppUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Page not found — ${site.name}`,
  description:
    "That address does not exist on this site. The catalogue, the four routes and the process pages are all one click away.",
};

const routes = [
  { href: "/programs", label: "The catalogue", note: "37 programmes, every one with a curriculum" },
  { href: "/training-structure", label: "The four routes", note: "What each one contains, and what it costs" },
  { href: "/how-it-works", label: "How it works", note: "Training, bootcamp, mentoring, marketing" },
  { href: "/about", label: "About us", note: "What we do and what we hold to" },
];

/**
 * A real 404 rather than the framework's default.
 *
 * Somebody who mistypes a URL used to get an unbranded dead end with no
 * navigation at all. This keeps the chrome and, more usefully, names the four
 * places they were probably trying to reach.
 */
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        <section>
          <div className="mx-auto max-w-page px-gutter pt-xxxl tablet:px-rail">
            <p className="flex items-center gap-sm font-mono text-label uppercase text-ink-3">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              Error 404
            </p>

            <h1 className="mt-lg max-w-[20ch] text-mega text-ink">
              No route to <em className="text-pine">that address.</em>
            </h1>

            <p className="mt-xl max-w-[46ch] text-lead text-ink-2">
              The page you asked for is not here — most likely a typo, or a link
              that pointed at something we have since renamed. Everything on the
              site is one stop away:
            </p>

            <ul className="mt-xxl border-t border-ink">
              {routes.map((route, index) => (
                <li key={route.href} className="border-b border-rule">
                  <Link
                    href={route.href}
                    className="group grid items-baseline gap-xs py-lg tablet:grid-cols-[4rem_minmax(0,16rem)_minmax(0,1fr)_auto] tablet:gap-lg"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-label text-signal-text"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-subtitle text-ink">
                      {route.label}
                    </span>
                    <span className="text-body text-ink-2">{route.note}</span>
                    <span
                      aria-hidden="true"
                      className="font-mono text-nav text-ink-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-signal-text"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-xxl flex flex-wrap gap-sm">
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/" variant="outline">
                Back to the home page
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
