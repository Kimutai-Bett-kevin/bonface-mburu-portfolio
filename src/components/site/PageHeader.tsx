import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <header className="bg-secondary text-primary-deep">
      <div className="container-x py-20 md:py-28 fade-up">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] [&_em]:text-primary md:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">{intro}</p>}
      </div>
    </header>
  );
}

export function SectionTitle({ eyebrow, title, className = "" }: { eyebrow: string; title: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight text-primary-deep md:text-5xl">{title}</h2>
    </div>
  );
}
