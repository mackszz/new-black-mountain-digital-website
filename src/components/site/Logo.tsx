import { useState } from "react";
import logo from "@/assets/bmd-logo-black.png.asset.json";

const FALLBACK_SRC = "/bmd-logo-black.png";

export function Logo({
  className,
  variant = "dark",
  priority = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
}) {
  const [src, setSrc] = useState(logo.url);

  return (
    <img
      src={src}
      onError={() => {
        if (src !== FALLBACK_SRC) setSrc(FALLBACK_SRC);
      }}
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
