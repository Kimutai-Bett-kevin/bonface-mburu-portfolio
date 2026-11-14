import { createFileRoute } from "@tanstack/react-router";
import { experience } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { Ph } from "@/components/site/Ph";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => seo("Experience", "Career timeline: roles, responsibilities, contributions and systems used."),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Professional experience" title={<>A career of growing <em className="text-primary">responsibility</em>.</>} />
      <section className="container-x py-24">
        <ol className="relative border-l border-gold/60 md:ml-40">
          {experience.map((r, i) => (
            <li key={i} className="relative pb-20 pl-10 last:pb-0">
              <span className="absolute -left-[6px] top-2 h-[11px] w-[11px] rotate-45 bg-primary" aria-hidden />
              <p className="eyebrow md:absolute md:-left-40 md:top-1.5 md:w-32 md:text-right"><Ph>{r.period}</Ph></p>
              <h2 className="mt-2 text-3xl text-primary-deep md:mt-0"><Ph>{r.title}</Ph></h2>
              <p className="mt-1 text-muted-foreground"><Ph>{r.organisation}</Ph></p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <List title="Key responsibilities" items={r.responsibilities} />
                <List title="Contributions & achievements" items={r.contributions} />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {r.systems.map((s, j) => <span key={j} className="bg-secondary px-3 py-1 text-xs text-secondary-foreground"><Ph>{s}</Ph></span>)}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((it, i) => <li key={i} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-gold" /><Ph>{it}</Ph></li>)}
      </ul>
    </div>
  );
}
