# Song Pages — Design Spec

## Overview
Add individual song pages with full lyrics for the 6 worship songs listed in the event. Users navigate from a Songs section on the home page, navbar link, and Schedule section.

## Data Layer

### Type Extension (`src/types/event.ts`)
```ts
interface LyricLine {
  text: string;
  transliteration?: string; // English transliteration for Tamil songs
  section?: "intro" | "verse" | "chorus" | "bridge" | "tag" | "ending";
}

interface Song {
  title: string;
  slug: string;
  order: number;
  note?: string;
  language: "tamil" | "english";
  lyrics: LyricLine[];
}
```

### `event.json` Changes
- Add `songSection: { heading: string; headingHighlight: string }` config
- Add `slug`, `language`, `lyrics[]` to each song in `whatsToExpect.songs[]`
- All lyrics stored in `event.json` (single source of truth)

## Routing

### Dynamic Route: `/songs/[slug]/page.tsx`
- `generateStaticParams` produces 6 paths matching song slugs
- Server component, reads from `getEventData()`
- Clean URL format: lowercase kebab-case

### Slug Mapping
| Song | Slug |
|------|------|
| Alangara Vasalale | `alangara-vasalale` |
| Lord, I Lift Your Name on High | `lord-i-lift-your-name-on-high` |
| Unga Naamam Uyaranum | `unga-naamam-uyaranum` |
| Above All (Communion) | `above-all-communion` |
| Nandri Solli (Before Lesson) | `nandri-solli-before-lesson` |
| Neer Ennai Marakkala (Closing) | `neer-ennai-marakkala-closing` |

## Page Design

### Song Page Layout
- **Top bar**: "RYM." logo (links to `/`) on left, song title on right
- **Hero area**: Song title in rym-heading scale, order badge (#1–6), language tag
- **Lyrics area**: Centered blocks per `LyricLine`:
  - Section badge (VERSE / CHORUS / BRIDGE / TAG) in black pill
  - Tamil/English text: `text-2xl`/`text-xl` bold, centered
  - Transliteration: `text-sm italic text-gray-500` below Tamil text
  - Spacing between sections: `mt-8`
- **Navigation**: Prev / Next buttons at bottom with song title, "BACK TO HOME" link
- **Edge cases**: First song hides prev; last song hides next

### Visual Style
- Same RYM design language: Montserrat font, black borders, bold/black typography
- Background: white
- No Navbar/MobileNav (clean fullscreen focus)
- Responsive: smaller font sizes on mobile, single column

## Components

### New
- `src/app/songs/[slug]/page.tsx` — dynamic route page
- `src/components/sections/SongsSection.tsx` — home page Songs section
- `src/components/songs/SongPageHeader.tsx` — top bar for song pages

### Modified
- `src/types/event.ts` — add `LyricLine`, update `Song`
- `src/data/event.json` — add lyrics to each song + `songSection` config
- `src/components/layout/Navbar.tsx` — add SONGS to `NAV_ITEMS`
- `src/components/layout/MobileNav.tsx` — add SONGS to `SECTIONS`
- `src/components/layout/Footer.tsx` — add SONGS to `QUICK_LINKS`
- `src/components/sections/Schedule.tsx` — make song titles clickable `<Link>`s
- `src/app/page.tsx` — import and place `SongsSection` between Schedule and Gallery

## Navigation Integration

### Navbar
- `NAV_ITEMS` gains `{ id: "songs", label: "SONGS" }` (after SCHEDULE)
- handleClick scrolls to `#songs` section

### MobileNav
- `SECTIONS` gains `{ id: "songs", label: "SONGS" }` (after SCHEDULE)

### Footer
- `QUICK_LINKS` gains `{ label: "SONGS", id: "songs" }`

### Schedule
- Song titles in songs list become `<Link href="/songs/[slug]">` with hover underline effect
- Keeps existing bordered card style

## Edge Cases & States
- **First song**: No prev button, only next
- **Last song**: No next button, only prev
- **Loading**: Static generation, no loading state needed
- **Missing song slug**: 404 (Next.js default)
- **Partial lyrics**: All songs have complete lyrics in initial data
- **Mobile**: Reduced font sizes, adjusted spacing
- **Long songs**: Scroll normally, no fixed height

## Out of Scope
- No audio playback
- No chord charts
- No YouTube embed
- No search/filter
