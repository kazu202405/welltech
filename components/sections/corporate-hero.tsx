"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export function CorporateHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      // ラベル
      tl.fromTo(
        "[data-hero-label]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          "[data-hero-title] span",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.18 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-desc]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );

      // 写真（clip-pathで出現）
      tl.fromTo(
        "[data-hero-photo]",
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.2,
          ease: "power3.inOut",
        },
        0.4
      );

      // 持続可能シェイプ（SVGラインドロー風）
      tl.fromTo(
        "[data-hero-shape]",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power1.inOut" },
        0.8
      );

      // 右側アクセント
      tl.fromTo(
        "[data-hero-accent]",
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        0.8
      );

      // スクロール
      tl.fromTo(
        "[data-hero-scroll]",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.2"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* 右側のアクセント形状 */}
      <div
        data-hero-accent
        className="absolute top-0 right-0 w-[10%] h-full bg-[var(--wt-primary)]/[0.04] opacity-0"
        style={{ borderRadius: "0 0 0 40%" }}
      />

      {/* 写真スライドショー: 4枚 x 5秒 = 20秒サイクル + Ken Burns */}
      <div
        data-hero-photo
        className="absolute inset-y-0 left-0 w-[96%] lg:w-[93%] opacity-0 overflow-hidden"
        style={{ borderRadius: "0 16px 120px 0" }}
      >
        {[
          { src: "/photo/S__49889581_1.png", alt: "ソーラーパネル施工", pos: "center" },
          { src: "/photo/S__49889495_0.jpg", alt: "シャンデリア設置・足場作業", pos: "center" },
          { src: "/photo/S__49889586_1.png", alt: "施工現場の風景", pos: "center 80%" },
          { src: "/photo/S__49889481_0.jpg", alt: "空調設備の整備作業", pos: "center" },
          { src: "/photo/S__49889497_0.jpg", alt: "設備点検・研修風景", pos: "center" },
          { src: "/photo/S__49889463_0.jpg", alt: "倉庫の溶接作業", pos: "center" },
        ].map((photo, i) => (
          <div
            key={photo.src}
            className="absolute inset-0"
            style={{
              animation: "hero-slide 30s infinite",
              animationDelay: `${i * 5 - 30}s`,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i === 0}
              className="object-cover -scale-x-100"
              style={{
                objectPosition: photo.pos,
                animation: "ken-burns 40s alternate infinite",
                animationDelay: `${i * 5}s`,
              }}
              sizes="90vw"
            />
          </div>
        ))}
        {/* テキスト可読性のためのオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 z-[1]" />
      </div>

      {/* 持続可能を表すダイナミック装飾SVG — 画面全体を横断 */}
      <svg
        data-hero-shape
        className="absolute inset-0 w-full h-full opacity-0 z-[2] pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* 大きな循環カーブ — 左下から右上へ横断 */}
        <path
          d="M-100 750 C200 600, 400 200, 700 300 S1100 100, 1540 250"
          stroke="var(--wt-primary)"
          strokeWidth={1.5}
          strokeOpacity={0.08}
          strokeLinecap="round"
        />
        <path
          d="M-100 780 C200 630, 400 230, 700 330 S1100 130, 1540 280"
          stroke="var(--wt-primary)"
          strokeWidth={1}
          strokeOpacity={0.05}
          strokeLinecap="round"
        />

        {/* 逆向きの循環 — 右下から左上へ */}
        <path
          d="M1540 700 C1200 550, 900 800, 600 600 S200 700, -100 500"
          stroke="var(--wt-primary)"
          strokeWidth={1.5}
          strokeOpacity={0.06}
          strokeLinecap="round"
        />

        {/* 地球モチーフ（右上エリア、大きめ） */}
        <g transform="translate(1050, 160)">
          <circle cx="75" cy="75" r="70" stroke="var(--wt-primary)" strokeWidth={1} strokeOpacity={0.1} />
          {/* 経線 */}
          <ellipse cx="75" cy="75" rx="35" ry="70" stroke="var(--wt-primary)" strokeWidth={0.7} strokeOpacity={0.07} />
          <ellipse cx="75" cy="75" rx="55" ry="70" stroke="var(--wt-primary)" strokeWidth={0.5} strokeOpacity={0.05} />
          {/* 緯線 */}
          <ellipse cx="75" cy="45" rx="65" ry="12" stroke="var(--wt-primary)" strokeWidth={0.6} strokeOpacity={0.06} />
          <ellipse cx="75" cy="75" rx="70" ry="14" stroke="var(--wt-primary)" strokeWidth={0.6} strokeOpacity={0.06} />
          <ellipse cx="75" cy="105" rx="65" ry="12" stroke="var(--wt-primary)" strokeWidth={0.6} strokeOpacity={0.06} />
          {/* 小さなリーフを地球の上に */}
          <path d="M68 20Q75 5 82 20Q75 16 68 20Z" fill="var(--wt-primary)" fillOpacity={0.08} />
        </g>

        {/* 循環を示す大きな円弧（中央やや右） */}
        <circle
          cx="900" cy="450" r="280"
          stroke="var(--wt-primary)"
          strokeWidth={1}
          strokeOpacity={0.04}
          strokeDasharray="12 20"
        />
        <circle
          cx="900" cy="450" r="220"
          stroke="var(--wt-primary)"
          strokeWidth={0.8}
          strokeOpacity={0.03}
          strokeDasharray="8 16"
        />

        {/* 左下のリーフ（細長い自然な葉 + 茎） */}
        <g transform="translate(70, 650) rotate(-25, 25, 60) scale(1.3)" strokeLinejoin="round">
          {/* 葉の外形 */}
          <path
            d="M25 0 C10 20, 5 50, 12 90 C16 105, 22 110, 25 115 C28 110, 34 105, 38 90 C45 50, 40 20, 25 0Z"
            stroke="var(--wt-primary)"
            strokeWidth={0.8}
            strokeOpacity={0.12}
          />
          {/* 中心脈 */}
          <path d="M25 0 C24 40, 24 80, 25 115" stroke="var(--wt-primary)" strokeWidth={0.6} strokeOpacity={0.1} />
          {/* 左側の葉脈 */}
          <path d="M24 25Q16 35 8 50" stroke="var(--wt-primary)" strokeWidth={0.5} strokeOpacity={0.08} />
          <path d="M24 45Q17 55 10 68" stroke="var(--wt-primary)" strokeWidth={0.5} strokeOpacity={0.07} />
          <path d="M24 65Q18 72 14 82" stroke="var(--wt-primary)" strokeWidth={0.4} strokeOpacity={0.06} />
          {/* 右側の葉脈 */}
          <path d="M26 30Q33 38 40 46" stroke="var(--wt-primary)" strokeWidth={0.5} strokeOpacity={0.08} />
          <path d="M25 50Q32 58 38 66" stroke="var(--wt-primary)" strokeWidth={0.5} strokeOpacity={0.07} />
          <path d="M25 70Q30 76 35 84" stroke="var(--wt-primary)" strokeWidth={0.4} strokeOpacity={0.06} />
          {/* 茎 */}
          <path d="M25 115 C24 120, 24 125, 23 130" stroke="var(--wt-primary)" strokeWidth={0.7} strokeOpacity={0.1} strokeLinecap="round" />
        </g>

        {/* つなぐドット — 曲線上にアクセント */}
        <circle cx="700" cy="300" r="5" fill="var(--wt-primary)" fillOpacity={0.06} />
        <circle cx="400" cy="420" r="3.5" fill="var(--wt-primary)" fillOpacity={0.05} />
        <circle cx="1100" cy="180" r="4" fill="var(--wt-primary)" fillOpacity={0.05} />
        <circle cx="200" cy="680" r="3" fill="var(--wt-primary)" fillOpacity={0.04} />
      </svg>

      {/* テキストコンテンツ（写真の上にオーバーラップ） */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="max-w-xl">
          <p
            data-hero-label
            className="text-[var(--wt-primary)] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6 opacity-0"
          >
            Sustainable Construction
          </p>

          <h1
            data-hero-title
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--wt-dark)] leading-[1.1] mb-8"
          >
            <span className="block opacity-0">持続可能な</span>
            <span className="block opacity-0">
              建設業を
              <span className="text-[var(--wt-primary)]">共</span>に
            </span>
          </h1>

          <p
            data-hero-desc
            className="text-[var(--wt-gray)] text-base sm:text-lg leading-relaxed max-w-md mb-10 opacity-0"
          >
            全国の協力会社ネットワークと確かな施工実績で、
            <br className="hidden sm:block" />
            公共・民間問わず最適な建設ソリューションを提供します。
          </p>

          <div data-hero-cta className="flex flex-wrap gap-4 opacity-0">
            <a
              href="/area"
              className="inline-flex items-center gap-2 bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-semibold py-3.5 px-8 rounded-md transition-all duration-300 text-sm sm:text-base btn-bounce"
            >
              パートナー募集
              <svg
                className="w-4 h-4 arrow-loop"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="/company"
              className="inline-flex items-center gap-2 border-2 border-[var(--wt-dark)]/15 hover:border-[var(--wt-primary)] hover:text-[var(--wt-primary)] text-[var(--wt-dark)] font-semibold py-3.5 px-8 rounded-md transition-all duration-300 text-sm sm:text-base"
            >
              会社概要
            </a>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター（右側の緑帯の中心） */}
      <div
        data-hero-scroll
        className="absolute bottom-8 right-[2%] flex flex-col items-center gap-2 opacity-0 z-20"
      >
        <span className="text-[var(--wt-primary)] text-[10px] tracking-[0.15em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--wt-primary)]/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--wt-primary)] animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
