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