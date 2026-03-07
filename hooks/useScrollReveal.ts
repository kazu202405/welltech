"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let delay = 0;

            // data-reveal: 段階的フェードイン
            const reveals = el.querySelectorAll("[data-reveal]");
            reveals.forEach((item) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("revealed");
              }, delay);
              delay += 120;
            });

            // data-reveal-image: clip-pathスライド
            const images = el.querySelectorAll("[data-reveal-image]");
            images.forEach((item) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("revealed");
              }, delay);
              delay += 100;
            });

            // data-reveal-line: 線伸長
            const lines = el.querySelectorAll("[data-reveal-line]");
            lines.forEach((item) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("revealed");
              }, delay);
            });

            // data-reveal-item: リスト項目の順次出現
            const items = el.querySelectorAll("[data-reveal-item]");
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("revealed");
              }, delay + index * 80);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
