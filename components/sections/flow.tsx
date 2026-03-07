"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { title: "お問い合わせ", description: "フォームまたはお電話でご連絡" },
  { title: "ヒアリング", description: "対応エリア・工種・体制を確認" },
  { title: "審査・登録", description: "必要書類の確認と協力会社登録" },
  { title: "案件マッチング", description: "最適な案件を優先的にご紹介" },
  { title: "取引開始", description: "継続的にお取引開始" },
];

export function Flow() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="flow" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* 左: ヘッディング */}
          <div data-reveal>
            <SectionHeading
              number="07"
              label="Flow"
              title="取引開始までの流れ"
              description="お問い合わせから最短2週間で取引開始。シンプルなステップで協力会社登録が完了します。"
              align="left"
            />
          </div>

          {/* 右: ステップリスト */}
          <div data-reveal>
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-5 py-5 border-b border-black/[0.08]">
                <span className="text-3xl font-bold text-[var(--wt-primary)]/20 leading-none pt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[var(--wt-dark)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--wt-gray)] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
