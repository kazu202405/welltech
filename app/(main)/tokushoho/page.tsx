import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "株式会社ウェルテックの特定商取引法に基づく表記。事業者情報を記載しています。",
  alternates: { canonical: "/tokushoho" },
};

export default function TokushohoPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="特定商取引法に基づく表記"
        label="Legal Information"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "特定商取引法に基づく表記" },
        ]}
      />
      <RevealWrapper>
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* 斜線装飾 */}
          <div
            data-reveal-diag
            className="absolute top-[10%] -left-[10%] w-[110%] h-[120px] bg-gradient-to-r from-[rgba(0,133,74,0.07)] via-[rgba(0,133,74,0.03)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* 斜線装飾（右から） */}
          <div
            data-reveal-diag-r
            className="absolute bottom-[20%] -right-[10%] w-[70%] h-[80px] bg-gradient-to-l from-[rgba(232,168,23,0.05)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-green absolute -top-16 right-[8%] w-[280px] h-[280px] md:w-[360px] md:h-[360px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="orb orb-green absolute bottom-[10%] right-[-80px] w-[260px] h-[260px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] dot-grid opacity-30" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">LEGAL</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="overflow-x-auto" data-reveal>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 w-1/3 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">事業者名</th>
                    <td className="py-4 text-[var(--wt-gray)]">株式会社ウェルテック</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">代表者</th>
                    <td className="py-4 text-[var(--wt-gray)]">藤野隆史</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">所在地</th>
                    <td className="py-4 text-[var(--wt-gray)]">〒701-0206 岡山県岡山市南区妹尾3516</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">電話番号</th>
                    <td className="py-4 text-[var(--wt-gray)]">086-941-0882</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">FAX</th>
                    <td className="py-4 text-[var(--wt-gray)]">086-236-6387</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">メールアドレス</th>
                    <td className="py-4 text-[var(--wt-gray)]">info@well-tech.top</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">営業時間</th>
                    <td className="py-4 text-[var(--wt-gray)]">7:30 - 17:00（土日祝休み）</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">設立</th>
                    <td className="py-4 text-[var(--wt-gray)]">2018年5月</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">資本金</th>
                    <td className="py-4 text-[var(--wt-gray)]">500万円</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">建設業許可</th>
                    <td className="py-4 text-[var(--wt-gray)]">岡山県知事許可（般-6）第27090号</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">電気工事業登録</th>
                    <td className="py-4 text-[var(--wt-gray)]">登録電気工事業者 岡山県知事登録2023-168</td>
                  </tr>
                  <tr className="border-b border-[var(--wt-primary)]/10 even:bg-[var(--wt-bg)]">
                    <th className="py-4 pr-4 bg-[var(--wt-bg)] font-semibold text-[var(--wt-dark)]">その他許可</th>
                    <td className="py-4 text-[var(--wt-gray)]">産業廃棄物収集運搬業許可</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </RevealWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "特定商取引法に基づく表記 | 株式会社ウェルテック",
            description: "株式会社ウェルテックの特定商取引法に基づく表記。事業者情報を記載しています。",
            url: "https://well-tech.top/tokushoho",
            publisher: {
              "@type": "Organization",
              name: "株式会社ウェルテック",
              url: "https://well-tech.top",
            },
          }),
        }}
      />
    </div>
  );
}
