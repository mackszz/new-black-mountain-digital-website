import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTABand({ eyebrow, title, body, primary = "Talk to an Expert" }: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-page py-20 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <div className="text-xs uppercase tracking-widest text-peak mb-4">{eyebrow}</div>}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">{title}</h2>
          {body && <p className="mt-5 text-lg text-white/70 max-w-2xl">{body}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-peak-deep px-6 py-3 text-sm font-medium text-white hover:bg-peak-deep/90 transition-colors"
            >
              {primary} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:9058446929"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              Call 905-844-6929
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
