// app/games/page.tsx - หน้าเกมส์

import Link from "next/link";
import Image from "next/image";
import { Smile } from "lucide-react";

export default function GamesPage() {
  // ข้อมูลเกมตัวอย่าง
  const games = [
    {
      title: "นับเลขกับลิงจ๋อ",
      description: "เกมสนุกที่ช่วยให้เด็กๆ ฝึกการนับเลข 1-10",
      imageUrl: "/images/counting-game.jpg",
      category: "คณิตศาสตร์",
      ageRange: "3-5 ปี",
      color: "bg-kids-yellow"
    },
    {
      title: "จับคู่รูปภาพ",
      description: "ฝึกความจำและการสังเกตด้วยการจับคู่รูปภาพน่ารักๆ",
      imageUrl: "/images/matching-game.jpg",
      category: "ความจำ",
      ageRange: "4-6 ปี",
      color: "bg-kids-blue"
    },
    {
      title: "ระบายสีสัตว์น่ารัก",
      description: "กิจกรรมระบายสีออนไลน์ฝึกกล้ามเนื้อมัดเล็กและความคิดสร้างสรรค์",
      imageUrl: "/images/coloring-game.jpg",
      category: "ศิลปะ",
      ageRange: "2-6 ปี",
      color: "bg-kids-green"
    },
    {
      title: "เรียนรู้พยัญชนะ",
      description: "เกมที่ช่วยเด็กๆ เรียนรู้และจดจำพยัญชนะไทยผ่านภาพและเสียง",
      imageUrl: "/images/alphabet-game.jpg",
      category: "ภาษา",
      ageRange: "3-6 ปี",
      color: "bg-kids-purple"
    },
    {
      title: "เสียงสัตว์แสนสนุก",
      description: "เรียนรู้เสียงสัตว์ต่างๆ ผ่านเกมสนุกและภาพเคลื่อนไหว",
      imageUrl: "/images/animal-sounds.jpg",
      category: "วิทยาศาสตร์",
      ageRange: "2-4 ปี",
      color: "bg-kids-orange"
    },
    {
      title: "ปริศนาอาหาร",
      description: "เรียนรู้เกี่ยวกับอาหารต่างๆ ผ่านเกมปริศนาที่น่าสนใจ",
      imageUrl: "/images/food-puzzle.jpg",
      category: "โภชนาการ",
      ageRange: "3-6 ปี",
      color: "bg-kids-pink"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ส่วนหัวของหน้า */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-kids-yellow rounded-full mb-4">
            <Smile className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">เกมส์ที่สนุกและให้ความรู้</h1>
          <p className="text-xl max-w-2xl mx-auto">
            เพลิดเพลินไปกับเกมส์ที่ออกแบบมาเพื่อส่งเสริมการเรียนรู้ การแก้ปัญหา และความคิดสร้างสรรค์
          </p>
        </div>

        {/* ตัวกรองเกมส์ */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button className="px-4 py-2 rounded-full bg-kids-blue hover:bg-blue-200 transition-colors">
            ทั้งหมด
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            อายุ 2-3 ปี
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            อายุ 4-6 ปี
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            คณิตศาสตร์
          </button>
          <button className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
            ภาษา
          </button>
        </div>

        {/* รายการเกมส์ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="card-kids bg-white group">
              <div className="relative h-52 overflow-hidden rounded-t-3xl">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`${game.color} text-xs font-bold px-3 py-1 rounded-full`}>
                    {game.ageRange}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-gray-500 mb-2 block">{game.category}</span>
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <Link href={`/games/${index}`} className="btn-kids-blue block text-center w-full">
                  เล่นเลย
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}