import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { PageHeader } from "@/components/site/PageHeader";
import { Ph } from "@/components/site/Ph";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Get in touch about roles, advisory work or professional collaboration."),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Your message should be at least 10 characters").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree so I can reply to you" }) }),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const c = profile.contact;
  const channels = [
    c.email && { Icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    c.phone && { Icon: Phone, label: "Phone", value: c.phone, href: `tel:${c.phone}` },
    c.whatsapp && { Icon: MessageCircle, label: "WhatsApp", value: "Message on WhatsApp", href: `https://wa.me/${c.whatsapp}` },
    c.linkedin && { Icon: Linkedin, label: "LinkedIn", value: "View profile", href: c.linkedin },
  ].filter(Boolean) as { Icon: typeof Mail; label: string; value: string; href: string }[];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = schema.safeParse({ ...Object.fromEntries(fd), consent: fd.get("consent") === "on" });
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    if (!c.email) {
      toast.error("Messages can't be delivered yet — a contact email hasn't been set up.");
      return;
    }
    const body = `${r.data.message}\n\n— ${r.data.name} (${r.data.email})`;
    window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(r.data.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Your email app has opened with your message ready to send.");
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let's start a <em className="text-primary">conversation</em>.</>} intro="For roles, advisory engagements or professional collaboration." />
      <section className="container-x grid gap-16 py-24 lg:grid-cols-[1fr_1.5fr]">
        <aside className="space-y-6">
          <div className="flex items-start gap-4"><MapPin className="mt-1 h-4 w-4 text-gold" /><div><p className="eyebrow">Location</p><p className="mt-1"><Ph>{profile.location}</Ph></p></div></div>
          {channels.map(({ Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 hover:text-primary">
              <Icon className="mt-1 h-4 w-4 text-gold" /><div><p className="eyebrow">{label}</p><p className="mt-1">{value}</p></div>
            </a>
          ))}
          {channels.length === 0 && <p className="placeholder-mark inline-block text-sm">[Email, phone, WhatsApp and LinkedIn will appear here once provided]</p>}
        </aside>
        <form onSubmit={onSubmit} noValidate className="space-y-6 border border-border bg-card p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Field name="name" label="Full name" error={errors.name} autoComplete="name" />
            <Field name="email" label="Email address" type="email" error={errors.email} autoComplete="email" />
          </div>
          <Field name="subject" label="Subject" error={errors.subject} />
          <Field name="message" label="Message" textarea error={errors.message} />
          <div>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-primary" aria-invalid={!!errors.consent} />
              I agree that the details I provide are used only to respond to this enquiry.
            </label>
            {errors.consent && <p role="alert" className="mt-2 text-sm text-destructive">{errors.consent}</p>}
          </div>
          <p className="text-xs text-muted-foreground">Privacy: your information is never shared with third parties or added to mailing lists.</p>
          <Button type="submit" size="lg">Send message</Button>
          {sent && <p role="status" className="text-sm text-primary">Thank you — please send the email that opened to complete your message.</p>}
        </form>
      </section>
    </>
  );
}

function Field({ name, label, error, textarea, ...rest }: { name: string; label: string; error?: string | undefined; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  const cls = `mt-2 w-full border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-gold ${error ? "border-destructive" : "border-input"}`;
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em]">{label}</label>
      {textarea ? <textarea id={name} name={name} rows={6} className={cls} aria-invalid={!!error} /> : <input id={name} name={name} className={cls} aria-invalid={!!error} {...rest} />}
      {error && <p role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
