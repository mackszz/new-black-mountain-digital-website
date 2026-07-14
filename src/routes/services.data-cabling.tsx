import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/data-cabling")({
  head: () => ({
    meta: [
      { title: "Structured Cabling Contractor Ontario | Data Cabling Services" },
      { name: "description", content: "Certified structured cabling, fiber optic, and cable management for offices, data centers, and retrofits across Ontario and Canada — installed and tested to standard." },
      { property: "og:title", content: "Structured Cabling Contractor Ontario | Data Cabling Services" },
      { property: "og:url", content: "/services/data-cabling" },
    ],
    links: [{ rel: "canonical", href: "/services/data-cabling" }],
  }),
  component: () => (
    <ServicePage
      pillar="Infrastructure"
      pillarHref="/"
      eyebrow="Data Cabling"
      title="The physical layer, done properly the first time."
      lede="Structured cabling, fiber optic installation, and cable management — designed, installed, tested, and certified against TIA/EIA standards by cabling teams that started this business in 1996."
      stats={[
        { value: "Cat6A", label: "Standard drop" },
        { value: "OM4/OS2", label: "Fiber offerings" },
        { value: "25-yr", label: "Manufacturer warranty" },
        { value: "100%", label: "Drops tested &amp; certified" },
      ]}
      features={[
        { title: "Structured copper &amp; fiber", body: "Cat6, Cat6A, Cat7, and OM4/OS2 fiber — engineered for today's speeds and the ones coming next." },
        { title: "Testing &amp; certification", body: "Every drop tested with Fluke-grade equipment and certified against TIA/EIA-568 with reports you can hand to the manufacturer or auditor." },
        { title: "Cable management", body: "Server rooms and IDF closets built to be maintainable — labelled, dressed, and documented, not spaghetti." },
        { title: "Office buildouts", body: "New floor plans wired for voice, data, wireless APs, cameras, and access control in one coordinated install." },
        { title: "Data center &amp; retrofits", body: "High-density fiber, overhead pathway, and staged migrations that keep production running during the move." },
        { title: "Manufacturer warranty", body: "Certified installers for major systems — Panduit, CommScope, Belden — with 25-year performance warranties on qualifying jobs." },
      ]}
      capabilities={[
        "Site surveys and pathway design",
        "Cat6 / Cat6A / Cat7 UTP &amp; STP",
        "Single-mode &amp; multi-mode fiber",
        "Fusion splicing &amp; termination",
        "Rack, cabinet, and pathway install",
        "AV, camera, and Wi-Fi cabling",
        "As-built documentation and labelling",
        "MAC (moves / adds / changes)",
      ]}
      extra={
        <section className="border-t border-border bg-stone/60">
          <div className="container-page py-16">
            <h2 className="text-2xl md:text-3xl font-display font-semibold max-w-3xl">Typical project types</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "New office buildouts", d: "Full low-voltage design coordinated with GC and electrician timelines." },
                { t: "Data center migrations", d: "High-density fiber and copper with staged cutover plans." },
                { t: "Retrofit &amp; renovation", d: "Adding capacity to occupied buildings without disrupting operations." },
                { t: "Camera &amp; access control", d: "Cabling for the physical security systems we also design and install." },
              ].map((p) => (
                <div key={p.t} className="bg-card border border-border rounded-md p-6">
                  <div className="font-display font-semibold">{p.t}</div>
                  <p className="mt-2 text-slate-body text-sm">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      related={[
        { to: "/services/physical-security", label: "Physical Security", desc: "Camera and access-control systems that need certified cabling underneath." },
        { to: "/services/business-broadband", label: "Business Broadband", desc: "Fiber and copper handoff from the demarc to your rack." },
        { to: "/services/network-cyber-security", label: "Network & Cyber Security", desc: "Segmenting and securing the network your cabling delivers." },
      ]}
      faq={[
        { q: "Do you work with our general contractor?", a: "Yes — we coordinate directly with the GC, electrician, and interior designer. We're used to sharing drawings, hitting inspection windows, and staying out of the critical path." },
        { q: "What standards do you install to?", a: "TIA/EIA-568 for structured cabling and BICSI best practices for pathway, grounding, and administration. Fiber to ANSI/TIA-568.3 with OTDR-verified links." },
        { q: "Can we get a warranty on the install?", a: "Yes. On qualifying jobs using certified components we offer a 25-year system warranty covering both components and workmanship." },
        { q: "Do you service the Greater Toronto Area and beyond?", a: "We serve the GTA, southern Ontario, and travel across Canada for multi-site clients we already support on other services." },
        { q: "Can you fix a mess someone else left?", a: "Frequently. We audit existing installs, document what's usable, and re-cable / re-terminate only what needs it — no wholesale rip-and-replace unless it genuinely helps." },
      ]}
      cta={{
        title: "Get the physical layer right.",
        body: "Send us the floor plan or a site walk-through. We'll come back with a design, a cable count, and a fixed price you can build a budget around.",
      }}
    />
  ),
});
