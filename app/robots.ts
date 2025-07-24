import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'NaverBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
    ],
    sitemap: 'https://futureautonoms.com/sitemap.xml',
    host: 'https://futureautonoms.com',
  };
}
