import { cloudflare, plausible } from "@/content/analytics";

/**
 * The measurement script, if one is configured.
 *
 * Renders nothing at all when no provider is set, which is the default — so an
 * unconfigured build ships exactly the site it shipped before, with no extra
 * request and no third-party domain contacted.
 *
 * Both scripts are `defer`red and neither is needed for the page to work, so a
 * blocked or failed request costs a visitor nothing. Read `content/analytics.ts`
 * before changing anything here: the privacy policy is generated from the same
 * configuration and has to keep matching what this component actually loads.
 */
export function Analytics() {
  if (plausible) {
    return (
      <script
        defer
        data-domain={plausible.domain}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  if (cloudflare) {
    return (
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify({ token: cloudflare.token })}
      />
    );
  }

  return null;
}
