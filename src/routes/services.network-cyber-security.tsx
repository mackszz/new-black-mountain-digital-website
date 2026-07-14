import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/network-cyber-security")({
  head: () => ({
    meta: [
      { title: "Network & Cyber Security for Business | Black Mountain Digital" },
      { name: "description", content: "Managed firewall, endpoint protection, and 24/7 threat monitoring for Canadian businesses. PIPEDA-aligned, deployed by a partner that owns the outcome." },
      { property: "og:title", content: "Network & Cyber Security for Business | Black Mountain Digital" },
      { property: "og:url", content: "/services/network-cyber-security" },
    ],
    links: [{ rel: "canonical", href: "/services/network-cyber-security" }],
  }),
  component: () => (
    <ServicePage
      pillar="Security"
      eyebrow="Network & Cyber Security"
      title="Layered defence, monitored by people who don't sleep."
      lede="Firewall management, endpoint protection, email security, and 24/7 threat monitoring — engineered for Canadian SMBs and mid-market businesses that can't afford a breach or a full-time SOC."
      stats={[
        { value: "24/7", label: "SOC monitoring" },
        { value: "<15m", label: "Critical incident response" },
        { value: "PIPEDA", label: "Aligned data handling" },
        { value: "500+", label: "Endpoints secured" },
      ]}
      features={[
        { title: "Managed firewall", body: "Enterprise firewalls deployed, tuned, and continuously maintained. Rulesets reviewed monthly, not quarterly." },
        { title: "Endpoint detection &amp; response", body: "EDR on every device — laptops, servers, mobile. Behavioural detection, automated containment, forensic history." },
        { title: "24/7 threat monitoring", body: "A dedicated SOC watches your alerts, triages the noise, and calls you when something matters." },
        { title: "Email &amp; phishing defence", body: "Anti-phishing, impersonation protection, and quarantine review — the #1 threat vector, actively defended." },
        { title: "Vulnerability management", body: "Continuous scanning of your external and internal surface. Patches prioritized by real-world exploitability." },
        { title: "Compliance-ready posture", body: "Documentation, policies, and controls aligned to PIPEDA and, on request, SOC 2 / ISO 27001 readiness." },
      ]}
      capabilities={[
        "Next-gen firewall deployment",
        "EDR / XDR on all endpoints",
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
        { q: "Do I need this if I already have antivirus?", a: "Antivirus catches known malware. It doesn't catch phishing, credential theft, ransomware behaviour, or attacker persistence — which is how most breaches actually unfold. Modern security is layered, and monitored." },
        { q: "How fast can this be deployed?", a: "Firewall and endpoint protection can be operational in one to two weeks. Full SOC monitoring and process integration typically completes inside 30 days." },
        { q: "Does this help with PIPEDA compliance?", a: "Yes. We align controls, documentation, and incident-response processes to PIPEDA requirements, and provide the artifacts you'd need in a regulatory review." },
        { q: "What happens during an incident?", a: "Our SOC contains the threat, notifies your team on your defined escalation path, and works through remediation and reporting with you — all under a documented incident-response plan." },
        { q: "Can you work with our existing IT team?", a: "That's the most common arrangement. We become the security layer your internal team doesn't have the bandwidth or specialization to run themselves." },
      ]}
      cta={{
        title: "Find out where you're actually exposed.",
        body: "A no-cost external vulnerability scan and 45-minute review with a security specialist. You'll leave with a prioritized list — whether you engage us or not.",
      }}
    />
  ),
});
