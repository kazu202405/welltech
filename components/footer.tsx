export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">ウェルテック</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              株式会社ウェルテック
              <br />
              〒531-0071
              <br />
              大阪府大阪市北区中津1丁目2-21
              <br />
              中津明大ビル603
            </p>
          </div>

          {/* 事業内容 */}
          <div>
            <h4 className="text-base font-semibold mb-3">事業内容</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>公共建築入札案件</li>
              <li>電気工事</li>
              <li>内装工事</li>
              <li>空調設備工事</li>
              <li>給湯器設置工事</li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-base font-semibold mb-3">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                TEL:{" "}
                <a href="tel:0665859405" className="hover:text-white transition-colors">
                  06-6585-9405
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:info@well-tech2024.com" className="hover:text-white transition-colors break-all">
                  info@well-tech2024.com
                </a>
              </li>
              <li>営業時間: 平日 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 my-6" />

        <div className="text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} 株式会社ウェルテック All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
