import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/physical-security")({
  head: () => ({
    meta: [
      { title: "Physical Security Systems | Access Control & Surveillance" },
      { name: "description", content: "IP video surveillance, cloud access control, and intrusion detection for Canadian businesses — designed, installed, and monitored end to end." },
      { property: "og:title", content: "Physical Security Systems | Access Control & Surveillance" },
      { property: "og:description", content: "IP cameras, cloud access control, and intrusion detection — one partner from site survey through 24/7 monitoring." },
      { property: "og:url", content: "/services/physical-security" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Physical Security Systems | Access Control & Surveillance" },
      { name: "twitter:description", content: "IP cameras, cloud access control, and intrusion detection — one partner from site survey through 24/7 monitoring." },
    ],
    links: [{ rel: "canonical", href: "/services/physical-security" }],
  }),
  component: () => (
    <ServicePage
      pillar="Security"
      eyebrow="Physical Security"
      title="Cameras that record what matters. Doors that only open for the right people."
      lede="IP video surveillance, cloud-managed access control, and intrusion detection — designed for your building, integrated with your network, and supported by the same team that runs your cyber security."
      afterHero={
        <section className="container-page pb-16 md:pb-24">
          <div className="bg-stone border-l-4 border-peak-deep p-6 md:p-8 rounded-md">
            <h2 className="text-2xl md:text-3xl font-display font-semibold">What It's Worth Beyond Security</h2>
            <p className="mt-5 max-w-3xl text-[15px] text-charcoal">
              Commercial insurers commonly offer <span className="font-semibold text-ink">5&ndash;20% premium reductions</span> for professionally monitored camera and access-control systems (industry-standard range across commercial property/liability underwriting, 2025&ndash;2026) &mdash; on top of the theft and liability protection itself. Ask your broker what your specific carrier offers; we'll give you the documentation they'll ask for.
            </p>
          </div>
        </section>
      }
      stats={[
        { value: "4K", label: "Camera resolution" },
        { value: "30 days+", label: "Retention (configurable)" },
        { value: "Cloud", label: "Managed access control" },
        { value: "1 partner", label: "For install + support" },
      ]}
      features={[
        { title: "IP video surveillance", body: "4K cameras, smart motion analytics, license-plate and person detection. Search hours of footage in seconds." },
        { title: "Cloud access control", body: "Manage doors from anywhere. Instantly revoke a badge, grant temporary access, or set schedules — no more physical keys." },
        { title: "Intrusion detection", body: "Door, glass-break, and motion sensors tied to a monitored response protocol you define." },
        { title: "Integrated with IT", body: "Cameras and access panels ride your network with the security posture our team already manages." },
        { title: "Compliance & retention", body: "Configurable retention windows and access logs to meet insurance, legal, and privacy requirements." },
        { title: "One partner, one bill", body: "Design, cabling, install, activation, monitoring, and warranty — through Black Mountain Digital, end to end." },
      ]}
      capabilities={[
        "Site walkthrough & camera coverage design",
        "Structured low-voltage cabling",
        "Cloud NVR and analytics",
        "Mobile app for guards & managers",
        "Visitor management",
        "Elevator and gate integration",
        "Alarm monitoring",
        "Multi-site remote administration",
      ]}
      extra={
        <section className="container-page border-t border-border py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-peak-deep mb-3">NDAA Compliance</div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">Hardware that won't block your next contract.</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[15px] text-charcoal max-w-3xl">
                Section 889 of the U.S. National Defense Authorization Act (NDAA) prohibits video surveillance and telecommunications equipment from certain Chinese manufacturers — Hikvision, Dahua, Huawei, ZTE and others — from being used in federal facilities and by organizations working on U.S. federal contracts.
              </p>
              <p className="mt-4 text-[15px] text-charcoal max-w-3xl">
                If you bid on U.S. government work, operate under a U.S. parent company, or simply want to avoid equipment that has faced procurement bans and documented vulnerabilities, NDAA compliance is the specification to hold. We design and install camera and access-control systems on NDAA-compliant hardware from manufacturers such as Axis, Bosch, Avigilon and Hanwha Vision — and we'll provide the compliance documentation your procurement or legal team can file directly.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "NDAA Section 889-compliant cameras, recorders and access panels",
                  "Compliance documentation prepared for procurement and audit files",
                  "No banned OEM components hiding under a rebranded label",
                  "Canadian data residency options for privacy-sensitive deployments",
                ].map((c) => (
                  <li key={c} className="flex gap-3 items-start">
                    <Check className="h-4 w-4 text-peak-deep mt-1 shrink-0" />
                    <span className="text-[15px] text-charcoal">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      }
      related={[
        { to: "/services/network-cyber-security", label: "Network & Cyber Security", desc: "Protect the network your cameras and access panels ride on." },
        { to: "/services/data-cabling", label: "Data Cabling", desc: "Certified structured cabling for every camera drop and door reader." },
        { to: "/services/sd-wan", label: "SD-WAN", desc: "Reliable, secure connectivity across every location." },
      ]}
      faq={[
        { q: "Can you work with the cameras or panels we already have?", a: "Often, yes. We audit what you have, keep what still meets standard, and phase in replacements only where it improves coverage or reliability." },
        { q: "Do the cameras use my internet or a separate network?", a: "We isolate physical security devices on their own VLAN with dedicated bandwidth planning, so surveillance never competes with production traffic." },
        { q: "Who monitors alarms after hours?", a: "We arrange ULC-listed alarm monitoring aligned to your response protocol — from silent verify-before-dispatch to guard response." },
        { q: "How long is footage kept?", a: "Standard is 30 days. We configure retention to meet your insurance, industry, or legal requirements — commonly 60 to 90 days for regulated environments." },
        { q: "Is footage stored in Canada?", a: "Yes — Canadian-hosted storage is available and is our default for privacy-sensitive deployments." },
      ]}
      cta={{
        title: "One walk-through could lower your premium and your risk.",
        body: "We'll survey your facility, map camera coverage, review access points, and give you a phased plan you can budget against.",
      }}
    />
  ),
});
