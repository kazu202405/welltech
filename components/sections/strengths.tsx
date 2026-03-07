"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const strengths = [
  {
    number: "01",
    title: "月間入札件数 最大20倍",
    description: "通常企業と比較して最大20倍の入札件数。安定した案件を回せる体制が整っています。",
  },
  {
    number: "02",
    title: "全国対応の協力会社ネットワーク",
    description: "北海道から沖縄まで全国の協力会社様と連携。地元の案件を地元のプロにお任せします。",
  },
  {
    number: "03",
    title: "10万〜数千万の幅広い案件規模",
    description: "給湯器交換の小規模案件から数千万規模の公共工事まで幅広く対応しています。",
  },
];

export function Strengths() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="strengths" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* 左: ヘッディング */}
          <div data-reveal>
            <SectionHeading
              number="02"
              label="Strengths"
              title="ウェルテックの強み"
              description="案件を継続的に回せる体制が整っています。公共建築入札から民間工事まで、協力会社様に安定して案件をお任せできる環境です。"
              align="left"
            />
          </div>

          {/* 右: 強みリスト */}
          <div data-reveal>
            {strengths.map((item) => (
              <div key={item.number} className="py-6 border-b border-black/[0.08]">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs font-semibold text-[var(--wt-primary)] tracking-wider">{item.number}</span>
                  <h3 className="text-lg font-bold text-[var(--wt-dark)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed pl-8">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
