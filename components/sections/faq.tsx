"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "個人事業主でも登録できますか？",
    answer:
      "はい、個人事業主の方でもご登録いただけます。建設業許可をお持ちの方はもちろん、許可取得前の方でも対応可能な案件がございますのでお気軽にご相談ください。",
  },
  {
    question: "対応エリアが限定されていても登録できますか？",
    answer:
      "もちろんです。全国に案件がございますので、対応可能なエリアをご登録いただければ、そのエリア内の案件を優先的にご紹介いたします。特定の都道府県のみでも問題ありません。",
  },
  {
    question: "支払いサイクルはどのようになっていますか？",
    answer:
      "基本的に月末締め翌月末払いです。公共案件の場合は発注元の支払いスケジュールに準じますが、当社から協力会社様への支払いは上記サイクルを維持します。",
  },
  {
    question: "登録後、すぐに案件を紹介してもらえますか？",
    answer:
      "登録後、ヒアリングと審査を経て最短2週間程度で案件のご紹介が可能です。対応可能な工種・エリアにマッチする案件が入り次第、優先的にお声がけいたします。",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left py-5 transition-colors"
      >
        <span className="text-[15px] font-semibold text-[var(--wt-dark)] pr-4 leading-snug">{question}</span>
        <ChevronDown className={`w-4 h-4 text-[var(--wt-gray-light)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight ?? 0 : 0 }}
      >
        <div className="pb-5">
          <p className="text-sm text-[var(--wt-gray)] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="faq" className="py-24 md:py-32 bg-[var(--wt-bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* 左: ヘッディング */}
          <div data-reveal>
            <SectionHeading
              number="08"
              label="FAQ"
              title="よくあるご質問"
              description="パートナー登録に関するよくあるご質問にお答えします"
              align="left"
            />
          </div>

          {/* 右: FAQ リスト */}
          <div data-reveal>
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
