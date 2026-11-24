# Yatra Kerala
A vanilla HTML/CSS/JavaScript PWA for discovering tourist destinations across Kerala.

## Run locally
Serve the folder on localhost (service workers require localhost or HTTPS):
```bash
python -m http.server 8000
```
Open http://localhost:8000.

## Features
- Responsive celadon / emerald visual design
- Search and filtering by destination, district and experience
- District navigation, rich destination detail dialog and Google Maps directions
- Save places in localStorage
- PWA manifest and service-worker app-shell cache

## Data quality and coverage
This is an initial curated catalogue, **not every tourist attraction in Kerala**. Kerala has 14 districts; the official Kerala Tourism site lists 79 prominent Green Carpet destinations and its Routes & Locations directory describes around 22,000 location records. Those wider records include places and route locations that are not necessarily tourist attractions. Build a verified ingestion/review workflow before claiming full coverage.

Primary references:
- https://www.keralatourism.org/districts/
- https://www.keralatourism.org/greencarpet/destinations
- https://www.keralatourism.org/destination/
- https://www.keralatourism.org/2024/routes-locations/search

The sample destination pins are approximate editorial coordinates and should be verified against official maps/DTPC sources. Historical notes are concise summaries, not archival citations. Opening hours, fees and seasonal closures are not hardcoded because they change.

Images currently use representative Unsplash photos and are not verified to depict the named place. Replace with destination-specific images, licence and attribution before public launch.
