// app/components/partner-section.tsx
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, MapPin, Heart, Shield } from 'lucide-react';

export default function PartnerSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center bg-kids-peach px-4 py-2 rounded-full mb-4">
            <Shield className="h-5 w-5 text-gray-700 mr-2" />
            <span className="text-gray-700 font-medium">โครงการปลูกพลังบวก</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">เพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยง สำหรับเด็กปฐมวัย</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold text-kids-green">พื้นที่ภาคเหนือ</span>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className={`card-kids bg-gradient-to-r from-kids-blue/30 to-kids-green/30 p-8 shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center text-center mb-6">
              <div className="bg-white p-3 rounded-full mb-4">
                <Heart className="h-8 w-8 text-kids-pink" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">โครงการปลูกพลังบวก พื้นที่ภาคเหนือ</h3>
              <p className="text-gray-600 max-w-2xl">
                โครงการส่งเสริมการพัฒนาทักษะชีวิตเพื่อสร้างภูมิคุ้มกันปัจจัยเสี่ยงสำหรับเด็กปฐมวัยในพื้นที่ภาคเหนือ
                มุ่งพัฒนาเด็กปฐมวัยให้มีสุขภาวะที่ดี มีทักษะชีวิตและจิตสำนึกในการสร้างภูมิคุ้มกันจากปัจจัยเสี่ยง
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <Link 
                href="https://sites.google.com/obec.moe.go.th/positive/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-kids btn-kids-green inline-flex items-center"
              >
                เว็บไซต์โครงการ
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                href="/about/vision" 
                className="btn-kids btn-kids-blue inline-flex items-center"
              >
                ข้อมูลโครงการ
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PartnerTag label="พัฒนาทักษะชีวิต" color="bg-kids-yellow" />
              <PartnerTag label="ภูมิคุ้มกันปัจจัยเสี่ยง" color="bg-kids-pink" />
              <PartnerTag label="เด็กปฐมวัย" color="bg-kids-blue" />
              <PartnerTag label="ภาคเหนือ" color="bg-kids-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PartnerTag = ({ label, color }: { label: string, color: string }) => (
  <span className={`${color} px-4 py-2 rounded-full text-sm font-medium`}>
    {label}
  </span>
);