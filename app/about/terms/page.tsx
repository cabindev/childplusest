'use client'

import React from 'react';
import Image from 'next/image';
import { Book, Heart, Brain, Shield, Users, Star } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fffbea] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animation */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">นิยามศัพท์เฉพาะ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">คำศัพท์และความหมายที่เกี่ยวข้องกับการพัฒนาเด็กปฐมวัย</p>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/4 animate-float">
            <Book className="h-8 w-8 text-kids-blue" />
          </div>
          <div className="absolute top-0 right-1/4 animate-float animation-delay-1000">
            <Star className="h-6 w-6 text-kids-yellow" fill="#FFEDA3" />
          </div>
        </div>

        <div className="space-y-10">
          {/* Term 1 */}
          <TermCard
            icon={<Users className="h-6 w-6 text-gray-700" />}
            color="bg-kids-blue"
            title="เด็กปฐมวัย"
            content="เด็กซึ่งมีอายุ 2 - 6 ปีบริบูรณ์ในสถานศึกษาทุกสังกัดการศึกษา"
          />
          
          {/* Term 2 */}
          <TermCard
            icon={<Brain className="h-6 w-6 text-gray-700" />}
            color="bg-kids-green"
            title="ทักษะชีวิตเด็กปฐมวัย"
            content="พฤติกรรมและความสามารถของเด็กปฐมวัย ตั้งแต่ 2 – 6 ปีที่ได้รับการจัดกิจกรรมกิจกรรมปลูกพลังบวกฯ เพื่อให้เกิดการพัฒนาการในการปรับตัวและมีพฤติกรรมด้านความคิด ความรู้สึก และความสามารถในการแสดงออกอย่างเหมาะสม สามารถดำเนินชีวิตอยู่ร่วมกับผู้อื่นอย่างสร้างสรรค์และมีความสุข ตามองค์ประกอบดังนี้"
            subItems={[
              "ด้านตระหนักรู้และเห็นคุณค่าของตนเองและผู้อื่น",
              "การคิดวิเคราะห์ ตัดสินใจและแก้ปัญหาอย่างสร้างสรรค์",
              "การจัดการอารมณ์และความเครียด",
              "การสร้างสัมพันธภาพที่ดีกับผู้อื่น"
            ]}
          />
          
          {/* Term 3 */}
          <TermCard
            icon={<Heart className="h-6 w-6 text-gray-700" />}
            color="bg-kids-pink"
            title="การปลูกพลังบวก"
            content="การสื่อสารที่สร้างสัมพันธ์ภาพที่ดี สร้างแรงจูงใจ และสร้างความหมายในชีวิต สร้างคุณค่าและความภาคภูมิใจ ให้เด็กปฐมวัยเกิดความเข้มแข็ง อึด ฮึด สู้ เมื่อเผชิญปัญหาการสื่อสารที่ปลูกพลังบวกสามารถสื่อสารได้หลายทิศทาง"
            subItems={[
              "การสื่อสารด้วยภาษาพูด ภาษาเขียนหรือรูปภาพที่สร้างแรงจูงใจ สร้างความภาคภูมิใจ สร้างความเข้าใจที่ถูกต้อง ทั้งการสื่อสารโดยตรงจากครูถึงเด็ก และการสื่อสารผ่านสื่อรูปแบบต่างๆ เช่น เพลง นิทาน ข่าวสาร ภาพกิจกรรมความสำเร็จ การให้รางวัล การยกย่องชมเชยต่อสาธารณะชน เป็นต้น",
              "การสื่อด้วยภาษากายและสัญลักษณ์ ที่ทำให้เด็กๆมีความรู้สึกที่ดี มีความสุข อิ่มเอมใจ มีแรงฮึดที่จะกระทำในสิ่งที่ดี และสร้างสรรค์ทำสิ่งที่ท้าทายนำไปสู่ความสำเร็จในชีวิตประจำวัน เช่น การสัมผัส การยิ้ม การใช้สายตา การแสดงสัญลักษณ์ และการกอด เป็นต้น"
            ]}
          />
          
          {/* Term 4 */}
          <TermCard
            icon={<Brain className="h-6 w-6 text-gray-700" />}
            color="bg-kids-purple"
            title="จิตสำนึก (conscious mind)"
            content="สภาพที่รู้ตัวว่าคือใคร อยู่ที่ไหน ต้องการอะไร การแสดงพฤติกรรมที่แสดงออกไปตามหลักเหตุผล สอดคล้องกับหลักความเป็นจริง (principle of reality) จิตสำนึกในเด็กปฐมวัยจึงสังเกตได้จากพฤติที่แสดงออกในด้านต่างๆ"
          />
          
          {/* Term 5 */}
          <TermCard
            icon={<Shield className="h-6 w-6 text-gray-700" />}
            color="bg-kids-orange"
            title="ภูมิคุ้มกันปัจจัยเสี่ยง"
            content="พฤติกรรมที่เด็กแสดงออกอย่างสม่ำเสมอในการคิด วิเคราะห์ก่อนการตัดสินใจปฏิเสธสิ่งที่ทำลายสุขภาพที่ไม่ได้เกิดจากเชื้อโรค เช่น เครื่องดื่มแอลกอฮอล์ บุหรี่ บุหรี่ไฟฟ้า สารเสพติดการพนัน เกม สื่อออนไลน์และอบายมุข"
          />
        </div>
        
        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <button className="btn-kids btn-kids-blue">
            ดูกิจกรรมของเรา
            <span className="ml-2">➜</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}

function TermCard({ icon, color, title, content, subItems }: { 
  icon: React.ReactNode, 
  color: string, 
  title: string, 
  content: string,
  subItems?: string[]
}) {
  return (
    <div className="card-kids bg-white p-8 relative overflow-hidden card-hover-effect">
      <div className="flex items-center mb-4">
        <div className={`${color} p-3 rounded-full mr-4`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div className="bg-kids-peach p-6 rounded-2xl">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{content}</p>
        
        {subItems && subItems.length > 0 && (
          <div className="pl-4 space-y-2">
            {subItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className={`${color} w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0`}>
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Decoration */}
      <div className="absolute -bottom-3 -right-3 bg-kids-yellow w-16 h-16 rounded-full opacity-20"></div>
    </div>
  );
}