"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Shield,
  Zap,
  Clock,
  Wrench,
  BadgePercent,
  ArrowDownUp,
  CreditCard,
  Award,
  Snowflake,
  Building2,
  CheckCircle2,
  Star,
  Timer,
  TrendingDown,
  MapPin,
  Sparkles,
  Search,
  FileText,
  HardHat,
  PartyPopper,
} from "lucide-react";

/* ============================================================
   データ定義
   ============================================================ */

/* 3大独自強み */
const uniquePoints = [
  {
    icon: ArrowDownUp,
    tag: "業界初",
    title: "エアコン下取りサービス",
    description:
      "古いエアコンを下取りに出せば、新品がさらにおトクに。撤去費用も込みだから、面倒な処分は一切不要です。",
    color: "var(--wt-primary)",
  },
  {
    icon: CreditCard,
    tag: "安心",
    title: "明朗会計・追加費用なし",
    description:
      "LINEで写真を送るだけで正式なお見積りをご提示。追加費用は一切なく、提示価格がお支払い総額です。",
    color: "var(--wt-accent)",
  },
  {
    icon: BadgePercent,
    tag: "期間限定",
    title: "メーカー別 割引キャンペーン",
    description:
      "各メーカーと提携した独自キャンペーンを常時開催。時期によって最大40%OFFの特別価格でご提供。",
    color: "#e05050",
  },
];

/* 月額シミュレーション（信販審査通過後に復活予定） */
// const monthlyPlans: never[] = [];

/* パッケージ内容 */
const packageItems = [
  { icon: Snowflake, label: "エアコン本体" },
  { icon: Wrench, label: "標準取付工事" },
  { icon: ArrowDownUp, label: "既存機の下取り・撤去" },
  { icon: Shield, label: "長期保証（最大10年）" },
  { icon: Zap, label: "試運転・動作確認" },
  { icon: Clock, label: "アフターサポート" },
];

/* メーカーロゴ */
const manufacturers = [
  "ダイキン",
  "三菱電機",
  "日立",
  "パナソニック",
  "東芝",
  "富士通ゼネラル",
  "三菱重工",
  "シャープ",
];

/* 選ばれる理由 */
const reasons = [
  {
    num: "01",
    title: "購入から修理まで\nワンストップ対応",
    highlight: "一貫",
    highlightSub: "自社対応",
    bullets: [
      "販売・設置・メンテ・修理を自社完結",
      "中間マージンなしで価格もスピードも有利",
      "窓口一つで迷わず依頼可能",
    ],
    icon: Wrench,
    image: "/aircon-reason-onestop.png",
  },
  {
    num: "02",
    title: "最短2日で\n設置完了",
    highlight: "2日",
    highlightSub: "最短設置",
    bullets: [
      "急な故障・移転にも即対応",
      "在庫・施工スタッフを自社確保",
      "段取りから完了まで一直線",
    ],
    icon: Timer,
    image: "/aircon-reason-install.png",
  },
  {
    num: "03",
    title: "業界最安値級の\n価格を実現",
    highlight: "最安",
    highlightSub: "業界水準",
    bullets: [
      "メーカー直取引で中間コスト削減",
      "下取り・補助金活用で更に値引き",
      "自社施工で工賃もスリム化",
    ],
    icon: TrendingDown,
    image: "/aircon-reason-price.png",
  },
  {
    num: "04",
    title: "LINEで写真を送るだけ\nお見積り完全無料",
    highlight: "0円",
    highlightSub: "見積り無料",
    bullets: [
      "煩わしい日程調整は不要",
      "LINEで写真を送るだけで見積り完了",
      "しつこい営業は一切なし",
    ],
    icon: CheckCircle2,
    image: "/aircon-reason-free-estimate.png",
  },
];

