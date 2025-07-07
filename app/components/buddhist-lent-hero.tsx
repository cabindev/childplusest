// app/components/buddhist-lent-hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Flower2, ExternalLink, Star, Sparkles, Play } from 'lucide-react';

const BuddhistLentHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[500px] lg:h-[700px] bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />;
  }

  return (
    <section className="relative w-full min-h-[500px] lg:h-[700px] bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-300 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-100/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-yellow-200">
              <Flower2 className="w-4 h-4 text-amber-600" />
              <span className="text-amber-800 font-medium text-sm">โครงการส่งเสริมสุขภาพ</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
                <span className="block">โครงการฤดูกาลฝึกสติ</span>
                <span className="block bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
                  และรณรงค์งดเหล้าเข้าพรรษา
                </span>
              </h1>
              
              {/* Quote Badge */}
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-yellow-300/20 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-yellow-300" />
                  <span className="text-yellow-200 font-medium text-xs lg:text-sm">แนวคิด</span>
                </div>
                <p className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                  "มีสติ มีสุข ทุกโอกาส"
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-yellow-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ร่วมสร้างสุขภาวะที่ดีผ่านการฝึกสติและการใช้ชีวิตอย่างมีสติสัมปชัญญะ 
              เพื่อสุขภาพกายและใจที่แข็งแรงในช่วงเข้าพรรษา
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-2">
              <Link
                href="https://healthy-sobriety.sdnthailand.com/Buddhist-Lent"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-600/80 to-amber-600/80 hover:from-yellow-700/90 hover:to-amber-700/90 text-white font-semibold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-3.5 rounded-full shadow-lg hover:shadow-xl backdrop-blur-sm border border-yellow-400/30 transform hover:scale-105 transition-all duration-300"
              >
                <span>เรียนรู้เพิ่มเติม</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start text-yellow-200/80 text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>โครงการดำเนินการต่อเนื่อง</span>
              </div>
              <span className="text-yellow-300/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span>ส่งเสริมสุขภาวะองค์รวม</span>
              </div>
            </div>

          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-amber-300/20 to-orange-300/20 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/10 via-amber-400/10 to-orange-400/10 rounded-3xl transform -rotate-2 scale-110"></div>
                
                {/* Image */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/img/khonken.JPG"
                      alt="โครงการฤดูกาลฝึกสติและรณรงค์งดเหล้าเข้าพรรษา"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Image Badge */}
                  <div className="absolute top-4 left-4 bg-yellow-400 text-amber-900 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    2568
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-300/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-200/50 animate-float">
                <Star className="w-6 h-6 text-yellow-100" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-amber-200/50 animate-float animation-delay-1000">
                <Flower2 className="w-8 h-8 text-amber-100" />
              </div>
              
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-orange-300/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-200/50 animate-bounce-slow animation-delay-500">
                <Sparkles className="w-4 h-4 text-orange-100" />
              </div>
            </div>
          </div>

        </div>
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

export default BuddhistLentHero;