"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "賃貸でも補助金は使えますか？",
    answer:
      "賃貸住宅でもオーナー（大家さん）が申請すれば利用可能です。入居者が個人で申請することはできませんが、オーナーや管理会社に相談してみましょう。賃貸集合住宅向けには別途「賃貸集合給湯省エネ2026事業」も用意されています。",
  },
  {
    question: "すでにエコキュートを使っていますが、買い替えも対象ですか？",
    answer:
      "はい、既存のエコキュートからの買い替えも対象です。ただし、新しく導入する機種がインターネット接続＋天気連動機能を備えた対象機種である必要があります。古い機種から最新の高機能モデルへの買い替えは、光熱費もさらに下がるためおすすめです。",
  },
  {
    question: "補助金の申請は自分でやる必要がありますか？",
    answer:
      "いいえ、個人で直接申請することはできません。「給湯省エネ事業」に登録された施工業者・販売業者が代行して申請します。工事を依頼する際に「補助金対応していますか？」と確認するだけでOKです。",
  },
  {
    question: "他の補助金（自治体の補助金など）と併用できますか？",
    answer:
      "多くの場合、自治体独自の補助金と国の給湯省エネ事業の補助金は併用可能です。ただし、自治体によって併用の可否や条件が異なるため、お住まいの市区町村の窓口に確認されることをおすすめします。",
  },
  {
    question: "いつまでに申し込めば間に合いますか？",
    answer:
      "申請受付は2026年12月31日までの予定ですが、予算上限に達し次第早期終了します。過去の年度では予算到達で締め切られた実績があるため、なるべく早めに施工業者へ相談されることをおすすめします。",
  },
  {
    question: "エコキュートの寿命はどれくらいですか？",
    answer:
      "一般的にエコキュートの寿命は約10〜15年と言われています。10年を超えると部品の劣化や故障リスクが高まるため、お湯がぬるい・異音がするなどの症状が出始めたら交換を検討するタイミングです。",
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

export function EcocuteFaq() {
  return (
    <div>
      {faqs.map((faq) => (
        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
