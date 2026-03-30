"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const works = [
  { src: "/photo/S__49889490_0.jpg", title: "通信設備施設", category: "電気工事", featured: true },
  { src: "/photo/S__49889550_0.jpg", title: "太陽光パネル設置", category: "電気工事" },
  { src: "/photo/S__49889495_0.jpg", title: "ホテル照明設備工事", category: "建築工事" },
  { src: "/photo/S__49889470_0.jpg", title: "空調設備設置工事", category: "空調設備", featured: true },
  { src: "/photo/S__49889457_0.jpg", title: "倉庫電気工事", category: "電気工事" },
  { src: "/photo/S__49889465_0.jpg", title: "鉄骨溶接工事", category: "建築工事" },
  { src: "/photo/S__49889480_0.jpg", title: "LED照明工事", category: "電気工事", featured: true },
  { src: "/photo/S__49889485_0.jpg", title: "天井埋込エアコン設置", category: "空調設備" },
  { src: "/photo/S__49889515_0.jpg", title: "制御盤配線工事", category: "電気工事" },
  { src: "/photo/S__49889545_0.jpg", title: "分電盤設備工事", category: "電気工事" },
  { src: "/photo/S__49889505_0.jpg", title: "住宅電気設備工事", category: "電気工事", featured: true },
  { src: "/photo/S__49889560_0.jpg", title: "屋上防水工事", category: "建築工事" },
];

/* 無限ループ用に複製 */
const loopedWorks = [...works, ...works, ...works];

export function Works() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  /* 無限ループ: 中央セットを基準にリセット */
  const checkLoop = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth;
    }
    if (el.scrollLeft <= 0) {
      el.scrollLeft += oneSetWidth;
    }
  }, []);

  /* 初期位置を中央セットにセット */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  /* 自動スクロール */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastTime = 0;
    const speed = 1.0;

    function tick(time: number) {
      if (lastTime && !pausedRef.current) {
        const el = scrollRef.current;
        if (el) {
          el.scrollLeft += speed;
          checkLoop();
        }
      }
      lastTime = time;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [checkLoop]);

  return (
    <section id="works" className="py-28 md:py-40 bg-[var(--wt-bg-dark)] overflow-hidden">
      {/* ヘッダー */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-14 md:mb-20">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              className="text-[var(--wt-primary-light)] text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Works
            </motion.p>
            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              施工実績
            </motion.h2>
            <motion.div
              className="w-12 h-[2px] bg-[var(--wt-primary)] mt-6"
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <motion.p
            className="text-white/35 text-sm leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            公共建築から民間工事まで、全国各地で多様な施工実績があります。
          </motion.p>
        </div>
      </div>

      {/* カルーセル — 高さに変化をつけた横スクロール */}
      <div
        className="relative group/carousel"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { setTimeout(() => { pausedRef.current = false; }, 3000); }}
      >
        {/* 左右フェードグラデーション */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[var(--wt-bg-dark)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[var(--wt-bg-dark)] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex items-end gap-4 md:gap-5 overflow-x-auto px-5 sm:px-8 lg:px-10 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {loopedWorks.map((work, i) => (
            <div
              key={i}
              className={`group relative shrink-0 overflow-hidden rounded-lg transition-all duration-500 ${
                work.featured
                  ? "w-[320px] md:w-[400px] h-[280px] md:h-[360px]"
                  : "w-[240px] md:w-[300px] h-[200px] md:h-[260px]"
              }`}
            >
              <img
                src={work.src}
                alt={`${work.title} - ${work.category} | ウェルテック施工実績`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* ホバーオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* テキスト */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] text-[var(--wt-primary-light)] font-medium tracking-[0.15em] uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {work.category}
                </span>
                <p className="text-white text-sm md:text-base font-bold leading-tight">
                  {work.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* スワイプヒント（モバイル） */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-6 text-white/20 text-xs">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
        <span>スワイプで閲覧</span>
      </div>
    </section>
  );
}
