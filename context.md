# Airbnb UI Clone — Project Context

## Project Overview

For this project, I'm building a website similar to Airbnb where people can browse places to stay, search through properties, and view more details about a listing. The goal is to make the website easy to navigate on both phones and computers.

## Who Will Use It?

The website is for travelers looking for somewhere to stay. They should be able to find properties, compare prices and ratings, and view more information before deciding where they want to stay.

## The Three Pages

**Home Page (`/`)**

The homepage will have a navigation bar, search bar, property categories, and listing cards showing pictures, prices, and ratings. Users will be able to search and select categories.

**Catalog Page (`/catalog`)**

This page will show available properties with an option to sort by price. It will also have a map section and listing cards that users can click to view more details.

**Room Detail Page (`/rooms/[id]`)**

This page will show pictures of a property, its location, rating, host information, amenities, and a booking section where users can adjust the number of guests.

## Main Components

I'll create reusable React components like `SiteHeader`, `SearchBar`, `ListingCard`, `CategoryNavigation`, `RoomPhotoGallery`, and `BookingPanel`.

For example, I'll reuse the same `ListingCard` on the Home and Catalog pages instead of building it twice.

## Design

I'll build the website for a 375px mobile screen first, then adjust it for larger screens starting at 768px.

## Screenshot Specifications

I'll add the detailed component specifications here after reviewing real Airbnb screenshots with my AI coding agent, before building each page.

## Home Page Screenshot Specification

### Component Specification

| Component | Purpose | Possible props |
| --- | --- | --- |
| `HomePage` | Composes the home sections and coordinates search, category, and loading state. | `categories`, `activeCategoryId`, `recentSearch`, `listingSections`, `promotions`, `isLoading`, `onCategorySelect`, `onSearch` |
| `SearchTrigger` | Large rounded search entry point at the top; opens search controls. | `label`, `onOpen` |
| `SearchPanel` | Provides destination/query input and rubric-required filtering controls; submits the selected criteria. This panel is required behavior, not shown open in the screenshot. | `query`, `filters`, `onQueryChange`, `onFilterChange`, `onSubmit` |
| `CategoryRail` | Horizontally scrollable category choices such as All, Homes, and Experiences. | `categories` (id, label, icon), `activeCategoryId`, `onSelect` |
| `RecentSearchCard` | Resumes a previous search, showing destination, dates, guests, and a small stacked photo preview. | `destination`, `dates`, `guestCount`, `image`, `onSelect` |
| `ListingSection` | Displays a section heading, optional next/view-all action, and a responsive listing grid. At 375px, the grid is one column. | `title`, `listings`, `isLoading`, `onViewAll` |
| `ListingCard` | Shows a property photo, favorite badge, save-heart action, title, price/night count, and rating. | `image`, `title`, `price`, `nightCount`, `rating`, `isGuestFavorite`, `isSaved`, `onSelect`, `onToggleSave` |
| `PromotionRail` / `PromotionCard` | Shows horizontally scrollable promotional offers with an illustration and action button. | `promotions` (title, description, image, actionLabel, `onAction`) |
| `BottomNavigation` | Fixed five-item mobile navigation; Explore is active in the reference. | `items`, `activeItemId`, `onNavigate` |
| `ListingCardSkeleton` | Placeholder cards shown while listings load, preserving the listing grid's size and layout. | `count` |

### Arrangement and Behavior

From top to bottom: a prominent search trigger; a horizontally scrollable category rail; a recent-search card; a personalized listing section; a promotion rail; another nearby-destination listing section; and a fixed bottom navigation. Category and promotion items can scroll horizontally, with the next item partially visible at the right edge. At 375px, each required listing section must instead use a full-width, one-column vertical grid, even though the screenshot depicts listing carousels. The recent-search card places its text on the left and overlapping photo previews on the right. The listing photo carries a guest-favorite badge and heart control, with title and price/rating text below.

Category selection updates the active category and the displayed listings. Submitting the search filters the home listings by the entered destination/query and selected criteria. While results are loading, show listing skeletons rather than a blank section. The reference shows the closed search trigger, not the filtering controls or loading state; those behaviors are included to satisfy the assignment rubric.

### Visual and Mobile Notes

The reference is a narrow, white mobile screen with roughly 24px side gutters. Use charcoal primary text, medium-gray secondary text, light-gray borders and surfaces, soft shadows, and Airbnb coral/pink for the active Explore item. The search trigger and cards are generously rounded; section headings are bold, while listing metadata is smaller and gray. Keep vertical spacing airy (roughly 16–28px between major blocks) and gaps compact (roughly 12px) in horizontal rails. Listing cards fill the single grid column at 375px; the grid may adapt at wider breakpoints. The bottom navigation spans the width and stays fixed above the device edge; allow page content to scroll behind/above it with enough bottom space. Preserve horizontal scrolling in the category and promotion rails without causing page-wide horizontal overflow. Treat the color and spacing values as visual estimates from the screenshot.

## Catalog Page Screenshot Specification

### Component Specification

