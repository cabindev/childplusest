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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-[#f8b195]">Learn, Play</span>
              <span className="block text-[#a3daff]">and Grow</span>
              <span className="block text-[#c3b4f7]">Together!</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-md mx-auto md:mx-0 text-gray-700">
              โลกที่สนุกและเต็มไปด้วยสีสันสำหรับเด็กๆ ที่จะได้เรียนรู้ผ่านเกม นิทาน และกิจกรรมแบบโต้ตอบ
            </p>
            
            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link 
                href="/games" 
                className="bg-[#e7eeff] text-gray-700 px-6 py-3 rounded-full font-medium hover:shadow-md transition-shadow"
              >
                Start Learning
              </Link>
              <Link 
                href="/parents" 
                className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:shadow-md transition-shadow"
              >
                Parent Guide
              </Link>
            </div> */}
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