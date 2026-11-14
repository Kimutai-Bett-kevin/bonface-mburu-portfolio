import { createFileRoute } from "@tanstack/react-router";
import { about, profile, credentials, experience } from "@/content/profile";
import { PageHeader, SectionTitle } from "@/components/site/PageHeader";
import { Portrait } from "@/components/site/Monogram";
import { Ph } from "@/components/site/Ph";
import { seo } from "@/lib/seo";
import { DiplomaScroll } from "@/components/site/DiplomaScroll";

export const Route = createFileRoute("/about")({
  head: () => seo("About", "Biography, career journey, qualifications and professional values."),
  component: About,
});

function About() {
  const academic = credentials.filter((c) => c.kind === "academic");
  const professional = credentials.filter((c) => c.kind === "professional");
  return (
    <>
      <PageHeader eyebrow="About me" title={<>A finance professional built on <em className="text-primary">rigour</em> and <em className="text-primary">judgement</em>.</>} />
      <section className="container-x grid gap-16 py-24 lg:grid-cols-[1fr_1.6fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="aspect-[4/5] overflow-hidden shadow-soft"><Portrait /></div>
          <dl className="mt-8 space-y-4 text-sm">
            <div><dt className="eyebrow">Based in</dt><dd className="mt-1"><Ph>{profile.location}</Ph></dd></div>
            <div><dt className="eyebrow">Designation</dt><dd className="mt-1"><Ph>{profile.credentialsLine}</Ph></dd></div>
            <div><dt className="eyebrow">Experience</dt><dd className="mt-1">{experience.length} roles listed</dd></div>
          </dl>
        </aside>
        <div className="space-y-16">
          <p className="font-display text-3xl leading-snug text-primary-deep first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:leading-none first-letter:text-primary"><Ph>{about.introduction}</Ph></p>
          <Block title="Career journey" text={about.journey} />
          <div className="grid gap-10 md:grid-cols-2">
            <div><p className="eyebrow">Academic background</p><ul className="mt-4 space-y-3">{academic.map((c) => <li key={c.name}><DiplomaScroll className="mb-3 h-9 w-9" /><Ph>{c.name}</Ph><span className="block text-sm text-muted-foreground"><Ph>{c.issuer}</Ph></span></li>)}</ul></div>
            <div><p className="eyebrow">Professional qualifications</p><ul className="mt-4 space-y-3">{professional.map((c) => <li key={c.name}><Ph>{c.name}</Ph><span className="block text-sm text-muted-foreground">{c.status === "in-progress" ? "In progress" : "Completed"}</span></li>)}</ul></div>
          </div>
          <Block title="Leadership philosophy" text={about.philosophy} />
          <div>
            <SectionTitle eyebrow="Values" title="What I stand for" />
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {about.values.map((v, i) => (
                <div key={v.title} className="bg-card p-8">
                  <span className="font-display text-lg text-gold">0{i + 1}</span>
                  <h3 className="mt-3 text-2xl text-primary-deep">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground"><Ph>{v.text}</Ph></p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Areas of professional interest</p>
            <ul className="mt-5 flex flex-wrap gap-3">{about.interests.map((i) => <li key={i} className="border border-border px-4 py-2 text-sm"><Ph>{i}</Ph></li>)}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t border-border pt-8">
      <p className="eyebrow">{title}</p>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground"><Ph>{text}</Ph></p>
    </div>
  );
}
