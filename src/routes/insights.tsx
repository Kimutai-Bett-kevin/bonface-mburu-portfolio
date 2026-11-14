import { createFileRoute, Link } from "@tanstack/react-router";
import { insights } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/insights")({
  head: () => seo("Insights", "Articles on accounting, financial management, tax compliance and business performance."),
  component: Insights,
});

function Insights() {
  const [lead, ...rest] = insights;
  return (
    <>
      <PageHeader eyebrow="Professional insights" title={<>Notes on finance, <em className="text-primary">performance</em> and practice.</>} />
      <section className="container-x py-24">
        {!lead ? (
          <div className="mx-auto max-w-xl border-y border-border py-16 text-center">
            <p className="eyebrow">Coming soon</p>
            <p className="mt-4 font-display text-3xl text-primary-deep">The first articles are being written.</p>
            <p className="mt-4 text-muted-foreground">Expect practical perspectives on accounting, tax and compliance, and financial management.</p>
            <Link to="/contact" className="btn-line mt-8">Suggest a topic</Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <article className="border-b border-border pb-10">
              <p className="eyebrow">{lead.category} · {lead.date}</p>
              <h2 className="mt-4 text-5xl leading-tight text-primary-deep">{lead.title}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{lead.excerpt}</p>
            </article>
            <div className="divide-y divide-border">
              {rest.map((a) => (
                <article key={a.slug} className="py-6 first:pt-0">
                  <p className="eyebrow">{a.category} · {a.date}</p>
                  <h3 className="mt-2 text-2xl text-primary-deep">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
