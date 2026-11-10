"use client";

import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CategoryRail } from "@/components/CategoryRail";
import { ListingGrid } from "@/components/ListingGrid";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { SiteHeader } from "@/components/SiteHeader";
import { listingCategories, properties } from "@/lib/properties";
import type { ListingCategory } from "@/types/property";

type SortOrder = "asc" | "desc";

const CatalogClient = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ListingCategory["value"]>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const matchingProperties = properties.filter((property) => {
    const matchesQuery = `${property.title} ${property.location} ${property.city}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    return matchesQuery && (activeCategory === "All" || property.category === activeCategory);
  });
  const sortedProperties = [...matchingProperties].sort((first, second) =>
    sortOrder === "asc"
      ? first.pricePerNight - second.pricePerNight
      : second.pricePerNight - first.pricePerNight,
  );

  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <SiteHeader query={query} onQueryChange={setQuery} placeholder="Homes in Detroit" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoryRail categories={listingCategories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-neutral-100 pb-5 pt-4">
          <div>
            <h1 className="text-xl font-semibold">{sortedProperties.length.toLocaleString()} stays</h1>
            <p className="mt-1 text-sm text-neutral-500">Stay details help you compare your options.</p>
          </div>
          <label className="flex items-center gap-2 text-sm font-medium">
            Sort by price
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
              className="rounded-full border border-neutral-200 bg-white px-3 py-2 outline-none focus:border-neutral-500"
            >
              <option value="asc">Low to high</option>
              <option value="desc">High to low</option>
            </select>
          </label>
        </div>
        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
          <section aria-label="Search results" className="min-w-0">
            <ListingGrid listings={sortedProperties} />
          </section>
          <MapPlaceholder className="min-h-[320px] md:sticky md:top-24 md:h-[calc(100vh-7rem)]" />
        </div>
      </main>
      <BottomNavigation active="explore" />
    </div>
  );
};

export default CatalogClient;