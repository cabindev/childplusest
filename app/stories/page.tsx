// app/stories/page.tsx - หน้านิทาน
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book } from "lucide-react";
import { books } from "./data/book";
import SearchBar from "./components/searchBar";

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // สร้างหมวดหมู่ที่ไม่ซ้ำกัน
  const categories = Array.from(new Set(books.flatMap(book => book.tags)));
  
  // กรองหนังสือเมื่อมีการค้นหาหรือเลือกหมวดหมู่
  useEffect(() => {
    const filtered = books.filter(book => {
      // กรองตามคำค้นหา
      const matchesSearch = searchTerm 
        ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      
      // กรองตามหมวดหมู่
      const matchesCategory = selectedCategory 
        ? book.tags.includes(selectedCategory)
        : true;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-12 px-4 bg-[#fffbea] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-kids-blue rounded-full mb-4 shadow-md">
            <Book className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#3a3845]">นิทานปลูกพลังบวก</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#5a566a] mb-8">
            ร่วมผจญภัยไปกับเรื่องราวสนุกสนานที่จะเสริมสร้างจินตนาการและสอนบทเรียนชีวิตที่มีค่า
          </p>
          
          {/* ช่องค้นหา */}
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          

        </div>

        {/* แสดงจำนวนหนังสือที่พบ */}
        <div className="mb-6 text-center">
          <p className="text-gray-500">
            ทั้งหมด {filteredBooks.length} เล่ม {selectedCategory ? `ในหมวด "${selectedCategory}"` : ""}
            {searchTerm ? ` สำหรับคำค้นหา "${searchTerm}"` : ""}
          </p>
        </div>

        {/* กริดแสดงหนังสือ */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book, index) => (
              <div 
                key={index} 
                className="card-kids bg-white group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative pt-6 px-6">
                  <div className="relative h-64 overflow-hidden rounded-xl mb-4 bg-gray-50 flex items-center justify-center shadow-sm">
                    <Image
                      src={book.img}
                      alt={book.title}
                      width={220}
                      height={280}
                      className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Book title and tag */}
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 min-h-[3.5rem] text-[#3a3845]">{book.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.tags.slice(0, 1).map((tag, i) => (
                      <span key={i} className="text-xs py-1 px-2 bg-kids-yellow rounded-full text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 pt-0">
                  <Link 
                    href={book.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-kids btn-kids-blue block text-center w-full"
                  >
                    อ่านเลย
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <div className="inline-block p-4 bg-kids-pink rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">ไม่พบนิทานที่ตรงกับการค้นหา</h3>
            <p className="text-gray-500 mb-4">กรุณาลองค้นหาด้วยคำค้นอื่น หรือดูนิทานทั้งหมด</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}
              className="btn-kids btn-kids-yellow"
            >
              ดูนิทานทั้งหมด
            </button>
          </div>
        )}
      </div>
    </div>
  );
}