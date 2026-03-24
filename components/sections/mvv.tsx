"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    label: "Mission",
    title: "持続可能な建設業",
    description:
      "建設業の未来を見据え、効率的な施工体制と信頼のネットワークで、持続可能な業界の発展に貢献します。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    label: "Vision",
    title: "主体的な選択の自由",
    description:
      "協力会社が自らの意志で案件を選び、成長の道筋を描ける世界。ルールの中で自ら選ぶことができる、本当の自由を実現します。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Value",
    title: "成長機会の提供",
    description:
      "多様な案件と全国規模のネットワークを通じて、協力会社の技術力向上と事業拡大を支援します。",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export function MVV() {
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      id="mvv"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* 装飾 */}
      <div className="orb orb-green absolute -top-20 right-[5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px]" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] dot-grid opacity-30" aria-hidden="true" />
      <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">01</div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div data-reveal className="mb-16 md:mb-20">
          <SectionHeading
            number="01"
            label="Philosophy"
            title="企業理念"
            description="私たちが目指す建設業の未来"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              data-reveal-item
              className="group relative bg-[var(--wt-bg)] rounded-2xl p-8 lg:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-[var(--wt-primary)]/10"
            >
              {/* 上部アクセントライン */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--wt-primary)]/20 to-transparent group-hover:via-[var(--wt-primary)]/50 transition-all duration-500" aria-hidden="true" />

              <div className="text-[var(--wt-primary)]/60 mb-6 group-hover:text-[var(--wt-primary)] transition-colors duration-300">
                {item.icon}
              </div>

              <p className="text-[var(--wt-accent)] text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                {item.label}
              </p>

              <h3 className="text-xl lg:text-2xl font-bold text-[var(--wt-dark)] mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
