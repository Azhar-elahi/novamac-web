import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/7222-@dm1nl0g1n/', '/api/'],
    },
    sitemap: 'https://novamacsolutions.com/sitemap.xml',
  };
}
