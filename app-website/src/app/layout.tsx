import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import GaPageView from "./components/GaPageView";
import Footer from "./contents/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "高津陶芸フェスタ 2026 | 2026年3月8日(日) 大山街道ふるさと館",
  description: "初めての方や親子も気軽に参加できる体験ワークショップ。益子焼の伝統工芸士を講師に迎え、益子の粘土でロクロを使い器やお皿を作ります。仕上げは益子の窯で行い、完成品は約2～3か月後にお届け。作品づくりと共に思い出作りもお楽しみください！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src={
            "https://www.googletagmanager.com/gtag/js" +
            "?id=G-VJK2NXLX64"
          }
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VJK2NXLX64');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GaPageView />
        {children}
        <Footer />
      </body>
    </html>
  );
}
