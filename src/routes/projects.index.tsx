import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { Ph } from "@/components/site/Ph";
import { ReportFrame } from "@/components/site/ReportFrame";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () => seo("Case Studies", "Accounting and finance case studies: the challenge, the approach and the outcome."),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader eyebrow="Projects & case studies" title={<>How I approach <em className="text-primary">business problems</em>.</>} intro="Selected examples of audit, reconciliation and performance-reporting work. Entity names are withheld for confidentiality." />
      <section className="container-x grid gap-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <Link key={c.slug} to="/projects/$slug" params={{ slug: c.slug }} className="card-quiet group flex flex-col p-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow">{c.category}</span>
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div className="mt-6"><ReportFrame statement={c.statement} entity="Entity name withheld" lines={c.lines} /></div>
            <h2 className="mt-4 text-2xl text-primary-deep"><Ph>{c.title}</Ph></h2>
            <p className="mt-3 text-sm text-muted-foreground"><Ph>{c.summary}</Ph></p>
            <span className="mt-auto pt-8 text-sm text-primary">Read case study →</span>
          </Link>
        ))}
      </section>
    </>
  );
}
