"use client";

import { useState } from "react";

type RoomDescriptionProps = {
  description: string;
};

export const RoomDescription = ({ description }: RoomDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="border-b border-neutral-200 py-7">
      <p className={`leading-7 text-neutral-700 ${isExpanded ? "" : "line-clamp-4"}`}>
        {description}
      </p>
      <button type="button" onClick={() => setIsExpanded((expanded) => !expanded)} className="mt-4 font-semibold underline underline-offset-4">
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </section>
  );
};