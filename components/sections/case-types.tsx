"use client";

import { Landmark, Building, Zap, PaintBucket, Wind, Flame, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const publicCases = [
  { icon: Landmark, label: "建築一式工事", description: "国発注の建築・改修工事入札案件", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=200&fit=crop" },
  { icon: Zap, label: "電気工事", description: "国の施設における電気設備工事・改修", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=200&fit=crop" },
  { icon: Wrench, label: "管工事", description: "国の施設における給排水・衛生設備の施工", image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=200&h=200&fit=crop" },
  { icon: PaintBucket, label: "内装仕上工事", description: "国の建築物の内装仕上げ工事", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=200&h=200&fit=crop" },
];

const privateCases = [
  { icon: Zap, label: "電気工事", description: "商業施設・住宅の電気設備工事", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&h=200&fit=crop" },
  { icon: PaintBucket, label: "内装工事", description: "オフィス・店舗の内装仕上げ工事", image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=200&h=200&fit=crop" },
  { icon: Wind, label: "空調設備工事", description: "エアコン・換気設備の設置・更新", image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=200&h=200&fit=crop" },
  { icon: Flame, label: "給湯器設置", description: "給湯器の設置・交換・メンテナンス", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop" },
];

function CaseCard({
  item,
  color,
}: {
  item: (typeof publicCases)[number];
  color: string;
}) {
  return (
    <div className="flex items-stretch bg-[#f8fafc] rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 p-3 flex-1 min-w-0">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}15` }}
        >
          <item.icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-[#0a1628] mb-0.5 text-sm">{item.label}</h4>
          <p className="text-xs text-[#64748b]">{item.description}</p>
        </div>
      </div>
      <img
        src={item.image}
        alt={item.label}
        loading="lazy"
        className="w-16 sm:w-20 object-cover shrink-0"
      />
    </div>
  );
}

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
          <div data-reveal className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#10b981]/10 rounded-lg flex items-center justify-center shrink-0">
                <Building className="w-5 h-5 text-[#10b981]" />
              </div>
              <div>
                <span className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-full mb-1">
                  公共案件
                </span>
                <h3 className="text-lg font-bold text-[#0a1628]">国の入札案件</h3>
              </div>
            </div>
            <div className="space-y-3">
              {publicCases.map((item) => (
                <CaseCard key={item.label} item={item} color="#10b981" />
              ))}
            </div>
          </div>

          {/* 民間案件 */}
          <div data-reveal className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center shrink-0">
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
                <CaseCard key={item.label} item={item} color="#2563eb" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
