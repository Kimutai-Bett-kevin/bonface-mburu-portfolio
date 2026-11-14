import { createFileRoute } from "@tanstack/react-router";
import { expertise } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { expertiseIcons } from "@/components/site/icons";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/expertise")({
  head: () => seo("Expertise", "Areas of accounting and finance expertise: reporting, tax, budgeting, controls and more."),
  component: Expertise,
});

function Expertise() {
  const areas = expertise.filter((e) => e.confirmed);
  return (
    <>
      <PageHeader eyebrow="Professional expertise" title={<>Capabilities that keep the numbers <em className="text-primary">trustworthy</em>.</>} intro="Core areas of financial, audit and business-intelligence practice." />
      <section className="container-x py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => {
            const Icon = expertiseIcons[a.key];
            return (
              <article key={a.key} className="card-quiet p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <span className="font-display text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-8 text-2xl text-primary-deep">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
