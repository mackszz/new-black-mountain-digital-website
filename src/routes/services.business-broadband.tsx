import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/business-broadband")({
  head: () => ({
    meta: [
      { title: "Business Broadband & Internet | Canadian Carrier Services" },
      { name: "description", content: "Dedicated fiber, DIA, and business broadband across Canada — SLA-backed, redundant, and sourced from the right carrier for each site." },
      { property: "og:title", content: "Business Broadband & Internet | Canadian Carrier Services" },
      { property: "og:description", content: "Vendor-agnostic business internet with enforceable SLAs, diverse-path failover, and one bill across every Canadian carrier." },
      { property: "og:url", content: "/services/business-broadband" },
    ],
    links: [{ rel: "canonical", href: "/services/business-broadband" }],
  }),
  component: () => (
    <ServicePage
      pillar="Connectivity"
      eyebrow="Business Broadband"
      title="Business internet that's actually built for business."
      lede="Dedicated fiber, DIA, and cable broadband across Canada — SLA-backed, redundancy-engineered, and sourced from the right carrier for each site rather than the one we happen to resell."
      stats={[
        { value: "99.99%", label: "Uptime SLA (DIA)" },
        { value: "10 Gbps", label: "Available speeds" },
        { value: "4-hr", label: "Mean time to repair" },
        { value: "1", label: "Bill across carriers" },
      ]}
      features={[
        { title: "Vendor-agnostic sourcing", body: "We compare Bell, Rogers, Telus, Cogeco, and regional providers per site, so you get the best fit — not the one we're incentivized to push." },
        { title: "Dedicated internet access", body: "Symmetric bandwidth, static IPs, and enforceable SLAs for latency, jitter, packet loss, and repair windows." },
        { title: "Redundancy &amp; failover", body: "Diverse-path secondary circuits, LTE / 5G failover, and BGP-managed failover for multi-homed environments." },
        { title: "One contract, many carriers", body: "Multi-site operations get one master service agreement across every location and provider we source." },
        { title: "24/7 Canadian NOC", body: "When a circuit flaps, our network team opens the ticket with the carrier — you don't wait on hold." },
        { title: "Bundled security", body: "Managed firewall and edge protection can ship with the circuit, so security isn't an afterthought." },
      ]}
      capabilities={[
        "Fiber, cable, and fixed wireless",
        "Symmetric 100 Mbps – 10 Gbps",
        "Static IPv4 &amp; IPv6",
        "Volume pricing for multi-site deployments",
        "Diverse-path secondary circuits",
        "LTE / 5G failover routers",
        "Multi-site MSA and consolidated billing",
        "Enforceable SLAs with credits",
      ]}
      related={[
        { to: "/services/sd-wan", label: "SD-WAN", desc: "Turn multiple circuits into one resilient, orchestrated network." },
        { to: "/services/ucaas", label: "UCaaS", desc: "Business voice tuned to run over the connection we provision." },
        { to: "/services/network-cyber-security", label: "Network & Cyber Security", desc: "Secure the edge as it comes online." },
      ]}
      faq={[
        { q: "Why buy through you instead of the carrier direct?", a: "Because carriers only sell their own circuits. We compare them per site, negotiate the terms, consolidate billing, and give you one number to call when something breaks — regardless of whose network the problem is on." },
        { q: "What does 'dedicated' actually mean?", a: "A dedicated internet access (DIA) circuit gives you symmetric bandwidth that isn't shared with your neighbours, with contractual guarantees on uptime and latency. Regular business broadband is best-effort and shared." },
        { q: "How is uptime enforced?", a: "SLAs include monthly credits for downtime beyond the guarantee, plus committed mean-time-to-repair windows. We track them for you and pursue the credits automatically." },
        { q: "Can you help with multi-site rollouts?", a: "That's our sweet spot. We handle site surveys, cross-carrier orders, staggered installs, cutover coordination, and one consolidated bill across every location." },
        { q: "Do you provide backup / failover?", a: "Yes — diverse-path secondary circuits, cellular failover routers, or both. For SD-WAN environments, we engineer failover into the network policy itself." },
      ]}
      cta={{
        title: "Get a real quote — not a marketing sheet.",
        body: "Send us your addresses and current speeds. We'll come back with three sourcing options, apples-to-apples pricing, and a straight recommendation.",
      }}
    />
  ),
});
