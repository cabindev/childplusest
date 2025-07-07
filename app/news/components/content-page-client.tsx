// app/content/components/content-page-client.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import SkeletonLoader from './skeleton-loader';
interface Post {
  id: number;
  title: {
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

export default function ContentPageClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || '1');
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(`/api/content?page=${currentPage}&per_page=8`);
        const result = await response.json();
        
        if (result.success && result.posts) {
          setPosts(result.posts);
          setTotalPages(Number(result.totalPages) || 1);
        } else {
          setError('ไม่สามารถโหลดข้อมูลได้');
        }
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(`/content?page=${page}`);
  };

  // สร้าง Pagination UI
  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // ปุ่มย้อนกลับ
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &laquo;
      </button>
    );
    
    // หน้าแรก (ถ้าไม่ได้อยู่ในช่วงที่แสดง)
    if (startPage > 1) {
      pages.push(
        <button
          key="1"
          onClick={() => handlePageChange(1)}
          className="px-3 py-1 rounded-md hover:bg-gray-50 border border-gray-300"
        >
          1
        </button>
      );
      
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-3 py-1">
            ...
          </span>
        );
      }
    }
    
    // หน้าในช่วงที่แสดง
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i
              ? 'bg-emerald-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }
    
    // หน้าสุดท้าย (ถ้าไม่ได้อยู่ในช่วงที่แสดง)
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-3 py-1">
            ...
          </span>
        );
      }
      
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 rounded-md hover:bg-gray-50 border border-gray-300"
        >
          {totalPages}
        </button>
      );
    }
    
    // ปุ่มไปข้างหน้า
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &raquo;
      </button>
    );
    
    return (
      <div className="flex justify-center space-x-2 mt-8">
        {pages}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">ข่าวสารทั้งหมด</h1>
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <p className="text-red-700">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">ข่าวสารทั้งหมด</h1>
      <p className="text-gray-600 text-center mb-8">ติดตามข่าวสารและกิจกรรมล่าสุดของเรา</p>
      
      {posts.length === 0 ? (
        <div className="text-center py-10">ไม่พบข่าวสาร</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              
              return (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {featuredImage && (
                    <Link href={`/content/${post.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={post.title.rendered}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                  )}
                  
                  <div className="p-5">
                    <h2 className="text-lg font-bold mb-2 line-clamp-2">
                      <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </h2>
                    
                    <div 
                      className="text-gray-600 mb-4 text-sm line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('th-TH')}
                      </span>
                      <Link
                        href={`/news/${post.id}`}
                        className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-sm font-medium py-1 px-3 rounded-md transition-colors"
                      >
                        อ่านต่อ
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {renderPagination()}
        </>
      )}
      
      <div className="text-center mt-10">
        <Link
          href="/"
          className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          กลับไปหน้าหลัก
        </Link>
      </div>
    </div>
  );
}