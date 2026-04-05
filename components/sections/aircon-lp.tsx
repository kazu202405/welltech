"use client";

import { useState } from "react";
import {
  Phone,
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
  ThermometerSun,
  Snowflake,
  Building2,
  Home,
  CheckCircle2,
  Star,
  Timer,
  TrendingDown,
  MapPin,
  Sparkles,
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
    tag: "業界初",
    title: "分割手数料 当社負担",
    description:
      "最大36回の分割払いで、手数料はすべて当社が負担。月々の支払いだけに集中できます。",
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

/* 月額シミュレーション */
const monthlyPlans = [
  {
    type: "家庭用 6〜10畳",
    icon: Home,
    totalPrice: "98,000",
    monthly: "2,700",
    installments: 36,
    popular: false,
  },
  {
    type: "家庭用 14〜20畳",
    icon: Home,
    totalPrice: "198,000",
    monthly: "5,500",
    installments: 36,
    popular: true,
  },
  {
    type: "業務用 天カセ 3馬力",
    icon: Building2,
    totalPrice: "398,000",
    monthly: "11,000",
    installments: 36,
    popular: false,
  },
  {
    type: "業務用 天カセ 5馬力",
    icon: Building2,
    totalPrice: "598,000",
    monthly: "16,600",
    installments: 36,
    popular: false,
  },
];

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
    description:
      "販売・設置・メンテナンス・修理まで自社で一貫対応。中間マージンがないから、価格もスピードも違います。",
    icon: Wrench,
  },
  {
    num: "02",
    title: "最短2日で\n設置完了",
    description:
      "お問い合わせから最短2日で設置完了。急な故障やオフィスの移転にも即対応できる体制を整えています。",
    icon: Timer,
  },
  {
    num: "03",
    title: "業界最安値級の\n価格を実現",
    description:
      "メーカーとの直接取引と自社施工で中間コストを徹底カット。下取り・補助金も活用して最安値を目指します。",
    icon: TrendingDown,
  },
  {
    num: "04",
    title: "現地調査から\nお見積りまで完全無料",
    description:
      "現地調査・お見積りはもちろん無料。しつこい営業は一切なし。納得いただけた場合のみ施工に進みます。",
    icon: CheckCircle2,
  },
];

