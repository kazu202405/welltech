"use client";

import { CheckCircle2, Shield, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const idealTraits = [
  "迅速に現場対応ができる会社",
  "丁寧な施工と品質管理を重視する会社",
  "長期的なパートナーシップを築ける会社",
  "報連相を大切にし、円滑なコミュニケーションができる会社",
  "安全管理を徹底し、無事故で現場を運営できる会社",
  "複数案件の同時対応が可能な体制がある会社",
];

const licenses = [
  "建築一式工事業",
  "電気工事業",
  "内装工事業",
  "管工事業",
  "大工工事業",
  "屋根工事業",
  "タイル・れんが・ブロック工事業",
];

const qualifications = [
  "二級建築士",
  "第二種電気工事士",
  "認定電気工事従事者",
  "特別管理産業廃棄物収集運搬",
  "一般建築物石綿含有建材調査者",
  "石綿作業主任者",
  "足場組立作業主任者",
  "玉掛け",
  "小型移動式クレーン",
  "高所作業車",
  "フルハーネス",
  "ガス溶接",
  "低圧電気取扱者",
];

export function IdealPartner() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="ideal-partner" className="py-20 md:py-28 bg-white section-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Ideal Partner"
          title="こんな会社と組みたい"
          description="互いに成長できるパートナーシップを目指しています"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* パートナー像 */}
          <div data-reveal className="bg-[#f8fafc] rounded-2xl p-5 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-[#0a1628] mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#2563eb]/10 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
              </div>
              理想のパートナー像
            </h3>
            <div className="space-y-3.5">
              {idealTraits.map((trait) => (
                <div key={trait} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 bg-[#2563eb]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-[#2563eb]/20">
                    <CheckCircle2 className="w-3 h-3 text-[#2563eb]" />
                  </div>
                  <span className="text-sm text-[#0a1628]/75 leading-relaxed">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 建設業許可 */}
          <div data-reveal className="bg-[#f8fafc] rounded-2xl p-5 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-[#0a1628] mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#10b981]/10 rounded-lg flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-[#10b981]" />
              </div>
              対象の建設業許可
            </h3>
            <p className="text-sm text-[#64748b] mb-5 leading-relaxed">
              以下の建設業許可をお持ちの会社様を優先的にご案内いたします。許可取得前の会社様もご相談ください。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {licenses.map((license) => (
                <div
                  key={license}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-3.5 py-2.5 sm:py-3 border border-gray-100 transition-colors hover:border-[#10b981]/30 hover:bg-[#10b981]/[0.02]"
                >
                  <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full shrink-0" />
                  <span className="text-sm font-medium text-[#0a1628]">{license}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 保有資格 */}
        <div data-reveal className="bg-[#f8fafc] rounded-2xl p-5 sm:p-8 border border-gray-100">
          <h3 className="text-lg font-bold text-[#0a1628] mb-6 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-[#f59e0b]" />
            </div>
            保有資格
          </h3>
          <div className="flex flex-wrap gap-2">
            {qualifications.map((q) => (
              <span
                key={q}
                className="inline-flex items-center gap-1.5 bg-white text-sm text-[#0a1628]/80 font-medium px-3.5 py-2 rounded-lg border border-gray-100"
              >
                <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full shrink-0" />
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
