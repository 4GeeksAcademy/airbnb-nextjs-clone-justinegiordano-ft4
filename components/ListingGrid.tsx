import { ListingCard } from "@/components/ListingCard";
import type { Property } from "@/types/property";

type ListingGridProps = {
  listings: Property[];
  isLoading?: boolean;
};

const ListingSkeleton = () => (
  <div className="animate-pulse" aria-hidden="true">
    <div className="aspect-[1.22] rounded-[22px] bg-neutral-200" />
    <div className="mt-4 h-4 w-3/4 rounded bg-neutral-200" />
    <div className="mt-2 h-3 w-1/2 rounded bg-neutral-100" />
    <div className="mt-2 h-3 w-1/3 rounded bg-neutral-100" />
  </div>
);

export const ListingGrid = ({ listings, isLoading = false }: ListingGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 xl:grid-cols-3" aria-label="Loading stays">
        {Array.from({ length: 4 }, (_, index) => <ListingSkeleton key={index} />)}
      </div>
    );
  }

  if (listings.length === 0) {
    return <p className="rounded-2xl bg-neutral-50 px-5 py-10 text-center text-neutral-600">No stays match your search. Try another location or category.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
      {listings.map((property) => <ListingCard key={property.id} property={property} />)}
    </div>
  );
};