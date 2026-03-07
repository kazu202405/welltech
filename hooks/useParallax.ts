"use client";

import { useEffect, useRef } from "react";

export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // モーション軽減設定を尊重
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!el) return;
          const rect = el.parentElement?.getBoundingClientRect();
          if (!rect) return;
          const viewH = window.innerHeight;
          // セクションが画面内にある場合のみ計算
          if (rect.bottom > 0 && rect.top < viewH) {
            const progress = (viewH - rect.top) / (viewH + rect.height);
            const offset = (progress - 0.5) * speed * 100;
            el.style.transform = `translateY(${offset}px) scale(1.2)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
