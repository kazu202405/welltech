"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // ウォーターマーク番号のスライドイン
      gsap.from("[data-watermark]", {
        x: -60,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // 装飾SVG円の描画
      gsap.from("[data-deco-circle]", {
        strokeDashoffset: 283,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });

      // 装飾SVG対角線
      gsap.from("[data-deco-line]", {
        strokeDashoffset: 200,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });

      // 見出しフェードイン
      gsap.from("[data-heading]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // リスト項目の順次スライドイン + アクセントバー
      gsap.from("[data-strength-item]", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 65%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="strengths" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 装飾SVG要素 */}
      <div className="absolute top-12 right-0 lg:right-[10%] pointer-events-none" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle
            data-deco-circle
            cx="60" cy="60" r="45"
            stroke="rgba(0,85,184,0.06)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="0"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-[5%] pointer-events-none" aria-hidden="true">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <line
            data-deco-line
            x1="0" y1="150" x2="150" y2="0"
            stroke="rgba(0,85,184,0.05)"
            strokeWidth="1"
            strokeDasharray="200"
            strokeDashoffset="0"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">
          {/* ウォーターマーク番号 */}
          <div
            data-watermark
            className="absolute -top-8 -left-2 lg:-left-6 text-[8rem] md:text-[10rem] font-bold text-[var(--wt-primary)]/[0.04] leading-none select-none pointer-events-none font-mono"
            aria-hidden="true"
          >
            02
          </div>

          {/* 左: ヘッディング */}
          <div data-heading>
            <SectionHeading
              number="02"
              label="Strengths"
              title="ウェルテックの強み"
              description="案件を継続的に回せる体制が整っています。公共建築入札から民間工事まで、協力会社様に安定して案件をお任せできる環境です。"
              align="left"
            />
          </div>

          {/* 右: 強みリスト */}
          <div>
            {strengths.map((item) => (
              <div
                key={item.number}
                data-strength-item
                className="list-item-accent revealed py-6 border-b border-black/[0.08] cursor-default"
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
