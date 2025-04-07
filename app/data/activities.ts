// data/activities.ts - ข้อมูลกิจกรรมสำหรับเด็ก

// กำหนด type สำหรับข้อมูลกิจกรรม
export type Activity = {
  title: string;
  description: string;
  iconType: "Smile" | "Book" | "Music" | "Pencil" | "Heart" | "Sun";
  color: string;
  imageUrl: string;
  href: string;
};
  
// ข้อมูลกิจกรรม
export const activities: Activity[] = [
  {
    title: "เวลานิทาน",
    description: "เรื่องราวชวนติดตามที่ช่วยพัฒนาทักษะทางภาษาและจินตนาการ",
    iconType: "Book",
    color: "bg-kids-blue",
    imageUrl: "/images/storytime.jpg",
    href: "/stories"
  },
  {
    title: "ดนตรีและการเต้น",
    description: "จังหวะสนุกๆ และการเคลื่อนไหวที่ช่วยพัฒนาทักษะการเคลื่อนไหวและการประสานงาน",
    iconType: "Music",
    color: "bg-kids-green",
    imageUrl: "/images/music-dance.jpg",
    href: "/songs"
  }
];