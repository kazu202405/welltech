"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WD_RED = "#e60012";

const proofs = [
  {
    title: "規格品のみ取扱い",
    body: "JIS規格・メーカー保証付の正規流通品のみ。商品ラベルに規格・材質・ロット情報を明記して出荷します。",
    image: "/welldy/product-elbow.png",
    contain: true,
  },
  {
    title: "ロゴ付き梱包で出荷",
    body: "ウェルディオリジナルダンボールで出荷。誰がいつ受け取ったか、現場でも一目瞭然です。",
    image: "/welldy/product-box.png",
    contain: true,
  },
  {
    title: "オリジナル梱包資材",
    body: "重量物・長尺物にも対応するブランド梱包テープを使用。物流段階での破損を最小化します。",
    image: "/welldy/product-tape.png",
    contain: true,
  },
];

export function WelldyQuality() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section className="relative py-24 md:py-36 bg-[#0a0a0a] text-white overflow-hidden">
      {/* 装飾: 縦の赤ライン */}
      <div
        aria-hidden
        className="absolute top-0 right-[12%] h-full w-[1px]"
        style={{ background: `linear-gradient(to bottom, transparent, ${WD_RED}66, transparent)` }}
      />
      <div
        aria-hidden
        className="absolute top-12 right-[5%] font-display font-black text-white/[0.04] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 16vw, 16rem)" }}
      >
        03
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* 見出し */}
        <div ref={headRef} className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.4em] uppercase mb-5"
            style={{ color: WD_RED }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Quality Assurance
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            ブランドである、
            <br />
            ということ。
          </motion.h2>
          <motion.p
            className="text-white/60 text-sm md:text-base leading-[2]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            ウェルディの資材には、すべてWマークが入っています。
            誰がどのロットを納めたかを後から追えること、現場で混在しても見分けられること。
            ブランドであるということは、私たちが責任を持って届ける、ということです。
          </motion.p>
        </div>

        {/* 3枚の写真パネル */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-white">
                <Image
                  src={proof.image}
                  alt={proof.title}
                  fill
                  className={`${
                    proof.contain ? "object-contain p-8" : "object-cover"
                  } transition-transform duration-700 ease-out group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="absolute top-3 left-3 text-[10px] font-mono tracking-wider px-2 py-1 bg-black/70 text-white z-10"
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                <span style={{ color: WD_RED }}>—&nbsp;</span>
                {proof.title}
              </h3>
              <p className="text-white/55 text-sm leading-[1.95]">{proof.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
