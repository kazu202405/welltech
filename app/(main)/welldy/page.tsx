import type { Metadata } from "next";
import { WelldyHero } from "@/components/sections/welldy-hero";
import { WelldyConcept } from "@/components/sections/welldy-concept";
import { WelldyLineup } from "@/components/sections/welldy-lineup";
import { WelldyQuality } from "@/components/sections/welldy-quality";
import { WelldyOrder } from "@/components/sections/welldy-order";
import { WelldyCta } from "@/components/sections/welldy-cta";

export const metadata: Metadata = {
  title: "ウェルディ | 建築・設備資材ブランド | WELLTECH",
  description:
    "ウェルディは株式会社ウェルテックが運営する建築・設備資材ブランド。給水継手・空調配管・梱包資材まで、職人の現場に最適な資材を最短で届けます。",
  alternates: { canonical: "/welldy" },
  openGraph: {
    title: "ウェルディ | 建築・設備資材ブランド | WELLTECH",
    description:
      "職人の現場を止めない、最適な資材を、最短で。給水継手・空調配管・梱包資材を取り扱うウェルテックの自社ブランドです。",
    url: "https://well-tech.top/welldy",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      "@id": "https://well-tech.top/welldy/#brand",
      name: "ウェルディ",
      alternateName: "Welldy",
      slogan: "職人の仕事を、もっと確かなものに。",
      logo: "https://well-tech.top/welldy/logo-jp.png",
      url: "https://well-tech.top/welldy",
      parentOrganization: { "@id": "https://well-tech.top/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://well-tech.top/welldy/#webpage",
      url: "https://well-tech.top/welldy",
      name: "ウェルディ | 建築・設備資材ブランド",
      isPartOf: { "@id": "https://well-tech.top/#website" },
      about: { "@id": "https://well-tech.top/welldy/#brand" },
      inLanguage: "ja",
    },
  ],
};

export default function WelldyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WelldyHero />
      <WelldyConcept />
      <WelldyLineup />
      <WelldyQuality />
      <WelldyOrder />
      <WelldyCta />
    </>
  );
}
