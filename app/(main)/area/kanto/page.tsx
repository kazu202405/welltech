import type { Metadata } from "next";
import Link from "next/link";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { AreaCrossLinks } from "@/components/ui/area-cross-links";

export const metadata: Metadata = {
  title: "関東エリアの施工パートナー募集",
  description:
    "関東エリア（東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県）で施工パートナー・協力会社を募集中。電気工事、内装工事、空調設備工事、給湯器設置など豊富な案件をご用意。ウェルテックと共に成長しませんか。",
  keywords: [
    "関東 建設 協力会社",
    "東京 電気工事 パートナー",
    "神奈川 施工 募集",
    "埼玉 建設 協力会社",
    "千葉 電気工事",
    "関東 内装工事 募集",
    "東京 空調設備 パートナー",
  ],
  alternates: {
    canonical: "/area/kanto",
  },
  openGraph: {
    title: "関東エリアの施工パートナー募集 | 株式会社ウェルテック",
    description:
      "関東エリアで電気工事・内装工事・空調設備工事などの施工パートナーを募集中。都市部の大型案件から住宅向け工事まで幅広く対応。",
    type: "website",
    locale: "ja_JP",
    url: "https://well-tech.top/area/kanto",
    siteName: "株式会社ウェルテック",
  },
};

/* 対応工種一覧 */
const workTypes = [
  { name: "電気工事", description: "商業施設・オフィスビルの電気設備工事" },
  { name: "内装工事", description: "店舗・オフィスの内装リニューアル工事" },
  { name: "空調設備工事", description: "大型施設の空調設備設置・更新" },
  { name: "給湯器設置・交換", description: "住宅・施設の給湯器設置・交換工事" },
  { name: "LED照明工事", description: "省エネ照明への切り替え工事" },
  { name: "建築一式工事", description: "テナント改修・新築工事全般" },
  { name: "太陽光パネル設置", description: "産業用・住宅用太陽光発電設備" },
];

/* 対応エリア */
const prefectures = [
  "東京都",
  "神奈川県",
  "埼玉県",
  "千葉県",
  "茨城県",
  "栃木県",
  "群馬県",
];

/* 実績数値 */
const stats = [
  { label: "月間案件数", value: "300+", unit: "件" },
  { label: "対応工種数", value: "7", unit: "種類" },
  { label: "対応都県数", value: "7", unit: "都県" },
  { label: "パートナー満足度", value: "96", unit: "%" },
];

export default function KantoAreaPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="関東エリアの施工パートナー募集"
        label="Area Partner Recruitment"
        description="東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県で施工パートナーを募集しています"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "対応エリア", href: "/area" },
          { label: "関東" },
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
        {/* 対応工種セクション */}
        <section className="bg-[var(--wt-bg)] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 data-reveal className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-4">
                この地域の対応工種
              </h2>
              <p data-reveal className="text-[var(--wt-gray)] max-w-2xl mx-auto">
                関東エリアでは以下の工種で施工パートナーを募集しています
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {workTypes.map((work, i) => (
                <div
                  key={work.name}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <h3 className="font-bold text-[var(--wt-dark)] mb-1.5">
                    {work.name}
                  </h3>
                  <p className="text-sm text-[var(--wt-gray)]">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* この地域の特徴 */}
        <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
          <div className="orb orb-blue absolute bottom-[-60px] right-[-40px] w-[240px] h-[240px]" aria-hidden="true" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <h2 data-reveal className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-8 text-center">
              この地域の特徴
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p data-reveal className="text-[var(--wt-gray)] leading-relaxed text-base sm:text-lg">
                関東エリアは、ウェルテックの中で最も案件数が多い地域です。東京都を中心に、オフィスビルや商業施設の改修・リニューアル案件が年間を通じて豊富にあり、安定した受注が見込めます。特に電気工事・空調設備工事の需要は高く、継続的にパートナー企業を募集しています。
              </p>
              <p data-reveal className="text-[var(--wt-gray)] leading-relaxed text-base sm:text-lg">
                住宅向けの給湯器交換やLED照明の導入工事も、埼玉県・千葉県・神奈川県を中心に堅調な需要があります。戸建て住宅からマンション一括工事まで幅広い案件規模に対応しており、小規模事業者の方でも参画しやすい案件を多数ご用意しています。
              </p>
              <p data-reveal className="text-[var(--wt-gray)] leading-relaxed text-base sm:text-lg">
                また、東京湾岸エリアや都心部の再開発プロジェクトも多数進行中です。大規模な建築一式工事から、太陽光パネル設置などの環境対応工事まで、今後も成長が期待できるエリアです。ウェルテックと共に事業拡大を目指しませんか。
              </p>
            </div>
          </div>
        </section>

        {/* 実績数値セクション */}
        <section className="bg-[var(--wt-bg)] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 data-reveal className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-10 text-center">
              関東エリアの実績
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  data-reveal
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <p className="text-sm text-[var(--wt-gray)] mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-[var(--wt-primary)]">
                    {stat.value}
                    <span className="text-base font-medium text-[var(--wt-gray)] ml-0.5">
                      {stat.unit}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-reveal className="bg-gradient-to-br from-[var(--wt-primary)] to-[#003d85] rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                関東エリアで
                <br className="sm:hidden" />
                パートナーになりませんか？
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
                まずはお気軽にお問い合わせください。案件内容や条件について詳しくご説明いたします。
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
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[var(--wt-primary)] font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  086-941-0882
                </a>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      <AreaCrossLinks current="/area/kanto" />
    </div>
  );
}
