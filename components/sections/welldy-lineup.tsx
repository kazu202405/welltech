"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WD_RED = "#e60012";

const products = [
  {
    code: "WD-01",
    category: "配管・継手",
    name: "給水用ステンレスエルボ",
    spec: "SUS304 / JIS B 2301",
    sizes: "13A / 20A / 25A",
    image: "/welldy/product-elbow.png",
    note: "プロ施工に必要なJIS規格品のみ取扱い。",
  },
  {
    code: "WD-02",
    category: "空調配管",
    name: "ペアコイル（被覆銅管）",
    spec: "1/4 + 3/8 / 20m・30m巻",
    sizes: "2分3分 / 2分4分",
    image: "/welldy/product-pipe-insulated.png",
    note: "断熱材一体型、エアコン設置の定番資材。",
  },
  {
    code: "WD-03",
    category: "配管・ホース",
    name: "汎用配管コイル",
    spec: "径・長さ要相談",
    sizes: "在庫品 / 短納期対応",
    image: "/welldy/product-pipe-clear.png",
    note: "在庫品は短納期対応。径・長さ別注もご相談ください。",
  },
  {
    code: "WD-04",
    category: "梱包資材",
    name: "ウェルディ オリジナル梱包テープ",
    spec: "幅50mm / 50m巻",
    sizes: "1巻〜",
    image: "/welldy/product-tape.png",
    note: "強粘着・低騒音タイプ。ロゴ印字入り。",
  },
  {
    code: "WD-05",
    category: "梱包資材",
    name: "ウェルディ オリジナルダンボール",
    spec: "強化段ボール / 各サイズ",
    sizes: "S / M / L",
    image: "/welldy/product-box.png",
    note: "重量物の小口出荷に。再利用可能な強度設計。",
  },
  {
    code: "WD-06",
    category: "サイン・販促",
    name: "ブランドサイン・看板",
    spec: "アルミ複合板 / 別注対応",
    sizes: "別注サイズ可",
    image: "/welldy/signboard.png",
    note: "工場・営業所への展開実績あり。",
  },
];

export function WelldyLineup() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section
      id="lineup"
      className="relative py-24 md:py-36 bg-[#f5f5f5] overflow-hidden"
    >
      {/* 背景の番号 */}
      <div
        aria-hidden
        className="absolute top-12 left-[3%] font-display font-black text-black/[0.04] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 16vw, 16rem)" }}
      >
        02
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* 見出し */}
        <div ref={headRef} className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              className="text-[10px] font-semibold tracking-[0.4em] uppercase mb-5"
              style={{ color: WD_RED }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Product Lineup
            </motion.p>
            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-[1.3]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              取扱資材
            </motion.h2>
          </div>
          <motion.p
            className="text-[#555] text-sm leading-[1.95] max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            配管材・空調資材・梱包材まで、ウェルディが現場で本当に使う資材だけを厳選。
            掲載品以外の特注・別注品もご相談ください。
          </motion.p>
        </div>

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.code}
              className="group bg-white border border-black/[0.06] hover:border-[#0a0a0a]/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.7,
                delay: 0.05 + (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* 画像 */}
              <div className="relative aspect-[4/3] bg-[#fafafa] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* コード */}
                <span
                  className="absolute top-3 left-3 px-2 py-1 text-[10px] font-mono tracking-wider text-white"
                  style={{ background: "#0a0a0a" }}
                >
                  {p.code}
                </span>
              </div>

              {/* 本体 */}
              <div className="p-5 md:p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: WD_RED }}>
                  {p.category}
                </p>
                <h3 className="font-display text-lg font-bold text-[#0a0a0a] mb-4 leading-[1.4]">
                  {p.name}
                </h3>
                <dl className="text-xs space-y-1.5 mb-4 text-[#555]">
                  <div className="flex gap-3">
                    <dt className="w-12 text-[#999] shrink-0">規格</dt>
                    <dd>{p.spec}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-12 text-[#999] shrink-0">サイズ</dt>
                    <dd>{p.sizes}</dd>
                  </div>
                </dl>
                <p className="text-[11px] text-[#777] leading-[1.8] border-t border-black/5 pt-3">
                  {p.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 注記 */}
        <motion.p
          className="mt-12 text-center text-xs text-[#888] leading-[1.9]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ※ 在庫状況・価格・納期は時期により変動します。
          詳細は<a href="#order" className="underline underline-offset-2 hover:text-[#0a0a0a]">お問い合わせ</a>ください。
        </motion.p>
      </div>
    </section>
  );
}
