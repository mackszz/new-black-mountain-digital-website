import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Black Mountain Digital" },
      { name: "description", content: "Terms governing use of the Black Mountain Digital website and marketing materials." },
      { property: "og:title", content: "Terms of Use | Black Mountain Digital" },
      { property: "og:description", content: "Terms governing use of the Black Mountain Digital website and marketing materials." },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Use | Black Mountain Digital" },
      { name: "twitter:description", content: "Terms governing use of the Black Mountain Digital website and marketing materials." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <PageShell>
      <article className="container-page py-16 max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-peak-deep mb-4">Legal</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Terms of Use</h1>
        <p className="mt-4 text-sm text-slate-body">Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-10 space-y-6 text-slate-body">
          <p>These terms govern your use of the Black Mountain Digital website. By accessing the site, you agree to them. Services engagements are governed by separate written agreements between Black Mountain Digital and the client.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Content</h2>
          <p>All content on this site is the property of Black Mountain Digital or its licensors and is provided for informational purposes. You may not reproduce, distribute, or create derivative works without written permission.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">No warranty</h2>
          <p>The site is provided "as is." We make no warranties about accuracy, completeness, or availability. Any reliance on site content is at your own risk.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Limitation of liability</h2>
          <p>To the maximum extent permitted by Canadian law, Black Mountain Digital is not liable for any indirect, incidental, or consequential damages arising from your use of this site.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Governing law</h2>
          <p>These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>

          <h2 className="text-2xl font-display font-semibold text-ink pt-4">Contact</h2>
          <p>Questions: <a href="mailto:info@blackmtdigital.com" className="text-peak-deep">info@blackmtdigital.com</a>.</p>
        </div>
      </article>
    </PageShell>
  ),
});
