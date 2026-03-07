import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--wt-bg-dark)] flex items-center justify-center relative overflow-hidden">
        {/* 装飾 */}
        <div className="orb orb-blue absolute top-[10%] right-[10%] w-[300px] h-[300px]" aria-hidden="true" />
        <div className="orb orb-accent absolute bottom-[15%] left-[5%] w-[200px] h-[200px]" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[200px] h-[160px] dot-grid opacity-20" aria-hidden="true" />

        <div className="relative z-10 max-w-md mx-auto px-4 text-center">
          <p className="text-[120px] sm:text-[160px] font-bold text-white/[0.04] leading-none select-none" aria-hidden="true">
            404
          </p>
          <div className="-mt-16 sm:-mt-20">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              ページが見つかりません
            </h1>
            <p className="text-white/50 mb-8 leading-relaxed">
              お探しのページは移動または削除された可能性があります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                トップページへ
              </Link>
              <Link
                href="/area"
                className="inline-flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                対応エリア一覧
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
