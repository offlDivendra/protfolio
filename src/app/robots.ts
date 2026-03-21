import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Update this base URL once the project is deployed
  const baseUrl = 'https://your-portfolio-domain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
