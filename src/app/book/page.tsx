import type { Metadata } from "next";

import { BookingEmbed } from "@/components/BookingEmbed";
import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { bookingEnabled, consultation } from "@/content/booking";
import { company } from "@/content/legal";
import { consultationMessage, site, whatsAppUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Book a free consultation — ${site.name}`,
  description:
    "Book a free 30-minute consultation with AVIROwork Consultancy: which IT role is realistic from where you are standing, which programme gets you there, and what it costs.",
};

/**
 * The booking page.
 *
 * Every consultation button on the site now lands here instead of opening
 * WhatsApp. The reason is the half of the conversation that used to be missing:
 * a message asking for a call is not a booking, and the two people then spend
 * four messages finding an hour that suits them both. This page does that part
 * itself.
 *
 * The scheduler is the main column and everything else is support: what the
 * call covers, when a person is actually there, and the three ways to reach one
 * without booking at all. Nobody who arrives here wanting to talk today should
 * have to go back to the contact page to find a number.
 *
 * When no scheduler is configured the calendar column is replaced by the direct
 * channels rather than an empty box — see `content/booking.ts`.
 */
export default function BookPage() {
  const channels = [
    {
      label: "WhatsApp",
      value: company.phone,
      href: whatsAppUrl(consultationMessage),
      external: true,
    },
    {
      label: "Phone",
      value: company.phone,
      href: company.phoneHref,
      external: false,
    },
    {
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
      external: false,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <PageHero
          label="Free consultation"
          title="Book a free consultation"
          lead={consultation.lead}
          meta={
            <>
              {consultation.price} · {consultation.duration} ·{" "}
              {consultation.format}
            </>
          }
        />

        {/* Not a `Section`: its vertical rhythm is built for reading, and on
            the one page where somebody has already decided to act, pushing the
            calendar most of a screen further down is a cost with no benefit. */}
        <section className="bg-surface">
          <div className="mx-auto w-full max-w-page px-6 py-14 tablet:px-8 tablet:py-16">
            <div className="grid gap-4 desktop:grid-cols-3">
              {/* The calendar takes two thirds and comes first in the source, so
                it is also what a screen reader and a phone reach first. */}
              <div className="desktop:col-span-2">
                {bookingEnabled ? (
                  <BookingEmbed />
                ) : (
                  <div className="rounded-lg bg-canvas px-7 py-12 ring-1 ring-line tablet:px-10 tablet:py-16">
                    <p className="text-title text-balance text-ink">
                      Message us and we will find a time
                    </p>
                    <p className="mt-5 max-w-md text-body text-ink-2">
                      The self-service calendar is not switched on yet, so a
                      consultation is booked the direct way — tell us roughly
                      when suits you and we will confirm a slot the same working
                      day.
                    </p>

                    <ButtonLink
                      href={whatsAppUrl(consultationMessage)}
                      className="mt-9 bg-whatsapp text-ink hover:bg-whatsapp-deep"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Book on WhatsApp
                    </ButtonLink>

                    <ul className="mt-10 flex flex-col gap-4 border-t border-line pt-8">
                      {channels.slice(1).map((channel) => (
                        <li key={channel.label} className="flex flex-col gap-1">
                          <span className="text-micro text-ink-3">
                            {channel.label}
                          </span>
                          <a
                            href={channel.href}
                            className="text-body text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
                          >
                            {channel.value}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <Reveal>
                  <div className="rounded-lg bg-canvas p-7">
                    <p className="text-micro text-accent-ink">
                      When we are here
                    </p>

                    <dl className="mt-5 flex flex-col gap-3">
                      {consultation.hours.map((slot) => (
                        <div
                          key={slot.days}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <dt className="text-small text-ink-2">{slot.days}</dt>
                          <dd className="text-small font-medium text-ink">
                            {slot.time}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-5 text-micro text-ink-3">
                      {consultation.hoursNote}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={60}>
                  <div className="rounded-lg bg-canvas p-7">
                    <p className="text-micro text-accent-ink">
                      Rather not book ahead?
                    </p>
                    <p className="mt-4 text-small text-ink-2">
                      A person answers all three of these,{" "}
                      {company.responseTime}.
                    </p>

                    <ul className="mt-6 flex flex-col gap-4">
                      {channels.map((channel) => (
                        <li key={channel.label} className="flex flex-col gap-1">
                          <span className="text-micro text-ink-3">
                            {channel.label}
                          </span>
                          <a
                            href={channel.href}
                            {...(channel.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="text-small text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
                          >
                            {channel.value}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Section label="What the call covers">
          <h2 className="max-w-3xl text-display text-balance text-ink">
            Thirty minutes, and four things answered
          </h2>

          <ul className="mt-16 grid gap-4 tablet:grid-cols-2">
            {consultation.expect.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 60}
                className="h-full"
              >
                <li className="flex h-full flex-col rounded-lg bg-surface p-7">
                  <span className="text-micro tabular-nums text-ink-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 block text-heading text-ink">
                    {item.title}
                  </span>
                  <span className="mt-3 block text-body text-ink-2">
                    {item.body}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <p className="mt-10 max-w-2xl text-small text-ink-3">
              There is no obligation to enrol, and no sales script. If a
              programme here is not the right route for you, saying so on the
              call costs us half an hour and saves you a great deal more.
            </p>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
