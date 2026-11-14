import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies } from "@/content/profile";
import { Ph } from "@/components/site/Ph";
import { ReportFrame } from "@/components/site/ReportFrame";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(loaderData.title.replace(/[[\]]/g, ""), loaderData.summary.replace(/[[\]]/g, ""))
      : { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-5xl text-primary-deep">Case study not found</h1>
      <Link to="/projects" className="btn-wine mt-8">Back to case studies</Link>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const c = Route.useLoaderData();
  const rows: [string, React.ReactNode][] = [
    ["Business context", <Ph>{c.context}</Ph>],
    ["The challenge", <Ph>{c.challenge}</Ph>],
    ["Approach & methodology", <Ph>{c.approach}</Ph>],
    ["Actions implemented", <ul className="space-y-2">{c.actions.map((a, i) => <li key={i}>— <Ph>{a}</Ph></li>)}</ul>],
    ["Lessons & business value", <Ph>{c.value}</Ph>],
  ];
  return (
    <article>
      <header className="bg-wine text-primary-foreground">
        <div className="container-x py-20 md:py-28">
          <Link to="/projects" className="text-sm text-gold-soft hover:underline">← All case studies</Link>
          <p className="eyebrow mt-10 text-gold-soft">{c.category}</p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-6xl"><Ph>{c.title}</Ph></h1>
          <p className="mt-6 max-w-2xl text-lg opacity-85"><Ph>{c.summary}</Ph></p>
        </div>
      </header>
      <div className="container-x grid gap-16 py-24 lg:grid-cols-[2fr_1fr]">
        <div className="divide-y divide-border">
          {rows.map(([t, body]) => (
            <section key={t} className="grid gap-4 py-10 first:pt-0 md:grid-cols-[12rem_1fr]">
              <h2 className="eyebrow pt-1">{t}</h2>
              <div className="text-lg leading-relaxed text-muted-foreground">{body}</div>
            </section>
          ))}
        </div>
        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <ReportFrame statement={c.statement} entity="Entity name withheld" lines={c.lines} />
          <div className="border-t-2 border-primary bg-card p-8">
            <p className="eyebrow">Measurable outcomes</p>
            <ul className="mt-5 space-y-4">{c.outcomes.map((o, i) => <li key={i} className="font-sans text-xl font-semibold text-gold"><Ph>{o}</Ph></li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Tools & systems</p>
            <div className="mt-4 flex flex-wrap gap-2">{c.tools.map((t, i) => <span key={i} className="bg-secondary px-3 py-1 text-xs"><Ph>{t}</Ph></span>)}</div>
          </div>
        </aside>
      </div>
    </article>
  );
}
