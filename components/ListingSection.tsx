import { ListingGrid } from "@/components/ListingGrid";
import type { Property } from "@/types/property";

type ListingSectionProps = {
  title: string;
  listings: Property[];
  isLoading?: boolean;
};

export const ListingSection = ({ title, listings, isLoading }: ListingSectionProps) => (
  <section className="space-y-5">
    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
    <ListingGrid listings={listings} isLoading={isLoading} />
  </section>
);