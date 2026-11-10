"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type BookingBarProps = {
  nightlyPrice: number;
  maxGuests: number;
};

export const BookingBar = ({ nightlyPrice, maxGuests }: BookingBarProps) => {
  const guestLimit = Math.max(1, maxGuests);
  const [guestCount, setGuestCount] = useState(1);
  const [isReserved, setIsReserved] = useState(false);

  return (
    <aside className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 md:sticky md:top-24 md:inset-x-auto md:self-start md:rounded-2xl md:border md:p-6 md:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:block">
        <div className="min-w-0">
          <p className="font-semibold"><span className="text-xl underline">${nightlyPrice}</span> <span className="font-normal text-neutral-600">night</span></p>
          <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600 md:mt-5 md:justify-between">
            <span>Guests</span>
            <div className="flex items-center gap-3">
              <button type="button" aria-label="Remove one guest" disabled={guestCount <= 1} onClick={() => setGuestCount((count) => Math.max(1, count - 1))} className="grid size-8 place-items-center rounded-full border border-neutral-300 disabled:opacity-40">
                <Icon name="minus" size={15} />
              </button>
              <span aria-live="polite" className="min-w-4 text-center font-medium text-neutral-900">{guestCount}</span>
              <button type="button" aria-label="Add one guest" disabled={guestCount >= guestLimit} onClick={() => setGuestCount((count) => Math.min(guestLimit, count + 1))} className="grid size-8 place-items-center rounded-full border border-neutral-300 disabled:opacity-40">
                <Icon name="plus" size={15} />
              </button>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => setIsReserved(true)} className="min-h-12 shrink-0 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-8 font-semibold text-white shadow-sm transition hover:brightness-95 md:mt-5 md:w-full">
          {isReserved ? "Request ready" : "Reserve"}
        </button>
      </div>
      <p aria-live="polite" className="sr-only">{isReserved ? `Reservation request for ${guestCount} guests is ready.` : ""}</p>
    </aside>
  );
};