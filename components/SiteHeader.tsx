"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";

type SiteHeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
};

export const SiteHeader = ({
  query,
  onQueryChange,
  placeholder = "Start your search",
}: SiteHeaderProps) => (
  <header className="sticky top-0 z-30 border-b border-neutral-100 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="hidden items-center gap-2 text-xl font-bold text-rose-600 sm:flex">
        <Icon name="home" size={23} strokeWidth={2.2} />
        <span>staybnb</span>
      </Link>
      <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md sm:mx-auto sm:max-w-md">
        <Icon name="search" size={19} />
        <span className="sr-only">Search stays</span>
        <input
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-600"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={placeholder}
          type="search"
        />
        <button
          className="hidden rounded-full bg-rose-600 p-2 text-white sm:block"
          type="button"
          aria-label="Search"
        >
          <Icon name="search" size={16} />
        </button>
      </label>
      <Link href="/catalog" className="hidden rounded-full px-4 py-2 text-sm font-medium hover:bg-neutral-100 lg:block">
        Explore stays
      </Link>
    </div>
  </header>
);