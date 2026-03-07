import Link from "next/link";

const areas = [
  { label: "関東", href: "/area/kanto" },
  { label: "関西", href: "/area/kansai" },
  { label: "中部・北陸", href: "/area/chubu" },
  { label: "中国・四国", href: "/area/chugoku-shikoku" },
  { label: "九州・沖縄", href: "/area/kyushu" },
  { label: "東北・北海道", href: "/area/tohoku-hokkaido" },
];

export function AreaCrossLinks({ current }: { current: string }) {
  return (
    <section className="border-t border-gray-100 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-bold text-[var(--wt-dark)] mb-6">
          他のエリアを見る
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {areas
            .filter((a) => a.href !== current)
            .map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-[var(--wt-dark)] hover:border-[var(--wt-primary)] hover:text-[var(--wt-primary)] transition-colors"
              >
                {a.label}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
