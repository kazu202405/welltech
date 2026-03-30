"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const values = [
  {
    title: "Sustainability",
    description: "あらゆる価値を循環させ、あらゆる人の可能性を広げる",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Inclusion & Diversity",
    description:
      "多様なメンバーの経験・知識・意見を結集し、一人ひとりがパフォーマンスおよびバリューを発揮できる組織となる",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Trust & Openness",
    description: "信頼関係を大切にし、情報の透明性の高い組織となる",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Well-being for Performance",
    description:
      "ひとりひとりが自身の限界を引き上げ、バリュー発揮と成果を最大化させるために、心身のコンディションを維持することにオーナーシップを持つ",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

function ValueItem({
  item,
  index,
}: {
  item: (typeof values)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* アイコン */}
      <motion.div
        className="w-12 h-12 rounded-full bg-[var(--wt-primary)]/8 flex items-center justify-center text-[var(--wt-primary)] mb-5 group-hover:bg-[var(--wt-primary)]/15 transition-colors duration-300"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.12 + 0.15,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {item.icon}
      </motion.div>

      {/* タイトル */}
      <h3 className="text-base md:text-lg font-bold text-[var(--wt-dark)] mb-3 leading-tight">
        {item.title}
      </h3>

      {/* 区切り線 */}
      <motion.div
        className="h-px w-8 bg-[var(--wt-primary)]/25 mb-4"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: "left" }}
      />

      {/* 説明文 */}
      <p className="text-[var(--wt-gray)] text-sm leading-[1.9]">
        {item.description}
      </p>
    </motion.div>
  );
}

export function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  /* 背景装飾のパララックス */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 bg-[#fafafa] overflow-hidden">
      {/* 背景の装飾ライン */}
      <motion.div
        className="absolute top-[20%] -right-[10%] w-[400px] h-[1px] bg-[var(--wt-primary)]/[0.06] rotate-[-15deg] pointer-events-none"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[30%] -left-[5%] w-[300px] h-[1px] bg-[var(--wt-primary)]/[0.06] rotate-[10deg] pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-15, 15]) }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* ヘッダー */}
        <div ref={headerRef} className="mb-16 md:mb-24 max-w-lg">
          <motion.p
            className="text-[var(--wt-primary)] text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Values
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--wt-dark)] leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            価値観
          </motion.h2>
          <motion.div
            className="w-12 h-[2px] bg-[var(--wt-primary)] mb-6"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            className="text-[var(--wt-gray)] text-sm leading-[2]"
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            私たちが大切にしている4つの価値観
          </motion.p>
        </div>

        {/* 4カラムグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-14">
          {values.map((item, i) => (
            <ValueItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
