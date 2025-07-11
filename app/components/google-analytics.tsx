// 3. app/components/google-analytics.tsx (ไม่เปลี่ยนแปลง)
'use client';

import Script from 'next/script';
import { GA_TRACKING_ID } from '../lib/google-analytics';

const GoogleAnalytics = () => {
  if (!GA_TRACKING_ID || GA_TRACKING_ID === '') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;