"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const idealTraits = [
  "迅速に現場対応ができる会社",
  "丁寧な施工と品質管理を重視する会社",
  "長期的なパートナーシップを築ける会社",
  "報連相を大切にする会社",
  "安全管理を徹底できる会社",
  "複数案件の同時対応が可能な会社",
];

const licenses = [
  "建築一式工事業", "電気工事業", "内装工事業", "管工事業",
  "大工工事業", "屋根工事業", "タイル・れんが・ブロック工事業",
];

const qualifications = [
  "二級建築士", "第二種電気工事士", "認定電気工事従事者",
  "特別管理産業廃棄物収集運搬", "一般建築物石綿含有建材調査者",
  "石綿作業主任者", "足場組立作業主任者", "玉掛け",
  "小型移動式クレーン", "高所作業車", "フルハーネス",
  "ガス溶接", "低圧電気取扱者",
];

export function IdealPartner() {
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
        y: -30, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={setRefs} id="ideal-partner" className="py-24 md:py-32 bg-[var(--wt-bg)] relative overflow-hidden">
      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-blue absolute top-[-30px] right-[5%] w-[280px] h-[280px]" aria-hidden="true" />

      {/* 装飾シェイプ */}
      <div className="absolute bottom-20 right-[10%] pointer-events-none" aria-hidden="true">
        <svg data-shape-ring width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="42" stroke="rgba(0,85,184,0.06)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="28" stroke="rgba(0,85,184,0.04)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* ドットグリッド */}
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] dot-grid opacity-30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <div>
            <div data-reveal>
              <SectionHeading
                number="06"
                label="Ideal Partner"
                title="こんな会社と組みたい"
                description="互いに成長できるパートナーシップを目指しています。以下の建設業許可をお持ちの会社様を優先的にご案内いたします。許可取得前の会社様もご相談ください。"
                align="left"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-lg" data-reveal-image>
              <img
                src="/photo/S__49889493_0.jpg"
                alt="施工現場"
                className="w-full max-w-sm rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-[var(--wt-gray-light)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Partner</p>
              <div className="grid grid-cols-1">
                {idealTraits.map((trait) => (
                  <div
                    key={trait}
                    data-reveal-item
                    className="py-4 px-1 border-b border-black/[0.08] text-[var(--wt-dark)] text-[15px] font-medium"
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[var(--wt-gray-light)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">License</p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {licenses.map((license) => (
                  <div key={license} className="py-4 px-1 border-b border-black/[0.08] text-[var(--wt-dark)] text-[15px] font-medium">
                    {license}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[var(--wt-gray-light)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Qualification</p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {qualifications.map((q) => (
                  <div key={q} className="py-3.5 px-1 border-b border-black/[0.08] text-[var(--wt-dark)]/75 text-sm">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
