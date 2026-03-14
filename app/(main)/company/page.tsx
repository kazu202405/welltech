import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社ウェルテック",
  description:
    "株式会社ウェルテックの会社概要。代表者情報、事業内容、許認可、沿革など企業情報を掲載しています。",
  alternates: { canonical: "/company" },
};

const companyInfo = [
  { label: "商号", value: "株式会社ウェルテック" },
  { label: "英文社名", value: "WELLTECH Co., Ltd." },
  { label: "代表者", value: "代表取締役　藤野 隆史" },
  {
    label: "所在地",
    value: "〒701-0206\n岡山県岡山市南区妹尾3516",
  },
  { label: "電話番号", value: "086-941-0882" },
  { label: "FAX", value: "086-236-6387" },
  { label: "メールアドレス", value: "info@well-tech.top" },
  { label: "設立", value: "2018年（平成30年）5月" },
  { label: "資本金", value: "500万円" },
  { label: "従業員数", value: "●名（2026年3月現在）" },
  {
    label: "事業内容",
    value:
      "建築一式工事\n電気工事\n管工事（給排水・空調設備）\n内装仕上工事\n給湯器設置・交換（エコキュート等）\n太陽光パネル設置工事\nLED照明工事\n産業廃棄物収集運搬",
  },
  { label: "営業時間", value: "7:30 〜 17:00（土日祝休み）" },
  {
    label: "対応エリア",
    value: "全国（北海道〜沖縄）",
  },
  {
    label: "主要取引先",
    value: "官公庁・地方自治体\n●●株式会社\n●●株式会社",
  },
];

const licenses = [
  {
    category: "建設業許可",
    detail: "岡山県知事許可（般-6）第27090号",
  },
  {
    category: "電気工事業登録",
    detail: "登録電気工事業者 岡山県知事登録 2023-168",
  },
  {
    category: "産業廃棄物",
    detail: "産業廃棄物収集運搬業許可",
  },
];

