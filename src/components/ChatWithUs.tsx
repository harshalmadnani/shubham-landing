import { WhatsAppIcon } from "@/components/icons";
import { chatMessage, whatsAppUrl } from "@/content/site";

/**
 * The floating WhatsApp route, pinned bottom-right on every page.
 *
 * No state and no scroll listener, so it stays a server component and is
 * present in the HTML from first paint — an enquiry route that depends on
 * hydration is an enquiry route that can be missed.
 *
 * It is a square in the page's own ink rather than a green pill: the label
 * says where it goes, and a floating brand blob would be the one rounded,
 * shadowed object on an otherwise ruled page.
 */
export function ChatWithUs() {
  return (
    <a
      href={whatsAppUrl(chatMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-12 items-center gap-2.5 border border-ink bg-ink px-4 font-mono text-label uppercase text-paper transition-colors duration-200 hover:border-flame hover:bg-flame"
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      <span className="hidden tablet:inline">Chat with us</span>
      <span className="sr-only tablet:hidden">Chat with us on WhatsApp</span>
    </a>
  );
}
