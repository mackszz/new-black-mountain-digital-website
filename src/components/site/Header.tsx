import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  {
    label: "AI Services",
    items: [
      { to: "/services/ai-customer-service-rep", label: "AI Customer Service Rep", desc: "24/7 automated support agents" },
      { to: "/services/ai-receptionist", label: "AI Receptionist", desc: "Answer, route, and qualify every call" },
    ],
  },
  {
    label: "Security",
    items: [
      { to: "/services/network-cyber-security", label: "Network & Cyber Security", desc: "Firewall, endpoint, threat monitoring" },
      { to: "/services/physical-security", label: "Physical Security", desc: "Access control and video surveillance" },
    ],
  },
  {
    label: "Voice",
    items: [
      { to: "/services/ucaas", label: "UCaaS", desc: "Unified voice, video, and messaging" },
      { to: "/services/cx", label: "CX", desc: "Contact-center and customer experience" },
    ],
  },
  {
    label: "Connectivity",
    items: [
      { to: "/services/business-broadband", label: "Business Broadband", desc: "Carrier-grade internet, SLA-backed" },
      { to: "/services/sd-wan", label: "SD-WAN", desc: "Multi-site network orchestration" },
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Black Mountain Digital home">
          <Logo className="h-16 w-auto" priority />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {nav.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(group.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-ink">
                {group.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openMenu === group.label && (
                <div className="absolute left-0 top-full w-80 pt-2">
                  <div className="rounded-md border border-border bg-card p-2 shadow-lg">
                    {group.items.map((it) => (
                      <Link
                        key={it.to}
                        to={it.to}
                        className="block rounded px-3 py-2 hover:bg-stone"
                      >
                        <div className="text-sm font-medium text-ink">{it.label}</div>
                        <div className="text-xs text-slate-body">{it.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/services/data-cabling" className="px-3 py-2 text-sm font-medium text-charcoal hover:text-ink">
            Data Cabling
          </Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-charcoal hover:text-ink">
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:9058446929" className="text-sm font-medium text-slate-body hover:text-ink">
            905-844-6929
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-charcoal transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-4">
            {nav.map((group) => (
              <div key={group.label}>
                <div className="text-xs uppercase tracking-wider text-slate-body font-medium mb-2">{group.label}</div>
                <div className="space-y-1">
                  {group.items.map((it) => (
                    <Link key={it.to} to={it.to} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">
                      {it.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-border space-y-1">
              <Link to="/services/data-cabling" onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">Data Cabling</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">About</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="block py-1.5 text-sm text-ink">Contact</Link>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-white"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
