export function DiplomaScroll({ className = "h-8 w-8" }: { className?: string }) {
  return <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M10 13h28v23H10z" className="fill-card stroke-gold" strokeWidth="1.5" />
    <path d="M10 13c-5 0-5 8 0 8M38 28c5 0 5 8 0 8M10 36h28" className="stroke-gold" strokeWidth="1.5" />
    <path d="M21 13h6v23h-6z" className="fill-primary" />
    <path d="M24 23c-13-12-15 6 0 2 15 4 13-14 0-2Z" className="fill-secondary stroke-primary" strokeWidth="2" />
    <path d="m23 25-6 11 6-3 2 3 1-11" className="fill-primary" />
  </svg>;
}