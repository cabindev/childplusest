// components/sub-navigation.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, Music, Users, Heart } from "lucide-react";

const SubNavigation = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  // ตรวจจับการเลื่อนเพื่อทำให้เมนูเป็น sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { name: "หน้าหลัก", href: "/", icon: <Home className="h-5 w-5" />, color: "bg-kids-yellow" },
    { name: "นิทาน", href: "/stories", icon: <Book className="h-5 w-5" />, color: "bg-kids-blue" },
    { name: "เพลง", href: "/songs", icon: <Music className="h-5 w-5" />, color: "bg-kids-green" },
    // { name: "กิจกรรม", href: "/activities", icon: <Heart className="h-5 w-5" />, color: "bg-kids-orange" },
    // { name: "ผู้ปกครอง", href: "/parents", icon: <Users className="h-5 w-5" />, color: "bg-kids-purple" },
  ];

  return (
    <div 
      className={`${
        isSticky 
          ? "sticky top-0 shadow-md animate-fadeIn" 
          : ""
      } z-30 bg-gradient-to-r from-[#fffceb] to-[#fffef2] border-b border-[#f3f4f6] transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center md:justify-start py-2 overflow-x-auto hide-scrollbar">
          {sections.map((section) => {
            const isActive = pathname === section.href || pathname.startsWith(`${section.href}/`);
            return (
              <Link
                key={section.name}
                href={section.href}
                className={`
                  flex items-center mx-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap relative overflow-hidden group
                  ${isActive 
                    ? `${section.color} text-gray-800 shadow-md` 
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-105"}
                `}
              >
                {/* เพิ่มเอฟเฟกต์เรืองแสงเมื่อ active */}
                {isActive && (
                  <span className="absolute inset-0 animate-pulse-slow opacity-30 bg-white rounded-full"></span>
                )}
                
                {/* เพิ่มลูกบอลตกแต่ง */}
                <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500"></span>
                
                <span className={`mr-1.5 ${isActive ? "animate-bounce-slow" : "group-hover:scale-110 transition-transform"}`}>
                  {section.icon}
                </span>
                <span className={`${isActive ? "font-bold" : "group-hover:font-semibold"} transition-all`}>
                  {section.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* เพิ่มสายรุ้ง indicator เมื่อกำลังเลื่อน */}
      {isSticky && (
        <div className="h-0.5 w-full bg-gradient-to-r from-kids-blue via-kids-purple to-kids-pink"></div>
      )}
    </div>
  );
};

export default SubNavigation;