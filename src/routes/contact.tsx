import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Black Mountain Digital | Talk to a Canadian Expert" },
      { name: "description", content: "Reach a Canadian technology specialist for AI, security, voice, connectivity, or cabling. Call, email, or send us a message — we reply within one business day." },
      { property: "og:title", content: "Contact Black Mountain Digital | Talk to a Canadian Expert" },
      { property: "og:description", content: "Reach a Canadian technology specialist. Call, email, or send a message — we respond within one business day, with 24/7 support for existing clients." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const services = [
  "AI Customer Service Rep",
  "AI Receptionist",
  "Network & Cyber Security",
  "Physical Security",
  "UCaaS",
  "CX / Contact Center",
  "Business Broadband",
  "SD-WAN",
  "Data Cabling",
  "Not sure yet",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    if (!(data.get("name") as string)?.trim()) errs.name = "Name is required.";
    if (!(data.get("email") as string)?.trim()) errs.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(data.get("email") as string)) errs.email = "Enter a valid email.";
    if (!(data.get("message") as string)?.trim()) errs.message = "Tell us a little about what you need.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  return (
    <PageShell>
      <section className="container-page pt-16 md:pt-24 pb-12">
        <div className="text-xs uppercase tracking-widest text-peak mb-5">Contact</div>
        <h1 className="text-4xl md:text-6xl font-display font-bold max-w-3xl leading-[1.05]">
          Tell us where technology is holding you back.
        </h1>
        <p className="mt-6 text-lg text-slate-body max-w-2xl">
          A Canadian specialist will respond within one business day. Urgent? Call us directly — we're staffed 24/7 for existing clients and business hours for new inquiries.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-card border border-border rounded-md p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-peak/10">
                  <Check className="h-6 w-6 text-peak" />
                </div>
                <h2 className="mt-6 text-2xl font-display font-semibold">Message received.</h2>
                <p className="mt-3 text-slate-body max-w-md mx-auto">
                  A specialist will reach out within one business day. If it's urgent, call us at{" "}
                  <a href="tel:9058446929" className="text-peak font-medium">905-844-6929</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required error={errors.name} />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required error={errors.email} />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">Service of interest</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-peak"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                    How can we help? <span className="text-slate-body">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    required
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-peak"
                    placeholder="A few sentences on what you're trying to solve — or what you'd like to hear more about."
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-charcoal transition-colors"
                >
                  Send message
                </button>
                <p className="text-xs text-slate-body">
                  By submitting this form you consent to being contacted about your inquiry. We don't share your details.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-peak mb-3">Direct lines</div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-peak mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-body">Primary</div>
                    <a href="tel:9058446929" className="font-medium text-ink hover:text-peak">905-844-6929</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-peak mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-body">Toll-free</div>
                    <a href="tel:8557751140" className="font-medium text-ink hover:text-peak">855-775-1140</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 text-peak mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-body">Email</div>
                    <a href="mailto:info@blackmtdigital.com" className="font-medium text-ink hover:text-peak">info@blackmtdigital.com</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 text-peak mt-1 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-body">Serving</div>
                    <div className="text-ink">Ontario &amp; across Canada</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-stone/60 border border-border rounded-md p-6">
              <div className="text-xs uppercase tracking-widest text-peak mb-2">Support hours</div>
              <p className="text-sm text-slate-body">
                <span className="text-ink font-medium">New inquiries:</span> Mon–Fri, 8am–6pm ET.<br />
                <span className="text-ink font-medium">Existing clients:</span> 24/7 monitored support.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", required, error,
}: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-slate-body">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-peak"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
