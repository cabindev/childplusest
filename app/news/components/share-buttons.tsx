// app/content/components/share-buttons.tsx
'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  
  // สร้าง URL เต็มสำหรับแชร์
  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${pathname}` 
    : '';

  // ฟังก์ชันคัดลอก URL
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ฟังก์ชันแชร์ไปยังแพลตฟอร์มต่างๆ
  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${fullUrl}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareLine = () => {
    window.open(`https://social-plugins.line.me/lineit/share?url=${fullUrl}`, '_blank');
  };

  return (
    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 items-center mt-6 mb-3">
      <span className="text-sm text-gray-600 mb-2 sm:mb-0">แชร์บทความนี้:</span>
      
      <div className="flex space-x-3">
        {/* Facebook */}
        <button 
          onClick={shareFacebook}
          className="bg-[#1877F2] hover:bg-[#0e5fc2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="แชร์ไปยัง Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </button>

        {/* Twitter/X */}
        <button 
          onClick={shareTwitter}
          className="bg-black hover:bg-gray-800 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="แชร์ไปยัง X"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </button>

        {/* Line */}
        <button 
          onClick={shareLine}
          className="bg-[#06C755] hover:bg-[#05a648] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="แชร์ไปยัง Line"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 8a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-5-2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
          </svg>
        </button>

        {/* Copy Link */}
        <button 
          onClick={copyToClipboard}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors relative"
          aria-label="คัดลอกลิงก์"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
          </svg>
          
          {copied && (
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              คัดลอกแล้ว!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}