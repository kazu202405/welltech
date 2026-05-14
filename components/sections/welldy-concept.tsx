"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, ShieldCheck, Handshake } from "lucide-react";

const WD_RED = "#e60012";

const pillars = [
  {
    Icon: Truck,
    label: "Speed",
    title: "最短で届ける",
    body: "全国の協力会社ネットワークで在庫を分散保有。短納期で確実にお届けし、現場を止めません。",
  },
  {
    Icon: ShieldCheck,
    label: "Quality",
    title: "確かな品質",
    body: "JIS規格・メーカー保証付の正規流通品のみ取扱い。施工会社が選ぶ「プロ仕様」の品質基準で揃えています。",
  },
  {
    Icon: Handshake,
    label: "Partner",
    title: "職人の味方",
    body: "現場目線で必要量・必要サイズに対応。小ロットから法人ボリュームまで、相談しながら最適な納品形態を組みます。",
  },
];

export function WelldyConcept() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      {/* 背景: 大きな番号 */}
      <div
        aria-hidden
        className="absolute top-12 right-[5%] font-display font-black text-black/[0.03] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 16vw, 16rem)" }}
      >
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* セクション見出し */}
        <div ref={headRef} className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.4em] uppercase mb-5"
            style={{ color: WD_RED }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Brand Concept
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-[1.3] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            職人の仕事を、
            <br />
            もっと確かなものに。
          </motion.h2>
          <motion.div
            className="w-12 h-[2px] mb-8"
            style={{ background: WD_RED, transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.p
            className="text-[#555] text-sm md:text-base leading-[2] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            ウェルテックが施工現場で「これがあれば」と思った資材を、
            自分たちのブランドで一つひとつ揃えてきたのがウェルディです。
            建設会社が自社で使う資材だからこそ、品質も納期も妥協しません。
          </motion.p>
        </div>

        {/* 3つの柱 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white p-8 md:p-10 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span
                  className="font-display text-5xl md:text-6xl font-black leading-none"
                  style={{ color: WD_RED }}
                >
                  0{i + 1}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#999] uppercase">
                  {p.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <p.Icon className="w-5 h-5 text-[#0a0a0a]" strokeWidth={1.5} />
                <h3 className="font-display text-xl md:text-2xl font-bold text-[#0a0a0a]">
                  {p.title}
                </h3>
              </div>
              <p className="text-[#555] text-sm leading-[1.95]">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
