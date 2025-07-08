// app/api/content/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

async function fetchPost(id: string): Promise<WordPressPost | null> {
  const baseUrl = process.env.WORDPRESS_API_URL || 'https://content.childplusest.com';
  const apiUrl = `${baseUrl}/wp-json/wp/v2/posts/${id}?_embed`;
  
  console.log('Fetching from:', apiUrl);
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout
    
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'childplusest-app/1.0',
        'Accept': 'application/json',
      },
      cache: 'no-store',
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('WordPress API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText.substring(0, 500)
      });
      
      // ส่งกลับ null แทนการ throw error เพื่อให้จัดการใน API route
      return null;
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const responseText = await response.text();
      console.error('Invalid content type:', contentType);
      console.error('Response preview:', responseText.substring(0, 200));
      return null;
    }

    const data = await response.json();
    console.log('Successfully fetched post:', data.id, data.title?.rendered || 'No title');
    
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    
    // ถ้าเป็น AbortError (timeout)
    if (error instanceof Error && error.name === 'AbortError') {
      console.log('Request timed out, trying retry...');
      
      try {
        // ลองอีกครั้งด้วย timeout ที่สั้นลง
        const retryController = new AbortController();
        const retryTimeoutId = setTimeout(() => retryController.abort(), 10000);
        
        const retryResponse = await fetch(apiUrl, {
          headers: {
            'User-Agent': 'childplusest-app/1.0',
            'Accept': 'application/json',
          },
          cache: 'no-store',
          signal: retryController.signal
        });

        clearTimeout(retryTimeoutId);

        if (retryResponse.ok) {
          const retryData = await retryResponse.json();
          console.log('Retry successful');
          return retryData;
        }
      } catch (retryError) {
        console.error('Retry also failed:', retryError);
      }
    }
    
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const postId = resolvedParams.id;

    console.log('Received request for post ID:', postId);

    // Validate post ID
    if (!postId || typeof postId !== 'string') {
      console.error('Invalid post ID provided:', postId);
      return NextResponse.json(
        { success: false, error: 'Invalid post ID' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    if (!/^\d+$/.test(postId)) {
      console.error('Post ID must be numeric:', postId);
      return NextResponse.json(
        { success: false, error: 'Post ID must be numeric' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    console.log('Fetching post with ID:', postId);

    const post = await fetchPost(postId);
    
    // Check if post was not found or has error
    if (!post) {
      console.log('Post not found or error occurred:', postId);
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { 
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Check if it's a WordPress error response
    if ('code' in post && post.code === 'rest_post_invalid_id') {
      console.log('WordPress returned invalid post ID:', postId);
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { 
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Validate post structure
    if (!post.id || !post.title) {
      console.error('Invalid post structure:', post);
      return NextResponse.json(
        { success: false, error: 'Invalid post data structure' },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    console.log('Successfully returning post:', post.id);

    return NextResponse.json({ 
      success: true, 
      data: post 
    }, {
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
        'Content-Type': 'application/json',
      }
    });

  } catch (error: any) {
    console.error('API Route Error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // ให้ส่งกลับ error response ที่สม่ำเสมอ
    return NextResponse.json(
      { 
        success: false, 
        error: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}