"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const workTypes = [
  "電気工事",
  "内装工事",
  "空調設備工事",
  "給湯器設置",
  "建築一式工事",
  "管工事",
  "塗装工事",
  "防水工事",
  "消防施設工事",
  "その他",
];

export function RegistrationForm() {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    area: "",
    workTypes: [] as string[],
    hasLicense: "",
    message: "",
  });

  const handleWorkTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      workTypes: prev.workTypes.includes(type)
        ? prev.workTypes.filter((t) => t !== type)
        : [...prev.workTypes, type],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（API連携は別途実装）
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="registration" className="py-20 md:py-28 bg-navy">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-[#10b981]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#10b981]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            ご登録ありがとうございます
          </h2>
          <p className="text-white/70 text-lg">
            担当者より2営業日以内にご連絡いたします。
            <br />
            しばらくお待ちください。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="registration" className="py-20 md:py-28 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Registration"
          title="協力会社登録フォーム"
          description="以下のフォームにご記入ください。担当者より折り返しご連絡いたします。"
          variant="dark"
        />

        <form onSubmit={handleSubmit} data-reveal className="space-y-6">
          {/* 会社名 */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              会社名 / 屋号 <span className="text-[#f59e0b]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
              placeholder="株式会社○○"
            />
          </div>

          {/* 担当者名・電話番号 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                ご担当者名 <span className="text-[#f59e0b]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                電話番号 <span className="text-[#f59e0b]">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                placeholder="090-1234-5678"
              />
            </div>
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              メールアドレス <span className="text-[#f59e0b]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
              placeholder="info@example.com"
            />
          </div>

          {/* 対応可能エリア */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              対応可能エリア <span className="text-[#f59e0b]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
              placeholder="大阪府全域、兵庫県南部 など"
            />
          </div>

          {/* 対応可能な工種 */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">
              対応可能な工種（複数選択可）
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {workTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleWorkTypeToggle(type)}
                  className={`text-sm px-4 py-2.5 rounded-xl border transition-all ${
                    formData.workTypes.includes(type)
                      ? "bg-[#2563eb] border-[#2563eb] text-white"
                      : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* 建設業許可 */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              建設業許可の有無
            </label>
            <div className="flex gap-4">
              {["あり", "なし", "申請中"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasLicense"
                    value={option}
                    checked={formData.hasLicense === option}
                    onChange={(e) => setFormData({ ...formData, hasLicense: e.target.value })}
                    className="w-4 h-4 accent-[#2563eb]"
                  />
                  <span className="text-sm text-white/80">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 備考 */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              備考・ご質問
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all resize-none"
              placeholder="ご質問やご要望があればお書きください"
            />
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            className="btn-glow w-full inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <Send className="w-5 h-5" />
            登録申請を送信
          </button>

          <p className="text-center text-xs text-white/40">
            ※ 送信いただいた情報は協力会社登録の審査目的にのみ使用いたします
          </p>
        </form>
      </div>
    </section>
  );
}
