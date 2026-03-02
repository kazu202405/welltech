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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    icon: FileText,
    title: "見積作成",
    description: "現調結果をもとに、工事見積書の作成をお願いします。",
    detail: "フォーマット支給あり",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    icon: ClipboardCheck,
    title: "施工管理",
    description: "工程管理・品質管理・安全管理など施工全体の管理をお願いします。",
    detail: "経験者優遇",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
  },
  {
    icon: Wrench,
    title: "施工",
    description: "各種工事の施工を担当していただきます。規模に応じたチーム編成も可能です。",
    detail: "複数案件同時対応可",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
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
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
            >
              {/* 画像エリア */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={task.image}
                  alt={task.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                {/* アイコン */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <task.icon className="w-5 h-5 text-white" />
                </div>
                {/* 番号 */}
                <span className="absolute top-3 right-3 text-4xl font-bold text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* テキストエリア */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{task.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">{task.description}</p>
                <span className="inline-block text-xs text-[#f59e0b] font-medium bg-[#f59e0b]/10 px-3 py-1 rounded-full">
                  {task.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
