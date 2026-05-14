"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FileText, Truck } from "lucide-react";

const WD_RED = "#e60012";

const steps = [
  {
    Icon: MessageSquare,
    label: "Step 01",
    title: "問い合わせ・相談",
    body: "LINE・電話・メールどれでも構いません。必要な資材・数量・納期をお聞かせください。",
  },
  {
    Icon: FileText,
    label: "Step 02",
    title: "見積・在庫確認",
    body: "当日〜翌営業日にお見積りをお返しします。在庫品は即日確保、別注品は調達ルートをご案内。",
  },
  {
    Icon: Truck,
    label: "Step 03",
    title: "発送・現場直送",
    body: "在庫品は短納期での出荷に対応。現場直送・指定日着指定も可能です。",
  },
];

export function WelldyOrder() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section
      id="order"
      className="relative py-24 md:py-36 bg-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-12 left-[3%] font-display font-black text-black/[0.04] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 16vw, 16rem)" }}
      >
        04
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div ref={headRef} className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.4em] uppercase mb-5"
            style={{ color: WD_RED }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Order Flow
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-[1.3] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            注文の流れ
          </motion.h2>
          <motion.p
            className="text-[#555] text-sm md:text-base leading-[2]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            初回のお取引から法人継続まで、シンプルなフローでお取引いただけます。
            支払方法は請求書（法人）・代引きどちらでも対応します。
          </motion.p>
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative bg-white p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 矢印（モバイル以外） */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 z-10"
                  style={{ color: WD_RED }}
                >
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                      borderLeft: `10px solid ${WD_RED}`,
                    }}
                  />
                </div>
              )}

              <div className="flex items-baseline gap-4 mb-6">
                <span
                  className="font-display text-5xl md:text-6xl font-black leading-none"
                  style={{ color: WD_RED }}
                >
                  0{i + 1}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#999] uppercase">
                  {s.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <s.Icon className="w-5 h-5 text-[#0a0a0a]" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold text-[#0a0a0a]">
                  {s.title}
                </h3>
              </div>
              <p className="text-[#555] text-sm leading-[1.95]">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
