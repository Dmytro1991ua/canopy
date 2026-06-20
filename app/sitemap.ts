import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#why`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#focus`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#how`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#impact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#pledge`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ]
}
