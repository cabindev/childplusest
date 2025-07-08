// app/components/analytics-enhanced-link.tsx - Link component with tracking
'use client';

import Link from 'next/link';
import { trackNavigation, trackExternalLink } from '../lib/google-analytics';

interface AnalyticsLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  trackLabel?: string;
  source?: string;
}

export default function AnalyticsLink({ 
  href, 
  children, 
  className, 
  external = false,
  trackLabel,
  source 
}: AnalyticsLinkProps) {
  const handleClick = () => {
    if (external) {
      trackExternalLink(href, trackLabel);
    } else {
      trackNavigation(href, source);
    }
  };

  if (external) {
    return (
      <a 
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}