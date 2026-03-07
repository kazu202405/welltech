interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  align?: "center" | "left";
}

export function SectionHeading({
  number,
  label,
  title,
  description,
  variant = "light",
  align = "center",
}: SectionHeadingProps) {
  const isDark = variant === "dark";
  const isCenter = align === "center";

  return (
    <div className={`mb-8 md:mb-14 ${isCenter ? "lg:mb-20 text-center" : "lg:mb-0"}`}>
      {/* セクション番号＋ライン＋ラベル */}
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}>
        {number && (
          <span className={`text-sm font-mono font-semibold tracking-wider ${isDark ? "text-white/40" : "text-[var(--wt-primary)]/40"}`}>
            {number}
          </span>
        )}
        {label && (
          <>
            {number && (
              <span
                data-reveal-line
                className={`w-8 h-px inline-block ${isDark ? "bg-white/20" : "bg-[var(--wt-primary)]/30"}`}
              />
            )}
            <span className={`text-xs font-semibold tracking-[0.15em] uppercase ${isDark ? "text-[var(--wt-accent)]" : "text-[var(--wt-primary)]"}`}>
              {label}
            </span>
          </>
        )}
      </div>

      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5 ${isDark ? "text-white" : "text-[var(--wt-dark)]"}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""} ${isDark ? "text-white/55" : "text-[var(--wt-gray)]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
