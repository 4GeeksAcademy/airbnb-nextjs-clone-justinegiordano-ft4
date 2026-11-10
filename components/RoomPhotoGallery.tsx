"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";

type RoomPhotoGalleryProps = {
  photos: string[];
  title: string;
};

export const RoomPhotoGallery = ({ photos, title }: RoomPhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const movePhoto = (direction: -1 | 1) => {
    setCurrentIndex((index) => (index + direction + photos.length) % photos.length);
  };

  return (
    <section className="relative mx-auto h-[48vh] min-h-[300px] max-h-[620px] max-w-7xl overflow-hidden bg-neutral-200 md:mt-5 md:h-[500px] md:rounded-[28px]">
      <Image src={photos[currentIndex]} alt={`${title}, photo ${currentIndex + 1}`} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <Link href="/catalog" aria-label="Back to Catalog" className="grid size-11 place-items-center rounded-full bg-white/90 shadow-md backdrop-blur">
          <Icon name="arrowLeft" size={20} />
        </Link>
        <div className="flex gap-2">
          <button type="button" aria-label="Share this stay" className="grid size-11 place-items-center rounded-full bg-white/90 shadow-md backdrop-blur">
            <Icon name="share" size={19} />
          </button>
          <button
            type="button"
            aria-label={isFavorite ? "Remove from wishlists" : "Add to wishlists"}
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((saved) => !saved)}
            className="grid size-11 place-items-center rounded-full bg-white/90 shadow-md backdrop-blur"
          >
            <Icon name="heart" size={20} className={isFavorite ? "fill-rose-600 text-rose-600" : ""} />
          </button>
        </div>
      </div>
      <button type="button" aria-label="Previous photo" onClick={() => movePhoto(-1)} className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-md">
        <Icon name="arrowLeft" size={18} />
      </button>
      <button type="button" aria-label="Next photo" onClick={() => movePhoto(1)} className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-md">
        <Icon name="arrowRight" size={18} />
      </button>
      <span className="absolute bottom-4 right-4 rounded-lg bg-neutral-900/75 px-3 py-1.5 text-sm font-medium text-white">
        {currentIndex + 1} / {photos.length}
      </span>
    </section>
  );
};