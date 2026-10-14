/**
 * URL pública do site, usada em metadados, sitemap e Open Graph.
 * Na Vercel, VERCEL_PROJECT_PRODUCTION_URL é definida automaticamente;
 * defina NEXT_PUBLIC_SITE_URL se usar um domínio próprio.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
