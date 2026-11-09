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