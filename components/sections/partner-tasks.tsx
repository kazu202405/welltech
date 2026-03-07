"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const revealRef = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);

  const setRefs = (el: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (revealRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-orb-1]", {
        y: -50, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 2 },
      });
      gsap.to("[data-orb-2]", {
        y: 35, x: 15, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
      gsap.to("[data-wm]", {
        y: -60, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={setRefs} id="partner-tasks" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 斜線スライドイン（下部配置） */}
      <div
        data-reveal-diag-r
        className="absolute bottom-[8%] -right-[10%] w-[110%] h-[160px] bg-gradient-to-l from-[rgba(0,85,184,0.08)] via-[rgba(0,85,184,0.04)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "12deg" } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        data-reveal-diag
        className="absolute bottom-[20%] -left-[5%] w-[70%] h-[50px] bg-gradient-to-r from-[rgba(232,168,23,0.06)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "8deg" } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-blue absolute top-[-40px] left-[60%] w-[350px] h-[350px]" aria-hidden="true" />
      <div data-orb-2 className="orb orb-accent absolute bottom-[-40px] right-[-60px] w-[200px] h-[200px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div className="absolute bottom-0 left-0 w-[200px] h-[250px] dot-grid opacity-40" aria-hidden="true" />

      {/* 大胆なウォーターマーク */}
      <div
        data-wm
        className="watermark-bold absolute top-8 right-0 lg:right-[5%] font-mono z-0"
        aria-hidden="true"
      >
        05
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">

          <div>
            <div data-reveal>
              <SectionHeading
                number="05"
                label="Tasks"
                title="お願いしたいこと"
                description="案件に応じて以下の業務をお任せします。現地調査から施工まで、一貫して対応いただける体制を歓迎します。"
                align="left"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-lg" data-reveal-image>
              <img
                src="/photo/S__49889469_0.jpg"
                alt="協力会社による現地調査・施工管理の様子"
                className="w-full max-w-sm rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            {tasks.map((task, index) => (
              <div
                key={task.title}
                data-reveal-item
                className="list-item-accent py-6 border-b border-black/[0.08] cursor-default"
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
