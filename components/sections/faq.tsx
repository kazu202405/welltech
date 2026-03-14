"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

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
  {
    question: "建設業許可がなくても登録できますか？",
    answer:
      "はい、建設業許可をお持ちでない場合でもご登録いただけます。500万円未満の軽微な工事であれば許可不要で対応可能です。許可取得を検討中の方もお気軽にご相談ください。",
  },
  {
    question: "どのような工種の案件がありますか？",
    answer:
      "電気工事、内装工事、空調設備工事、給湯器設置・交換、建築一式工事、管工事、大工工事、屋根工事など幅広い工種の案件があります。公共建築入札案件から民間の小規模工事まで対応しています。",
  },
  {
    question: "案件の規模はどの程度ですか？",
    answer:
      "10万円程度の給湯器交換などの小規模案件から、数千万円規模の公共工事まで幅広い案件があります。協力会社様の対応可能な規模に合わせてご紹介いたします。",
  },
  {
    question: "登録に費用はかかりますか？",
    answer:
      "協力会社の登録に費用は一切かかりません。LINE公式アカウントまたはお電話でお問い合わせいただければ、無料でヒアリング・審査を行い、案件のご紹介を開始いたします。",
  },
  {
    question: "遠方の案件も対応可能ですか？",
    answer:
      "当社は全国に案件がございますが、基本的には協力会社様の対応可能エリア内の案件をご紹介しています。出張対応が可能な場合は、その旨をお伝えいただければエリア外の案件もご案内可能です。",
  },
  {
    question: "必要な書類はありますか？",
    answer:
      "登録時には、建設業許可証（お持ちの場合）、会社概要、工事経歴書などをご提出いただく場合があります。詳細はヒアリング時にご案内いたしますので、まずはお気軽にお問い合わせください。",
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
  const revealRef = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);

  const setRefs = (el: HTMLElement | null) => {
    (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (revealRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 装飾要素のみGSAP
      gsap.to("[data-orb-1]", {
        y: -25, duration: 1,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={setRefs} id="faq" className="py-24 md:py-32 bg-[var(--wt-bg)] relative overflow-hidden">
      {/* グラデーションオーブ */}
      <div data-orb-1 className="orb orb-green absolute top-[-40px] left-[50%] w-[300px] h-[300px]" aria-hidden="true" />

      {/* ドットグリッド */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] dot-grid opacity-25" aria-hidden="true" />

      {/* クロスシェイプ */}
      <div className="absolute bottom-24 right-[12%] pointer-events-none" aria-hidden="true">
        <svg data-shape-cross width="36" height="36" viewBox="0 0 36 36" fill="none">
          <line x1="0" y1="18" x2="36" y2="18" stroke="rgba(0,133,74,0.1)" strokeWidth="1.5" />
          <line x1="18" y1="0" x2="18" y2="36" stroke="rgba(0,133,74,0.1)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <div data-reveal>
            <SectionHeading
              number="08"
              label="FAQ"
              title="よくあるご質問"
              description="パートナー登録に関するよくあるご質問にお答えします"
              align="left"
            />
          </div>

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
