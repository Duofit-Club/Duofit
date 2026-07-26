/**
 * JSON-LD structured data for DUOFIT.
 *
 * This is the single highest-leverage fix for a BRAND-NAME search like
 * "duofit" — it tells Google explicitly "this is the official website for
 * the business called DUOFIT," which is what lets Google build a confident
 * Knowledge Panel / top result for that exact query instead of guessing.
 *
 * IMPORTANT — please review the placeholder values below marked with "⚠️":
 * I did not have a verified registered business address, so I've used
 * city-level locality only (Hyderabad) rather than inventing a street
 * address. If DUOFIT has one fixed address (even a home studio address
 * you're comfortable publishing), add it — a complete address is a real
 * ranking factor for local/brand search and for a future Google Business
 * Profile listing.
 */

import { SITE_URL } from "./seo";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "DUOFIT",
  alternateName: "Duofit Club",
  url: SITE_URL,
  logo: `${SITE_URL}/duofit-logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "DUOFIT is a health and lifestyle coaching brand helping individuals, couples and families build healthier lives through practical nutrition, sustainable movement and lasting daily habits.",
  email: "support@duofit.club",
  telephone: "+91-9052853200",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    // ⚠️ City-level only — add a street address / area if you want this to
    // power a Google Business Profile "map pin" result.
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  founder: [
    { "@type": "Person", name: "Nitesh" },
    { "@type": "Person", name: "Nikitha" },
  ],
  sameAs: [
    "https://instagram.com/duofit.club",
    // ⚠️ Add Facebook / LinkedIn page URLs here once created — each
    // verified profile you link strengthens the brand-entity signal.
  ],
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Personal Health Coaching",
        description:
          "Holistic health coaching covering nutrition, fitness, sleep and lifestyle habits.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Family Health & Habits Coaching",
        description:
          "Coaching for families to build healthier eating habits and routines together.",
      },
    },
  ],
};

export function structuredDataScriptTag() {
  return {
    type: "application/ld+json",
    children: JSON.stringify(organizationJsonLd),
  };
}
