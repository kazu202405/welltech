"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export function About() {
  const sectionRef = useScrollReveal();
  const parallaxRef = useParallax(0.6);

  return (
    <section ref={sectionRef} id="about" className="py-32 md:py-44 bg-[var(--wt-bg-dark)] relative overflow-hidden">
      {/* 背景写真（パララックス） */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          ref={parallaxRef}
          src="/photo/S__49889490_0.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15 will-change-transform"
          style={{ transform: "translateY(0) scale(1.2)" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[var(--wt-bg-dark)]/60" />
        {/* ガラスモーフィズム風ぼかしオーバーレイ */}
        <div className="absolute inset-0 backdrop-blur-[6px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <p data-reveal className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-6">About us</p>

        <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-8">
          安定した案件供給で、<br />共に成長する<br />パートナーシップ
        </h2>

        <div data-reveal className="max-w-xl">
          <p className="text-white/50 text-base leading-relaxed mb-4">
            株式会社ウェルテックは、2018年の創業以来、公共建築入札から民間工事まで幅広い建設案件を手がけています。
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            通常企業と比較して最大20倍の入札件数を誇り、北海道から沖縄まで全国の協力会社様と連携。
            給湯器交換の小規模案件から数千万規模の公共工事まで、継続的にお取引いただけるパートナーを募集しています。
          </p>
        </div>

        <div className="mt-12 flex items-center gap-12">
          <div data-reveal>
            <p className="text-3xl md:text-4xl font-bold text-white">20<span className="text-lg text-white/40">倍</span></p>
            <p className="text-xs text-white/30 mt-1">月間入札件数</p>
          </div>
          <div data-reveal>
            <p className="text-3xl md:text-4xl font-bold text-white">全国</p>
            <p className="text-xs text-white/30 mt-1">対応エリア</p>
          </div>
          <div data-reveal>
            <p className="text-3xl md:text-4xl font-bold text-white">2018</p>
            <p className="text-xs text-white/30 mt-1">創業年</p>
          </div>
        </div>
      </div>
    </section>
  );
}
