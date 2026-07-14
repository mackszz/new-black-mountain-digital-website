import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.9", changefreq: "monthly" as const },
  { path: "/services/ai-customer-service-rep", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/ai-receptionist", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/network-cyber-security", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/physical-security", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/ucaas", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/cx", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/business-broadband", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/sd-wan", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services/data-cabling", priority: "0.8", changefreq: "monthly" as const },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" as const },
  { path: "/terms", priority: "0.3", changefreq: "yearly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = routes.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
