# Song Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 6 individual song pages with full lyrics, a Songs section on the home page, and navigation integration.

**Architecture:** Extend Song type with lyrics data in event.json → dynamic route `/songs/[slug]` → SongsSection component on home page → nav links in Navbar/MobileNav/Footer/Schedule.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion

**Global Constraints**
- No git add/commit/push operations
- All lyrics stored in `event.json` (single source of truth)
- Use existing RYM design language (Montserrat, black borders, bold typography)
- Follow existing component patterns (`useEvent` hook, `AnimatedSection`, etc.)
- Verify with `npm run build` after each task
- No new npm dependencies

---

### Task 1: Data Layer — Types + Lyrics

**Files:**
- Modify: `src/types/event.ts`
- Modify: `src/data/event.json`

**Interfaces:**
- Produces: `LyricLine` interface, updated `Song` interface, `songSection` in `EventData`, full lyrics data in `event.json`

- [ ] **Step 1: Add `LyricLine` type and update `Song`**

In `src/types/event.ts`, add before `Song`:
```ts
export interface LyricLine {
  text: string;
  transliteration?: string;
  section?: "intro" | "verse" | "chorus" | "bridge" | "tag" | "ending";
}
```

Replace existing `Song` interface:
```ts
export interface Song {
  title: string;
  slug: string;
  order: number;
  note?: string;
  language: "tamil" | "english";
  lyrics: LyricLine[];
}
```

Add `songSection` to `EventData` (after `whatsToExpect`):
```ts
songSection: SectionHeadingWithHighlight;
```

- [ ] **Step 2: Add `songSection` config and lyrics to `event.json`**

Add after `whatsToExpect` block:
```json
"songSection": {
  "heading": "SONGS.",
  "headingHighlight": "LIST."
}
```

Replace the existing `songs` array in `whatsToExpect` with full lyric data.

Song 1 — `alangara-vasalale` (Tamil):
```json
{
  "title": "Alangara Vasalale",
  "slug": "alangara-vasalale",
  "order": 1,
  "language": "tamil",
  "lyrics": [
    { "section": "verse", "text": "அலங்கார வாசலாலே\nபிரவேசிக்க வந்து நிற்கிறோம்", "transliteration": "Alangaara vaasalaalae\nPiravaesikka vanthu nirkirom" },
    { "section": "verse", "text": "தெய்வ வீட்டின் நன்மையாலே,\nநிரம்பிட வந்து நிற்கிறோம்", "transliteration": "Theyva veettin nanmaiyaalae,\nNirampida vanthu nirkirom" },
    { "section": "chorus", "text": "ஆராதிக்க வந்தோம், அன்புகூற வந்தோம்\nயெகோவா தேவனையே,\nதுதித்திட வந்தோம் தொழுதிட வந்தோம்\nதூயவர் இயேசுவையே", "transliteration": "Aaraathikka vanthom, anpukoora vanthom\nYekovaa thaevanaiyae,\nThuthiththida vanthom tholuthida vanthom\nThooyavar Yesuvaiyae" },
    { "section": "verse", "text": "ஆலயம் செல்வதே,\nஅது மகிழ்ச்சியை தந்திடுதே..\nஎன் சபையுடனே, உமை தொழுதிடவே\nகிருபையும் கிடைத்திட்டதே", "transliteration": "Aalayam selvathae,\nAthu makilchchiyai thanthiduthae..\nEn sabaiyudanae, umai tholuthidavae\nKirubaiyum kidaithittathae" },
    { "section": "verse", "text": "நன்மை செய்தவர்கே – நாங்கள்\nநன்றி செலுத்துவோமே,\nஎம்காணிக்கையை, உம் கரங்களிலே\nஉற்சாகமாய் விதைக்கிறோமே", "transliteration": "Nanmai seythavarkae – naangal\nNandri seluththuvomae,\nEmkaanikkaiyai, um karangalilae\nUrsaagamaay vithaikkiromae" },
    { "section": "verse", "text": "துதி கணம் மகிமையுமே\nமுழு-மனதோடு செலுத்தினோமே,\nசம்பூரண ஆசிர்வாதங்களால்\nதிருப்தியை அனுப்பிடுமே", "transliteration": "Thuthi kanam mahimaiyumae\nMuzhu-manathodu seluththinomae,\nSampoorana aasirvaathangalaal\nThirupthiyai anuppidumae" }
  ]
}
```

