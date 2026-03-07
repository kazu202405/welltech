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
      gsap.from("[data-watermark]", {
        x: -60, opacity: 0, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      // オーブのパララックス移動
      gsap.to("[data-orb-1]", {
        y: -40, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
      gsap.to("[data-orb-2]", {
        y: 30, x: -20, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 2 },
      });

      // SVG幾何学シェイプ
      gsap.from("[data-shape-ring]", {
        scale: 0.5, opacity: 0, rotation: -90, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
      gsap.from("[data-shape-cross]", {
        scale: 0, rotation: 45, opacity: 0, duration: 1, delay: 0.3, ease: "back.out(1.5)",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });

      // ドットグリッドのフェードイン
      gsap.from("[data-dot-grid]", {
        opacity: 0, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });

      gsap.from("[data-heading]", {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      gsap.from("[data-strength-item]", {
        x: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 65%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="strengths" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-blue absolute -top-20 right-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px]" aria-hidden="true" />
      <div data-orb-2 className="orb orb-accent absolute bottom-[-60px] left-[-80px] w-[250px] h-[250px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div data-dot-grid className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] dot-grid opacity-50" aria-hidden="true" />

      {/* SVG幾何学シェイプ */}
      <div className="absolute top-16 right-[12%] pointer-events-none" aria-hidden="true">
        <svg data-shape-ring width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="rgba(0,85,184,0.08)" strokeWidth="1.5" fill="none" />
          <circle cx="60" cy="60" r="35" stroke="rgba(0,85,184,0.05)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-24 left-[8%] pointer-events-none" aria-hidden="true">
        <svg data-shape-cross width="40" height="40" viewBox="0 0 40 40" fill="none">
          <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(0,85,184,0.1)" strokeWidth="1.5" />
          <line x1="20" y1="0" x2="20" y2="40" stroke="rgba(0,85,184,0.1)" strokeWidth="1.5" />
        </svg>
      </div>
      {/* 角度のある装飾ライン */}
      <div className="absolute top-[40%] right-0 pointer-events-none" aria-hidden="true">
        <svg width="200" height="1" viewBox="0 0 200 1" fill="none">
          <line x1="0" y1="0.5" x2="200" y2="0.5" stroke="rgba(0,85,184,0.06)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 relative">
          <div
            data-watermark
            className="absolute -top-8 -left-2 lg:-left-6 text-[8rem] md:text-[10rem] font-bold text-[var(--wt-primary)]/[0.04] leading-none select-none pointer-events-none font-mono"
            aria-hidden="true"
          >
            02
          </div>

          <div data-heading>
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
