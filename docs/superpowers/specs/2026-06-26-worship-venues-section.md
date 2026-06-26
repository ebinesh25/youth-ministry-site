# Worship Venues Section — Design Spec

## Goal
Add regional worship venue cards into the existing Location section so users can "find a place near them."

## Data
New `venues` field in `event.json` — array of venue objects:

```json
{
  "region": "CENTRAL REGION",
  "dayTime": "Every Sunday 10:00 AM",
  "address": [
    "Daniel Thomas School",
    "11A, Perumal Koil Street, Razaak Garden,",
    "Ayyavoo Colony, Arumbakkam,",
    "Chennai – 600106"
  ]
}
```

All 6 regions provided by user (Central, North, West, Tambaram, Poonamallee, South).

## Design
- New `VenueCard` sub-component inside Location.tsx
- 3-column grid (responsive: 2-col tablet, 1-col mobile) below the existing info column
- Each card: region name badge, day/time, address lines
- Visual style matches site: black borders, Montserrat font, bold uppercase, `#0EA5E9` accent
- Cards appear BELOW the info items, ABOVE the map column

## Layout Change
```
┌──────────────────────────────────────────────┐
│  Left Column (existing info)                 │  Right Column (Map)
│  "FIND US." heading                          │
│  MapPin / Phone / Mail                       │
│                                              │
│  REGIONAL VENUES (subheading)                │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │CENTRAL│ │NORTH │ │WEST  │                │
│  └──────┘ └──────┘ └──────┘                │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │TAMBAR│ │POONAM│ │SOUTH │                │
│  └──────┘ └──────┘ └──────┘                │
└──────────────────────────────────────────────┘
```

## Types
Add `Venue` interface:
```ts
interface Venue {
  region: string;
  dayTime: string;
  address: string[];
}
```

Add `venues: Venue[]` to `EventData`.

## Files Changed
1. `src/data/event.json` — add `venues` array
2. `src/types/event.ts` — add `Venue` interface, add to `EventData`
3. `src/components/sections/Location.tsx` — render venue cards below info

## Non-Goals
- No separate page or new section component
- No map markers for each venue
- No search/filter functionality
