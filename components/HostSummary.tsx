import Image from "next/image";
import type { Property } from "@/types/property";

type HostSummaryProps = {
  property: Property;
};

export const HostSummary = ({ property }: HostSummaryProps) => (
  <section className="flex items-center gap-4 border-b border-neutral-200 py-7">
    <Image src={property.hostAvatar} alt={`${property.hostName}, your host`} width={56} height={56} className="size-14 rounded-full object-cover" />
    <div>
      <h2 className="font-semibold">Hosted by {property.hostName}</h2>
      <p className="mt-1 text-sm text-neutral-500">
        {property.isSuperhost ? "Superhost · " : "Host · "}{property.yearsHosting} years hosting
      </p>
    </div>
  </section>
);