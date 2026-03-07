"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function RevealWrapper({ children }: { children: React.ReactNode }) {
  const revealRef = useScrollReveal();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      (revealRef as React.MutableRefObject<HTMLElement | null>).current = divRef.current;
    }
  }, [revealRef]);

  return <div ref={divRef}>{children}</div>;
}
