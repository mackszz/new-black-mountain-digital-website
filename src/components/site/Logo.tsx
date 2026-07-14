export function Logo({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const color = variant === "dark" ? "currentColor" : "#FAFAFA";
  return (
    <div className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <svg viewBox="0 0 32 32" className="h-full w-auto" fill="none" aria-hidden="true">
        <path
          d="M2 26 L11 10 L16 18 L21 12 L30 26 Z"
          fill={color === "currentColor" ? "var(--color-ink)" : color}
        />
        <circle cx="22" cy="7" r="2.5" fill="var(--color-peak)" />
      </svg>
      <span
        className="font-display font-bold tracking-tight text-[15px] leading-none"
        style={{ color: variant === "dark" ? "var(--color-ink)" : "#FAFAFA" }}
      >
        Black Mountain<span style={{ color: "var(--color-peak)" }}>.</span>
      </span>
    </div>
  );
}
