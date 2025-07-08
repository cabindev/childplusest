// app/hooks/use-analytics-timer.ts - Hook สำหรับติดตาม Time on Page
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackTimeOnPage } from '../lib/google-analytics';

export function useAnalyticsTimer() {
  const pathname = usePathname();
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) { // Track only if spent more than 5 seconds
        trackTimeOnPage(pathname, timeSpent);
      }
    };

    // Track on visibility change (when user switches tabs)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
        if (timeSpent > 5) {
          trackTimeOnPage(pathname, timeSpent);
        }
      } else {
        startTimeRef.current = Date.now(); // Reset timer when coming back
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pathname]);
}