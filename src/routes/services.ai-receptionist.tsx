import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ai-receptionist")({
  head: () => ({
    meta: [
      { title: "AI Receptionist for Small Business | Black Mountain Digital" },
      { name: "description", content: "An AI receptionist that answers every call, qualifies the caller, books appointments, and routes to the right person — no more voicemail, no missed leads." },
      { property: "og:title", content: "AI Receptionist for Small Business | Black Mountain Digital" },
      { property: "og:description", content: "Natural-voice AI that answers every call, qualifies the caller, books appointments, and routes to the right person — no voicemail, no missed leads." },
      { property: "og:url", content: "/services/ai-receptionist" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Receptionist for Small Business | Black Mountain Digital" },
      { name: "twitter:description", content: "Natural-voice AI that answers every call, qualifies the caller, books appointments, and routes to the right person — no voicemail, no missed leads." },
    ],
    links: [{ rel: "canonical", href: "/services/ai-receptionist" }],
  }),
  component: () => (
    <ServicePage
      pillar="AI Services"
      eyebrow="AI Receptionist"
      title="Every call answered on the first ring. Every lead captured."
      lede="A natural-voice AI receptionist that greets callers, qualifies intent, books appointments, and routes to the right team member — without ever putting anyone on hold."
      stats={[
        { value: "100%", label: "Calls answered" },
        { value: "0", label: "Voicemails" },
        { value: "24/7", label: "After-hours cover" },
        { value: "2 wks", label: "Typical go-live" },
      ]}
      features={[
        { title: "Human-quality voice", body: "Low-latency, natural-sounding speech. Callers rarely realize they're not speaking to a person." },
        { title: "Appointment booking built in", body: "Reads live availability from your calendar or scheduling tool and confirms slots in real time." },
        { title: "Smart call routing", body: "Understands who the caller needs and transfers to the right extension, department, or on-call phone." },
        { title: "Message capture with context", body: "When no one is available, the AI takes a detailed message, transcribes it, and emails it to the right owner." },
        { title: "Lead qualification", body: "Asks the questions your sales team would ask, scores the caller, and drops the record into your CRM." },
        { title: "Bilingual English &amp; French", body: "Detects the caller's language on the first word and responds in kind — essential for Canadian businesses." },
      ]}
      capabilities={[
        "Custom greeting and voice persona",
        "Business hours and holiday routing",
        "Live transfer to any number",
        "Voicemail-to-email fallback",
        "CRM logging (HubSpot, Salesforce, custom)",
        "Call recording and transcription",
        "Do-not-disturb per team member",
        "Spam and robocall filtering",
      ]}
      related={[
        { to: "/services/ai-customer-service-rep", label: "AI Customer Service Rep", desc: "Full-service AI support across chat, email, and voice." },
        { to: "/services/ucaas", label: "UCaaS", desc: "The unified voice platform your receptionist plugs into." },
        { to: "/services/cx", label: "CX", desc: "Add contact-center capabilities alongside your AI front desk." },
      ]}
      faq={[
        { q: "Will callers know it's AI?", a: "We disclose it when required and let you choose the persona. Most clients find their callers are comfortable with a clearly-competent AI that gets them what they need without a wait." },
        { q: "What happens if the AI can't handle a call?", a: "It transfers to a live person with the caller's context already summarized. Nothing falls through the cracks." },
        { q: "Can it integrate with our existing phone system?", a: "Yes. It runs alongside most VoIP and PBX systems, or we can pair it with our UCaaS platform for a unified deployment." },
        { q: "How much does it cost compared to a live receptionist?", a: "Typically 30–60% less on a fully-loaded basis, and it never takes sick days. Pricing scales with call volume, not headcount." },
        { q: "Is this a good fit for a small business?", a: "Especially so. Small businesses lose more revenue per missed call than mid-market companies. An AI receptionist pays for itself faster the smaller you are." },
      ]}
      cta={{
        title: "Answer every call, even the ones you're missing today.",
        body: "We'll listen to a sample of your recent inbound calls, estimate what you're losing to voicemail, and show you what an AI receptionist would handle differently.",
      }}
    />
  ),
});
