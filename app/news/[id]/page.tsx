// app/content/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import RelatedPosts from '../components/related-posts';
import ShareButtons from '../components/share-buttons';
import ViewCounter from '../components/view-counter';
import SkeletonLoader from '../components/skeleton-loader';

async function getPost(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/content/${id}`, { 
    cache: 'no-store' 
  });
  const data = await res.json();
  return data.success ? data.data : null;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // รอดึงค่า params.id ตามข้อกำหนดของ Next.js 15
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.id);
  
  if (!post) {
    return {
      title: 'ไม่พบบทความ',
    };
  }
  
  // แปลงข้อความจาก HTML เป็นข้อความธรรมดา
  const title = post.title?.rendered?.replace(/<[^>]+>/g, '') || 'รายละเอียดบทความ';
  const description = post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '';
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/default-featured.png';
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/content/${resolvedParams.id}`,
      siteName: 'Child Plus Est',
      locale: 'th_TH',
      type: 'article',
      publishedTime: post.date,
      images: [{
        url: featuredImage,
        width: 1200,
        height: 630,
        alt: title
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title, 
      description,
      images: [featuredImage]
    },
    alternates: {
      canonical: `${baseUrl}/content/${resolvedParams.id}`
    }
  };
}

export default async function PostDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // รอดึงค่า params.id ตามข้อกำหนดของ Next.js 15
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.id);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-kids-peach p-6 rounded-2xl shadow-sm card-kids">
          <h1 className="text-2xl font-bold text-gray-800">ไม่พบบทความ</h1>
          <p className="mt-2 text-gray-700">ไม่พบบทความที่คุณกำลังค้นหา</p>
          <div className="mt-6">
            <Link 
              href="/" 
              className="btn-kids btn-kids-blue"
            >
              กลับไปหน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const title = post.title?.rendered?.replace(/<[^>]+>/g, '') || '';
  
  return (
    <div className="bg-[var(--background)] min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-6">
          <Link href="/" className="btn-kids btn-kids-yellow">
            <span className="mr-2">←</span> หน้าหลัก
          </Link>
        </div>

        <article className="max-w-3xl mx-auto rounded-3xl shadow-sm card-kids">
          <div className="p-6 md:p-8">
            <h1
              className="text-3xl font-bold mb-4 text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="flex flex-wrap justify-between items-center text-gray-500 mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{new Date(post.date).toLocaleDateString("th-TH")}</span>
              </div>
            </div>
            {/* ปุ่มแชร์ด้านบนบทความ */}
            <div className="flex justify-between items-center my-4">
              <ViewCounter postId={post.id} />
              <ShareButtons title={title} />
            </div>

            {featuredImage && (
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-[var(--kids-blue)] prose-a:font-bold prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* ปุ่มแชร์ด้านล่างบทความ */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <ShareButtons title={title} />
            </div>
          </div>
        </article>

        {/* บทความที่เกี่ยวข้อง */}
        <Suspense
          fallback={
            <div className="mt-12 text-center">
              <div className="animate-pulse">
                <div className="h-6 w-48 bg-gray-200 rounded-full mx-auto mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 rounded-2xl p-4 h-64"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <RelatedPosts postId={post.id} />
        </Suspense>

        {/* เส้นโค้งตกแต่งด้านล่าง */}
        <div className="relative mt-20 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-16 w-screen -ml-[50vw] left-1/2">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 w-full h-full rotate-180"
            >
              <path
                d="M0,40 C100,70 400,0 500,30 C600,60 700,10 900,40 C1000,60 1100,30 1200,50 L1200,120 L0,120 Z"
                className="fill-kids-green opacity-20"
              />
              <path
                d="M0,60 C200,20 300,60 600,30 C900,10 1050,50 1200,30 L1200,120 L0,120 Z"
                className="fill-kids-blue opacity-20"
              />
            </svg>
          </div>
        </div>

        {/* ลูกบอลสีเล็กๆ ตกแต่ง */}
        <div className="fixed -z-10 top-20 left-10 w-16 h-16 bg-kids-yellow rounded-full opacity-60 animate-float"></div>
        <div className="fixed -z-10 top-40 right-10 w-12 h-12 bg-kids-blue rounded-full opacity-60 animate-float animation-delay-1000"></div>
        <div className="fixed -z-10 bottom-20 left-20 w-20 h-20 bg-kids-pink rounded-full opacity-60 animate-float animation-delay-2000"></div>
      </div>
    </div>
  );
}