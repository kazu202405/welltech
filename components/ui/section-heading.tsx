interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
}

export function SectionHeading({
  label,
  title,
  description,
  variant = "light",
}: SectionHeadingProps) {
  const textColor = variant === "dark" ? "text-white" : "text-[#0a1628]";
  const subColor = variant === "dark" ? "text-white/60" : "text-[#64748b]";
  const labelColor = variant === "dark" ? "text-[#f59e0b]" : "text-[#2563eb]";
  const lineColor = variant === "dark" ? "bg-[#f59e0b]/30" : "bg-[#2563eb]/20";
  const diamondColor = variant === "dark" ? "bg-[#f59e0b]" : "bg-[#2563eb]";

  return (
    <div className="text-center mb-12 md:mb-16">
      {label && (
        <div className="inline-flex items-center gap-3 mb-4">
          <div className={`w-8 h-px ${lineColor}`} />
          <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${labelColor}`}>
            {label}
          </span>
          <div className={`w-8 h-px ${lineColor}`} />
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-[2.5rem] font-bold ${textColor} mb-5 leading-tight`}>
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-5">
        <div className={`w-10 h-px ${lineColor}`} />
        <div className={`w-2 h-2 ${diamondColor} rotate-45`} />
        <div className={`w-10 h-px ${lineColor}`} />
      </div>
      {description && (
        <p className={`text-base md:text-lg ${subColor} max-w-2xl mx-auto leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}
