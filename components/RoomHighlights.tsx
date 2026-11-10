import { Icon } from "@/components/Icon";
import type { PropertyHighlight } from "@/types/property";

type RoomHighlightsProps = {
  highlights: PropertyHighlight[];
};

export const RoomHighlights = ({ highlights }: RoomHighlightsProps) => (
  <ul className="space-y-6 border-b border-neutral-200 py-7">
    {highlights.map((highlight) => (
      <li key={highlight.title} className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-700">
          <Icon name={highlight.icon} size={20} />
        </span>
        <div>
          <h2 className="font-semibold">{highlight.title}</h2>
          <p className="mt-1 text-sm leading-6 text-neutral-500">{highlight.description}</p>
        </div>
      </li>
    ))}
  </ul>
);