import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { AirconLp } from "@/components/sections/aircon-lp";

export const metadata: Metadata = {
  title:
    "業務用・家庭用エアコン販売・設置 | 月々2,700円〜 全メーカー対応 | WELLTECH",
  description:
    "エアコンの購入・設置・修理をワンストップで。下取りあり・分割手数料0円・長期保証・補助金対応。全メーカー取り扱い、最短2日で設置完了。まずは無料お見積りから。",
  alternates: { canonical: "/aircon" },
  openGraph: {
    title: "業務用・家庭用エアコン販売 | 月々2,700円〜 | WELLTECH",
    description:
      "下取り・分割手数料0円・長期保証。全メーカー対応、最短2日設置。無料見積り受付中。",
    url: "https://well-tech.top/aircon",
    type: "website",
  },
};

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export default function AirconPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="エアコンのことなら、すべておまかせ。"
        label="Air Conditioning"
        description="購入・設置・修理・下取り、ぜんぶコミコミ。月々2,700円〜で最新エアコンに交換できます。"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "エアコン販売・設置" },
        ]}
      >
        {/* ヒーロー内バッジ */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <text x="8" y="11.5" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="bold">¥</text>
            </svg>
            分割手数料 0円
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            下取り対応
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            最短2日で設置
          </span>
        </div>
      </SubPageHero>

      <RevealWrapper>
        <AirconLp lineUrl={LINE_URL} />
      </RevealWrapper>
    </div>
  );
}
