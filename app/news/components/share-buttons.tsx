// app/content/components/share-buttons.tsx
'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { event } from '../../lib/google-analytics';
import { Share2, Copy, Facebook, Twitter, MessageCircle } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  
  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${pathname}` 
    : '';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      // Track การ copy link ใน Google Analytics
      event({
        action: 'copy_link',
        category: 'engagement',
        label: title,
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    
    // Track การแชร์ Facebook
    event({
      action: 'share',
      category: 'social',
      label: 'facebook',
    });
  };

  const shareTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    
    // Track การแชร์ Twitter
    event({
      action: 'share',
      category: 'social',
      label: 'twitter',
    });
  };

  const shareLine = () => {
    const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(fullUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    
    // Track การแชร์ Line
    event({
      action: 'share',
      category: 'social',
      label: 'line',
    });
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
        <Share2 className="w-4 h-4" />
        แชร์:
      </span>
      
      <button
        onClick={copyToClipboard}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
          copied 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
        }`}
      >
        <Copy className="w-3 h-3" />
        {copied ? 'คัดลอกแล้ว!' : 'คัดลอก'}
      </button>
      
      <button
        onClick={shareFacebook}
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors border border-blue-200"
      >
        <Facebook className="w-3 h-3" />
        Facebook
      </button>
      
      <button
        onClick={shareTwitter}
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-full transition-colors border border-sky-200"
      >
        <Twitter className="w-3 h-3" />
        Twitter
      </button>
      
      <button
        onClick={shareLine}
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-full transition-colors border border-green-200"
      >
        <MessageCircle className="w-3 h-3" />
        Line
      </button>
    </div>
  );
}
