"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CorporateCta() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      className="relative py-24 md:py-32 bg-[var(--wt-bg-dark)] overflow-hidden"
    >
      {/* 装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--wt-primary)]/10 to-transparent" aria-hidden="true" />
      <div className="orb orb-green absolute top-[-80px] left-[10%] w-[300px] h-[300px] opacity-30" aria-hidden="true" />
      <div className="orb orb-accent absolute bottom-[-60px] right-[15%] w-[200px] h-[200px] opacity-20" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div data-reveal className="text-center">
          <p className="text-[var(--wt-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Partner With Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            全国の施工パートナーを
            <br />
            募集しています
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            個人事業主から法人まで、対応エリアが限定されていても問題ありません。
            <br className="hidden sm:block" />
            まずはお気軽にお問い合わせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/area"
              className="inline-flex items-center justify-center gap-2 bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-bold py-4 px-10 rounded-md transition-all duration-300 text-base sm:text-lg"
            >
              パートナー募集ページへ
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:086-941-0882"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-md transition-all duration-300 text-base sm:text-lg border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              086-941-0882
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
