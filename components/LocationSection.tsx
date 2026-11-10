import { Icon } from "@/components/Icon";

type LocationSectionProps = {
  location: string;
};

export const LocationSection = ({ location }: LocationSectionProps) => (
  <section className="py-7">
    <h2 className="text-2xl font-semibold tracking-tight">Where you&apos;ll be</h2>
    <p className="mt-4">{location}, Michigan, United States</p>
    <div role="img" aria-label={`Map preview of ${location}`} className="mt-5 grid h-64 place-items-center rounded-[24px] bg-neutral-100 text-neutral-500">
      <span className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm">
        <Icon name="mapPin" size={18} /> Map preview
      </span>
    </div>
    <p className="mt-5 text-neutral-700">Exact location will be provided after booking.</p>
    <h3 className="mt-7 font-semibold">Neighborhood highlights</h3>
    <p className="mt-2 leading-7 text-neutral-600">Explore local dining, parks, and cultural destinations nearby.</p>
  </section>
);