/**
 * Analytics configuration — the single source of truth.
 *
 * Two things read this file: the script tag in `components/Analytics.tsx`, and
 * the "What this website collects" section of the privacy policy. That is
 * deliberate. A privacy policy that says "no analytics" while a tracker runs is
 * a false statement to visitors, and the usual way that happens is somebody
 * adding a script months after somebody else wrote the policy. Here the policy
 * text is generated from the same flag that injects the script, so the two
 * cannot disagree.
 *
 * Nothing is enabled unless an environment variable is set at build time, so
 * the default state of this repository is genuinely no analytics.
 *
 * WHY COOKIELESS. The audience is in the UK and Canada. UK PECR requires opt-in
 * consent before setting non-essential cookies, which is what Google Analytics
 * needs — so GA means a consent banner, and a banner is a real cost on a site
 * whose whole pitch is being straightforward. The providers below set no
 * cookies and collect no personal data, so no banner is required and the
 * privacy policy stays short and true.
 *
 * TO ENABLE — set one of these in Render (Dashboard → Environment), then
 * redeploy. They must be NEXT_PUBLIC_ because this site is a static export and
 * the value is inlined at build time.
 *
 *   Cloudflare Web Analytics (free)
 *     NEXT_PUBLIC_CF_BEACON_TOKEN=<token from the Cloudflare dashboard>
 *
 *   Plausible (paid, better dashboard and goal tracking)
 *     NEXT_PUBLIC_PLAUSIBLE_DOMAIN=avirowork.com
 *
 * If both are set, Plausible wins and Cloudflare is ignored — running two
 * trackers doubles the requests and gives two sets of numbers that never quite
 * agree.
 */

export type AnalyticsProvider = {
  readonly id: "plausible" | "cloudflare";
  /** Shown to visitors in the privacy policy. Use the name they'd recognise. */
  readonly name: string;
  /** Where the provider processes the data. Visitors are entitled to know. */
  readonly processedIn: string;
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const cloudflareToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export const plausible = plausibleDomain
  ? { domain: plausibleDomain }
  : undefined;

export const cloudflare =
  !plausibleDomain && cloudflareToken ? { token: cloudflareToken } : undefined;

export const analyticsProvider: AnalyticsProvider | undefined = plausible
  ? {
      id: "plausible",
      name: "Plausible Analytics",
      processedIn: "the European Union",
    }
  : cloudflare
    ? {
        id: "cloudflare",
        name: "Cloudflare Web Analytics",
        processedIn: "Cloudflare's global network",
      }
    : undefined;

/** True when this build ships a measurement script. Drives the policy wording. */
export const analyticsEnabled = analyticsProvider !== undefined;
