"use client";

import { useState, useEffect } from "react";

export function PageLoader() {
  const [phase, setPhase] = useState<"logo" | "fade" | "done">("logo");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fade"), 1200);
    const doneTimer = setTimeout(() => setPhase("done"), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[var(--wt-bg-dark)] flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* SVGサークルローダー */}
      <svg className="w-16 h-16 mb-6" viewBox="0 0 60 60">
        <circle
          cx="30" cy="30" r="26"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
        />
        <circle
          cx="30" cy="30" r="26"
          fill="none"
          stroke="var(--wt-primary)"
          strokeWidth="2"
          strokeDasharray="163"
          strokeDashoffset="163"
          strokeLinecap="round"
          style={{ animation: "loading-circle 1.5s ease-in-out forwards" }}
        />
      </svg>

      {/* ロゴテキスト */}
      <div
        className="flex flex-col items-center"
        style={{ animation: "loader-logo 1.5s ease-in-out forwards" }}
      >
        <span className="text-white text-2xl font-bold tracking-widest">WELLTECH</span>
        <span className="text-white/30 text-xs tracking-[0.3em] mt-2">PARTNER RECRUITMENT</span>
      </div>
    </div>
  );
}
