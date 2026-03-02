"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Banknote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function useCountUp(end: number, duration: number = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const stats = [
  {
    icon: TrendingUp,
    prefix: "最大",
    countTo: 20,
    unit: "倍",
    label: "月間入札件数",
    description: "通常企業と比較して最大20倍の入札件数。案件を安定的に回せる体制が整っています。",
    color: "#f59e0b",
    accent: "from-[#f59e0b] to-[#f97316]",
  },
  {
    icon: Users,
    prefix: "",
    countTo: null,
    displayValue: "全国",
    unit: "",
    label: "協力会社ネットワーク",
    description: "北海道から沖縄まで全国の協力会社様と連携。地元の案件を地元のプロにお任せします。",
    color: "#2563eb",
    accent: "from-[#2563eb] to-[#3b82f6]",
  },
  {
    icon: Banknote,
    prefix: "",
    countTo: null,
    displayValue: "10万〜数千万",
    unit: "",
    label: "案件規模",
    description: "給湯器交換などの小規模案件から数千万規模の公共工事まで。幅広い案件に対応しています。",
    color: "#10b981",
    accent: "from-[#10b981] to-[#34d399]",
  },
];

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const { count, ref } = useCountUp(stat.countTo ?? 0);

  return (
    <div
      data-reveal
      className="relative card-hover-premium bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 text-center overflow-hidden"
    >
      {/* アクセントボーダー上部 */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accent}`} />

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
        style={{ backgroundColor: `${stat.color}12` }}
      >
        <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
      </div>
      <div className="mb-3">
        <span ref={ref} className="font-display text-4xl lg:text-5xl font-bold text-[#0a1628]">
          {stat.countTo !== null ? (
            <>{stat.prefix}{count}</>
          ) : (
            stat.displayValue
          )}
        </span>
        {stat.unit && (
          <span className="text-lg font-semibold text-[#0a1628]/60 ml-1">{stat.unit}</span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-[#0a1628]/70 tracking-wide mb-3">{stat.label}</h3>
      <p className="text-sm text-[#64748b] leading-relaxed">{stat.description}</p>
    </div>
  );
}

export function Strengths() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="strengths" className="py-20 md:py-28 bg-white section-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Strengths"
          title="ウェルテックの強み"
          description="案件を継続的に回せる体制が整っています"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
