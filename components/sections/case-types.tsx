"use client";

import { Landmark, Building, Zap, PaintBucket, Wind, Flame } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const publicCases = [
  { icon: Landmark, label: "公共建築入札", description: "官公庁発注の建築・改修工事入札案件" },
];

const privateCases = [
  { icon: Zap, label: "電気工事", description: "商業施設・住宅の電気設備工事" },
  { icon: PaintBucket, label: "内装工事", description: "オフィス・店舗の内装仕上げ工事" },
  { icon: Wind, label: "空調設備工事", description: "エアコン・換気設備の設置・更新" },
  { icon: Flame, label: "給湯器設置", description: "給湯器の設置・交換・メンテナンス" },
];

export function CaseTypes() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="case-types" className="py-20 md:py-28 bg-gray-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Types"
          title="取り扱い案件"
          description="公共・民間の幅広い案件で安定した仕事量を確保"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 公共案件 */}
          <div data-reveal className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-[#10b981]" />
              </div>
              <div>
                <span className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-full mb-1">
                  公共案件
                </span>
                <h3 className="text-lg font-bold text-[#0a1628]">官公庁入札案件</h3>
              </div>
            </div>
            <div className="space-y-4">
              {publicCases.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#10b981]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a1628] mb-1">{item.label}</h4>
                    <p className="text-sm text-[#64748b]">{item.description}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-[#64748b] leading-relaxed mt-4">
                入札案件は前年比20倍のペースで増加中。公共案件ならではの安定した支払いサイクルで安心してお取引いただけます。
              </p>
            </div>
          </div>

          {/* 民間案件 */}
          <div data-reveal className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div>
                <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold px-3 py-1 rounded-full mb-1">
                  民間案件
                </span>
                <h3 className="text-lg font-bold text-[#0a1628]">民間工事案件</h3>
              </div>
            </div>
            <div className="space-y-3">
              {privateCases.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-xl">
                  <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a1628] mb-1">{item.label}</h4>
                    <p className="text-sm text-[#64748b]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
