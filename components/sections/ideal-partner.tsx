"use client";

import { CheckCircle2, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const idealTraits = [
  "地域密着で迅速に現場対応ができる会社",
  "丁寧な施工と品質管理を重視する会社",
  "長期的なパートナーシップを築ける会社",
  "報連相を大切にし、円滑なコミュニケーションができる会社",
  "安全管理を徹底し、無事故で現場を運営できる会社",
  "複数案件の同時対応が可能な体制がある会社",
];

const licenses = [
  "建築一式工事",
  "電気工事",
  "管工事",
  "内装仕上工事",
  "空調衛生工事",
  "塗装工事",
  "防水工事",
  "消防施設工事",
];

export function IdealPartner() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="ideal-partner" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Ideal Partner"
          title="こんな会社と組みたい"
          description="互いに成長できるパートナーシップを目指しています"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* パートナー像 */}
          <div data-reveal className="bg-[#f8fafc] rounded-2xl p-8">
            <h3 className="text-lg font-bold text-[#0a1628] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
              理想のパートナー像
            </h3>
            <div className="space-y-4">
              {idealTraits.map((trait) => (
                <div key={trait} data-reveal className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#2563eb]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#2563eb]" />
                  </div>
                  <span className="text-sm text-[#0a1628]/80 leading-relaxed">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 建設業許可 */}
          <div data-reveal className="bg-[#f8fafc] rounded-2xl p-8">
            <h3 className="text-lg font-bold text-[#0a1628] mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#10b981]" />
              対象の建設業許可
            </h3>
            <p className="text-sm text-[#64748b] mb-6">
              以下の建設業許可をお持ちの会社様を優先的にご案内いたします。許可取得前の会社様もご相談ください。
            </p>
            <div className="grid grid-cols-2 gap-3">
              {licenses.map((license) => (
                <div
                  key={license}
                  data-reveal
                  className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
                >
                  <div className="w-2 h-2 bg-[#10b981] rounded-full shrink-0" />
                  <span className="text-sm font-medium text-[#0a1628]">{license}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
