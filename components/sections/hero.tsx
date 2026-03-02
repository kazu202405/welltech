"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Building2 } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-animate]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
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
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-[#0a1628]/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
        <div data-hero-animate className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <Building2 className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-sm text-white/90 font-medium">全国対応・安定案件供給</span>
        </div>

        <h1 data-hero-animate className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          全国の
          <span className="text-[#2563eb]">施工パートナー</span>
          様を
          <br className="hidden sm:block" />
          募集しています
        </h1>

        <p data-hero-animate className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          公共建築入札から民間案件まで、
          <br className="hidden sm:block" />
          Win-Winの関係で全国展開を一緒に実現しませんか。
        </p>

        <div data-hero-animate className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToRegistration}
            className="btn-glow inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg transition-colors w-full sm:w-auto justify-center"
          >
            協力会社登録フォーム
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("strengths");
              if (el) {
                const offset = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offset, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg transition-colors w-full sm:w-auto justify-center"
          >
            ウェルテックの強み
          </button>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
