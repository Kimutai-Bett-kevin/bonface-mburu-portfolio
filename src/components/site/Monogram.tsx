import { profile } from "@/content/profile";

export function Monogram({ size = "sm" }: { size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-24 w-24 text-4xl" : "h-10 w-10 text-lg";
  return (
    <span className={`inline-flex ${cls} items-center justify-center border border-gold font-display italic text-gold`}>
      {profile.initials}
    </span>
  );
}

export function Portrait() {
  if (profile.photoUrl) {
    return <img src={profile.photoUrl} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />;
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-wine text-primary-foreground">
      <span className="font-display text-8xl italic text-gold">{profile.initials}</span>
      <span className="eyebrow text-gold">Professional portrait to be supplied</span>
    </div>
  );
}
