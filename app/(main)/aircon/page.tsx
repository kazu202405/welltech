import { Metadata } from "next";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { AirconHero } from "@/components/sections/aircon-hero";
import { AirconLp } from "@/components/sections/aircon-lp";

export const metadata: Metadata = {
  title:
    "業務用エアコン販売・設置 | 全メーカー対応 | WELLTECH",
  description:
    "業務用エアコンの購入・設置・修理をワンストップで。下取りあり・長期保証・補助金対応。全メーカー取り扱い、最短2日で設置完了。まずは無料お見積りから。",
  alternates: { canonical: "/aircon" },
  openGraph: {
    title: "業務用エアコン販売・設置 | 全メーカー対応 | WELLTECH",
    description:
      "下取り・長期保証。全メーカー対応、最短2日設置。無料見積り受付中。",
    url: "https://well-tech.top/aircon",
    type: "website",
  },
};

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export default function AirconPage() {
  return (
    <div className="min-h-screen">
      <AirconHero />

      <RevealWrapper>
        <AirconLp lineUrl={LINE_URL} />
      </RevealWrapper>
    </div>
  );
}
