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
  const subColor = variant === "dark" ? "text-white/70" : "text-[#64748b]";
  const labelColor = variant === "dark" ? "text-[#f59e0b]" : "text-[#2563eb]";
  const lineColor = variant === "dark" ? "bg-[#f59e0b]" : "bg-[#2563eb]";

  return (
    <div className="text-center mb-12 md:mb-16">
      {label && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${labelColor}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
        {title}
      </h2>
      <div className={`w-16 h-1 ${lineColor} mx-auto rounded-full mb-4`} />
      {description && (
        <p className={`text-base md:text-lg ${subColor} max-w-2xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  );
}
