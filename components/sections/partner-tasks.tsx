"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // ウォーターマーク
      gsap.from("[data-watermark]", {
        x: -60,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // 装飾SVG
      gsap.from("[data-deco-circle]", {
        strokeDashoffset: 440,
        duration: 2.2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });

      // 見出し
      gsap.from("[data-heading]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // 画像のclip-pathリビール
      gsap.from("[data-image-reveal]", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: el, start: "top 65%" },
      });

      // タスクリスト項目
      gsap.from("[data-task-item]", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 55%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="partner-tasks" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 装飾SVG */}
      <div className="absolute bottom-16 right-[5%] pointer-events-none" aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle
            data-deco-circle
            cx="80" cy="80" r="70"
            stroke="rgba(0,85,184,0.04)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset="0"
          />
        </svg>
      </div>
      <div className="absolute top-24 right-[15%] pointer-events-none" aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <line
            data-deco-line
            x1="0" y1="80" x2="80" y2="0"
            stroke="rgba(0,85,184,0.05)"
            strokeWidth="1"
            strokeDasharray="200"
            strokeDashoffset="0"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">
          {/* ウォーターマーク */}
          <div
            data-watermark
            className="absolute -top-8 -left-2 lg:-left-6 text-[8rem] md:text-[10rem] font-bold text-[var(--wt-primary)]/[0.04] leading-none select-none pointer-events-none font-mono"
            aria-hidden="true"
          >
            05
          </div>

          {/* 左: ヘッディング + 写真 */}
          <div>
            <div data-heading>
              <SectionHeading
                number="05"
                label="Tasks"
                title="お願いしたいこと"
                description="案件に応じて以下の業務をお任せします。現地調査から施工まで、一貫して対応いただける体制を歓迎します。"
                align="left"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-lg" data-image-reveal style={{ clipPath: "inset(0 0 0 0)" }}>
              <img
                src="/photo/S__49889469_0.jpg"
                alt="施工現場"
                className="w-full max-w-sm rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 右: タスクリスト */}
          <div>
            {tasks.map((task, index) => (
              <div
                key={task.title}
                data-task-item
                className="list-item-accent revealed py-6 border-b border-black/[0.08] cursor-default"
              >
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