Song 2 — `lord-i-lift-your-name-on-high` (English):
```json
{
  "title": "Lord, I Lift Your Name on High",
  "slug": "lord-i-lift-your-name-on-high",
  "order": 2,
  "language": "english",
  "lyrics": [
    { "section": "verse", "text": "Lord I lift Your name on high\nLord I love to sing Your praises\nI'm so glad You're in my life\nI'm so glad You came to save us" },
    { "section": "verse", "text": "You came from heaven to earth to show the way\nFrom the earth to the cross, my debt to pay\nFrom the cross to the grave, from the grave to the sky\nLord I lift Your name on high" },
    { "section": "chorus", "text": "Lord I lift Your name on high\nLord I love to sing Your praises\nI'm so glad You're in my life\nI'm so glad You came to save us" },
    { "section": "verse", "text": "You came from heaven to earth to show the way\nFrom the earth to the cross, my debt to pay\nFrom the cross to the grave, from the grave to the sky\nLord I lift Your name on high" },
    { "section": "ending", "text": "You came from heaven to earth to show the way\nFrom the earth to the cross, my debt to pay\nFrom the cross to the grave, from the grave to the sky\nLord I lift Your na…" }
  ]
}
```

Song 3 — `unga-naamam-uyaranum` (Tamil):
```json
{
  "title": "Unga Naamam Uyaranum",
  "slug": "unga-naamam-uyaranum",
  "order": 3,
  "language": "tamil",
  "lyrics": [
    { "section": "verse", "text": "உங்க நாமம் உயரணும்\nஇன்று மேன்மை அடையனும்\nபாடுவேன் பாடுவோம் அல்லேலூயா", "transliteration": "Unga naamam uyaranum\nIntu maenmai ataiyanum\nPaaduvaen paaduvom Alleluya" },
    { "section": "tag", "text": "அல்லேலூயா-4\nயாவே அலேல்\nஅல்லேலூயா-2", "transliteration": "Alleluya-4\nYaavae alael\nAlleluya-2" },
    { "section": "verse", "text": "பெருங்காற்றும் அடங்கிப்போகும்\nஎக்கடலும் வழிதிறக்கும்\nஉங்க நாமம் உயர்த்தும்போது\nகன்மலையும் கரைந்து போகும்", "transliteration": "Perungaatrum adangip pogum\nEkkadalum vazhi thirakkum\nUnga naamam uyarthum pothu\nKanmalaiyum karainthu pogum" },
    { "section": "chorus", "text": "இயேசுவே உம் நாமமே\nஉயரனும் அல்லேலூயா\nஇயேசுவே உம் நாமமே\nபெருகனும் அல்லேலூயா-2", "transliteration": "Yesuvae um naamamae\nUyaranum Alleluya\nYesuvae um naamamae\nPeruganum Alleluya-2" },
    { "section": "verse", "text": "சிங்கத்தின் கெபியிலும்\nதீச்சூலை நடுவிலும்\nஉங்க நாமம் உயர்த்தும் போது\nசேதங்கள் அணுகிடாது", "transliteration": "Singaththin kebiyilum\nTheechoolai naduvilum\nUnga naamam uyarthum pothu\nSaethangal anugidaathu" },
    { "section": "verse", "text": "சிறைச்சாலை அடைப்பதில்லை\nசங்கிலிகள் நிரந்தரமில்லை\nஉங்க நாமம் உயர்த்தும்போது\nஅஸ்திபாரம் நிலைப்பதில்லை", "transliteration": "Siraichaalai adaipathillai\nSangiligal nirantharamillai\nUnga naamam uyarthum pothu\nAsthiparam nilaippathillai" }
  ]
}
```

