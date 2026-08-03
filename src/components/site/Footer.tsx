import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/80">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2 space-y-4">
          <Logo variant="light" className="h-24 w-auto" />
          <p className="text-sm text-white/60 max-w-xs">
            A Canadian technology partner since 1996. AI, security, voice, connectivity, and cabling — under one accountable roof.
          </p>
          <div className="text-sm space-y-1">
            <a href="tel:9058446929" className="block hover:text-white">905-844-6929</a>
            <a href="tel:8557751140" className="block hover:text-white">855-775-1140</a>
            <a href="mailto:info@blackmtdigital.com" className="block hover:text-white">info@blackmtdigital.com</a>
          </div>
        </div>

        <FooterCol title="AI Services" links={[
          { to: "/services/ai-customer-service-rep", label: "AI Customer Service Rep" },
          { to: "/services/ai-receptionist", label: "AI Receptionist" },
        ]} />
        <FooterCol title="Security" links={[
          { to: "/services/network-cyber-security", label: "Network & Cyber Security" },
          { to: "/services/physical-security", label: "Physical Security" },
        ]} />
        <FooterCol title="Voice & Connectivity" links={[
          { to: "/services/ucaas", label: "UCaaS" },
          { to: "/services/cx", label: "CX" },
          { to: "/services/business-broadband", label: "Business Broadband" },
          { to: "/services/sd-wan", label: "SD-WAN" },
          { to: "/services/data-cabling", label: "Data Cabling" },
        ]} />
        <FooterCol title="Company" links={[
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
          { to: "/privacy", label: "Privacy" },
          { to: "/terms", label: "Terms" },
        ]} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between text-xs text-white/70">
          <div>© {new Date().getFullYear()} Black Mountain Digital. All rights reserved.</div>
          <div>Serving businesses across Ontario and Canada.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-white/70 font-medium mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-white/70 hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
