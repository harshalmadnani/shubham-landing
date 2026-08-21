import { WhatsAppIcon } from "@/components/icons";
import { chatMessage, whatsAppUrl } from "@/content/site";

/**
 * The floating WhatsApp route, pinned bottom-right on every page.
 *
 * In WhatsApp's own green rather than in ink. It was ink, which made it the
 * quietest thing on the page and left it looking like a generic chat widget;
 * the point of this button is that somebody recognises it before they read it.
 * The label is ink, not white — white on this green is 1.98:1, where ink is
 * 9.7:1.
 *
 * The label shows at every width, including phones. It costs about ninety
 * pixels and most of the people arriving here are on a phone, which is exactly
 * where an unlabelled floating circle is easiest to ignore.
 *
 * No state and no scroll listener, so it stays a server component and is
 * present in the HTML from first paint — an enquiry route that depends on
 * hydration is an enquiry route that can be missed.
 */
export function ChatWithUs() {
  return (
    <a
      href={whatsAppUrl(chatMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2.5 rounded-full bg-whatsapp px-5 text-label text-ink shadow-lg ring-1 ring-ink/10 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-whatsapp-deep tablet:bottom-6 tablet:right-6"
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      Chat with us
    </a>
  );
}
