// app/parents/page.tsx - หน้าสำหรับผู้ปกครอง

import Link from "next/link";
import Image from "next/image";
import { Book, Brain, Heart, School, Shield, Users } from "lucide-react";

export default function ParentsPage() {
  // ข้อมูลคำแนะนำสำหรับผู้ปกครอง
  const parentGuides = [
    {
      title: "การส่งเสริมพัฒนาการทางภาษา",
      description: "คำแนะนำในการช่วยให้เด็กพัฒนาทักษะการสื่อสารและการอ่านในช่วงปฐมวัย",
      icon: <Book className="h-8 w-8 text-blue-500" />,
      color: "bg-kids-blue",
      imageUrl: "/images/language-development.jpg"
    },
    {
      title: "การเรียนรู้ผ่านการเล่น",
      description: "วิธีการสนับสนุนการเรียนรู้ของเด็กผ่านกิจกรรมการเล่นที่มีความหมาย",
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      color: "bg-kids-pink",
      imageUrl: "/images/play-learning.jpg"
    },
    {
      title: "การพัฒนาทักษะทางสังคม",
      description: "การช่วยให้เด็กสร้างความสัมพันธ์กับผู้อื่นและเรียนรู้การทำงานร่วมกัน",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      color: "bg-kids-purple",
      imageUrl: "/images/social-skills.jpg"
    },
    {
      title: "การเตรียมความพร้อมก่อนวัยเรียน",
      description: "คำแนะนำในการเตรียมเด็กให้พร้อมสำหรับการเข้าโรงเรียนอนุบาล",
      icon: <School className="h-8 w-8 text-green-500" />,
      color: "bg-kids-green",
      imageUrl: "/images/school-readiness.jpg"
    },
    {
      title: "การพัฒนาทักษะทางอารมณ์",
      description: "วิธีการช่วยให้เด็กเข้าใจและจัดการกับอารมณ์ของตนเอง",
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      color: "bg-kids-orange",
      imageUrl: "/images/emotional-development.jpg"
    },
    {
      title: "ความปลอดภัยบนโลกออนไลน์",
      description: "คำแนะนำสำหรับการดูแลเด็กเมื่อใช้เทคโนโลยีและอินเทอร์เน็ต",
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      color: "bg-kids-yellow",
      imageUrl: "/images/online-safety.jpg"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-kids-purple bg-kids-purple/20 px-4 py-2 rounded-full">สำหรับผู้ปกครองและครู</span>
          <h1 className="text-4xl font-bold mt-4 mb-4">แหล่งข้อมูลสำหรับผู้ปกครอง</h1>
          <p className="text-xl max-w-2xl mx-auto">
            คำแนะนำและข้อมูลที่จะช่วยให้คุณสนับสนุนการเรียนรู้และพัฒนาการของลูกน้อยได้อย่างมีประสิทธิภาพ
          </p>
        </div>

        {/* ส่วนแนะนำเว็บไซต์ */}
        <div className="bg-gradient-to-br from-kids-blue to-kids-purple p-8 rounded-3xl text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">ยินดีต้อนรับผู้ปกครองและครู</h2>
              <p className="mb-4">
                เว็บไซต์ ChildPlusEst ได้รับการออกแบบขึ้นเพื่อสนับสนุนการเรียนรู้และพัฒนาการของเด็กปฐมวัย
                ด้วยเนื้อหาที่ผ่านการคัดสรรและกิจกรรมที่ช่วยฝึกทักษะที่สำคัญ
              </p>
              <p className="mb-6">
                เราเชื่อในพลังของการเรียนรู้ผ่านการเล่น และส่งเสริมให้ผู้ปกครองมีส่วนร่วมในการเรียนรู้ของเด็ก
                คุณสามารถใช้กิจกรรมและเนื้อหาในเว็บไซต์นี้เพื่อเสริมสร้างประสบการณ์การเรียนรู้ที่บ้านได้
              </p>
              <Link href="/contact" className="btn-kids bg-white text-purple-700 inline-block">
                ติดต่อเรา
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/parent-child.jpg"
                alt="ผู้ปกครองและเด็กกำลังเรียนรู้ร่วมกัน"
                width={500}
                height={350}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* คำแนะนำสำหรับผู้ปกครอง */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">คำแนะนำที่เป็นประโยชน์</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {parentGuides.map((guide, index) => (
              <div key={index} className="card-kids bg-white overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={guide.imageUrl}
                    alt={guide.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${guide.color} p-3 rounded-full mr-4`}>
                      {guide.icon}
                    </div>
                    <h3 className="text-xl font-bold">{guide.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Link href={`/parents/guides/${index}`} className={`btn-kids ${guide.color.replace('bg-', 'btn-kids-')} block text-center w-full`}>
                    อ่านเพิ่มเติม
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}