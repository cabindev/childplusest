// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from 'next/font/google';
import KidsNavbar from "./components/kidesNavbar";

import Footer from "./components/footer";
import ScrollToTopButton from "./components/scroll-to-top";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com'),
  title: {
    default: 'Child Plus Est - เรียนรู้ เล่น และเติบโตไปด้วยกัน',
    template: '%s | Child Plus Est'
  },
  description: 'โลกที่สนุกและเต็มไปด้วยสีสันสำหรับเด็กๆ ที่จะได้เรียนรู้ผ่านเกม นิทาน และกิจกรรมแบบโต้ตอบ',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://childplusest.com',
    siteName: 'Child Plus Est',
    images: [{
      url: '/logo/logo.png', // ใส่รูปภาพ OG default ของคุณที่นี่
      width: 1200,
      height: 630,
      alt: 'Child Plus Est'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Child Plus Est - เรียนรู้ เล่น และเติบโตไปด้วยกัน',
    description: 'โลกที่สนุกและเต็มไปด้วยสีสันสำหรับเด็กๆ ที่จะได้เรียนรู้ผ่านเกม นิทาน และกิจกรรมแบบโต้ตอบ',
    images: ['/logo/logo.png'], // ใส่รูปภาพ Twitter card default ที่นี่
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
        <KidsNavbar />

        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}