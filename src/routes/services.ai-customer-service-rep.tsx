import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ai-customer-service-rep")({
  head: () => ({
    meta: [
      { title: "AI Customer Service Rep | Black Mountain Digital" },
      { name: "description", content: "AI customer service automation that handles tickets, chats, and calls 24/7 — trained on your data, integrated with your stack, deployed by a Canadian partner." },
      { property: "og:title", content: "AI Customer Service Rep | Black Mountain Digital" },
      { property: "og:description", content: "AI customer service across chat, email, and voice — trained on your data, integrated with your stack, deployed by a Canadian partner." },
      { property: "og:url", content: "/services/ai-customer-service-rep" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Customer Service Rep | Black Mountain Digital" },
      { name: "twitter:description", content: "AI customer service across chat, email, and voice — trained on your data, integrated with your stack, deployed by a Canadian partner." },
    ],
    links: [{ rel: "canonical", href: "/services/ai-customer-service-rep" }],
  }),
  component: () => (
    <ServicePage
      pillar="AI Services"
      eyebrow="AI Customer Service Rep"
      title="A tireless customer service rep, trained on your business."
      lede="Handle inbound support across chat, email, and voice — 24/7, in every language your customers speak, with escalation paths that route to the right human when it matters."
      stats={[
        { value: "70%", label: "First-contact resolution" },
        { value: "24/7", label: "Coverage" },
        { value: "<3s", label: "Response time" },
        { value: "40+", label: "Languages" },
      ]}
      features={[
        { title: "Trained on your knowledge base", body: "Ingests your docs, policies, and past tickets. Answers with your voice, not a generic model's." },
        { title: "Multi-channel by default", body: "One agent across web chat, email, SMS, and voice. Consistent answers, unified conversation history." },
        { title: "Human handoff, done right", body: "Recognizes complexity, transfers with full context, and hands control to your team without dropping the thread." },
        { title: "CRM &amp; ticketing integrated", body: "Reads and writes to Salesforce, HubSpot, Zendesk, Freshdesk, and custom systems via API." },
        { title: "Compliance-aware", body: "PIPEDA-aligned data handling, Canadian hosting available, full audit trail on every interaction." },
        { title: "Continuous improvement", body: "Weekly review of missed intents, confidence scores, and drop-off points — tuned by our team, not left on autopilot." },
      ]}
      capabilities={[
        "Custom intent design workshops",
        "Voice, chat, email, and SMS channels",
        "Sentiment and escalation triggers",
        "Real-time analytics dashboard",
        "SSO and role-based access",
        "Bilingual English / French support",
        "Ticket deflection reporting",
        "SLA-backed uptime",
      ]}
      related={[
        { to: "/services/ai-receptionist", label: "AI Receptionist", desc: "Purpose-built for inbound call answering and routing." },
        { to: "/services/cx", label: "CX", desc: "Human contact-center platforms that pair with AI seamlessly." },
        { to: "/services/ucaas", label: "UCaaS", desc: "Unified voice infrastructure to run the AI on top of." },
      ]}
      faq={[
        { q: "How is this different from a chatbot?", a: "Chatbots follow scripted flows. Our AI reps understand intent, hold context across turns, and resolve issues end-to-end. When they can't, they hand off to a human with the entire conversation history attached." },
        { q: "How long does deployment take?", a: "A basic deployment is live in two to four weeks. Complex integrations across ticketing, CRM, and multiple channels typically run four to eight weeks with weekly checkpoints." },
        { q: "Will the AI say the wrong thing?", a: "We ground responses in your approved knowledge base and set explicit refusal behaviour for out-of-scope topics. Every deployment includes a tuning phase where we review real conversations before broad rollout." },
        { q: "Where is customer data stored?", a: "Canadian-hosted deployments are available. Data handling is documented, PIPEDA-aligned, and includes retention controls and full audit logs." },
        { q: "Do I need to replace my current help desk?", a: "No. The AI rep sits in front of your existing tools — Zendesk, Freshdesk, Salesforce, or custom — and only escalates the tickets that need a human." },
      ]}
      cta={{
        title: "See what your support team could stop doing.",
        body: "Book a 30-minute assessment. We'll audit your ticket volume, identify the top deflection candidates, and give you a realistic estimate of what an AI rep can and can't handle.",
      }}
    />
  ),
});
