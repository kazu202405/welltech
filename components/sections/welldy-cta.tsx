"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const WD_RED = "#e60012";
const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export function WelldyCta() {
  return (
    <section className="relative py-24 md:py-36 bg-[#0a0a0a] text-white overflow-hidden">
      {/* 巨大なWマーク背景 */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-display font-black leading-none text-white/[0.03]"
          style={{ fontSize: "clamp(20rem, 45vw, 44rem)" }}
        >
          W
        </span>
      </div>

      {/* 赤いコーナーライン */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-16 h-[2px]"
        style={{ background: WD_RED }}
      />
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[2px] h-16"
        style={{ background: WD_RED }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-16 h-[2px]"
        style={{ background: WD_RED }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[2px] h-16"
        style={{ background: WD_RED }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.p
          className="text-[10px] font-semibold tracking-[0.4em] uppercase mb-6"
          style={{ color: WD_RED }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          まずは、
          <br className="sm:hidden" />
          相談からお気軽に。
        </motion.h2>

        <motion.p
          className="text-white/55 text-sm md:text-base leading-[2] mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          「こんな資材ある？」「この量で何日で届く？」
          そんな現場の声から始めて、最適な納品をご提案します。
          初回のご相談・お見積りは無料です。
        </motion.p>

        {/* CTA ボタン群 */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-sm md:text-base font-semibold tracking-wider text-white transition-all"
            style={{ background: WD_RED }}
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            LINEで相談する
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:0869410882"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 text-sm md:text-base font-semibold tracking-wider text-white border border-white/20 hover:border-white/60 transition-colors"
          >
            <Phone className="w-5 h-5" strokeWidth={2} />
            086-941-0882
          </a>
        </motion.div>

        {/* 補足情報 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-white/35"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            info@well-tech.top
          </span>
          <span className="hidden sm:block w-px h-3 bg-white/15" />
          <span>受付 平日 7:30 – 17:00</span>
        </motion.div>
      </div>
    </section>
  );
}
