interface SectionDividerProps {
  from: string;
  to: string;
  type?: "wave" | "angle" | "curve";
  flip?: boolean;
}

export function SectionDivider({
  from,
  to,
  type = "wave",
  flip = false,
}: SectionDividerProps) {
  const transform = flip ? "scale(1, -1)" : undefined;

  if (type === "angle") {
    return (
      <div className="relative -mt-[2px] -mb-[2px]" style={{ background: from }}>
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ transform, height: "48px" }}
        >
          <path d="M0 0 L1440 48 L1440 48 L0 48 Z" fill={to} />
        </svg>
      </div>
    );
  }

  if (type === "curve") {
    return (
      <div className="relative -mt-[2px] -mb-[2px]" style={{ background: from }}>
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ transform, height: "48px" }}
        >
          <path
            d="M0 48 C 480 0, 960 0, 1440 48 L1440 48 L0 48 Z"
            fill={to}
          />
        </svg>
      </div>
    );
  }

  // wave (default)
  return (
    <div className="relative -mt-[2px] -mb-[2px]" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ transform, height: "48px" }}
      >
        <path
          d="M0 24 Q 360 48, 720 24 T 1440 24 L1440 48 L0 48 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
