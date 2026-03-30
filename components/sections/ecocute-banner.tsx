"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function EcocuteBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative py-16 md:py-20 bg-[#f7f9f8] overflow-hidden">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10"
      >
        <motion.a
          href="/ecocute-subsidy"
          className="group block rounded-xl bg-white border border-black/[0.04] hover:border-[var(--wt-primary)]/15 shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 sm:p-8 md:p-10">
            {/* アイコン */}
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-[var(--wt-primary)] to-[var(--wt-primary-dark)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="text-white">
                <path d="M24 6c-1.5 3-4 5-4 8a4 4 0 008 0c0-3-2.5-5-4-8z" fill="currentColor" opacity="0.6" />
                <path d="M16 10c-1 2-2.5 3.5-2.5 5.5a2.5 2.5 0 005 0c0-2-1.5-3.5-2.5-5.5z" fill="currentColor" opacity="0.4" />
                <path d="M32 10c-1 2-2.5 3.5-2.5 5.5a2.5 2.5 0 005 0c0-2-1.5-3.5-2.5-5.5z" fill="currentColor" opacity="0.4" />
                <rect x="10" y="22" width="28" height="20" rx="4" fill="currentColor" opacity="0.8" />
                <path d="M18 30h12M24 28v4" stroke="#005C33" strokeWidth="2" strokeLinecap="round" />
                <circle cx="38" cy="36" r="8" fill="#06C755" />
                <path d="M35 36l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* テキスト */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[10px] font-semibold text-[var(--wt-primary)] tracking-[0.2em] uppercase mb-2">
                お役立ち情報
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wt-dark)] mb-2 leading-snug">
                エコキュート補助金ガイド 2026
              </h3>
              <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                国の補助金で最大<span className="font-bold text-[var(--wt-primary)]">約14万円</span>おトクに。
                補助金額・対象条件・申請方法をわかりやすく解説。
              </p>
            </div>

            {/* 矢印 */}
            <div className="shrink-0 hidden md:flex items-center">
              <span className="w-10 h-10 rounded-full border border-black/[0.06] group-hover:border-[var(--wt-primary)] group-hover:bg-[var(--wt-primary)] flex items-center justify-center transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[var(--wt-gray-light)] group-hover:text-white transition-colors duration-300">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
