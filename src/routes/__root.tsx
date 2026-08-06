import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs uppercase tracking-widest text-peak-deep">404</div>
        <h1 className="mt-3 text-4xl font-display font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-slate-body">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-charcoal"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display font-semibold text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-slate-body">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-charcoal"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm font-medium text-ink hover:bg-stone">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Black Mountain Digital | Canadian Technology Partner Since 1996" },
      {
        name: "description",
        content:
          "AI, security, voice, connectivity, and structured cabling for Canadian SMBs and mid-market businesses — one accountable partner since 1996.",
      },
      { name: "author", content: "Black Mountain Digital" },
      { property: "og:site_name", content: "Black Mountain Digital" },
      { property: "og:title", content: "Black Mountain Digital | Canadian Technology Partner Since 1996" },
      {
        property: "og:description",
        content:
          "AI, security, voice, connectivity, and structured cabling for Canadian SMBs and mid-market businesses — one accountable partner since 1996.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Black Mountain Digital | Canadian Technology Partner Since 1996" },
      {
        name: "twitter:description",
        content:
          "AI, security, voice, connectivity, and structured cabling for Canadian SMBs and mid-market businesses — one accountable partner since 1996.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Black Mountain Digital",
          foundingDate: "1996",
          areaServed: { "@type": "Country", name: "Canada" },
          telephone: "+1-905-844-6929",
          email: "info@blackmtdigital.com",
        }),

      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
