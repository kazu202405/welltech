"use client";

import Link from "next/link";
import { ChevronRight, Clock, Wrench, BadgePercent } from "lucide-react";

/**
 * エアコンLP専用ヒーロー
 * - 画像カードにグラデーションオーバーレイで可読性確保
 * - CTAをヒーロー本体内に配置（視線誘導強化）
 * - メーカー帯は独立セクション化
 * - 特徴バッジに段階的リビール
 */
export function AirconHero() {
  return (
    <>
      {/* パンくず（ヘッダー直下・ヒーロー上） */}
      <nav className="bg-[#0d2e1b] pt-20 sm:pt-24 lg:pt-28 pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-xs text-white/60">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--wt-accent)] transition-colors"
              >
                ホーム
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-semibold">エアコン販売・設置</li>
          </ol>
        </div>
      </nav>

      {/* ───── ヒーロー本体 ───── */}
      <section className="relative overflow-hidden bg-[#0d2e1b] text-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        {/* エアコン画像カード（非対称右角丸） */}
        <div
          className="absolute top-0 h-[580px] sm:h-[640px] lg:h-[700px] left-0 w-full sm:w-[82%] lg:w-[80%] bg-cover bg-center rounded-r-[40px] sm:rounded-r-[60px] lg:rounded-r-[80px] overflow-hidden shadow-2xl"
          aria-hidden="true"
          style={{ backgroundImage: `url('/aircon-hero.png')` }}
        >
          {/* グラデーションオーバーレイ: 左下ダーク → 右上透明 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(13,46,27,0.92) 0%, rgba(13,46,27,0.78) 35%, rgba(13,46,27,0.35) 65%, rgba(13,46,27,0.05) 100%)",
            }}
          />
          {/* 下辺フェード（メーカー帯への繋ぎ） */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background:
                "linear-gradient(to top, rgba(13,46,27,0.85) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* ドットパターン装飾 */}
        <div
          className="absolute inset-0 dot-grid opacity-[0.08]"
          aria-hidden="true"
        />

        {/* コンテンツ本体 */}
        <div className="relative pl-4 sm:pl-[8%] lg:pl-[10%] pr-4 sm:pr-6 pt-6 sm:pt-8 lg:pt-10 z-10 max-w-4xl">
          {/* 上部メッセージバッジ */}
          <div
            className="mb-5 animate-in fade-in slide-in-from-bottom-2 duration-700"
            style={{ animationDelay: "0ms", animationFillMode: "backwards" }}
          >
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
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-5 animate-in fade-in slide-in-from-bottom-3 duration-700"
            style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
          >
            <span className="block text-[var(--wt-primary-light)]">
              業務用
            </span>
            <span className="block">エアコンの</span>
            <span className="block mt-1">
              <span className="relative inline-block">
                <span className="relative z-10">購入・修理</span>
                <span
                  className="absolute left-0 bottom-1 right-0 h-3 bg-[var(--wt-accent)]/40 -z-0"
                  aria-hidden="true"
                />
              </span>
              なら
            </span>
          </h1>

          {/* サブキャッチ */}
          <p
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-7 max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-700"
            style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
          >
            LINEで写真を送るだけでお見積り
            <span className="font-bold text-[var(--wt-accent)]">完全無料</span>
            。<br className="hidden sm:block" />
            面倒な日程調整は不要です！
          </p>

          {/* 3点特徴バッジ（段階的リビール: 100msずつstagger） */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            {[
              { icon: Clock, text: "最短即日見積り" },
              { icon: Wrench, text: "他社製品の対応可" },
              { icon: BadgePercent, text: "業界最安値級の低価格" },
            ].map((item, i) => (
              <div
                key={item.text}
                className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                style={{
                  animationDelay: `${300 + i * 100}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <FeatureBadge icon={item.icon} text={item.text} />
              </div>
            ))}
          </div>

          {/* CTA（ヒーロー内・特徴バッジ直後） */}
          <div
            className="animate-in fade-in slide-in-from-bottom-3 duration-700"
            style={{ animationDelay: "700ms", animationFillMode: "backwards" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-between gap-3 bg-[var(--wt-accent)] text-[#0d2e1b] font-black text-base sm:text-lg px-6 py-4 rounded-full hover:bg-[var(--wt-accent)]/90 transition-all btn-bounce shadow-2xl shadow-[var(--wt-accent)]/30"
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

          {/* カード底までの余白確保 */}
          <div className="h-10 sm:h-12 lg:h-14" aria-hidden="true" />
        </div>
      </section>

      {/* ───── メーカー帯（独立セクション化） ───── */}
      <section className="relative bg-[#0d2e1b] pb-10 sm:pb-12 lg:pb-14">
        <div className="inline-flex max-w-full bg-white py-4 border-y border-gray-200 shadow-xl rounded-r-full">
          <div className="pl-4 sm:pl-6 lg:pl-8 pr-10 sm:pr-14 flex items-center gap-4 sm:gap-6 overflow-x-auto">
            <span className="flex-shrink-0 text-xs sm:text-sm font-bold text-[var(--wt-dark)] border-r border-gray-300 pr-4">
              全メーカー
              <br className="hidden sm:block" />
              対応可能！
            </span>
            <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-bold text-[var(--wt-gray)]">
              {[
                "日立",
                "三菱電機",
                "三菱重工",
                "ダイキン",
                "東芝",
                "Panasonic",
                "富士通",
                "シャープ",
              ].map((name) => (
                <span key={name} className="whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
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
      <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
