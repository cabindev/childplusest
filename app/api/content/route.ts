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
  const data = await getPosts(
    searchParams.get('page') || '1',
    searchParams.get('per_page') || '10'
  )
  
  return NextResponse.json({ success: true, ...data })
}