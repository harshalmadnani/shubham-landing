import { WhatsAppIcon } from "@/components/icons";
import { chatMessage, whatsAppUrl } from "@/content/site";

/**
 * The floating WhatsApp button, pinned bottom-right on every page.
 *
 * No state and no scroll listener, so it stays a server component and is
 * present in the HTML from first paint — an enquiry route that depends on
 * hydration is an enquiry route that can be missed.
 *
 * It carries WhatsApp's own green rather than the brand ramp: the point of the
 * button is that a visitor knows where it goes before clicking. `ScrollToTop`
 * sits directly above it and offsets itself by this button's height.
 */
export function ChatWithUs() {
  return (
    <a
      href={whatsAppUrl(chatMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group/chat fixed bottom-lg right-lg z-40 flex h-xxl items-center gap-sm rounded-full bg-whatsapp px-md text-body-emphasis text-white shadow-lift transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-whatsapp-hover tablet:px-lg"
    >
      <WhatsAppIcon className="h-lg w-lg shrink-0" />
      <span className="hidden tablet:inline">Chat with us</span>
      <span className="sr-only tablet:hidden">Chat with us on WhatsApp</span>
    </a>
  );
}
