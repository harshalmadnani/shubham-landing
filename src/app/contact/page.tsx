import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { bookingPath } from "@/content/booking";
import { company, contactPage } from "@/content/legal";
import { chatMessage, site, whatsAppUrl } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description:
    "Talk to AVIROwork Consultancy about IT training and placement support: WhatsApp, phone, or email. We answer within one working day.",
};

/**
 * Three ways to reach a person, and the company's details.
 *
 * Deliberately not a contact form. Every enquiry route on this page is a
 * direct channel — WhatsApp, phone, email — because a form is a message that
 * disappears into somewhere the sender cannot see, and this business answers
 * enquiries on WhatsApp anyway.
 *
 * The consultation is the one thing that does need a form, since picking a
 * time is not something a message can do on its own, so the hero sends that
 * job to `/book` and leaves this page to the people who just want a number.
 */
export default function ContactPage() {
  const channels = [
    {
      label: "WhatsApp",
      value: company.phone,
      href: whatsAppUrl(chatMessage),
      note: "Usually the fastest. Same number as the phone line.",
      external: true,
    },
    {
      label: "Phone",
      value: company.phone,
      href: company.phoneHref,
      note: "Monday to Friday, UK hours.",
      external: false,
    },
    {
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
      note: "Best for anything you want a written answer to.",
      external: false,
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <PageHero
          label="Contact"
          title="Talk to a person"
          lead={contactPage.lead}
          actions={
            <>
              <ButtonLink href={bookingPath}>Book a free consultation</ButtonLink>
              <ButtonLink href={whatsAppUrl(chatMessage)} variant="outline">
                Message us on WhatsApp
              </ButtonLink>
            </>
          }
        />

        <Section tone="surface">
          <ul className="grid gap-4 tablet:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.label} className="rounded-lg bg-canvas p-7">
                <p className="text-micro text-accent-ink">{channel.label}</p>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-2 block text-heading text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
                >
                  {channel.value}
                </a>
                <p className="mt-3 text-small text-ink-2">{channel.note}</p>
              </li>
            ))}
          </ul>

          <Reveal>
            <p className="mt-8 max-w-2xl text-body text-ink-2">
              {contactPage.note}
            </p>
          </Reveal>
        </Section>

        <Section label="Company details">
          <dl className="grid gap-8 tablet:grid-cols-2 desktop:gap-12">
            <div>
              <dt className="text-micro text-ink-3">Registered name</dt>
              <dd className="mt-2 text-body text-ink">{company.legalName}</dd>
            </div>

            <div>
              <dt className="text-micro text-ink-3">Address</dt>
              <dd className="mt-2 text-body text-ink">{company.address}</dd>
            </div>

            <div>
              <dt className="text-micro text-ink-3">Registration</dt>
              <dd className="mt-2 text-body text-ink">
                <RichTextContent value={[company.registration]} />
              </dd>
            </div>

            <div>
              <dt className="text-micro text-ink-3">Markets served</dt>
              <dd className="mt-2 text-body text-ink">{company.markets}</dd>
            </div>
          </dl>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
