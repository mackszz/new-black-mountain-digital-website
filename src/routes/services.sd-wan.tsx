import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/sd-wan")({
  head: () => ({
    meta: [
      { title: "SD-WAN Provider for Multi-Site Canadian Businesses" },
      { name: "description", content: "Managed SD-WAN that unifies branch offices, cloud, and remote workers on one policy-driven network — with security, QoS, and failover built in." },
      { property: "og:title", content: "SD-WAN Provider for Multi-Site Canadian Businesses" },
      { property: "og:url", content: "/services/sd-wan" },
    ],
    links: [{ rel: "canonical", href: "/services/sd-wan" }],
  }),
  component: () => (
    <ServicePage
      pillar="Connectivity"
      eyebrow="SD-WAN"
      title="One network. Every site. Every cloud. Every user."
      lede="Managed SD-WAN that stitches branches, cloud workloads, and remote workers into one policy-driven fabric — with intelligent path selection, QoS for voice and video, and security baked in."
      stats={[
        { value: "99.99%", label: "Site availability" },
        { value: "<200ms", label: "Sub-second failover" },
        { value: "Zero-touch", label: "Branch provisioning" },
        { value: "N+1", label: "Circuit redundancy" },
      ]}
      features={[
        { title: "Intelligent path selection", body: "Traffic routes over the best-performing link in real time — fiber, cable, or LTE — based on latency, jitter, and loss, not a static config." },
        { title: "Sub-second failover", body: "When a circuit degrades, sessions cut over without dropping voice or video calls. Users don't notice." },
        { title: "QoS for voice &amp; video", body: "UCaaS, Teams, Zoom, and CX traffic get guaranteed priority so quality doesn't collapse when the network is busy." },
        { title: "Zero-touch branch deploys", body: "Ship a device to a new site, plug it in, and it self-configures against policy — no truck roll, no local IT required." },
        { title: "Integrated SASE / security", body: "Segment traffic, enforce zero-trust policy, and inspect at the edge — SD-WAN and security on one platform, not two vendors." },
        { title: "Central visibility", body: "One dashboard for every site, every circuit, every application — with SLA and application-performance history." },
      ]}
      capabilities={[
        "Fortinet, VeloCloud, Meraki, and Cato options",
        "Hybrid WAN (MPLS + internet)",
        "Direct cloud on-ramps (AWS, Azure)",
        "Segmentation and micro-perimeters",
        "Application-aware routing",
        "Remote worker VPN / ZTNA",
        "24/7 network operations",
        "Change management &amp; audit trail",
      ]}
      extra={
        <section className="border-t border-border bg-stone/60">
          <div className="container-page py-16">
            <h2 className="text-2xl md:text-3xl font-display font-semibold max-w-3xl">
              Built for multi-site operations.
            </h2>
            <p className="mt-4 text-slate-body max-w-2xl">
              Retail chains, healthcare groups, manufacturing plants, and professional-services firms with more than one address. If your team is coordinating separate ISPs, VPNs, and firewalls per site, SD-WAN collapses that into a single policy plane.
            </p>
          </div>
        </section>
      }
      related={[
        { to: "/services/business-broadband", label: "Business Broadband", desc: "The circuits SD-WAN orchestrates — sourced by us across every carrier." },
        { to: "/services/network-cyber-security", label: "Network & Cyber Security", desc: "Zero-trust, segmentation, and threat inspection at the SD-WAN edge." },
        { to: "/services/ucaas", label: "UCaaS", desc: "Business voice that finally sounds like it should over the network." },
      ]}
      faq={[
        { q: "Do I need SD-WAN if I only have one office?", a: "Usually no — a well-designed dual-circuit connection with failover is often enough. SD-WAN pays off starting at two or three sites, or when a single site is heavily cloud-dependent with strict performance requirements." },
        { q: "Can it replace MPLS?", a: "In most cases, yes — with equal or better performance at a fraction of the cost. In some environments we keep a smaller MPLS footprint and layer SD-WAN over broadband for the rest." },
        { q: "What happens during a circuit outage?", a: "Sessions fail over to a secondary link — typically another broadband connection or cellular — in under a second, preserving voice calls and cloud sessions." },
        { q: "Who manages the platform?", a: "We do. Design, deployment, ongoing configuration, and 24/7 monitoring are all included. You get visibility without needing a network engineer on staff." },
        { q: "How long does a rollout take?", a: "A single site typically deploys in one to two weeks after circuits are ready. Multi-site programs run in staged waves — commonly 5 to 10 sites per month once the template is set." },
      ]}
      cta={{
        title: "Design a network that behaves like one network.",
        body: "Send us your site list and current circuit map. We'll design an SD-WAN topology, cost it against your existing spend, and show you what changes.",
      }}
    />
  ),
});
