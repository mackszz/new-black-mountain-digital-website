export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="border-t border-border bg-background">
      <div className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-peak mb-3">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Common questions</h2>
            <p className="mt-4 text-slate-body">Answers to what buyers ask us most. Have a different question? We're a phone call away.</p>
          </div>
          <div className="lg:col-span-2 divide-y divide-border">
            {items.map((it, i) => (
              <details key={i} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <h3 className="text-lg font-medium text-ink">{it.q}</h3>
                  <span className="mt-1 text-peak text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-slate-body">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
