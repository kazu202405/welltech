import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "対応エリア一覧 - 全国の施工パートナー募集",
  description:
    "株式会社ウェルテックの全国対応エリア一覧。北海道から沖縄まで、各地域で施工パートナー（協力会社）を募集しています。地域に密着した案件をご紹介します。",
  keywords: [
    "全国 建設 協力会社 募集",
    "施工パートナー エリア",
    "建設会社 全国対応",
  ],
  alternates: { canonical: "/area" },
};

const areas = [
  {
    slug: "kanto",
    name: "関東",
    prefectures: "東京・神奈川・埼玉・千葉・茨城・栃木・群馬",
    description: "都市部のオフィスビル・商業施設の改修案件が豊富。住宅向け給湯器交換・電気工事の需要も高い地域です。",
    highlight: "案件数最多エリア",
  },
  {
    slug: "kansai",
    name: "関西",
    prefectures: "大阪・兵庫・京都・奈良・滋賀・和歌山",
    description: "商業施設・オフィスビルの改修案件が中心。大阪・神戸の都市部での内装・電気工事需要が高い地域です。",
    highlight: "都市部案件充実",
  },
  {
    slug: "chugoku-shikoku",
    name: "中国・四国",
    prefectures: "岡山・広島・山口・鳥取・島根・香川・愛媛・徳島・高知",
    description: "本社所在地の岡山を中心に最も案件が多い地域。公共施設の改修・新設案件が豊富です。",
    highlight: "本社拠点エリア",
  },
  {
    slug: "chubu",
    name: "中部・北陸",
    prefectures: "愛知・岐阜・三重・静岡・長野・新潟・富山・石川・福井",
    description: "製造業の集積地帯で工場・倉庫関連の電気工事需要が高い。名古屋都市圏の再開発も活発です。",
    highlight: "工場案件豊富",
  },
  {
    slug: "kyushu",
    name: "九州・沖縄",
    prefectures: "福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島・沖縄",
    description: "福岡都市圏の再開発案件が増加中。太陽光発電の適地として設置案件も豊富です。",
    highlight: "再開発案件増加中",
  },
  {
    slug: "tohoku-hokkaido",
    name: "東北・北海道",
    prefectures: "北海道・青森・岩手・宮城・秋田・山形・福島",
    description: "公共インフラの耐震改修需要が高い。寒冷地特有の空調・断熱工事のニーズも。",
    highlight: "公共案件比率高",
  },
];

export default function AreaIndexPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "対応エリア" },
      ]} />
      {/* ヒーロー */}
      <section className="relative bg-[var(--wt-primary)] py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--wt-primary)] to-[#003d85] opacity-90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base font-medium tracking-widest text-blue-200 uppercase mb-4">
            Service Area
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            全国対応エリア
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            北海道から沖縄まで、全国6エリアで
            <br className="hidden sm:block" />
            施工パートナーを募集しています
          </p>
        </div>
      </section>

      {/* エリア一覧 */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/area/${area.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:border-[var(--wt-primary)]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors">
                    {area.name}エリア
                  </h2>
                  <span className="shrink-0 text-[10px] font-semibold tracking-wider text-[var(--wt-primary)] bg-[var(--wt-primary)]/8 px-2.5 py-1 rounded-full">
                    {area.highlight}
                  </span>
                </div>
                <p className="text-xs text-[var(--wt-gray-light)] mb-3">{area.prefectures}</p>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed mb-4">{area.description}</p>
                <span className="text-sm font-semibold text-[var(--wt-primary)] group-hover:underline">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--wt-bg)] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)] mb-4">
            全国どこでもパートナー登録可能
          </h2>
          <p className="text-[var(--wt-gray)] mb-8 leading-relaxed">
            対応可能なエリアが限定されていても問題ありません。<br className="hidden sm:block" />
            お住まいの地域の案件を優先的にご紹介いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://line.me/R/ti/p/@384jyztd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--wt-green)] hover:brightness-110 text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg"
            >
              LINEで相談する
            </Link>
            <a
              href="tel:086-941-0882"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[var(--wt-primary)] font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg border border-gray-200"
            >
              086-941-0882
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
