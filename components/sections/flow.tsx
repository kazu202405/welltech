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
      // ウォーターマーク
      gsap.from("[data-watermark]", {
        x: -60,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // 見出し
      gsap.from("[data-heading]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // プログレスライン（縦線が上から伸びる）
      gsap.from("[data-progress-line]", {
        scaleY: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 60%" },
      });

      // ステップのドット（順次ポップイン）
      gsap.from("[data-step-dot]", {
        scale: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(2)",
        scrollTrigger: { trigger: el, start: "top 55%" },
      });

      // ステップテキスト（順次スライドイン）
      gsap.from("[data-step-content]", {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 55%" },
      });

      // 装飾
      gsap.from("[data-deco-circle]", {
        strokeDashoffset: 283,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="flow" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 装飾SVG */}
      <div className="absolute top-16 right-[8%] pointer-events-none" aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle
            data-deco-circle
            cx="50" cy="50" r="45"
            stroke="rgba(0,85,184,0.05)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="283"
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
            07
          </div>

          {/* 左: ヘッディング */}
          <div data-heading>
            <SectionHeading
              number="07"
              label="Flow"
              title="取引開始までの流れ"
              description="お問い合わせから最短2週間で取引開始。シンプルなステップで協力会社登録が完了します。"
              align="left"
            />
          </div>

          {/* 右: ステップリスト（タイムライン風） */}
          <div className="relative">
            {/* プログレスライン */}
            <div
              data-progress-line
              className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--wt-primary)]/30 via-[var(--wt-primary)]/15 to-transparent origin-top"
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 py-5 relative">
                {/* ドット */}
                <div className="relative shrink-0 w-[30px] flex justify-center pt-1.5">
                  <div
                    data-step-dot
                    className="w-3 h-3 rounded-full bg-[var(--wt-primary)] shadow-[0_0_0_4px_rgba(0,85,184,0.1)]"
                  />
                </div>

                {/* コンテンツ */}
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
