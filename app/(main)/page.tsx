import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Strengths } from "@/components/sections/strengths";
import { Works } from "@/components/sections/works";
import { CaseTypes } from "@/components/sections/case-types";
import { PartnerTasks } from "@/components/sections/partner-tasks";
import { IdealPartner } from "@/components/sections/ideal-partner";
import { Flow } from "@/components/sections/flow";
import { Faq } from "@/components/sections/faq";
import { RegistrationForm } from "@/components/sections/registration-form";
import { LineAccent } from "@/components/ui/line-accent";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://well-tech.top/#organization",
      name: "株式会社ウェルテック",
      url: "https://well-tech.top",
      logo: "https://well-tech.top/photo/S__49889490_0.jpg",
      description:
        "公共・民間の建設案件を全国展開する建設会社。施工パートナー（協力会社）を募集中。",
      address: {
        "@type": "PostalAddress",
        streetAddress: "妹尾3516",
        addressLocality: "岡山市南区",
        addressRegion: "岡山県",
        postalCode: "701-0206",
        addressCountry: "JP",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+81-86-941-0882",
        email: "info@well-tech.top",
        contactType: "customer service",
        availableLanguage: "Japanese",
      },
      foundingDate: "2018-05",
      founder: {
        "@type": "Person",
        name: "藤野隆史",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://well-tech.top/#localbusiness",
      name: "株式会社ウェルテック",
      image: "https://well-tech.top/photo/S__49889490_0.jpg",
      url: "https://well-tech.top",
      telephone: "086-941-0882",
      email: "info@well-tech.top",
      address: {
        "@type": "PostalAddress",
        streetAddress: "妹尾3516",
        addressLocality: "岡山市南区",
        addressRegion: "岡山県",
        postalCode: "701-0206",
        addressCountry: "JP",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:00",
      },
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Japan",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://well-tech.top/#website",
      url: "https://well-tech.top",
      name: "株式会社ウェルテック",
      publisher: { "@id": "https://well-tech.top/#organization" },
      inLanguage: "ja",
    },
    {
      "@type": "WebPage",
      "@id": "https://well-tech.top/#webpage",
      url: "https://well-tech.top",
      name: "株式会社ウェルテック | 全国施工パートナー募集",
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
            text: "もちろんです。全国に案件がございますので、対応可能なエリアをご登録いただければ、そのエリア内の案件を優先的にご紹介いたします。特定の都道府県のみでも問題ありません。",
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
            text: "登録後、ヒアリングと審査を経て最短2週間程度で案件のご紹介が可能です。対応可能な工種・エリアにマッチする案件が入り次第、優先的にお声がけいたします。",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <LineAccent />
      <Strengths />
      <Works />
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
    </>
  );
}
