"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    title: "Sustainability",
    description: "あらゆる価値を循環させ、あらゆる人の可能性を広げる",
  },
  {
    title: "Inclusion & Diversity",
    description:
      "多様なメンバーの経験・知識・意見を結集し、一人ひとりがパフォーマンスおよびバリューを発揮できる組織となる",
  },
  {
    title: "Trust & Openness",
    description: "信頼関係を大切にし、情報の透明性の高い組織となる",
  },
  {
    title: "Well-being for Performance",
    description:
      "ひとりひとりが自身の限界を引き上げ、バリュー発揮と成果を最大化させるために、心身のコンディションを維持することにオーナーシップを持つ",
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* 番号 */}
      <span className="text-[var(--wt-primary)]/20 text-xs font-mono tracking-widest mb-4 block">
        0{index + 1}
      </span>

      {/* タイトル */}
      <h3 className="text-lg md:text-xl font-bold text-[var(--wt-dark)] mb-3 leading-tight">
        {item.title}
      </h3>

      {/* 区切り線 */}
      <motion.div
        className="h-px w-10 bg-[var(--wt-primary)]/30 mb-4"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* ヘッダー */}
        <div ref={headerRef} className="mb-14 md:mb-20">
          <motion.p
            className="text-[var(--wt-primary)] text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Values
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--wt-dark)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            価値観
          </motion.h2>
          <motion.div
            className="w-12 h-[2px] bg-[var(--wt-primary)] mt-6"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />
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
