import { createFileRoute } from "@tanstack/react-router";
import { skills } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { Ph } from "@/components/site/Ph";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => seo("Skills & Technology", "Accounting systems, Excel, business intelligence, reporting and automation tools."),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Skills & technology" title={<>The tools behind <em className="text-primary">reliable numbers</em>.</>} />
      <section className="container-x py-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.category} className="bg-card p-8">
              <h2 className="text-2xl text-primary-deep">{s.category}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {s.items.map((it, i) => <li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rotate-45 bg-gold" /><Ph>{it}</Ph></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
