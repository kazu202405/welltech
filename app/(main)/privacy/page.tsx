import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社ウェルテックのプライバシーポリシー。個人情報の取り扱いについて定めています。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="プライバシーポリシー"
        label="Privacy Policy"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "プライバシーポリシー" },
        ]}
      />
      <RevealWrapper>
        {/* セクション: 前文 */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* 斜線装飾 */}
          <div
            data-reveal-diag
            className="absolute top-[10%] -left-[10%] w-[110%] h-[120px] bg-gradient-to-r from-[rgba(0,133,74,0.07)] via-[rgba(0,133,74,0.03)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-green absolute -top-16 right-[8%] w-[280px] h-[280px] md:w-[360px] md:h-[360px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">PP</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <p data-reveal>
                株式会社ウェルテック（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>
            </div>
          </div>
        </section>

        {/* セクション: 第1条〜第3条 */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          {/* 斜線装飾（右から） */}
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(0,133,74,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-accent absolute top-[-40px] left-[5%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-green absolute bottom-[-80px] right-[-40px] w-[320px] h-[320px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">01</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal>
                <h2 className="text-xl font-bold mt-0 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第1条（個人情報）</h2>
                <p>
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、住所、電話番号、メールアドレス、会社名その他の記述等により特定の個人を識別できる情報を指します。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第2条（個人情報の収集方法）</h2>
                <p>
                  当社は、協力会社登録のお問い合わせ、LINE公式アカウントでのご連絡、電話・メールでのお問い合わせの際に、会社名、担当者名、電話番号、メールアドレス、対応可能エリア、保有資格等の情報をお尋ねすることがあります。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第3条（個人情報を収集・利用する目的）</h2>
                <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>協力会社の登録審査および案件のご紹介</li>
                  <li>工事案件に関するご連絡・お打ち合わせ</li>
                  <li>契約書類の作成および送付</li>
                  <li>お問い合わせに対する回答</li>
                  <li>当社サービスに関する重要なお知らせの通知</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: 第4条〜第5条 */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          {/* 斜線装飾 */}
          <div
            data-reveal-diag
            className="absolute top-[20%] -left-[10%] w-[90%] h-[100px] bg-gradient-to-r from-[rgba(232,168,23,0.06)] via-[rgba(232,168,23,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-green absolute top-[-30px] left-[15%] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-50px] right-[10%] w-[240px] h-[240px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">02</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal>
                <h2 className="text-xl font-bold mt-0 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第4条（個人情報の第三者提供）</h2>
                <p>
                  当社は、次に掲げる場合を除いて、あらかじめご本人の同意を得ることなく、第三者に個人情報を提供することはありません。
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第5条（個人情報の管理）</h2>
                <p>
                  当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざんおよび漏えい等を防止するため、適切なセキュリティ対策を講じます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: 第6条〜第7条 + 制定日 */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          {/* 斜線装飾（右から） */}
          <div
            data-reveal-diag-r
            className="absolute top-[12%] -right-[10%] w-[70%] h-[90px] bg-gradient-to-l from-[rgba(0,133,74,0.05)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          {/* オーブ */}
          <div className="orb orb-green absolute -top-16 right-[8%] w-[280px] h-[280px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-60px] left-[-40px] w-[220px] h-[220px]" aria-hidden="true" />
          {/* ドットグリッド */}
          <div className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] dot-grid opacity-40" aria-hidden="true" />
          {/* ウォーターマーク */}
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">03</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal>
                <h2 className="text-xl font-bold mt-0 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第6条（個人情報の開示・訂正・削除）</h2>
                <p>
                  ご本人から個人情報の開示・訂正・削除を求められた場合には、本人確認を行ったうえで、遅滞なく対応いたします。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第7条（お問い合わせ窓口）</h2>
                <p>本ポリシーに関するお問い合わせは、下記までご連絡ください。</p>
                <div className="mt-4 bg-white p-6 rounded-lg text-sm space-y-1 border border-gray-100 shadow-sm">
                  <p className="font-semibold text-[var(--wt-dark)]">株式会社ウェルテック</p>
                  <p>〒701-0206 岡山県岡山市南区妹尾3516</p>
                  <p>TEL: 086-941-0882</p>
                  <p>Email: info@well-tech.top</p>
                </div>
              </div>

              <p data-reveal className="mt-8 text-sm text-[var(--wt-gray)]">制定日: 2024年4月1日</p>
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
            name: "プライバシーポリシー | 株式会社ウェルテック",
            description: "株式会社ウェルテックのプライバシーポリシー。個人情報の取り扱いについて定めています。",
            url: "https://well-tech.top/privacy",
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
