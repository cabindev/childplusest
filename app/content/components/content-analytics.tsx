// app/content/components/content-analytics.tsx
'use client';

import { useEffect } from 'react';
import { event } from '../../lib/google-analytics';

interface ContentAnalyticsProps {
  postId: string;
  title: string;
}

export default function ContentAnalytics({ postId, title }: ContentAnalyticsProps) {
  useEffect(() => {
    // Track page view
    event({
      action: 'view_content',
      category: 'content',
      label: title,
      value: parseInt(postId)
    });

    // Track reading time
    const startTime = Date.now();
    
    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestones
        if (scrollPercent >= 25 && maxScroll < 25) {
          event({
            action: 'scroll_depth',
            category: 'engagement',
            label: '25%',
            value: 25
          });
        } else if (scrollPercent >= 50 && maxScroll < 50) {
          event({
            action: 'scroll_depth',
            category: 'engagement',
            label: '50%',
            value: 50
          });
        } else if (scrollPercent >= 75 && maxScroll < 75) {
          event({
            action: 'scroll_depth',
            category: 'engagement',
            label: '75%',
            value: 75
          });
        } else if (scrollPercent >= 90 && maxScroll < 90) {
          event({
            action: 'scroll_depth',
            category: 'engagement',
            label: '90%',
            value: 90
          });
        }
      }
    };

    // Cleanup function
    const cleanup = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      // Track time spent reading
      event({
        action: 'time_on_page',
        category: 'engagement',
        label: title,
        value: timeSpent
      });
      
      window.removeEventListener('scroll', trackScrollDepth);
    };

    window.addEventListener('scroll', trackScrollDepth);
    window.addEventListener('beforeunload', cleanup);

    return cleanup;
  }, [postId, title]);

  return null;
}