// app/news/components/content-page-client.tsx - เพิ่ม Analytics
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import SkeletonLoader from './skeleton-loader';
import { event } from '../../lib/google-analytics';

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
          
          // Track successful content load
          event({
            action: 'content_loaded',
            category: 'news',
            label: `page_${currentPage}`,
            value: result.posts.length
          });
        } else {
          setError('ไม่สามารถโหลดข้อมูลได้');
          
          // Track error
          event({
            action: 'content_load_error',
            category: 'news',
            label: 'api_error'
          });
        }
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
        console.error(err);
        
        // Track error
        event({
          action: 'content_load_error',
          category: 'news',
          label: 'network_error'
        });
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage]);

  // Handle page change with analytics
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    
    event({
      action: 'pagination_click',
      category: 'navigation',
      label: `page_${currentPage}_to_${page}`
    });
    
    router.push(`/news?page=${page}`);
  };

  // Handle article click with analytics
  const handleArticleClick = (post: Post) => {
    const title = post.title.rendered.replace(/<[^>]+>/g, ''); // Remove HTML tags
    
    event({
      action: 'article_click',
      category: 'content',
      label: title
    });
  };

  // Handle home navigation with analytics
  const handleHomeNavigation = () => {
    event({
      action: 'navigation',
      category: 'user_behavior',
      label: 'news_to_home'
    });
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
        className="px-3 py-1 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
          className="px-3 py-1 rounded-md hover:bg-gray-50 border border-gray-300 transition-all"
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
          className={`px-3 py-1 rounded-md transition-all ${
            currentPage === i
              ? 'bg-emerald-500 text-white shadow-md'
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
          className="px-3 py-1 rounded-md hover:bg-gray-50 border border-gray-300 transition-all"
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
        className="px-3 py-1 rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
        <div className="bg-red-100 p-4 rounded-lg text-center animate-fadeIn">
          <p className="text-red-700">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
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
        <div className="text-center py-10 animate-fadeIn">ไม่พบข่าวสาร</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post, index) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              
              return (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {featuredImage && (
                    <Link href={`/news/${post.id}`} onClick={() => handleArticleClick(post)}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={post.title.rendered}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  )}
                  
                  <div className="p-5">
                    <h2 className="text-lg font-bold mb-2 line-clamp-2 hover:text-kids-purple transition-colors">
                      <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }} />
                    </h2>

                    <div
                      className="text-gray-600 mb-4 text-sm line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.excerpt.rendered) }}
                    />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('th-TH')}
                      </span>
                      <Link
                        href={`/news/${post.id}`}
                        onClick={() => handleArticleClick(post)}
                        className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-sm font-medium py-1 px-3 rounded-md transition-all duration-200 hover:scale-105"
                      >
                        อ่านต่อ
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Show pagination info */}
          <div className="text-center mt-6 mb-4">
            <p className="text-gray-500">
              แสดงหน้า {currentPage} จาก {totalPages} หน้า (รวม {posts.length} บทความ)
            </p>
          </div>
          
          {renderPagination()}
        </>
      )}
      
      <div className="text-center mt-10">
        <Link
          href="/"
          onClick={handleHomeNavigation}
          className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-all duration-200 hover:scale-105"
        >
          กลับไปหน้าหลัก
        </Link>
      </div>
    </div>
  );
}