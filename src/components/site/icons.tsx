import {
  BookOpenCheck, PieChart, Landmark, CalendarRange, LineChart, Scale,
  ShieldCheck, ClipboardCheck, Users, Server, Sigma, Compass, type LucideIcon,
} from "lucide-react";
import type { ExpertiseKey } from "@/content/profile";

export const expertiseIcons: Record<ExpertiseKey, LucideIcon> = {
  reporting: BookOpenCheck, management: PieChart, tax: Landmark, budgeting: CalendarRange,
  fpa: LineChart, cost: Scale, controls: ShieldCheck, audit: ClipboardCheck,
  payroll: Users, erp: Server, modelling: Sigma, advisory: Compass,
};
