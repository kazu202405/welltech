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
    description: "継続的にお取引開始",
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
          {/* 接続線（グラデーション） */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#2563eb]/10 via-[#2563eb]/25 to-[#2563eb]/10" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              data-reveal
              className="flex flex-col items-center text-center relative z-10 w-1/5 px-2"
            >
              {/* アイコンコンテナ */}
              <div className="relative mb-5">
                <div className="w-20 h-20 bg-white rounded-2xl border border-[#2563eb]/15 flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#2563eb]/30 hover:-translate-y-1">
                  <step.icon className="w-8 h-8 text-[#2563eb]" />
                </div>
                {/* ステップ番号バッジ */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#2563eb] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-[11px] font-bold text-white">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-[#0a1628] mb-1.5">{step.title}</h3>
              <p className="text-xs text-[#64748b] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* モバイル: 縦並び */}
        <div className="md:hidden space-y-1">
          {steps.map((step, index) => (
            <div key={step.title} data-reveal className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 bg-white rounded-xl border border-[#2563eb]/15 flex items-center justify-center shadow-sm shrink-0">
                    <step.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-[#2563eb] rounded-md flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{index + 1}</span>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-[#2563eb]/20 to-transparent mt-2" />
                )}
              </div>
              <div className="pt-3 pb-4">
                <h3 className="text-base font-bold text-[#0a1628]">{step.title}</h3>
                <p className="text-sm text-[#64748b] mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
