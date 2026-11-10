"use client";

import { useEffect, useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CategoryRail } from "@/components/CategoryRail";
import { ListingSection } from "@/components/ListingSection";
import { PromotionRail } from "@/components/PromotionRail";
import { RecentSearchCard } from "@/components/RecentSearchCard";
import { SiteHeader } from "@/components/SiteHeader";
import { listingCategories, properties } from "@/lib/properties";
import type { ListingCategory } from "@/types/property";

const HomeClient = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ListingCategory["value"]>("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredProperties = properties.filter((property) => {
    const matchesQuery = `${property.title} ${property.location} ${property.city}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesCategory = activeCategory === "All" || property.category === activeCategory;
    return matchesQuery && matchesCategory;
  });
  const recentProperty = properties[0];

  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <SiteHeader query={query} onQueryChange={setQuery} placeholder="Start your search" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoryRail categories={listingCategories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        <div className="mt-3"><RecentSearchCard property={recentProperty} /></div>
        <div className="mt-10 space-y-12 sm:mt-12">
          <ListingSection
            title={query ? `Stays matching "${query}"` : "Based on your Detroit search"}
            listings={filteredProperties}
            isLoading={isLoading}
          />
          <PromotionRail />
          <ListingSection title="Guests also checked out nearby" listings={properties.slice(1, 4)} />
        </div>
      </main>
      <BottomNavigation active="explore" />
    </div>
  );
};

export default HomeClient;