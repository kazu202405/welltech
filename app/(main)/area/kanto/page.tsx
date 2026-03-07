import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
  { name: "電気工事", icon: "⚡" },
  { name: "内装工事", icon: "🏠" },
  { name: "空調設備工事", icon: "❄️" },
  { name: "給湯器設置・交換", icon: "🔥" },
  { name: "LED照明工事", icon: "💡" },
  { name: "建築一式工事", icon: "🏗️" },
  { name: "太陽光パネル設置", icon: "☀️" },
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
  { label: "月間案件数", value: "300+", suffix: "件" },
  { label: "対応工種数", value: "7", suffix: "種" },
  { label: "対応都県数", value: "7", suffix: "都県" },
  { label: "パートナー満足度", value: "96", suffix: "%" },
];

export default function KantoAreaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "対応エリア", href: "/area" },
        { label: "関東" },
      ]} />
      {/* ヒーローセクション */}
      <section className="relative bg-[var(--wt-primary)] py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--wt-primary)] to-[#003d85] opacity-90" />
        <div className="relative mx-auto max-w-5xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-medium tracking-widest uppercase opacity-80">
            Area
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            関東エリアの
            <br className="md:hidden" />
            施工パートナー募集
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed opacity-90 md:text-lg">
            東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県で
            <br className="hidden md:inline" />
            施工パートナーを募集しています
          </p>
        </div>
      </section>

      {/* 対応エリア一覧 */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--wt-dark)] md:text-3xl">
            対応エリア
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {prefectures.map((pref) => (
              <span
                key={pref}
                className="rounded-full border border-[var(--wt-primary)] bg-blue-50 px-5 py-2 text-sm font-medium text-[var(--wt-primary)]"
              >
                {pref}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* この地域の対応工種 */}
      <section className="bg-[var(--wt-bg)] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-[var(--wt-dark)] md:text-3xl">
            この地域の対応工種
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workTypes.map((work) => (
              <div
                key={work.name}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-2xl"
                  aria-hidden="true"
                >
                  {work.icon}
                </span>
                <span className="text-base font-semibold text-[var(--wt-dark)]">
                  {work.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* この地域の特徴 */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--wt-dark)] md:text-3xl">
            この地域の特徴
          </h2>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-[var(--wt-gray)] md:text-lg">
            <p>
              関東エリアは、ウェルテックの中で最も案件数が多い地域です。東京都を中心に、オフィスビルや商業施設の改修・リニューアル案件が年間を通じて豊富にあり、安定した受注が見込めます。特に電気工事・空調設備工事の需要は高く、継続的にパートナー企業を募集しています。
            </p>
            <p>
              住宅向けの給湯器交換やLED照明の導入工事も、埼玉県・千葉県・神奈川県を中心に堅調な需要があります。戸建て住宅からマンション一括工事まで幅広い案件規模に対応しており、小規模事業者の方でも参画しやすい案件を多数ご用意しています。
            </p>
            <p>
              また、東京湾岸エリアや都心部の再開発プロジェクトも多数進行中です。大規模な建築一式工事から、太陽光パネル設置などの環境対応工事まで、今後も成長が期待できるエリアです。ウェルテックと共に事業拡大を目指しませんか。
            </p>
          </div>
        </div>
      </section>

      {/* 実績・数値セクション */}
      <section className="bg-[var(--wt-primary)] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
            関東エリアの実績
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <p className="text-3xl font-bold md:text-4xl">
                  {stat.value}
                  <span className="text-lg font-normal opacity-80">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mt-2 text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-[var(--wt-bg)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--wt-dark)] md:text-3xl">
            関東エリアで
            <br className="md:hidden" />
            パートナーになりませんか？
          </h2>
          <p className="mb-10 text-base text-[var(--wt-gray)] md:text-lg">
            まずはお気軽にお問い合わせください。
            <br />
            案件内容や条件について詳しくご説明いたします。
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* LINE CTA */}
            <a
              href="https://line.me/R/ti/p/@384jyztd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
              style={{ backgroundColor: "var(--wt-green)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで相談する
            </a>

            {/* 電話CTA */}
            <a
              href="tel:086-941-0882"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[var(--wt-primary)] bg-white px-8 py-4 text-base font-bold text-[var(--wt-primary)] shadow-lg transition-transform hover:scale-105 sm:w-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              086-941-0882
            </a>
          </div>

          <p className="mt-4 text-sm text-[var(--wt-gray)]">
            受付時間：平日 9:00〜18:00
          </p>
        </div>
      </section>

      <AreaCrossLinks current="/area/kanto" />
    </div>
  );
}
