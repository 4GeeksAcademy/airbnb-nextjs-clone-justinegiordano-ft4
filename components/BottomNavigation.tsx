import Link from "next/link";
import { Icon } from "@/components/Icon";

type BottomNavigationProps = {
  active: "explore" | "wishlists" | "trips" | "messages" | "profile";
};

const items = [
  { id: "explore", label: "Explore", icon: "search", href: "/" },
  { id: "wishlists", label: "Wishlists", icon: "heart", href: "/catalog" },
  { id: "trips", label: "Trips", icon: "map", href: "/catalog" },
  { id: "messages", label: "Messages", icon: "sparkle", href: "/catalog" },
  { id: "profile", label: "Profile", icon: "users", href: "/catalog" },
] as const;

export const BottomNavigation = ({ active }: BottomNavigationProps) => (
  <nav aria-label="Main navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur md:hidden">
    <ul className="mx-auto flex max-w-lg items-center justify-around">
      {items.map((item) => {
        const selected = active === item.id;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              aria-current={selected ? "page" : undefined}
              className={`flex min-w-[58px] flex-col items-center gap-1 py-1 text-[11px] ${selected ? "font-semibold text-rose-600" : "text-neutral-500"}`}
            >
              <Icon name={item.icon} size={23} strokeWidth={selected ? 2 : 1.7} />
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);