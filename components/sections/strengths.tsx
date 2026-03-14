"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    number: "01",
    title: "月間入札件数 最大20倍",
    description: "通常企業と比較して最大20倍の入札件数。安定した案件を回せる体制が整っています。",
  },
  {
    number: "02",
    title: "全国対応の協力会社ネットワーク",
    description: "北海道から沖縄まで全国の協力会社様と連携。地元の案件を地元のプロにお任せします。",
  },
  {
    number: "03",
    title: "10万〜数千万の幅広い案件規模",
    description: "給湯器交換の小規模案件から数千万規模の公共工事まで幅広く対応しています。",
  },
];

export function Strengths() {
  const revealRef = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);

  // 両方のrefを統合
  const setRefs = (el: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (revealRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // オーブのパララックス
      gsap.to("[data-orb-1]", {
        y: -40, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
      gsap.to("[data-orb-2]", {
        y: 30, x: -20, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 2 },
      });
      // ウォーターマークのパララックス
      gsap.to("[data-wm]", {
        y: -60, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={setRefs} id="strengths" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 斜線スライドイン */}
      <div
        data-reveal-diag
        className="absolute top-[15%] -left-[10%] w-[110%] h-[140px] bg-gradient-to-r from-[rgba(0,133,74,0.08)] via-[rgba(0,133,74,0.04)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "-15deg" } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        data-reveal-diag-r
        className="absolute bottom-[10%] -right-[10%] w-[80%] h-[60px] bg-gradient-to-l from-[rgba(0,133,74,0.06)] to-transparent pointer-events-none"
        style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
        aria-hidden="true"
      />

      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-green absolute -top-20 right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px]" aria-hidden="true" />
      <div data-orb-2 className="orb orb-accent absolute bottom-[-60px] left-[-80px] w-[250px] h-[250px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] dot-grid opacity-50" aria-hidden="true" />

      {/* 大胆なウォーターマーク */}
      <div
        data-wm
        className="watermark-bold absolute top-8 -left-4 lg:left-0 font-mono z-0"
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">

          <div data-reveal>
            <SectionHeading
              number="02"
              label="Strengths"
              title="ウェルテックの強み"
              description="案件を継続的に回せる体制が整っています。公共建築入札から民間工事まで、協力会社様に安定して案件をお任せできる環境です。"
              align="left"
            />
          </div>

          <div>
            {strengths.map((item) => (
              <div
                key={item.number}
                data-reveal-item
                className="list-item-accent py-6 border-b border-black/[0.08] cursor-default"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs font-semibold text-[var(--wt-primary)] tracking-wider">{item.number}</span>
                  <h3 className="text-lg font-bold text-[var(--wt-dark)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed pl-8">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
