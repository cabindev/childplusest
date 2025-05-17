// app/content/components/related-posts.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedPost {
  id: number;
  title: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export default function RelatedPosts({ postId }: { postId: number }) {
  const [posts, setPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        setLoading(true);
        const response = await fetch(`/api/content/related/${postId}`);
        const result = await response.json();
        
        if (result.success) {
          setPosts(result.posts);
        } else {
          setError('Failed to load related posts');
        }
      } catch (err) {
        setError('Error loading related posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedPosts();
  }, [postId]);

  if (loading) return <div className="animate-pulse text-center py-6">กำลังโหลด...</div>;
  if (error) return null; // ไม่แสดงอะไรถ้ามีข้อผิดพลาด
  if (posts.length === 0) return null; // ไม่แสดงส่วนนี้ถ้าไม่มีโพสต์ที่เกี่ยวข้อง

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="relative">
        {/* เส้นโค้งตกแต่ง */}
        <div className="absolute -top-10 left-0 right-0 h-16 w-screen -ml-[50vw] left-1/2">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full">
            <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-kids-yellow opacity-30"
            ></path>
        </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8 relative">
        <span className="bg-kids-peach px-6 py-2 rounded-full inline-block">บทความน่าสนใจอื่นๆ</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => {
          const colorClasses = [
            'bg-kids-blue',
            'bg-kids-green', 
            'bg-kids-pink'
          ];
          const animationClasses = [
            '',
            'animation-delay-1000',
            'animation-delay-2000'
          ];
          
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          
          return (
            <Link key={post.id} href={`/content/${post.id}`} className="block group">
              <div className={`card-kids h-full overflow-hidden ${index === 0 ? 'animate-wiggle' : 'animate-float'} ${animationClasses[index]}`}>
                <div className={`p-5 ${colorClasses[index % colorClasses.length]} bg-opacity-30 h-full flex flex-col`}>
                  {featuredImage && (
                    <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                      <Image 
                        src={featuredImage} 
                        alt={post.title.rendered}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  
                  <h3 
                    className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  ></h3>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-xs font-medium bg-white/70 rounded-full px-2 py-1">
                      {new Date(post.date).toLocaleDateString('th-TH')}
                    </span>
                    
                    <span className="inline-flex items-center font-bold text-sm text-gray-700">
                      อ่านเพิ่มเติม
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}