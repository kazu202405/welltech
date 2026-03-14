"use client";

import { useEffect, useRef } from "react";

export function EcocuteBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#f0f9f4] via-white to-[#fff9eb] overflow-hidden">
      {/* 装飾 */}
      <div className="orb orb-green absolute -top-20 -right-20 w-[240px] h-[240px] opacity-60" aria-hidden="true" />
      <div className="orb orb-accent absolute -bottom-16 -left-16 w-[180px] h-[180px] opacity-50" aria-hidden="true" />

      <div
        ref={ref}
        className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 opacity-0 translate-y-6 transition-all duration-700 ease-out [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      >
        <a
          href="/ecocute-subsidy"
          className="group block rounded-2xl bg-white border border-[rgba(0,133,74,0.08)] hover:border-[rgba(0,133,74,0.18)] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 sm:p-8 md:p-10">
            {/* アイコン部 */}
            <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[var(--wt-primary)] to-[#005C33] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                {/* お湯・エコのアイコン */}
                <path d="M24 6c-1.5 3-4 5-4 8a4 4 0 008 0c0-3-2.5-5-4-8z" fill="currentColor" opacity="0.6" />
                <path d="M16 10c-1 2-2.5 3.5-2.5 5.5a2.5 2.5 0 005 0c0-2-1.5-3.5-2.5-5.5z" fill="currentColor" opacity="0.4" />
                <path d="M32 10c-1 2-2.5 3.5-2.5 5.5a2.5 2.5 0 005 0c0-2-1.5-3.5-2.5-5.5z" fill="currentColor" opacity="0.4" />
                <rect x="10" y="22" width="28" height="20" rx="4" fill="currentColor" opacity="0.8" />
                <path d="M18 30h12M24 28v4" stroke="#005C33" strokeWidth="2" strokeLinecap="round" />
                <circle cx="38" cy="36" r="8" fill="#06C755" />
                <path d="M35 36l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* テキスト部 */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs sm:text-sm font-bold text-[var(--wt-primary)] tracking-wide mb-2">
                お役立ち情報
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--wt-dark)] mb-2 leading-snug">
                エコキュート補助金ガイド 2026
              </h3>
              <p className="text-sm sm:text-base text-[var(--wt-gray)] leading-relaxed">
                国の補助金で最大<span className="font-bold text-[var(--wt-primary)]">約14万円</span>おトクに。
                給湯省エネ2026事業の補助金額・対象条件・申請方法をわかりやすく解説しています。
              </p>
            </div>

            {/* 矢印 */}
            <div className="shrink-0 hidden md:flex items-center">
              <span className="w-10 h-10 rounded-full border-2 border-[var(--wt-primary)]/20 group-hover:border-[var(--wt-primary)] group-hover:bg-[var(--wt-primary)] flex items-center justify-center transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[var(--wt-primary)] group-hover:text-white transition-colors duration-300">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
