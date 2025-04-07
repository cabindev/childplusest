// components/featured-activities.tsx - คอมโพเนนต์กิจกรรมแนะนำ

import Link from "next/link";
import Image from "next/image";
import { Book, Music, Pencil, Smile, Heart, Sun } from "lucide-react";
import { activities, Activity } from "../data/activities";

// ฟังก์ชันสำหรับเลือกไอคอนตามประเภท
const getIconByType = (iconType: Activity['iconType'], className: string = "h-6 w-6") => {
  switch (iconType) {
    case "Smile": return <Smile className={className} />;
    case "Book": return <Book className={className} />;
    case "Music": return <Music className={className} />;
    case "Pencil": return <Pencil className={className} />;
    case "Heart": return <Heart className={className} />;
    case "Sun": return <Sun className={className} />;
    default: return <Smile className={className} />;
  }
};

type ActivityCardProps = Activity & {
  index: number;
};

const ActivityCard = ({ title, description, iconType, color, imageUrl, href, index }: ActivityCardProps) => {
  // สร้างสีเพิ่มเติมจากสีหลักสำหรับเอฟเฟกต์ขั้นสูง
  const colorName = color.replace('bg-', '');
  
  return (
    <div 
      className={`card-kids card-hover-effect bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 rounded-2xl relative`}
      style={{ 
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* ลูกบอลตกแต่งรอบการ์ด */}
      <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${color} opacity-20 animate-float hidden md:block`}
        style={{ animationDelay: `${index * 200 + 300}ms` }}></div>
      <div className={`absolute -bottom-4 -left-4 w-10 h-10 rounded-full ${color} opacity-20 animate-float hidden md:block`}
        style={{ animationDelay: `${index * 200 + 600}ms` }}></div>
      
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
        <Image 
          src={imageUrl} 
          alt={title} 
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* วางไอคอนที่มุมซ้ายบนของรูปภาพ */}
        <div className={`absolute top-4 left-4 ${color} p-3 rounded-full shadow-md transform transition-transform group-hover:scale-110 group-hover:rotate-12`}>
          <div className="text-gray-800">
            {getIconByType(iconType, "h-8 w-8")}
          </div>
        </div>
        
        {/* เพิ่มเอฟเฟกต์เมื่อวางเมาส์ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-gray-800 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm line-clamp-3 relative z-10">{description}</p>
        
        <Link 
          href={href} 
          className={`inline-flex items-center ${color} text-gray-800 font-bold py-2 px-6 rounded-full hover:shadow-md transition-all hover:px-8 relative z-10`}
        >
          <span>เริ่มกิจกรรม</span>
          <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
};

export default function FeaturedActivities() {
  // กำหนดข้อมูลกิจกรรมด้วยรูปภาพที่ระบุ
  const activitiesData = [
    {
      title: "เวลานิทาน",
      description: "เรื่องราวบทความที่ช่วยพัฒนาทักษะการภาษาและจินตนาการ",
      iconType: "Book" as Activity['iconType'],
      color: "bg-kids-blue",
      imageUrl: "/img/stories.jpeg",
      href: "/stories"
    },
    {
      title: "ดนตรีและการเต้น",
      description: "จังหวะสนุกๆ และการเคลื่อนไหวที่ช่วยพัฒนาทักษะการเคลื่อนไหวและการประสานงาน",
      iconType: "Music" as Activity['iconType'],
      color: "bg-kids-green",
      imageUrl: "/img/song.jpeg",
      href: "/songs"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#fffbea]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-kids-yellow rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">กิจกรรมสนุกเพื่อการเรียนรู้</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            ค้นพบกิจกรรมสนุกและให้ความรู้ที่ออกแบบมาเพื่อให้เด็กๆ ได้สำรวจและเติบโต
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activitiesData.map((activity, index) => (
            <ActivityCard key={index} {...activity} index={index} />
          ))}
        </div>
        
        {/* เพิ่มปุ่มดูทั้งหมด */}
        {/* <div className="text-center mt-12">
          <Link 
            href="/activities" 
            className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-dashed border-kids-purple/30 hover:border-kids-purple/70"
          >
            ดูกิจกรรมทั้งหมด
          </Link>
        </div> */}
        
        {/* ลูกบอลตกแต่ง */}
        <div className="relative mt-16">
          <div className="absolute -bottom-8 -left-4 w-12 h-12 bg-kids-yellow rounded-full opacity-30 animate-float"></div>
          <div className="absolute -top-16 -right-4 w-16 h-16 bg-kids-blue rounded-full opacity-30 animate-float animation-delay-1000"></div>
        </div>
      </div>
    </section>
  );
}