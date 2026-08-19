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
        userAgent: [
          'ClaudeBot',
          'Claude-Web',
          'Claude-SearchBot',
          'anthropic-ai',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'Diffbot',
          'Bytespider',
          'FacebookExternalHit',
          'Meta-ExternalAgent',
          'Twitterbot',
          'LinkedInBot',
        ],
        allow: '/',
        disallow: ['/7222-@dm1nl0g1n/', '/api/auth/'],
      },
    ],
    sitemap: 'https://novamacsolutions.com/sitemap.xml',
  };
}