Song 4 — `above-all-communion` (English):
```json
{
  "title": "Above All (Communion)",
  "slug": "above-all-communion",
  "order": 4,
  "language": "english",
  "lyrics": [
    { "section": "verse", "text": "Above all powers\nAbove all kings\nAbove all nature and all created things\nAbove all wisdom and all the ways of man\nYou were here before the world began" },
    { "section": "verse", "text": "Above all kingdoms\nAbove all thrones\nAbove all wonders the world has ever known\nAbove all wealth and treasures of the earth\nThere's no way to measure what you're worth" },
    { "section": "chorus", "text": "Crucified\nLaid behind the stone\nYou lived to die\nRejected and alone\nLike a rose trampled on the ground\nYou took the fall\nAnd thought of me\nAbove all" }
  ]
}
```

Song 5 — `nandri-solli-before-lesson` (Tamil):
```json
{
  "title": "Nandri Solli (Before Lesson)",
  "slug": "nandri-solli-before-lesson",
  "order": 5,
  "language": "tamil",
  "lyrics": [
    { "section": "verse", "text": "நன்றி சொல்லி உம்மை பாட வந்தோம்\nஉம் காருண்யத்தை எண்ணி போற்ற வந்தோம்", "transliteration": "Nanti solli ummai paada vanthom\nUm kaarunnyaththai enni pottra vanthom" },
    { "section": "verse", "text": "வார்த்தையினால் நீர் சொன்னதெல்லாம்\nகரங்களினால் இன்று நிறைவேற்றினீர்", "transliteration": "Vaarththaiyinaal neer sonnathellaam\nKarangalinaal intu niraivaettineer" },
    { "section": "chorus", "text": "நன்றி -2 சொல்வோம் உயிர் உள்ளவரை\nஒன்றும் குறையாமல் காத்திடும் நல்லவரை", "transliteration": "Nanti -2 solvom uyir ullavarai\nOntum kuraiyaamal kaaththidum nallavarai" },
    { "section": "verse", "text": "காற்றுமில்ல மழையுமில்ல\nஆனாலும் வாய்க்காலை நிரப்பினீரே", "transliteration": "Kaattrumilla malaiyumilla\nAanaalum vaaykkaalai nirappineerae" },
    { "section": "verse", "text": "உடன்படிக்கை செய்து நடத்தி வந்தீர்\nமாறாமல் எப்போதும் காத்துக் கொண்டீர்", "transliteration": "Udanpatikkai seythu nadaththi vanthaer\nMaaraamal eppothum kaaththuk konteer" },
    { "section": "verse", "text": "கைவிடாமல் விட்டு விலகிடாமல்\nநெருங்கின பாதையிலும் கூட வந்தீர்", "transliteration": "Kaividaamal vittu vilagidaamal\nNerungina paathaiyilum kooda vanthaer" },
    { "section": "verse", "text": "வெட்கப்பட்ட தேசத்திலே\nகீர்த்தியும் புகழ்ச்சியுமாக்கினீரே", "transliteration": "Vetkappatta thaechathilae\nKeerthiyum pugazhchiyumaakineerae" }
  ]
}
```

