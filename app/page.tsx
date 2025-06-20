// app/page.tsx
import { Suspense } from 'react';

import HeroSection from './components/hero-section';
import FeaturedActivities from './components/featured-activities';
import CharacterGuides from './components/character-guides';
import ParentSection from './components/parent-section';
import WordPressPosts from './news/components/wordpress-posts';
import FeaturedStories from './stories/components/featured-stories'; 
import PartnerSection from './components/partner-section';
import RegistrationSection from './components/registration-section';
import BuddhistLentRegistration from './components/registration-section';

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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <BuddhistLentRegistration />
      
      <HeroSection />
      
      
      <YellowSectionDivider />
      
      <FeaturedStories />
      
      <SectionDivider />
      
      <Suspense fallback={<div className="h-64 flex items-center justify-center">กำลังโหลดข่าวสาร...</div>}>
        <WordPressPosts />
      </Suspense>
      
      <SectionDivider />
      
      <FeaturedActivities />
      
      <SectionDivider />
      
      <PartnerSection />
      
      <SectionDivider />
      
      <ParentSection />
    </main>
  );
}