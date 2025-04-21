// app/about/contact/page.tsx
'use client'

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Printer, Heart, Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fffbea] pt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ติดต่อเรา</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">เราพร้อมให้บริการและรับฟังความคิดเห็นจากคุณ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Office Location - ChildPlusEst */}
          <div className="card-kids bg-white p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-kids-blue p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">สำนักงานของเรา</h2>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-kids-blue mb-6 h-64">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=%E0%B8%AA%E0%B8%84%E0%B8%A5.%20%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%87%E0%B8%94%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%89%E0%B8%B2%20StopDrink%20Network&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                aria-label="แผนที่สำนักงาน ChildPlusEst"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-kids-purple mt-1 mr-3 flex-shrink-0" />
                <p>
                  สำนักงาน ChildPlusEst<br />
                  110/287-288 ม.6 ซอยโพธิ์แก้ว แยก 4<br />
                  ถ.โพธิ์แก้ว แขวงคลองกุ่ม เขตบึงกุ่ม<br />
                  กทม. 10240
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-kids-green mr-3 flex-shrink-0" />
                <p>02 948 3300</p>
              </div>
              
              <div className="flex items-center">
                <Printer className="h-5 w-5 text-kids-orange mr-3 flex-shrink-0" />
                <p>02 948 3930</p>
              </div>
            </div>
          </div>
          
          {/* มูลนิธิทองทศ */}
          <div className="card-kids bg-white p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-kids-pink p-3 rounded-full mr-4">
                <Heart className="h-6 w-6 text-gray-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">มูลนิธิทองทศ</h2>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-kids-pink mb-6 h-64">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=79%20%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B8%AD%E0%B8%A1%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B1%E0%B8%A5%E0%B8%A2%E0%B8%B2%E0%B8%93%E0%B8%B5%20%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%20%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF%2010600&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                aria-label="แผนที่มูลนิธิทองทศ"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-kids-purple mt-1 mr-3 flex-shrink-0" />
                <p>
                  มูลนิธิทองทศ เพื่อการศึกษาและสาธารณประโยชน์<br />
                  79 ถนนอรุณอมรินทร์ตัดใหม่<br />
                  แขวงวัดกัลยาณี เขตธนบุรี<br />
                  กรุงเทพฯ 10600
                </p>
              </div>
              
              {/* <div className="flex items-center">
                <Phone className="h-5 w-5 text-kids-green mr-3 flex-shrink-0" />
                <p>02-XXX-XXXX</p>
              </div> */}
              
              {/* <div className="flex items-center">
                <Mail className="h-5 w-5 text-kids-yellow mr-3 flex-shrink-0" />
                <p>contact@thongthosfoundation.org</p>
              </div> */}
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
}