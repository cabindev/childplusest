// app/content/components/view-counter.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function ViewCounter({ postId }: { postId: number }) {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // ตรวจสอบว่าเคยดูบทความนี้แล้วหรือไม่ในช่วง 1 ชั่วโมงที่ผ่านมา
    const hasViewedRecently = () => {
      if (typeof window === 'undefined') return false;
      
      const viewedPosts = JSON.parse(localStorage.getItem('viewedPosts') || '{}');
      const timestamp = viewedPosts[postId];
      
      // ถ้าเคยดูและเวลาผ่านไปไม่ถึง 1 ชั่วโมง ให้ถือว่าเคยดูแล้ว
      if (timestamp && Date.now() - timestamp < 60 * 60 * 1000) {
        return true;
      }
      
      // บันทึกเวลาที่ดูล่าสุด
      viewedPosts[postId] = Date.now();
      localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts));
      return false;
    };

    async function incrementAndFetchViewCount() {
      try {
        setLoading(true);
        
        // ถ้าเคยดูเร็วๆ นี้ ให้ดึงยอดวิวอย่างเดียวโดยไม่เพิ่ม
        if (hasViewedRecently()) {
          const response = await fetch(`/api/content/views/${postId}`);
          const data = await response.json();
          
          if (data.success) {
            setViewCount(data.count);
          } else {
            throw new Error(data.error || 'Failed to fetch view count');
          }
        } else {
          // ถ้าไม่เคยดูเร็วๆ นี้ ให้เพิ่มยอดวิว
          const response = await fetch(`/api/content/views/${postId}`, {
            method: 'POST',
          });

          if (!response.ok) {
            throw new Error('Failed to increment view count');
          }

          const data = await response.json();
          
          if (data.success) {
            setViewCount(data.count);
          } else {
            throw new Error(data.error || 'Failed to increment view count');
          }
        }
      } catch (err) {
        console.error('Error with view count:', err);
        setError('Failed to load view count');
        
        // ถ้าไม่สามารถเพิ่มยอดวิวได้ ลองดึงยอดวิวปัจจุบัน
        try {
          const getResponse = await fetch(`/api/content/views/${postId}`);
          const getData = await getResponse.json();
          
          if (getData.success) {
            setViewCount(getData.count);
          }
        } catch (e) {
          console.error('Error fetching view count:', e);
        }
      } finally {
        setLoading(false);
      }
    }

    incrementAndFetchViewCount();
  }, [postId]);

  if (loading) return (
    <span className="text-gray-500 text-sm flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span className="animate-pulse">กำลังโหลด...</span>
    </span>
  );
  
  if (error) return null; // ไม่แสดงยอดวิวถ้ามีข้อผิดพลาด

  return (
    <span className="text-gray-500 text-sm flex items-center group transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 group-hover:text-kids-blue transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span>{viewCount?.toLocaleString() || 0} ครั้ง</span>
    </span>
  );
}