// components/footer.tsx - คอมโพเนนต์ส่วนท้ายเว็บไซต์

import Link from "next/link";
import { Heart, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-kids-peach to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-kids-blue via-kids-purple to-kids-pink bg-clip-text text-transparent">
                ChildPlusEst
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              แหล่งเรียนรู้ออนไลน์ที่ปลอดภัยและสนุกสนานสำหรับเด็กปฐมวัย การเรียนรู้ผ่านการเล่นคือหัวใจสำคัญของเรา
            </p>
            <div className="flex items-center space-x-1 text-gray-600 mb-4">
              <span>สร้างด้วยความรัก</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>เพื่อเด็กๆ ทุกคน</span>
            </div>
            
            {/* เพิ่มไอคอน Facebook */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.facebook.com/profile.php?id=100068312467386" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <span className="text-gray-600 text-sm">ติดตามเราบน Facebook</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">สำรวจ</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/games" className="text-gray-600 hover:text-gray-900">เกมส์</Link></li> */}
              <li><Link href="/stories" className="text-gray-600 hover:text-gray-900">นิทาน</Link></li>
              <li><Link href="/songs" className="text-gray-600 hover:text-gray-900">เพลง</Link></li>
              {/* <li><Link href="/activities" className="text-gray-600 hover:text-gray-900">กิจกรรม</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">สำหรับผู้ปกครอง</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/parents" className="text-gray-600 hover:text-gray-900">คู่มือผู้ปกครอง</Link></li> */}
              {/* <li><Link href="/parents/faq" className="text-gray-600 hover:text-gray-900">คำถามที่พบบ่อย</Link></li> */}
              <li><Link href="/about/contact" className="text-gray-600 hover:text-gray-900">ติดต่อเรา</Link></li>
              {/* <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">นโยบายความเป็นส่วนตัว</Link></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ChildPlusEst สงวนลิขสิทธิ์ทั้งหมด</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;