// app/stories/page.tsx - หน้านิทานพร้อม Analytics
'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, Filter, X } from "lucide-react";
import { books } from "./data/book";
import SearchBar from "./components/searchBar";

// Import Analytics functions
import { trackStoryClick, trackSearch, event } from "../lib/google-analytics";

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Analytics timer
  const startTimeRef = useRef<number>(Date.now());
  
  // สร้างหมวดหมู่ที่ไม่ซ้ำกัน
  const categories = Array.from(new Set(books.flatMap(book => book.tags)));
  
  // Track page view และ time on page
  useEffect(() => {
    startTimeRef.current = Date.now();
    
    // Track page view
    event({
      action: 'page_view',
      category: 'stories',
      label: 'stories_page'
    });

    // Track time spent when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) {
        event({
          action: 'time_on_page',
          category: 'engagement', 
          label: 'stories_page',
          value: timeSpent
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
  
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
    
    // Track search if there's a search term
    if (searchTerm && searchTerm.length >= 2) {
      trackSearch(searchTerm, filtered.length);
    }
  }, [searchTerm, selectedCategory]);

  // Handle story click with analytics
  const handleStoryClick = (book: any) => {
    trackStoryClick(book.title);
    
    // Track category if available
    if (book.tags && book.tags.length > 0) {
      event({
        action: 'story_click_by_category',
        category: 'content',
        label: `${book.tags[0]}_${book.title}`
      });
    }
    
    // Open story
    window.open(book.url, '_blank', 'noopener,noreferrer');
  };

  // Handle category selection with analytics
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    
    if (category) {
      event({
        action: 'filter_by_category',
        category: 'user_behavior',
        label: category
      });
    } else {
      event({
        action: 'clear_category_filter',
        category: 'user_behavior',
        label: 'all_stories'
      });
    }
  };

  // Handle clear all filters
  const handleClearAll = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    
    event({
      action: 'clear_all_filters',
      category: 'user_behavior',
      label: 'stories_page'
    });
  };

  return (
    <div className="py-12 px-4 bg-[#fffbea] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-kids-blue rounded-full mb-4 shadow-md animate-bounce-slow">
            <Book className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#3a3845]">นิทานปลูกพลังบวก</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#5a566a] mb-8">
            ร่วมผจญภัยไปกับเรื่องราวสนุกสนานที่จะเสริมสร้างจินตนาการและสอนบทเรียนชีวิตที่มีค่า
          </p>
          
          {/* ช่องค้นหา */}
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {/* Filter Section */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-kids ${showFilters ? 'btn-kids-purple' : 'btn-kids-yellow'} flex items-center gap-2`}
            >
              <Filter className="h-4 w-4" />
              หมวดหมู่
            </button>
            
            {selectedCategory && (
              <div className="flex items-center gap-2 bg-kids-pink px-4 py-2 rounded-full">
                <span className="text-sm font-medium">{selectedCategory}</span>
                <button 
                  onClick={() => handleCategorySelect(null)}
                  className="hover:bg-white/50 rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Category Filter Buttons */}
          {showFilters && (
            <div className="animate-fadeIn">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button
                  onClick={() => handleCategorySelect(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !selectedCategory 
                      ? 'bg-kids-blue text-gray-800' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  ทั้งหมด
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-kids-green text-gray-800'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* แสดงจำนวนหนังสือที่พบ */}
        <div className="mb-6 text-center">
          <p className="text-gray-500">
            พบ <span className="font-bold text-kids-purple">{filteredBooks.length}</span> เล่ม 
            {selectedCategory ? ` ในหมวด "${selectedCategory}"` : ""}
            {searchTerm ? ` สำหรับคำค้นหา "${searchTerm}"` : ""}
          </p>
        </div>

        {/* กริดแสดงหนังสือ */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book, index) => (
              <div 
                key={index} 
                className="card-kids bg-white group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-kids-yellow rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                
                <div className="relative pt-6 px-6">
                  <div className="relative h-64 overflow-hidden rounded-xl mb-4 bg-gray-50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={book.img}
                      alt={book.title}
                      width={220}
                      height={280}
                      className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                  
                  {/* Book title and tag */}
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 min-h-[3.5rem] text-[#3a3845] group-hover:text-kids-purple transition-colors">
                    {book.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.tags.slice(0, 1).map((tag, i) => (
                      <span key={i} className="text-xs py-1 px-2 bg-kids-yellow rounded-full text-gray-700 group-hover:bg-kids-pink transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 pt-0">
                  <button
                    onClick={() => handleStoryClick(book)}
                    className="btn-kids btn-kids-blue block text-center w-full hover:btn-kids-purple transform hover:scale-105 transition-all duration-200 relative overflow-hidden"
                  >
                    <span className="relative z-10">อ่านเลย</span>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm animate-fadeIn">
            <div className="inline-block p-4 bg-kids-pink rounded-full mb-4 animate-wiggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">ไม่พบนิทานที่ตรงกับการค้นหา</h3>
            <p className="text-gray-500 mb-4">กรุณาลองค้นหาด้วยคำค้นอื่น หรือเลือกหมวดหมู่อื่น</p>
            <button 
              onClick={handleClearAll}
              className="btn-kids btn-kids-yellow hover:btn-kids-orange transition-all"
            >
              ดูนิทานทั้งหมด
            </button>
          </div>
        )}

        {/* ปุ่มกลับหน้าหลัก */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            onClick={() => {
              event({
                action: 'navigation',
                category: 'user_behavior',
                label: 'stories_to_home'
              });
            }}
            className="btn-kids btn-kids-peach hover:btn-kids-orange transition-all inline-flex items-center gap-2"
          >
            <span>←</span>
            กลับหน้าหลัก
          </Link>
        </div>

        {/* Floating decorative elements */}
        <div className="fixed -z-10 top-20 left-10 w-16 h-16 bg-kids-yellow rounded-full opacity-30 animate-float"></div>
        <div className="fixed -z-10 top-40 right-10 w-12 h-12 bg-kids-blue rounded-full opacity-30 animate-float animation-delay-1000"></div>
        <div className="fixed -z-10 bottom-20 left-20 w-20 h-20 bg-kids-pink rounded-full opacity-30 animate-float animation-delay-2000"></div>
      </div>
    </div>
  );
}