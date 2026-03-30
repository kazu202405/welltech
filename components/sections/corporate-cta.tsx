"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

export function CorporateCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 背景のグラデーションオーブがスクロールで動く */
  const orbY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 bg-[var(--wt-bg-dark)] overflow-hidden"
    >
      {/* 背景装飾 */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          y: orbY,
          background: "radial-gradient(circle, var(--wt-primary) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-5%] w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-30, 30]),
          background: "radial-gradient(circle, var(--wt-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* 背景の大きなテキスト */}
      <motion.div
        className="absolute top-1/2 left-1/2 text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none text-white/[0.02] select-none pointer-events-none tracking-tighter whitespace-nowrap"
        aria-hidden="true"
        style={{
          x: "-50%",
          y: useTransform(scrollYProgress, [0, 1], [20, -20]),
        }}
      >
        PARTNER
      </motion.div>

      <div ref={contentRef} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center">
          <motion.p
            className="text-[var(--wt-primary-light)] text-[10px] font-semibold tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Partner With Us
          </motion.p>

          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            全国の施工パートナーを
            <br />
            募集しています
          </motion.h2>

          <motion.div
            className="w-12 h-[2px] bg-[var(--wt-primary)] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={contentInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <motion.p
            className="text-white/40 text-sm sm:text-base leading-[2] max-w-xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            個人事業主から法人まで、対応エリアが限定されていても問題ありません。
            まずはお気軽にお問い合わせください。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/area"
              className="group inline-flex items-center justify-center gap-3 bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-bold py-4 px-10 rounded-md transition-all duration-300 text-base"
            >
              パートナー募集ページへ
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              className="group inline-flex items-center justify-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold py-4 px-10 rounded-md transition-all duration-300 text-base border border-white/10 hover:border-white/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              086-941-0882
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
