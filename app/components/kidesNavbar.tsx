// app/components/kidesNavbar.tsx - เพิ่ม Analytics
"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Book, Smile, Sun, Music, Heart, PhoneCall, Home, Users, Newspaper, Info, ChevronDown } from "lucide-react";
import { event } from "../lib/google-analytics";

const KidsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Effect to handle scroll and show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show navbar after scrolling down 100px
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Track navigation clicks
  const handleNavClick = (destination: string, label: string) => {
    event({
      action: 'navigation_click',
      category: 'navigation',
      label: `${label}_from_${pathname}`
    });
  };

  // Track mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
    event({
      action: 'mobile_menu_toggle',
      category: 'navigation',
      label: isOpen ? 'close' : 'open'
    });
  };

  // Track about dropdown
  const handleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    event({
      action: 'about_dropdown_toggle',
      category: 'navigation',
      label: isAboutOpen ? 'close' : 'open'
    });
  };

  // Track logo click
  const handleLogoClick = () => {
    event({
      action: 'logo_click',
      category: 'navigation',
      label: `home_from_${pathname}`
    });
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md rounded-b-3xl px-4 py-2 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* โลโก้ */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center space-x-2 group">
          <div className="relative w-16 h-16 overflow-hidden rounded-full">
            <Image
              src="/img/Childplus.png"
              alt="ChildPlusEst Logo"
              fill
              priority
              className="object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="relative">
            <h1 className="text-3xl font-bold text-blue-600">
              ChildPlusest
            </h1>
            <div className="absolute -bottom-1 left-0 h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"></div>
          </div>

          <Sun className="h-8 w-8 text-yellow-400 animate-spin-slow group-hover:animate-wiggle" />
        </Link>

        {/* เมนูบนเดสก์ท็อป */}
        <div className="hidden md:flex space-x-4">
          <NavItem
            href="/"
            icon={<Home className="h-5 w-5" />}
            label="Home"
            color="bg-blue-100 text-blue-700"
            onAnalyticsClick={() => handleNavClick("/", "Home")}
            isActive={pathname === "/"}
          />
          <NavItem
            href="/news"
            icon={<Newspaper className="h-5 w-5" />}
            label="News"
            color="bg-green-100 text-green-700"
            onAnalyticsClick={() => handleNavClick("/news", "News")}
            isActive={pathname.startsWith("/news")}
          />
          <NavItem
            href="/stories"
            icon={<Book className="h-5 w-5" />}
            label="Stories"
            color="bg-purple-100 text-purple-700"
            onAnalyticsClick={() => handleNavClick("/stories", "Stories")}
            isActive={pathname.startsWith("/stories")}
          />
          <NavItem
            href="/songs"
            icon={<Music className="h-5 w-5" />}
            label="Songs"
            color="bg-yellow-100 text-yellow-700"
            onAnalyticsClick={() => handleNavClick("/songs", "Songs")}
            isActive={pathname.startsWith("/songs")}
          />

          {/* เมนู Dropdown เกี่ยวกับเรา */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              onClick={handleAboutDropdown}
              className="bg-orange-100 text-orange-700 flex items-center space-x-1 px-3 py-2 rounded-2xl font-light text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              <Info className="h-5 w-5 z-10" />
              <span className="z-10">About</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 z-10 ${isAboutOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl shadow-lg py-1 bg-white ring-1 ring-orange-200 z-20 animate-fadeIn">
                <Link
                  href="/about/vision"
                  onClick={() => handleNavClick("/about/vision", "Vision")}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-light text-orange-700 hover:bg-orange-50"
                >
                  <Smile className="h-5 w-5" />
                  <span>Vision</span>
                </Link>
                <Link
                  href="/about/team"
                  onClick={() => handleNavClick("/about/team", "Team")}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-light text-orange-700 hover:bg-orange-50"
                >
                  <Users className="h-5 w-5" />
                  <span>Team</span>
                </Link>
                <Link
                  href="/about/terms"
                  onClick={() => handleNavClick("/about/terms", "Terms")}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-light text-orange-700 hover:bg-orange-50"
                >
                  <Heart className="h-5 w-5" />
                  <span>Terms</span>
                </Link>
                <Link
                  href="/about/contact"
                  onClick={() => handleNavClick("/about/contact", "Contact")}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-light text-orange-700 hover:bg-orange-50"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ปุ่มเมนูบนมือถือ */}
        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors relative overflow-hidden group"
            aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            <span className="sr-only">{isOpen ? "ปิดเมนู" : "เปิดเมนู"}</span>
            <span className="absolute inset-0 bg-blue-200 scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></span>
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
        <div className="md:hidden mt-3 pb-3">
          <div className="grid grid-cols-4 gap-2 mb-3">
            <NavItem
              href="/"
              icon={<Home className="h-4 w-4" />}
              label="Home"
              color="bg-blue-100 text-blue-700"
              mobile
              onAnalyticsClick={() => handleNavClick("/", "Home_Mobile")}
            />
            <NavItem
              href="/news"
              icon={<Newspaper className="h-4 w-4" />}
              label="News"
              color="bg-green-100 text-green-700"
              mobile
              onAnalyticsClick={() => handleNavClick("/news", "News_Mobile")}
            />
            <NavItem
              href="/stories"
              icon={<Book className="h-4 w-4" />}
              label="Stories"
              color="bg-purple-100 text-purple-700"
              mobile
              onAnalyticsClick={() => handleNavClick("/stories", "Stories_Mobile")}
            />
            <NavItem
              href="/songs"
              icon={<Music className="h-4 w-4" />}
              label="Songs"
              color="bg-yellow-100 text-yellow-700"
              mobile
              onAnalyticsClick={() => handleNavClick("/songs", "Songs_Mobile")}
            />
          </div>

          {/* เมนูเกี่ยวกับเราบนมือถือ */}
          <div className="bg-orange-50 p-2 rounded-xl">
            <div className="flex items-center justify-center space-x-1 mb-2 text-orange-600 font-light text-xs">
              <Info className="h-4 w-4" />
              <h3>About</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <NavItem
                href="/about/vision"
                icon={<Smile className="h-3 w-3" />}
                label="Vision"
                color="bg-orange-100 text-orange-700"
                mobile
                onAnalyticsClick={() => handleNavClick("/about/vision", "Vision_Mobile")}
              />
              <NavItem
                href="/about/team"
                icon={<Users className="h-3 w-3" />}
                label="Team"
                color="bg-orange-100 text-orange-700"
                mobile
                onAnalyticsClick={() => handleNavClick("/about/team", "Team_Mobile")}
              />
              <NavItem
                href="/about/terms"
                icon={<Heart className="h-3 w-3" />}
                label="Terms"
                color="bg-orange-100 text-orange-700"
                mobile
                onAnalyticsClick={() => handleNavClick("/about/terms", "Terms_Mobile")}
              />
              <NavItem
                href="/about/contact"
                icon={<PhoneCall className="h-3 w-3" />}
                label="Contact"
                color="bg-orange-100 text-orange-700"
                mobile
                onAnalyticsClick={() => handleNavClick("/about/contact", "Contact_Mobile")}
              />
            </div>
          </div>
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
  onAnalyticsClick?: () => void;
  isActive?: boolean;
};

const NavItem = ({ href, icon, label, color, mobile = false, onAnalyticsClick, isActive = false }: NavItemProps) => {
  return (
    <Link
      href={href}
      onClick={onAnalyticsClick}
      className={`${color} ${isActive ? 'ring-2 ring-white shadow-lg' : ''} ${
        mobile ? "flex flex-col items-center p-1.5 text-xs" : "flex items-center space-x-2 px-3 py-2"
      } rounded-2xl font-light text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group`}
    >
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      <span className={`${mobile ? "mb-0.5" : ""} z-10`}>
        {icon}
      </span>
      <span className="z-10">
        {label}
      </span>
    </Link>
  );
};

export default KidsNavbar;