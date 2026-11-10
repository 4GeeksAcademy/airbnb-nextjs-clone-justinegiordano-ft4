import type { ListingCategory, Property } from "@/types/property";

const photos = {
  midtown: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  loft: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  apartment: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
  cabin: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
  house: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  bright: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
};

const commonAmenities = [
  { icon: "kitchen", label: "Kitchen" },
  { icon: "wifi", label: "Wifi" },
  { icon: "desk", label: "Dedicated workspace" },
  { icon: "car", label: "Free street parking" },
  { icon: "pets", label: "Pets allowed" },
];

export const properties: Property[] = [
  {
    id: "detroit-midtown",
    title: "Stunning 1 Bedroom in Midtown with City Views",
    location: "Midtown Detroit",
    city: "Detroit",
    category: "Apartment",
    pricePerNight: 193,
    rating: 4.83,
    reviewCount: 388,
    image: photos.midtown,
    photos: [photos.midtown, photos.loft, photos.bright],
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    maxGuests: 3,
    hostName: "Morgan",
    hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    yearsHosting: 10,
    isSuperhost: true,
    description:
      "Experience the allure of Midtown in this inviting apartment on the tenth floor. Enjoy city views, a full kitchen, thoughtful details, and an easy walk to Detroit's dining, arenas, and cultural destinations.",
    amenities: commonAmenities,
    highlights: [
      {
        icon: "pin",
        title: "In Midtown Detroit",
        description: "Cass Park is a short walk away, with dining and venues nearby.",
      },
      {
        icon: "view",
        title: "Tenth-floor views with free parking",
        description: "City views, a full kitchen, and free street parking.",
      },
    ],
  },
  {
    id: "corktown-loft",
    title: "Sunny Loft Near Corktown",
    location: "Corktown, Detroit",
    city: "Detroit",
    category: "Home",
    pricePerNight: 204,
    rating: 4.96,
    reviewCount: 214,
    image: photos.loft,
    photos: [photos.loft, photos.apartment, photos.midtown],
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    maxGuests: 2,
    hostName: "Jordan",
    hostAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    yearsHosting: 6,
    isSuperhost: true,
    description:
      "A bright, comfortable loft in the heart of Corktown, close to neighborhood cafes, restaurants, and downtown Detroit.",
    amenities: commonAmenities,
    highlights: [
      {
        icon: "pin",
        title: "Explore Corktown",
        description: "Independent cafes and neighborhood restaurants are close by.",
      },
      {
        icon: "view",
        title: "A light-filled loft",
        description: "An open living area with room to relax after a day out.",
      },
    ],
  },
  {
    id: "eastern-market-flat",
    title: "Modern Flat by Eastern Market",
    location: "Eastern Market, Detroit",
    city: "Detroit",
    category: "Apartment",
    pricePerNight: 179,
    rating: 4.91,
    reviewCount: 156,
    image: photos.apartment,
    photos: [photos.apartment, photos.house, photos.loft],
    bedroomCount: 2,
    bedCount: 2,
    bathCount: 1,
    maxGuests: 4,
    hostName: "Casey",
    hostAvatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    yearsHosting: 4,
    isSuperhost: false,
    description:
      "Settle into a modern home base near the murals, markets, and restaurants of Eastern Market.",
    amenities: commonAmenities,
    highlights: [
      {
        icon: "pin",
        title: "Near Eastern Market",
        description: "Walk to local shops, fresh markets, and public art.",
      },
      {
        icon: "view",
        title: "Room for the whole group",
        description: "Two bedrooms and a comfortable shared living space.",
      },
    ],
  },
  {
    id: "dearborn-guesthouse",
    title: "Calm Garden Guesthouse",
    location: "Dearborn, Michigan",
    city: "Dearborn",
    category: "Home",
    pricePerNight: 165,
    rating: 4.89,
    reviewCount: 98,
    image: photos.house,
    photos: [photos.house, photos.bright, photos.apartment],
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    maxGuests: 2,
    hostName: "Taylor",
    hostAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    yearsHosting: 3,
    isSuperhost: true,
    description:
      "A peaceful, private guesthouse with a garden patio and easy access to Dearborn's museums and dining.",
    amenities: commonAmenities,
    highlights: [
      {
        icon: "pin",
        title: "A quiet neighborhood",
        description: "Relax in a residential area near local attractions.",
      },
      {
        icon: "view",
        title: "Private garden patio",
        description: "Enjoy a quiet outdoor space during your stay.",
      },
    ],
  },
  {
    id: "lake-cabin-retreat",
    title: "Woodland Cabin Retreat",
    location: "Brighton, Michigan",
    city: "Brighton",
    category: "Cabin",
    pricePerNight: 248,
    rating: 4.98,
    reviewCount: 72,
    image: photos.cabin,
    photos: [photos.cabin, photos.bright, photos.house],
    bedroomCount: 2,
    bedCount: 3,
    bathCount: 2,
    maxGuests: 4,
    hostName: "Avery",
    hostAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    yearsHosting: 8,
    isSuperhost: true,
    description:
      "A warm cabin surrounded by trees, with a quiet deck and trails a short drive away.",
    amenities: commonAmenities,
    highlights: [
      {
        icon: "pin",
        title: "Surrounded by nature",
        description: "Enjoy nearby trails and quiet wooded scenery.",
      },
      {
        icon: "view",
        title: "A cozy weekend retreat",
        description: "Gather around the living room after a day outdoors.",
      },
    ],
  },
];

export const listingCategories: ListingCategory[] = [
  { label: "All stays", value: "All", icon: "all" },
  { label: "Homes", value: "Home", icon: "home" },
  { label: "Apartments", value: "Apartment", icon: "apartment" },
  { label: "Cabins", value: "Cabin", icon: "cabin" },
];

export const getPropertyById = (id: string) =>
  properties.find((property) => property.id === id);