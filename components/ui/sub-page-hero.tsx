import { Breadcrumb } from "@/components/ui/breadcrumb";

type BreadcrumbItem = { label: string; href?: string };

export function SubPageHero({
  title,
  label,
  description,
  breadcrumbItems,
  children,
}: {
  title: string;
  label?: string;
  description?: string;
  breadcrumbItems: BreadcrumbItem[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section className="relative bg-[var(--wt-bg-dark)] py-20 sm:py-28 overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--wt-bg-dark)] via-[var(--wt-bg-dark)] to-[#0a2a4a] opacity-90" />
        <div className="orb orb-blue absolute top-[-40px] right-[-60px] w-[280px] h-[280px]" aria-hidden="true" />
        <div className="orb orb-accent absolute bottom-[-30px] left-[5%] w-[200px] h-[200px]" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[200px] h-[160px] dot-grid opacity-20" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {label && (
            <p className="text-sm sm:text-base font-medium tracking-widest text-white/40 uppercase mb-4">
              {label}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </section>
    </>
  );
}
