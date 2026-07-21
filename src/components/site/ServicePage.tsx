import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "./PageShell";
import { Crumbs } from "./Crumbs";
import { FAQ } from "./FAQ";
import { CTABand } from "./CTABand";

export interface ServicePageProps {
  pillar: string;
  pillarHref?: string;
  eyebrow: string;
  title: string;
  lede: string;
  stats?: { value: string; label: string }[];
  features: { title: string; body: string }[];
  capabilities: string[];
  related: { to: string; label: string; desc: string }[];
  faq: { q: string; a: string }[];
  cta: { title: string; body: string };
  extra?: ReactNode;
}

export function ServicePage(p: ServicePageProps) {
  const stripTags = (s: string) => s.replace(/&amp;/g, "&").replace(/<[^>]*>/g, "");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: stripTags(`${p.eyebrow}`),
      serviceType: p.pillar,
      description: stripTags(p.lede),
      areaServed: { "@type": "Country", name: "Canada" },
      provider: {
        "@type": "Organization",
        name: "Black Mountain Digital",
        url: "/",
        telephone: "+1-905-844-6929",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map((f) => ({
        "@type": "Question",
        name: stripTags(f.q),
        acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
      })),
    },
  ];

  return (
    <PageShell>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Crumbs
        trail={[
          { label: "Home", to: "/" },
          { label: p.pillar, to: p.pillarHref },
          { label: p.eyebrow },
        ]}
      />


      <section className="container-page pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="text-xs uppercase tracking-widest text-peak mb-4">{p.pillar} · {p.eyebrow}</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-[1.05]">{p.title}</h1>
        <p className="mt-6 text-lg md:text-xl text-slate-body max-w-2xl">{p.lede}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-charcoal">
            Talk to an Expert <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:9058446929" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-ink hover:bg-stone">
            905-844-6929
          </a>
        </div>

        {p.stats && (
          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10">
            {p.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-widest text-slate-body">{s.label}</dt>
                <dd className="mt-1 font-display font-bold text-3xl md:text-4xl text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      <section className="bg-stone/60 border-y border-border">
        <div className="container-page py-20">
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-2xl">What you get</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div key={f.title} className="bg-card border border-border p-6 rounded-md">
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-slate-body text-[15px]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-peak mb-3">Capabilities</div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Enterprise-grade, delivered without the enterprise overhead.</h2>
          </div>
          <ul className="lg:col-span-2 grid gap-3 sm:grid-cols-2">
            {p.capabilities.map((c) => (
              <li key={c} className="flex gap-3 items-start">
                <Check className="h-4 w-4 text-peak mt-1 shrink-0" />
                <span className="text-[15px] text-charcoal">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {p.extra}

      {p.related.length > 0 && (
        <section className="border-t border-border bg-stone/40">
          <div className="container-page py-16">
            <h2 className="text-2xl md:text-3xl font-display font-semibold">Related services</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {p.related.map((r) => (
                <Link key={r.to} to={r.to} className="group bg-card border border-border rounded-md p-6 hover:border-peak transition-colors">
                  <div className="font-display font-semibold text-lg">{r.label}</div>
                  <p className="mt-2 text-slate-body text-sm">{r.desc}</p>
                  <div className="mt-4 text-peak text-sm inline-flex items-center gap-1">
                    Explore {r.label} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ items={p.faq} />
      <CTABand title={p.cta.title} body={p.cta.body} />
    </PageShell>
  );
}
