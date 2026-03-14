import { Metadata } from "next";
import { SubPageHero } from "@/components/ui/sub-page-hero";
import { RevealWrapper } from "@/components/ui/reveal-wrapper";

export const metadata: Metadata = {
  title: "エコキュート補助金ガイド2026 | 給湯省エネ事業をわかりやすく解説",
  description:
    "2026年のエコキュート補助金（給湯省エネ2026事業）を一般の方にもわかりやすく解説。補助金額・対象条件・申請方法・注意点まで網羅。",
  alternates: { canonical: "/ecocute-subsidy" },
};

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
      />
      <RevealWrapper>
        {/* セクション: そもそもエコキュートって？ */}
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

        {/* セクション: なぜ国が補助金を出しているの？ */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute bottom-[15%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(0,85,184,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-accent absolute top-[-40px] left-[5%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-blue absolute bottom-[-80px] right-[-40px] w-[320px] h-[320px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">02</div>

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
              <div data-reveal className="mt-8 p-6 rounded-2xl bg-white border border-[rgba(0,85,184,0.1)]">
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

        {/* セクション: 補助金額はいくら？ */}
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
          <div
            data-reveal-diag
            className="absolute top-[20%] -left-[10%] w-[90%] h-[100px] bg-gradient-to-r from-[rgba(232,168,23,0.06)] via-[rgba(232,168,23,0.02)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "-8deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute top-[-30px] left-[15%] w-[220px] h-[220px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-50px] right-[10%] w-[240px] h-[240px]" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">03</div>

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
                    <tr className="bg-[var(--wt-bg)]">
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
                <div className="rounded-2xl bg-[var(--wt-bg)] p-6">
                  <p className="text-sm text-[var(--wt-gray)] mb-1">ハイブリッド給湯機</p>
                  <p className="text-2xl font-bold text-[var(--wt-primary)]">基本10万円</p>
                </div>
                <div className="rounded-2xl bg-[var(--wt-bg)] p-6">
                  <p className="text-sm text-[var(--wt-gray)] mb-1">エネファーム（家庭用燃料電池）</p>
                  <p className="text-2xl font-bold text-[var(--wt-primary)]">基本17万円</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: 対象になる条件 */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: 申請スケジュール */}
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
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">05</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                申請スケジュール
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal className="relative pl-8 border-l-2 border-[var(--wt-primary)]/20 space-y-8">
                {/* ステップ1 */}
                <div className="relative">
                  <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--wt-primary)]" />
                  <p className="text-sm font-bold text-[var(--wt-primary)] mb-1">2025年11月28日〜</p>
                  <p className="font-bold text-[var(--wt-dark)]">対象工事の着工開始</p>
                  <p className="text-base">この日以降に着工した工事が補助金の対象になります。</p>
                </div>
                {/* ステップ2 */}
                <div className="relative">
                  <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-[var(--wt-primary)]" />
                  <p className="text-sm font-bold text-[var(--wt-primary)] mb-1">2026年3月下旬〜</p>
                  <p className="font-bold text-[var(--wt-dark)]">交付申請の受付開始</p>
                  <p className="text-base">登録事業者がオンラインで申請を行います。</p>
                </div>
                {/* ステップ3 */}
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

        {/* セクション: 知っておきたい注意点 */}
        <section className="relative py-24 md:py-32 bg-[var(--wt-bg)] overflow-hidden">
          <div
            data-reveal-diag-r
            className="absolute bottom-[10%] -right-[10%] w-[80%] h-[80px] bg-gradient-to-l from-[rgba(232,168,23,0.06)] to-transparent pointer-events-none"
            style={{ "--diag-angle": "10deg" } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="orb orb-blue absolute top-[-40px] left-[8%] w-[260px] h-[260px]" aria-hidden="true" />
          <div className="orb orb-accent absolute bottom-[-40px] right-[-30px] w-[200px] h-[200px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[260px] md:h-[260px] dot-grid opacity-40" aria-hidden="true" />
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">06</div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[var(--wt-dark)] pl-4 border-l-4 border-[var(--wt-primary)]">
                知っておきたい注意点
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--wt-gray)] leading-relaxed">
              <div data-reveal className="space-y-4">
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white border border-[rgba(232,168,23,0.15)]">
                  <span className="shrink-0 text-[var(--wt-accent)] text-xl mt-0.5">!</span>
                  <div>
                    <p className="font-bold text-[var(--wt-dark)] mb-1">予算がなくなれば早期終了</p>
                    <p className="text-base">過去の年度（2024年度）では予算到達により受付が締め切られました。検討中の方は早めの行動がおすすめです。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white border border-[rgba(232,168,23,0.15)]">
                  <span className="shrink-0 text-[var(--wt-accent)] text-xl mt-0.5">!</span>
                  <div>
                    <p className="font-bold text-[var(--wt-dark)] mb-1">どのエコキュートでもOKではない</p>
                    <p className="text-base">ネット接続＋天気連動機能のある高機能モデルが必須です。購入前にメーカーの対象機種リストを確認しましょう。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white border border-[rgba(232,168,23,0.15)]">
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

        {/* セクション: 公式情報リンク */}
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
          <div className="watermark-bold absolute top-6 -left-4 lg:left-0 font-mono z-0" aria-hidden="true">07</div>

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
              <a
                href="https://kyutou-shoene2026.meti.go.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300"
              >
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">
                  給湯省エネ2026事業【公式】
                </p>
                <p className="text-sm text-[var(--wt-gray)]">経済産業省 ― 補助金額・対象機器・申請方法の詳細</p>
              </a>
              <a
                href="https://kyutou-shoene2026.meti.go.jp/materials/ecocute.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300"
              >
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">
                  対象機器の詳細【エコキュート】
                </p>
                <p className="text-sm text-[var(--wt-gray)]">経済産業省 ― 対象となるエコキュートの性能要件・機種リスト</p>
              </a>
              <a
                href="https://jutaku-shoene2026.mlit.go.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300"
              >
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">
                  住宅省エネ2026キャンペーン【公式】
                </p>
                <p className="text-sm text-[var(--wt-gray)]">国土交通省 ― 窓リノベ・エコ住宅を含むキャンペーン全体</p>
              </a>
              <a
                href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/general/housing/kyutokidonyu/kyutodonyuhojo2025.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-[var(--wt-bg)] hover:bg-[rgba(0,85,184,0.06)] border border-transparent hover:border-[rgba(0,85,184,0.12)] transition-all duration-300"
              >
                <p className="font-bold text-[var(--wt-dark)] group-hover:text-[var(--wt-primary)] transition-colors mb-1">
                  資源エネルギー庁 ― 制度解説ページ
                </p>
                <p className="text-sm text-[var(--wt-gray)]">経済産業省 資源エネルギー庁 ― 事業の背景・目的の解説</p>
              </a>
            </div>

            {/* 免責 */}
            <div data-reveal className="mt-12 p-5 rounded-xl bg-[var(--wt-bg)] border border-gray-200">
              <p className="text-xs text-[var(--wt-gray)]/70 leading-relaxed">
                ※本ページの情報は2026年3月時点の公開情報に基づいて作成しています。補助金額・条件・スケジュール等は変更される場合があります。最新の正確な情報は上記の公式サイトをご確認ください。本ページの内容により生じたいかなる損害についても、当社は責任を負いかねます。
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
            "@type": "Article",
            headline: "エコキュート補助金ガイド2026 | 給湯省エネ事業をわかりやすく解説",
            description:
              "2026年のエコキュート補助金（給湯省エネ2026事業）を一般の方にもわかりやすく解説。補助金額・対象条件・申請方法・注意点まで網羅。",
            url: "https://well-tech.top/ecocute-subsidy",
            datePublished: "2026-03-14",
            dateModified: "2026-03-14",
            publisher: {
              "@type": "Organization",
              name: "株式会社ウェルテック",
              url: "https://well-tech.top",
            },
          }),
        }}
      />
    </div>
  );
}