Song 6 — `neer-ennai-marakkala-closing` (Tamil):
```json
{
  "title": "Neer Ennai Marakkala (Closing)",
  "slug": "neer-ennai-marakkala-closing",
  "order": 6,
  "language": "tamil",
  "lyrics": [
    { "section": "verse", "text": "வழி தெரிஞ்சும் நா தொலைஞ்சிபோனேன்\nபாத புரியாம பயந்து நின்னேன்", "transliteration": "Vazhi Therinjum Naa Tholanji ponen\nPaadha puriyama bayandhu ninnen" },
    { "section": "verse", "text": "நூறு பேர தேடி நீங்க போகல\nதொலைந்து போன என்ன தேடிவந்திங்க", "transliteration": "Nooru perae thedi neenga pogala\nTholaindhu pona enna thedivandhinga" },
    { "section": "chorus", "text": "நீர் என்ன மறக்கல\nஎன்ன விட்டு விலகல\nஏக்கமுள்ள கண்ணால\nஏங்கித்தான் நின்னீங்க", "transliteration": "Neer enna marakkala\nEnna vittu vilagala\nEkkamulla kannaala\nEngithaan ninneenga" },
    { "section": "chorus", "text": "நீர் என்ன வெறுக்கல\nதள்ளி தூரம் போகல\nகால்கடக்க எனக்காக\nகடல் தாண்டி வந்திங்க", "transliteration": "Neer enna verukkala\nThalli thooram pogala\nKaalkadakka enakkaaga\nKadal thaandi vandhinga" },
    { "section": "verse", "text": "சிறந்ததெல்லாம் கூட்டத்தில் இருக்க\nதரமிழந்த என்னை தேடி வந்தது ஏன்", "transliteration": "Sirandhathellaam koottathil irukka\nDharamizhantha ennai thedi vandhadhu yen" },
    { "section": "verse", "text": "என்ன தேடுவத நீங்க நிறுத்தல\nஉங்க அன்புக்கு ஒரு எல்லை இல்ல", "transliteration": "Enna theduvadha neenga niruthala\nUnga anbukku oru ellai illa" },
    { "section": "verse", "text": "புதியதுவக்கம் எனக்கு தந்திங்க\nஉங்க தோளின் மீது சுமந்து வந்திங்க", "transliteration": "Puthiyathuvakkam enakku thandhinga\nUnga tholin meedhu sumandhu vandhinga" },
    { "section": "verse", "text": "கல்லெறியும் கூட்டத்தின் முன்னே\nஎன் ஆதரவாய் நின்றவர் நீரே", "transliteration": "Kalleriyum koottathin munnae\nEn aadharavaay ninravar neerae" },
    { "section": "verse", "text": "என் கரம்பிடித்து தூக்கினீர்\nஎன் கறைகளெல்லாம் நீக்கினீர்", "transliteration": "En karambidithu thookineer\nEn karaigalaellaam neekineer" },
    { "section": "ending", "text": "உம் பிள்ளையாக மாற்றி விட்டீரே\nஎன்னை தள்ளாத தகப்பன் நீரே", "transliteration": "Um pillaiyaaga maatri vitteerae\nEnnai thallaadha thagappan neerae" }
  ]
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: TypeScript compilation succeeds, no type errors

---

### Task 2: Dynamic Route — Song Pages

**Files:**
- Create: `src/app/songs/[slug]/page.tsx`
- Create: `src/app/songs/[slug]/layout.tsx` (clean layout without Navbar/MobileNav)

**Interfaces:**
- Consumes: `getEventData()`, `Song` type with lyrics
- Produces: `/songs/[slug]` pages for all 6 songs

- [ ] **Step 1: Create song layout**

Create `src/app/songs/[slug]/layout.tsx`:
```tsx
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

export default function SongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.variable}`} style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
      {/* Top bar */}
      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-black uppercase tracking-[-0.05em]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            RYM<span className="text-[#0EA5E9]">.</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.1em] text-[#131B2E] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            BACK TO HOME
          </Link>
        </div>
      </header>
      <main className="min-h-screen bg-white pt-20">{children}</main>
    </div>
  );
}
```

- [ ] **Step 2: Create song page**

