import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/7222-@dm1nl0g1n/', '/api/auth/'],
      },
      {
        // Explicitly welcome AI Answer & Generative Search Engine crawlers (AEO / GEO)
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot-Extended',
          'Google-Extended',
          'ChatGPT-User'
        ],
        allow: '/',
        disallow: ['/7222-@dm1nl0g1n/', '/api/auth/'],
      }
    ],
    sitemap: 'https://novamacsolutions.com/sitemap.xml',
  };
}
