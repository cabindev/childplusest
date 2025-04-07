// data/characters.ts - ข้อมูลตัวละครมาสคอต

// กำหนด type สำหรับข้อมูลตัวละคร
export type Character = {
    name: string;
    role: string;
    description: string;
    emoji: string;
    color: string;
  };
  
  // ข้อมูลตัวละคร
  export const characterData: Character[] = [
    {
      name: "หมีน้อยบุ๊คกี้",
      role: "ผู้นำการอ่าน",
      description: "ช่วยเด็กๆ เรียนรู้ตัวอักษรและทักษะการอ่านด้วยนิทานสนุกๆ",
      emoji: "🐻",
      color: "bg-kids-blue"
    },
    {
      name: "ลิงจ๋อมอมแอม",
      role: "เพื่อนคณิตศาสตร์",
      description: "ทำให้การเรียนรู้ตัวเลขและการนับสนุกผ่านกิจกรรมที่น่าสนใจ",
      emoji: "🐵",
      color: "bg-kids-yellow"
    },
    {
      name: "ช้างน้อยเอลลี่",
      role: "นักสำรวจวิทยาศาสตร์",
      description: "สอนความอยากรู้และการค้นพบผ่านการทดลองง่ายๆ",
      emoji: "🐘",
      color: "bg-kids-purple"
    },
    {
      name: "เต่าน้อยทอมมี่",
      role: "ครูศิลปะ",
      description: "กระตุ้นความคิดสร้างสรรค์ผ่านงานศิลปะและงานฝีมือสีสันสดใส",
      emoji: "🐢",
      color: "bg-kids-green"
    }
  ];