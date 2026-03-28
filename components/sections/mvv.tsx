"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const items = [
  {
    label: "Mission",
    letter: "M",
    num: "01",
    title: "持続可能な建設業",
    description:
      "建設業の未来を見据え、効率的な施工体制と信頼のネットワークで、持続可能な業界の発展に貢献します。",
  },
  {
    label: "Vision",
    letter: "V",
    num: "02",
    title: "主体的な選択の自由",
    description:
      "協力会社が自らの意志で案件を選び、成長の道筋を描ける世界。ルールの中で自ら選ぶことができる、本当の自由を実現します。",
  },
  {
    label: "Value",
    letter: "V",
    num: "03",
    title: "成長機会の提供",
    description:
      "多様な案件と全国規模のネットワークを通じて、協力会社の技術力向上と事業拡大を支援します。",
  },
];

/* 各理念項目コンポーネント */
function PhilosophyItem({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  /* 項目ごとのパララックス */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40 - index * 10, -20 + index * 5]);

  return (
    <motion.div ref={ref} className="relative" style={{ y }}>
      {/* 背景装飾: 左に01/02/03、右にM/V/V — 同じ高さで中心揃え */}
      <div
        className="absolute -top-6 left-0 right-0 flex items-center justify-between pointer-events-none select-none"
        aria-hidden="true"
        style={{ height: "clamp(7rem, 10vw, 10rem)" }}
      >
        <span className="-ml-2 text-[5rem] md:text-[6rem] font-black leading-none text-white/[0.04] font-mono">
          {item.num}
        </span>
        <span
          className="text-[5rem] md:text-[6rem] font-black leading-none text-white/[0.04]"
        >
          {item.letter}
        </span>
      </div>

      <div className="relative">
        {/* ラベル行 */}
        <motion.div
          className="flex items-center gap-4 mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[var(--wt-primary-light)] text-xs font-mono tracking-widest font-medium">
            {item.num}
          </span>
          <span className="w-8 h-px bg-white/15" />
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
            {item.label}
          </span>
        </motion.div>

        {/* タイトル */}
        <motion.h3
          className="font-display text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.title}
        </motion.h3>

        {/* グラデーション区切り線 */}
        <div className="overflow-hidden mb-5">
          <motion.div
            className="h-px bg-gradient-to-r from-[var(--wt-primary)]/40 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* 説明文 */}
        <motion.p
          className="text-white/50 text-sm leading-[2] max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function MVV() {
  const sectionRef = useRef<HTMLElement>(null);

  /* セクション全体のスクロール進行度 */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 背景画像: ぼかし → ピント合う → フェードアウト */
  const bgBlur = useTransform(scrollYProgress, [0, 0.45, 0.6], [20, 0, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.7, 0.9], [0, 0, 0.5, 0.5, 0]);

  /* ヘッダーのinView */
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="mvv"
      className="relative min-h-screen flex flex-col py-24 md:py-36 bg-[#1a1a1a] overflow-hidden"
    >
      {/* 背景画像 — 固定 + ぼかし→鮮明→フェードアウト */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{ opacity: bgOpacity }}
      >
        <motion.img
          src="/photo/S__49889548_0.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: useTransform(bgBlur, (v) => `blur(${v}px)`),
          }}
        />
      </motion.div>

      {/* 暗いオーバーレイ */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10 flex-1 flex flex-col">
        {/* ヘッダー */}
        <div ref={headerRef} className="pb-10 md:pb-14">
          <motion.p
            className="text-[var(--wt-primary-light)] text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Philosophy
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            企業理念
          </motion.h2>
          <motion.div
            className="w-12 h-[2px] bg-[var(--wt-primary)] mt-6"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* 理念項目 — 横3カラム */}
        <div className="mt-auto mb-[15vh] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          {items.map((item, i) => (
            <PhilosophyItem key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
