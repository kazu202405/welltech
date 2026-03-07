"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const idealTraits = [
  "迅速に現場対応ができる会社",
  "丁寧な施工と品質管理を重視する会社",
  "長期的なパートナーシップを築ける会社",
  "報連相を大切にする会社",
  "安全管理を徹底できる会社",
  "複数案件の同時対応が可能な会社",
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
    <section ref={sectionRef} id="ideal-partner" className="py-24 md:py-32 bg-[var(--wt-bg)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          {/* 左: ヘッディング */}
          <div data-reveal>
            <SectionHeading
              number="06"
              label="Ideal Partner"
              title="こんな会社と組みたい"
              description="互いに成長できるパートナーシップを目指しています。以下の建設業許可をお持ちの会社様を優先的にご案内いたします。許可取得前の会社様もご相談ください。"
              align="left"
            />
            <div className="mt-8">
              <img
                src="/photo/S__49889493_0.jpg"
                alt="施工現場"
                className="w-full max-w-sm rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* 右: リスト */}
          <div data-reveal>
            {/* パートナー像 */}
            <div className="mb-8">
              <p className="text-[var(--wt-gray-light)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Partner</p>
              <div className="grid grid-cols-1">
                {idealTraits.map((trait) => (
                  <div
                    key={trait}
                    className="py-4 px-1 border-b border-black/[0.08] text-[var(--wt-dark)] text-[15px] font-medium"
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* 建設業許可 */}
            <div className="mb-8">
              <p className="text-[var(--wt-gray-light)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">License</p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {licenses.map((license) => (
                  <div
                    key={license}
                    className="py-4 px-1 border-b border-black/[0.08] text-[var(--wt-dark)] text-[15px] font-medium"
                  >
                    {license}
                  </div>
                ))}
              </div>
            </div>

            {/* 保有資格 */}
            <div>
              <p className="text-[var(--wt-gray-light)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Qualification</p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {qualifications.map((q) => (
                  <div
                    key={q}
                    className="py-3.5 px-1 border-b border-black/[0.08] text-[var(--wt-dark)]/75 text-sm"
                  >
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
