import RoomDetailClient from "@/components/RoomDetailClient";
import { properties } from "@/lib/properties";

export const generateStaticParams = () => properties.map((property) => ({ id: property.id }));

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id } = await params;
  return <RoomDetailClient id={id} />;
};

export default RoomPage;