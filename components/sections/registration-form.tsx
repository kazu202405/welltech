"use client";

import { MessageCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export function RegistrationForm() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="registration" className="py-20 md:py-28 bg-[#152a45] relative overflow-hidden">
      {/* ブルーのラジアルグロー */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563eb]/[0.08] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          label="Contact"
          title="協力会社登録のご相談"
          description="LINE公式アカウントからお気軽にお問い合わせください"
          variant="dark"
        />

        <div data-reveal className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm">
          <div className="w-20 h-20 bg-[#06C755]/15 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#06C755]/20">
            <MessageCircle className="w-10 h-10 text-[#06C755]" />
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            LINEで簡単お問い合わせ
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            友だち追加後、お名前・会社名・対応可能エリアを
            メッセージでお送りください。担当者よりご連絡いたします。
          </p>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-glow-green inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-semibold px-8 sm:px-10 py-4 rounded-xl text-base sm:text-lg transition-all w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            LINEで友だち追加
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-white/30 text-xs mt-6">
            ※ 営業時間外のメッセージも受け付けております
          </p>
        </div>

        {/* 代替連絡先 */}
        <div data-reveal className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm">
          <a href="tel:0869410882" className="inline-flex items-center gap-2 hover:text-white/60 transition-colors">
            <Phone className="w-4 h-4" />
            086-941-0882
          </a>
          <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
          <a href="mailto:info@well-tech.top" className="inline-flex items-center gap-2 hover:text-white/60 transition-colors">
            <Mail className="w-4 h-4" />
            info@well-tech.top
          </a>
        </div>
      </div>
    </section>
  );
}
