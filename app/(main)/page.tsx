import { CorporateHero } from "@/components/sections/corporate-hero";
import { MVV } from "@/components/sections/mvv";
import { Services } from "@/components/sections/services";
import { Works } from "@/components/sections/works";
import { EcocuteBanner } from "@/components/sections/ecocute-banner";
import { CorporateCta } from "@/components/sections/corporate-cta";
import { LineAccent } from "@/components/ui/line-accent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "株式会社ウェルテック | 持続可能な建設業を、共に。",
  description:
    "全国の協力会社ネットワークと確かな施工実績で、公共・民間問わず最適な建設ソリューションを提供。施工パートナー募集中。",
  alternates: { canonical: "/" },
};

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
      founder: { "@type": "Person", name: "藤野隆史" },
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
      areaServed: { "@type": "Country", name: "Japan" },
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
      name: "株式会社ウェルテック | 持続可能な建設業を共に",
      isPartOf: { "@id": "https://well-tech.top/#website" },
      about: { "@id": "https://well-tech.top/#organization" },
      description:
        "全国の協力会社ネットワークと確かな施工実績で、公共・民間問わず最適な建設ソリューションを提供。",
      inLanguage: "ja",
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
      <CorporateHero />
      <MVV />
      <LineAccent />
      <Services />
      <LineAccent variant="gray" />
      <Works />
      <EcocuteBanner />
      <LineAccent />
      <CorporateCta />
    </>
  );
}
