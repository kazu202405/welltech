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
      // 装飾要素のみGSAP
      gsap.to("[data-orb-1]", {
        y: -50, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 2 },
      });
      gsap.to("[data-orb-2]", {
        y: 35, x: 15, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={setRefs} id="partner-tasks" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-blue absolute top-[-40px] left-[60%] w-[350px] h-[350px]" aria-hidden="true" />
      <div data-orb-2 className="orb orb-accent absolute bottom-[-40px] right-[-60px] w-[200px] h-[200px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div className="absolute bottom-0 left-0 w-[200px] h-[250px] dot-grid opacity-40" aria-hidden="true" />

      {/* 幾何学シェイプ: ダイヤモンド */}
      <div className="absolute top-20 right-[8%] pointer-events-none" aria-hidden="true">
        <svg data-shape-diamond width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="30" y="2" width="38" height="38" rx="2" transform="rotate(45 30 2)" stroke="rgba(0,85,184,0.1)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* 幾何学シェイプ: 三角形 */}
      <div className="absolute bottom-32 right-[20%] pointer-events-none" aria-hidden="true">
        <svg data-shape-tri width="50" height="44" viewBox="0 0 50 44" fill="none">
          <path d="M25 2 L48 42 L2 42 Z" stroke="rgba(232,168,23,0.1)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* 装飾ライン */}
      <div className="absolute top-[30%] left-0 pointer-events-none" aria-hidden="true">
        <svg width="120" height="1" viewBox="0 0 120 1" fill="none">
          <line x1="0" y1="0.5" x2="120" y2="0.5" stroke="rgba(0,85,184,0.06)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">
          <div
            className="absolute -top-8 -left-2 lg:-left-6 text-[8rem] md:text-[10rem] font-bold text-[var(--wt-primary)]/[0.04] leading-none select-none pointer-events-none font-mono"
            aria-hidden="true"
          >
            05
          </div>

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
                alt="施工現場"
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
