"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export function RegistrationForm() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="registration" className="py-20 md:py-28 bg-navy">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          label="Contact"
          title="協力会社登録のご相談"
          description="LINE公式アカウントからお気軽にお問い合わせください"
          variant="dark"
        />

        <div data-reveal className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="w-20 h-20 bg-[#06C755]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-[#06C755]" />
          </div>

          <h3 className="text-xl font-bold text-white mb-3">
            LINEで簡単お問い合わせ
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            友だち追加後、お名前・会社名・対応可能エリアを
            <br className="hidden sm:block" />
            メッセージでお送りください。担当者よりご連絡いたします。
          </p>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            LINEで友だち追加
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-white/40 text-xs mt-6">
            ※ 営業時間外のメッセージも受け付けております
          </p>
        </div>
      </div>
    </section>
  );
}
