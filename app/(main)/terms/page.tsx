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
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <p data-reveal>
                この利用規約（以下、「本規約」といいます。）は、株式会社ウェルテック（以下、「当社」といいます。）がこのウェブサイト上で提供する協力会社募集に関するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ご利用の皆さま（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
              </p>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第1条（適用）</h2>
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

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第4条（免責事項）</h2>
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

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第6条（利用規約の変更）</h2>
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

              <p className="mt-8 text-sm text-[var(--wt-gray)]">制定日: 2024年4月1日</p>
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
