// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/auth/',
        '/dashboard/',
        '/admin/',
        '/private/',
        '/studio/',
        '/*?*', // ป้องกัน query parameters
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/sitemap.xml`,
  }
}