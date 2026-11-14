import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, BadgeCheck, Users, Presentation } from "lucide-react";
import { credentials, type Credential } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { Ph } from "@/components/site/Ph";
import { seo } from "@/lib/seo";
import graduationScroll from "@/assets/graduation-scroll.jpg";
import { DiplomaScroll } from "@/components/site/DiplomaScroll";

export const Route = createFileRoute("/credentials")({
  head: () => seo("Credentials", "Academic qualifications, professional certifications, memberships and training."),
  component: Credentials,
});

const groups: { kind: Credential["kind"]; label: string; Icon: typeof Award }[] = [
  { kind: "academic", label: "Academic qualifications", Icon: GraduationCap },
  { kind: "professional", label: "Professional certifications", Icon: BadgeCheck },
  { kind: "membership", label: "Professional memberships", Icon: Users },
  { kind: "training", label: "Training, workshops & conferences", Icon: Presentation },
  { kind: "award", label: "Awards & recognition", Icon: Award },
];

function Credentials() {
  return (
    <>
      <PageHeader eyebrow="Education & qualifications" title={<>A foundation in accounting.<br /><em>A commitment to learning.</em></>} />
      <section className="container-x space-y-20 py-24">
        <img src={graduationScroll} width={1536} height={1024} alt="Graduation diploma tied with a ribbon beside a cap and books" className="credentials-cover" loading="lazy" />
        {groups.map(({ kind, label, Icon }) => {
          const items = credentials.filter((c) => c.kind === kind);
          if (!items.length) return null;
          return (
            <div key={kind}>
              <h2 className="flex items-center gap-3 text-3xl text-primary-deep"><Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />{label}</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((c) => (
                  <article key={c.name} className="card-quiet p-8">
                    <div className="mb-6 flex items-center justify-between gap-3">
                    <DiplomaScroll className="h-10 w-10 shrink-0" />
                    <span className={`px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] ${c.status === "completed" ? "bg-primary text-primary-foreground" : "border border-gold text-primary"}`}>
                      {c.status === "completed" ? "Completed" : "In progress"}
                    </span>
                    </div>
                    {c.imageUrl && <img src={c.imageUrl} alt={`Certificate: ${c.name}`} loading="lazy" className="mb-6 aspect-[4/3] w-full object-cover" />}
                    <p className="font-display text-lg text-gold"><Ph>{c.year}</Ph></p>
                    <h3 className="mt-3 text-2xl leading-snug text-primary-deep"><Ph>{c.name}</Ph></h3>
                    <p className="mt-2 text-sm text-muted-foreground"><Ph>{c.issuer}</Ph></p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
