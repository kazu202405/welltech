import type { Metadata } from "next";
import Link from "next/link";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { AreaCrossLinks } from "@/components/ui/area-cross-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { CountUp } from "@/components/ui/count-up";

export const metadata: Metadata = {
  title: "東北・北海道エリアの施工パートナー募集",
  description:
    "東北・北海道エリアで施工パートナー（協力会社）を募集中。公共インフラの耐震改修・更新案件や寒冷地特有の空調・断熱工事など幅広い案件をご紹介。仙台都市圏・北海道の大型公共工事にも対応。東北 建設 協力会社、仙台 電気工事 パートナー募集。",
  keywords: [
    "東北 建設 協力会社",
    "仙台 電気工事 パートナー",
    "北海道 施工 募集",
    "東北 公共工事",
    "北海道 建設パートナー",
    "寒冷地 空調工事",
  ],
  alternates: { canonical: "/area/tohoku-hokkaido" },
  openGraph: {
    title: "東北・北海道エリアの施工パートナー募集 | 株式会社ウェルテック",
    description:
      "東北・北海道エリアで協力会社を募集中。公共インフラの耐震改修・寒冷地工事など安定した案件を供給。",
    url: "https://well-tech.top/area/tohoku-hokkaido",
  },
};

const workTypes = [
  { name: "電気工事", description: "公共施設・商業施設の電気設備工事" },
  { name: "建築一式工事", description: "新築・改修の建築工事全般" },
  { name: "空調設備工事", description: "寒冷地対応の空調・暖房設備工事" },
  { name: "管工事", description: "給排水・ガス・暖房配管工事" },
  { name: "屋根工事", description: "積雪対応の屋根葺き替え・補修" },
  { name: "防水工事", description: "凍害対策を含む防水施工" },
  { name: "内装工事", description: "断熱改修を含む内装仕上げ工事" },
];

const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
];

const stats = [
  { label: "月間案件数", value: "40", unit: "件以上" },
  { label: "対応工種数", value: "7", unit: "種類" },
  { label: "対応道県数", value: "7", unit: "道県" },
  { label: "公共案件比率", value: "70", unit: "%" },
];

const features = [
  {
    number: "01",
    title: "公共インフラの更新・耐震改修",
    description:
      "老朽化した学校・病院・公共施設の防災設備強化や道路・橋梁の大規模改修プロジェクトが各地で進行中。公共案件の比率が高く、安定した受注が見込めるエリアです。",
  },
  {
    number: "02",
    title: "寒冷地特有の設備工事需要",
    description:
      "空調・暖房設備工事や断熱改修工事のニーズが年間を通じて発生。凍結対策の配管工事、省エネ対応の空調更新、積雪対応の屋根葺き替えなど、専門性の高い施工が求められています。",
  },
  {
    number: "03",
    title: "仙台・北海道の都市開発",
    description:
      "仙台都市圏では商業施設やマンションの建設需要が堅調。北海道では新幹線延伸に関連する大型公共工事や再開発プロジェクトが進行中で、幅広い工種でのパートナーを必要としています。",
  },
];

export default function TohokuHokkaidoAreaPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="東北・北海道エリアの施工パートナー募集"
        label="Area Partner Recruitment"
        description="公共インフラの更新・耐震改修から寒冷地特有の設備工事まで、東北・北海道エリアの施工パートナーを募集しています"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "対応エリア", href: "/area" },
          { label: "東北・北海道" },
        ]}
      >
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {prefectures.map((pref) => (
            <span
              key={pref}
              className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20"
            >
              {pref}
            </span>
          ))}
        </div>
      </SubPageHero>

      <RevealWrapper>
        {/* セクション01: 対応工種 */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* 斜線装飾 */}
          <div
            data-reveal-diag
            className="absolute top-[12%] -left-[10%] w-[110%] h-[120px] bg-gradient-to-r from-[rgba(0,85,184,0.07)] via-[rgba(0,85,184,0.03)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-blue absolute -top-16 right-[8%] w-[280px] h-[280px] md:w-[360px] md:h-[360px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">01</div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
              <div data-reveal>
                <SectionHeading
                  number="01"
                  label="Work Types"
                  title="この地域の対応工種"
                  description="東北・北海道エリアでは以下の工種で施工パートナーを募集しています"
                  align="left"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {workTypes.map((work) => (
                  <div
                    key={work.name}
                    data-reveal-item
                    className="group bg-[var(--wt-bg)] rounded-xl p-5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--wt-primary)]/20"
                  >
                    <h3 className="font-bold text-[var(--wt-dark)] mb-1.5 group-hover:text-[var(--wt-primary)] transition-colors">
                      {work.name}
                    </h3>
                    <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* セクション02: この地域の特徴 */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          {/* 斜線装飾（右から） */}
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(0,85,184,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-accent absolute top-[-40px] left-[5%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-blue absolute bottom-[-80px] right-[-40px] w-[320px] h-[320px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">02</div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
              <div data-reveal>
                <SectionHeading
                  number="02"
                  label="Features"
                  title="この地域の特徴"
                  description="公共インフラ案件を中心に、寒冷地特有の専門工事や都市開発案件が充実しています。"
                  align="left"
                />
              </div>
              <div>
                {features.map((item) => (
                  <div
                    key={item.number}
                    data-reveal-item
                    className="list-item-accent py-6 border-b border-black/[0.08] cursor-default"
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs font-semibold text-[var(--wt-primary)] tracking-wider font-mono">{item.number}</span>
                      <h3 className="text-lg font-bold text-[var(--wt-dark)]">{item.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--wt-gray)] leading-relaxed pl-8">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* セクション03: 実績数値 */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* 斜線装飾 */}
          <div
            data-reveal-diag
            className="absolute top-[20%] -left-[10%] w-[90%] h-[100px] bg-gradient-to-r from-[rgba(232,168,23,0.06)] via-[rgba(232,168,23,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-blue absolute top-[-30px] left-[15%] w-[220px] h-[220px]" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">03</div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div data-reveal className="text-center mb-12 md:mb-16">
              <SectionHeading
                number="03"
                label="Results"
                title="東北・北海道エリアの実績"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  data-reveal
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className="bg-[var(--wt-bg)] rounded-2xl p-6 sm:p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <p className="text-sm text-[var(--wt-gray)] mb-3">{stat.label}</p>
                  <p className="text-4xl sm:text-5xl font-bold text-[var(--wt-primary)] tracking-tight">
                    <CountUp value={stat.value} />
                    <span className="text-base font-medium text-[var(--wt-gray)] ml-1">
                      {stat.unit}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* セクション04: CTA */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div className="orb orb-blue absolute top-[-60px] right-[10%] w-[300px] h-[300px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[5%] w-[200px] h-[200px]" aria-hidden="true" />

          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div data-reveal className="bg-gradient-to-br from-[var(--wt-primary)] to-[#003d85] rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden">
              {/* CTA内のドットグリッド装飾 */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] dot-grid opacity-20" aria-hidden="true" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
                  東北・北海道エリアで
                  <br className="sm:hidden" />
                  パートナーになりませんか？
                </h2>
                <p className="text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
                  公共案件を中心に安定した案件をご紹介いたします。まずはお気軽にご連絡ください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://line.me/R/ti/p/@384jyztd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow-green inline-flex items-center justify-center gap-2 bg-[var(--wt-green)] hover:brightness-110 text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    LINEで相談する
                  </Link>
                  <a
                    href="tel:086-941-0882"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full transition-all text-lg border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    086-941-0882
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <AreaCrossLinks current="/area/tohoku-hokkaido" />
    </div>
  );
}
