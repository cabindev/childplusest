// components/parent-section.tsx - คอมโพเนนต์ส่วนสำหรับผู้ปกครอง

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Users, Heart, Pencil } from "lucide-react";

const resourceData = [
  {
    icon: <BookOpen className="h-8 w-8 text-kids-blue" />,
    title: "คู่มือครู ชุดกิจกรรมปลูกพลังบวก",
    description: "แนวทางการจัดกิจกรรมสำหรับครูเพื่อส่งเสริมพัฒนาการเด็ก",
    image: "https://blog.sdnthailand.com/wp-content/uploads/2025/03/คู่มือชุดกิจกรรม.jpg",
    url: "https://blog.sdnthailand.com/wp-content/uploads/2025/03/หนังสือ-คู่มือครู-ชุดกิจกรรมปลูกพลังบวก_compressed.pdf"
  },
  {
    icon: <Users className="h-8 w-8 text-kids-pink" />,
    title: "คู่มือชุดกิจกรรมห่างไกลเหล้า",
    description: "กิจกรรมสร้างภูมิคุ้มกันและปลูกฝังค่านิยมที่ดีให้กับเด็ก",
    image: "https://blog.sdnthailand.com/wp-content/uploads/2025/03/กิจกรรมห่างไกลเหล้า.jpg",
    url: "https://blog.sdnthailand.com/wp-content/uploads/2025/03/หนังสือ-คู่มือชุดกิจกรรมห่างไกลเหล้า_compressed.pdf"
  },
  {
    icon: <Heart className="h-8 w-8 text-kids-green" />,
    title: "คู่มือชุดกิจกรรมห่างไกลบุหรี่",
    description: "แนวทางการสอนให้เด็กตระหนักถึงพิษภัยของบุหรี่",
    image: "https://blog.sdnthailand.com/wp-content/uploads/2025/03/คู่มือชุดกิจกรรมห่างไกลบุหรี่.jpg",
    url: "https://blog.sdnthailand.com/wp-content/uploads/2025/03/คู่มือชุดกิจกรรมห่างไกลบุหรี่.pdf"
  },
  {
    icon: <Pencil className="h-8 w-8 text-kids-yellow" />,
    title: "ชุดกิจกรรมความรู้ผู้ปกครอง",
    description: "เครื่องมือสำหรับผู้ปกครองในการจัดกิจกรรมเสริมทักษะ",
    image: "https://blog.sdnthailand.com/wp-content/uploads/2024/11/ชุดกิจกรรมความรู้พ่อแม่ลูก.jpg",
    url: "https://post.sdnthailand.com/sdnkid/%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%A5%E0%B8%B9%E0%B8%81/Contents/Resources/mobile/index.html"
  }
];

const ParentSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#fffbea]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-kids-purple bg-kids-purple/20 px-4 py-2 rounded-full">
            สำหรับผู้ปกครองและครู
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            คู่มือการเลี้ยงดูเด็กอย่างสร้างสรรค์
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            เครื่องมือและแนวทางสำหรับพ่อแม่และครูเพื่อช่วยส่งเสริมพัฒนาการของเด็กอย่างเหมาะสม
          </p>
        </div>


        <h3 className="text-2xl font-bold mb-6 text-center">คู่มือสำหรับครูและผู้ปกครอง</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceData.map((resource, index) => (
            <Link 
              key={index} 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col">
                <div className="relative h-44">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium">ดูเอกสาร</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-2 inline-flex bg-gray-100 p-2 rounded-full w-min">
                    {resource.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 line-clamp-2">{resource.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">{resource.description}</p>
                  <div className="bg-kids-yellow/20 text-kids-orange text-xs font-medium px-3 py-1 rounded-full w-fit">
                    คู่มือกิจกรรม
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="text-center mt-10">
          <Link href="/parents" className="btn-kids btn-kids-purple">
            ข้อมูลเพิ่มเติมสำหรับผู้ปกครอง
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ParentSection;