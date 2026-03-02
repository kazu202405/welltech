"use client";

import { useState, useEffect } from "react";

export function PageLoader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 500);
    const hideTimer = setTimeout(() => setHidden(true), 1000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a1628] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* ロゴ */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-[#2563eb] rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">W</span>
        </div>
        <span className="text-white text-xl font-bold tracking-wide">ウェルテック</span>
      </div>
      {/* スピナー */}
      <div className="w-8 h-8 border-2 border-white/10 border-t-[#2563eb] rounded-full animate-spin" />
    </div>
  );
}