/* ご利用の流れ */
const flowSteps = [
  {
    num: "01",
    title: "お問い合わせ",
    description: "LINEからお気軽にご連絡ください。",
  },
  {
    num: "02",
    title: "LINEで写真送付",
    description:
      "現場の写真をLINEで送るだけ。日程調整不要で、最適な機種・設置方法をご提案します。",
  },
  {
    num: "03",
    title: "お見積り・ご契約",
    description:
      "詳細なお見積りをご提示。下取り・補助金の活用もご案内します。",
  },
  {
    num: "04",
    title: "設置工事",
    description: "最短2日で設置完了。自社スタッフが丁寧に施工いたします。",
  },
  {
    num: "05",
    title: "完了・アフターサポート",
    description:
      "試運転・動作確認後にお引き渡し。長期保証で安心のアフターサポート。",
  },
];

/* お客様の声 */
const reviews = [
  {
    name: "東京都 製造業 A社様",
    type: "業務用",
    text: "オフィスのエアコンが突然故障。翌日には調査に来てもらい、3日後には新品が稼働していました。対応の速さに驚きです。",
    rating: 5,
  },
  {
    name: "神奈川県 飲食店 B様",
    type: "業務用",
    text: "下取りサービスで古いエアコン3台を処分でき、撤去費用もゼロ。新しいエアコンは電気代も下がって大満足です。",
    rating: 5,
  },
  {
    name: "岡山県 オフィス C社様",
    type: "業務用",
    text: "オフィスのエアコン5台を一括交換。見積りから工事完了まで1週間で対応してもらえました。下取りで費用も抑えられて助かりました。",
    rating: 5,
  },
  {
    name: "千葉県 不動産管理 D社様",
    type: "業務用",
    text: "管理物件20室分のエアコンを一括でお願いしました。ボリューム割引もあり、予算内で全室交換できました。",
    rating: 5,
  },
  {
    name: "大阪府 クリニック E様",
    type: "業務用",
    text: "診療時間外の工事対応をしていただけたので、患者様にご迷惑をかけずに済みました。保証も10年で安心です。",
    rating: 5,
  },
];

/* 実績数字 */
const stats = [
  { num: "15", suffix: "年", label: "創業から", icon: Award },
  { num: "3,200", suffix: "件+", label: "施工実績", icon: Wrench },
  { num: "98", suffix: "%", label: "顧客満足度", icon: Sparkles },
  { num: "10", suffix: "年", label: "最長保証", icon: Shield },
];

/* 3点特徴（スピード・無料・対応範囲） */
const features3 = [
  {
    icon: Timer,
    title: "最短即日見積り",
    description: "LINEで写真を送るだけ。面倒な日程調整は不要で、最短即日お見積りが可能です。",
  },
  {
    icon: BadgePercent,
    title: "見積り完全無料",
    description: "写真を送るだけで見積りOK。断っても費用ゼロ。しつこい営業も一切ありません。",
  },
  {
    icon: Wrench,
    title: "全メーカー・他社製品対応",
    description: "国内8メーカーすべてに対応。他社で買ったエアコンの修理・移設もOK。",
  },
];

/* サービス2本柱 */
const servicePillars = [
  {
    icon: Snowflake,
    label: "Sales & Install",
    title: "エアコン販売・設置",
    description:
      "業務用エアコンのあらゆるタイプに対応。下取り・補助金を活用した最適プランをご提案します。",
    features: [
      "天井カセット・壁掛け・床置き・ダクト型",
      "飲食店・オフィス・店舗・工場など幅広く対応",
      "下取り・撤去処分込み",
      "最短2日で設置完了",
    ],
  },
  {
    icon: Wrench,
    label: "Repair & Maintenance",
    title: "修理・メンテナンス",
    description:
      "既設エアコンの修理・クリーニング・部品交換まで。他社で購入された機種もお任せください。",
    features: [
      "全メーカー・全機種対応",
      "他社購入品の修理もOK",
      "部品交換・ガス補充",
      "定期メンテナンス契約も可",
    ],
  },
];

/* 対応エリア */
const serviceAreas = [
  { region: "岡山", prefs: "岡山全域", primary: true },
  { region: "阪神", prefs: "大阪・兵庫" },
  { region: "その他", prefs: "上記以外のエリアもご相談ください" },
];

