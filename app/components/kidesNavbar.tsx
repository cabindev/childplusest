// components/kidesNavbar.tsx 
"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, Smile, Sun, Music, Heart, PhoneCall, Home } from "lucide-react";

const KidsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md rounded-b-3xl px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* โลโก้ - ปรับปรุงให้ใช้รูปภาพ */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-16 h-16 overflow-hidden rounded-full">
            <Image
              src="/img/logo.png"
              alt="ChildPlusEst Logo"
              fill
              priority
              className="object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* แทนที่ด้วยสีปกติที่มองเห็นได้ชัดแทนการใช้ gradient + transparent */}
          <div className="relative">
            <h1 className="text-3xl font-bold text-kids-purple">
              ChildPlusest
            </h1>
            {/* เส้นใต้เปลี่ยนเป็นสีที่เห็นชัดเจน */}
            <div className="absolute -bottom-1 left-0 h-1 bg-kids-pink w-0 group-hover:w-full transition-all duration-300"></div>
          </div>

          <Sun className="h-8 w-8 text-yellow-400 animate-spin-slow group-hover:animate-wiggle" />
        </Link>

        {/* เมนูบนเดสก์ท็อป */}
        <div className="hidden md:flex space-x-4">
          {/* เพิ่มปุ่ม Home */}
          <NavItem
            href="/"
            icon={<Home className="h-6 w-6" />}
            label="หน้าแรก"
            color="bg-kids-yellow"
          />
          <NavItem
            href="/stories"
            icon={<Book className="h-6 w-6" />}
            label="นิทาน"
            color="bg-kids-blue"
          />
          <NavItem
            href="/songs"
            icon={<Music className="h-6 w-6" />}
            label="เพลง"
            color="bg-kids-green"
          />
          {/* เพิ่มปุ่ม Vision */}
          <NavItem
            href="/about/vision"
            icon={<Smile className="h-6 w-6" />}
            label="วิสัยทัศน์"
            color="bg-kids-orange"
          />
          {/* เพิ่มปุ่ม Terms */}
          <NavItem
            href="/about/terms"
            icon={<Heart className="h-6 w-6" />}
            label="นิยามศัพท์"
            color="bg-kids-purple"
          />
          {/* เมนูติดต่อ */}
          <NavItem
            href="/about/contact"
            icon={<PhoneCall className="h-6 w-6" />}
            label="ติดต่อ"
            color="bg-kids-pink"
          />
        </div>

        {/* ปุ่มเมนูบนมือถือ */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-kids-purple hover:bg-purple-200 transition-colors relative overflow-hidden group"
            aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            <span className="sr-only">{isOpen ? "ปิดเมนู" : "เปิดเมนู"}</span>
            <span className="absolute inset-0 bg-kids-pink scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></span>
            <svg
              className="h-6 w-6 relative z-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* เมนูบนมือถือ */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 grid grid-cols-3 gap-3">
          {/* เพิ่มปุ่ม Home ในโหมดมือถือ */}
          <NavItem
            href="/"
            icon={<Home className="h-6 w-6" />}
            label="หน้าแรก"
            color="bg-kids-yellow"
            mobile
          />
          <NavItem
            href="/stories"
            icon={<Book className="h-6 w-6" />}
            label="นิทาน"
            color="bg-kids-blue"
            mobile
          />
          <NavItem
            href="/songs"
            icon={<Music className="h-6 w-6" />}
            label="เพลง"
            color="bg-kids-green"
            mobile
          />
          {/* เพิ่มปุ่ม Vision ในโหมดมือถือ */}
          <NavItem
            href="/about/vision"
            icon={<Smile className="h-6 w-6" />}
            label="วิสัยทัศน์"
            color="bg-kids-orange"
            mobile
          />
          {/* เพิ่มปุ่ม Terms ในโหมดมือถือ */}
          <NavItem
            href="/about/terms"
            icon={<Heart className="h-6 w-6" />}
            label="นิยามศัพท์"
            color="bg-kids-purple"
            mobile
          />
          {/* เพิ่มเมนูติดต่อในโหมดมือถือ */}
          <NavItem
            href="/about/contact"
            icon={<PhoneCall className="h-6 w-6" />}
            label="ติดต่อ"
            color="bg-kids-pink"
            mobile
          />
        </div>
      )}
    </nav>
  );
};

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  mobile?: boolean;
};

const NavItem = ({ href, icon, label, color, mobile = false }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`${color} ${
        mobile ? "flex flex-col items-center p-3" : "flex items-center space-x-2 px-3 py-2"
      } rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group`}
    >
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      <span className={`${mobile ? "mb-1" : ""} transform group-hover:scale-110 transition-transform duration-300 z-10`}>
        {icon}
      </span>
      <span className="z-10 group-hover:font-bold transition-all duration-300">
        {label}
      </span>
      
      {/* เอฟเฟกต์ลูกบอลเล็กๆ เมื่อ hover */}
      <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500"></span>
      <span className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-white opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500 delay-100"></span>
    </Link>
  );
};

export default KidsNavbar;