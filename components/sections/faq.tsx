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
    <div className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#2563eb]/20 bg-[#2563eb]/[0.02]" : "border-gray-100 bg-white"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left px-4 sm:px-6 py-5 transition-colors"
      >
        <span className="text-base font-semibold text-[#0a1628] pr-4 leading-snug">{question}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#2563eb]/10 rotate-180" : "bg-gray-50"}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? "text-[#2563eb]" : "text-[#64748b]"}`} />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight ?? 0 : 0,
        }}
      >
        <div className="px-4 sm:px-6 pb-5">
          <p className="text-sm text-[#64748b] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="faq" className="py-20 md:py-28 bg-white section-line">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="よくあるご質問"
          description="パートナー登録に関するよくあるご質問にお答えします"
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} data-reveal>
              <FaqItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
