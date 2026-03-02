"use client";

import { UserPlus, MessageSquare, FileCheck, Handshake, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: UserPlus,
    title: "お問い合わせ",
    description: "フォームまたはお電話でご連絡ください",
  },
  {
    icon: MessageSquare,
    title: "ヒアリング",
    description: "対応可能エリア・工種・体制を確認",
  },
  {
    icon: FileCheck,
    title: "審査・登録",
    description: "必要書類の確認と協力会社登録",
  },
  {
    icon: Handshake,
    title: "案件マッチング",
    description: "最適な案件を優先的にご紹介",
  },
  {
    icon: Rocket,
    title: "取引開始",
    description: "継続的な案件供給でパートナーシップ構築",
  },
];

export function Flow() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="flow" className="py-20 md:py-28 bg-gray-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Flow"
          title="取引開始までの流れ"
          description="お問い合わせから最短2週間で取引開始"
        />

        {/* デスクトップ: 横並び */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* 接続線 */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-[#2563eb]/20" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              data-reveal
              className="flex flex-col items-center text-center relative z-10 w-1/5 px-2"
            >
              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2563eb]/20 flex items-center justify-center mb-4 shadow-sm">
                <step.icon className="w-8 h-8 text-[#2563eb]" />
              </div>
              <span className="text-xs font-semibold text-[#2563eb] mb-1">
                STEP {index + 1}
              </span>
              <h3 className="text-base font-bold text-[#0a1628] mb-1">{step.title}</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* モバイル: 縦並び */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} data-reveal className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-xl border-2 border-[#2563eb]/20 flex items-center justify-center shadow-sm shrink-0">
                  <step.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-6 bg-[#2563eb]/20 mt-2" />
                )}
              </div>
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#2563eb]">STEP {index + 1}</span>
                <h3 className="text-base font-bold text-[#0a1628]">{step.title}</h3>
                <p className="text-sm text-[#64748b]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
