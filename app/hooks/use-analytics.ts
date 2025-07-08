// 1. แก้ไข app/hooks/use-analytics.ts (ใช้แค่ pathname)
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '../lib/google-analytics';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      // ใช้แค่ pathname เพื่อหลีกเลี่ยงปัญหา Promise
      pageview(pathname);
    }
  }, [pathname]);
}