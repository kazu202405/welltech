import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://well-tech.top"),
  title: {
    default: "株式会社ウェルテック | 全国施工パートナー募集",
    template: "%s | 株式会社ウェルテック",
  },
  description:
    "ウェルテックは公共・民間の建設案件を全国展開する建設会社です。施工パートナー（協力会社）を募集しています。入札案件20倍成長、安定した案件供給でWin-Winの関係を築きます。",
  keywords: [
    "ウェルテック", "建設", "施工パートナー", "協力会社募集", "入札",
    "公共工事", "電気工事", "内装工事", "空調工事", "給湯器交換",
    "建設業 協力会社", "施工管理", "全国対応", "建設会社 パートナー",
  ],
  authors: [{ name: "株式会社ウェルテック" }],
  creator: "株式会社ウェルテック",
  publisher: "株式会社ウェルテック",
  alternates: {
    canonical: "https://well-tech.top",
  },
  openGraph: {
    title: "株式会社ウェルテック | 全国施工パートナー募集",
    description: "公共・民間の建設案件で全国の施工パートナーを募集中。月間入札件数最大20倍、10万〜数千万の幅広い案件規模。安定した案件供給でWin-Winの関係を築きます。",
    type: "website",
    locale: "ja_JP",
    url: "https://well-tech.top",
    siteName: "株式会社ウェルテック",
    images: [
      {
        url: "/photo/S__49889490_0.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社ウェルテック - 全国施工パートナー募集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ウェルテック | 全国施工パートナー募集",
    description: "公共・民間の建設案件で全国の施工パートナーを募集中。安定した案件供給でWin-Winの関係を築きます。",
    images: ["/photo/S__49889490_0.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
