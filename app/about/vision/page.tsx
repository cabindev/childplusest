'use client'

import React from 'react';
import Image from 'next/image';
import { Star, Leaf, Shield, Users, Brain, Heart } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fffbea] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animation */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">ร่วมสร้างรากฐานที่แข็งแกร่งให้กับเด็กปฐมวัย</p>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/4 animate-float">
            <Star className="h-8 w-8 text-kids-yellow" fill="#FFEDA3" />
          </div>
          <div className="absolute top-0 right-1/4 animate-float animation-delay-1000">
            <Star className="h-6 w-6 text-kids-blue" fill="#A3E5FF" />
          </div>
          <div className="absolute bottom-0 left-1/3 animate-float animation-delay-2000">
            <Star className="h-5 w-5 text-kids-pink" fill="#FFCFE6" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="card-kids bg-white p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kids-yellow via-kids-green to-kids-purple"></div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="bg-kids-yellow p-2 rounded-full mr-4">
              <Star className="h-6 w-6 text-gray-700" />
            </div>
            วิสัยทัศน์ (Vision)
          </h2>
          
          <div className="bg-kids-peach p-6 rounded-2xl shadow-kids-yellow relative">
            <div className="absolute -top-3 -right-3 bg-kids-yellow w-12 h-12 rounded-full flex items-center justify-center transform rotate-12 animate-wiggle">
              <span className="text-xl font-bold">✨</span>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              "มุ่งพัฒนาเด็กปฐมวัยให้มีสุขภาวะที่ดี มีทักษะชีวิตและจิตสำนึกในการสร้างภูมิคุ้มกันจากปัจจัยเสี่ยง 
              สร้างการมีส่วนร่วมของครู ผู้ปกครอง ชุมชน และการบูรณาการความร่วมมือกับหน่วยงานที่เกี่ยวข้อง 
              เพื่อวางรากฐานคุณภาพชีวิตให้กับเด็กเติบโตเป็นพลเมืองที่ดี"
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="card-kids bg-white p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kids-blue via-kids-purple to-kids-pink"></div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="bg-kids-blue p-2 rounded-full mr-4">
              <Leaf className="h-6 w-6 text-gray-700" />
            </div>
            พันธกิจ (Mission)
          </h2>
          
          <div className="bg-kids-peach p-6 rounded-2xl shadow-kids-blue">
            <p className="text-lg text-gray-700 leading-relaxed">
              สร้างสุขภาวะที่ดีให้กับเด็กปฐมวัยทั้งในสถานศึกษาและนอกระบบสถานศึกษามุ่งเน้นเด็กปฐมวัย 
              อายุระหว่าง 2-6 ปี ให้มีทักษะชีวิต ส่งเสริมความรอบรู้และการพัฒนากิจกรรมปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยง
              (เหล้า บุหรี่ บุหรี่ไฟฟ้า สิ่งเสพติด การพนัน เกมส์ออนไลน์และอบายมุข) เป็นภูมิคุ้มกันร่วมกับครูปฐมวัย 
              ผู้บริหารสถานศึกษา สร้างการมีส่วนร่วมของผู้ปกครอง ชุมชน รวมทั้งองค์กร หน่วยงานที่เกี่ยวข้อง 
              สู่สุขภาวะที่ดีของเด็กปฐมวัย (Health Literacy childhood)
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="card-kids bg-white p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kids-green via-kids-orange to-kids-purple"></div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="bg-kids-green p-2 rounded-full mr-4">
              <Brain className="h-6 w-6 text-gray-700" />
            </div>
            วัตถุประสงค์ (Objective)
          </h2>
          
          <div className="space-y-6">
            <ObjectiveCard 
              number="1" 
              color="bg-kids-yellow"
              content="เพื่อให้เด็กปฐมวัยมีทักษะชีวิตเป็นภูมิคุ้มกันปัจจัยเสี่ยง และครูผู้สอน ผู้บริหารสถานศึกษา ผู้เกี่ยวข้องมีความรู้ ความเข้าใจในการจัดกิจกรรมปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยง สำหรับเด็กปฐมวัย และมีความสามารถบริหารจัดการโครงการได้อย่างมีประสิทธิภาพ" 
            />
            
            <ObjectiveCard 
              number="2" 
              color="bg-kids-blue"
              content="เพื่อให้เกิดกลไกและเครือข่ายความร่วมมือในการบูรณาการในการขยายผลสู่แผนพัฒนาการศึกษาในระดับภูมิภาค ระดับจังหวัด (Governance) และนำไปสู่การปฏิบัติของสถานศึกษาทุกแห่งที่เข้าร่วมโครงการ ครอบคลุมการศึกษาปฐมวัยและการศึกษาขั้นพื้นฐาน บรรลุตามเป้าประสงค์ การดำเนินงานโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงสำหรับเด็กปฐมวัย" 
            />
            
            <ObjectiveCard 
              number="3" 
              color="bg-kids-green"
              content="เพื่อให้เกิดสื่อสร้างสรรค์สำหรับรณรงค์สร้างความตระหนักจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยง สำหรับเด็กปฐมวัย ครู ผู้ปกครอง ชุมชน และผู้เกี่ยวข้องเผยแพร่ประชาสัมพันธ์สู่สาธารณะ" 
            />
            
            <ObjectiveCard 
              number="4" 
              color="bg-kids-pink"
              content="เพื่อศึกษา วิเคราะห์ วิจัยพัฒนา ผลลัพธ์และผลกระทบด้านทักษะชีวิตของเด็กปฐมวัยที่ผ่านการจัดกิจกรรมปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยง สู่สุขภาวะที่ดีของเด็กปฐมวัยต่อยอดไปยังการป้องกันสิ่งเสพติดชนิดอื่น และพัฒนาชุดกิจกรรมรวมทั้งสื่อประกอบตามช่วงอายุวัยในระดับประถมศึกษา" 
            />
          </div>
        </div>
        
        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">ร่วมสร้างภูมิคุ้มกันให้กับเด็กไทย</h3>
          <button className="btn-kids btn-kids-purple">
            ติดต่อเรา
            <span className="ml-2">➜</span>
          </button>
        </div> */}
        
      </div>
    </div>
  );
}

function ObjectiveCard({ number, color, content }: { number: string, color: string, content: string }) {
  return (
    <div className={`bg-kids-peach p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg relative overflow-hidden flex card-hover-effect`}>
      <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0`}>
        {number}
      </div>
      <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}