| Component | Purpose | Possible props |
| --- | --- | --- |
| `CatalogPage` | Coordinates filters, result count, price sort state, listings, and map placement. Owns `useState` for `sortOrder` (`"asc"` or `"desc"`) and derives the sorted listings from the current results. | `listings`, `resultCount`, `filters`, `onFilterChange` |
| `CatalogHeader` | Shows a back action, the current destination/date/guest summary, and an all-filters button. | `destination`, `dates`, `guestLabel`, `onBack`, `onOpenSearch`, `onOpenFilters` |
| `FilterBar` | Horizontally scrollable filter chips such as Allows pets, Type of place, Price, and Instant Book. | `filters`, `onChange`, `onOpenAll` |
| `CatalogSummary` | Displays the result count and the AI-description information note. | `resultCount`, `notice` |
| `PriceSortControl` | Lets the user choose ascending or descending price order; wired to `CatalogPage`'s `useState`. | `sortOrder`, `onSortChange` |
| `ListingGrid` | Renders the catalog's vertically stacked result cards on mobile. | `listings`, `isLoading` |
| `ListingCard` | Reuses the Home page component for photo, save action, title, rating, details, and price. Optional Catalog data can provide multiple `images`, `subtitle`, `bedroomCount`, `bedCount`, `bathCount`, `ratingCount`, and `isSuperhost` for the gallery dots and visible details in this screenshot. | Existing Home props (`image`, `title`, `price`, `nightCount`, `rating`, `isGuestFavorite`, `isSaved`, callbacks) plus optional Catalog fields |
| `MapButton` / `MapPlaceholder` | The button offers map access over the listing area; the placeholder represents the map below results on mobile and beside results on desktop. | Button: `onOpen`; placeholder: `label` |
| `BottomNavigation` | Reuses the fixed mobile navigation from Home. | `items`, `activeItemId`, `onNavigate` |

### Arrangement and Behavior

On mobile, arrange the page as: search summary header with back and filter-settings actions; horizontally scrolling filter chips; centered result count and AI-description note; price-sort control; one-column listing cards; map placeholder below the listings; fixed bottom navigation. Keep the Map button visible over the listing area as shown. On desktop, place the listing results and map placeholder beside each other. The price-sort control changes `sortOrder` between ascending and descending and the displayed cards follow that order. Filter changes update the results and result count. The visible screenshot shows filters and a Map button but does not show the expanded map or sort menu; those interactions are assignment requirements.

### Visual and Mobile Notes

Use a white background, charcoal primary text and icons, medium-gray secondary details, light-gray outlined filter chips, subtle dividers, and soft shadows. The top search summary is a centered rounded capsule; filter chips are compact rounded pills in a horizontal rail. Give the listing stack roughly 24px side gutters and generous vertical separation. Each white listing card has a large rounded image with a Superhost badge at top left, a heart at top right, and image-position dots near the bottom. Below it, align the title and star rating on one row, then show muted description/room details and a larger price line. Keep the fixed bottom navigation clear of the final result content. Use Tailwind CSS utility classes for styling; treat exact measurements and colors as estimates from the screenshot.

## Room Detail Page Screenshot Specification

### Component Specification

| Component | Purpose | Possible props and state |
| --- | --- | --- |
| `RoomDetailPage` | Loads the selected room and composes its detail sections. Use `useEffect` when `roomId` changes to load room data; expose a visible loading indicator while pending. | `roomId`; state: `room`, `isLoading` |
| `RoomPhotoGallery` | Displays the main room photo, photo count, and overlaid back/share/favorite controls. Previous/Next buttons cycle through photos using local `useState` for `currentIndex`. | `photos`, `initialIndex`, `onShare`, `isFavorite`, `onToggleFavorite`; state: `currentIndex` |
| `BackLink` | Returns to the Catalog using Next.js `Link`. | `href` (defaults to `/catalog`), `label` |
| `RoomOverview` | Shows property title, location, guest/bedroom/bed/bath summary, rating, and review count. | `title`, `location`, `guestCount`, `bedroomCount`, `bedCount`, `bathCount`, `rating`, `reviewCount` |
| `RoomHighlightList` | Presents location and property highlights with small illustrative icons and short descriptions. | `highlights` (icon, title, description) |
| `HostSummary` | Shows host avatar, name, and years hosting, plus optional Superhost label. | `avatar`, `hostName`, `yearsHosting`, `isSuperhost` |
| `RoomDescription` | Shows a truncated description with a Show more action. | `description`, `maxLines` |
| `AmenitiesList` | Renders amenities as an icon and label list, with an optional show-all action. | `amenities` (icon, label), `totalCount`, `onShowAll` |
| `LocationSection` | Shows the area heading, map preview, exact-location notice, and neighborhood highlights. | `location`, `mapImage`, `notice`, `neighborhoodDescription` |
| `BookingBar` | Keeps the nightly price, guest counter with visible − and + buttons, and Reserve button visible on mobile and desktop. The counter uses local `useState`, never goes below 1, and never exceeds `maxGuests`. | `nightlyPrice`, `initialGuestCount`, `maxGuests`, `onReserve`; state: `guestCount` |
| `RoomLoadingIndicator` | Visible status while room data loads. | `label` (defaults to “Loading room details…”) |

### Arrangement and Behavior

On mobile, place a near full-width photo gallery at the top, with back, share, and favorite controls over the image and a photo counter in its lower corner. Continue in a white content surface with rounded top corners: centered title and location/guest details, rating and review count, divider, location/property highlights, host information, expandable description, amenities list and show-all action, then the location map and neighborhood details. Keep the booking bar fixed to the bottom on mobile. On desktop, keep the same nightly price, bounded − / guest count / + controls, and Reserve button visible in a booking panel beside the room details. Use `Link` for back navigation to `/catalog`; Previous/Next update the selected gallery image through `useState`. Load the room for the current `roomId` with `useEffect` and show `RoomLoadingIndicator` until it is ready.

### Visual and Mobile Notes

Use a white background, charcoal headings and icons, gray secondary text, fine light-gray dividers, and a vivid pink Reserve button. The gallery is edge-to-edge and image-led; overlay controls are circular, lightly translucent buttons. The content has about 24px horizontal padding, generous vertical spacing between sections, bold section headings, and simple line icons for amenities. The bottom booking bar has a thin top divider and remains visible while content scrolls; reserve enough bottom padding so it does not cover the last section. Use Tailwind CSS utility classes for styling, with no inline style objects or prebuilt UI library.