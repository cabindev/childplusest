// app/api/content/views/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

// API เพื่อดึงยอดวิว
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const postId = resolvedParams.id;
    
    const postView = await prisma.postView.findUnique({
      where: { postId },
    });
    
    return NextResponse.json({
      success: true,
      count: postView?.viewCount || 0,
    });
  } catch (error) {
    console.error('Error fetching view count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch view count' },
      { status: 500 }
    );
  }
}

// API เพื่อเพิ่มยอดวิว
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const postId = resolvedParams.id;
    
    // ใช้ upsert เพื่อสร้างหรืออัปเดตยอดวิว
    const postView = await prisma.postView.upsert({
      where: { postId },
      update: { viewCount: { increment: 1 } },
      create: { postId, viewCount: 1 },
    });
    
    return NextResponse.json({
      success: true,
      count: postView.viewCount,
    });
  } catch (error) {
    console.error('Error incrementing view count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to increment view count' },
      { status: 500 }
    );
  }
}