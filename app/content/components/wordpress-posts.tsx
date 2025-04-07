// content/components/wordpress-posts.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Newspaper } from 'lucide-react';
import SkeletonLoader from './skeleton-loader';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
  url: string;
  date: string;
}

// กำหนดสีพื้นหลังแบบไล่ระดับสำหรับแต่ละการ์ด
const cardColors = [
  'from-amber-100 to-amber-300', // สีเหลืองอำพัน
  'from-sky-100 to-sky-300',     // สีฟ้า
  'from-emerald-100 to-emerald-300', // สีเขียวมรกต
  'from-orange-100 to-orange-300'   // สีส้ม
];

export default function WordPressPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setLoading(true);
        const response = await fetch('/api/content?per_page=4');
        const result = await response.json();
        
        if (result.success && result.posts) {
          const formattedPosts = result.posts.map((post: any) => ({
            id: post.id,
            title: post.title?.rendered || '',
            excerpt: post.excerpt?.rendered || '',
            content: post.content?.rendered || '',
            featured_image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
            url: post.link || '',
            date: post.date || ''
          }));
          
          setPosts(formattedPosts);
        } else {
          setError('Failed to load posts');
        }
      } catch (err) {
        setError('Error loading posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestPosts();
  }, []);

  if (loading) return <SkeletonLoader />;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (posts.length === 0) return <div className="text-center py-10">ไม่พบข่าวสาร</div>;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-kids-green rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
            <Newspaper className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">ข่าวสารน่าสนใจ</h2>
          <p className="text-xl max-w-2xl mx-auto mb-4">
            ติดตามข่าวสารและกิจกรรมล่าสุดที่น่าสนใจสำหรับเด็กๆ และครอบครัว
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Link key={post.id} href={`/content/${post.id}`} className="group">
              <div 
                className={`rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b ${cardColors[index % cardColors.length]} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 h-full flex flex-col`}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight line-clamp-3 mb-3 min-h-[4.5rem]">{post.title}</h3>
                  
                  {post.featured_image && (
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image 
                        src={post.featured_image} 
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-all duration-500 group-hover:brightness-110"
                      />
                      {/* เพิ่มเอฟเฟกต์เมื่อวางเมาส์คล้ายกับส่วนอื่น */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium">ดูรายละเอียด</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs font-medium bg-white/60 rounded-full px-2 py-1">
                      {new Date(post.date).toLocaleDateString('th-TH')}
                    </span>
                    <span 
                      className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-1.5 px-4 rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow group-hover:px-5 inline-flex items-center"
                    >
                      อ่านต่อ
                      <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            href="/content" 
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            ดูข่าวสารทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}