export function Footer() {
  return (
    <footer className="bg-[var(--wt-bg-dark)] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* 会社情報 */}
          <div>
            <span className="text-xl font-bold tracking-tight block mb-5">WELLTECH</span>
            <div className="text-sm text-white/40 leading-relaxed space-y-1">
              <p>株式会社ウェルテック</p>
              <p>代表取締役 藤野隆史</p>
              <p>〒701-0206</p>
              <p>岡山県岡山市南区妹尾3516</p>
              <p className="pt-2 text-white/25 text-xs">創業 2018年5月 / 資本金 500万円</p>
            </div>
          </div>

          {/* 許可・登録 */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wide mb-4">許可・登録</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>岡山県知事許可（般-6）第27090号</li>
              <li>登録電気工事業者 岡山県知事登録2023-168</li>
              <li>産業廃棄物収集運搬業許可</li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wide mb-4">お問い合わせ</h4>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li>
                TEL:{" "}
                <a href="tel:0869410882" className="hover:text-white/60 transition-colors">
                  086-941-0882
                </a>
              </li>
              <li>FAX: 086-236-6387</li>
              <li>
                Email:{" "}
                <a href="mailto:info@well-tech.top" className="hover:text-white/60 transition-colors break-all">
                  info@well-tech.top
                </a>
              </li>
              <li>営業時間: 7:30 - 17:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} 株式会社ウェルテック All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/25">
            <a href="/privacy" className="hover:text-white/40 transition-colors hover-underline">プライバシーポリシー</a>
            <a href="/terms" className="hover:text-white/40 transition-colors hover-underline">利用規約</a>
            <a href="/tokushoho" className="hover:text-white/40 transition-colors hover-underline">特定商取引法</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
