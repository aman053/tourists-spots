# Yatra Kerala — Next.js PWA

A Next.js App Router + React + TypeScript experience for discovering lesser-known destinations across Kerala. This replaces the earlier vanilla prototype as the app entry point.

## Run
```bash
npm install
npm run dev
```

## Direction
- Hidden/offbeat places first; popular destinations intentionally excluded from the initial featured collection.
- Search by place, district and experience category.
- Destination detail modal with stories, activities, coordinates, access notes and Google Maps link.
- Save favourites in component state (persistence can be added next).
- Responsive Emerald / Spring Celadon visual system.
- Web app manifest and service worker starter.

## Data quality
The initial field guide is an editorial starter collection, not an exhaustive or fully verified gazetteer. Coordinates are approximate map pins and must be checked against authoritative mapping and local access information before travel. Access restrictions, weather, permits and opening status can change. Some destinations are sensitive ecological or community spaces; the app intentionally avoids publishing granular trailheads or sensitive wildlife coordinates. Historical notes are cautious summaries and need destination-level citations. The image URLs are illustrative stock imagery, not guaranteed photographs of the named destination; replace with destination-specific, licensed and credited images before production.

Useful official references:
- https://www.keralatourism.org/destination/unexplored-central-kerala/
- https://www.keralatourism.org/destination/unexplored-malabar-experiences/
- https://www.keralatourism.org/ebooks/expect-the-unexpected/contents
- https://www.keralatourism.org/faq/what-are-the-best-unexplored-beaches-in-kerala
