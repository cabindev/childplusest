//app/api/content/route.ts
import { NextResponse } from 'next/server'
import { cache } from 'react'

export const dynamic = 'force-dynamic'

const getPosts = cache(async (page = '1', per_page = '10') => {
  const baseUrl = process.env.WORDPRESS_API_URL || 'https://content.childplusest.com'
  
  const res = await fetch(
    `${baseUrl}/wp-json/wp/v2/posts?page=${page}&per_page=${per_page}&_embed=true`,
    {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    }
  )
  
  return {
    posts: await res.json(),
    totalPages: res.headers.get('x-wp-totalpages'),
    total: res.headers.get('x-wp-total')
  }
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Validate page parameter
  const pageParam = searchParams.get('page') || '1';
  const page = parseInt(pageParam, 10);
  if (isNaN(page) || page < 1 || page > 1000) {
    return NextResponse.json(
      { success: false, error: 'Invalid page parameter (must be 1-1000)' },
      { status: 400 }
    );
  }

  // Validate per_page parameter
  const perPageParam = searchParams.get('per_page') || '10';
  const perPage = parseInt(perPageParam, 10);
  if (isNaN(perPage) || perPage < 1 || perPage > 100) {
    return NextResponse.json(
      { success: false, error: 'Invalid per_page parameter (must be 1-100)' },
      { status: 400 }
    );
  }

  try {
    const data = await getPosts(page.toString(), perPage.toString())
    return NextResponse.json({ success: true, ...data })
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}