/* FAQ */
const faqs = [
  {
    q: "見積りは本当に無料ですか？",
    a: "はい、お見積りは完全無料です。LINEで現場の写真を送っていただくだけで完了します。お見積り後にお断りいただいても費用は一切発生しません。",
  },
  {
    q: "どのメーカーのエアコンも取り扱っていますか？",
    a: "ダイキン・三菱電機・日立・パナソニック・東芝・富士通ゼネラル・三菱重工・シャープなど、国内主要メーカーすべてに対応しています。",
  },
  {
    q: "下取りできるエアコンに条件はありますか？",
    a: "基本的にどんなエアコンでも下取り可能です。動かないエアコンでもOK。撤去・処分費用はすべて当社が負担します。",
  },
  {
    q: "補助金は使えますか？",
    a: "対象機種であれば各種補助金の申請サポートも行っています。補助金を活用することでさらにおトクに導入いただけます。",
  },
  {
    q: "工事にはどれくらいの時間がかかりますか？",
    a: "目安として、一般的な飲食店であれば半日程度、広めのオフィス（小規模）であれば1日程度です。規模や現場状況により異なりますので、詳しくはお見積り時にご案内いたします。",
  },
  {
    q: "どのようなタイプの業務用エアコンに対応していますか？",
    a: "天井カセット型・壁掛け型・床置き型・ダクト型など、業務用エアコンのあらゆるタイプに対応しています。飲食店・オフィス・店舗・工場など幅広い業種の実績がございます。",
  },
  {
    q: "保証はどのくらいですか？",
    a: "メーカー保証に加え、当社独自の延長保証を最大10年までご用意。万が一の故障も安心です。",
  },
  {
    q: "土日や祝日の工事は可能ですか？",
    a: "はい、土日祝日の工事も承っています。営業時間外の対応もご相談ください。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "岡山全域および阪神エリア（大阪・兵庫）を中心に対応しています。その他のエリアもお気軽にご相談ください。",
  },
];

/* ============================================================
   メインコンポーネント
   ============================================================ */
export function AirconLp({ lineUrl }: { lineUrl: string }) {
  return (
    <>
      {/* ── 選ばれる理由（4カードグリッド） ── */}
      <ReasonsSection lineUrl={lineUrl} />

      {/* ── ご利用の流れ（ビジュアル版） ── */}
      <VisualFlowSection />

      {/* ── お客様の声 ── */}
      <ReviewsSection />

      {/* ── メーカーラインナップ ── */}
      <ManufacturersSection />

      {/* ── CTA中間2 ── */}
      <CtaBand lineUrl={lineUrl} />

      {/* ── 対応エリア ── */}
      <ServiceAreaSection />

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── 最終CTA ── */}
      <FinalCta lineUrl={lineUrl} />
    </>
  );
}

/* ============================================================
   各セクションコンポーネント
   ============================================================ */

/* ── 月額表示セクション・緊急性バナー（信販審査通過後に復活予定） ── */

/* ── 3大独自強み ── */
function UniquePointsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--wt-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Only WELLTECH
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)] mb-4">
            ウェルテックだけの、<br className="sm:hidden" />
            3つの「業界初」
          </h2>
          <p className="text-[var(--wt-gray)] max-w-2xl mx-auto">
            他社にはない独自サービスで、エアコン導入をもっとおトクに、もっと手軽に。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {uniquePoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
                className="relative bg-white rounded-2xl p-8 card-hover border border-gray-100 overflow-hidden"
              >
                {/* 装飾アクセント */}
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ background: point.color }}
                />
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 text-white"
                  style={{ background: point.color }}
                >
                  {point.tag}
                </span>
                <Icon
                  className="w-10 h-10 mb-4"
                  style={{ color: point.color }}
                />
                <h3 className="text-xl font-bold text-[var(--wt-dark)] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── パッケージ販売 ── */
function PackageSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--wt-bg-dark)] text-white relative overflow-hidden">
      <div className="orb orb-green absolute top-[-40px] right-[-60px] w-[280px] h-[280px]" aria-hidden="true" />
      <div className="orb orb-accent absolute bottom-[-30px] left-[5%] w-[200px] h-[200px]" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-white/40 uppercase mb-3">
            All-in-One Package
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ぜんぶコミコミ。<br className="sm:hidden" />
            追加費用なし。
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            エアコン本体・工事・下取り・保証、すべてパッケージ価格に含まれています。
            あとから追加費用が発生することはありません。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {packageItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--wt-primary)]/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[var(--wt-primary-light)]" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10" data-reveal>
          <p className="text-lg font-bold text-[var(--wt-accent)]">
            「比べてください、トータルの価値を。」
          </p>
          <p className="text-sm text-white/50 mt-2">
            単品価格で比較するのではなく、含まれるサービス全体で比べてください。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── CTA帯 ── */
function CtaBand({ lineUrl }: { lineUrl: string }) {
  return (
    <section className="py-10 bg-gradient-to-r from-[var(--wt-primary)] to-[var(--wt-primary-dark)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-white font-bold text-lg text-center">
          まずは無料お見積りから
        </p>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#06C755] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#05b34c] transition-colors btn-glow-green"
        >
          <MessageCircle className="w-4 h-4" />
          LINEで無料相談
        </a>
      </div>
    </section>
  );
}

