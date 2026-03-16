// components/hero-section.tsx - คอมโพเนนต์ส่วนฮีโร่หน้าแรก

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#fffceb] py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* ส่วนซ้าย: ข้อความและปุ่ม */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight text-gray-800">
              มุ่งพัฒนาเด็กปฐมวัย
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              ให้มีสุขภาวะที่ดี มีทักษะชีวิตและจิตสำนึกในการสร้าง<strong className="text-[#4a90a4]">ภูมิคุ้มกันจากปัจจัยเสี่ยง</strong>
            </p>
          </div>
          
          {/* ส่วนขวา: รูปภาพ */}
          <div className="hidden md:block relative">
            <div className="relative w-full max-w-[400px] mx-auto">
              {/* วงกลมหลัก */}
              <div className="bg-gray-100 rounded-full overflow-hidden h-[300px] w-[300px] mx-auto relative">
                <Image
                  src="/img/Childplus.png" 
                  alt="Monkey with banana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* วงกลมตกแต่งบนขวา */}
              <div className="absolute -top-10 -right-10 h-16 w-16 bg-[#e6f7ff] rounded-full flex items-center justify-center z-10">
                <span className="text-3xl">🎓</span>
              </div>
              
              {/* วงกลมตกแต่งล่างซ้าย */}
              <div className="absolute -bottom-10 left-10 h-20 w-20 bg-[#ffe0e8] rounded-full flex items-center justify-center z-10">
                <span className="text-3xl">🎨</span>
              </div>
            </div>
            
            {/* เงารูปวงกลม (ตัวตกแต่งพื้นหลัง) */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#caecff] rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;