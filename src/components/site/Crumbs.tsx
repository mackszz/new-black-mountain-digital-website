import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Crumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-body">
        {trail.map((t, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {t.to ? (
              <Link to={t.to} className="hover:text-ink">{t.label}</Link>
            ) : (
              <span className="text-ink">{t.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
