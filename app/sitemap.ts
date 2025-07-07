// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ดึงโพสต์ทั้งหมดจาก API
  const baseUrl = process.env.WORDPRESS_API_URL || 'https://content.childplusest.com';
  const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?per_page=100`)
  const posts = await res.json()

  // สร้าง sitemap entries สำหรับโพสต์
  const postEntries = posts.map((post: any) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/content/${post.id}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  // เพิ่มหน้าหลักและหน้าสำคัญอื่นๆ
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/content`,
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/games`,
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/activities`,
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/parents`,
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 0.7,
    },
    ...postEntries,
  ]
}