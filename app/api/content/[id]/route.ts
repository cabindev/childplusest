// app/api/content/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cache } from 'react';

export const dynamic = 'force-dynamic';

const getPost = cache(async (id: string) => {
  const baseUrl = process.env.WORDPRESS_API_URL || 'https://content.childplusest.com';
  
  const post = await fetch(`${baseUrl}/wp-json/wp/v2/posts/${id}?_embed`).then(r => r.json());

  return post;
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // รอดึงค่า params.id ตามข้อกำหนดของ Next.js 15
    const resolvedParams = await params;
    const post = await getPost(resolvedParams.id);
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}