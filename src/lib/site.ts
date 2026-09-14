/**
 * Canonical origin for absolute URLs (metadata, sitemap, robots).
 *
 * Set NEXT_PUBLIC_SITE_URL to the custom domain in Vercel's project settings.
 * Until then it falls back to the deployment URL Vercel injects, and finally to
 * localhost for development — so nothing is hard-coded to a domain.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
