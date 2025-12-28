// app/api/content/related/[id]/route.ts
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // รอดึงค่า params.id ตามข้อกำหนดของ Next.js 15
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // Validate id parameter - must be numeric
    if (!id || !/^\d+$/.test(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid post ID (must be numeric)' },
        { status: 400 }
      );
    }

    const baseUrl = process.env.WORDPRESS_API_URL || 'https://content.childplusest.com';

    // ดึงโพสต์ทั้งหมด 4 โพสต์ล่าสุด และไม่รวมโพสต์ปัจจุบัน
    const response = await fetch(
      `${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=4&exclude=${id}`,
      { 
        next: { revalidate: 60 },
        headers: {
          'Accept': 'application/json'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch related posts')
    }

    const posts = await response.json();

    return NextResponse.json({
      success: true,
      posts: posts.slice(0, 3) // ส่งกลับเพียง 3 โพสต์
    })
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch related posts' 
      }, 
      { status: 500 }
    )
  }
}