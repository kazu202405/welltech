"use client";

import { useEffect, useRef } from "react";

/**
 * サーバーコンポーネント内のdata-reveal要素にスクロールリビールを適用
 * 各要素を個別にIntersectionObserverで監視し、ビューポートに入ったら.revealedを付与
 */
export function RevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const selectors =
      "[data-reveal], [data-reveal-item], [data-reveal-image], [data-reveal-line], [data-reveal-diag], [data-reveal-diag-r]";
    const elements = el.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // transitionDelayが設定されている場合はそれを尊重
            const style = target.style;
            const existingDelay = style.transitionDelay;
            if (existingDelay && existingDelay !== "0s") {
              setTimeout(() => {
                target.classList.add("revealed");
              }, 0);
            } else {
              target.classList.add("revealed");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
