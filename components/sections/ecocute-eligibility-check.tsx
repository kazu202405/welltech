"use client";

import { useState } from "react";

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

const checks = [
  { id: "device", label: "ネット接続＋天気連動機能のあるエコキュートを検討中（または確認できる）" },
  { id: "timing", label: "2025年11月28日以降に着工予定（すでに着工済みも含む）" },
  { id: "contractor", label: "補助金対応の登録事業者に依頼する（またはこれから探す）" },
];

export function EligibilityCheck() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allChecked = checks.every((c) => checked[c.id]);
  const count = checks.filter((c) => checked[c.id]).length;

  return (
    <div className="mt-8 rounded-2xl bg-white border-2 border-[var(--wt-primary)]/10 p-6 sm:p-8">
      <h4 className="text-lg font-bold text-[var(--wt-dark)] mb-4">
        あなたは補助金の対象？ 3つだけチェック
      </h4>
      <div className="space-y-3">
        {checks.map((c) => (
          <label key={c.id} className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={!!checked[c.id]}
              onChange={() => setChecked((p) => ({ ...p, [c.id]: !p[c.id] }))}
              className="mt-1 w-5 h-5 rounded border-2 border-[var(--wt-primary)]/30 text-[var(--wt-primary)] focus:ring-[var(--wt-primary)] accent-[var(--wt-primary)]"
            />
            <span className="text-[15px] text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors">
              {c.label}
            </span>
          </label>
        ))}
      </div>
      {allChecked && (
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[rgba(6,199,85,0.08)] to-[rgba(0,133,74,0.08)] text-center">
          <p className="text-base font-bold text-[var(--wt-dark)] mb-3">
            3つともクリア ― 補助金の対象になる可能性が高いです
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--wt-green)] text-white font-semibold px-6 py-3 rounded-lg text-sm hover:brightness-110 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.72 1.65 5.13 4.14 6.67-.14.5-.53 1.86-.61 2.15-.1.36.13.35.28.26.11-.07 1.78-1.18 2.52-1.66.54.08 1.1.13 1.67.13 5.52 0 10-3.32 10-7.55C20 5.82 17.52 2 12 2z"/></svg>
            補助金が使えるか30秒で確認する
          </a>
          <p className="mt-3 text-xs text-[var(--wt-gray)]">
            ※ しつこい営業は一切ありません。LINEでやりとりするだけです。
          </p>
        </div>
      )}
      {count > 0 && !allChecked && (
        <p className="mt-4 text-sm text-[var(--wt-gray)]">
          {count}/3 確認済み ― 残りの条件も確認してみましょう
        </p>
      )}
    </div>
  );
}
