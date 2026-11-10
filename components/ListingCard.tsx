"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { Property } from "@/types/property";

type ListingCardProps = {
  property: Property;
};

export const ListingCard = ({ property }: ListingCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="min-w-0">
      <div className="relative aspect-[1.22] overflow-hidden rounded-[22px] bg-neutral-100">
        <Link href={`/rooms/${property.id}`} aria-label={`View ${property.title}`}>
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw"
            className="object-cover transition duration-500 hover:scale-[1.025]"
          />
        </Link>
        {property.isSuperhost && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold shadow-sm">
            Guest favorite
          </span>
        )}
        <button
          type="button"
          aria-label={isSaved ? "Remove from wishlists" : "Add to wishlists"}
          aria-pressed={isSaved}
          onClick={() => setIsSaved((saved) => !saved)}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-neutral-800 shadow-sm transition hover:scale-105"
        >
          <Icon name="heart" size={19} className={isSaved ? "fill-rose-600 text-rose-600" : ""} />
        </button>
      </div>
      <Link href={`/rooms/${property.id}`} className="mt-3 block">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-[15px] font-semibold">{property.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm">
            <Icon name="star" size={14} className="fill-neutral-900" />
            {property.rating.toFixed(2)}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-neutral-500">{property.location}</p>
        <p className="mt-1 text-sm text-neutral-500">${property.pricePerNight} for 2 nights</p>
      </Link>
    </article>
  );
};