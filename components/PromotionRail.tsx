import Link from "next/link";
import { Icon } from "@/components/Icon";

const promotions = [
  { title: "A little more room to unwind", action: "Browse homes", icon: "sparkle" },
  { title: "Find a stay close to the city", action: "See Detroit stays", icon: "mapPin" },
];

export const PromotionRail = () => (
  <section aria-label="Stay inspiration" className="flex snap-x gap-4 overflow-x-auto pb-2">
    {promotions.map((promotion) => (
      <article
        key={promotion.title}
        className="flex min-w-[88%] snap-start items-center justify-between gap-4 rounded-[26px] border border-neutral-100 bg-gradient-to-br from-white to-rose-50 p-5 shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:min-w-[48%]"
      >
        <div>
          <h3 className="max-w-[250px] text-lg font-semibold leading-snug">{promotion.title}</h3>
          <Link href="/catalog" className="mt-4 inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium hover:bg-neutral-200">
            {promotion.action}
          </Link>
        </div>
        <Icon name={promotion.icon} size={38} className="shrink-0 text-rose-500" />
      </article>
    ))}
  </section>
);