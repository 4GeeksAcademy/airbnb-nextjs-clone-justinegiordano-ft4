"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AmenitiesList } from "@/components/AmenitiesList";
import { BookingBar } from "@/components/BookingBar";
import { HostSummary } from "@/components/HostSummary";
import { LocationSection } from "@/components/LocationSection";
import { RoomDescription } from "@/components/RoomDescription";
import { RoomHighlights } from "@/components/RoomHighlights";
import { RoomLoadingIndicator } from "@/components/RoomLoadingIndicator";
import { RoomOverview } from "@/components/RoomOverview";
import { RoomPhotoGallery } from "@/components/RoomPhotoGallery";
import { getPropertyById } from "@/lib/properties";
import type { Property } from "@/types/property";

type RoomDetailClientProps = {
  id: string;
};

const RoomDetailClient = ({ id }: RoomDetailClientProps) => {
  const [room, setRoom] = useState<Property | null>(null);
  const [loadedId, setLoadedId] = useState<string | null>(null);

  useEffect(() => {
    let isCurrent = true;
    const timer = window.setTimeout(() => {
      if (isCurrent) {
        setRoom(getPropertyById(id) ?? null);
        setLoadedId(id);
      }
    }, 550);
    return () => {
      isCurrent = false;
      window.clearTimeout(timer);
    };
  }, [id]);

  const isLoading = loadedId !== id;
  if (isLoading) return <RoomLoadingIndicator />;
  if (!room) {
    return <main className="mx-auto max-w-3xl px-5 py-20 text-center"><h1 className="text-2xl font-semibold">Stay not found</h1><Link href="/catalog" className="mt-4 inline-block underline">Return to Catalog</Link></main>;
  }

  return (
    <main className="pb-28 md:pb-10">
      <RoomPhotoGallery photos={room.photos} title={room.title} />
      <div className="mx-auto grid max-w-7xl gap-2 px-5 md:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] md:gap-10 lg:px-8">
        <div>
          <RoomOverview property={room} />
          <RoomHighlights highlights={room.highlights} />
          <HostSummary property={room} />
          <RoomDescription description={room.description} />
          <AmenitiesList amenities={room.amenities} />
          <LocationSection location={room.location} />
        </div>
        <BookingBar nightlyPrice={room.pricePerNight} maxGuests={room.maxGuests} />
      </div>
    </main>
  );
};

export default RoomDetailClient;