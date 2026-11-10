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
| `CatalogClient` | Controls the search query, active category, price sort order, filtered properties, and responsive result/map layout. | No props; state: `query`, `activeCategory`, `sortOrder` |
| `SiteHeader` | Provides the controlled search input used to filter properties as the user types. | `query`, `onQueryChange`, `placeholder` |
| `CategoryRail` | Reuses Home's horizontally scrollable category controls to filter the properties. | `categories`, `activeCategory`, `onSelect` |
| `PriceSortControl` | The native select in `CatalogClient` switches between low-to-high and high-to-low prices. | Local `sortOrder` state (`"asc"` or `"desc"`) |
| `ListingGrid` | Renders the filtered, sorted results in one mobile column and multiple wider-screen columns. | `listings` |
| `ListingCard` | Reuses the Home component for each result's image, save action, title, rating, location, and price. | `property` |
| `MapPlaceholder` | Displays a gray block labeled “Map” below results on mobile and beside them on desktop. | `className` |
| `BottomNavigation` | Reuses the fixed mobile navigation from Home. | `active` |

### Arrangement and Behavior

On mobile, arrange the page as: controlled search header; horizontally scrolling category rail; exact result count with short helper copy and the price-sort select; one-column listing cards; gray Map placeholder below the results; and fixed bottom navigation. At desktop widths, place the Map placeholder to the right of the listings. Typing in search or selecting a category updates the results and count; changing the sort select reorders the same properties by price.

### Visual and Mobile Notes

Use a white background, charcoal text and icons, gray secondary details, subtle dividers, and soft shadows. The search input is a rounded capsule; category buttons are compact rounded pills in a horizontal rail. Give the listing stack roughly 24px side gutters and generous vertical separation. Each shared listing card has a large rounded image with a favorite badge and heart action, followed by its title, star rating, location, and price. The gray Map block follows the complete listing grid on mobile and sits alongside it on desktop. Use Tailwind CSS utility classes for styling; treat exact measurements and colors as estimates from the screenshots.

## Room Detail Page Screenshot Specification

### Component Specification

| Component | Purpose | Possible props and state |
| --- | --- | --- |
| `RoomPage` / `RoomDetailClient` | The route passes the URL `id` to the client component. `RoomDetailClient` loads the matching local property after a simulated delay using `useEffect` and shows a loading indicator meanwhile. | Route: Promise `params`; client: `id`; state: `room`, `loadedId` |
| `RoomPhotoGallery` | Displays the main photo and counter, overlay navigation/share/favorite controls, and Previous/Next buttons. Back navigation uses Next.js `Link` to Catalog. | `photos`, `title`; state: `currentIndex`, `isFavorite` |
| `RoomOverview` | Shows property title, location, capacity, bedroom/bed/bath summary, rating, and review count. | `property` |
| `RoomHighlights` | Presents location and property highlights with icons and short descriptions. | `highlights` |
| `HostSummary` | Shows host avatar, name, years hosting, and optional Superhost label. | `property` |
| `RoomDescription` | Shows a truncated description with a working Show more/Show less control. | `description`; state: `isExpanded` |
| `AmenitiesList` | Renders each amenity as an icon and label. | `amenities` |
| `LocationSection` | Shows the location heading, map preview placeholder, exact-location notice, and neighborhood copy. | `location` |
| `BookingBar` | Keeps nightly price, guest counter with visible − and + buttons, and Reserve button visible on mobile and desktop. Guest count starts at 1 and stays between 1 and `maxGuests`. | `nightlyPrice`, `maxGuests`; state: `guestCount`, `isReserved` |
| `RoomLoadingIndicator` | Visible status while room data loads. | No props |

### Arrangement and Behavior

On mobile, place a near full-width photo gallery at the top, with back, share, and favorite controls over the image and a photo counter in its lower corner. Continue in a white content surface with rounded top corners: centered title and location/guest details, rating and review count, divider, location/property highlights, host information, expandable description, amenities list and show-all action, then the location map and neighborhood details. Keep the booking bar fixed to the bottom on mobile. On desktop, keep the same nightly price, bounded − / guest count / + controls, and Reserve button visible in a booking panel beside the room details. Use `Link` for back navigation to `/catalog`; Previous/Next update the selected gallery image through `useState`. Load the room for the current `roomId` with `useEffect` and show `RoomLoadingIndicator` until it is ready.

### Visual and Mobile Notes

Use a white background, charcoal headings and icons, gray secondary text, fine light-gray dividers, and a vivid pink Reserve button. The gallery is edge-to-edge and image-led; overlay controls are circular, lightly translucent buttons. The content has about 24px horizontal padding, generous vertical spacing between sections, bold section headings, and simple line icons for amenities. The bottom booking bar has a thin top divider and remains visible while content scrolls; reserve enough bottom padding so it does not cover the last section. Use Tailwind CSS utility classes for styling, with no inline style objects or prebuilt UI library.