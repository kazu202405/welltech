"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// ウェルディ ブランドカラー（黒×赤の職人向け）
const WD_RED = "#e60012";

export function WelldyHero() {
  return (
    <section className="relative min-h-[100svh] bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      {/* 背景: 看板写真（不透明・焼き込みなし） */}
      <div className="absolute inset-0">
        <Image
          src="/welldy/signboard.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-110 motion-safe:animate-[ken-burns_18s_ease-out_infinite_alternate]"
          sizes="100vw"
        />
        {/* 暗いオーバーレイ */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.80) 45%, rgba(10,10,10,0.55) 100%)",
          }}
        />
      </div>

      {/* 巨大なWウォーターマーク */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none"
      >
        <span
          className="font-display font-black leading-none text-white/[0.05]"
          style={{
            fontSize: "clamp(20rem, 50vw, 50rem)",
            transform: "translate(15%, 5%)",
          }}
        >
          W
        </span>
      </div>

      {/* 赤い縦アクセントライン */}
      <div
        aria-hidden
        className="absolute top-0 left-[8%] h-full w-[2px] bg-gradient-to-b from-transparent via-[#e60012]/60 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">
              Welltech Original Brand
            </span>
            <span className="h-[1px] w-12" style={{ background: WD_RED }} />
          </motion.div>

          {/* ロゴ（黒背景版なので invert 不要） */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <Image
              src="/welldy/logo-jp-darkbg.png"
              alt="ウェルディ"
              width={640}
              height={260}
              priority
              className="h-auto w-[280px] sm:w-[360px] md:w-[440px]"
            />
          </motion.div>

          <motion.h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            職人の現場を止めない、
            <br />
            <span style={{ color: WD_RED }}>最適な資材</span>を、最短で。
          </motion.h1>

          <motion.p
            className="text-white/70 text-sm md:text-base leading-[2] max-w-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            ウェルディは、株式会社ウェルテックが運営する建築・設備資材ブランドです。
            全国の協力会社ネットワークで培った調達力で、プロの現場が本当に必要としている
            資材を、確かな品質で、最短で届けます。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#lineup"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider text-white transition-all"
              style={{ background: WD_RED }}
            >
              取扱商品を見る
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wider text-white border border-white/30 hover:border-white/70 hover:bg-white/[0.04] transition-colors"
            >
              注文・お問い合わせ
            </a>
          </motion.div>
        </div>

        {/* 下部: スクロール表記 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Scroll
          </span>
          <div className="relative w-[1px] h-10 bg-white/10 overflow-hidden">
            <span
              className="absolute inset-0 bg-white/70"
              style={{ animation: "scrollLine 2.4s ease-in-out infinite" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
