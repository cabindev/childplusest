// app/news/page.tsx - เพิ่ม Analytics
'use client';

import { Suspense, useEffect, useRef } from 'react';
import ContentPageClient from './components/content-page-client';
import { event } from '../lib/google-analytics';

export default function NewsPage() {
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
    
    // Track page view
    event({
      action: 'page_view',
      category: 'news',
      label: 'news_page'
    });

    // Track time spent when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) {
        event({
          action: 'time_on_page',
          category: 'engagement',
          label: 'news_page',
          value: timeSpent
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4 text-center">กำลังโหลด...</div>}>
      <ContentPageClient />
    </Suspense>
  );
}