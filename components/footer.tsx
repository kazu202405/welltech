export function Footer() {
  return (
    <footer className="bg-[#060e1a] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">ウェルテック</span>
            </div>
            <div className="text-sm text-white/50 leading-relaxed space-y-1">
              <p>株式会社ウェルテック</p>
              <p>代表取締役 藤野隆史</p>
              <p>〒701-0206</p>
              <p>岡山県岡山市南区妹尾3516</p>
              <p className="pt-1 text-white/35 text-xs">創業 2018年5月 / 資本金 500万円</p>
            </div>
          </div>

          {/* 許可・登録 */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-4">許可・登録</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>岡山県知事許可（般-6）第27090号</li>
              <li>登録電気工事業者 岡山県知事登録2023-168</li>
              <li>産業廃棄物収集運搬業許可</li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 tracking-wide mb-4">お問い合わせ</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                TEL:{" "}
                <a href="tel:0869410882" className="hover:text-white/80 transition-colors">
                  086-941-0882
                </a>
              </li>
              <li>
                FAX: 086-236-6387
              </li>
              <li>
                Email:{" "}
                <a href="mailto:info@well-tech.top" className="hover:text-white/80 transition-colors break-all">
                  info@well-tech.top
                </a>
              </li>
              <li>営業時間: 7:30 - 17:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-center text-xs text-white/30 tracking-wide">
            &copy; {new Date().getFullYear()} 株式会社ウェルテック All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
