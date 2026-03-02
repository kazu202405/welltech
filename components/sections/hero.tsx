"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Building2 } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-badge]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from("[data-hero-title] > *", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        }, "-=0.3")
        .from("[data-hero-sub]", {
          y: 30,
          opacity: 0,
          duration: 0.7,
        }, "-=0.4")
        .from("[data-hero-cta] > *", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.3")
        .from("[data-hero-scroll]", {
          opacity: 0,
          duration: 0.6,
        }, "-=0.2")
        .from("[data-hero-geo]", {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }, "-=1");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToRegistration = () => {
    const el = document.getElementById("registration");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景動画 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 多層オーバーレイ */}
      <div className="absolute inset-0 bg-[#0a1628]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/30 via-transparent to-[#0a1628]/30" />

      {/* 幾何学的装飾 */}
      <div
        data-hero-geo
        className="absolute top-[15%] left-[8%] w-28 h-28 border border-white/[0.06] hidden md:block"
        style={{ animation: "float 8s ease-in-out infinite", ["--rotate" as string]: "45deg" }}
      />
      <div
        data-hero-geo
        className="absolute bottom-[25%] right-[10%] w-20 h-20 border border-[#2563eb]/[0.12] hidden md:block"
        style={{ animation: "float-slow 10s ease-in-out infinite", ["--rotate" as string]: "12deg" }}
      />
      <div
        data-hero-geo
        className="absolute top-[30%] right-[15%] w-3 h-3 bg-[#f59e0b]/20 rotate-45 hidden lg:block"
        style={{ animation: "float 6s ease-in-out infinite", ["--rotate" as string]: "45deg" }}
      />
      <div
        data-hero-geo
        className="absolute bottom-[35%] left-[12%] w-2 h-2 bg-[#2563eb]/20 rotate-45 hidden lg:block"
        style={{ animation: "float-slow 7s ease-in-out infinite", ["--rotate" as string]: "45deg" }}
      />

      {/* グリッドパターン */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
        <div data-hero-badge className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
          <Building2 className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-sm text-white/80 font-medium tracking-wide">全国対応・安定案件供給</span>
        </div>

        <div data-hero-title className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15]">
            <span className="block">全国の</span>
            <span className="block font-display text-[#2563eb] drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]">
              施工パートナー
            </span>
            <span className="block">
              様を募集しています
            </span>
          </h1>
        </div>

        <p data-hero-sub className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          公共建築入札から民間案件まで、
          <br className="hidden sm:block" />
          Win-Winの関係で全国展開を一緒に実現しませんか。
        </p>

        <div data-hero-cta className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToRegistration}
            className="group btn-glow inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg transition-all w-full sm:w-auto justify-center"
          >
            協力会社登録フォーム
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("strengths");
              if (el) {
                const offset = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offset, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/[0.06] text-white font-medium px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg transition-all w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            ウェルテックの強み
          </button>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div data-hero-scroll className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/50 rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
