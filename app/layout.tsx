import type { Metadata } from "next";
import { Noto_Sans_JP, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社ウェルテック | 全国施工パートナー募集",
  description:
    "ウェルテックは公共・民間の建設案件を全国展開する建設会社です。施工パートナー（協力会社）を募集しています。入札案件20倍成長、安定した案件供給でWin-Winの関係を築きます。",
  keywords: "ウェルテック,建設,施工パートナー,協力会社,入札,公共工事,電気工事,内装,空調,給湯器",
  openGraph: {
    title: "株式会社ウェルテック | 全国施工パートナー募集",
    description: "公共・民間の建設案件で全国の施工パートナーを募集中。入札案件20倍成長の安定企業。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社ウェルテック",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