/* ── メーカーラインナップ ── */
function ManufacturersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Manufacturers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wt-dark)]">
            全メーカー取り扱い
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {manufacturers.map((name, i) => (
            <div
              key={name}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="flex items-center justify-center h-20 bg-[var(--wt-bg)] rounded-xl border border-gray-100 text-[var(--wt-dark)] font-bold text-sm sm:text-base card-hover"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 選ばれる理由 ── */
function ReasonsSection({ lineUrl }: { lineUrl: string }) {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[var(--wt-bg)] overflow-hidden">
      {/* セクション上部: ダークからライトへの斜めカット区切り */}
      <div
        className="absolute top-0 left-0 right-0 h-20 sm:h-24 bg-[#0d2e1b] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
        aria-hidden="true"
      />

      {/* 背景装飾: 右側にグリーングロー（ヒーローの右非対称を継承） */}
      <div
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,133,74,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* 左下: 黄色ソフトグロー */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,23,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* ドットグリッド */}
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 上部タグ */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6" data-reveal>
          <span className="inline-flex items-center gap-1.5 bg-[var(--wt-primary)] text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            満足度の高さ
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[var(--wt-primary)] text-white text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            高いリピート率
          </span>
          <span className="text-xs sm:text-sm font-bold text-[var(--wt-gray)]">
            選ばれる
            <span className="text-[var(--wt-primary)]">「ウェルテック」</span>
            の特徴です。
          </span>
        </div>

        {/* 大見出し */}
        <div className="text-center mb-14 sm:mb-16" data-reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--wt-dark)] leading-tight tracking-tight">
            ウェルテックが
            <span className="relative inline-block text-[var(--wt-primary)]">
              選ばれている理由
              <span
                className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[var(--wt-accent)]/60 -z-0 rounded-full"
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>

        {/* 4カードグリッド（偶数カードを下げて非対称レイアウト） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-x-6 md:gap-y-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isEven = i % 2 === 1; // インデックス1,3 が2番目・4番目
            return (
              <article
                key={reason.num}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`group relative bg-white overflow-hidden shadow-xl shadow-[var(--wt-primary)]/5 card-hover border border-gray-100 transition-all duration-500 ${
                  isEven
                    ? "rounded-r-2xl rounded-tl-2xl rounded-bl-[48px] md:translate-y-10"
                    : "rounded-l-2xl rounded-tr-2xl rounded-br-[48px]"
                }`}
              >
                {/* カード上部: 黄色アクセントライン（ホバーで右に伸びる） */}
                <div className="relative h-1 bg-gray-100 overflow-hidden" aria-hidden="true">
                  <div className="absolute inset-y-0 left-0 w-full origin-left scale-x-[0.3] group-hover:scale-x-100 transition-transform duration-500 ease-out bg-gradient-to-r from-[var(--wt-accent)] via-[var(--wt-accent)] to-[var(--wt-accent)]/70" />
                </div>

                {/* カード上部: ビジュアルヘッダー */}
                <div className="relative h-44 sm:h-52 bg-gradient-to-br from-[var(--wt-primary)] via-[#006B3C] to-[#004A29] overflow-hidden">
                  {/* 理由画像（ある場合） */}
                  {reason.image && (
                    <Image
                      src={reason.image}
                      alt={reason.title.replace("\n", "")}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  {/* 斜めシャドウ装飾（画像がない場合のみ表示） */}
                  {!reason.image && (
                    <div
                      className="absolute inset-0 opacity-[0.12] transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 2px, transparent 16px)",
                      }}
                      aria-hidden="true"
                    />
                  )}
                  {/* 下部グラデ（タイトル可読性用） */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                    aria-hidden="true"
                  />

                  {/* 巨大番号（左上） */}
                  <span
                    className="absolute -top-2 -left-1 text-[120px] sm:text-[140px] font-black text-white/10 leading-none pointer-events-none select-none tracking-tighter transition-all duration-500 group-hover:text-white/15 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    {reason.num}
                  </span>

                  {/* アイコン（右上バッジ） */}
                  <div className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* タイトル（下部） */}
                  <h3 className="absolute bottom-4 sm:bottom-5 left-5 sm:left-6 right-5 sm:right-6 text-lg sm:text-xl lg:text-2xl font-black text-white whitespace-pre-line leading-[1.25] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {reason.title}
                  </h3>
                </div>

                {/* カード本文 */}
                <div className="relative p-5 sm:p-6">
                  {/* ハイライト数字バッジ（左上フロート） */}
                  <div
                    className="absolute -top-7 right-5 sm:right-6 flex items-end gap-1.5 bg-[var(--wt-accent)] text-[#0d2e1b] px-3.5 py-2 rounded-xl shadow-lg border-2 border-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-2deg]"
                  >
                    <span className="text-2xl sm:text-[28px] font-black leading-none tracking-tight">
                      {reason.highlight}
                    </span>
                    <span className="text-[10px] font-bold leading-tight pb-0.5 whitespace-nowrap">
                      {reason.highlightSub}
                    </span>
                  </div>

                  {/* 箇条書き（チェックマーク付き） */}
                  <ul className="space-y-2.5">
                    {reason.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--wt-primary)]/10 flex items-center justify-center">
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-[var(--wt-primary)]"
                            strokeWidth={2.5}
                          />
                        </span>
                        <span className="text-sm sm:text-[15px] text-[var(--wt-dark)]/80 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* セクション末尾サブCTA */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center" data-reveal>
          <p className="text-sm sm:text-base text-[var(--wt-dark)]/70 mb-4 font-medium">
            まずは無料見積りでご確認ください
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#06C755] text-white font-black text-base sm:text-lg px-7 py-4 rounded-full hover:bg-[#05b34c] transition-all btn-bounce shadow-xl shadow-[#06C755]/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span>LINEで無料お見積り</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── ご利用の流れ（横型カード版） ── */
const visualFlowSteps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "LINEでお問い合わせ",
    description:
      "LINEで現場の写真を送るだけ。煩わしい日程調整は不要です。写真をもとに最適な業務用エアコンの機種・工事内容をご提案します。修理の場合は故障箇所も確認いたします。",
    accent: true,
    contact: true,
    badge: "日程調整不要",
    image: "/aircon-flow-contact.png",
  },
  {
    num: "02",
    icon: FileText,
    title: "お見積り",
    description:
      "お送りいただいた写真をもとに、お見積書をLINEにてお送りいたします（即日〜2日以内）。現場状況により提出日が前後する場合がございます。",
    accent: false,
    contact: false,
    badge: null,
    image: "/aircon-flow-estimate.png",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "ご契約",
    description:
      "お見積りをご確認いただき、ご了承いただけましたらご契約となります。下取り・補助金の活用もこの段階でご案内いたします。",
    accent: false,
    contact: false,
    badge: null,
    image: "/aircon-flow-contract.png",
  },
  {
    num: "04",
    icon: HardHat,
    title: "工事・修理",
    description:
      "経験豊富な自社スタッフがエアコンの設置工事・修理を行います。標準工事なら最短2日で設置完了。試運転・動作確認後にお引き渡しいたします。",
    accent: true,
    contact: false,
    badge: null,
    image: "/aircon-flow-construction.png",
  },
];

function VisualFlowSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="relative text-center mb-14 sm:mb-18" data-reveal>
          {/* 右上バッジ */}
          <div className="sm:absolute sm:right-0 sm:top-0 flex justify-center sm:justify-end mb-4 sm:mb-0">
            <span className="inline-flex items-center gap-1.5 bg-[var(--wt-accent)] text-[#0d2e1b] text-sm font-black px-4 py-2 rounded-xl shadow-lg">
              <Clock className="w-4 h-4" />
              最短<span className="text-xl leading-none">2</span>日
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-[var(--wt-primary)] tracking-widest mb-2">
            手軽にご購入・導入サポート。どんなご相談もOK！
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--wt-dark)] tracking-tight">
            ご利用の流れ
          </h2>
        </div>

        {/* ステップカード群（左にタイムラインライン） */}
        <div className="relative">
          {/* 縦の接続ライン（01〜05の丸同士を繋ぐ） */}
          <div
            className="absolute left-[24.5px] sm:left-[27.5px] top-0 bottom-0 w-[3px] bg-[var(--wt-primary)] pointer-events-none"
            aria-hidden="true"
            style={{
              clipPath: "inset(80px 0 50px 0)",
            }}
          />

          <div className="space-y-0">
            {visualFlowSteps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.num}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="relative flex gap-4 sm:gap-5 py-2.5 sm:py-3"
                >
                  {/* タイムラインノード（丸・カード中央に揃える） */}
                  <div className="relative z-10 flex-shrink-0 self-center">
                    <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full flex items-center justify-center text-base sm:text-lg font-black border-[3px] border-white shadow-lg bg-[var(--wt-primary)] text-white">
                      {step.num}
                    </div>
                  </div>

                  {/* カード本体 */}
                  <div className="group flex-1 flex flex-col sm:flex-row items-stretch bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* 左: アイコン + タイトル */}
                    <div
                      className={`relative flex-shrink-0 w-full sm:w-[200px] lg:w-[220px] overflow-hidden flex flex-col items-center justify-center gap-1.5 py-5 sm:py-6 px-4 ${
                        "bg-gradient-to-br from-[var(--wt-primary)] via-[#006B3C] to-[#004A29]"
                      }`}
                    >
                      {/* ステップ画像（ある場合） */}
                      {step.image && (
                        <>
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="220px"
                          />
                          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
                        </>
                      )}
                      {/* 背景装飾: 巨大番号ゴースト */}
                      <span
                        className="absolute -bottom-3 -right-1 text-[80px] sm:text-[90px] font-black leading-none text-white/10 pointer-events-none select-none tracking-tighter"
                        aria-hidden="true"
                      >
                        {step.num}
                      </span>

                      {/* アイコン */}
                      <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" strokeWidth={1.5} />
                      </div>

                      {/* タイトル */}
                      <h3 className="relative z-10 text-sm sm:text-base font-black text-white text-center leading-tight">
                        {step.title}
                      </h3>

                      {/* バッジ（最短即日など） */}
                      {step.badge && (
                        <span className="relative z-10 inline-flex items-center gap-1 bg-white text-[var(--wt-primary)] text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full shadow-md">
                          <Zap className="w-2.5 h-2.5" />
                          {step.badge}
                        </span>
                      )}
                    </div>

                    {/* 右: テキストコンテンツ */}
                    <div className="flex-1 px-4 py-3 sm:px-5 sm:py-4 flex flex-col justify-center">
                      <p className="text-xs sm:text-sm text-[var(--wt-gray)] leading-relaxed">
                        {step.description}
                      </p>

                      {/* お問い合わせ方法（Step 01のみ） */}
                      {step.contact && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          <span className="inline-flex items-center gap-1 bg-[var(--wt-green)]/10 text-[var(--wt-green)] text-[11px] font-bold px-2.5 py-1 rounded-full">
                            <MessageCircle className="w-3 h-3" />
                            LINE
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ご利用の流れ（シンプル版・未使用） ── */
function FlowSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)]">
            ご利用の流れ
          </h2>
        </div>

        <div className="relative flow-progress" data-reveal>
          <div className="space-y-0">
            {flowSteps.map((step, i) => (
              <div
                key={step.num}
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* 番号 */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[var(--wt-primary)] text-white flex items-center justify-center text-sm font-bold z-10">
                  {step.num}
                </div>
                {/* 内容 */}
                <div className="pt-1.5">
                  <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* 接続線 */}
                {i < flowSteps.length - 1 && (
                  <div
                    className="absolute left-[21px] top-11 w-px bg-[var(--wt-primary)]/20"
                    style={{ height: "calc(100% - 44px)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── お客様の声 ── */
function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--wt-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Voice
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)] mb-4">
            お客様の声
          </h2>
          <p className="text-[var(--wt-gray)]">
            実際にご利用いただいたお客様からの評価です。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="bg-white rounded-2xl p-7 border border-gray-100 card-hover"
            >
              {/* 星 */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[var(--wt-accent)] text-[var(--wt-accent)]"
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--wt-dark)] leading-relaxed mb-5">
                「{review.text}」
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <span className="text-xs bg-[var(--wt-primary)]/10 text-[var(--wt-primary)] font-semibold px-2 py-0.5 rounded">
                  {review.type}
                </span>
                <span className="text-xs text-[var(--wt-gray)]">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)]">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="bg-[var(--wt-bg)] rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="flex-shrink-0 text-xs font-bold text-[var(--wt-primary)] bg-[var(--wt-primary)]/10 w-8 h-8 rounded-full flex items-center justify-center">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-semibold text-[var(--wt-dark)]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--wt-gray-light)] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 pl-[4.25rem] text-sm text-[var(--wt-gray)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 最終CTA ── */
function FinalCta({ lineUrl }: { lineUrl: string }) {
  return (
    <section className="py-20 sm:py-28 bg-[var(--wt-bg-dark)] text-white relative overflow-hidden">
      <div className="orb orb-green absolute top-[10%] left-[-40px] w-[200px] h-[200px]" aria-hidden="true" />
      <div className="orb orb-accent absolute bottom-[10%] right-[-40px] w-[240px] h-[240px]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[200px] h-[160px] dot-grid opacity-20" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div data-reveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            まずはご相談から。
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            無料お見積りはLINEで写真を送るだけ。
            しつこい営業は一切ありません。お気軽にどうぞ。
          </p>
        </div>

        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#06C755] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#05b34c] transition-colors btn-glow-green w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="text-left">
              <span className="block text-xs font-normal text-white/70">
                24時間受付・最短即日返信
              </span>
              <span className="block">LINEで無料相談</span>
            </div>
          </a>
        </div>

        <div data-reveal className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            見積り無料
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            写真で見積りOK
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            キャンセル無料
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            しつこい営業なし
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── 実績数字セクション ── */
function StatsSection() {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--wt-primary)]/10 mb-3">
                  <Icon className="w-5 h-5 text-[var(--wt-primary)]" />
                </div>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-4xl sm:text-5xl font-black text-[var(--wt-dark)] tracking-tight">
                    {stat.num}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-[var(--wt-primary)]">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--wt-gray)] mt-1 font-medium">
                  {stat.label}
                </p>
                {/* 区切り線（モバイルは右下、デスクトップは右のみ） */}
                {i < stats.length - 1 && (
                  <span
                    className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-16 bg-gray-100"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── メインメッセージ + 3点特徴 ── */
function ValuePropositionSection() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--wt-bg)] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.04]" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインメッセージ */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-4">
            Speed & Free Consulting
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--wt-dark)] leading-tight mb-5">
            お問い合わせから<br className="sm:hidden" />
            <span className="text-[var(--wt-primary)]">最短2日</span>で設置完了。
          </h2>
          <p className="text-base sm:text-lg text-[var(--wt-gray)] max-w-2xl mx-auto leading-relaxed">
            LINEで写真を送るだけ。お見積りは<span className="font-bold text-[var(--wt-dark)]">完全無料</span>。
            急な故障・オフィス移転にも即対応できる体制を整えています。
          </p>
        </div>

        {/* 3点特徴 */}
        <div className="grid md:grid-cols-3 gap-5">
          {features3.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="bg-white rounded-2xl p-7 border border-gray-100 card-hover text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--wt-primary)]/8 mb-4">
                  <Icon className="w-7 h-7 text-[var(--wt-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── サービス2本柱セクション ── */
function ServicePillarsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--wt-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)] mb-4">
            販売から修理まで、<br className="sm:hidden" />
            ワンストップで対応。
          </h2>
          <p className="text-[var(--wt-gray)] max-w-2xl mx-auto">
            新規購入・入れ替えはもちろん、既設エアコンの修理・メンテナンスもお任せください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {servicePillars.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 card-hover relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-[var(--wt-primary)]"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--wt-primary)]/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[var(--wt-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-1">
                      {svc.label}
                    </p>
                    <h3 className="text-xl font-bold text-[var(--wt-dark)]">
                      {svc.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[var(--wt-gray)] leading-relaxed mb-5">
                  {svc.description}
                </p>
                <ul className="space-y-2.5 pt-5 border-t border-gray-100">
                  {svc.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-[var(--wt-dark)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--wt-primary)] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 対応エリアセクション ── */
function ServiceAreaSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[var(--wt-bg-dark)] text-white overflow-hidden">
      {/* 背景装飾 */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,133,74,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ヘッダー */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs sm:text-sm font-bold tracking-widest text-white/40 uppercase mb-3">
            Service Area
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            対応エリア
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            岡山・阪神エリアを中心にサービスを提供しています。
          </p>
        </div>

        {/* エリアカード: 横並び */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-5 max-w-3xl mx-auto">
          {serviceAreas.map((area, i) => (
            <div
              key={area.region}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`group relative flex-1 rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                area.primary
                  ? "bg-[var(--wt-primary)] border-[var(--wt-primary-light)]/30 shadow-xl shadow-[var(--wt-primary)]/20"
                  : "bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10"
              }`}
            >
              {/* プライマリバッジ */}
              {area.primary && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--wt-accent)] text-[#0d2e1b] text-[10px] font-black px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                  メイン対応エリア
                </span>
              )}

              {/* アイコン + 地域名 */}
              <div className="flex flex-col items-center text-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    area.primary
                      ? "bg-white/20"
                      : "bg-white/5 group-hover:bg-white/10"
                  } transition-colors`}
                >
                  <MapPin
                    className={`w-6 h-6 ${
                      area.primary ? "text-white" : "text-[var(--wt-primary-light)]"
                    }`}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black">{area.region}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    area.primary ? "text-white/80" : "text-white/50"
                  }`}
                >
                  {area.prefs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 注釈 */}
        <p className="text-center text-xs text-white/30 mt-10" data-reveal>
          ※ 上記以外のエリアもご相談に応じて対応可能な場合がございます。お気軽にお問い合わせください。
        </p>

        {/* LINEで写真を送るだけテキスト */}
        <div className="mt-10 text-center" data-reveal>
          <p className="text-sm text-white/50 mb-1">
            LINEで写真を送るだけ。お見積りは<span className="font-bold text-white">完全無料</span>。
          </p>
        </div>
      </div>
    </section>
  );
}
