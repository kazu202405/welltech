import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { AreaCrossLinks } from "@/components/ui/area-cross-links";

export const metadata: Metadata = {
  title: "九州・沖縄エリアの施工パートナー募集",
  description:
    "九州・沖縄エリアで施工パートナー（協力会社）を募集中。福岡都市圏の再開発案件や太陽光パネル設置、沖縄リゾート施設の建設・改修など幅広い案件をご紹介。九州 建設 協力会社、福岡 電気工事 パートナー募集。",
  keywords: [
    "九州 建設 協力会社",
    "福岡 電気工事 パートナー",
    "沖縄 施工 募集",
    "九州 施工パートナー",
    "熊本 建設 協力会社",
    "太陽光パネル 設置 九州",
  ],
  alternates: { canonical: "/area/kyushu" },
  openGraph: {
    title: "九州・沖縄エリアの施工パートナー募集 | 株式会社ウェルテック",
    description:
      "九州・沖縄エリアで協力会社を募集中。福岡都市圏の再開発、太陽光発電設置、沖縄リゾート施設の建設・改修など豊富な案件。",
    url: "https://well-tech.top/area/kyushu",
  },
};

const workTypes = [
  { name: "電気工事", description: "商業施設・公共施設の電気設備工事" },
  { name: "建築一式工事", description: "新築・改修の建築工事全般" },
  { name: "内装工事", description: "商業施設・リゾート施設の内装仕上げ工事" },
  { name: "空調設備工事", description: "大型施設の空調設備設置・更新" },
  { name: "太陽光パネル設置", description: "産業用・住宅用太陽光発電設備" },
  { name: "屋根工事", description: "台風対策を含む屋根葺き替え・補修" },
  { name: "防水工事", description: "高温多湿環境に対応した防水施工" },
];

const prefectures = [
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

const stats = [
  { label: "月間案件数", value: "50", unit: "件以上" },
  { label: "対応工種数", value: "7", unit: "種類" },
  { label: "対応県数", value: "8", unit: "県" },
  { label: "パートナー継続率", value: "92", unit: "%" },
];

export default function KyushuAreaPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "対応エリア", href: "/area" },
        { label: "九州・沖縄" },
      ]} />
      {/* ヒーローセクション */}
      <section className="relative bg-[var(--wt-primary)] py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--wt-primary)] to-[#003d85] opacity-90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base font-medium tracking-widest text-blue-200 uppercase mb-4">
            Area Partner Recruitment
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            九州・沖縄エリアの
            <br className="sm:hidden" />
            施工パートナー募集
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            福岡都市圏の再開発から沖縄のリゾート施設まで、
            <br className="hidden sm:block" />
            九州・沖縄全域で施工パートナーを募集しています
          </p>
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
        </div>
      </section>

      {/* 対応工種セクション */}
      <section className="bg-[var(--wt-bg)] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-4">
              この地域の対応工種
            </h2>
            <p className="text-[var(--wt-gray)] max-w-2xl mx-auto">
              九州・沖縄エリアでは以下の工種で施工パートナーを募集しています
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workTypes.map((work) => (
              <div
                key={work.name}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="font-bold text-[var(--wt-dark)] mb-1.5">{work.name}</h3>
                <p className="text-sm text-[var(--wt-gray)]">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 地域の特徴セクション */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-8 text-center">
            この地域の特徴
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-[var(--wt-gray)] leading-relaxed text-base sm:text-lg">
              福岡都市圏では天神ビッグバンや博多コネクティッドをはじめとする大規模再開発プロジェクトが増加しています。商業施設・オフィスビルの新築・改修に伴い、電気工事・内装工事・空調設備工事の需要が高まっており、即戦力となるパートナー企業様を積極的に募集しています。
            </p>
            <p className="text-[var(--wt-gray)] leading-relaxed text-base sm:text-lg">
              九州は日照時間が長く、太陽光発電の適地として全国的にも注目されています。住宅用・産業用の太陽光パネル設置案件が豊富で、再生可能エネルギー関連の工事需要は今後も安定した成長が見込まれます。屋根工事や防水工事と組み合わせた総合的な施工が可能なパートナー企業様は特に歓迎いたします。
            </p>
            <p className="text-[var(--wt-gray)] leading-relaxed text-base sm:text-lg">
              沖縄エリアではリゾートホテルや観光施設の新築・改修工事の需要が継続的に発生しています。観光業の回復に伴い、内装工事・電気工事・空調設備工事など幅広い工種での施工パートナーが求められています。沖縄本島だけでなく離島の案件にも対応いただける企業様を歓迎いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 実績数値セクション */}
      <section className="bg-[var(--wt-bg)] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-10 text-center">
            九州・沖縄エリアの実績
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
              >
                <p className="text-sm text-[var(--wt-gray)] mb-2">{stat.label}</p>
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
          <div className="bg-gradient-to-br from-[var(--wt-primary)] to-[#003d85] rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              九州・沖縄エリアで
              <br className="sm:hidden" />
              パートナーになりませんか？
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
              再開発案件・太陽光発電・リゾート施設まで豊富な案件をご紹介します。まずはお気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://line.me/R/ti/p/@384jyztd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--wt-green)] hover:brightness-110 text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg"
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

      <AreaCrossLinks current="/area/kyushu" />
    </div>
  );
}
