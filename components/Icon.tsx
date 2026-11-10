import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Building2,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  Heart,
  House,
  LoaderCircle,
  Map,
  MapPin,
  Minus,
  PawPrint,
  Plus,
  Search,
  Share,
  SlidersHorizontal,
  Sparkles,
  Star,
  TentTree,
  Users,
  Utensils,
  Wifi,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  apartment: Building2,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bed: BedDouble,
  calendar: CalendarDays,
  car: CarFront,
  check: Check,
  chevronDown: ChevronDown,
  cabin: TentTree,
  heart: Heart,
  home: House,
  kitchen: Utensils,
  loader: LoaderCircle,
  map: Map,
  mapPin: MapPin,
  minus: Minus,
  pets: PawPrint,
  plus: Plus,
  search: Search,
  share: Share,
  sliders: SlidersHorizontal,
  sparkle: Sparkles,
  star: Star,
  users: Users,
  wifi: Wifi,
  workspace: BriefcaseBusiness,
};

type IconProps = {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = icons[name] ?? Search;
  return <IconComponent aria-hidden="true" {...props} />;
};