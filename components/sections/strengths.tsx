"use client";

import { TrendingUp, MapPin, Banknote, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  {
    icon: TrendingUp,
    value: "20",
    unit: "倍",
    label: "入札案件成長率",
    description: "前年比で入札参加案件が20倍に成長。急拡大する案件を全国のパートナーと共に対応します。",
    color: "#f59e0b",
  },
  {
    icon: MapPin,
    value: "47",
    unit: "都道府県",
    label: "全国対応エリア",
    description: "北海道から沖縄まで全国の案件に対応。地元の案件をお任せできるパートナーを探しています。",
    color: "#2563eb",
  },
  {
    icon: Banknote,
    value: "100万〜",
    unit: "",
    label: "案件規模",
    description: "小規模修繕から大規模改修まで。規模に応じた適切な案件をマッチングします。",
    color: "#10b981",
  },
  {
    icon: Target,
    value: "100",
    unit: "億",
    label: "売上目標",
    description: "3年以内に売上100億円を目指す成長企業。パートナーと共に大きな目標に挑戦します。",
    color: "#f59e0b",
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
          description="急成長する案件数と全国展開で、安定した仕事量を提供します"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
