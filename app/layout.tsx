import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from 'next/font/google';
import KidsNavbar from "./components/kidesNavbar";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/scroll-to-top";
import GoogleAnalytics from "./components/google-analytics";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'),
  title: {
    default: 'childplusest - สร้างจิตสำนึก ภูมิคุ้มกันปัจจัยเสี่ยง',
    template: '%s | childplusest'
  },
  description: 'ปลูกพลังบวกเด็กปฐมวัย สร้างจิตสำนึก ภูมิคุ้มกันปัจจัยเสี่ยง สำหรับเด็กปฐมวัย ผ่านกิจกรรมเรียนรู้ที่สนุกสนาน เกม นิทาน และการพัฒนาทักษะชีวิตที่จำเป็นสำหรับเด็กวัย 2-6 ปี',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com',
    siteName: 'childplusest',
    title: 'childplusest - สร้างจิตสำนึก ภูมิคุ้มกันปัจจัยเสี่ยง',
    description: 'ปลูกพลังบวกเด็กปฐมวัย สร้างจิตสำนึก ภูมิคุ้มกันปัจจัยเสี่ยง สำหรับเด็กปฐมวัย ผ่านกิจกรรมเรียนรู้ที่สนุกสนาน เกม นิทาน และการพัฒนาทักษะชีวิตที่จำเป็น',
    images: [{
      url: '/logo/logo.png',
      width: 1200,
      height: 630,
      alt: 'ปลูกพลังบวกเด็กปฐมวัย สร้างจิตสำนึกและภูมิคุ้มกันปัจจัยเสี่ยง'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'childplusest - สร้างจิตสำนึก ภูมิคุ้มกันปัจจัยเสี่ยง',
    description: 'ปลูกพลังบวกเด็กปฐมวัย สร้างจิตสำนึก ภูมิคุ้มกันปัจจัยเสี่ยง สำหรับเด็กปฐมวัย ผ่านกิจกรรมเรียนรู้ที่สนุกสนาน',
    images: ['/logo/logo.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${quicksand.variable} scroll-smooth`}>
      <body className="font-quicksand">
        <GoogleAnalytics />
        <KidsNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}