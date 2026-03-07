"use client";

import { MessageCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export function RegistrationForm() {
  const sectionRef = useScrollReveal();
  const parallaxRef = useParallax(0.6);

  return (
    <section ref={sectionRef} id="registration" className="py-20 md:py-28 bg-[var(--wt-bg-dark)] relative overflow-hidden">
      {/* 背景写真オーバーレイ（zein.jp Contact風） */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          ref={parallaxRef}
          src="/photo/S__49889550_0.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15 will-change-transform"
          style={{ transform: "translateY(0) scale(1.2)" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[var(--wt-bg-dark)]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <p data-reveal className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
        <h2 data-reveal className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          協力会社登録のご相談
        </h2>
        <p data-reveal className="text-white/50 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
          LINE公式アカウントからお気軽にお問い合わせください。<br className="hidden sm:block" />
          友だち追加後、お名前・会社名・対応可能エリアをお送りください。
        </p>

        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-glow-green btn-bounce inline-flex items-center justify-center gap-3 bg-[var(--wt-green)] hover:brightness-110 text-white font-semibold px-8 sm:px-10 py-4 rounded-lg text-base sm:text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            LINEで友だち追加
            <ArrowRight className="w-4 h-4 arrow-loop" />
          </a>
        </div>

        {/* 代替連絡先 */}
        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/35 text-sm">
          <a href="tel:0869410882" className="inline-flex items-center gap-2 hover:text-white/55 transition-colors">
            <Phone className="w-4 h-4" />
            086-941-0882
          </a>
          <div className="hidden sm:block w-1 h-1 bg-white/15 rounded-full" />
          <a href="mailto:info@well-tech.top" className="inline-flex items-center gap-2 hover:text-white/55 transition-colors">
            <Mail className="w-4 h-4" />
            info@well-tech.top
          </a>
        </div>

        <p data-reveal className="text-white/20 text-xs mt-6">
          ※ 営業時間外のメッセージも受け付けております
        </p>
      </div>
    </section>
  );
}
