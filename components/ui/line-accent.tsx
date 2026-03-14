"use client";

import { useEffect, useRef } from "react";

interface LineAccentProps {
  variant?: "light" | "dark" | "gray";
}

export function LineAccent({ variant = "light" }: LineAccentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bgClass = variant === "dark"
    ? "bg-[var(--wt-bg-dark)]"
    : variant === "gray"
    ? "bg-[var(--wt-bg)]"
    : "bg-white";
  const color = variant === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,133,74,0.15)";

  return (
    <div ref={ref} className={`section-line flex justify-center ${bgClass}`}>
      <svg width="1" height="48" viewBox="0 0 1 48" fill="none">
        <path d="M0.5 0 L0.5 48" stroke={color} strokeWidth="1" pathLength="1" />
      </svg>
    </div>
  );
}
