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
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <p data-reveal>
                株式会社ウェルテック（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービスにおける、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第1条（個人情報）</h2>
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

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第4条（個人情報の第三者提供）</h2>
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

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第6条（個人情報の開示・訂正・削除）</h2>
                <p>
                  ご本人から個人情報の開示・訂正・削除を求められた場合には、本人確認を行ったうえで、遅滞なく対応いたします。
                </p>
              </div>

              <div data-reveal>
                <h2 className="text-xl font-bold mt-10 mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">第7条（お問い合わせ窓口）</h2>
                <p>本ポリシーに関するお問い合わせは、下記までご連絡ください。</p>
                <div className="mt-4 bg-[var(--wt-bg)] p-6 rounded-lg text-sm space-y-1">
                  <p className="font-semibold text-[var(--wt-dark)]">株式会社ウェルテック</p>
                  <p>〒701-0206 岡山県岡山市南区妹尾3516</p>
                  <p>TEL: 086-941-0882</p>
                  <p>Email: info@well-tech.top</p>
                </div>
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
