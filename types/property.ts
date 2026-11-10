export type PropertyCategory = "Home" | "Apartment" | "Cabin";

export type PropertyAmenity = {
  icon: string;
  label: string;
};

export type PropertyHighlight = {
  icon: string;
  title: string;
  description: string;
};

export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  category: PropertyCategory;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  image: string;
  photos: string[];
  bedroomCount: number;
  bedCount: number;
  bathCount: number;
  maxGuests: number;
  hostName: string;
  hostAvatar: string;
  yearsHosting: number;
  isSuperhost: boolean;
  description: string;
  amenities: PropertyAmenity[];
  highlights: PropertyHighlight[];
};

export type ListingCategory = {
  label: string;
  value: PropertyCategory | "All";
  icon: string;
};