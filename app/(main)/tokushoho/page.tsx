import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "株式会社ウェルテックの特定商取引法に基づく表記。事業者情報を記載しています。",
  alternates: { canonical: "/tokushoho" },
};

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900 w-1/3">事業者名</th>
                <td className="py-4 text-gray-700">株式会社ウェルテック</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">代表者</th>
                <td className="py-4 text-gray-700">藤野隆史</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">所在地</th>
                <td className="py-4 text-gray-700">〒701-0206 岡山県岡山市南区妹尾3516</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">電話番号</th>
                <td className="py-4 text-gray-700">086-941-0882</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">FAX</th>
                <td className="py-4 text-gray-700">086-236-6387</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">メールアドレス</th>
                <td className="py-4 text-gray-700">info@well-tech.top</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">営業時間</th>
                <td className="py-4 text-gray-700">7:30 - 17:00（土日祝休み）</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">設立</th>
                <td className="py-4 text-gray-700">2018年5月</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">資本金</th>
                <td className="py-4 text-gray-700">500万円</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">建設業許可</th>
                <td className="py-4 text-gray-700">岡山県知事許可（般-6）第27090号</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">電気工事業登録</th>
                <td className="py-4 text-gray-700">登録電気工事業者 岡山県知事登録2023-168</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 pr-4 font-medium text-gray-900">その他許可</th>
                <td className="py-4 text-gray-700">産業廃棄物収集運搬業許可</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "特定商取引法に基づく表記 | 株式会社ウェルテック",
            description: "株式会社ウェルテックの特定商取引法に基づく表記。事業者情報を記載しています。",
            url: "https://well-tech.top/tokushoho",
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
