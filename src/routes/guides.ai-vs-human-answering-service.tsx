import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Crumbs } from "@/components/site/Crumbs";
import { FAQ } from "@/components/site/FAQ";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/guides/ai-vs-human-answering-service")({
  head: () => ({
    meta: [
      { title: "AI vs. Human Answering Service: 2026 Comparison for Canadian Businesses" },
      { name: "description", content: "AI receptionist vs. traditional phone answering service — costs, 24/7 coverage, CRM integration, and quality compared for Canadian SMBs." },
      { property: "og:title", content: "AI vs. Human Answering Service: A 2026 Comparison" },
      { property: "og:description", content: "Compare virtual receptionists and human answering services on cost, availability, CRM integration, and call quality." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/guides/ai-vs-human-answering-service" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI vs. Human Answering Service: A 2026 Comparison" },
      { name: "twitter:description", content: "Compare virtual receptionists and human answering services on cost, availability, CRM integration, and call quality." },
    ],
    links: [{ rel: "canonical", href: "/guides/ai-vs-human-answering-service" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "AI vs. Human Answering Service: A 2026 Comparison for Canadian Businesses",
          description:
            "A side-by-side comparison of AI receptionists and traditional human phone answering services on cost, availability, CRM integration, and call quality.",
          author: { "@type": "Organization", name: "Black Mountain Digital" },
          publisher: {
            "@type": "Organization",
            name: "Black Mountain Digital",
            url: "/",
          },
          about: [
            { "@type": "Thing", name: "virtual receptionist" },
            { "@type": "Thing", name: "phone answering service" },
            { "@type": "Thing", name: "AI receptionist" },
          ],
        }),
      },
    ],
  }),
  component: Guide,
});

const rows: { label: string; ai: string; human: string; winner: "ai" | "human" | "tie" }[] = [
  { label: "Typical cost", ai: "Flat monthly rate, scales with call volume", human: "Per-minute billing, overages common", winner: "ai" },
  { label: "Hours covered", ai: "24/7/365, including holidays", human: "Business hours by default; 24/7 costs extra", winner: "ai" },
  { label: "First-ring answer rate", ai: "~100%", human: "Depends on agent availability and queue depth", winner: "ai" },
  { label: "CRM integration", ai: "Native writes to HubSpot, Salesforce, custom APIs", human: "Manual entry or emailed summaries", winner: "ai" },
  { label: "Bilingual EN / FR", ai: "Auto-detected on the first word", human: "Requires a bilingual agent to be on shift", winner: "ai" },
  { label: "Complex judgment calls", ai: "Escalates to a human on your team", human: "Handled in the moment by the agent", winner: "human" },
  { label: "Empathy for distressed callers", ai: "Improving, still imperfect", human: "A trained human's strong suit", winner: "human" },
  { label: "Consistency across calls", ai: "Identical script and tone every time", human: "Varies with the agent and their day", winner: "ai" },
  { label: "Setup time", ai: "1–3 weeks", human: "2–4 weeks for scripting and onboarding", winner: "tie" },
];

