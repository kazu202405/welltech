import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";

export const metadata: Metadata = {
  title: "利用規約",
  description: "株式会社ウェルテックの協力会社募集サイト利用規約。本ウェブサイトの利用条件を定めています。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="利用規約"
        label="Terms of Service"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "利用規約" },
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
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">TS</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <p data-reveal>
                この利用規約（以下、「本規約」といいます。）は、株式会社ウェルテック（以下、「当社」といいます。）がこのウェブサイト上で提供する協力会社募集に関するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ご利用の皆さま（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
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
                <h2 className="text-xl font-bold mt-0 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第1条（適用）</h2>
                <p>
                  本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社が本ウェブサイト上で掲載する個別の規定は、本規約の一部を構成するものとします。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第2条（協力会社登録）</h2>
                <p>
                  本サービスにおける協力会社登録は、登録希望者が当社の定める方法によって登録を申請し、当社がヒアリング・審査を経てこれを承認することによって完了するものとします。当社は、以下の場合には登録を承認しないことがあります。
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>登録申請に際して虚偽の事項を届け出た場合</li>
                  <li>過去に本規約に違反したことがある者からの申請である場合</li>
                  <li>その他、当社が登録を相当でないと判断した場合</li>
                </ul>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第3条（禁止事項）</h2>
                <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当社または第三者の知的財産権、プライバシー、名誉その他の権利を侵害する行為</li>
                  <li>虚偽の情報を登録・送信する行為</li>
                  <li>本サービスの運営を妨害する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
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
                <h2 className="text-xl font-bold mt-0 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第4条（免責事項）</h2>
                <p>
                  当社は、本サービスに関してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。当社は、本ウェブサイトに掲載される情報の正確性、完全性、有用性等について保証するものではありません。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第5条（サービス内容の変更）</h2>
                <p>
                  当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
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
                <h2 className="text-xl font-bold mt-0 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第6条（利用規約の変更）</h2>
                <p>
                  当社は必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の利用規約は、本ウェブサイトに掲示された時点から効力を生じるものとします。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第7条（準拠法・管轄裁判所）</h2>
                <p>
                  本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                </p>
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
            name: "利用規約 | 株式会社ウェルテック",
            description: "株式会社ウェルテックの協力会社募集サイト利用規約。本ウェブサイトの利用条件を定めています。",
            url: "https://well-tech.top/terms",
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
