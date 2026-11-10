type MapPlaceholderProps = {
  className?: string;
};

export const MapPlaceholder = ({ className = "" }: MapPlaceholderProps) => (
  <div
    role="img"
    aria-label="Map placeholder"
    className={`grid min-h-72 place-items-center rounded-[24px] bg-neutral-200 text-lg font-semibold text-neutral-600 ${className}`}
  >
    Map
  </div>
);