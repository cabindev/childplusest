// app/activities/page.tsx - หน้ากิจกรรม

import Link from "next/link";
import Image from "next/image";
import { Heart, Clock } from "lucide-react";

export default function ActivitiesPage() {
  // ข้อมูลกิจกรรมตัวอย่าง
  const activities = [
    {
      title: "สัตว์จากกระดาษแข็ง",
      description: "กิจกรรมประดิษฐ์สัตว์น่ารักจากกระดาษแข็ง ฝึกความคิดสร้างสรรค์และกล้ามเนื้อมัดเล็ก",
      imageUrl: "/images/paper-animals.jpg",
      category: "งานประดิษฐ์",
      ageRange: "4-6 ปี",
      color: "bg-kids-orange",
      duration: "30 นาที",
      materials: ["กระดาษแข็งสี", "กรรไกรเด็ก", "กาว", "สีเทียน"]
    },
    {
      title: "วาดภาพนิ้วมือ",
      description: "สนุกกับการวาดภาพด้วยสีนิ้วมือเพื่อพัฒนาความคิดสร้างสรรค์และประสาทสัมผัส",
      imageUrl: "/images/finger-painting.jpg",
      category: "ศิลปะ",
      ageRange: "2-5 ปี",
      color: "bg-kids-purple",
      duration: "20 นาที",
      materials: ["สีนิ้วมือ", "กระดาษ", "ผ้ากันเปื้อน"]
    },
    {
      title: "แป้งโดว์ธรรมชาติ",
      description: "ทำแป้งโดว์ด้วยส่วนผสมธรรมชาติที่ปลอดภัยและสนุกกับการปั้น",
      imageUrl: "/images/natural-playdough.jpg",
      category: "วิทยาศาสตร์",
      ageRange: "3-6 ปี",
      color: "bg-kids-green",
      duration: "45 นาที",
      materials: ["แป้งสาลี", "เกลือ", "น้ำ", "น้ำมันพืช", "สีผสมอาหาร"]
    },
    {
      title: "สวนขวดพลาสติก",
      description: "กิจกรรมนำขวดพลาสติกมาปลูกพืชเพื่อเรียนรู้เรื่องการเจริญเติบโตของพืช",
      imageUrl: "/images/bottle-garden.jpg",
      category: "วิทยาศาสตร์",
      ageRange: "4-6 ปี",
      color: "bg-kids-blue",
      duration: "40 นาที",
      materials: ["ขวดพลาสติกใช้แล้ว", "ดิน", "เมล็ดพืช", "น้ำ"]
    },
    {
      title: "เรียนรู้นาฬิกา",
      description: "กิจกรรมทำนาฬิกากระดาษเพื่อเรียนรู้เรื่องเวลาและตัวเลข",
      imageUrl: "/images/paper-clock.jpg",
      category: "คณิตศาสตร์",
      ageRange: "5-6 ปี",
      color: "bg-kids-yellow",
      duration: "35 นาที",
      materials: ["จานกระดาษ", "กระดาษแข็ง", "ตัวหนีบกระดาษ", "สีเทียน"]
    },
    {
      title: "ละครหุ่นนิ้วมือ",
      description: "ประดิษฐ์หุ่นนิ้วมือและเล่นละครเพื่อพัฒนาทักษะการเล่าเรื่องและความคิดสร้างสรรค์",
      imageUrl: "/images/finger-puppets.jpg",
      category: "ละคร",
      ageRange: "3-6 ปี",
      color: "bg-kids-pink",
      duration: "50 นาที",
      materials: ["กระดาษสี", "กรรไกรเด็ก", "กาว", "สีเทียน", "ริบบิ้น"]
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-kids-orange rounded-full mb-4">
            <Heart className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">กิจกรรมสร้างสรรค์น่าทำ</h1>
          <p className="text-xl max-w-2xl mx-auto">
            กิจกรรมสนุกๆ ที่ส่งเสริมการเรียนรู้ ความคิดสร้างสรรค์ และพัฒนาการของเด็กๆ ทำได้ง่ายที่บ้าน
          </p>
        </div>

        {/* ตัวกรองกิจกรรม */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button className="px-4 py-2 rounded-full bg-kids-orange hover:bg-orange-200 transition-colors">
            ทั้งหมด
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            ศิลปะ
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            วิทยาศาสตร์
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            ไม่เกิน 30 นาที
          </button>
        </div>

        {/* รายการกิจกรรม */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="card-kids bg-white group">
              <div className="relative h-52 overflow-hidden rounded-t-3xl">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`${activity.color} text-xs font-bold px-3 py-1 rounded-full`}>
                    {activity.ageRange}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center bg-white/80 rounded-full px-2 py-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">{activity.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gray-500 mb-2 block">{activity.category}</span>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">วัสดุที่ต้องใช้:</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.materials.map((material, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/activities/${index}`} className="btn-kids-orange block text-center w-full">
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}