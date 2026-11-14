import type { ReactNode } from "react";

/** Highlights unreplaced placeholder text (anything wrapped in [brackets]). */
export function Ph({ children }: { children: ReactNode }) {
  if (typeof children === "string" && /\[.*\]/.test(children)) {
    return <span className="placeholder-mark" title="Placeholder — replace with confirmed information">{children}</span>;
  }
  return <>{children}</>;
}
