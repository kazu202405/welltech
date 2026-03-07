"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "お問い合わせ", description: "フォームまたはお電話でご連絡" },
  { title: "ヒアリング", description: "対応エリア・工種・体制を確認" },
  { title: "審査・登録", description: "必要書類の確認と協力会社登録" },
  { title: "案件マッチング", description: "最適な案件を優先的にご紹介" },
  { title: "取引開始", description: "継続的にお取引開始" },
];

export function Flow() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-watermark]", {
        x: -60, opacity: 0, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // オーブのパララックス
      gsap.to("[data-orb-1]", {
        y: -35, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
      gsap.to("[data-orb-2]", {
        y: 25, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 2 },
      });

      // 幾何学シェイプ
      gsap.from("[data-shape-hex]", {
        scale: 0, rotation: -30, opacity: 0, duration: 1.2, ease: "back.out(1.5)",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      gsap.from("[data-shape-ring]", {
        scale: 0.3, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });

      gsap.from("[data-heading]", {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
      gsap.from("[data-progress-line]", {
        scaleY: 0, duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 60%" },
      });
      gsap.from("[data-step-dot]", {
        scale: 0, duration: 0.5, stagger: 0.15, ease: "back.out(2)",
        scrollTrigger: { trigger: el, start: "top 55%" },
      });
      gsap.from("[data-step-content]", {
        x: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 55%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="flow" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-blue absolute top-[-30px] right-[-50px] w-[300px] h-[300px]" aria-hidden="true" />
      <div data-orb-2 className="orb orb-accent absolute bottom-[-50px] left-[5%] w-[250px] h-[250px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div className="absolute top-0 right-0 w-[250px] h-[200px] dot-grid opacity-30" aria-hidden="true" />

      {/* 六角形シェイプ */}
      <div className="absolute top-20 right-[10%] pointer-events-none" aria-hidden="true">
        <svg data-shape-hex width="80" height="90" viewBox="0 0 80 90" fill="none">
          <path
            d="M40 2 L74 24 L74 66 L40 88 L6 66 L6 24 Z"
            stroke="rgba(0,85,184,0.08)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* 二重リングシェイプ */}
      <div className="absolute bottom-16 left-[12%] pointer-events-none" aria-hidden="true">
        <svg data-shape-ring width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="45" cy="45" r="40" stroke="rgba(0,85,184,0.06)" strokeWidth="1" fill="none" />
          <circle cx="45" cy="45" r="25" stroke="rgba(232,168,23,0.06)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* 装飾ライン */}
      <div className="absolute top-[50%] right-0 pointer-events-none" aria-hidden="true">
        <svg width="150" height="1" viewBox="0 0 150 1" fill="none">
          <line x1="0" y1="0.5" x2="150" y2="0.5" stroke="rgba(0,85,184,0.05)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">
          <div
            data-watermark
            className="absolute -top-8 -left-2 lg:-left-6 text-[8rem] md:text-[10rem] font-bold text-[var(--wt-primary)]/[0.04] leading-none select-none pointer-events-none font-mono"
            aria-hidden="true"
          >
            07
          </div>

          <div data-heading>
            <SectionHeading
              number="07"
              label="Flow"
              title="取引開始までの流れ"
              description="お問い合わせから最短2週間で取引開始。シンプルなステップで協力会社登録が完了します。"
              align="left"
            />
          </div>

          <div className="relative">
            <div
              data-progress-line
              className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--wt-primary)]/30 via-[var(--wt-primary)]/15 to-transparent origin-top"
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 py-5 relative">
                <div className="relative shrink-0 w-[30px] flex justify-center pt-1.5">
                  <div
                    data-step-dot
                    className="w-3 h-3 rounded-full bg-[var(--wt-primary)] shadow-[0_0_0_4px_rgba(0,85,184,0.1)]"
                  />
                </div>
                <div data-step-content className="flex-1 pb-2 border-b border-black/[0.06]">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-2xl font-bold text-[var(--wt-primary)]/15 leading-none font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-[var(--wt-dark)]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--wt-gray)] leading-relaxed ml-10">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
