# Worship Venues Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement plan. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Add regional worship venue cards to the existing Location section

**Architecture:** New `venues` array in event.json → `Venue` type in types → rendered in Location.tsx below info items as 3-col grid cards

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Lucide icons

## Global Constraints

- All display text must come from event.json
- Follow existing visual patterns (black borders, Montserrat, #0EA5E9 accent)
- No new file creation — modify existing files only

---

### Task 1: Data + Types

**Files:**
- Modify: `src/data/event.json`
- Modify: `src/types/event.ts`

- [ ] **Step 1: Add venues array to event.json**

Insert before the `contact` section:

```json
  "venues": [
    {
      "region": "CENTRAL REGION",
      "dayTime": "Every Sunday 10:00 AM",
      "address": [
        "Daniel Thomas School",
        "11A, Perumal Koil Street, Razaak Garden,",
        "Ayyavoo Colony, Arumbakkam,",
        "Chennai – 600106"
      ]
    },
    {
      "region": "NORTH REGION",
      "dayTime": "",
      "address": [
        "New No. 3/4, Old No. 172,",
        "Washer Varadhappan Street,",
        "1st Floor, New Washermenpet,",
        "Chennai – 600081",
        "Landmark: Opposite to N4 Beach"
      ]
    },
    {
      "region": "WEST REGION",
      "dayTime": "",
      "address": [
        "FZ Party Hall",
        "100, N Park Street, Venkatapuram,",
        "Ambattur, Chennai – 600053"
      ]
    },
    {
      "region": "TAMBARAM REGION",
      "dayTime": "",
      "address": [
        "Patras Mini Party Hall",
        "VK Nagar, Indira Nagar,",
        "Selaiyur, Chennai – 600073"
      ]
    },
    {
      "region": "POONAMALLEE ZONE",
      "dayTime": "",
      "address": [
        "Community Hall",
        "Kandhasamy Nagar,",
        "Sarojini Varadhappan Girls School,",
        "Poonamallee, Chennai – 600056"
      ]
    },
    {
      "region": "SOUTH REGION",
      "dayTime": "Every Sunday 11:00 AM",
      "address": [
        "Muthamizh Peravai",
        "92, Durgabai Deshmukh Road,",
        "Near Sathya Studio, Opp. Dr. MGR Janaki College,",
        "Raja Annamalai Puram,",
        "Chennai – 600028"
      ]
    }
  ],
```

- [ ] **Step 2: Add Venue type to types/event.ts**

Add before `EventData`:

```ts
export interface Venue {
  region: string;
  dayTime: string;
  address: string[];
}
```

Add `venues: Venue[];` to `EventData` interface.

- [ ] **Step 3: Verify tsc**

Run: `npx tsc --noEmit`
Expected: no errors

### Task 2: Render Venue Cards in Location.tsx

**Files:**
- Modify: `src/components/sections/Location.tsx`

- [ ] **Step 1: Update imports**

Add `ChevronRight` to lucide-react imports on line 3.

- [ ] **Step 2: Destructure venues**

Line 7: Change `const { location, contact, event } = useEvent();` to `const { location, contact, event, venues } = useEvent();`

- [ ] **Step 3: Add venue cards grid below the info items**

After the closing `</div>` of the info items (line 48 area), before the closing `</div>` of the left column (line 49), add:

```tsx
          {/* Regional Venues */}
          {venues.length > 0 && (
            <div className="mt-8 flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-[0.1em] text-black/40">
                FIND A PLACE NEAR YOU
              </h3>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                {venues.map((venue, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 border-2 border-black p-3"
                  >
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.1em] text-[#0EA5E9]"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {venue.region}
                    </span>
                    {venue.dayTime && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.05em] text-black/60"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                      >
                        {venue.dayTime}
                      </span>
                    )}
                    <div className="mt-1 flex flex-col gap-0">
                      {venue.address.map((line, j) => (
                        <span
                          key={j}
                          className="text-[10px] leading-tight text-[#3E4850]"
                          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
```

- [ ] **Step 4: Verify tsc**

Run: `npx tsc --noEmit`
Expected: no errors
