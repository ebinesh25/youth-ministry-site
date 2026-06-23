# ICC Youth Invitation Service

A modern, responsive, single-page event website for the ICC Youth Invitation Service. **All content is driven by a single `event.json` file** — edit the JSON to create a brand new event site.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** (dark mode)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **date-fns** (date utilities)
- **react-confetti** (confetti effects)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How It Works

1. **All content lives in `src/data/event.json`** — every text, image, date, URL, color, and piece of data.
2. **Edit `event.json` to change everything** — title, speaker, date, schedule, gallery, colors, SEO, etc.
3. **Rebuild for production**: `npm run build` — the JSON is statically imported at build time.

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, providers
│   ├── page.tsx            # Composes all sections
│   └── globals.css         # Tailwind + glassmorphism + gradient utilities
├── types/event.ts          # All TypeScript interfaces (edit if JSON shape changes)
├── data/event.json         # THE single source of truth
├── lib/
│   ├── event.ts            # getEventData() — typed JSON accessor
│   ├── utils.ts            # cn(), formatDate(), slugify()
│   ├── calendar.ts         # .ics file generator
│   └── seo.ts              # JSON-LD structured data
├── hooks/                  # useCountdown, useScrollspy, useDarkMode, etc.
├── components/
│   ├── providers/          # EventProvider (data), ThemeProvider (dark/light), ConfettiProvider
│   ├── layout/             # Navbar, Footer, FloatingWhatsApp, ThemeToggle
│   ├── sections/           # 12 page sections (Hero, About, Speakers, etc.)
│   └── ui/                 # 13 reusable UI components (GlassCard, CountdownTimer, Lightbox, etc.)
```

## Sections

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#home` | Full-screen with countdown timer, CTAs, particles |
| About | `#about` | Who We Are, Vision, Mission, Welcome Message |
| Speaker | `#speakers` | Photo, bio, social links with animations |
| Why Attend | `#whyAttend` | Animated feature cards from JSON |
| Schedule | `#schedule` | Timeline layout with durations |
| Highlights | `#highlights` | Theme verse, scripture, key takeaways |
| Gallery | `#gallery` | Masonry layout, category filter, lightbox |
| Testimonials | `#testimonials` | Testimony cards from JSON |
| FAQ | `#faq` | Accordion Q&A from JSON |
| Registration | `#register` | Google Form embed OR custom form with confetti |
| Contact | `#contact` | Phone, email, address, social links |
| Location | `#location` | Google Maps embed + directions buttons |

## Features

- **Live countdown** — updates every second, shows "Event is Live" or "Thank You" automatically
- **Dark/Light mode** — persisted to localStorage
- **Floating WhatsApp** — fixed button with pulse animation
- **Prayer request popup** — modal form with anonymous option
- **Add to Calendar** — downloads .ics file
- **Share Event** — Web Share API / clipboard fallback
- **Reminder** — browser Notification API (1 hour before)
- **Attendee counter** — animated number from JSON
- **Poster download** — downloads event poster image
- **Confetti** — on successful registration
- **Gallery lightbox** — keyboard navigation, swipe support
- **SEO** — dynamic meta, OG tags, Twitter cards, JSON-LD schema
- **Scrollspy nav** — active section highlighting
- **Smooth scroll** — all anchor links
- **Glassmorphism** — consistent glass card design system

## Creating a New Event

1. Duplicate `src/data/event.json`
2. Update all fields for your new event
3. Update images in `public/images/`
4. Run `npm run build`
5. Deploy the `out/` directory

### What to change in event.json

- `event.*` — name, dates, venue, attendee count
- `hero.*` — background image, title, CTA text
- `about.*` — ministry details
- `speaker.*` — speaker info and photo
- `whyAttend[]` — feature cards (add/remove items)
- `schedule[]` — timeline items
- `gallery[]` — images/videos with categories
- `testimonials[]` — testimonial cards
- `faq[]` — question/answer pairs
- `registration.*` — form fields or Google Form URL
- `contact.*` — church contact info
- `socials.*` — social media URLs
- `location.*` — Google Maps embed URL + coordinates
- `seo.*` — page title, description, keywords
- `theme.*` — color scheme preferences

## Build

```bash
npm run build
```

Output is in `.next/`. Deploy to any Node.js host (Vercel, Netlify, Railway, etc.).

## License

Private — ICC Youth Ministry.
