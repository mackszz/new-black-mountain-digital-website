import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/cx")({
  head: () => ({
    meta: [
      { title: "CX & Contact Center Solutions | Black Mountain Digital" },
      { name: "description", content: "Omnichannel contact-center platforms with voice, chat, email, and AI-assist. Deployed on top of your existing CRM and phone system by a Canadian partner." },
      { property: "og:title", content: "CX & Contact Center Solutions | Black Mountain Digital" },
      { property: "og:url", content: "/services/cx" },
    ],
    links: [{ rel: "canonical", href: "/services/cx" }],
  }),
  component: () => (
    <ServicePage
      pillar="Voice"
      eyebrow="CX"
      title="A contact center your agents don't dread using."
      lede="Omnichannel customer experience platforms — voice, chat, email, SMS, and AI-assist — that plug into your CRM, respect your workflows, and give supervisors the data they actually need."
      stats={[
        { value: "8+", label: "Channels unified" },
        { value: "Live", label: "Supervisor dashboards" },
        { value: "AI", label: "Agent assist &amp; QA" },
        { value: "PIPEDA", label: "Aligned deployments" },
      ]}
      features={[
        { title: "Omnichannel routing", body: "Voice, chat, email, SMS, and social — routed by skill, priority, and customer value on one unified queue." },
        { title: "AI agent assist", body: "Real-time suggested responses, transcript search, and automated after-call notes so agents focus on the customer, not the keyboard." },
        { title: "Quality &amp; compliance", body: "100% call recording, AI-assisted QA scoring, and configurable retention for regulated industries." },
        { title: "Workforce management", body: "Forecast volume, schedule agents, and track adherence — built for both 10-seat and 500-seat operations." },
        { title: "CRM-native", body: "Salesforce, HubSpot, Dynamics, and custom CRM integrations that surface customer context on the ringing screen." },
        { title: "Real-time analytics", body: "Live wallboards, service-level tracking, and operational dashboards without waiting for tomorrow's report." },
      ]}
      capabilities={[
        "Skill-based routing",
        "Callback / virtual queuing",
        "Outbound campaign dialer",
        "IVR / self-service flows",
        "Screen &amp; call recording",
        "Speech &amp; sentiment analytics",
        "Supervisor whisper / barge",
        "API &amp; webhook integrations",
      ]}
      extra={
        <section className="border-t border-border bg-stone/60">
          <div className="container-page py-16">
            <h2 className="text-2xl md:text-3xl font-display font-semibold max-w-3xl">
              UCaaS vs. CX — how they fit together.
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="bg-card border border-border p-6 rounded-md">
                <div className="text-xs uppercase tracking-widest text-peak mb-2">UCaaS</div>
                <p className="text-slate-body text-[15px]">The foundation. Business phone system, video, and team messaging for everyone at the company. Every employee uses it.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-md">
                <div className="text-xs uppercase tracking-widest text-peak mb-2">CX / Contact Center</div>
                <p className="text-slate-body text-[15px]">The layer on top. Purpose-built for teams whose full-time job is customer-facing — support, sales, service — with queuing, routing, and analytics.</p>
              </div>
            </div>
          </div>
        </section>
      }
      related={[
        { to: "/services/ucaas", label: "UCaaS", desc: "The unified voice platform CX runs on top of." },
        { to: "/services/ai-customer-service-rep", label: "AI Customer Service Rep", desc: "Deflect and resolve tickets before they reach a human agent." },
        { to: "/services/ai-receptionist", label: "AI Receptionist", desc: "Automate the front door before the contact center picks up." },
      ]}
      faq={[
        { q: "Can this work with our existing phone system?", a: "Yes. Modern CX platforms are BYOC (bring-your-own-carrier) and CRM-agnostic. We can layer contact-center capabilities on top of what you have — or replace both together on our UCaaS." },
        { q: "Do we need AI to get value from a CX platform?", a: "No — the fundamentals (routing, recording, reporting) deliver value on their own. AI-assist and analytics are additive, and we deploy them when your operation is ready." },
        { q: "How is this priced?", a: "Per named agent, per month, on a subscription model. No forklift capex, no long-term seat commitments beyond a reasonable term for platform stability." },
        { q: "Is call recording legal in Canada?", a: "Recording business calls is permitted with appropriate notice. We configure disclosures, consent capture, and retention aligned to PIPEDA and provincial requirements." },
        { q: "Can it handle both inbound and outbound?", a: "Yes. Inbound queuing, outbound campaigns, and blended agents on one platform — with the compliance controls (DNC, throttling, disclosure) that regulated outbound requires." },
      ]}
      cta={{
        title: "Get customer conversations under one roof.",
        body: "Bring us your current tool sprawl and volume patterns. We'll design a CX architecture that consolidates what you have and adds what you're missing.",
      }}
    />
  ),
});
