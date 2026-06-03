# BitcoinInfoNews — Layout Blueprint
### Version 2.0 · Homepage + Article Page · Desktop-First · Aurora UI

---

> This blueprint defines the structural anatomy of BitcoinInfoNews page templates. It is derived from the NOVA dashboard reference image and adapted to the brand system defined in `Brand.md`. All designers and developers must read this document alongside `Brand.md` before building any layout component. No code is included — this is a structural and decision document only.

---

## Table of Contents

1. [Reference Analysis: NOVA Adaptation](#1-reference-analysis-nova-adaptation)
2. [Section Order — Page Templates](#2-section-order--page-templates)
3. [Above-the-Fold Viewport Map](#3-above-the-fold-viewport-map)
4. [Zone 1 — Global Navigation Bar](#4-zone-1--global-navigation-bar)
5. [Zone 2 — Hero Section](#5-zone-2--hero-section)
6. [Zone 3 — Dashboard Card Row](#6-zone-3--dashboard-card-row)
7. [Zone 4 — Main Content Grid](#7-zone-4--main-content-grid)
8. [Zone 5 — Footer](#8-zone-5--footer)
9. [Article Page Layout](#9-article-page-layout)
10. [Responsive Behavior Summary](#10-responsive-behavior-summary)
11. [Component State Definitions](#11-component-state-definitions)
12. [Z-Index Stacking Order](#12-z-index-stacking-order)
13. [Scroll & Animation Blueprint](#13-scroll--animation-blueprint)
14. [Content Priority Map](#14-content-priority-map)
15. [Design Tokens Applied](#15-design-tokens-applied)

---

## 1. Reference Analysis: NOVA Adaptation

The NOVA space dashboard provides the direct visual reference for this layout system. The table below documents every structural decision made in adapting NOVA's interface language to a Bitcoin news publication.

| NOVA Element | BitcoinInfoNews Adaptation | Rationale |
|---|---|---|
| Full-bleed cinematic hero | Full-bleed Bitcoin/market hero with Aurora glow | Same atmospheric depth; swaps space imagery for financial drama |
| Left text + right visual split | Headline left + Hero visual center | Preserves the asymmetric tension that draws the eye |
| Floating stat column (far right) | Live market stats column (BTC price, volume, dominance) | NOVA's mission count → our real-time financial data |
| Status badge "System: Nominal" | Market Status badge (Bullish / Bearish / Neutral) | Direct semantic equivalent — system health → market health |
| Bottom card row (Fleet, Scan, Timeline) | Dashboard cards (Featured Story, Breaking, Price Chart, News Timeline) | Most powerful layout pattern from NOVA; adapted 1:1 |
| Left-edge vertical scroll indicator | Scroll invitation indicator | Preserved as-is — clear, unobtrusive UX pattern |
| Sticky top navigation | Sticky navigation bar | Standard; reinforced with Aurora blur-on-scroll effect |
| Glassmorphism floating info card | Floating price/story card over hero visual | Direct lift; fits Aurora UI glassmorphism pillar perfectly |

---

## 2. Section Order — Page Templates

### Homepage

Five stacked zones, read top to bottom. Zone 3 visually overlaps Zone 2 by 40px to create depth continuity.

```
┌──────────────────────────────────────────────────────────┐
│  ZONE 1 — Global Navigation Bar                          │
│  sticky · 64px height · z-index 100                      │
├──────────────────────────────────────────────────────────┤
│  ZONE 2 — Hero Section                                   │
│  100vh (min 640px / max 860px) · 3-column split          │
│  ├── Col 1–4:  Status Badge + Headline + CTA             │
│  ├── Col 5–9:  Hero Visual + Floating Info Card          │
│  └── Col 10–12: Live Market Stats Column                 │
├──────────────────────────────────────────────────────────┤
│  ZONE 3 — Dashboard Card Row            ← overlaps Z2    │
│  4-up equal cards · margin-top: -40px                    │
│  ├── Card A: Featured Story                              │
│  ├── Card B: Breaking News                               │
│  ├── Card C: Price / Market Widget                       │
│  └── Card D: News Timeline                               │
├──────────────────────────────────────────────────────────┤
│  ZONE 4 — Main Content Grid                              │
│  8-col article feed + 4-col sticky sidebar               │
├──────────────────────────────────────────────────────────┤
│  ZONE 5 — Footer                                         │
│  4-column · full-width · Void Black bg                   │
└──────────────────────────────────────────────────────────┘
```

### Article Page

Four zones — no hero, no dashboard card row.

```
┌──────────────────────────────────────────────────────────┐
│  ZONE 1 — Global Navigation Bar (same as homepage)       │
├──────────────────────────────────────────────────────────┤
│  ZONE A — Article Header                                 │
│  Full-width hero image + category + title + meta         │
├──────────────────────────────────────────────────────────┤
│  ZONE B — Article Body + Sidebar                         │
│  7-col body column + 5-col sticky sidebar                │
├──────────────────────────────────────────────────────────┤
│  ZONE C — Post-Article (Related + Comments)              │
├──────────────────────────────────────────────────────────┤
│  ZONE 5 — Footer (same as homepage)                      │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Above-the-Fold Viewport Map

What a first-time visitor sees on desktop (1280px wide) **before any scrolling**, immediately after page load.

```
Viewport height: 100vh (e.g. 900px on typical desktop)
Nav bar height: 64px
Usable hero canvas: 836px (900 - 64)

┌──────────────────────────── 1280px ─────────────────────────────┐
│ [B] InfoNews.  News  Prices  Heatmap  Calculators  About   🔍 🔔 │  ← 64px NAV
├──────────┬────────────────────────────────────────┬─────────────┤
│          │                                        │  BTC PRICE  │
│ MARKET   │                                        │  $94,250 ▲  │
│ STATUS   │                                        │ ─────────── │
│ BULLISH  │       HERO VISUAL / IMAGE              │  VOLUME     │
│          │       (atmospheric, full-bleed)        │  $38.2B     │
│ UNDER-   │                                        │ ─────────── │
│ STAND.   │    ┌─────────────────┐                 │  DOMINANCE  │
│ VERIFY.  │    │ BTC TARGET      │  ← floating     │  54.3%      │
│ INVEST.  │    │ $100,000        │    glass card   │             │
│          │    └─────────────────┘                 │             │
│ [READ]   │                                        │             │  ← 836px
│ [PRICES] │                                        │             │
│          │                                        │             │
│    ↓     │                                        │             │
├──────────┴────────────────────────────────────────┴─────────────┤
│ ░░░░░░░░░ DASHBOARD CARD ROW begins here ░░░░░░░░░░░░░░░░░░░░░░ │  ← partially
└─────────────────────────────────────────────────────────────────┘    visible
```

**Above-the-fold checklist:**
- Logo is visible → brand recognition ✓
- Market Status badge is visible → immediate context ✓
- All 3 headline lines visible → full message delivered ✓
- Both CTA buttons visible → clear next action ✓
- Live stats column visible → value proposition demonstrated ✓
- Top of Dashboard Cards partially visible → scroll invitation ✓
- Floating info card visible → premium aesthetic established ✓

**Critical constraint:** The hero must never push the CTA buttons below the fold. If headline text is longer than 3 lines, reduce font size rather than growing the left column height.

---

## 4. Zone 1 — Global Navigation Bar

### Layout Type
Fixed horizontal bar · Full-width · Sticky on scroll · Always above all content

### Column Structure

```
┌──────────────────────────────── 100% viewport ──────────────────────────────┐
│  [B] InfoNews.  │  News · Prices · Heatmap · Calculators · About  │  🔍 🔔 👤 │
│  ←── 160px ──→  │  ←────────────── flex-grow, centered ──────────→│  ←─auto─→ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Content Hierarchy

**Region 1 — Logo (Left)**

| Property | Value |
|---|---|
| Visual priority | Highest — never hidden or obscured |
| Content | [B] InfoNews. full horizontal lockup |
| Logo height | 32px |
| Left padding | 24px from viewport edge |
| Right margin | 24px before nav links begin |

**Region 2 — Primary Navigation (Center)**

| Property | Value |
|---|---|
| Visual priority | High |
| Links (L→R) | News · Live Prices · Heatmap · Calculators · About |
| Default state | Inter 14px, weight 500, color Mist `#A0A0A0` |
| Hover state | Color White `#FFFFFF`, transition 150ms ease |
| Active state | Color Bitcoin Amber `#F7931A` + 2px bottom border Amber |
| Dropdown | Calculators only — hover trigger, 150ms open animation |

**Region 3 — Utility Actions (Right)**

| Property | Value |
|---|---|
| Visual priority | Medium |
| Elements | Search icon · Notification bell (red dot if unread) · Avatar/menu |
| Gap between elements | 16px |
| Search behavior | Click expands to full-width inline bar; nav links compress left |
| Search expand animation | Width 0 → 280px, 200ms ease-out; placeholder "Search Bitcoin news…" |
| Right padding | 24px from viewport edge |

### Bar Specifications

| Property | Value |
|---|---|
| Height desktop | 64px |
| Height mobile | 56px |
| Background default | `#111111` |
| Background on scroll | `#111111` + `backdrop-filter: blur(16px)` |
| Border bottom | `1px solid #2A2A2A` |
| Position | `sticky`, `top: 0` |
| Z-index | `100` (see Z-Index table) |
| Hamburger breakpoint | `< 1024px` (lg breakpoint) — nav links collapse to hamburger |

### Mobile Nav Overlay

Triggered by hamburger icon at `< 1024px`:

```
┌─────────────────────────────┐
│ [B] InfoNews.          [✕]  │  ← 56px header row
├─────────────────────────────┤
│ News                  [›]   │
│ Live Prices           [›]   │
│ Heatmap               [›]   │
│ Calculators           [›]   │  ← sub-items expand inline
│   Mining Calculator         │
│   Profit Calculator         │
│   Tax Calculator            │
│ About                 [›]   │
├─────────────────────────────┤
│ [🔍 Search]                 │
└─────────────────────────────┘
```

- Background: `rgba(10,10,10,0.98)`
- Each row: 56px height, `border-bottom: 1px solid #2A2A2A`
- Font: Inter 18px, weight 500, White
- Overlay entrance: `translateX(100%) → translateX(0)`, 250ms ease-out

---

## 5. Zone 2 — Hero Section

### Layout Type
Full-bleed canvas · Three-column asymmetric split · Viewport-height fixed

### Dimensions

| Property | Value |
|---|---|
| Height | `100vh` (min 640px, max 860px) |
| Width | 100% viewport |
| Content container | Max-width 1200px, centered, padding 0 24px |
| Background | Full-bleed atmospheric image — Bitcoin mining rigs, city skyline, abstract network |
| Image overlay | `linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.6) 100%)` |
| Aurora accent | Radial glow `rgba(247,147,26,0.08)` centered on hero visual |

### Column Structure

```
12-column grid, max-width 1200px

│← Col 1 ─── Col 4 →│← Col 5 ──────── Col 9 →│← Col 10 ── Col 12 →│
│     ~33%            │         ~42%             │        ~25%         │
│                     │                          │                     │
│  LEFT CONTENT       │  CENTER VISUAL           │  RIGHT STATS        │
│  Status Badge       │  Hero Image              │  BTC Price Tile     │
│  Headline ×3        │  Floating Info Card      │  Volume Tile        │
│  Subheadline        │                          │  Dominance Tile     │
│  CTA Pair           │                          │                     │
│  Scroll Indicator   │                          │                     │
```

### Left Column — Content Stack

Visual priority order from top to bottom (NOT semantic HTML heading tags — see semantic notes below):

| Visual Priority | Element | Spec |
|---|---|---|
| P1 — Context | Status Badge | Pill, 11px uppercase, `#1A1A1A` bg, colored dot |
| P2 — Primary message | Display Headline ×3 lines | Inter 800, 64px, lines 1–2 white, line 3 Amber |
| P3 — Supporting | Subheadline descriptor | Inter 400, 18px, Mist `#A0A0A0`, max 2 lines |
| P4 — Action | CTA Button Pair | Primary (white) + Secondary (ghost), 48px height |
| P5 — Navigation aid | Scroll Indicator | Left-absolute, 1px line + arrow, delayed fade-in |

> **Semantic HTML note:** Visual priority P1–P5 above describes design weight only. The actual HTML heading structure must be: `<h1>` = Display Headline (the page's unique SEO title), `<p>` = Subheadline, `<div>` = Status Badge (it is not a heading). Never wrap the Status Badge in a heading tag.

### Status Badge

Adapted from NOVA's "System Status · Nominal":

```
[ MARKET STATUS  •  BULLISH ]
```

| Property | Value |
|---|---|
| Background | `#1A1A1A` |
| Border | `1px solid #2A2A2A` |
| Border-radius | 9999px (full pill) |
| Padding | 6px 14px |
| Font | Inter 11px, weight 500, uppercase, letter-spacing 0.06em |
| Dot color | Bullish: `#00C896` · Bearish: `#FF4D4D` · Neutral: `#FFB800` |
| Dot size | 6px circle, 4px margin-right |

### Display Headline

```
UNDERSTAND.          ← Inter 800, 64px, White #FFFFFF
VERIFY.              ← Inter 800, 64px, White #FFFFFF
INVEST.              ← Inter 800, 64px, Bitcoin Amber #F7931A
```

- All-caps treatment only for hero headline — unique to this component
- Line height: 1.05, letter-spacing: -0.03em
- Max 3 lines — do not allow wrapping to 4 lines
- Mobile: reduce to 40px at md breakpoint, 32px at sm breakpoint

### CTA Button Pair

| Property | Primary CTA | Secondary CTA |
|---|---|---|
| Label | READ TOP STORIES → | LIVE PRICES + |
| Background | White `#FFFFFF` | Transparent |
| Text color | Void Black `#0A0A0A` | White `#FFFFFF` |
| Border | None | `1px solid rgba(255,255,255,0.4)` |
| Height | 48px | 48px |
| Padding | 0 24px | 0 24px |
| Border-radius | 8px | 8px |
| Gap between | 16px | — |
| Hover (Primary) | Background `#F0F0F0` | — |
| Hover (Secondary) | — | Border `rgba(255,255,255,0.8)`, bg `rgba(255,255,255,0.05)` |

### Center Canvas — Hero Visual

| Property | Value |
|---|---|
| Content | Full-height atmospheric image, object-fit cover |
| Floating info card position | Bottom-right of column, 24px from bottom, 16px from right edge |
| Floating card bg | `rgba(17,17,17,0.75)`, `backdrop-filter: blur(12px)` |
| Floating card border | `1px solid rgba(255,255,255,0.12)` |
| Floating card border-radius | 12px |
| Floating card padding | 16px 20px |
| Floating card content | Label (11px uppercase Mist) + Value (JetBrains Mono 28px White) |
| Floating card example | LABEL: "BTC PRICE TARGET" · VALUE: "$100,000" |

### Right Stats Column — Live Market Metrics

```
    [icon 24px]
    $94,250          ← JetBrains Mono, 32px, White
    ▲ +4.72%         ← 14px, Aurora Green #00C896
    BTC PRICE        ← Inter 11px uppercase, Mist
    ─────────────────   1px solid #2A2A2A
    [icon 24px]
    $38.2B           ← JetBrains Mono, 28px, White
    24H VOLUME       ← Inter 11px uppercase, Mist
    ─────────────────
    [icon 24px]
    54.3%            ← JetBrains Mono, 28px, White
    BTC DOMINANCE    ← Inter 11px uppercase, Mist
```

- Each tile padding: 20px 0
- Divider: `1px solid #2A2A2A`
- Live update: `aria-live="polite"` wrapper on each number
- Price change color: Aurora Green if positive, Alert Red if negative

### Scroll Indicator (Left Edge)

- Position: absolute, `left: 0`, `bottom: 48px`, within hero bounds
- Style: `1px solid #2A2A2A` vertical line, 48px height + chevron-down icon 16px below
- Color: Mist `#A0A0A0`
- Animation: fade-in at 2s after page load; fade-out on first scroll event
- Label (optional): "SCROLL TO EXPLORE" — 10px, uppercase, Mist, rotated 90° CW

---

## 6. Zone 3 — Dashboard Card Row

### Layout Type
Horizontal card strip · 4 equal-width cards · Overlaps Zone 2 bottom by 40px · Elevated via z-index

### Overlap Effect
Zone 3 uses `margin-top: -40px` relative to Zone 2 bottom edge, and `z-index: 10` to layer above the hero. This creates the visual continuity seen in the NOVA reference where the card row appears to float over the background.

### Column Structure

```
Max-width 1200px · 4 equal columns · 16px gap

│ ← ~25% → │ ← ~25% → │ ← ~25% → │ ← ~25% → │
│           │           │           │           │
│  CARD A   │  CARD B   │  CARD C   │  CARD D   │
│ Featured  │ Breaking  │  Market   │ Timeline  │
│  Story    │   News    │  Widget   │   Feed    │
```

Tablet (768–1024px): 2×2 grid, 16px gap
Mobile (< 768px): single column, 12px gap

### Card A — Featured Story

```
┌─────────────────────────────────────┐
│ [CATEGORY TAG]         [counter 3/5]│  ← card header, 11px
│ ┌─────────────────────────────────┐ │
│ │     THUMBNAIL IMAGE 16:9        │ │  ← image, gradient overlay bottom
│ │     gradient overlay at bottom  │ │
│ └─────────────────────────────────┘ │
│ Story Headline — 2 lines max        │  ← Inter 15px, weight 600, White
│ Author name · Jun 1, 2026           │  ← 12px, Mist
│ [Read More →]                       │  ← 12px, Amber, hover underline
│ ═══════════════════════   82%       │  ← progress bar, Aurora Green
└─────────────────────────────────────┘
```

- Image aspect: 16:9, `object-fit: cover`
- Image gradient: `linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.9) 100%)`
- Progress bar: represents story count position (e.g. story 3 of 5 in section)

### Card B — Breaking / Next Story

```
┌─────────────────────────────────────┐
│ [CATEGORY TAG]         [LIVE badge] │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │     LARGE THUMBNAIL             │ │  ← ~60% card height
│ │     (dominant visual)           │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│ Story Headline — 2 lines            │  ← Inter 15px, weight 600
│ Source · Date                       │  ← 12px, Mist
│                              [↗]    │  ← open arrow, top-right
└─────────────────────────────────────┘
```

- If breaking news: replace category tag with red "BREAKING" badge
- "LIVE" badge: Aurora Green bg `rgba(0,200,150,0.15)`, Green text

### Card C — Market / Price Widget

```
┌─────────────────────────────────────┐
│ BITCOIN PRICE              [LIVE]   │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │  ╱╲  ╱╲   /\  ╱               │ │  ← sparkline chart
│ │╱    ╲   ╲╱  ╲╱                 │ │    green/red semantic
│ └─────────────────────────────────┘ │
│ $94,250.32          ▲ +4.72%        │  ← JetBrains Mono 24px
│ 7 signals detected                  │  ← 12px, Mist
│                [VIEW FULL →]        │  ← 12px, Amber
└─────────────────────────────────────┘
```

- Background: `#242424` (Graphite) — slightly lighter than other cards for visual contrast
- Sparkline: SVG line chart, 48px height, no axes, green if trending up, red if trending down

### Card D — News Timeline

```
┌─────────────────────────────────────┐
│ LATEST NEWS               UPCOMING  │
│                                     │
│ ●─ Engine Calibration  COMPLETE     │  ← dot: green, text: Mist
│ ●─ Breaking: ETF News   18:40       │  ← dot: amber, text: White
│ ┌────────────────────────────────┐  │
│ │ ● Arrival: BTC $100K  2D 14H  │  │  ← active item: elevated card
│ └────────────────────────────────┘  │
│ ●─ Weekly Market Wrap   PENDING     │  ← dot: grey, text: Mist/50%
└─────────────────────────────────────┘
```

- Timeline dot states: Complete `#00C896` · In Progress `#FFB800` · Active `#FFFFFF` · Pending `#2A2A2A`
- Active item: sub-card with `background: #242424`, `border: 1px solid rgba(255,255,255,0.15)`, `border-radius: 8px`

### Card Shared Specifications

| Property | Value |
|---|---|
| Background | `#1A1A1A` (Carbon) |
| Border default | `1px solid #2A2A2A` |
| Border hover | `1px solid rgba(247,147,26,0.4)` |
| Border-radius | 12px |
| Padding | 16px |
| Min height | 280px |
| Card header | 11px Inter uppercase Mist (label left, badge right) |
| Hover ambient | `box-shadow: 0 0 24px rgba(247,147,26,0.08)` |
| Hover transition | border-color + box-shadow, 200ms ease |

---

## 7. Zone 4 — Main Content Grid

### Layout Type
Two-column asymmetric editorial layout · Left scrolls freely · Right sidebar sticky

### Column Structure

```
12-column grid, max-width 1200px, 24px gutter

│← Col 1 ──────────────── Col 8 →│← Col 9 ──── Col 12 →│
│            ~66%                  │        ~34%           │
│                                  │                       │
│  ARTICLE FEED                    │  SIDEBAR              │
│  Scrollable                      │  Sticky: top 88px     │
│                                  │  (64px nav + 24px gap)│
```

Sidebar sticky offset: `top: 88px` = 64px nav height + 24px breathing gap

### Left Column — Article Feed

**Content level hierarchy within the feed:**

#### Level 1 — Section Header

```
BITCOIN NEWS                          [View All →]
──────────────────────────────────────────────────
```

- Label: Inter 13px, weight 500, uppercase, letter-spacing 0.06em, Mist
- Link: 12px, Amber, right-aligned
- Divider: `1px solid #2A2A2A`, full column width
- Margin bottom: 24px

#### Level 2 — Top Story Card (Full-width)

```
┌────────────────────────────────────────────────────┐
│ [CATEGORY TAG]                          [Jun 1]    │
│ ┌──────────────────────────────────────────────┐   │
│ │          THUMBNAIL — full width 16:9         │   │
│ └──────────────────────────────────────────────┘   │
│ Story Headline — up to 2 lines, Inter 24px 700      │
│ Excerpt — 2 lines, 16px, Mist                       │
│ Author Name  ·  5 min read  ·  [Share ↗]            │
└────────────────────────────────────────────────────┘
```

#### Level 3 — Secondary Story Grid (2-up)

```
┌──────────────────────┐  ┌──────────────────────┐
│ [Thumbnail 16:9]     │  │ [Thumbnail 16:9]     │
│ [Tag]                │  │ [Tag]                │
│ Headline 2 lines     │  │ Headline 2 lines     │
│ Author · Date        │  │ Author · Date        │
└──────────────────────┘  └──────────────────────┘
```

- Each card: `background: #1A1A1A`, border, radius-lg, padding 0 0 16px
- Headline: Inter 16px, weight 600
- 2-column CSS grid, 16px gap

#### Level 4 — Compact List Stories

```
┌────────────┬────────────────────────────────────┐
│ [80×80px]  │ [TAG]  Headline up to 2 lines       │
│ thumbnail  │ Author · Date                       │
├────────────┼────────────────────────────────────┤
│ [80×80px]  │ [TAG]  Headline up to 2 lines       │
│ thumbnail  │ Author · Date                       │
└────────────┴────────────────────────────────────┘
```

- Thumbnail: 80×80px fixed, `border-radius: 8px`, `object-fit: cover`
- Row height: 80px, `border-bottom: 1px solid #2A2A2A`
- Headline: 14px, weight 500, max 2 lines, `text-overflow: ellipsis`
- No excerpt in this level

#### Level 5 — Sponsored / Press Release Story

Visually distinct treatment within feed to satisfy editorial transparency:

```
┌────────────────────────────────────────────────────┐
│ ▲ SPONSORED                           [SPONSOR]    │  ← amber top-border 2px
│ [Thumbnail]                                        │
│ Headline                                           │
│ "This is sponsored content."                       │  ← 11px Mist, italic
└────────────────────────────────────────────────────┘
```

- Top border: 2px solid `#FFB800` (Caution Amber)
- "SPONSORED" badge: Caution Amber text, 11px uppercase
- Disclaimer line: mandatory, 11px italic Mist

#### Level 6 — Load More

```
──────────────  LOAD MORE STORIES  ──────────────
```

- Ghost button: full column width, 48px height, `border: 1px solid #2A2A2A`
- Hover: border → Amber 40%, background → `rgba(247,147,26,0.04)`
- On click: appends next batch, no full page reload

#### Feed Section Order (top to bottom)

1. Bitcoin News — top 1 featured + 2-up grid + compact list
2. Markets & Analysis — same pattern
3. Altcoin News — compact list only (lower editorial priority)
4. Mining — top 1 featured + compact list
5. Guides — 2-up grid only
6. Press Releases — clearly labeled, separate visual treatment, bottom of feed

---

### Right Column — Sidebar

Sidebar is `position: sticky`, `top: 88px`, height `calc(100vh - 112px)`, `overflow-y: auto`.

Scrolls independently from main content, stops at footer.

**S1 — Live Bitcoin Price Widget**

```
┌──────────────────────────────────────┐  ← amber left-border 2px
│ BITCOIN                         LIVE │
│ $94,250.32              ▲ +4.72%    │  ← Mono 24px, Green %
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │  ← sparkline 40px
│ 24H High  $95,100    Low  $91,840   │  ← 12px, Mist
└──────────────────────────────────────┘
```

**S2 — Trending Topics**

```
┌──────────────────────────────────────┐
│ TRENDING NOW                         │
│ 01  Bitcoin ETF              ›       │
│ 02  Halving 2028             ›       │
│ 03  Lightning Network        ›       │
│ 04  MicroStrategy            ›       │
│ 05  Ordinals                 ›       │
└──────────────────────────────────────┘
```

**S3 — Newsletter Signup**

```
┌──────────────────────────────────────┐  ← amber glow-bg token
│ STAY INFORMED                        │
│ Weekly Bitcoin digest, no noise.     │
│ ┌────────────────────────────────┐   │
│ │ your@email.com                 │   │
│ └────────────────────────────────┘   │
│ [      SUBSCRIBE →               ]   │
└──────────────────────────────────────┘
```

**S4 — Top Movers**

```
┌──────────────────────────────────────┐
│ TOP MOVERS                    24H    │
│ BTC   $94,250            +4.72%      │
│ ETH   $3,412             +2.10%      │
│ SOL   $185               -1.40%      │
│ BNB   $612               +0.88%      │
└──────────────────────────────────────┘
```

**S5 — Related Press Releases**

```
┌──────────────────────────────────────┐  ← signal blue top-border 2px
│ PRESS RELEASES              [PR]     │
│ Headline one — two lines max  May 30 │
│ Headline two — two lines max  May 29 │
│ Headline three                May 28 │
│                       View All →     │
└──────────────────────────────────────┘
```

---

## 8. Zone 5 — Footer

### Layout Type
Full-width · Dark surface · 4-column editorial grid + bottom legal bar

### Column Structure

```
12-column grid, max-width 1200px, padding 64px 24px 48px

│ Col 1–3  │ Col 4–6  │ Col 7–9  │ Col 10–12 │
│  ~25%    │  ~25%    │  ~25%    │  ~25%     │
│ Brand    │ Content  │ Tools    │ Company   │
```

### Content per Column

**Col 1–3 — Brand**

```
[B] InfoNews.  (full lockup, 28px height)
"Useful Bitcoin information should be easier
to find, easier to understand, easier to trust."
(13px, Mist, max 2 lines)

[X icon]  [Facebook icon]  [Instagram icon]
(20px icons, 16px gap, Mist color, hover: White)
```

**Col 4–6 — Content**

```
CONTENT  (12px uppercase label, letter-spacing 0.06em, Mist)
Bitcoin News
Markets
Guides
Mining
Ecosystem
(14px, White, 32px row height, hover: Amber)
```

**Col 7–9 — Tools**

```
TOOLS
Live Prices
Heatmap
Mining Calculator
Profit Calculator
Tax Calculator
```

**Col 10–12 — Company**

```
COMPANY
About Us
Contact
Advertise / PR
Press Kit

[Financial disclaimer — 11px, Mist, italic, max 3 lines]
```

### Footer Legal Bar

Full-width row below the 4-column block:

```
────────────────────────────────────────── 1px solid #2A2A2A ──────

© 2026 BitcoinInfoNews  ·  Privacy Policy  ·  Terms  ·  Content Disclaimer  ·  Cookies
```

- Font: Inter 12px, Mist `#A0A0A0`
- Background: `#0A0A0A` (Void — deepest layer)
- Padding: 20px 24px

---

## 9. Article Page Layout

### Section Order

```
┌──────────────────────────────────────────────────────────┐
│  ZONE 1 — Navigation Bar (identical to homepage)         │
├──────────────────────────────────────────────────────────┤
│  ZONE A — Article Header                                 │
│  Full-width hero image + breadcrumb + title + meta       │
├──────────────────────────────────────────────────────────┤
│  ZONE B — Article Body + Sidebar                         │
│  7-col body + 5-col sticky sidebar                       │
├──────────────────────────────────────────────────────────┤
│  ZONE C — Post-Article Zone                              │
│  Related articles + Social share + Newsletter CTA        │
├──────────────────────────────────────────────────────────┤
│  ZONE 5 — Footer (identical to homepage)                 │
└──────────────────────────────────────────────────────────┘
```

---

### Zone A — Article Header

#### Layout Type
Full-width · Image behind · Content overlaid via gradient · Max-width container for text

```
┌──────────────────────── 100% viewport ────────────────────────────────┐
│                                                                        │
│     [ARTICLE HERO IMAGE — 100% width, 480px height, object-fit cover] │
│     [gradient overlay: rgba(10,10,10,0) → rgba(10,10,10,0.95)]        │
│                                                                        │
│  ┌─── max-width 860px centered ─────────────────────────────────────┐ │
│  │  Bitcoin News  ›  Markets               ← breadcrumb, 12px Mist  │ │
│  │                                                                   │ │
│  │  [SPONSORED] ← badge if applicable                               │ │
│  │                                                                   │ │
│  │  Article Headline — H1, Inter 700, 40px, White                   │ │
│  │  Up to 2 lines, no truncation                                    │ │
│  │                                                                   │ │
│  │  By Author Name  ·  Jun 1, 2026  ·  5 min read  ·  [Share ↗]    │ │
│  └───────────────────────────────────────────────────────────────── ┘ │
└────────────────────────────────────────────────────────────────────────┘
```

**Article header specs:**

| Property | Value |
|---|---|
| Hero image height | 480px desktop · 280px mobile |
| Image overlay | Gradient bottom-heavy: transparent top → `rgba(10,10,10,0.95)` bottom |
| Breadcrumb | 12px, Mist, separator `›`, current page in White |
| H1 size | 40px desktop · 28px mobile |
| H1 weight | 700 |
| Meta bar | 13px, Mist, `·` separator |
| Financial disclaimer | If price/market analysis: amber badge "ANALYSIS — NOT FINANCIAL ADVICE" |
| Sponsored disclosure | If sponsored: amber-bordered disclosure block above headline |

---

### Zone B — Article Body + Sidebar

#### Column Structure

```
12-column grid, max-width 1200px

│← Col 1 ──────────── Col 7 →│← Col 8 ───── Col 12 →│
│         ~58%                │        ~42%            │
│                             │                        │
│  ARTICLE BODY               │  ARTICLE SIDEBAR       │
│  max-width 720px            │  Sticky: top 88px      │
│  Scrollable                 │                        │
```

#### Article Body Column

**Content hierarchy within body:**

| Element | Spec |
|---|---|
| Body text | Inter 17px, weight 400, White, line-height 1.75, max-width 720px |
| H2 subheading | Inter 24px, weight 700, White, margin-top 40px |
| H3 subheading | Inter 20px, weight 600, White, margin-top 32px |
| Blockquote | Left border 3px Amber, padding-left 20px, italic, Mist |
| Inline link | Amber `#F7931A`, no underline default, underline on hover |
| Data callout box | `background: #1A1A1A`, border-left 3px Amber, padding 16px 20px |
| Image in body | Full column width (720px), 16:9, radius 8px, caption below |
| Image caption | 13px, italic, Mist, margin-top 8px, source attribution |
| Code / data | JetBrains Mono, `background: #111111`, padding 2px 6px, radius 4px |
| Reading progress bar | Thin 3px bar at very top of viewport (below nav), Amber, tracks scroll % |

#### Article Reading Progress Bar

```
[ NAV BAR — 64px ]
[███████░░░░░░░░░░░░] ← 3px, Amber #F7931A, full viewport width, z-index 99
```

- Position: fixed, `top: 64px`, full viewport width
- Height: 3px
- Color: Bitcoin Amber `#F7931A`
- Tracks `window.scrollY / (document.body.scrollHeight - window.innerHeight)`

#### Article Sidebar (Article Page)

Different content from homepage sidebar — contextually relevant to the article:

**AS1 — Article Table of Contents**

```
┌──────────────────────────────────────┐
│ IN THIS ARTICLE                      │
│ ● Introduction                       │
│ ● What the data shows                │
│ ● Expert reactions           (active)│  ← Amber, bold
│ ● What this means for BTC            │
│ ● Bottom line                        │
└──────────────────────────────────────┘
```

- Active section: Amber text, left indicator dot `#F7931A`
- Updates as user scrolls (Intersection Observer)

**AS2 — Live BTC Price (same as homepage S1)**

**AS3 — Related Articles**

```
┌──────────────────────────────────────┐
│ RELATED                              │
│ [thumb] Headline one, 2 lines  ›     │
│ [thumb] Headline two, 2 lines  ›     │
│ [thumb] Headline three         ›     │
└──────────────────────────────────────┘
```

**AS4 — Newsletter Signup (same as homepage S3)**

---

### Zone C — Post-Article Zone

Appears below the last article body paragraph, full-width within the 7-col body column:

```
┌─────────────────────────────────────────────────────────────┐
│  SHARE THIS ARTICLE                                         │
│  [Twitter/X]  [Facebook]  [Copy Link]  [Email]              │
├─────────────────────────────────────────────────────────────┤
│  ABOUT THE AUTHOR                                           │
│  [Avatar 48px]  Author Name  ·  Brief bio 1–2 lines         │
├─────────────────────────────────────────────────────────────┤
│  YOU MIGHT ALSO LIKE                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Related card │  │ Related card │  │ Related card │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
├─────────────────────────────────────────────────────────────┤
│  [FINANCIAL DISCLAIMER BLOCK — full width, italic, Mist]    │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. Responsive Behavior Summary

All five breakpoints from Brand.md applied:

| Zone / Element | xs ≥375px | sm ≥480px | md ≥768px | lg ≥1024px | xl ≥1280px |
|---|---|---|---|---|---|
| **Nav** | Hamburger | Hamburger | Hamburger | Hamburger | Full horizontal |
| **Nav hamburger trigger** | — | — | — | < 1024px | hidden |
| **Hero height** | 90vh | 90vh | 85vh | 100vh | 100vh |
| **Hero layout** | Single col | Single col | 2-col (no stats) | 3-col | 3-col |
| **Hero headline** | 28px | 32px | 40px | 56px | 64px |
| **Hero stats col** | Horizontal strip | Horizontal strip | Hidden | Visible | Visible |
| **Floating info card** | Hidden | Hidden | Visible | Visible | Visible |
| **Dashboard cards** | 1-up | 1-up | 2×2 | 2×2 | 4-up |
| **Content grid** | 1-col | 1-col | 1-col | 8+4 sidebar | 8+4 sidebar |
| **Sidebar** | Below feed | Below feed | Below feed | Sticky right | Sticky right |
| **Footer** | 1-col | 1-col | 2×2 | 4-col | 4-col |
| **Article body width** | 100% | 100% | 100% | 720px | 720px |
| **Article sidebar** | Below body | Below body | Below body | Sticky right | Sticky right |

**Touch target rule:** All interactive elements (links, buttons, icons, tags) must have minimum 44×44px touch target on mobile, applied via padding even if visual size is smaller.

---

## 11. Component State Definitions

Every interactive component has 6 defined states. Designers must spec all states; developers must implement all states.

### Card States

| State | Background | Border | Shadow / Glow | Opacity |
|---|---|---|---|---|
| **Default** | `#1A1A1A` | `1px solid #2A2A2A` | None | 100% |
| **Hover** | `#1A1A1A` | `1px solid rgba(247,147,26,0.4)` | `0 0 24px rgba(247,147,26,0.08)` | 100% |
| **Focus** (keyboard) | `#1A1A1A` | `2px solid #F7931A` | `0 0 0 3px rgba(247,147,26,0.2)` | 100% |
| **Active** (pressed) | `#242424` | `1px solid rgba(247,147,26,0.6)` | None | 100% |
| **Loading** | `#1A1A1A` | `1px solid #2A2A2A` | Shimmer animation | 100% |
| **Empty** | `#1A1A1A` | `1px dashed #2A2A2A` | None | 60% |

**Loading shimmer:** A gradient sweep animation from `#1A1A1A` → `#2A2A2A` → `#1A1A1A`, moving left-to-right, 1.2s infinite. Applied to thumbnail area and headline text placeholder blocks.

**Empty state:** When a card has no content (e.g. no breaking news), show:

```
┌─────────────────────────────────────┐  ← dashed border
│                                     │
│          [icon 32px — Mist]         │
│       No breaking news right now    │  ← 13px, Mist
│       Check back soon               │
│                                     │
└─────────────────────────────────────┘
```

### Button States

| State | Primary | Secondary (Ghost) |
|---|---|---|
| **Default** | White bg, Black text | Transparent, White text, White border 40% |
| **Hover** | `#F0F0F0` bg | `rgba(255,255,255,0.05)` bg, White border 80% |
| **Focus** | White bg + `0 0 0 3px rgba(247,147,26,0.4)` ring | Same ring |
| **Active** | `#E0E0E0` bg, `scale(0.98)` | `rgba(255,255,255,0.1)` bg |
| **Loading** | White bg, spinner icon replaces label | Same |
| **Disabled** | `#1A1A1A` bg, `#666` text, `#2A2A2A` border | Same |

### Price Widget States

| State | Visual Treatment |
|---|---|
| **Live / Connected** | Green "LIVE" dot badge, numbers updating |
| **Stale data (>60s)** | Amber "DELAYED" badge replaces LIVE |
| **Disconnected** | Red "OFFLINE" badge, last known value in Mist color |
| **Loading** | Number area shows shimmer placeholder |
| **Error** | "Price unavailable" in Mist, retry icon |

### Search States

| State | Visual Treatment |
|---|---|
| **Collapsed** | Icon only, 44×44px tap target |
| **Expanded** | Full-width input bar, 280px desktop, placeholder text |
| **Typing** | Real-time suggestions dropdown, max 6 results |
| **No results** | "No results for [query]" + suggested topics |
| **Loading** | Spinner in input right side |

---

## 12. Z-Index Stacking Order

Explicit z-index layer system to prevent stacking conflicts across components.

```
Layer 0  — Base content (body, article text, images)          z-index: 0
Layer 10 — Cards (dashboard cards, article cards)             z-index: 10
Layer 20 — Sticky sidebar                                      z-index: 20
Layer 30 — Reading progress bar                               z-index: 30
Layer 40 — Floating info card (hero glassmorphism card)       z-index: 40
Layer 50 — Scroll indicator                                   z-index: 50
Layer 60 — Tooltips, hover popovers                          z-index: 60
Layer 70 — Dropdown menus (nav Calculators dropdown)          z-index: 70
Layer 80 — Search expanded overlay                            z-index: 80
Layer 90 — Price update toast notifications                   z-index: 90
Layer 100 — Sticky navigation bar                             z-index: 100
Layer 110 — Mobile nav overlay                                z-index: 110
Layer 200 — Modal dialogs                                     z-index: 200
Layer 300 — Alert banners (breaking news full-width)          z-index: 300
```

**Rules:**
- Never use arbitrary z-index values (e.g. `z-index: 9999`) — use only values from this table
- New components must be added to this table before implementation
- Components at the same layer must not overlap — resolve with DOM order instead
- Never use `z-index: -1` on visible content

---

## 13. Scroll & Animation Blueprint

Adapted from NOVA's cinematic page entrance behavior.

| Element | Trigger | Animation | Duration | Easing | Delay |
|---|---|---|---|---|---|
| Hero headline line 1 | Page load | `opacity: 0→1` + `translateY(16px→0)` | 400ms | `ease-out` | 0ms |
| Hero headline line 2 | Page load | Same | 400ms | `ease-out` | 100ms |
| Hero headline line 3 (Amber) | Page load | Same | 400ms | `ease-out` | 200ms |
| Hero subheadline | Page load | `opacity: 0→1` | 400ms | `ease-out` | 350ms |
| CTA buttons | Page load | `opacity: 0→1` + `translateY(8px→0)` | 300ms | `ease-out` | 450ms |
| Status badge | Page load | `opacity: 0→1` | 300ms | `ease` | 100ms |
| Floating info card | Page load | `scale(0.95→1)` + `opacity: 0→1` | 400ms | `ease-out` | 300ms |
| Right stats — each tile | Page load | Count-up number animation | 800ms | `ease-out` | staggered 150ms |
| Scroll indicator | After idle 2s | `opacity: 0→0.6` | 400ms | `ease-in` | 2000ms |
| Scroll indicator | On first scroll | `opacity: 0.6→0` | 200ms | `ease-out` | — |
| Dashboard cards | Scroll into view | `opacity: 0→1` + `translateY(16px→0)` | 350ms | `ease-out` | staggered 80ms per card |
| Feed section items | Scroll into view | `opacity: 0→1` | 300ms | `ease` | staggered 60ms |
| Sidebar widgets | Scroll into view | `opacity: 0→1` | 250ms | `ease` | 0ms |
| Nav bar background | Scroll past hero | `backdrop-filter` activates | 200ms | `ease` | — |

**Global animation rules:**
- All animations: `prefers-reduced-motion: reduce` → instant display, no transform/opacity transition
- Maximum single animation duration: 600ms
- No looping animations except: live data pulse dot (1.5s loop, subtle scale 1→1.1→1)
- Never animate layout properties (`width`, `height`, `top`, `left`) — only `transform` and `opacity`

---

## 14. Content Priority Map

What a first-time visitor processes, in order of visual attention — homepage only.

```
PRIORITY 1 — "What is this?"
  └── [B] InfoNews. logo  +  Nav links
  └── Delivers: brand identity, site category

PRIORITY 2 — "What's happening right now?"
  └── Market Status badge  +  Hero headline (3 lines)  +  Live stats column
  └── Delivers: market context, brand promise, live data credibility

PRIORITY 3 — "What should I do?"
  └── Primary CTA "READ TOP STORIES"  +  Secondary "LIVE PRICES"
  └── Delivers: clear next action for two primary user types

PRIORITY 4 — "What's hot today?"
  └── Dashboard card row (Featured / Breaking / Price chart / Timeline)
  └── Delivers: the 4 most important things on the site right now

PRIORITY 5 — "Give me more"
  └── Article feed (Bitcoin News → Markets → Mining → Guides)
  └── Delivers: depth, editorial breadth, SEO content

PRIORITY 6 — "Tools and quick data"
  └── Sidebar (BTC price / Trending / Newsletter / Movers)
  └── Delivers: utility value, engagement hooks, conversion (newsletter)

PRIORITY 7 — "Who are you, can I trust you?"
  └── Footer (brand, nav, legal, social)
  └── Delivers: trust signals, navigation fallback, legal compliance
```

---

## 15. Design Tokens Applied

Full mapping of Brand.md tokens as used across this blueprint:

| Token Name | Value | Used In |
|---|---|---|
| `color-bg-void` | `#0A0A0A` | Hero bg, footer bg, page background |
| `color-bg-obsidian` | `#111111` | Nav bar, sidebar widgets, price widget |
| `color-bg-carbon` | `#1A1A1A` | All cards (dashboard, feed, sidebar) |
| `color-bg-graphite` | `#242424` | Elevated cards, active states, price widget bg |
| `color-accent` | `#F7931A` | Hero line 3, active nav, progress bar, CTAs, links |
| `color-text-primary` | `#FFFFFF` | All headlines, card titles, body text |
| `color-text-secondary` | `#A0A0A0` | Meta, labels, captions, sidebar counters |
| `color-text-tertiary` | `#666666` | Disabled states, placeholder text only |
| `color-border-default` | `#2A2A2A` | All default borders, dividers, separators |
| `color-positive` | `#00C896` | Price up, bullish dot, timeline complete, sparkline up |
| `color-negative` | `#FF4D4D` | Price down, bearish dot, breaking badge |
| `color-warning` | `#FFB800` | Caution, in-progress, sponsored label |
| `color-info` | `#3B9EFF` | PR card border, PR badge, info labels |
| `glow-primary` | `rgba(247,147,26,0.20)` | Hero accent glow, CTA button area |
| `glow-hover` | `rgba(247,147,26,0.12)` | Card hover ambient shadow |
| `glow-bg` | `rgba(247,147,26,0.05)` | Newsletter signup card background tint |
| `font-sans` | Inter | All UI text, headlines, body copy |
| `font-mono` | JetBrains Mono | All prices, percentages, data values, timestamps |
| `space-1` | 4px | Icon gaps, badge internal padding |
| `space-2` | 8px | Tight component gaps |
| `space-4` | 16px | Card padding, button gaps, grid gutter |
| `space-5` | 24px | Between components, section padding horizontal |
| `space-6` | 32px | Between major sections |
| `space-8` | 48px | Hero padding top, section separators |
| `space-10` | 64px | Footer padding, large section gaps |
| `radius-sm` | 4px | Tags, badges, code snippets |
| `radius-md` | 8px | Buttons, inputs, compact thumbnails |
| `radius-card` | 12px | All cards, modals, sidebar widgets |
| `radius-pill` | 9999px | Status badge, live dot, toggle |
| `grid-max` | 1200px | All content containers |
| `grid-article` | 720px | Article body column max-width |
| `nav-height` | 64px | Sticky offset calculations |
| `sidebar-top` | 88px | `nav-height (64px) + gap (24px)` |

---

*Layout Blueprint v2.0 — June 2026*
*Companion document to Brand.md v2.1*
*BitcoinInfoNews Design Team*
*Next review: December 2026*
