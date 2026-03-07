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
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
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
