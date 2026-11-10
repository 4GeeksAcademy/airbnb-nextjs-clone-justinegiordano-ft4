import type { ListingCategory } from "@/types/property";
import { Icon } from "@/components/Icon";

type CategoryRailProps = {
  categories: ListingCategory[];
  activeCategory: ListingCategory["value"];
  onSelect: (category: ListingCategory["value"]) => void;
};

export const CategoryRail = ({
  categories,
  activeCategory,
  onSelect,
}: CategoryRailProps) => (
  <nav aria-label="Property categories" className="no-scrollbar flex gap-3 overflow-x-auto py-4">
    {categories.map((category) => {
      const active = activeCategory === category.value;
      return (
        <button
          key={category.value}
          type="button"
          aria-pressed={active}
          onClick={() => onSelect(category.value)}
          className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
            active
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
          }`}
        >
          <Icon name={category.icon} size={17} />
          {category.label}
        </button>
      );
    })}
  </nav>
);