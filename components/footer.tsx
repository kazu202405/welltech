"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const pathname = usePathname();
  // ウェルディ（資材物販ブランド）はブランドカラーが黒×赤のため、緑系フッターから黒へ切替
  const isWelldy = pathname?.startsWith("/welldy");
  const bgClass = isWelldy ? "bg-[#0a0a0a]" : "bg-[var(--wt-bg-dark)]";

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <footer ref={ref} className={`relative ${bgClass} text-white pt-12 md:pt-16 pb-6 overflow-hidden`}>
      {/* 背景装飾 */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* 上部: ロゴ + ナビゲーション */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-10 md:mb-12">
          {/* ロゴ・会社情報 */}
          <motion.div className="md:col-span-4" {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-6">
              <img src="/welltech-logo.svg" alt="" width={28} height={36} className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight">WELLTECH</span>
            </div>
            <div className="text-sm text-white/30 leading-[1.9] space-y-0.5">
              <p>株式会社ウェルテック</p>
              <p>代表取締役 藤野隆史</p>
              <p className="pt-1">〒701-0206</p>
              <p>岡山県岡山市南区妹尾3516</p>
            </div>
            {/* 連絡先 */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/25">
              <a href="tel:0869410882" className="hover:text-white/50 transition-colors">
                TEL 086-941-0882
              </a>
              <span>FAX 086-236-6387</span>
              <a href="mailto:info@well-tech.top" className="hover:text-white/50 transition-colors">
                info@well-tech.top
              </a>
            </div>
          </motion.div>

          {/* 許可・登録 */}
          <motion.div className="md:col-span-3" {...fadeUp(0.1)}>
            <h4 className="text-[10px] font-semibold text-white/20 tracking-[0.2em] uppercase mb-5">
              許可・登録
            </h4>
            <ul className="space-y-2.5 text-sm text-white/35">
              <li>岡山県知事許可（般-6）第27090号</li>
              <li>登録電気工事業者 岡山県知事登録2023-168</li>
              <li>産業廃棄物収集運搬業許可</li>
            </ul>
          </motion.div>

          {/* 対応エリア */}
          <motion.div className="md:col-span-3" {...fadeUp(0.15)}>
            <h4 className="text-[10px] font-semibold text-white/20 tracking-[0.2em] uppercase mb-5">
              対応エリア
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/35">
              <li><a href="/area/chugoku-shikoku" className="hover:text-white/60 transition-colors">中国・四国</a></li>
              <li><a href="/area/kansai" className="hover:text-white/60 transition-colors">関西</a></li>
              <li><a href="/area/kanto" className="hover:text-white/60 transition-colors">関東</a></li>
              <li><a href="/area/chubu" className="hover:text-white/60 transition-colors">中部・北陸</a></li>
              <li><a href="/area/kyushu" className="hover:text-white/60 transition-colors">九州・沖縄</a></li>
              <li><a href="/area/tohoku-hokkaido" className="hover:text-white/60 transition-colors">東北・北海道</a></li>
            </ul>
          </motion.div>

          {/* リンク */}
          <motion.div className="md:col-span-2" {...fadeUp(0.2)}>
            <h4 className="text-[10px] font-semibold text-white/20 tracking-[0.2em] uppercase mb-5">
              情報
            </h4>
            <ul className="space-y-2.5 text-sm text-white/35">
              <li><a href="/company" className="hover:text-white/60 transition-colors">会社概要</a></li>
              <li><a href="/aircon" className="hover:text-white/60 transition-colors">エアコン販売</a></li>
              <li><a href="/ecocute-subsidy" className="hover:text-white/60 transition-colors">エコキュート補助金</a></li>
              <li><a href="/welldy" className="hover:text-white/60 transition-colors">資材販売 ウェルディ</a></li>
              <li><a href="/privacy" className="hover:text-white/60 transition-colors">プライバシーポリシー</a></li>
              <li><a href="/terms" className="hover:text-white/60 transition-colors">利用規約</a></li>
              <li><a href="/tokushoho" className="hover:text-white/60 transition-colors">特定商取引法</a></li>
            </ul>
          </motion.div>
        </div>

        {/* 下部: コピーライト */}
        <motion.div
          className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          {...fadeUp(0.25)}
        >
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} 株式会社ウェルテック
          </p>
          <p className="text-[11px] text-white/15">
            創業 2018年5月 / 資本金 500万円
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
