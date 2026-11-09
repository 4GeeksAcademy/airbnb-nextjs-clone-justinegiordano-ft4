# Airbnb UI Clone Context

## Project Overview

This project is an educational Airbnb UI clone for an AI Engineering course. It will recreate selected Airbnb browsing and room-detail experiences using original implementation code. The intended users are travelers exploring stays and the course instructor reviewing the interface and implementation.

## Required Pages

- **Home (`/`)**: Entry point for browsing stays, with the primary search controls and a curated or browsable set of listings.
- **Catalog (`/catalog`)**: Search results for stays, with controls to refine the available listings.
- **Room Detail (`/rooms/[id]`)**: Details for one selected stay, including its imagery, key information, and booking affordance.

The exact content, layout, and interactions for these pages will be specified from the real Airbnb screenshots supplied for review. Do not treat the initial component inventory below as a final visual specification.

## Initial Component Inventory

These are proposed responsibilities to guide screenshot review and implementation planning. Adjust names, boundaries, and composition to match the supplied references.

### Shared Components

- **SiteHeader**: Brand/navigation area and responsive entry points to search or account actions.
- **SearchBar**: Destination, dates, and guest-count inputs with a search action.
- **ListingCard**: Stay image, location, dates or summary, price, and rating information.
- **ListingGrid**: Responsive collection of listing cards.
- **ImageGallery**: Responsive presentation of a stay's photos.

### Home (`/`)

- **HomePage**: Composes the shared header and search experience with the home listing sections.
- **CategoryNavigation**: Browse-by-category controls, if present in the screenshots.
- **FeaturedListings**: Home-specific listing collection using `ListingGrid` and `ListingCard`.

### Catalog (`/catalog`)

- **CatalogPage**: Composes the shared header and search experience with search results.
- **CatalogToolbar**: Result summary and available sort/filter actions.
- **FilterControls**: Search refinement controls, matching the screenshots.
- **CatalogResults**: Listing collection using `ListingGrid` and `ListingCard`.

### Room Detail (`/rooms/[id]`)

- **RoomDetailPage**: Composes the shared header with the selected stay's information.
- **RoomPhotoGallery**: Detail-page photo layout using or extending `ImageGallery`.
- **RoomOverview**: Title, location, rating, and host/guest summary.
- **RoomAmenities**: Stay features and amenities.
- **BookingPanel**: Price, dates, guest selection, and booking action.
- **RoomDescription**: Listing description and related detail sections.

## Mobile-First Requirements

- Design and implement from a **375px-wide mobile viewport** first.
- Support **768px and wider desktop/tablet layouts**, adapting navigation, search, listing columns, galleries, and booking controls to the available space.
- Keep content readable and controls usable at both target widths; avoid horizontal overflow.
- Confirm responsive behavior at 375px and at 768px or wider during implementation review.

## Vision-Derived Specifications From Airbnb Screenshots

Screenshots have not yet been provided. Complete this section after reviewing the real references and before implementing the page views.

For each supplied screenshot, record:

- Page/viewport represented and notable layout regions.
- Component boundaries, hierarchy, and reusable patterns.
- Typography, colors, spacing, borders, and image treatment that can be observed.
- Visible interaction states or responsive differences, when evidenced by the references.
- Any ambiguity that needs instructor/user clarification instead of an assumption.

### Screenshot Inventory

_Pending screenshots._

### Derived Component Specifications

_Pending screenshot review. Do not infer Airbnb-specific details that are not visible in the supplied references._