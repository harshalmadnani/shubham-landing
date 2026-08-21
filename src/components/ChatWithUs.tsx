import { WhatsAppIcon } from "@/components/icons";
import { chatMessage, whatsAppUrl } from "@/content/site";

/**
 * The floating WhatsApp route, pinned bottom-right on every page.
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
      className="fixed bottom-6 right-6 z-40 flex h-12 items-center gap-2.5 rounded-full bg-ink px-5 text-label text-canvas shadow-lg transition-colors duration-200 hover:bg-ink/85"
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      <span className="hidden tablet:inline">Chat with us</span>
      <span className="sr-only tablet:hidden">Chat with us on WhatsApp</span>
    </a>
  );
}
