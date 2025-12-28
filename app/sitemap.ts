// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // ดึงโพสต์ทั้งหมดจาก API
    const baseUrl = process.env.WORDPRESS_API_URL || 'https://blog.sdnthailand.com';
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?per_page=100`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`)
    }

    const posts = await res.json()

    // สร้าง sitemap entries สำหรับโพสต์
    const postEntries = posts.map((post: any) => ({
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/news/${post.id}`,
      lastModified: new Date(post.modified),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }))

    // เพิ่มหน้าหลักและหน้าสำคัญอื่นๆ
    return [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/news`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/games`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/activities`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}/parents`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      ...postEntries,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return basic sitemap if WordPress API fails
    return [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
      },
    ]
  }
}