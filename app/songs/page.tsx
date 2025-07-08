// app/songs/page.tsx - เพิ่ม Analytics
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Music, Search, Filter, X } from 'lucide-react';
import { event, trackSearch } from '../lib/google-analytics';

interface Song {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
}

export default function SongPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  
  // Track page view และ time on page
  useEffect(() => {
    startTimeRef.current = Date.now();
    
    // Track page view
    event({
      action: 'page_view',
      category: 'songs',
      label: 'songs_page'
    });

    // Track time spent when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) {
        event({
          action: 'time_on_page',
          category: 'engagement',
          label: 'songs_page',
          value: timeSpent
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
  
  // ข้อมูลเพลงจาก YouTube ที่คุณให้มา
  const songs: Song[] = [
    {
      id: 'FPYNXA5Jww8',
      title: 'เพลงสวัสดี | Hello Song in Thai',
      thumbnail: `https://img.youtube.com/vi/FPYNXA5Jww8/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=FPYNXA5Jww8',
      category: 'เพลงทักทาย'
    },
    {
      id: 'S9_IFW4Ha5g',
      title: 'กระจง ก่ง ก๊ง | เพลงเด็ก',
      thumbnail: `https://img.youtube.com/vi/S9_IFW4Ha5g/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=S9_IFW4Ha5g',
      category: 'เพลงเทศกาล'
    },
    {
      id: 'rfgUOQC9z0Q',
      title: 'เพลงโยกเยก | Rocking Song in Thai',
      thumbnail: `https://img.youtube.com/vi/rfgUOQC9z0Q/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=rfgUOQC9z0Q',
      category: 'เพลงเต้น'
    },
    {
      id: '5jeGZ3qoPUs',
      title: 'เพลงล้างมือ | Wash Your Hands Song in Thai',
      thumbnail: `https://img.youtube.com/vi/5jeGZ3qoPUs/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=5jeGZ3qoPUs',
      category: 'เพลงสุขอนามัย'
    },
    {
      id: 'o44QF3zL1m4',
      title: 'เพลงนับ 1-10 | Counting Song in Thai',
      thumbnail: `https://img.youtube.com/vi/o44QF3zL1m4/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=o44QF3zL1m4',
      category: 'เพลงเรียนรู้'
    },
    {
      id: 'MCAIrj7Ruho',
      title: 'เพลงสี | Colors Song in Thai',
      thumbnail: `https://img.youtube.com/vi/MCAIrj7Ruho/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=MCAIrj7Ruho',
      category: 'เพลงเรียนรู้'
    },
    {
      id: 'wsAR1Kx2kJg',
      title: 'เพลงช้าง | Elephant Song in Thai',
      thumbnail: `https://img.youtube.com/vi/wsAR1Kx2kJg/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=wsAR1Kx2kJg',
      category: 'เพลงสัตว์'
    },
    {
      id: 'FCdK1gQYkkQ',
      title: 'เพลงก.ไก่ | Thai Alphabet Song',
      thumbnail: `https://img.youtube.com/vi/FCdK1gQYkkQ/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=FCdK1gQYkkQ',
      category: 'เพลงเรียนรู้'
    },
    {
      id: '0n9ZhwDsU7w',
      title: 'เพลงนิ้วโป้งอยู่ไหน | Where is Thumbkin in Thai',
      thumbnail: `https://img.youtube.com/vi/0n9ZhwDsU7w/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=0n9ZhwDsU7w',
      category: 'เพลงเต้น'
    },
    {
      id: 'EjYE958gfW4',
      title: 'เพลงรูปทรง | Shapes Song in Thai',
      thumbnail: `https://img.youtube.com/vi/EjYE958gfW4/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=EjYE958gfW4',
      category: 'เพลงเรียนรู้'
    },
  ];

  // กรองเพลงตามคำค้นหาและหมวดหมู่
  const filteredSongs = songs.filter(song => {
    const matchesSearch = searchTerm 
      ? song.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchesCategory = selectedCategory 
      ? song.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // สร้างรายการหมวดหมู่ที่ไม่ซ้ำกัน
  const categories = Array.from(new Set(songs.map(song => song.category)));
  
  // สร้างสีสำหรับแต่ละหมวดหมู่
  const categoryColors: Record<string, string> = {
    'เพลงทักทาย': 'bg-kids-blue',
    'เพลงกิจวัตรประจำวัน': 'bg-kids-green',
    'เพลงสุขอนามัย': 'bg-kids-pink',
    'เพลงเรียนรู้': 'bg-kids-yellow',
    'เพลงสัตว์': 'bg-kids-orange',
    'เพลงเต้น': 'bg-kids-purple',
    'เพลงเทศกาล': 'bg-kids-peach'
  };

  // Handle search with analytics
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const resultCount = songs.filter(song =>
        song.title.toLowerCase().includes(term.toLowerCase())
      ).length;
      trackSearch(term, resultCount);
    }
  };

  // Handle song click with analytics
  const handleSongClick = (song: Song) => {
    event({
      action: 'song_click',
      category: 'content',
      label: song.title
    });

    event({
      action: 'external_link_click',
      category: 'outbound_links',
      label: `youtube_${song.title}`
    });

    if (song.category) {
      event({
        action: 'song_click_by_category',
        category: 'content',
        label: `${song.category}_${song.title}`
      });
    }

    window.open(song.url, '_blank', 'noopener,noreferrer');
  };

  // Handle category filter with analytics
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
        label: 'all_songs'
      });
    }
  };

  // Handle clear all filters
  const handleClearAll = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    
    event({
      action: 'clear_all_filters',
      category: 'user_behavior',
      label: 'songs_page'
    });
  };

  return (
    <div className="py-12 px-4 bg-[#fffbea] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-kids-pink rounded-full mb-4 shadow-md animate-bounce-slow">
            <Music className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#3a3845]">เพลงแสนสนุก</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#5a566a] mb-8">
            ร้องเพลงและเต้นไปด้วยกันกับเพลงสนุกๆ ที่ช่วยส่งเสริมการเรียนรู้
          </p>
          
          {/* ช่องค้นหา */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาเพลง..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-lg rounded-full border-2 border-kids-pink focus:border-kids-purple focus:outline-none"
              />
              <Search className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
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

        {/* แสดงจำนวนเพลงที่พบ */}
        <div className="mb-6 text-center">
          <p className="text-gray-500">
            พบ <span className="font-bold text-kids-purple">{filteredSongs.length}</span> เพลง 
            {selectedCategory ? ` ในหมวด "${selectedCategory}"` : ""}
            {searchTerm ? ` สำหรับคำค้นหา "${searchTerm}"` : ""}
          </p>
        </div>

        {/* กริดแสดงเพลง */}
        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSongs.map((song, index) => (
              <div key={song.id} className="block group">
                <div 
                  className="card-kids bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* รูปภาพเพลง */}
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={song.thumbnail}
                        alt={song.title}
                        width={640}
                        height={360}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* ปุ่มเล่นวิดีโอ */}
                    <button
                      onClick={() => handleSongClick(song)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 bg-kids-pink bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="white" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* หมวดหมู่ */}
                    <div className="absolute top-3 right-3">
                      <span className={`${categoryColors[song.category] || 'bg-gray-200'} text-xs font-bold px-3 py-1 rounded-full`}>
                        {song.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* รายละเอียดเพลง */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold line-clamp-2 min-h-[3.5rem] group-hover:text-kids-purple transition-colors">{song.title}</h3>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm text-gray-500">YouTube</span>
                      <span className="text-sm bg-kids-peach px-3 py-1 rounded-full group-hover:bg-kids-pink transition-colors">เล่นเพลง</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm animate-fadeIn">
            <div className="inline-block p-4 bg-kids-pink rounded-full mb-4 animate-wiggle">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">ไม่พบเพลงที่ตรงกับการค้นหา</h3>
            <p className="text-gray-500 mb-4">กรุณาลองค้นหาด้วยคำค้นอื่น หรือเลือกหมวดหมู่อื่น</p>
            <button 
              onClick={handleClearAll}
              className="btn-kids btn-kids-yellow hover:btn-kids-orange transition-all"
            >
              ดูเพลงทั้งหมด
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
                label: 'songs_to_home'
              });
            }}
            className="btn-kids btn-kids-peach hover:btn-kids-orange transition-all inline-flex items-center gap-2"
          >
            <span>←</span>
            กลับหน้าหลัก
          </Link>
        </div>

        {/* ลูกบอลตกแต่ง */}
        <div className="fixed -z-10 top-20 left-10 w-16 h-16 bg-kids-yellow rounded-full opacity-30 animate-float"></div>
        <div className="fixed -z-10 top-40 right-10 w-12 h-12 bg-kids-blue rounded-full opacity-30 animate-float animation-delay-1000"></div>
        <div className="fixed -z-10 bottom-20 left-20 w-20 h-20 bg-kids-pink rounded-full opacity-30 animate-float animation-delay-2000"></div>
      </div>
    </div>
  );
}