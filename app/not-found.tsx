import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--wt-bg)]">
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="text-7xl font-bold text-[var(--wt-primary)] mb-4">404</p>
        <h1 className="text-2xl font-bold text-[var(--wt-dark)] mb-3">
          ページが見つかりません
        </h1>
        <p className="text-[var(--wt-gray)] mb-8 leading-relaxed">
          お探しのページは移動または削除された可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            トップページへ
          </Link>
          <Link
            href="/area"
            className="inline-flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 text-[var(--wt-dark)] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            対応エリア一覧
          </Link>
        </div>
      </div>
    </div>
  );
}
