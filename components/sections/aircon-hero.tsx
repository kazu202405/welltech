"use client";

import Link from "next/link";
import { ChevronRight, Clock, Wrench, BadgePercent } from "lucide-react";

/**
 * エアコンLP専用ヒーロー
 * 大きなエアコン画像 + 大見出しキャッチコピー
 * 背景画像は /public/aircon-hero.jpg を設置すれば自動で適用されます
 */
export function AirconHero() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#0d2e1b] text-white pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-12">
      {/* エアコン画像カード（上下余白あり・右角丸） */}
      <div
        className="absolute top-16 sm:top-20 lg:top-24 h-[575px] sm:h-[625px] lg:h-[680px] left-0 w-full sm:w-[82%] lg:w-[80%] bg-cover bg-center rounded-r-[40px] sm:rounded-r-[60px] lg:rounded-r-[80px] overflow-hidden shadow-2xl"
        aria-hidden="true"
        style={{ backgroundImage: `url('/aircon-hero.png')` }}
      />
      {/* ドットパターン装飾 */}
      <div className="absolute inset-0 dot-grid opacity-[0.08]" aria-hidden="true" />

      {/* サイドバッジ（右上）—— デスクトップのみ */}
      <div className="hidden lg:flex absolute top-32 right-6 xl:right-12 flex-col gap-4 z-20">
        <SideBadge value="90%" label="満足度" sublabel="以上" />
        <SideBadge value="95%" label="全国都道府県" sublabel="対応可能" />
      </div>

      <div className="relative pl-4 sm:pl-[8%] lg:pl-[10%] pr-4 sm:pr-6 pt-6 sm:pt-8 lg:pt-10 z-10">
        {/* 上部メッセージ */}
        <div className="mb-4">
          <p className="inline-flex items-center gap-2 text-sm sm:text-base font-bold bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            お問い合わせから
            <span className="bg-[var(--wt-accent)] text-[#0d2e1b] px-2 py-0.5 rounded font-black">
              最短2日
            </span>
            で設置完了可能！
          </p>
        </div>

        {/* 大キャッチコピー */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-4 [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]"
        >
          <span className="block text-[var(--wt-primary-light)]">業務用・家庭用</span>
          <span className="block">エアコンの</span>
          <span className="block mt-1">
            <span className="relative inline-block">
              <span className="relative z-10">購入・修理</span>
              <span
                className="absolute left-0 bottom-1 right-0 h-3 bg-[var(--wt-accent)]/40 -z-0"
                aria-hidden="true"
              />
            </span>なら
          </span>
        </h1>

        {/* サブキャッチ */}
        <p
          className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 max-w-2xl [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]"
        >
          現地調査から見積もりまで
          <span className="font-bold text-[var(--wt-accent)]">完全無料</span>の<br className="hidden sm:block" />
          ウェルテックにお任せください！
        </p>

        {/* 3点特徴バッジ（円形） */}
        <div
          className="flex flex-wrap gap-3 sm:gap-4 mb-10"
        >
          <FeatureBadge icon={Clock} text="最短即日見積り" />
          <FeatureBadge icon={Wrench} text="他社製品の対応可" />
          <FeatureBadge icon={BadgePercent} text="業界最安値級の低価格" />
        </div>

        {/* サイドバッジ（モバイル用） */}
        <div className="flex lg:hidden gap-3 mb-8">
          <MobileBadge value="90%+" label="満足度" />
          <MobileBadge value="95%" label="全国対応" />
        </div>
        {/* カード底までスペース確保 */}
        <div className="h-8 sm:h-10 lg:h-12" aria-hidden="true" />
      </div>

      {/* メーカーロゴ帯（左端→コンテンツ幅でカット・右角丸、カード底に食い込ませる） */}
      <div className="relative mt-0 lg:mt-1 inline-flex max-w-full bg-white/95 backdrop-blur-sm py-4 z-20 border-y border-gray-200 shadow-xl rounded-r-full">
        <div className="pl-4 sm:pl-6 lg:pl-8 pr-10 sm:pr-14 flex items-center gap-4 sm:gap-6 overflow-x-auto">
          <span className="flex-shrink-0 text-xs sm:text-sm font-bold text-[var(--wt-dark)] border-r border-gray-300 pr-4">
            全メーカー<br className="hidden sm:block" />対応可能！
          </span>
          <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-bold text-[var(--wt-gray)]">
            {["日立", "三菱電機", "三菱重工", "ダイキン", "東芝", "Panasonic", "富士通", "シャープ"].map(
              (name) => (
                <span key={name} className="whitespace-nowrap">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* CTA（カード＆メーカー帯の下・センター配置） */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-10 sm:pt-16 lg:pt-16 lg:pb-12 z-10 flex justify-center">
        <a
          href="#contact"
          className="group inline-flex items-center justify-between gap-3 bg-[var(--wt-accent)] text-[#0d2e1b] font-black text-base sm:text-lg px-6 py-4 rounded-full hover:bg-[var(--wt-accent)]/90 transition-all btn-bounce shadow-xl shadow-[var(--wt-accent)]/30"
        >
          <span className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#0d2e1b] text-[var(--wt-accent)] text-xs font-bold">
              60秒
            </span>
            ご購入も・修理も 無料お見積りはこちら
          </span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </section>
    {/* パンくず（ヒーロー外・白背景） */}
    <nav className="bg-white border-b border-gray-100 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-xs text-[var(--wt-gray)]">
          <li>
            <Link href="/" className="hover:text-[var(--wt-primary)] transition-colors">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--wt-dark)] font-semibold">エアコン販売・設置</li>
        </ol>
      </div>
    </nav>
    </>
  );
}

/* 円形3点特徴バッジ */
function FeatureBadge({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white text-[var(--wt-dark)] rounded-full pl-2 pr-4 py-1.5 shadow-lg">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--wt-primary)] text-white">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{text}</span>
    </div>
  );
}

/* デスクトップ右上のサイド円形バッジ */
function SideBadge({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="relative w-28 h-28 rounded-full bg-[var(--wt-accent)] text-[#0d2e1b] flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white/20">
      <span className="text-[10px] font-bold leading-tight">{label}</span>
      <span className="text-2xl font-black leading-none my-0.5">{value}</span>
      <span className="text-[10px] font-bold leading-tight">{sublabel}</span>
    </div>
  );
}

/* モバイル用横長バッジ */
function MobileBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-[var(--wt-accent)] text-[#0d2e1b] rounded-lg px-3 py-2 shadow-lg">
      <span className="text-lg font-black">{value}</span>
      <span className="text-[10px] font-bold leading-tight">{label}</span>
    </div>
  );
}
