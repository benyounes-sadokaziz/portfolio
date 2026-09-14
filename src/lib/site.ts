/**
 * Canonical origin for absolute URLs (metadata, sitemap, robots).
 *
 * Defaults to the production domain so canonical tags and the sitemap are
 * correct without any dashboard configuration. Override with
 * NEXT_PUBLIC_SITE_URL if the site ever moves.
 */
const PRODUCTION_URL = "https://sadokazizbenyounes.me";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_URL).replace(/\/$/, "");
