import logo from "@/assets/bmd-logo-black.png.asset.json";

export function Logo({
  className,
  variant = "dark",
  priority = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
}) {
  return (
    <img
      src={logo.url}
      alt="Black Mountain Digital"
      width={512}
      height={512}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      className={className}
      style={variant === "light" ? { filter: "invert(1) brightness(1.1)" } : undefined}
    />
  );
}
