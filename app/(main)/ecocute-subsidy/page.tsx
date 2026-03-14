import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";
import { EcocuteFaq } from "@/components/sections/ecocute-faq";

export const metadata: Metadata = {
  title: "エコキュート補助金ガイド2026 | 給湯省エネ事業をわかりやすく解説",
  description:
    "2026年のエコキュート補助金（給湯省エネ2026事業）を一般の方にもわかりやすく解説。補助金額・対象条件・申請方法・費用シミュレーション・交換時期の目安まで網羅。最大14万円の補助金を活用しましょう。",
  alternates: { canonical: "/ecocute-subsidy" },
};

const LINE_URL = "https://line.me/R/ti/p/@384jyztd";

export default function EcocuteSubsidyPage() {
  return (
    <div className="min-h-screen">
      <SubPageHero
        title="エコキュート補助金ガイド 2026"
        label="Subsidy Guide"
        description="国の補助金を使って、おトクにエコキュートを導入しませんか？給湯省エネ2026事業をわかりやすく解説します。"
        breadcrumbItems={[
          { label: "ホーム", href: "/" },
          { label: "エコキュート補助金ガイド" },
        ]}
      >
        {/* ヒーロー内バッジ（大問屋・KOUKI風の即時訴求） */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><text x="8" y="11.5" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="bold">¥</text></svg>
            最大14万円補助
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            2026年12月末まで
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[rgba(232,168,23,0.2)] backdrop-blur-sm border border-[rgba(232,168,23,0.3)] text-[var(--wt-accent)] text-sm font-semibold px-4 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M8 1l1.5 5H15l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5.5z" fill="currentColor"/></svg>
            予算上限で早期終了あり
          </span>
        </div>
      </SubPageHero>

      <RevealWrapper>
        {/* ============================================ */}
        {/* 01: そもそもエコキュートって？ */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[10%] -left-[10%] w-[110%] h-[120px] bg-gradient-to-r from-[rgba(0,85,184,0.07)] via-[rgba(0,85,184,0.03)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-12deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute -top-16 right-[8%] w-[280px] h-[280px] md:w-[360px] md:h-[360px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] left-[-60px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">01</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                そもそもエコキュートって？
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <p data-reveal>
                エコキュートは、<strong>空気の熱</strong>を使ってお湯を沸かす「ヒートポンプ式」の給湯器です。
                従来のガス給湯器や電気温水器に比べて、使うエネルギーが<strong>約3分の1</strong>。
                電気代の節約になるうえ、CO2の排出も大幅に減らせるため、環境にもお財布にも優しい設備です。
              </p>
              <div data-reveal className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-[var(--wt-bg)] p-6 text-center">
                  <p className="text-3xl font-bold text-[var(--wt-primary)] mb-2">約1/3</p>
                  <p className="text-sm text-[var(--wt-gray)]">従来比エネルギー消費</p>
                </div>
                <div className="rounded-2xl bg-[var(--wt-bg)] p-6 text-center">
                  <p className="text-3xl font-bold text-[var(--wt-primary)] mb-2">約50%</p>
                  <p className="text-sm text-[var(--wt-gray)]">CO2排出削減</p>
                </div>
                <div className="rounded-2xl bg-[var(--wt-bg)] p-6 text-center">
                  <p className="text-3xl font-bold text-[var(--wt-primary)] mb-2">年間3〜5万円</p>
                  <p className="text-sm text-[var(--wt-gray)]">光熱費の節約目安</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 02: こんなときは交換のサイン（大問屋参考） */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(232,168,23,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-accent absolute top-[-40px] left-[5%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-blue absolute bottom-[-80px] right-[-40px] w-[320px] h-[320px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">02</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                こんなときは交換のサインです
              </h2>
              <p className="text-[var(--wt-gray)] mb-8 text-base">
                以下の症状が出ていたら、給湯器の交換を検討するタイミングかもしれません。
              </p>
            </div>
            <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14l-4-4h3V8h2v4h3l-4 4z", title: "お湯がぬるい", desc: "設定温度にならない・温度が安定しない" },
                { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z", title: "異音がする", desc: "運転時にガタガタ・ブーンなどの異常音" },
                { icon: "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z", title: "水漏れがある", desc: "本体や配管周辺からの水漏れ・錆び" },
                { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z", title: "10年以上使用", desc: "エコキュートの寿命は約10〜15年" },
                { icon: "M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zM4 0h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7s-2.5 1.12-2.5 2.5S10.62 12 12 12z", title: "修理部品がない", desc: "メーカーの部品保有期間が終了" },
                { icon: "M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2z", title: "光熱費が高い", desc: "古い機種で効率が下がり電気代が増加" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-5 border border-[rgba(0,85,184,0.06)] hover:border-[rgba(0,85,184,0.12)] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[var(--wt-primary)]/8 flex items-center justify-center mb-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--wt-primary)"><path d={item.icon} /></svg>
                  </div>
                  <p className="font-bold text-[var(--wt-dark)] mb-1">{item.title}</p>
                  <p className="text-sm text-[var(--wt-gray)]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div data-reveal className="mt-8 p-5 rounded-2xl bg-white border border-[rgba(0,85,184,0.08)] text-center">
              <p className="text-base text-[var(--wt-gray)]">
                1つでも当てはまれば、<strong className="text-[var(--wt-primary)]">補助金を使っておトクに交換</strong>するチャンスです。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 03: なぜ国が補助金を出しているの？ */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[10%] -left-[10%] w-[100%] h-[100px] bg-gradient-to-r from-[rgba(0,85,184,0.06)] via-[rgba(0,85,184,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute top-[-30px] left-[15%] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-50px] right-[10%] w-[240px] h-[240px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">03</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                なぜ国が補助金を出しているの？
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <p data-reveal>
                日本は<strong>2050年カーボンニュートラル</strong>（温室効果ガスの排出を実質ゼロにする目標）を掲げています。
                家庭のエネルギー消費のうち、<strong>給湯が約3割</strong>を占めているため、ここを高効率な機器に切り替えることが重要です。
              </p>
              <p data-reveal>
                そこで経済産業省・国土交通省・環境省の<strong>3省庁が連携</strong>して「住宅省エネ2026キャンペーン」を実施。
                その中のひとつが<strong>「給湯省エネ2026事業」</strong>で、エコキュートなど高効率給湯器の導入費用の一部を国が負担してくれる制度です。
              </p>
              <div data-reveal className="mt-8 p-6 rounded-2xl bg-[var(--wt-bg)] border border-[rgba(0,85,184,0.1)]">
                <p className="text-sm font-bold text-[var(--wt-primary)] mb-3">住宅省エネ2026キャンペーン全体像</p>
                <ul className="list-none space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--wt-primary)] text-white text-xs flex items-center justify-center font-bold">1</span>
                    <span><strong>給湯省エネ2026事業</strong>（経済産業省）― エコキュート等の導入支援</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--wt-primary)] text-white text-xs flex items-center justify-center font-bold">2</span>
                    <span><strong>先進的窓リノベ2026事業</strong>（環境省）― 高断熱窓への改修支援</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--wt-primary)] text-white text-xs flex items-center justify-center font-bold">3</span>
                    <span><strong>みらいエコ住宅2026事業</strong>（国土交通省）― 省エネ住宅の新築・リフォーム支援</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 04: 補助金額はいくら？ */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute top-[12%] -right-[10%] w-[70%] h-[90px] bg-gradient-to-l from-[rgba(0,85,184,0.05)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute -top-16 right-[8%] w-[280px] h-[280px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-60px] left-[-40px] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">04</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                補助金額はいくら？
              </h2>
            </div>

            {/* エコキュート補助金テーブル */}
            <div data-reveal className="mb-10">
              <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-4">エコキュートの場合</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[var(--wt-primary)] text-white">
                      <th className="px-4 py-3 text-sm font-bold rounded-tl-xl">区分</th>
                      <th className="px-4 py-3 text-sm font-bold">内容</th>
                      <th className="px-4 py-3 text-sm font-bold rounded-tr-xl text-right">金額</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--wt-gray)]">
                    <tr className="border-b border-gray-100 bg-white">
                      <td className="px-4 py-4 font-bold text-[var(--wt-dark)]">基本額</td>
                      <td className="px-4 py-4">エコキュート1台あたり</td>
                      <td className="px-4 py-4 text-right font-bold text-[var(--wt-primary)] text-lg">7万円</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-[var(--wt-bg)]">
                      <td className="px-4 py-4 font-bold text-[var(--wt-dark)]">性能加算</td>
                      <td className="px-4 py-4">天気予報連動・おひさまエコキュート等</td>
                      <td className="px-4 py-4 text-right font-bold text-[var(--wt-primary)] text-lg">+2〜3万円</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-white">
                      <td className="px-4 py-4 font-bold text-[var(--wt-dark)]">撤去加算</td>
                      <td className="px-4 py-4">電気温水器を撤去する場合</td>
                      <td className="px-4 py-4 text-right font-bold text-[var(--wt-primary)] text-lg">+2万円</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-bold text-[var(--wt-dark)] rounded-bl-xl">撤去加算</td>
                      <td className="px-4 py-4">蓄熱暖房機を撤去する場合（上限2台）</td>
                      <td className="px-4 py-4 text-right font-bold text-[var(--wt-primary)] text-lg rounded-br-xl">+4万円/台</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[rgba(0,85,184,0.08)] to-[rgba(232,168,23,0.08)]">
                <p className="text-center text-lg font-bold text-[var(--wt-dark)]">
                  合計で最大 <span className="text-2xl text-[var(--wt-primary)]">約12〜14万円</span> の補助が受けられます
                </p>
              </div>
            </div>

            {/* 他の対象機器 */}
            <div data-reveal>
              <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-4">その他の対象機器</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-6">
                  <p className="text-sm text-[var(--wt-gray)] mb-1">ハイブリッド給湯機</p>
                  <p className="text-2xl font-bold text-[var(--wt-primary)]">基本10万円</p>
                </div>
                <div className="rounded-2xl bg-white p-6">
                  <p className="text-sm text-[var(--wt-gray)] mb-1">エネファーム（家庭用燃料電池）</p>
                  <p className="text-2xl font-bold text-[var(--wt-primary)]">基本17万円</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 05: 費用シミュレーション（KOUKI参考） */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[20%] -left-[10%] w-[90%] h-[100px] bg-gradient-to-r from-[rgba(232,168,23,0.06)] via-[rgba(232,168,23,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-accent absolute top-[-30px] right-[10%] w-[240px] h-[240px]" aria-hidden="true" />
          <div className="orb orb-blue absolute bottom-[-50px] left-[-40px] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="absolute top-0 left-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">05</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                補助金でどれくらいおトク？
              </h2>
              <p className="text-[var(--wt-gray)] mb-8 text-base">
                エコキュート導入費用の目安と、補助金適用後のイメージです。
              </p>
            </div>

            <div data-reveal className="rounded-2xl bg-[var(--wt-bg)] border border-[rgba(0,85,184,0.08)] p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* 通常価格 */}
                <div className="text-center p-5 rounded-xl bg-white">
                  <p className="text-sm text-[var(--wt-gray)] mb-2">エコキュート導入費用（目安）</p>
                  <p className="text-3xl font-bold text-[var(--wt-dark)]">40〜60<span className="text-lg">万円</span></p>
                  <p className="text-xs text-[var(--wt-gray)] mt-1">※機種・工事内容により異なります</p>
                </div>

                {/* 矢印 */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-bold text-[var(--wt-primary)]">補助金適用</span>
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-[var(--wt-primary)] rotate-90 md:rotate-0">
                      <path d="M0 12h32M26 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-lg font-bold text-[var(--wt-accent)]">-最大14万円</span>
                  </div>
                </div>

                {/* 補助金後 */}
                <div className="text-center p-5 rounded-xl bg-white border-2 border-[var(--wt-primary)]/20">
                  <p className="text-sm text-[var(--wt-gray)] mb-2">補助金適用後の実質負担</p>
                  <p className="text-3xl font-bold text-[var(--wt-primary)]">26〜46<span className="text-lg">万円</span></p>
                  <p className="text-xs text-[var(--wt-primary)] font-semibold mt-1">さらに年間3〜5万円の光熱費節約</p>
                </div>
              </div>

              {/* 投資回収メッセージ */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[rgba(0,85,184,0.06)] to-[rgba(6,199,85,0.06)] text-center">
                <p className="text-sm text-[var(--wt-dark)] font-semibold">
                  光熱費の節約分を考えると、<strong className="text-[var(--wt-primary)]">約5〜8年で導入コストを回収</strong>できる計算です
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 06: 対象になる条件 */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(0,85,184,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute top-[-40px] left-[8%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-60px] right-[-40px] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">06</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                対象になる条件は？
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal className="space-y-6">
                {/* 条件1: 対象機種 */}
                <div className="rounded-2xl bg-white p-6 border border-[rgba(0,85,184,0.08)]">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--wt-primary)] text-white flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-2 mt-0">対象機種であること</h3>
                      <p className="mb-2">以下の機能を持つ<strong>高機能エコキュート</strong>が対象です。</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>インターネット接続</strong>ができる機種</li>
                        <li>翌日の<strong>天気予報・日射量予報に連動</strong>して、昼間の時間帯に沸き上げをシフトする機能がある</li>
                        <li>または<strong>「おひさまエコキュート」</strong>（太陽光発電の余剰電力で昼間に沸き上げ）</li>
                      </ul>
                      <p className="mt-3 text-sm text-[var(--wt-gray)]/80">
                        ※一般的な安価なエコキュートでは対象外になる場合があります。購入前に必ず対象機種か確認してください。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 条件2: 工事時期 */}
                <div className="rounded-2xl bg-white p-6 border border-[rgba(0,85,184,0.08)]">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--wt-primary)] text-white flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-2 mt-0">工事の着手日</h3>
                      <p>
                        <strong>2025年11月28日以降</strong>に着工した工事が対象です。
                        新築・リフォームどちらでもOKです。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 条件3: 登録事業者 */}
                <div className="rounded-2xl bg-white p-6 border border-[rgba(0,85,184,0.08)]">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--wt-primary)] text-white flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--wt-dark)] mb-2 mt-0">登録事業者が施工すること</h3>
                      <p>
                        この補助金は<strong>個人で直接申請できません</strong>。
                        「給湯省エネ事業」に登録された施工業者・販売業者が代行で申請します。
                        工事を依頼する際に「補助金対応していますか？」と確認しましょう。
                      </p>
                      {/* ウェルテックの橋渡し */}
                      <div className="mt-4 p-4 rounded-xl bg-[var(--wt-bg)] border border-[rgba(0,85,184,0.08)]">
                        <p className="text-sm text-[var(--wt-dark)]">
                          <strong>株式会社ウェルテック</strong>は給湯器設置・交換工事を手がけており、
                          エコキュート工事の<a href="/#registration" className="text-[var(--wt-primary)] font-semibold hover:underline">協力会社も募集</a>しています。
                          施工のご相談もお気軽にどうぞ。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 07: 補助金を使った導入の流れ（大問屋参考） */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[15%] -left-[10%] w-[100%] h-[100px] bg-gradient-to-r from-[rgba(0,85,184,0.06)] via-[rgba(0,85,184,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-accent absolute top-[-30px] right-[10%] w-[240px] h-[240px]" aria-hidden="true" />
          <div className="orb orb-blue absolute bottom-[-50px] left-[-40px] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="absolute top-0 left-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">07</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                補助金を使った導入の流れ
              </h2>
              <p className="text-[var(--wt-gray)] mb-8 text-base">
                難しい手続きは不要。施工業者に任せるだけで補助金が適用されます。
              </p>
            </div>

            <div data-reveal className="relative">
              {/* タイムライン */}
              <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--wt-primary)]/30 via-[var(--wt-primary)]/15 to-transparent" aria-hidden="true" />

              {[
                { num: "01", title: "対象機種を選ぶ", desc: "メーカーの対象リストから、インターネット接続＋天気連動機能のあるエコキュートを選びます。" },
                { num: "02", title: "登録事業者に見積もり依頼", desc: "補助金対応の登録事業者に工事の見積もりを依頼。補助金適用の旨を伝えましょう。" },
                { num: "03", title: "契約・着工", desc: "見積もり内容に納得したら契約。工事の着手日が2025年11月28日以降であることを確認。" },
                { num: "04", title: "事業者が補助金を代行申請", desc: "面倒な申請手続きは事業者がすべて代行。お客様が書類を揃える手間はほぼありません。" },
                { num: "05", title: "補助金が還元される", desc: "工事完了後、補助金が交付されます。多くの場合、工事費から補助金分が差し引かれた金額でのお支払いとなります。" },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 py-5 relative">
                  <div className="relative shrink-0 w-[30px] flex justify-center pt-1.5">
                    <div className="w-3 h-3 rounded-full bg-[var(--wt-primary)] shadow-[0_0_0_4px_rgba(0,85,184,0.1)]" />
                  </div>
                  <div className="flex-1 pb-2 border-b border-black/[0.06]">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-2xl font-bold text-[var(--wt-primary)]/15 leading-none font-mono">{step.num}</span>
                      <h3 className="text-base font-bold text-[var(--wt-dark)]">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--wt-gray)] leading-relaxed ml-10">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 08: 申請スケジュール */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute top-[12%] -right-[10%] w-[70%] h-[90px] bg-gradient-to-l from-[rgba(232,168,23,0.05)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute -top-16 right-[8%] w-[280px] h-[280px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-60px] left-[-40px] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">08</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                申請スケジュール
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal className="relative pl-8 border-l-2 border-[var(--wt-primary)]/20 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--wt-primary)]" />
                  <p className="text-sm font-bold text-[var(--wt-primary)] mb-1">2025年11月28日〜</p>
                  <p className="font-bold text-[var(--wt-dark)]">対象工事の着工開始</p>
                  <p className="text-base">この日以降に着工した工事が補助金の対象になります。</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--wt-primary)]" />
                  <p className="text-sm font-bold text-[var(--wt-primary)] mb-1">2026年3月下旬〜</p>
                  <p className="font-bold text-[var(--wt-dark)]">交付申請の受付開始</p>
                  <p className="text-base">登録事業者がオンラインで申請を行います。</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--wt-accent)]" />
                  <p className="text-sm font-bold text-[var(--wt-accent)] mb-1">2026年12月31日</p>
                  <p className="font-bold text-[var(--wt-dark)]">受付終了（予定）</p>
                  <p className="text-base">ただし、<strong>予算上限に達し次第、早期終了</strong>します。お早めに！</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 09: 知っておきたい注意点 */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute bottom-[10%] -left-[10%] w-[80%] h-[80px] bg-gradient-to-r from-[rgba(232,168,23,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute top-[-40px] left-[8%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] right-[-30px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">09</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                知っておきたい注意点
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal className="space-y-4">
                <div className="flex items-start gap-3 p-5 rounded-xl bg-[var(--wt-bg)] border border-[rgba(232,168,23,0.15)]">
                  <span className="shrink-0 text-[var(--wt-accent)] text-xl mt-0.5">!</span>
                  <div>
                    <p className="font-bold text-[var(--wt-dark)] mb-1">予算がなくなれば早期終了</p>
                    <p className="text-base">過去の年度（2024年度）では予算到達により受付が締め切られました。検討中の方は早めの行動がおすすめです。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-[var(--wt-bg)] border border-[rgba(232,168,23,0.15)]">
                  <span className="shrink-0 text-[var(--wt-accent)] text-xl mt-0.5">!</span>
                  <div>
                    <p className="font-bold text-[var(--wt-dark)] mb-1">どのエコキュートでもOKではない</p>
                    <p className="text-base">ネット接続＋天気連動機能のある高機能モデルが必須です。購入前にメーカーの対象機種リストを確認しましょう。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-[var(--wt-bg)] border border-[rgba(232,168,23,0.15)]">
                  <span className="shrink-0 text-[var(--wt-accent)] text-xl mt-0.5">!</span>
                  <div>
                    <p className="font-bold text-[var(--wt-dark)] mb-1">自治体の補助金と併用できる場合も</p>
                    <p className="text-base">お住まいの自治体が独自の補助金を用意している場合、国の補助金と併用できることがあります。市区町村の窓口にも問い合わせてみましょう。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 10: よくある質問 */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(0,85,184,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute top-[-40px] left-[50%] w-[300px] h-[300px]" aria-hidden="true" />
          <div className="absolute top-0 left-0 w-[200px] h-[200px] dot-grid opacity-25" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">10</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
              <div data-reveal>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                  よくある質問
                </h2>
                <p className="text-[var(--wt-gray)] text-base">
                  エコキュート補助金に関して多く寄せられるご質問にお答えします。
                </p>
              </div>
              <div data-reveal>
                <EcocuteFaq />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 11: デュアルCTA（一般ユーザー + 施工業者） */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg-dark)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--wt-bg-dark)] via-[var(--wt-bg-dark)] to-[#0a2a4a] opacity-90" />
          <div className="orb orb-blue absolute top-[-40px] right-[-60px] w-[280px] h-[280px] opacity-40" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-30px] left-[5%] w-[200px] h-[200px] opacity-30" aria-hidden="true" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal className="text-center mb-12">
              <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                お気軽にご相談ください
              </h2>
              <p className="text-white/50 text-sm max-w-lg mx-auto">
                エコキュートの導入を検討されている方も、施工のお仕事をお探しの方も、お気軽にお問い合わせください。
              </p>
            </div>

            <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 一般のお客様向け */}
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-6 sm:p-8 text-center hover:bg-white/[0.1] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[var(--wt-green)] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">エコキュートの導入をご検討の方</h3>
                <p className="text-white/50 text-sm mb-6">補助金を使ったエコキュート導入のご相談を受け付けています。お見積もり無料。</p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--wt-green)] hover:brightness-110 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all w-full sm:w-auto"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.72 1.65 5.13 4.14 6.67-.14.5-.53 1.86-.61 2.15-.1.36.13.35.28.26.11-.07 1.78-1.18 2.52-1.66.54.08 1.1.13 1.67.13 5.52 0 10-3.32 10-7.55C20 5.82 17.52 2 12 2z"/></svg>
                  LINEでお問い合わせ
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-white/30 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  086-941-0882
                </div>
              </div>

              {/* 施工業者様向け */}
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-6 sm:p-8 text-center hover:bg-white/[0.1] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[var(--wt-primary)] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">エコキュート工事の案件をお探しの方</h3>
                <p className="text-white/50 text-sm mb-6">全国でエコキュート設置・交換の協力会社を募集中。安定した案件をご紹介します。</p>
                <a
                  href="/#registration"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all w-full sm:w-auto"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  協力会社登録はこちら
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-white/30 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  info@well-tech.top
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 12: 公式情報リンク + 免責 */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[10%] -left-[10%] w-[90%] h-[100px] bg-gradient-to-r from-[rgba(0,85,184,0.05)] via-[rgba(0,85,184,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute -top-16 right-[5%] w-[280px] h-[280px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-50px] left-[-50px] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">12</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                公式情報はこちら
              </h2>
              <p className="text-[var(--wt-gray)] mb-8 text-base">
                詳しい最新情報は、以下の政府公式サイトでご確認ください。
              </p>
            </div>
            <div data-reveal className="space-y-4">
              <a href="https://kyutou-shoene2026.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300">
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">給湯省エネ2026事業【公式】</p>
                <p className="text-sm text-[var(--wt-gray)]">経済産業省 ― 補助金額・対象機器・申請方法の詳細</p>
              </a>
              <a href="https://kyutou-shoene2026.meti.go.jp/materials/ecocute.html" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300">
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">対象機器の詳細【エコキュート】</p>
                <p className="text-sm text-[var(--wt-gray)]">経済産業省 ― 対象となるエコキュートの性能要件・機種リスト</p>
              </a>
              <a href="https://jutaku-shoene2026.mlit.go.jp/" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300">
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">住宅省エネ2026キャンペーン【公式】</p>
                <p className="text-sm text-[var(--wt-gray)]">国土交通省 ― 窓リノベ・エコ住宅を含むキャンペーン全体</p>
              </a>
              <a href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/general/housing/kyutokidonyu/kyutodonyuhojo2025.html" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300">
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">資源エネルギー庁 ― 制度解説ページ</p>
                <p className="text-sm text-[var(--wt-gray)]">経済産業省 資源エネルギー庁 ― 事業の背景・目的の解説</p>
              </a>
            </div>

            {/* 免責 */}
            <div data-reveal className="mt-12 p-5 rounded-xl bg-[var(--wt-bg)] border border-gray-200">
              <p className="text-xs text-[var(--wt-gray)]/70 leading-relaxed">
                ※本ページの情報は2026年3月時点の公開情報に基づいて作成しています。補助金額・条件・スケジュール等は変更される場合があります。最新の正確な情報は上記の公式サイトをご確認ください。本ページの内容により生じたいかなる損害についても、当社は責任を負いかねます。費用シミュレーションはあくまで目安であり、実際の金額は機種・工事内容・地域等により異なります。
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "エコキュート補助金ガイド2026 | 給湯省エネ事業をわかりやすく解説",
                description:
                  "2026年のエコキュート補助金（給湯省エネ2026事業）を一般の方にもわかりやすく解説。補助金額・対象条件・申請方法・費用シミュレーション・交換時期の目安まで網羅。",
                url: "https://well-tech.top/ecocute-subsidy",
                datePublished: "2026-03-14",
                dateModified: "2026-03-14",
                publisher: {
                  "@type": "Organization",
                  name: "株式会社ウェルテック",
                  url: "https://well-tech.top",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "賃貸でも補助金は使えますか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "賃貸住宅でもオーナー（大家さん）が申請すれば利用可能です。入居者が個人で申請することはできませんが、オーナーや管理会社に相談してみましょう。賃貸集合住宅向けには別途「賃貸集合給湯省エネ2026事業」も用意されています。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "すでにエコキュートを使っていますが、買い替えも対象ですか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "はい、既存のエコキュートからの買い替えも対象です。ただし、新しく導入する機種がインターネット接続＋天気連動機能を備えた対象機種である必要があります。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "補助金の申請は自分でやる必要がありますか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "いいえ、個人で直接申請することはできません。給湯省エネ事業に登録された施工業者・販売業者が代行して申請します。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "他の補助金（自治体の補助金など）と併用できますか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "多くの場合、自治体独自の補助金と国の給湯省エネ事業の補助金は併用可能です。ただし、自治体によって併用の可否や条件が異なるため、お住まいの市区町村の窓口に確認されることをおすすめします。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "いつまでに申し込めば間に合いますか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "申請受付は2026年12月31日までの予定ですが、予算上限に達し次第早期終了します。過去の年度では予算到達で締め切られた実績があるため、なるべく早めに施工業者へ相談されることをおすすめします。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "エコキュートの寿命はどれくらいですか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "一般的にエコキュートの寿命は約10〜15年と言われています。10年を超えると部品の劣化や故障リスクが高まるため、お湯がぬるい・異音がするなどの症状が出始めたら交換を検討するタイミングです。",
                    },
                  },
                ],
              },
              {
                "@type": "HowTo",
                name: "補助金を使ったエコキュート導入の流れ",
                description: "給湯省エネ2026事業の補助金を活用してエコキュートを導入する手順を解説します。",
                step: [
                  { "@type": "HowToStep", position: 1, name: "対象機種を選ぶ", text: "メーカーの対象リストから、インターネット接続＋天気連動機能のあるエコキュートを選びます。" },
                  { "@type": "HowToStep", position: 2, name: "登録事業者に見積もり依頼", text: "補助金対応の登録事業者に工事の見積もりを依頼します。" },
                  { "@type": "HowToStep", position: 3, name: "契約・着工", text: "見積もり内容に納得したら契約。工事着手日が2025年11月28日以降であることを確認。" },
                  { "@type": "HowToStep", position: 4, name: "事業者が補助金を代行申請", text: "面倒な申請手続きは事業者がすべて代行します。" },
                  { "@type": "HowToStep", position: 5, name: "補助金が還元される", text: "工事完了後、補助金が交付されます。" },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