Create `src/app/songs/[slug]/page.tsx`:
```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getEventData } from "@/lib/event";

export function generateStaticParams() {
  const data = getEventData();
  return (data.whatsToExpect.songs ?? []).map((song) => ({
    slug: song.slug,
  }));
}

export default function SongPage({ params }: { params: { slug: string } }) {
  const data = getEventData();
  const songs = data.whatsToExpect.songs ?? [];
  const index = songs.findIndex((s) => s.slug === params.slug);

  if (index === -1) notFound();

  const song = songs[index];
  const prevSong = index > 0 ? songs[index - 1] : null;
  const nextSong = index < songs.length - 1 ? songs[index + 1] : null;

  return (
    <div className="mx-auto max-w-[896px] px-6 py-16 max-md:py-10">
      {/* Hero */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center max-md:mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] bg-black text-white">
          SONG {song.order} OF {songs.length}
        </span>
        <h1
          className="text-[64px] font-black uppercase leading-[64px] tracking-[-0.05em] max-md:text-[36px] max-md:leading-[36px]"
          style={{ color: "var(--rym-navy, #131B2E)" }}
        >
          {song.title}
        </h1>
        <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] border-2 border-black">
          {song.language === "tamil" ? "தமிழ் / TAMIL" : "ENGLISH"}
        </span>
        {song.note && (
          <p className="text-sm italic text-black/50">{song.note}</p>
        )}
      </div>

      {/* Lyrics */}
      <div className="flex flex-col items-center gap-8 max-md:gap-6">
        {song.lyrics.map((line, i) => (
          <div key={i} className="flex w-full flex-col items-center gap-3">
            {line.section && (
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] bg-black text-white">
                {line.section === "intro" && "INTRO"}
                {line.section === "verse" && "VERSE"}
                {line.section === "chorus" && "CHORUS"}
                {line.section === "bridge" && "BRIDGE"}
                {line.section === "tag" && "TAG"}
                {line.section === "ending" && "ENDING"}
              </span>
            )}
            <div className="w-full text-center">
              {line.text.split("\n").map((t, j) => (
                <p
                  key={j}
                  className="text-xl font-bold leading-relaxed tracking-[-0.02em] max-md:text-lg"
                  style={{ color: "var(--rym-navy, #131B2E)" }}
                >
                  {t}
                </p>
              ))}
              {line.transliteration && (
                <div className="mt-2">
                  {line.transliteration.split("\n").map((t, j) => (
                    <p
                      key={j}
                      className="text-sm italic leading-relaxed text-black/40 max-md:text-xs"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t-2 border-black/10 pt-8 max-md:mt-10 max-md:flex-col max-md:gap-4">
        {prevSong ? (
          <Link
            href={`/songs/${prevSong.slug}`}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-[-0.02em] text-[#131B2E] transition-opacity hover:opacity-70"
          >
            <ChevronLeft className="h-5 w-5" />
            {prevSong.title}
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.1em] text-[#0EA5E9] transition-opacity hover:opacity-70"
        >
          BACK TO HOME
        </Link>

        {nextSong ? (
          <Link
            href={`/songs/${nextSong.slug}`}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-[-0.02em] text-[#131B2E] transition-opacity hover:opacity-70"
          >
            {nextSong.title}
            <ChevronRight className="h-5 w-5" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with 6 new static pages generated

---

### Task 3: Songs Section on Home Page

**Files:**
- Create: `src/components/sections/SongsSection.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `useEvent()` hook, `Song` type
- Produces: `#songs` section on home page with song cards

- [ ] **Step 1: Create SongsSection component**

