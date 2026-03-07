"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const works = [
  { src: "/photo/S__49889490_0.jpg", title: "通信設備施設", category: "電気工事", desc: "公共施設の通信インフラ整備。配線・機器設置・試験調整まで一貫対応。" },
  { src: "/photo/S__49889550_0.jpg", title: "太陽光パネル設置", category: "電気工事", desc: "産業用太陽光発電システムの設計施工。架台設置から系統連系まで。" },
  { src: "/photo/S__49889495_0.jpg", title: "ホテル照明設備工事", category: "建築工事", desc: "宿泊施設の照明リニューアル。省エネLED化と調光システム導入。" },
  { src: "/photo/S__49889470_0.jpg", title: "空調設備設置工事", category: "空調設備", desc: "商業施設の大型空調設備新設。ダクト工事から試運転まで。" },
  { src: "/photo/S__49889457_0.jpg", title: "倉庫電気工事", category: "電気工事", desc: "物流倉庫の電気設備全般。照明・動力・防災設備を施工。" },
  { src: "/photo/S__49889465_0.jpg", title: "鉄骨溶接工事", category: "建築工事", desc: "建築鉄骨の現場溶接。有資格者による品質管理体制。" },
  { src: "/photo/S__49889480_0.jpg", title: "LED照明工事", category: "電気工事", desc: "オフィスビルの照明LED化工事。電気代削減と作業環境改善を実現。" },
  { src: "/photo/S__49889485_0.jpg", title: "天井埋込エアコン設置", category: "空調設備", desc: "店舗・オフィスの天井カセット型エアコン新設・更新工事。" },
  { src: "/photo/S__49889515_0.jpg", title: "制御盤配線工事", category: "電気工事", desc: "工場設備の制御盤製作・配線。PLCプログラム対応も可能。" },
  { src: "/photo/S__49889545_0.jpg", title: "分電盤設備工事", category: "電気工事", desc: "ビル・施設の分電盤新設・増設。容量計算から施工・検査まで。" },
  { src: "/photo/S__49889505_0.jpg", title: "住宅電気設備工事", category: "電気工事", desc: "新築・リフォームの住宅電気工事。コンセント増設からIH対応まで。" },
  { src: "/photo/S__49889560_0.jpg", title: "屋上防水工事", category: "建築工事", desc: "RC造建築物の屋上防水改修。ウレタン・シート防水に対応。" },
];

// 無限ループ用に先頭と末尾のアイテムを複製
const loopedWorks = [...works, ...works, ...works];

export function Works() {
  const sectionRef = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // カード幅を取得
  const getCardWidth = useCallback(() => {
    return window.innerWidth >= 768 ? 360 : 300;
  }, []);

  // スクロール位置を監視してボタン表示を更新
  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  // 無限ループ: 中央セットを基準にリセット
  const checkLoop = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = (el.scrollWidth) / 3;

    // 右端を超えたら中央セットの同じ位置に飛ばす
    if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth;
    }
    // 左端を超えたら中央セットの同じ位置に飛ばす
    if (el.scrollLeft <= 0) {
      el.scrollLeft += oneSetWidth;
    }
  }, []);

  // 初期位置を中央セットにセット
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;
  }, []);

  // 自動スクロール（requestAnimationFrame）
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastTime = 0;
    const speed = 0.5; // px/frame（約30px/秒）

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

  // スクロールイベント
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    updateButtons();
    return () => el.removeEventListener("scroll", updateButtons);
  }, [updateButtons]);

  // ボタンクリックでスクロール
  const handleNav = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    el.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
    // smooth scroll完了後にループチェック
    setTimeout(() => checkLoop(), 500);
  }, [getCardWidth, checkLoop]);

  return (
    <section ref={sectionRef} id="works" className="py-24 md:py-32 bg-[var(--wt-bg-dark)] overflow-hidden">
      {/* カルーセル */}
      <div
        data-reveal
        className="mb-12 md:mb-16 relative group/carousel"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { setTimeout(() => { pausedRef.current = false; }, 3000); }}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 px-5 sm:px-8 lg:px-10 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {loopedWorks.map((work, i) => (
            <div
              key={i}
              className="group relative shrink-0 w-[280px] md:w-[340px] aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src={work.src}
                alt={`${work.title} - ${work.category} | ウェルテック施工実績`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] text-white/50 font-medium tracking-wider uppercase">{work.category}</span>
                <p className="text-sm text-white font-semibold mt-0.5">{work.title}</p>
                <p className="text-[11px] text-white/40 mt-1 leading-snug line-clamp-2">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 左右ナビボタン（ホバー時に表示） */}
        <button
          onClick={() => handleNav("left")}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-all opacity-0 group-hover/carousel:opacity-100 ${!showLeft ? "pointer-events-none !opacity-0" : ""}`}
          aria-label="前の写真"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleNav("right")}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-all opacity-0 group-hover/carousel:opacity-100 ${!showRight ? "pointer-events-none !opacity-0" : ""}`}
          aria-label="次の写真"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ヘッディング（下部左寄せ） */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div data-reveal className="max-w-lg">
          <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            施工実績
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            公共建築から民間工事まで、全国各地で多様な施工実績があります。<br />
            電気工事・建築工事・空調設備など幅広い分野に対応しています。
          </p>
        </div>
      </div>
    </section>
  );
}
