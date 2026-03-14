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
import { EcocuteBanner } from "@/components/sections/ecocute-banner";
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
        {
          "@type": "Question",
          name: "建設業許可がなくても登録できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、建設業許可をお持ちでない場合でもご登録いただけます。500万円未満の軽微な工事であれば許可不要で対応可能です。許可取得を検討中の方もお気軽にご相談ください。",
          },
        },
        {
          "@type": "Question",
          name: "どのような工種の案件がありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "電気工事、内装工事、空調設備工事、給湯器設置・交換、建築一式工事、管工事、大工工事、屋根工事など幅広い工種の案件があります。公共建築入札案件から民間の小規模工事まで対応しています。",
          },
        },
        {
          "@type": "Question",
          name: "案件の規模はどの程度ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "10万円程度の給湯器交換などの小規模案件から、数千万円規模の公共工事まで幅広い案件があります。協力会社様の対応可能な規模に合わせてご紹介いたします。",
          },
        },
        {
          "@type": "Question",
          name: "登録に費用はかかりますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "協力会社の登録に費用は一切かかりません。LINE公式アカウントまたはお電話でお問い合わせいただければ、無料でヒアリング・審査を行い、案件のご紹介を開始いたします。",
          },
        },
        {
          "@type": "Question",
          name: "遠方の案件も対応可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "当社は全国に案件がございますが、基本的には協力会社様の対応可能エリア内の案件をご紹介しています。出張対応が可能な場合は、その旨をお伝えいただければエリア外の案件もご案内可能です。",
          },
        },
        {
          "@type": "Question",
          name: "必要な書類はありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "登録時には、建設業許可証（お持ちの場合）、会社概要、工事経歴書などをご提出いただく場合があります。詳細はヒアリング時にご案内いたしますので、まずはお気軽にお問い合わせください。",
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
        {
          "@type": "HowToStep",
          position: 1,
          name: "お問い合わせ",
          text: "フォームまたはお電話でご連絡ください。LINE公式アカウントからもお問い合わせいただけます。",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "ヒアリング",
          text: "対応可能エリア・工種・施工体制について詳しくお伺いします。",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "審査・登録",
          text: "必要書類の確認と審査を行い、協力会社として正式に登録します。",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "案件マッチング",
          text: "登録情報に基づき、最適な案件を優先的にご紹介いたします。",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "取引開始",
          text: "案件決定後、継続的なお取引を開始します。",
        },
      ],
    },
    {
      "@type": "Service",
      serviceType: "建設施工パートナー募集",
      provider: { "@id": "https://well-tech.top/#organization" },
      areaServed: { "@type": "Country", name: "Japan" },
      description:
        "全国の公共・民間建設案件における施工パートナー（協力会社）の募集・マッチングサービス",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "対応工種",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "電気工事" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "建築一式工事" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "内装工事" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "空調設備工事" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "管工事" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "給湯器設置・交換" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "太陽光パネル設置" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "LED照明工事" } },
        ],
      },
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
      <EcocuteBanner />
      <RegistrationForm />
    </>
  );
}
