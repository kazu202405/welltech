"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0f0f0f] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* SVGサークルローダー */}
          <motion.svg
            className="w-14 h-14 mb-6"
            viewBox="0 0 60 60"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <circle
              cx="30" cy="30" r="26"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="30" cy="30" r="26"
              fill="none"
              stroke="var(--wt-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.svg>

          {/* ロゴ */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/welltech-logo.svg" alt="" width={36} height={46} className="h-9 w-auto mb-3" />
            <span className="text-white text-xl font-bold tracking-[0.15em]">WELLTECH</span>
            <motion.span
              className="text-white/20 text-[9px] tracking-[0.3em] mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              PARTNER RECRUITMENT
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
