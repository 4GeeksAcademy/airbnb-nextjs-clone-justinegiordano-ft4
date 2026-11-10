import { Icon } from "@/components/Icon";

export const RoomLoadingIndicator = () => (
  <main className="grid min-h-[70vh] place-items-center px-6">
    <p role="status" className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-neutral-700 shadow-md">
      <Icon name="loader" size={20} className="animate-spin text-rose-600" />
      Loading stay details...
    </p>
  </main>
);