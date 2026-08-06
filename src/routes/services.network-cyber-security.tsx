import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/network-cyber-security")({
  head: () => ({
    meta: [
      { title: "MSSP & Managed Security Services | Black Mountain Digital" },
      { name: "description", content: "A Canadian managed security services provider (MSSP): managed firewall, EDR, and 24/7 SOC monitoring for Ontario businesses. PIPEDA-aligned, one accountable partner." },
      { property: "og:title", content: "MSSP & Managed Security Services | Black Mountain Digital" },
      { property: "og:description", content: "Managed security services provider for Canadian businesses — managed firewall, EDR, and 24/7 SOC monitoring, PIPEDA-aligned." },
      { property: "og:url", content: "/services/network-cyber-security" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MSSP & Managed Security Services | Black Mountain Digital" },
      { name: "twitter:description", content: "Managed security services provider for Canadian businesses — managed firewall, EDR, and 24/7 SOC monitoring, PIPEDA-aligned." },
    ],
    links: [{ rel: "canonical", href: "/services/network-cyber-security" }],
  }),
  component: () => (
    <ServicePage
      pillar="Security"
      eyebrow="Network & Cyber Security — MSSP"
      title="Managed security services provider for Canadian business."
      lede="As your MSSP, we run firewall management, endpoint protection, email security, and 24/7 SOC monitoring — managed security services engineered for Ontario SMBs and mid-market teams that can't afford a breach or a full-time security staff."
      stats={[
        { value: "24/7", label: "MSSP SOC monitoring" },
        { value: "<15m", label: "Critical incident response" },
        { value: "PIPEDA", label: "Aligned data handling" },
        { value: "500+", label: "Endpoints secured" },
      ]}
      features={[
        { title: "Managed firewall", body: "Enterprise firewalls deployed, tuned, and continuously maintained by our MSSP team. Rulesets reviewed monthly, not quarterly." },
        { title: "Endpoint detection &amp; response", body: "Managed EDR on every device — laptops, servers, mobile. Behavioural detection, automated containment, forensic history." },
        { title: "24/7 threat monitoring", body: "A dedicated SOC watches your alerts, triages the noise, and calls you when something matters — the core of our managed security services." },
        { title: "Email &amp; phishing defence", body: "Anti-phishing, impersonation protection, and quarantine review — the #1 threat vector, actively defended." },
        { title: "Vulnerability management", body: "Continuous scanning of your external and internal surface. Patches prioritized by real-world exploitability." },
        { title: "Compliance-ready posture", body: "Documentation, policies, and controls aligned to PIPEDA and, on request, SOC 2 / ISO 27001 readiness." },
      ]}
      capabilities={[
        "Managed security services (MSSP) programs",
        "Next-gen firewall deployment",
        "Managed EDR / XDR on all endpoints",
        "24/7 Security Operations Center",
        "Multi-factor authentication rollout",
        "Security awareness training",
        "Backup &amp; ransomware recovery",
        "Incident response playbook",
        "Penetration testing (annual)",
      ]}
      related={[
        { to: "/services/physical-security", label: "Physical Security", desc: "Access control and video surveillance to protect the building, too." },
        { to: "/services/sd-wan", label: "SD-WAN", desc: "Secure, orchestrated networking across every site." },
        { to: "/services/business-broadband", label: "Business Broadband", desc: "Connectivity with security baked into the edge." },
      ]}
      faq={[
        { q: "What is an MSSP, and do we need one?", a: "A managed security services provider runs your security tooling and monitoring as an ongoing service — firewall, endpoints, email, and a 24/7 SOC — instead of you hiring and retaining that team in-house. If you have systems worth protecting but no dedicated security staff, an MSSP is the practical route." },
        { q: "How is an MSSP different from our IT provider?", a: "General IT keeps systems running. A managed security services provider is accountable specifically for detection, response, and posture — with a SOC, defined escalation paths, and security reporting your IT contract usually doesn't include." },
        { q: "Do I need this if I already have antivirus?", a: "Antivirus catches known malware. It doesn't catch phishing, credential theft, ransomware behaviour, or attacker persistence — which is how most breaches actually unfold. Modern security is layered, and monitored." },
        { q: "How fast can managed security services be deployed?", a: "Firewall and endpoint protection can be operational in one to two weeks. Full MSSP SOC monitoring and process integration typically completes inside 30 days." },
        { q: "Does this help with PIPEDA compliance?", a: "Yes. We align controls, documentation, and incident-response processes to PIPEDA requirements, and provide the artifacts you'd need in a regulatory review." },
        { q: "What happens during an incident?", a: "Our SOC contains the threat, notifies your team on your defined escalation path, and works through remediation and reporting with you — all under a documented incident-response plan." },
        { q: "Can you work with our existing IT team?", a: "That's the most common arrangement. We become the managed security layer your internal team doesn't have the bandwidth or specialization to run themselves." },
      ]}
      cta={{
        title: "Talk to a managed security services provider.",
        body: "A no-cost external vulnerability scan and 45-minute review with an MSSP security specialist. You'll leave with a prioritized list — whether you engage us or not.",
      }}
    />
  ),

});
