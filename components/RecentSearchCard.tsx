import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types/property";

type RecentSearchCardProps = {
  property: Property;
};

export const RecentSearchCard = ({ property }: RecentSearchCardProps) => (
  <Link
    href="/catalog"
    className="flex items-center justify-between gap-5 rounded-[26px] border border-neutral-100 bg-white p-5 shadow-[0_12px_36px_rgba(0,0,0,0.07)] sm:p-6"
  >
    <span className="min-w-0">
      <span className="block text-lg font-semibold leading-snug sm:text-xl">
        Continue searching for homes in {property.city}
      </span>
      <span className="mt-2 block text-sm text-neutral-500">Nov 11 - 13 · 2 guests ›</span>
    </span>
    <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-md sm:size-24">
      <Image src={property.image} alt="" fill sizes="96px" className="object-cover" />
    </span>
  </Link>
);