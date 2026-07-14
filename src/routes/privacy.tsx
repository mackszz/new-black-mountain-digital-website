import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Black Mountain Digital" },
      { name: "description", content: "How Black Mountain Digital collects, uses, and protects personal information under Canadian privacy law (PIPEDA)." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <PageShell>
      <article className="container-page py-16 max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-peak mb-4">Legal</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-body">Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-slate mt-10 space-y-6 text-slate-body">
          <p>Black Mountain Digital ("we", "us", "our") respects your privacy. This policy describes what personal information we collect through this website and our services, how we use it, and your rights under Canadian privacy law, including the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA).</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">What we collect</h2>
          <p>When you submit a contact form, subscribe to updates, or engage us as a client, we may collect: name, business email, phone number, company name, and details you provide about your inquiry. Our website also logs standard technical information (IP address, browser, pages viewed) via server logs and privacy-respecting analytics.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">How we use it</h2>
          <p>We use your information to respond to inquiries, deliver services you've engaged us for, communicate about your account, and improve our website. We do not sell your personal information.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Sharing</h2>
          <p>We share information with vendors and subprocessors that help us deliver services (e.g., hosting, ticketing, email) under written agreements requiring confidentiality and appropriate safeguards. We may disclose information where required by Canadian law.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Retention</h2>
          <p>We retain personal information only as long as needed for the purposes described above or as required by law.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Your rights</h2>
          <p>You can request access to, correction of, or deletion of your personal information by contacting us at <a href="mailto:info@blackmtdigital.com" className="text-peak">info@blackmtdigital.com</a>.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Contact</h2>
          <p>Questions about this policy: <a href="mailto:info@blackmtdigital.com" className="text-peak">info@blackmtdigital.com</a> or 905-844-6929.</p>
        </div>
      </article>
    </PageShell>
  ),
});
