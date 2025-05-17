// app/about/team/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "คณะทำงาน | Child Plus Est",
  description: "ทำความรู้จักกับคณะทำงานของเรา ผู้เชี่ยวชาญด้านการศึกษาปฐมวัยที่มุ่งมั่นพัฒนาเด็กไทย",
  openGraph: {
    title: "คณะทำงาน | Child Plus Est",
    description: "ทำความรู้จักกับคณะทำงานของเรา ผู้เชี่ยวชาญด้านการศึกษาปฐมวัยที่มุ่งมั่นพัฒนาเด็กไทย",
  }
};

type TeamMember = {
  name: string;
  position: string;
  image: string;
  region?: string;
}

const TeamPage = () => {
  // ข้อมูลคณะทำงานจากเอกสาร
  const teamMembers: Record<string, TeamMember[]> = {
    "ประธาน": [
      {
        name: "นางธนิมา เจริญสุข",
        position: "ประธานคณะทำงาน",
        image: "/teams/thanima.jpeg"
      }
    ],
    "ภาคเหนือ": [
      {
        name: "นางกอบกมล ทบบัณฑิต",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์เชี่ยวชาญ",
        image: "/teams/kopkamon.jpg",
        region: "ภาคเหนือ"
      },
      {
        name: "นางสาวสมจิตร เอื้ออรุณ",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์ชำนาญการพิเศษ",
        image: "/teams/somchit.jpeg",
        region: "ภาคเหนือ"
      },
      {
        name: "นางศิริรัตน์ แย้มศิลป์",
        position: "ศึกษานิเทศก์ชำนาญการพิเศษ สพป. น่าน เขต1",
        image: "/teams/sririrut.jpeg",
        region: "ภาคเหนือ"
      }
    ],
    "ภาคใต้": [
      {
        name: "นายบุญชู อังสวัสดิ์",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์เชี่ยวชาญ",
        image: "/teams/boonchu.png",
        region: "ภาคใต้"
      },
      {
        name: "นายอารมณ์ วงศ์บัณทิต",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์เชี่ยวชาญ",
        image: "/teams/arom.jpeg",
        region: "ภาคใต้"
      },
      {
        name: "นายสมบัติ เนตรสว่าง",
        position: "ผู้อำนวยการกลุ่มนิเทศฯ สพป. สระบุรี เขต 1",
        image: "/teams/sombath.jpeg",
        region: "ภาคใต้"
      }
    ],
    "ภาคกลาง": [
      {
        name: "นางวัชรินทร์ ผดุงพจน์",
        position: "ข้าราชการบำนาญ ครูเชี่ยวชาญ",
        image: "/teams/watcharin.png",
        region: "ภาคกลาง"
      },
      {
        name: "นางสุวรรณา ละหุ่งเพ็ชร",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์ชำนาญการพิเศษ",
        image: "/teams/suwanna.jpeg",
        region: "ภาคกลาง"
      },
      {
        name: "นางสาวสุนิศา สุขผลิน",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์ชำนาญการพิเศษ",
        image: "/teams/sunisa.png",
        region: "ภาคกลาง"
      },
      {
        name: "นางพงษ์จันทร์ ประชุมวรรณ",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์ชำนาญการพิเศษ",
        image: "/teams/pongchan.jpeg",
        region: "ภาคกลาง"
      }
    ],
    "ภาคอีสาน": [
      {
        name: "นางรุ่งนภา ลัทธิมนต์",
        position: "ข้าราชการบำนาญ ศึกษานิเทศก์ชำนาญการพิเศษ",
        image: "/teams/rongnaoha.jpeg",
        region: "ภาคอีสาน"
      },
      {
        name: "นางสาวจริญญา ไทยแท้",
        position: "นักจิตวิทยา",
        image: "/teams/jarinya.jpeg",
        region: "ภาคอีสาน"
      },
      {
        name: "นางสาวฐิตาภัสร์ ฉัตรศิริชัยวุฒิ",
        position: "นักจิตวิทยา",
        image: "/teams/titapath.jpeg",
        region: "ภาคอีสาน"
      }
    ],
    "ส่วนกลาง": [
      {
        name: "นางสาวมาลัย มินศรี",
        position: "ผู้จัดการโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงฯ",
        image: "/teams/malai.png",
        region: "ส่วนกลาง"
      },
      {
        name: "นางสาวกัลยา รัตพันธ์",
        position: "คณะทำงานโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงฯ",
        image: "/teams/kanlaya.jpeg",
        region: "ส่วนกลาง"
      },
      {
        name: "นางสาวอารีญา มินศรี",
        position: "คณะทำงานโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงฯ",
        image: "/teams/areeya.jpeg",
        region: "ส่วนกลาง"
      },
      {
        name: "นายวิญญู ศรีศุภโชค",
        position: "คณะทำงานโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงฯ",
        image: "/teams/winyuu.png",
        region: "ส่วนกลาง"
      }
    ]
  };

  // สร้างสีพื้นหลังที่แตกต่างกันสำหรับแต่ละบัตร
  const bgColors = [
    "bg-kids-yellow",
    "bg-kids-blue",
    "bg-kids-green",
    "bg-kids-purple",
    "bg-kids-pink", 
    "bg-kids-orange",
    "bg-kids-peach"
  ];

  // สร้างเงาที่แตกต่างกันสำหรับแต่ละบัตร
  const shadows = [
    "shadow-kids-yellow",
    "shadow-kids-blue",
    "shadow-kids-green",
    "shadow-kids-purple",
    "shadow-kids-pink",
    "shadow-kids-orange"
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex py-4 mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center">
              <span>หน้าหลัก</span>
            </Link>
          </li>

          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="font-medium">คณะทำงาน</span>
          </li>
        </ol>
      </nav>
      
      {/* Organization Chart Section - แผนผังโครงสร้างองค์กร */}
      <div className="mb-16 bg-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <span className="px-4 py-2 rounded-full bg-kids-yellow">
            คณะทำงานโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงฯ
          </span>
        </h2>
        
        <div className="org-chart mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 relative">
            {/* ฝั่งซ้าย - ผู้จัดการโครงการ */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-kids-green">
                <Image 
                  src="/teams/malai.png" 
                  alt="ผู้จัดการโครงการ" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-2 max-w-xs">
                <h3 className="font-bold">นางสาวมาลัย มินศรี</h3>
                <p className="text-sm px-4">ผู้จัดการโครงการปลูกพลังบวกเพื่อสร้างจิตสำนึกภูมิคุ้มกันปัจจัยเสี่ยงฯ</p>
              </div>
              
              {/* เส้นเชื่อมจากผู้จัดการไปยังส่วนกลาง */}
              <div className="hidden md:block h-12 w-px bg-gray-400 my-2"></div>
              
              {/* กล่องส่วนกลาง */}
              <div className="bg-kids-peach p-4 rounded-xl mt-4 max-w-xs">
                <h3 className="font-bold text-center mb-2">ส่วนกลาง</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {teamMembers["ส่วนกลาง"].slice(1, 4).map((member, idx) => (
                    <div key={idx} className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold text-center px-1">{member.name.split(' ')[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* ฝั่งขวา - ประธานและภูมิภาค */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-kids-purple">
                <Image 
                  src="/teams/thanima.jpeg" 
                  alt="ประธานคณะทำงาน" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <h3 className="font-bold">นางธนิมา เจริญสุข</h3>
                <p className="text-sm">ประธานคณะทำงาน</p>
              </div>
              
              {/* เส้นเชื่อมจากประธานไปยังภูมิภาค */}
              <div className="h-12 w-px bg-gray-400 my-2"></div>
              
              {/* กล่องภูมิภาค */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["ภาคเหนือ", "ภาคกลาง", "ภาคใต้", "ภาคอีสาน"].map((region, index) => (
                  <div key={region} className={`${bgColors[index % bgColors.length]} p-3 rounded-xl flex flex-col items-center`}>
                    <h3 className="font-bold text-sm mb-2 text-center">{region}</h3>
                    <div className="flex flex-wrap justify-center gap-1">
                      {teamMembers[region].slice(0, 2).map((member, idx) => (
                        <div key={idx} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                          <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill 
                            className="object-cover"
                          />
                        </div>
                      ))}
                      {teamMembers[region].length > 2 && (
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-bold">
                          +{teamMembers[region].length - 2}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* เส้นเชื่อมระหว่างผู้จัดการโครงการกับประธาน */}
            <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gray-400"></div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
          คณะทำงานของเรา
          <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-kids-blue via-kids-purple to-kids-pink rounded-full"></div>
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          พบกับทีมผู้เชี่ยวชาญด้านการศึกษาปฐมวัยที่ทุ่มเทเพื่อสร้างสรรค์สื่อการเรียนรู้และกิจกรรมที่มีคุณภาพสำหรับเด็กไทย
        </p>
      </div>

      {/* Team Members Section แยกตามภูมิภาค */}
      {Object.entries(teamMembers).map(([region, members], regionIndex) => (
        <div key={region} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className={`fancy-underline px-4 py-2 rounded-full ${bgColors[regionIndex % bgColors.length]}`}>
              {region}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <div 
                key={member.name} 
                className={`card-kids ${bgColors[(regionIndex + index) % bgColors.length]} ${shadows[(regionIndex + index) % shadows.length]} overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-700 mb-4">{member.position}</p>
                  
                  {/* จุดตกแต่ง */}
                  <div className="decorative-dots justify-center">
                    <div className={`decorative-dot ${bgColors[(regionIndex + index + 1) % bgColors.length]}`}></div>
                    <div className={`decorative-dot ${bgColors[(regionIndex + index + 2) % bgColors.length]}`}></div>
                    <div className={`decorative-dot ${bgColors[(regionIndex + index + 3) % bgColors.length]}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-6">ร่วมเป็นส่วนหนึ่งในการพัฒนาเด็กไทย</h2>
        <p className="max-w-2xl mx-auto mb-8">
          เราเชื่อว่าการศึกษาที่มีคุณภาพคือรากฐานสำคัญในการพัฒนาเด็กปฐมวัย หากคุณมีข้อเสนอแนะหรือต้องการติดต่อคณะทำงาน สามารถติดต่อเราได้
        </p>
        <Link href="/about/contact" className="btn-kids btn-kids-purple mt-4">
          ติดต่อเรา
        </Link>
      </div>
    </div>
  );
};

export default TeamPage;