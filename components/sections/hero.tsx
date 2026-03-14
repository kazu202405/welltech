"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/photo/S__49889490_0.jpg",
  "/photo/S__49889586_0.jpg",
  "/photo/S__49889495_0.jpg",
  "/photo/S__49889550_0.jpg",
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 全画像をプリロードしてからスライドショー開始
  useEffect(() => {
    let cancelled = false;
    const promises = heroImages.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    );
    Promise.all(promises).then(() => {
      if (!cancelled) setImagesLoaded(true);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-label]", { y: 20, opacity: 0, duration: 0.6, delay: 0.3 })
        .from("[data-hero-title] > *", { y: 40, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.2")
        .from("[data-hero-desc]", { y: 20, opacity: 0, duration: 0.7 }, "-=0.3")
        .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from("[data-hero-scroll]", { opacity: 0, duration: 0.6 }, "-=0.1");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[var(--wt-bg-dark)]">
      {/* 背景画像スライドショー */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={
            imagesLoaded
              ? {
                  animation: `hero-slide ${heroImages.length * 5}s ease-in-out infinite`,
                  animationDelay: `${i === 0 ? 0 : -(heroImages.length * 5 - i * 5)}s`,
                }
              : { opacity: i === 0 ? 1 : 0 }
          }
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={
              imagesLoaded
                ? { animation: `ken-burns ${heroImages.length * 5 * 2}s ease-in-out infinite alternate` }
                : undefined
            }
            loading="eager"
          />
        </div>
      ))}

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--wt-bg-dark)]/85 via-[var(--wt-bg-dark)]/60 to-[var(--wt-bg-dark)]/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="max-w-2xl">
          <div data-hero-label className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 mb-8">
            <div className="w-1.5 h-1.5 bg-[var(--wt-accent)] rounded-full" />
            <span className="text-xs text-white/70 font-medium tracking-wider">PARTNER RECRUITMENT</span>
          </div>

          <div data-hero-title className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              <span className="block">全国の</span>
              <span className="block mt-1">施工パートナーを</span>
              <span className="block mt-1">
                <span className="text-[var(--wt-accent)]">募集</span>しています
              </span>
            </h1>
          </div>

          <p data-hero-desc className="text-base sm:text-lg text-white/55 max-w-lg mb-10 leading-relaxed">
            公共建築入札から民間案件まで、<br className="hidden sm:block" />
            Win-Winの関係で全国展開を一緒に実現しませんか。
          </p>

          <div data-hero-cta className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("registration")}
              className="group btn-bounce inline-flex items-center justify-center gap-2 bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-semibold px-7 py-4 rounded-md text-base"
            >
              協力会社登録フォーム
              <ArrowRight className="w-4 h-4 arrow-loop" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-7 py-4 rounded-md text-base transition-all"
            >
              ウェルテックについて
            </button>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div data-hero-scroll className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
