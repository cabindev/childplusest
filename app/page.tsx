// app/page.tsx
'use client';

import { Suspense, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import HeroSection from './components/hero-section';
import FeaturedActivities from './components/featured-activities';
import CharacterGuides from './components/character-guides';
import ParentSection from './components/parent-section';
import WordPressPosts from './news/components/wordpress-posts';
import FeaturedStories from './stories/components/featured-stories'; 
import PartnerSection from './components/partner-section';
import BuddhistLentHero from './components/buddhist-lent-hero';

// สร้าง Section Divider สำหรับเพิ่มความสวยงาม
const SectionDivider = () => (
  <div className="relative h-16 overflow-hidden">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
      <path 
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
        className="fill-current text-white"
      />
    </svg>
  </div>
);

// Section Divider สำหรับการเปลี่ยนจากสีเหลืองไปสีอื่น
const YellowSectionDivider = () => (
  <div className="relative h-16 overflow-hidden">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
      <path 
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
        className="fill-current text-yellow-100"
      />
    </svg>
  </div>
);

// Component สำหรับแสดงเนื้อหาที่เหลือ
const RemainingContent = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* ปุ่มสำหรับแสดง/ซ่อนเนื้อหา */}
      <div id="content-section" className="flex justify-center py-8 bg-gradient-to-b from-white to-yellow-50">
        <button
          onClick={() => setShowMore(!showMore)}
          className="group flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-300"
        >
          <span className="text-lg font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors">
            {showMore ? 'ซ่อนเนื้อหา' : 'ดูเนื้อหาเพิ่มเติม'}
          </span>
          {showMore ? (
            <ChevronUp className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-all duration-300 group-hover:-translate-y-1" />
          ) : (
            <ChevronDown className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-all duration-300 group-hover:translate-y-1" />
          )}
        </button>
      </div>

      {/* เนื้อหาที่เหลือ - ใช้ Collapse Animation */}
      <div 
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          showMore 
            ? 'max-h-[5000px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-0">
          <HeroSection />
          
          <YellowSectionDivider />
          
          <FeaturedStories />
          
          <SectionDivider />
          
          <Suspense fallback={
            <div className="h-64 flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-lg font-medium text-gray-600">กำลังโหลดข่าวสาร...</span>
              </div>
            </div>
          }>
            <WordPressPosts />
          </Suspense>
          
          <SectionDivider />
          
          <FeaturedActivities />
          
          <SectionDivider />
          
          <PartnerSection />
          
          <SectionDivider />
          
          <ParentSection />
        </div>
      </div>

      {/* แสดงปุ่มปิดเมื่อขยายเนื้อหาแล้ว */}
      {showMore && (
        <div className="flex justify-center py-8 bg-gradient-to-t from-white to-yellow-50">
          <button
            onClick={() => setShowMore(false)}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-300 hover:border-orange-300"
          >
            <span className="text-lg font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
              ย่อเนื้อหา
            </span>
            <ChevronUp className="w-6 h-6 text-orange-500 group-hover:text-orange-600 transition-all duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      )}
    </>
  );
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* แสดง BuddhistLentHero ให้เด่นชัด */}
      <div className="relative">
        {/* เพิ่ม spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <BuddhistLentHero />
        </div>
      </div>
      
      {/* เนื้อหาที่เหลือ - ซ่อน HeroSection และทุกอย่างหลัง BuddhistLentHero */}
      <RemainingContent />
    </main>
  );
}