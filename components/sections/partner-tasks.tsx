"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tasks = [
  {
    title: "現地調査",
    description: "案件現場の状況確認・写真撮影・採寸などの現地調査をお願いします。",
    detail: "所要時間: 1〜3時間程度",
  },
  {
    title: "見積作成",
    description: "現調結果をもとに、工事見積書の作成をお願いします。",
    detail: "フォーマット支給あり",
  },
  {
    title: "施工管理",
    description: "工程管理・品質管理・安全管理など施工全体の管理をお願いします。",
    detail: "経験者優遇",
  },
  {
    title: "施工",
    description: "各種工事の施工を担当していただきます。規模に応じたチーム編成も可能です。",
    detail: "複数案件同時対応可",
  },
];

export function PartnerTasks() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="partner-tasks" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* 左: ヘッディング + 写真 */}
          <div data-reveal>
            <SectionHeading
              number="05"
              label="Tasks"
              title="お願いしたいこと"
              description="案件に応じて以下の業務をお任せします。現地調査から施工まで、一貫して対応いただける体制を歓迎します。"
              align="left"
            />
            <div className="mt-8">
              <img
                src="/photo/S__49889465_0.jpg"
                alt="施工現場"
                className="w-full max-w-sm rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 右: タスクリスト */}
          <div data-reveal>
            {tasks.map((task, index) => (
              <div key={task.title} className="py-6 border-b border-black/[0.08]">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs font-semibold text-[var(--wt-primary)] tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--wt-dark)]">{task.title}</h3>
                </div>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed pl-8 mb-2">{task.description}</p>
                <p className="text-xs text-[var(--wt-primary)] font-medium pl-8">{task.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
