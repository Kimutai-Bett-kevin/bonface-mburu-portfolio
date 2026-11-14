import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile, navigation, siteCopy } from "@/content/profile";
import { Monogram } from "./Monogram";
import { Button } from "@/components/ui/button";
export const nav = navigation;
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="mockup-topbar"><div className="container-x flex min-h-9 items-center justify-between gap-4 text-[10px]"><span>{siteCopy.topbar}</span></div></div>
    <header className="mockup-header sticky top-0 z-40">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}><Monogram /><span className="flex flex-col"><span className="text-xs font-semibold uppercase">{profile.shortName}</span><span className="mt-1 text-[9px] uppercase text-muted-foreground">{profile.title}</span></span></Link>
        <nav aria-label="Main" className="hidden items-center gap-4 xl:flex">{nav.map(n => <Link key={n.to} to={n.to} className="text-[11px] font-semibold hover:text-primary" activeProps={{className:"text-primary underline"}}>{n.label}</Link>)}</nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden text-xs sm:inline-flex"><Link to="/contact">{siteCopy.connect} ↗</Link></Button>
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav aria-label="Mobile" className="border-t border-border bg-background xl:hidden"><div className="container-x flex flex-col py-4">{[...nav,{to:"/contact",label:siteCopy.contact} as const].map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm text-primary-deep last:border-0">{n.label}</Link>)}</div></nav>}
    </header>
  </>;
}
export function SiteFooter() {
  return <footer className="mockup-footer border-t border-border"><div className="container-x flex flex-wrap items-center justify-between gap-5 py-8"><Link to="/" className="font-display text-xl text-primary">{profile.name}</Link><p className="text-xs">{siteCopy.footer}</p><p className="text-xs">{profile.shortName}</p></div></footer>;
}
