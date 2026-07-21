import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Black Mountain Digital | Canadian Technology Since 1996" },
      { name: "description", content: "Three decades building Canadian business technology — from telecom roots in 1996 to AI, security, and connectivity today. Meet the team behind 500+ projects." },
      { property: "og:title", content: "About Black Mountain Digital | Canadian Technology Since 1996" },
      { property: "og:description", content: "From Canadian telecom roots in 1996 to today's AI, security, and connectivity practice — one accountable partner, three decades of client relationships." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { t: "Precise", d: "We measure twice. Configurations, contracts, and commitments are checked before they ship." },
  { t: "Accountable", d: "One team, one number, one throat to hold. We own the outcome across every service line." },
  { t: "Vendor-neutral", d: "Our loyalty is to the customer, not to a single carrier or platform. We recommend what fits." },
  { t: "Enduring", d: "We build for the next decade of your business, not the next quarterly demo." },
];

function About() {
  return (
    <PageShell>
      <section className="container-page pt-16 md:pt-24 pb-16">
        <div className="text-xs uppercase tracking-widest text-peak mb-5">About</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-[1.05]">
          A Canadian technology company, built for the long run.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-body max-w-3xl">
          Black Mountain Digital began its journey in 1996 as a Canadian telecom infrastructure company.
          Three decades later, we're an end-to-end technology partner — AI, security, voice, connectivity, and cabling — for the businesses that keep Canada running.
        </p>
      </section>

      <section className="bg-stone/60 border-y border-border">
        <div className="container-page py-20 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-peak mb-3">Our story</div>
            <h2 className="text-3xl font-display font-semibold">From copper to code — three decades of Canadian infrastructure.</h2>
            <p className="mt-4 text-slate-body">
              We started by pulling cable and provisioning phone lines for Ontario businesses. As the technology stack evolved, so did we — into managed connectivity, then unified communications, then cybersecurity, and now AI-driven automation.
            </p>
            <p className="mt-3 text-slate-body">
              The through-line is the same: we operate as one accountable partner across every layer of the stack, so our clients can stop coordinating vendors and start running their businesses.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Stat v="500+" l="Projects delivered" />
            <Stat v="200+" l="Active clients" />
            <Stat v="98%" l="Client satisfaction" />
            <Stat v="24/7" l="Canadian-based support" />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-peak mb-3">Mission</div>
            <h2 className="text-3xl font-display font-semibold">Make enterprise-grade technology available to every Canadian business.</h2>
            <p className="mt-4 text-slate-body">
              We remove the complexity, the vendor sprawl, and the guesswork — so mid-sized companies can operate with the same infrastructure as the Fortune 500.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-peak mb-3">Vision</div>
            <h2 className="text-3xl font-display font-semibold">The default technology partner for Canadian SMBs and mid-market businesses.</h2>
            <p className="mt-4 text-slate-body">
              Not the biggest name. The most trusted one — the partner that shows up, sticks around, and gets it right.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page py-20">
          <div className="text-xs uppercase tracking-widest text-peak mb-3">Values</div>
          <h2 className="text-3xl md:text-5xl font-display font-semibold max-w-3xl">How we work.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t}>
                <div className="font-display font-semibold text-xl">{v.t}</div>
                <p className="mt-2 text-white/70 text-[15px]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <CTABand
        title="Work with a partner who's been here since 1996."
        body="We don't churn account managers. We don't disappear after go-live. That's what three decades of Canadian client relationships teaches you."
      />
    </PageShell>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="bg-card border border-border p-6 rounded-md">
      <div className="font-display font-bold text-4xl text-ink">{v}</div>
      <div className="text-xs mt-1 uppercase tracking-widest text-slate-body">{l}</div>
    </div>
  );
}