const history = [
  { year: "2018年5月", event: "岡山県岡山市南区にて株式会社ウェルテック設立" },
  { year: "2023年", event: "登録電気工事業者として岡山県知事登録" },
  {
    year: "2024年",
    event: "全国への施工パートナーネットワーク拡大開始",
  },
  {
    year: "2025年",
    event: "エコキュート補助金事業への取り組み強化",
  },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="会社概要"
        label="Company"
        description="株式会社ウェルテックの企業情報をご紹介します。"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "会社概要" },
        ]}
      />

      <RevealWrapper>
        {/* 会社概要テーブル */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* 装飾 */}
          <div
            data-reveal-diag
            className="absolute top-[10%] -left-[10%] w-[110%] h-[120px] bg-gradient-to-r from-[rgba(0,133,74,0.07)] via-[rgba(0,133,74,0.03)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div
            data-reveal-diag-r
            className="absolute bottom-[20%] -right-[10%] w-[70%] h-[80px] bg-gradient-to-l from-[rgba(232,168,23,0.05)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-green absolute -top-16 right-[8%] w-[280px] h-[280px] md:w-[360px] md:h-[360px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">COMPANY</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* 基本情報 */}
            <div data-reveal className="mb-20">
              <h2 className="text-2xl font-bold text-[var(--wt-dark)] mb-2">基本情報</h2>
              <div className="w-12 h-0.5 bg-[var(--wt-primary)] mb-8" />
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {companyInfo.map((item, i) => (
                      <tr
                        key={item.label}
                        className={`border-b border-[var(--wt-primary)]/10 ${
                          i % 2 === 1 ? "bg-[var(--wt-bg)]" : ""
                        }`}
                      >
                        <th className="py-4 px-3 sm:px-4 w-[120px] sm:w-[200px] bg-[var(--wt-bg)] font-semibold text-xs sm:text-sm text-[var(--wt-dark)] align-top">
                          {item.label}
                        </th>
                        <td className="py-4 px-3 sm:px-4 text-xs sm:text-sm text-[var(--wt-gray)] whitespace-pre-line leading-relaxed">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 許認可 */}
            <div data-reveal className="mb-20">
              <h2 className="text-2xl font-bold text-[var(--wt-dark)] mb-2">許認可・登録</h2>
              <div className="w-12 h-0.5 bg-[var(--wt-primary)] mb-8" />
              <div className="grid gap-4">
                {licenses.map((lic) => (
                  <div
                    key={lic.category}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-xl bg-[var(--wt-bg)] border border-[rgba(0,133,74,0.06)]"
                  >
                    <span className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-[var(--wt-primary)]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                        <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.12" />
                        <path d="M5.5 9.5l2 2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {lic.category}
                    </span>
                    <span className="text-sm text-[var(--wt-gray)]">{lic.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 沿革 */}
            <div data-reveal className="mb-20">
              <h2 className="text-2xl font-bold text-[var(--wt-dark)] mb-2">沿革</h2>
              <div className="w-12 h-0.5 bg-[var(--wt-primary)] mb-8" />
              <div className="relative pl-8 border-l-2 border-[var(--wt-primary)]/15">
                {history.map((item, i) => (
                  <div key={i} className="relative pb-8 last:pb-0">
                    {/* タイムラインドット */}
                    <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-[var(--wt-primary)] border-2 border-white" />
                    <p className="text-sm font-bold text-[var(--wt-primary)] mb-1">{item.year}</p>
                    <p className="text-sm text-[var(--wt-gray)] leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 代表挨拶 */}
            <div data-reveal>
              <h2 className="text-2xl font-bold text-[var(--wt-dark)] mb-2">代表挨拶</h2>
              <div className="w-12 h-0.5 bg-[var(--wt-primary)] mb-8" />
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--wt-bg)] to-white border border-[rgba(0,133,74,0.06)]">
                <div className="space-y-4 text-sm text-[var(--wt-gray)] leading-relaxed">
                  <p>
                    株式会社ウェルテックのホームページをご覧いただき、誠にありがとうございます。
                  </p>
                  <p>
                    当社は2018年の設立以来、公共工事・民間工事を問わず、全国各地の建設案件に携わってまいりました。
                    電気工事、内装工事、空調設備、給湯器設置など、幅広い工種に対応し、
                    お客様と協力会社様の双方にとって価値あるパートナーシップの構築を目指しています。
                  </p>
                  <p>
                    近年はエコキュートをはじめとする省エネ設備の普及促進にも力を入れており、
                    国の補助金制度を活用した住宅設備の導入支援にも取り組んでいます。
                  </p>
                  <p>
                    今後とも、安全と品質を第一に、地域社会の発展と環境に配慮した事業運営に努めてまいります。
                    何卒よろしくお願い申し上げます。
                  </p>
                  <p className="pt-4 text-right font-semibold text-[var(--wt-dark)]">
                    代表取締役　藤野 隆史
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section className="relative py-16 md:py-20 bg-[var(--wt-bg)] overflow-hidden">
          <div className="orb orb-green absolute bottom-[-40px] right-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl font-bold text-[var(--wt-dark)] mb-2">アクセス</h2>
              <div className="w-12 h-0.5 bg-[var(--wt-primary)] mb-8" />
              <div className="rounded-2xl overflow-hidden border border-[rgba(0,133,74,0.08)] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5!2d133.856!3d34.616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5bKh5bGx55yM5bKh5bGx5biC5Y2X5Yy65aaJ5bC-MzUxNg!5e0!3m2!1sja!2sjp!4v1"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社ウェルテック 所在地"
                />
              </div>
              <p className="mt-4 text-sm text-[var(--wt-gray)]">
                〒701-0206 岡山県岡山市南区妹尾3516
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "会社概要 | 株式会社ウェルテック",
            description:
              "株式会社ウェルテックの会社概要。代表者情報、事業内容、許認可、沿革など企業情報を掲載しています。",
            url: "https://well-tech.top/company",
            mainEntity: {
              "@type": "Organization",
              name: "株式会社ウェルテック",
              legalName: "株式会社ウェルテック",
              alternateName: "WELLTECH Co., Ltd.",
              url: "https://well-tech.top",
              foundingDate: "2018-05",
              founder: {
                "@type": "Person",
                name: "藤野隆史",
                jobTitle: "代表取締役",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "妹尾3516",
                addressLocality: "岡山市南区",
                addressRegion: "岡山県",
                postalCode: "701-0206",
                addressCountry: "JP",
              },
              telephone: "+81-86-941-0882",
              faxNumber: "+81-86-236-6387",
              email: "info@well-tech.top",
              areaServed: {
                "@type": "Country",
                name: "Japan",
              },
            },
          }),
        }}
      />
    </div>
  );
}
