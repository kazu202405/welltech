import type { Metadata } from "next";
import Link from "next/link";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { AreaCrossLinks } from "@/components/ui/area-cross-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { CountUp } from "@/components/ui/count-up";

export const metadata: Metadata = {
  title: "関西エリアの施工パートナー募集",
  description:
    "関西エリアで施工パートナー（協力会社）を募集中。大阪・神戸の商業施設やオフィスビルの改修案件を中心に、電気工事・内装工事・空調設備工事など幅広い工種に対応。関西 建設 協力会社、大阪 電気工事 パートナー募集。",
  keywords: [
    "関西 建設 協力会社",
    "大阪 電気工事 パートナー",
    "京都 施工 募集",
    "兵庫 建設 協力会社",
    "関西 内装工事 募集",
    "大阪 空調設備工事",
  ],
  alternates: { canonical: "/area/kansai" },
  openGraph: {
    title: "関西エリアの施工パートナー募集 | 株式会社ウェルテック",
    description:
      "大阪・神戸の都市部を中心に関西エリアで協力会社を募集中。商業施設・オフィスビルの改修案件が豊富。万博関連のインフラ需要も。",
    url: "https://well-tech.top/area/kansai",
  },
};

const workTypes = [
  { name: "電気工事", description: "商業施設・オフィスビルの電気設備工事" },
  { name: "内装工事", description: "店舗・オフィスの内装リニューアル工事" },
  { name: "空調設備工事", description: "大型施設の空調設備設置・更新" },
  { name: "建築一式工事", description: "テナント改修・新築工事全般" },
  { name: "LED照明工事", description: "省エネ照明への切り替え工事" },
  { name: "太陽光パネル設置", description: "産業用・住宅用太陽光発電設備" },
];

const prefectures = [
  "大阪府",
  "兵庫県",
  "京都府",
  "奈良県",
  "滋賀県",
  "和歌山県",
];

const stats = [
  { label: "月間案件数", value: "80", unit: "件以上" },
  { label: "対応工種数", value: "6", unit: "種類" },
  { label: "対応府県数", value: "6", unit: "府県" },
  { label: "パートナー継続率", value: "93", unit: "%" },
];

const features = [
  {
    number: "01",
    title: "商業施設・オフィスビルの改修需要",
    description:
      "大阪・神戸の都市部を中心に商業施設やオフィスビルの改修案件が数多くございます。テナント入れ替えに伴う内装工事や老朽化した設備の更新工事など、年間を通じて安定した需要があります。",
  },
  {
    number: "02",
    title: "歴史的建造物・公共施設の維持管理",
    description:
      "京都・奈良エリアでは、歴史的建造物の改修や公共施設の維持管理案件が中心です。地域特有の建築規制に対応できる技術力を持つパートナー企業様との連携を重視しています。",
  },
  {
    number: "03",
    title: "万博・省エネ関連の需要拡大",
    description:
      "万博関連のインフラ整備需要をはじめ、関西圏全体でLED照明への切り替えや太陽光パネル設置など、省エネ・再生可能エネルギー関連の案件も急速に拡大しています。",
  },
];

export default function KansaiAreaPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="関西エリアの施工パートナー募集"
        label="Area Partner Recruitment"
        description="大阪・神戸・京都を中心に、関西全域で信頼できる施工パートナーを募集しています"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "対応エリア", href: "/area" },
          { label: "関西" },
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
                  description="関西エリアでは以下の工種で施工パートナーを募集しています"
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
                  description="商業施設の改修案件から万博関連需要まで、関西エリアは多様な案件が揃っています。"
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
                title="関西エリアの実績"
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
                  関西エリアで
                  <br className="sm:hidden" />
                  パートナーになりませんか？
                </h2>
                <p className="text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
                  商業施設・オフィスビルの豊富な案件と、今後の万博関連需要。成長する関西エリアで一緒に事業を拡大しましょう。
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

      <AreaCrossLinks current="/area/kansai" />
    </div>
  );
}
