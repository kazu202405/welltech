"use client";

import { Search, FileText, ClipboardCheck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tasks = [
  {
    icon: Search,
    title: "現地調査",
    description: "案件現場の状況確認・写真撮影・採寸などの現地調査をお願いします。",
    detail: "所要時間: 1〜3時間程度",
  },
  {
    icon: FileText,
    title: "見積作成",
    description: "現調結果をもとに、工事見積書の作成をお願いします。",
    detail: "フォーマット支給あり",
  },
  {
    icon: ClipboardCheck,
    title: "施工管理",
    description: "工程管理・品質管理・安全管理など施工全体の管理をお願いします。",
    detail: "経験者優遇",
  },
  {
    icon: Wrench,
    title: "施工",
    description: "各種工事の施工を担当していただきます。規模に応じたチーム編成も可能です。",
    detail: "複数案件同時対応可",
  },
];

export function PartnerTasks() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="partner-tasks" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tasks"
          title="お願いしたいこと"
          description="案件に応じて以下の業務をお任せします"
          variant="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <div
              key={task.title}
              data-reveal
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              {/* 番号 */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-12 h-12 bg-[#2563eb]/20 rounded-xl flex items-center justify-center mb-4">
                <task.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{task.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-3">{task.description}</p>
              <span className="inline-block text-xs text-[#f59e0b] font-medium bg-[#f59e0b]/10 px-3 py-1 rounded-full">
                {task.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
