import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Strengths } from "@/components/sections/strengths";
import { CaseTypes } from "@/components/sections/case-types";
import { PartnerTasks } from "@/components/sections/partner-tasks";
import { IdealPartner } from "@/components/sections/ideal-partner";
import { Flow } from "@/components/sections/flow";
import { Faq } from "@/components/sections/faq";
import { RegistrationForm } from "@/components/sections/registration-form";
import { LineAccent } from "@/components/ui/line-accent";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "施工パートナー募集 - 全国の協力会社募集",
  description:
    "株式会社ウェルテックの施工パートナー（協力会社）募集ページ。個人事業主から法人まで、全国6エリアで案件をご紹介。登録無料。",
  keywords: [
    "施工パートナー 募集",
    "協力会社 募集 建設",
    "建設業 協力会社 全国",
  ],
  alternates: { canonical: "/area" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://well-tech.top/area#webpage",
      url: "https://well-tech.top/area",
      name: "施工パートナー募集 | 株式会社ウェルテック",
      isPartOf: { "@id": "https://well-tech.top/#website" },
      about: { "@id": "https://well-tech.top/#organization" },
      description:
        "ウェルテックは公共・民間の建設案件を全国展開する建設会社です。施工パートナー（協力会社）を募集しています。",
      inLanguage: "ja",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "個人事業主でも登録できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、個人事業主の方でもご登録いただけます。建設業許可をお持ちの方はもちろん、許可取得前の方でも対応可能な案件がございますのでお気軽にご相談ください。",
          },
        },
        {
          "@type": "Question",
          name: "対応エリアが限定されていても登録できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "もちろんです。全国に案件がございますので、対応可能なエリアをご登録いただければ、そのエリア内の案件を優先的にご紹介いたします。",
          },
        },
        {
          "@type": "Question",
          name: "支払いサイクルはどのようになっていますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "基本的に月末締め翌月末払いです。公共案件の場合は発注元の支払いスケジュールに準じますが、当社から協力会社様への支払いは上記サイクルを維持します。",
          },
        },
        {
          "@type": "Question",
          name: "登録後、すぐに案件を紹介してもらえますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "登録後、ヒアリングと審査を経て最短2週間程度で案件のご紹介が可能です。",
          },
        },
        {
          "@type": "Question",
          name: "建設業許可がなくても登録できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、500万円未満の軽微な工事であれば許可不要で対応可能です。許可取得を検討中の方もお気軽にご相談ください。",
          },
        },
        {
          "@type": "Question",
          name: "どのような工種の案件がありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "電気工事、内装工事、空調設備工事、給湯器設置・交換、建築一式工事、管工事、大工工事、屋根工事など幅広い工種の案件があります。",
          },
        },
        {
          "@type": "Question",
          name: "案件の規模はどの程度ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "10万円程度の給湯器交換などの小規模案件から、数千万円規模の公共工事まで幅広い案件があります。",
          },
        },
        {
          "@type": "Question",
          name: "登録に費用はかかりますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "協力会社の登録に費用は一切かかりません。",
          },
        },
        {
          "@type": "Question",
          name: "遠方の案件も対応可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "基本的には対応可能エリア内の案件をご紹介しています。出張対応が可能な場合はエリア外もご案内可能です。",
          },
        },
        {
          "@type": "Question",
          name: "必要な書類はありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "建設業許可証（お持ちの場合）、会社概要、工事経歴書などをご提出いただく場合があります。詳細はヒアリング時にご案内します。",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "施工パートナー登録の流れ",
      description:
        "お問い合わせから最短2週間で取引開始。シンプルなステップで協力会社登録が完了します。",
      step: [
        { "@type": "HowToStep", position: 1, name: "お問い合わせ", text: "フォームまたはお電話でご連絡ください。" },
        { "@type": "HowToStep", position: 2, name: "ヒアリング", text: "対応可能エリア・工種・施工体制について詳しくお伺いします。" },
        { "@type": "HowToStep", position: 3, name: "審査・登録", text: "必要書類の確認と審査を行い、協力会社として正式に登録します。" },
        { "@type": "HowToStep", position: 4, name: "案件マッチング", text: "登録情報に基づき、最適な案件を優先的にご紹介いたします。" },
        { "@type": "HowToStep", position: 5, name: "取引開始", text: "案件決定後、継続的なお取引を開始します。" },
      ],
    },
    {
      "@type": "Service",
      serviceType: "建設施工パートナー募集",
      provider: { "@id": "https://well-tech.top/#organization" },
      areaServed: { "@type": "Country", name: "Japan" },
      description:
        "全国の公共・民間建設案件における施工パートナー（協力会社）の募集・マッチングサービス",
    },
  ],
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

export default function AreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パートナー募集セクション群 */}
      <Hero />
      <About />
      <LineAccent />
      <Strengths />
      <CaseTypes />
      <LineAccent />
      <PartnerTasks />
      <LineAccent variant="gray" />
      <IdealPartner />
      <LineAccent />
      <Flow />
      <LineAccent variant="gray" />
      <Faq />
      <RegistrationForm />

      {/* 対応エリア一覧 */}
      <RevealWrapper>
        <section id="area-list" className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[12%] -left-[10%] w-[110%] h-[120px] bg-gradient-to-r from-[rgba(0,133,74,0.07)] via-[rgba(0,133,74,0.03)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-green absolute -top-16 right-[8%] w-[280px] h-[280px] md:w-[360px] md:h-[360px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">08</div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div data-reveal className="text-center mb-12 md:mb-16">
              <SectionHeading
                number="08"
                label="Service Areas"
                title="対応エリア一覧"
                description="各エリアの特色に合わせた案件をご用意しています"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}`}
                  data-reveal-item
                  className="group relative block bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[var(--wt-primary)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-2xl" aria-hidden="true" />
                  <div className="absolute -top-4 -right-4 w-[100px] h-[100px] dot-grid opacity-0 group-hover:opacity-30 transition-opacity duration-300" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors">
                        {area.name}エリア
                      </h2>
                      <span className="shrink-0 text-[10px] font-semibold tracking-wider text-[var(--wt-primary)] bg-[var(--wt-primary)]/8 px-2.5 py-1 rounded-full">
                        {area.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--wt-gray-light)] mb-3">{area.prefectures}</p>
                    <p className="text-sm text-[var(--wt-gray)] leading-relaxed mb-5">{area.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--wt-primary)]">
                      <span>詳しく見る</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* エリアCTA */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(0,133,74,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-green absolute top-[-60px] right-[10%] w-[300px] h-[300px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[5%] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />

          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div data-reveal className="bg-gradient-to-br from-[var(--wt-primary)] to-[#005C33] rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] dot-grid opacity-20" aria-hidden="true" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
                  全国どこでも
                  <br className="sm:hidden" />
                  パートナー登録可能
                </h2>
                <p className="text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
                  対応可能なエリアが限定されていても問題ありません。お住まいの地域の案件を優先的にご紹介いたします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://line.me/R/ti/p/@384jyztd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow-green inline-flex items-center justify-center gap-2 bg-[var(--wt-green)] hover:brightness-110 text-white font-bold py-4 px-8 rounded-full transition-all text-lg shadow-lg"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    LINEで相談する
                  </a>
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
    </>
  );
}
