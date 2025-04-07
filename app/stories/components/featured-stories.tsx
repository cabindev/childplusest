// app/stories/components/featured-stories.tsx
'use client';

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, ChevronLeft, ChevronRight } from "lucide-react";
import { books } from "../data/book";

export default function FeaturedStories() {
  const bookSliderRef = useRef<HTMLDivElement>(null);
  
  // เลือกแค่ 6 เล่มแรกสำหรับแสดงในหน้าหลัก
  const featuredBooks = books.slice(0, 6);

  // ฟังก์ชันเลื่อนซ้ายและขวา
  const scrollLeft = () => {
    if (bookSliderRef.current) {
      bookSliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (bookSliderRef.current) {
      bookSliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#fffbea]">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-kids-blue rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
            <Book className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            นิทานปลูกพลังบวก
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-kids-blue via-kids-purple to-kids-pink transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-4">
            ร่วมผจญภัยไปกับเรื่องราวสนุกสนานที่จะเสริมสร้างจินตนาการและสอนบทเรียนชีวิต
          </p>
          <Link 
            href="/stories" 
            className="inline-block btn-kids btn-kids-yellow mt-2 transform hover:translate-y-[-4px] transition-transform"
          >
            ดูนิทานทั้งหมด
          </Link>
        </div>

        {/* รายการนิทานแบบเลื่อนได้ */}
        <div className="relative mt-8">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10">
            <button 
              onClick={scrollLeft}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors transform hover:scale-110 hover:bg-kids-yellow/20"
              aria-label="เลื่อนไปทางซ้าย"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div 
            ref={bookSliderRef}
            className="flex overflow-x-auto gap-6 pb-4 scroll-smooth hide-scrollbar px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredBooks.map((book, index) => (
              <div 
                key={index} 
                className="card-kids bg-white flex-none w-64 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-60 overflow-hidden rounded-t-3xl">
                  <Image
                    src={book.img}
                    alt={book.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Full size overlay image on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-[90%] max-h-[90%] m-auto">
                      <Image
                        src={book.img}
                        alt={book.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-5 relative">
                  {/* เพิ่มลูกบอลตกแต่งเมื่อ hover */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-kids-blue opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                  
                  <h3 className="text-lg font-bold mb-4 h-14 line-clamp-2 relative z-10">{book.title}</h3>
                  <Link 
                    href={book.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-kids btn-kids-blue block text-center w-full text-sm hover:px-8 transition-all relative z-10"
                  >
                    อ่านเลย
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10">
            <button 
              onClick={scrollRight}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors transform hover:scale-110 hover:bg-kids-yellow/20"
              aria-label="เลื่อนไปทางขวา"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* เพิ่ม CSS สำหรับซ่อน scrollbar */}
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}