Create `src/components/sections/SongsSection.tsx`:
```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEvent } from "@/hooks/useEvent";

export default function SongsSection() {
  const { whatsToExpect, songSection } = useEvent();

  if (!whatsToExpect.songs?.length) return null;

  return (
    <section id="songs" className="w-full bg-white px-[192px] py-[120px] max-lg:px-6 max-md:py-10">
      <div className="mx-auto flex max-w-[896px] flex-col items-stretch gap-8">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <h2
            className="text-center text-[96px] font-black uppercase leading-[96px] tracking-[-0.05em] max-md:text-[40px] max-md:leading-[40px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--rym-navy)",
            }}
          >
            {songSection.heading}
            <br />
            <span className="text-[#0EA5E9]">{songSection.headingHighlight}</span>
          </h2>
        </div>

        {/* Song Cards */}
        <div className="mt-4 flex flex-col gap-3 max-md:mt-2">
          {whatsToExpect.songs.map((song) => (
            <Link
              key={song.slug}
              href={`/songs/${song.slug}`}
              className="group flex items-center gap-8 border-4 border-black p-8 transition-colors hover:bg-black max-md:gap-4 max-md:p-4 max-md:border-2"
            >
              <span
                className="shrink-0 text-base font-black uppercase tracking-[-0.02em] text-[#0EA5E9] max-md:text-sm"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {String(song.order).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3
                  className="text-lg font-black uppercase tracking-[-0.02em] transition-colors group-hover:text-white max-md:text-sm"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: "var(--rym-navy)",
                  }}
                >
                  {song.title}
                </h3>
              </div>
              <ArrowRight
                className="h-6 w-6 shrink-0 text-black transition-colors group-hover:text-white max-md:h-5 max-md:w-5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add SongsSection to page.tsx**

In `src/app/page.tsx`, add import:
```tsx
import SongsSection from "@/components/sections/SongsSection";
```

Place between `<Schedule />` and `<Gallery />`:
```tsx
        <Schedule />
        <SongsSection />
        <Gallery />
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds, SongsSection renders on home page

---

### Task 4: Navigation Integration

**Files:**
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/MobileNav.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/sections/Schedule.tsx`

**Interfaces:**
- Consumes: Song data with `slug` from `useEvent()`
- Produces: Clickable song links in Schedule, SONGS nav items

- [ ] **Step 1: Add SONGS to Navbar**

In `src/components/layout/Navbar.tsx`, update `NAV_ITEMS`:
```tsx
const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "schedule", label: "SCHEDULE" },
  { id: "songs", label: "SONGS" },
  { id: "gallery", label: "GALLERY" },
] as const;
```

- [ ] **Step 2: Add SONGS to MobileNav**

In `src/components/layout/MobileNav.tsx`, update `SECTIONS`:
```tsx
const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "schedule", label: "SCHEDULE" },
  { id: "songs", label: "SONGS" },
  { id: "gallery", label: "GALLERY" },
  { id: "register", label: "REGISTER" },
];
```

- [ ] **Step 3: Add SONGS to Footer**

In `src/components/layout/Footer.tsx`, update `QUICK_LINKS`:
```tsx
const QUICK_LINKS = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "SCHEDULE", id: "schedule" },
  { label: "SONGS", id: "songs" },
  { label: "GALLERY", id: "gallery" },
  { label: "REGISTER", id: "register" },
];
```

- [ ] **Step 4: Make Schedule song titles clickable**

In `src/components/sections/Schedule.tsx`:
- Add `import Link from "next/link";`
- Add `import { slugify } from "@/lib/utils";` (or use `song.slug`)
- Replace the songs list rendering at the bottom:

```tsx
{/* Songs List */}
{whatsToExpect.songs?.length > 0 && (
  <div className="mt-12 max-md:mt-8">
    <h3
      className="mb-4 text-center text-2xl font-black uppercase tracking-[-0.02em] max-md:text-lg"
      style={{
        fontFamily: "var(--font-montserrat), sans-serif",
        color: "var(--rym-navy)",
      }}
    >
      songs list
    </h3>
    <div className="flex flex-wrap justify-center gap-2">
      {whatsToExpect.songs.map((song) => (
        <Link
          key={song.order}
          href={`/songs/${song.slug}`}
          className="w-full inline-flex items-center border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-[-0.02em] transition-colors hover:bg-black hover:text-white max-md:text-xs max-md:px-3 max-md:py-1.5"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--rym-navy)",
          }}
        >
          <span className="mr-2 text-[#0EA5E9]">{song.order}.</span>
          {song.title}
        </Link>
      ))}
    </div>
  </div>
)}
```

- [ ] **Step 5: Final build verification**

Run: `npm run build`
Expected: Build succeeds. All navigation works: Navbar SONGS link scrolls to Songs section, song cards link to individual pages, Schedule song titles are clickable, song pages have prev/next navigation.
