import { Icon } from "@/components/Icon";
import type { Property } from "@/types/property";

type RoomOverviewProps = {
  property: Property;
};

export const RoomOverview = ({ property }: RoomOverviewProps) => (
  <section className="border-b border-neutral-200 py-7 text-center sm:py-9">
    <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
      {property.title}
    </h1>
    <p className="mt-4 text-base text-neutral-500 sm:text-lg">
      Entire rental unit in {property.city}, Michigan
    </p>
    <p className="mt-1 text-sm text-neutral-500 sm:text-base">
      {property.maxGuests} guests · {property.bedroomCount} bedroom · {property.bedCount} bed · {property.bathCount} bath
    </p>
    <p className="mt-5 inline-flex items-center gap-2 text-sm">
      <Icon name="star" size={15} className="fill-neutral-900" />
      <span>{property.rating.toFixed(2)}</span>
      <span className="text-neutral-400">·</span>
      <span className="underline underline-offset-2">{property.reviewCount} reviews</span>
    </p>
  </section>
);