function Guide() {
  return (
    <PageShell>
      <Crumbs
        trail={[
          { label: "Home", to: "/" },
          { label: "Guides" },
          { label: "AI vs. Human Answering Service" },
        ]}
      />

      <article>
        <header className="container-page pt-8 pb-12 md:pt-14 md:pb-16">
          <div className="text-xs uppercase tracking-widest text-peak-deep mb-4">Guide · Voice</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-[1.05]">
            AI vs. human answering service: which one belongs on your front line?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-body max-w-3xl">
            A practical comparison for Canadian SMBs choosing between a virtual receptionist powered by AI and a traditional phone answering service. We cover cost per call, 24/7 availability, CRM integration, and where each option genuinely wins.
          </p>
          <div className="mt-6 text-xs text-slate-body">Published by Black Mountain Digital · 8 min read</div>
        </header>

        <section className="border-y border-border bg-stone/60">
          <div className="container-page py-12">
            <h2 className="text-2xl md:text-3xl font-display font-semibold max-w-3xl">The short answer</h2>
            <p className="mt-4 text-slate-body max-w-3xl">
              For most Canadian small and mid-sized businesses, an AI receptionist now covers 80–90% of what a human answering service was hired to do — at a fraction of the cost, without hold times, and with clean CRM data attached to every call. Human answering services still earn their keep for regulated industries, high-empathy conversations, and callers in distress. The right answer, for most operators, is a hybrid: AI at the front door, humans on the escalation path.
            </p>
          </div>
        </section>

        <section className="container-page py-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-3xl">Side-by-side comparison</h2>
          <p className="mt-3 text-slate-body max-w-2xl">
            The categories a buyer usually weighs when choosing between a phone answering service and an AI-powered virtual receptionist.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border border-border rounded-md text-left text-sm">
              <thead className="bg-stone">
                <tr>
                  <th className="p-4 font-display font-semibold">Category</th>
                  <th className="p-4 font-display font-semibold">AI receptionist</th>
                  <th className="p-4 font-display font-semibold">Human answering service</th>
                  <th className="p-4 font-display font-semibold w-24">Edge</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? "bg-background" : "bg-stone/40"}>
                    <td className="p-4 font-medium text-ink align-top">{r.label}</td>
                    <td className="p-4 text-slate-body align-top">{r.ai}</td>
                    <td className="p-4 text-slate-body align-top">{r.human}</td>
                    <td className="p-4 align-top">
                      {r.winner === "ai" && <span className="inline-flex items-center gap-1 text-peak-deep font-medium"><Check className="h-3.5 w-3.5" />AI</span>}
                      {r.winner === "human" && <span className="inline-flex items-center gap-1 text-charcoal font-medium"><Check className="h-3.5 w-3.5" />Human</span>}
                      {r.winner === "tie" && <span className="text-slate-body">Tie</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-border bg-stone/40">
          <div className="container-page py-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-3xl">Cost-efficiency: where the math actually lands</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 max-w-4xl">
              <div className="bg-card border border-border rounded-md p-6">
                <div className="text-xs uppercase tracking-widest text-peak-deep mb-2">Traditional answering service</div>
                <p className="text-slate-body">
                  Typically billed per minute at $1.25–$2.50, with monthly minimums, per-call setup fees, and overage rates once you exceed the plan. A 500-call month at four minutes per call runs $2,500–$5,000 before after-hours or holiday premiums.
                </p>
              </div>
              <div className="bg-card border border-border rounded-md p-6">
                <div className="text-xs uppercase tracking-widest text-peak-deep mb-2">AI receptionist</div>
                <p className="text-slate-body">
                  A flat monthly platform fee plus a small per-minute or per-call rate — typically 30–60% less on a fully-loaded basis, with no premium for after-hours, weekends, or Canadian statutory holidays.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-body max-w-3xl italic">
              Cost ranges reflect published rates from Canadian and North American providers as of 2026. Your actual pricing will depend on call volume, integration depth, and the length of your typical call.
            </p>
          </div>
        </section>

        <section className="container-page py-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-3xl">24/7 availability without a night shift</h2>
          <p className="mt-4 text-slate-body max-w-3xl">
            A human phone answering service can absolutely staff a 24/7 desk — you'll just pay a premium for evenings, weekends, and holidays, and quality drops on the graveyard shift the same way it does in any call center. An AI receptionist doesn't have a graveyard shift. Call quality at 3 a.m. is identical to call quality at 10 a.m., and every after-hours voicemail your business was quietly losing becomes a qualified lead in your CRM the next morning.
          </p>
        </section>

        <section className="border-t border-border bg-stone/40">
          <div className="container-page py-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-3xl">CRM integration is where AI pulls ahead</h2>
            <p className="mt-4 text-slate-body max-w-3xl">
              A human agent's notes are only as good as the agent's typing speed and attention. Most answering services email a summary or drop a note in a shared inbox; getting that data into HubSpot, Salesforce, or a custom system requires manual re-entry.
            </p>
            <p className="mt-3 text-slate-body max-w-3xl">
              An AI receptionist writes structured records directly — caller name, phone number, reason for calling, qualification answers, sentiment, transcript, recording link — into your CRM at the end of every call. That's the difference between a shoebox of message slips and a clean pipeline your sales and support team can actually work.
            </p>
          </div>
        </section>

        <section className="container-page py-16">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">When a human service is still the right call</h2>
              <ul className="mt-4 space-y-3 text-slate-body">
                {[
                  "Medical intake and triage where a nurse or trained clinician is required by regulation.",
                  "Legal intake with strict privilege and conflict-check requirements.",
                  "Crisis lines and grief-adjacent calls where empathy is the product.",
                  "Very low call volume where any platform fee outweighs a pay-per-call human service.",
                ].map((x) => (
                  <li key={x} className="flex gap-3"><Check className="h-4 w-4 text-peak-deep mt-1 shrink-0" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">Where AI is the obvious pick</h2>
              <ul className="mt-4 space-y-3 text-slate-body">
                {[
                  "Appointment-heavy businesses — dental, medical aesthetics, home services, professional services.",
                  "Any operation that misses more than a handful of calls per week to voicemail.",
                  "Multi-location businesses that need consistent scripting and routing everywhere.",
                  "Teams that live in a CRM and need clean structured data on every inbound call.",
                  "Bilingual English / French markets across Canada.",
                ].map((x) => (
                  <li key={x} className="flex gap-3"><X className="h-4 w-4 text-charcoal mt-1 shrink-0 rotate-45" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-ink text-white">
          <div className="container-page py-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-3xl">The hybrid that most Canadian SMBs land on</h2>
            <p className="mt-4 text-white/80 max-w-3xl">
              AI answers every call on the first ring, handles the routine 80% — appointment bookings, status checks, hours and directions, lead qualification — and warm-transfers the complex or emotionally charged 20% to a human on your team, with the full context of the conversation summarized on the screen before they say hello.
            </p>
            <div className="mt-8">
              <Link
                to="/services/ai-receptionist"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-stone"
              >
                See how our AI Receptionist works <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <FAQ
        items={[
          { q: "Is an AI receptionist really cheaper than a phone answering service?", a: "In almost every 200+ call-per-month scenario, yes — often by 30–60% on a fully-loaded basis. The gap widens once you factor in after-hours premiums, holiday coverage, and the cost of manually entering call notes into a CRM." },
          { q: "Can callers tell they're talking to an AI virtual receptionist?", a: "Voice quality has crossed the threshold where most callers don't notice on routine calls. We disclose AI use where required and let you choose the persona. Callers care about getting what they came for — the AI's job is to make that happen faster than a queue would." },
          { q: "What happens when the AI can't handle a call?", a: "It transfers to a live person on your team with the caller's context already summarized on screen. Nothing falls through the cracks, and the human never has to ask 'so, what were you calling about?'" },
          { q: "Does an AI receptionist integrate with our existing phone system?", a: "Yes. It runs alongside most VoIP and PBX systems as a front-end call handler, or it can be paired with a UCaaS platform for a fully unified deployment. Number porting is straightforward across Canadian carriers." },
          { q: "Is this compliant with Canadian privacy law?", a: "Deployments are PIPEDA-aligned with Canadian-hosted storage options, configurable retention, consent capture for call recording, and a full audit trail on every interaction. For regulated industries we tailor the disclosures and retention policies to your requirements." },
          { q: "What's the smallest business this makes sense for?", a: "If you're losing even a few qualified inbound calls per week to voicemail — or paying a real person to answer a phone that mostly rings with routine questions — an AI receptionist typically pays for itself in the first quarter." },
        ]}
      />

      <CTABand
        title="See what your calls would look like on AI."
        body="We'll listen to a sample of your recent inbound calls, estimate what you're losing to voicemail, and show you exactly what an AI receptionist would handle differently — and what still belongs with a human."
      />
    </PageShell>
  );
}
