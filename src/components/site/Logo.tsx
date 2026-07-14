import logo from "@/assets/bmd-logo-black.png.asset.json";

export function Logo({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <img
      src={logo.url}
      alt="Black Mountain Digital"
      className={className}
      style={variant === "light" ? { filter: "invert(1) brightness(1.1)" } : undefined}
    />
  );
}
