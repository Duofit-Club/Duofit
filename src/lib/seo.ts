/**
 * Shared SEO helper — builds a consistent meta/link tag set for every route.
 *
 * Usage in a route file:
 *
 *   export const Route = createFileRoute("/about")({
 *     head: () => seo({
 *       title: "About — DUOFIT",
 *       description: "Health, designed to last...",
 *       path: "/about",
 *     }),
 *     component: About,
 *   });
 *
 * NOTE ON WHY THIS MATTERS:
 * This app renders client-side only (no SSR/prerendering). Googlebot executes
 * JavaScript and will eventually see these tags during its render pass, but
 * crawlers that DON'T execute JS (Bing, Facebook/WhatsApp/LinkedIn link-preview
 * bots, X/Twitter card bot) only ever see whatever is in the static index.html
 * response. This helper is the best available fix within a pure client-side
 * app — it ensures every route has correct canonical/OG/Twitter tags for any
 * crawler that DOES render JS (which includes Google, the one that matters most
 * for search ranking). True fix for the non-JS crawlers requires prerendering
 * or SSR — see the SEO_NOTES.md file included alongside this project for the
 * upgrade path if social-share previews become a priority.
 */

const SITE_NAME = "DUOFIT";
const SITE_URL = "https://www.duofit.club";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoOptions {
  title: string;
  description: string;
  path: string; // e.g. "/about" — must start with "/"
  image?: string; // absolute URL; falls back to the default OG image
  noindex?: boolean; // set true for utility pages you don't want indexed
}

export function seo({ title, description, path, image, noindex }: SeoOptions) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "en_IN" },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE };
