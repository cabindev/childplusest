// app/components/buddhist-lent-registration.tsx
'use client';

import { Clock, FileText, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const BuddhistLentRegistration = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[400px] lg:h-[500px] bg-gradient-to-b from-yellow-50 to-amber-50" />;
  }

  return (
    <section className="relative w-full min-h-[400px] lg:h-[560px] bg-gradient-to-b from-yellow-500 to-amber-50 overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-full items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            
            {/* Header Badge - Microsoft Style */}
            <div className="inline-flex items-center gap-2 bg-white border border-yellow-200 px-4 py-2 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-medium text-sm">โครงการส่งเสริมสุขภาพ</span>
            </div>

            {/* Main Title - Clean Typography */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
                <span className="block">ลงทะเบียนรับสื่อรณรงค์</span>
                <span className="block text-amber-600 font-bold">
                  งดเหล้าเข้าพรรษา 2568
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-gray-600 justify-center lg:justify-start">
                <Users className="w-5 h-5 text-amber-500" />
                <p className="text-base lg:text-lg font-medium">สำหรับสถานศึกษาทุกระดับทั่วประเทศ</p>
              </div>
            </div>

            {/* Info Cards - Microsoft Card Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              
              {/* Deadline Card */}
              <div className=" transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-600 mb-1">หมดเขตลงทะเบียน</p>
                    <p className="text-gray-900 font-semibold text-base">30 มิถุนายน 2568</p>
                  </div>
                </div>
              </div>

              {/* Benefits Card */}
              <div className=" transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600 mb-1">รับสื่อรณรงค์</p>
                    <p className="text-gray-900 font-semibold text-base">ฟรี ไม่มีค่าใช้จ่าย</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Microsoft Style */}
            <div className="pt-4 text-center lg:text-left">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScnYo-Px4lcub4O7WgAmmRvrFLwJrXoYrx7ey6BIQX5FL4j_w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-base lg:text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <FileText className="w-5 h-5" />
                <span>ลงทะเบียนทันที</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  →
                </div>
              </a>
              
              {/* Contact Info */}
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <div className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <svg 
                      className="w-4 h-4 text-amber-600" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100068312467386" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium transition"
                    >
                      สอบถามเพิ่มเติม
                    </a>
                  </div>
                  <span className="text-gray-400 hidden sm:inline">|</span>
                  <span>พัฒนาโดย ChildPlusEst</span>
                </div>
                <p className="text-center lg:text-left">
                  กรอกข้อมูลง่าย ๆ ใช้เวลาเพียง 2-3 นาที
                </p>
              </div>
            </div>

          </div>

          {/* Right Content - Logo */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              
              {/* Logo Container - Clean Style */}
              <div className="relative bg-white rounded-full p-8 lg:p-10 shadow-lg border border-gray-100">
                <div className="relative w-36 h-36 lg:w-48 lg:h-48">
                  <Image
                    src="/img/Buddhist-lent.png"
                    alt="โลโก้เทศกาลงดเหล้าเข้าพรรษา"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Year Badge - Minimal Style */}
                <div className="absolute -top-2 -right-2 bg-amber-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  2568
                </div>
              </div>
              
              {/* Subtle Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-amber-100/20 rounded-full scale-110 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuddhistLentRegistration;