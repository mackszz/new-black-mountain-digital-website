import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cpu, PhoneCall, Wifi, Cable, Check } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Mountain Digital | Canadian Technology Partner Since 1996" },
      {
        name: "description",
        content:
          "One accountable partner for AI, security, voice, connectivity, and cabling. Serving Canadian SMBs and mid-market businesses since 1996.",
      },
      { property: "og:title", content: "Black Mountain Digital | Canadian Technology Partner Since 1996" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { icon: Cpu, title: "AI Services", body: "Voice agents and receptionists that answer, qualify, and resolve — 24/7.", to: "/services/ai-customer-service-rep" },
  { icon: ShieldCheck, title: "Security", body: "Network, endpoint, and physical security engineered against real threats.", to: "/services/network-cyber-security" },
  { icon: PhoneCall, title: "Voice", body: "UCaaS and contact-center platforms that make every conversation count.", to: "/services/ucaas" },
  { icon: Wifi, title: "Connectivity", body: "Carrier-grade broadband and SD-WAN with the SLAs to back them up.", to: "/services/business-broadband" },
  { icon: Cable, title: "Data Cabling", body: "Structured cabling and fiber, tested and certified end to end.", to: "/services/data-cabling" },
];

const stats = [
  { v: "500+", l: "Projects delivered" },
  { v: "200+", l: "Active clients" },
  { v: "98%", l: "Client satisfaction" },
  { v: "24/7", l: "Support" },
  { v: "1996", l: "Founded" },
];

const testimonials = [
  {
    quote: "They took five vendors off our plate and gave us one number to call. Uptime is up, tickets are down.",
    who: "IT Director",
    org: "Regional Logistics Company",
  },
  {
    quote: "The AI receptionist paid for itself in the first quarter. Our team stopped drowning in call transfers.",
    who: "Operations Manager",
    org: "Multi-location Dental Group",
  },
  {
    quote: "They audited our network, rebuilt it, and now handle security monitoring. It just works.",
    who: "CFO",
    org: "Mid-market Manufacturing Firm",
  },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="text-xs uppercase tracking-widest text-peak mb-5">Canadian technology partner · Est. 1996</div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.02] max-w-5xl">
            Enterprise-grade technology,
            <br />
            without the enterprise overhead.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-body max-w-2xl">
            AI, security, voice, connectivity, and cabling — delivered by a single accountable partner
            to SMBs and mid-market businesses across Ontario and Canada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-charcoal transition-colors">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-medium text-ink hover:bg-stone">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-stone/50">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display font-bold text-2xl md:text-3xl text-ink">{s.v}</div>
              <div className="text-xs mt-1 uppercase tracking-widest text-slate-body">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-peak mb-3">Why Black Mountain Digital</div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight">
              One partner. Every layer of your technology stack.
            </h2>
          </div>
          <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
            {[
              { t: "Vendor-agnostic", d: "We resell and integrate the carriers and platforms that fit your business — not a proprietary product line we're stuck defending." },
              { t: "Thirty-year track record", d: "Founded as a Canadian telecom infrastructure company in 1996. The same discipline now runs our AI, security, and cloud practice." },
              { t: "Single point of accountability", d: "One quarterback for procurement, deployment, and 24/7 support across every service line — no more finger-pointing between vendors." },
              { t: "Built for Canadian businesses", d: "PIPEDA-aligned, Canadian-hosted where required, and staffed by people who know the local carrier and regulatory landscape." },
            ].map((x) => (
              <div key={x.t}>
                <div className="flex items-center gap-2 mb-2">
                  <Check className="h-4 w-4 text-peak" />
                  <div className="font-display font-semibold text-lg">{x.t}</div>
                </div>
                <p className="text-slate-body text-[15px]">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-stone/40">
        <div className="container-page py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-peak mb-3">Services</div>
              <h2 className="text-3xl md:text-5xl font-display font-semibold max-w-2xl">Five pillars. Fully-fledged practices.</h2>
            </div>
            <p className="text-slate-body max-w-md">
              Each pillar is a complete service line — not a bolt-on. Take one, take them all, or start where you have the sharpest pain.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, ...p }) => (
              <Link key={p.title} to={p.to} className="group bg-card border border-border p-8 rounded-md hover:border-peak transition-colors">
                <Icon className="h-6 w-6 text-peak" />
                <h3 className="mt-6 font-display font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-slate-body text-[15px]">{p.body}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm text-ink font-medium">
                  Explore <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20 md:py-24">
        <div className="text-xs uppercase tracking-widest text-peak mb-3">Client voices</div>
        <h2 className="text-3xl md:text-5xl font-display font-semibold max-w-2xl">What partnership actually looks like.</h2>
        <p className="mt-3 text-sm text-slate-body italic">Placeholder testimonials — to be replaced with real client quotes.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-card border border-border rounded-md p-8">
              <blockquote className="font-display text-lg text-ink leading-snug">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium text-ink">{t.who}</div>
                <div className="text-slate-body">{t.org}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Get started"
        title="Ready to consolidate your vendors?"
        body="Tell us what's broken, what's growing, and where you want to be in a year. We'll come back with a plan — not a pitch."
      />
    </PageShell>
  );
}
