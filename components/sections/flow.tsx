"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "お問い合わせ", description: "フォームまたはお電話でご連絡" },
  { title: "ヒアリング", description: "対応エリア・工種・体制を確認" },
  { title: "審査・登録", description: "必要書類の確認と協力会社登録" },
  { title: "案件マッチング", description: "最適な案件を優先的にご紹介" },
  { title: "取引開始", description: "継続的にお取引開始" },
];

export function Flow() {
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
        y: -35, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
      gsap.to("[data-orb-2]", {
        y: 25, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 2 },
      });
      gsap.to("[data-wm]", {
        y: -60, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={setRefs} id="flow" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 斜線スライドイン */}
      <div
        data-reveal-diag
        className="absolute top-[12%] -left-[10%] w-[100%] h-[120px] bg-gradient-to-r from-[rgba(0,133,74,0.07)] via-[rgba(0,133,74,0.03)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "-14deg" } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        data-reveal-diag-r
        className="absolute bottom-[15%] -right-[10%] w-[90%] h-[80px] bg-gradient-to-l from-[rgba(232,168,23,0.07)] via-[rgba(232,168,23,0.03)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "10deg" } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-green absolute top-[-30px] right-[-50px] w-[300px] h-[300px]" aria-hidden="true" />
      <div data-orb-2 className="orb orb-accent absolute bottom-[-50px] left-[5%] w-[250px] h-[250px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div className="absolute top-0 right-0 w-[250px] h-[200px] dot-grid opacity-30" aria-hidden="true" />

      {/* 大胆なウォーターマーク */}
      <div
        data-wm
        className="watermark-bold absolute top-4 -left-4 lg:left-[2%] font-mono z-0"
        aria-hidden="true"
      >
        07
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">

          <div data-reveal>
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
              data-reveal-line
              className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--wt-primary)]/30 via-[var(--wt-primary)]/15 to-transparent origin-top hidden lg:block"
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <div key={step.title} data-reveal-item className="flex gap-6 py-5 relative">
                <div className="relative shrink-0 w-[30px] flex justify-center pt-1.5">
                  <div
                    className="w-3 h-3 rounded-full bg-[var(--wt-primary)] shadow-[0_0_0_4px_rgba(0,133,74,0.1)]"
                  />
                </div>
                <div className="flex-1 pb-2 border-b border-black/[0.06]">
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
