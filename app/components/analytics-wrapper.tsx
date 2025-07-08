// 6. app/components/analytics-wrapper.tsx (Optional: Wrapper สำหรับ components ที่ต้องการ analytics)
'use client';

import { useEffect } from 'react';
import { event } from '../lib/google-analytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
  eventData?: {
    action: string;
    category: string;
    label?: string;
    value?: number;
  };
}

export default function AnalyticsWrapper({ children, eventData }: AnalyticsWrapperProps) {
  useEffect(() => {
    if (eventData) {
      event(eventData);
    }
  }, [eventData]);

  return <>{children}</>;
}