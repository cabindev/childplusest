// 2. app/lib/google-analytics.ts (แก้ไขแล้ว)
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LR831E9CMW';

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events happening
export const event = (eventData: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventData.action, {
      event_category: eventData.category,
      event_label: eventData.label,
      value: eventData.value,
    });
  }
};
