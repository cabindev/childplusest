// app/lib/google-analytics.ts - เพิ่ม Enhanced Events
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LR831E9CMW';

// Enhanced pageview tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      custom_map: {
        custom_parameter_1: 'page_type'
      }
    });
  }
};

// Enhanced event tracking
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

// Content interaction tracking
export const trackContentInteraction = (contentType: string, contentId: string, action: string) => {
  event({
    action: 'content_interaction',
    category: 'engagement',
    label: `${contentType}_${contentId}_${action}`
  });
};

// Story/Song click tracking
export const trackStoryClick = (storyTitle: string) => {
  event({
    action: 'story_click',
    category: 'content',
    label: storyTitle
  });
};

export const trackSongClick = (songTitle: string) => {
  event({
    action: 'song_click',
    category: 'content',
    label: songTitle
  });
};

// Navigation tracking
export const trackNavigation = (destination: string, source?: string) => {
  event({
    action: 'navigation',
    category: 'user_behavior',
    label: `${source || 'unknown'}_to_${destination}`
  });
};

// Search tracking
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  event({
    action: 'search',
    category: 'search',
    label: searchTerm,
    value: resultsCount
  });
};

// Download tracking
export const trackDownload = (fileName: string, fileType: string) => {
  event({
    action: 'download',
    category: 'downloads',
    label: `${fileType}_${fileName}`
  });
};

// External link tracking
export const trackExternalLink = (url: string, linkText?: string) => {
  event({
    action: 'external_link_click',
    category: 'outbound_links',
    label: `${linkText || 'unknown'}_${url}`
  });
};

// Time on page tracking
export const trackTimeOnPage = (pagePath: string, timeInSeconds: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: pagePath,
    value: timeInSeconds
  });
};