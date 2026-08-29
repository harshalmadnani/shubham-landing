"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { ArrowUpRightIcon, CalendarIcon } from "@/components/icons";
import { bookingProvider, consultation } from "@/content/booking";

/**
 * The scheduling calendar, loaded on demand.
 *
 * WHY IT DOES NOT LOAD ON ITS OWN. A scheduler is a third party, and it sets
 * cookies on the visitor's device the moment its frame loads. UK PECR wants
 * consent before that happens for anything that is not strictly necessary, and
 * the alternative to this button is a cookie banner on all fifty-nine pages of
 * a site that currently needs none. One click on the page where somebody has
 * already decided to book is a far smaller tax than a banner everywhere else,
 * and it keeps the privacy policy short and true.
 *
 * It also happens to be faster. Nothing third-party is fetched until it is
 * asked for, so `/book` loads at the same weight as every other page here.
 *
 * Renders nothing when no scheduler is configured — `content/booking.ts` says
 * what that means and how to switch one on. The page falls back to the direct
 * channels in that case rather than showing an empty frame.
 */
export function BookingEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!bookingProvider) return null;

  return (
    <div className="overflow-hidden rounded-lg bg-canvas ring-1 ring-line">
      {isLoaded ? (
        <>
          <iframe
            src={bookingProvider.embedUrl}
            title="Booking calendar — choose a day and time"
            loading="lazy"
            className="h-[46rem] w-full border-0 tablet:h-[48rem]"
          />

          <p className="border-t border-line px-6 py-4 text-micro text-ink-3">
            Calendar not loading?{" "}
            <a
              href={bookingProvider.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
            >
              Open it in a new tab
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </p>
        </>
      ) : (
        <div className="flex flex-col items-start gap-6 px-7 py-12 tablet:px-10 tablet:py-16">
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-soft text-accent-ink">
            <CalendarIcon className="h-6 w-6" />
          </span>

          <div>
            <p className="text-title text-balance text-ink">
              Pick a day and a time
            </p>
            <p className="mt-4 max-w-md text-body text-ink-2">
              {consultation.price} · {consultation.duration} ·{" "}
              {consultation.format}. The calendar shows how many of the{" "}
              {consultation.seats} places are left in each session, in your own
              timezone, and you get a confirmation and an invite straight away.
            </p>
          </div>

          <Button onClick={() => setIsLoaded(true)}>See available times</Button>

          <p className="max-w-md text-micro text-ink-3">
            The calendar is provided by {bookingProvider.name} and loads only
            when you tap the button, which is why this page shows you no cookie
            banner.
          </p>
        </div>
      )}
    </div>
  );
}