/* ご利用の流れ */
const flowSteps = [
  {
    num: "01",
    title: "お問い合わせ",
    description: "お電話・LINE・Webフォームからお気軽にご連絡ください。",
  },
  {
    num: "02",
    title: "無料現地調査",
    description:
      "専門スタッフが現地を調査。最適な機種・設置方法をご提案します。",
  },
  {
    num: "03",
    title: "お見積り・ご契約",
    description:
      "詳細なお見積りをご提示。下取り・補助金・分割プランもご案内します。",
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
    name: "埼玉県 個人 C様",
    type: "家庭用",
    text: "月々2,700円の分割で最新エアコンに交換できました。手数料が0円なのは他にないサービスだと思います。",
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
    description: "お問い合わせ当日〜翌日には訪問・見積りが可能。急ぎの案件もご相談ください。",
  },
  {
    icon: BadgePercent,
    title: "現地調査・見積り完全無料",
    description: "出張費も、断っても費用ゼロ。しつこい営業も一切ありません。",
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
      "業務用・家庭用のあらゆるタイプに対応。下取り・分割・補助金を活用した最適プランをご提案します。",
    features: [
      "業務用：天カセ・壁掛け・床置き・ダクト型",
      "家庭用：6〜20畳以上の全クラス",
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
  { region: "関東", prefs: "東京・神奈川・埼玉・千葉・茨城・栃木・群馬", primary: true },
  { region: "東海", prefs: "愛知・静岡・岐阜・三重" },
  { region: "関西", prefs: "大阪・京都・兵庫・奈良・滋賀" },
  { region: "その他", prefs: "全国主要エリア対応（要相談）" },
];

/* FAQ */
const faqs = [
  {
    q: "見積りは本当に無料ですか？",
    a: "はい、現地調査・お見積りは完全無料です。出張費もかかりません。お見積り後にお断りいただいても費用は一切発生しません。",
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
    q: "分割払いの審査はありますか？",
    a: "簡単な審査がございますが、多くのお客様にご利用いただいています。最大36回まで、手数料はすべて当社負担です。",
  },
  {
    q: "補助金は使えますか？",
    a: "対象機種であれば各種補助金の申請サポートも行っています。補助金を活用することでさらにおトクに導入いただけます。",
  },
  {
    q: "工事にはどれくらいの時間がかかりますか？",
    a: "家庭用の標準取付であれば2〜3時間程度。業務用は規模によりますが、1日〜2日で完了するケースがほとんどです。",
  },
  {
    q: "業務用と家庭用、どちらも対応していますか？",
    a: "はい、家庭用ルームエアコンから業務用の天井カセット・ダクト型まで、あらゆるタイプに対応しています。",
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
    a: "関東を中心に、全国主要エリアで対応しています。詳しくはお問い合わせ時にご確認ください。",
  },
];

/* ============================================================
   メインコンポーネント
   ============================================================ */
export function AirconLp({ lineUrl }: { lineUrl: string }) {
  return (
    <>
      {/* ── 緊急性バナー ── */}
      <UrgencyBanner />

      {/* ── 実績数字 ── */}
      <StatsSection />

      {/* ── メインメッセージ & 3点特徴 ── */}
      <ValuePropositionSection />

      {/* ── 月額表示セクション（ジャパネット式） ── */}
      <MonthlySection />

      {/* ── 3大独自強み ── */}
      <UniquePointsSection />

      {/* ── パッケージ販売（全部コミコミ） ── */}
      <PackageSection />

      {/* ── CTA中間 ── */}
      <CtaBand lineUrl={lineUrl} />

      {/* ── メーカーラインナップ ── */}
      <ManufacturersSection />

      {/* ── サービス2本柱（販売/修理） ── */}
      <ServicePillarsSection />

      {/* ── 選ばれる理由 ── */}
      <ReasonsSection />

      {/* ── ご利用の流れ ── */}
      <FlowSection />

      {/* ── CTA中間2 ── */}
      <CtaBand lineUrl={lineUrl} />

      {/* ── お客様の声 ── */}
      <ReviewsSection />

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

/* ── 緊急性バナー（心理トリガー） ── */
function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold">
          <ThermometerSun className="w-4 h-4" />
          期間限定キャンペーン実施中
        </span>
        <p className="text-sm sm:text-base font-semibold">
          今なら下取り+補助金で<span className="text-yellow-300 text-lg font-bold mx-1">最大50%OFF</span>
          のチャンス！
        </p>
      </div>
    </div>
  );
}

/* ── 月額表示セクション ── */
function MonthlySection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Monthly Plan
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)] mb-4">
            月々のお支払いで、<br className="sm:hidden" />
            快適な暮らしを。
          </h2>
          <p className="text-[var(--wt-gray)] max-w-2xl mx-auto leading-relaxed">
            高額なエアコンも分割払いなら無理なく導入できます。
            <span className="font-bold text-[var(--wt-primary)]">分割手数料はすべて当社負担。</span>
            表示価格がお支払い総額です。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {monthlyPlans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.type}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`relative bg-white rounded-2xl border-2 p-6 text-center card-hover ${
                  plan.popular
                    ? "border-[var(--wt-primary)] shadow-lg shadow-[var(--wt-primary)]/10"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--wt-primary)] text-white text-xs font-bold px-4 py-1 rounded-full">
                    人気No.1
                  </span>
                )}
                <Icon className="w-8 h-8 mx-auto mb-3 text-[var(--wt-gray-light)]" />
                <p className="text-sm font-semibold text-[var(--wt-dark)] mb-4">
                  {plan.type}
                </p>
                <p className="text-xs text-[var(--wt-gray)] line-through mb-1">
                  一括 {plan.totalPrice}円(税込)
                </p>
                <div className="mb-3">
                  <span className="text-xs text-[var(--wt-gray)]">月々</span>
                  <span className="text-4xl font-black text-[var(--wt-primary)] mx-1 tracking-tight">
                    {plan.monthly}
                  </span>
                  <span className="text-sm text-[var(--wt-gray)]">
                    円〜<span className="text-xs">(税込)</span>
                  </span>
                </div>
                <p className="text-xs text-[var(--wt-gray)]">
                  {plan.installments}回払い / 手数料0円
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[var(--wt-gray-light)] mt-6">
          ※ 表示価格は標準工事費込みの参考価格です。現地調査後に正式なお見積りをご提示します。
        </p>
      </div>
    </section>
  );
}

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
        <div className="flex items-center gap-3">
          <a
            href="tel:0120000000"
            className="inline-flex items-center gap-2 bg-white text-[var(--wt-primary)] font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            0120-000-000
          </a>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#05b34c] transition-colors btn-glow-green"
          >
            <MessageCircle className="w-4 h-4" />
            LINEで相談
          </a>
        </div>
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
function ReasonsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--wt-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Why WELLTECH
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)]">
            選ばれる4つの理由
          </h2>
        </div>

        <div className="space-y-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={reason.num}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 md:p-10 border border-gray-100 card-hover ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[var(--wt-primary)]/5 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-[var(--wt-primary)]" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-5xl font-black text-[var(--wt-primary)]/10 leading-none">
                    {reason.num}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--wt-dark)] mt-2 mb-3 whitespace-pre-line">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── ご利用の流れ ── */
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
          <p className="text-sm font-medium tracking-widest text-white/40 uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            快適な空間づくり、<br />
            まずはご相談から。
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            無料の現地調査・お見積りは、お電話・LINE・Webフォームから。
            しつこい営業は一切ありません。お気軽にどうぞ。
          </p>
        </div>

        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="tel:0120000000"
            className="inline-flex items-center gap-3 bg-white text-[var(--wt-primary)] font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors btn-bounce w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            <div className="text-left">
              <span className="block text-xs font-normal text-[var(--wt-gray)]">
                通話無料・平日9:00〜19:00
              </span>
              <span className="block">0120-000-000</span>
            </div>
          </a>
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
            現地調査無料
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
            現地調査から見積りまで、<span className="font-bold text-[var(--wt-dark)]">完全無料</span>。
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
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <p className="text-sm font-medium tracking-widest text-[var(--wt-primary)] uppercase mb-3">
            Service Area
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--wt-dark)] mb-4">
            対応エリア
          </h2>
          <p className="text-[var(--wt-gray)]">
            関東を中心に、全国主要エリアで対応可能です。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {serviceAreas.map((area, i) => (
            <div
              key={area.region}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`rounded-xl p-6 border-2 card-hover ${
                area.primary
                  ? "bg-[var(--wt-primary)]/5 border-[var(--wt-primary)]"
                  : "bg-[var(--wt-bg)] border-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin
                  className={`w-5 h-5 ${
                    area.primary ? "text-[var(--wt-primary)]" : "text-[var(--wt-gray)]"
                  }`}
                />
                <h3 className="text-lg font-bold text-[var(--wt-dark)]">
                  {area.region}
                </h3>
                {area.primary && (
                  <span className="ml-auto text-[10px] font-bold bg-[var(--wt-primary)] text-white px-2 py-0.5 rounded-full">
                    主要対応
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--wt-gray)] leading-relaxed">
                {area.prefs}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--wt-gray-light)] mt-8">
          ※ 北海道・沖縄・離島など一部エリアは対応不可の場合があります。詳しくはお問い合わせ時にご確認ください。
        </p>
      </div>
    </section>
  );
}
