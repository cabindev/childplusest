// app/components/queen-sirikit.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const QueenSirikit = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen bg-black" />;
  }

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Full Screen Image */}
      <div className="relative w-full h-full">
        <Image
          src="/img/Q.sirikit.jpeg"
          alt="สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 lg:h-16 fill-current text-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>
    </section>
  );
};

export default QueenSirikit;
