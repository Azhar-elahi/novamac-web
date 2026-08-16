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
        // Explicitly grant full permission to all Anthropic / Claude, OpenAI, and Generative Search bots
        userAgent: [
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'Diffbot',
          'Bytespider',
          'FacebookExternalHit',
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
