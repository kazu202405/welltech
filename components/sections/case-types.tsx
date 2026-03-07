"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const publicCases = [
  "建築一式工事",
  "電気工事",
  "管工事",
  "内装仕上工事",
  "大工工事",
  "屋根工事",
];

const privateCases = [
  "電気設備工事",
  "内装工事",
  "空調設備工事",
  "給湯器設置・交換",
  "LED照明工事",
  "太陽光パネル設置",
];

export function CaseTypes() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="case-types" className="py-24 md:py-32 bg-[var(--wt-primary)] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* 左: ヘッディング */}
          <div data-reveal>
            <SectionHeading
              number="04"
              label="Case Types"
              title="取り扱い案件"
              description="公共建築入札から民間案件まで、幅広い建設案件で安定した仕事量を確保。地元の案件を地元のプロにお任せする体制を整えています。"
              variant="dark"
              align="left"
            />
            <div className="mt-8">
              <img
                src="/photo/S__49889495_0.jpg"
                alt="施工現場"
                className="w-full max-w-sm rounded-lg opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          {/* 右: 案件リスト */}
          <div data-reveal>
            {/* 公共案件 */}
            <div className="mb-8">
              <p className="text-white/50 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Public</p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {publicCases.map((item) => (
                  <div
                    key={item}
                    className="py-4 px-1 border-b border-white/[0.12] text-white text-[15px] font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 民間案件 */}
            <div>
              <p className="text-white/50 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Private</p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {privateCases.map((item) => (
                  <div
                    key={item}
                    className="py-4 px-1 border-b border-white/[0.12] text-white text-[15px] font-medium"
                  >
                    {item}
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
