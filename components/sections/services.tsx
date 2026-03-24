"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

const services = [
  {
    title: "公共工事",
    subtitle: "Public Works",
    description:
      "公共施設の新設・改修、インフラ整備まで。入札から完工まで一貫した施工管理体制で対応します。",
    image: "/photo/S__49889490_0.jpg",
    tags: ["建築一式", "電気工事", "管工事", "耐震改修"],
  },
  {
    title: "民間工事",
    subtitle: "Private Works",
    description:
      "商業施設、オフィスビル、工場・倉庫の施工。お客様のニーズに合わせた最適なソリューションを提供します。",
    image: "/photo/S__49889493_0.jpg",
    tags: ["商業施設", "オフィス", "工場", "内装"],
  },
  {
    title: "設備工事",
    subtitle: "Equipment",
    description:
      "電気・空調・給排水設備の設計から施工まで。快適な環境づくりを技術力で支えます。",
    image: "/photo/S__49889504_0.jpg",
    tags: ["電気設備", "空調設備", "給排水", "LED"],
  },
  {
    title: "遮熱・省エネ",
    subtitle: "Energy Saving",
    description:
      "工場・倉庫の遮熱塗装、断熱改修工事。大手自動車メーカー工場での施工実績があります。",
    image: "/photo/S__49889510_0.jpg",
    tags: ["遮熱塗装", "断熱工事", "省エネ", "太陽光"],
  },
];

export function Services() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      id="services"
      className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden"
    >
      {/* 装飾 */}
      <div
        data-reveal-diag
        className="absolute top-[15%] -left-[10%] w-[110%] h-[100px] bg-gradient-to-r from-[rgba(0,133,74,0.06)] via-[rgba(0,133,74,0.02)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "-10deg" } as React.CSSProperties}
        aria-hidden="true"
      />
      <div className="orb orb-accent absolute bottom-[-60px] right-[-40px] w-[240px] h-[240px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] dot-grid opacity-30" aria-hidden="true" />
      <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">02</div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div data-reveal className="mb-16 md:mb-20">
          <SectionHeading
            number="02"
            label="Services"
            title="事業内容"
            description="公共から民間まで、幅広い建設ニーズに対応"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-reveal-item
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* 画像 */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white/60 text-[10px] font-semibold tracking-[0.15em] uppercase">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* テキスト */}
              <div className="p-6 sm:p-8">
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[var(--wt-primary)] bg-[var(--wt-primary)]/8 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
