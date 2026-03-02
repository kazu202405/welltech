"use client";

import { TrendingUp, Users, Banknote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  {
    icon: TrendingUp,
    value: "最大20",
    unit: "倍",
    label: "月間入札件数",
    description: "通常企業と比較して最大20倍の入札件数。案件を安定的に回せる体制が整っています。",
    color: "#f59e0b",
  },
  {
    icon: Users,
    value: "全国",
    unit: "",
    label: "協力会社ネットワーク",
    description: "北海道から沖縄まで全国の協力会社様と連携。地元の案件を地元のプロにお任せします。",
    color: "#2563eb",
  },
  {
    icon: Banknote,
    value: "10万〜数千万",
    unit: "",
    label: "案件規模",
    description: "給湯器交換などの小規模案件から数千万規模の公共工事まで。幅広い案件に対応しています。",
    color: "#10b981",
  },
];

export function Strengths() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="strengths" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Strengths"
          title="ウェルテックの強み"
          description="案件を継続的に回せる体制が整っています"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              className="card-hover bg-white border border-gray-100 rounded-2xl p-6 text-center"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-[#0a1628]">{stat.value}</span>
                <span className="text-lg font-semibold text-[#0a1628]/70 ml-1">{stat.unit}</span>
              </div>
              <h3 className="text-base font-semibold text-[#0a1628] mb-2">{stat.label}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
