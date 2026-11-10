import { Icon } from "@/components/Icon";
import type { PropertyAmenity } from "@/types/property";

type AmenitiesListProps = {
  amenities: PropertyAmenity[];
};

export const AmenitiesList = ({ amenities }: AmenitiesListProps) => (
  <section className="border-b border-neutral-200 py-7">
    <h2 className="text-2xl font-semibold tracking-tight">What this place offers</h2>
    <ul className="mt-5 grid gap-5 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li key={amenity.label} className="flex items-center gap-4 text-neutral-700">
          <Icon name={amenity.icon} size={22} strokeWidth={1.7} />
          {amenity.label}
        </li>
      ))}
    </ul>
  </section>
);