import {
  BadgeCheck,
  Brain,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileWarning,
  HeartHandshake,
  PhoneCall,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Users,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/site";

const map = {
  brain: Brain,
  shield: ShieldCheck,
  badge: BadgeCheck,
  file: FileWarning,
  phone: PhoneCall,
  trend: TrendingUp,
  clipboard: ClipboardCheck,
  users: Users,
  building: Building2,
  heart: HeartHandshake,
  stethoscope: Stethoscope,
  calendar: CalendarCheck,
  search: Search,
  settings: Settings2,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp strokeWidth={1.6} aria-hidden="true" {...props} />;
}
