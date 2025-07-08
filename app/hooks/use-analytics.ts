// 4. app/hooks/use-analytics.ts (แก้ไขแล้ว)
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '../lib/google-analytics';

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = searchParams ? pathname + searchParams.toString() : pathname;
      pageview(url);
    }
  }, [pathname, searchParams]);
}