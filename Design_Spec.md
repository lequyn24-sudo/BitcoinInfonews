# BitcoinInfoNews — Design Spec
### Version 1.0 · Aurora UI · June 2026

---

> This document is the technical design specification for BitcoinInfoNews. It is inferred from three source documents: `Brand.md` (brand system), `Layout_Blueprint.md` (structural decisions), and `style.md` (visual language). Any conflict between this spec and the source documents should be resolved by consulting the source documents first.
>
> **Audience:** UI designers using Figma, front-end developers implementing components, and QA reviewing implementation accuracy.

---

## Table of Contents

1. [Grid System](#1-grid-system)
2. [Container System](#2-container-system)
3. [Spacing System](#3-spacing-system)
4. [Typography System](#4-typography-system)
5. [Sizing System](#5-sizing-system)
6. [Responsive System](#6-responsive-system)
7. [Token Reference](#7-token-reference)

---

## 1. Grid System

### Philosophy

The grid is an invisible structure — felt through alignment, not seen as lines. It follows an **8px base unit** throughout, built on 12 columns at desktop and progressively simplifying to 4 columns on mobile. The grid never constrains content that needs to break free (hero images, full-bleed sections); it only constrains content that needs to relate to other content.

---

### Base Unit

```
Base unit: 8px
Micro unit: 4px  (half-base, used for icon gaps and badge internals only)
```

All spacing, sizing, and layout values must be a multiple of 4px. Arbitrary values like 5px, 7px, 11px, 13px, 15px are not permitted.

---

### Column Grid

| Breakpoint | Min Width | Columns | Gutter | Margin | Max Content Width |
|---|---|---|---|---|---|
| `xs` | 375px | 4 | 16px | 16px | 100% |
| `sm` | 480px | 4 | 16px | 20px | 100% |
| `md` | 768px | 8 | 16px | 24px | 100% |
| `lg` | 1024px | 12 | 20px | 32px | 960px |
| `xl` | 1280px | 12 | 24px | auto (centered) | 1200px |
| `2xl` | 1440px | 12 | 24px | auto (centered) | 1200px |

**Column width formula (desktop xl):**
```
Column width = (1200px − (11 × 24px gutter)) / 12
             = (1200 − 264) / 12
             = 936 / 12
             = 78px per column
```

**Column span reference (at xl, 1200px container):**

| Span | Pixel width | Common usage |
|---|---|---|
| 1 col | ~78px | Icon columns, counters |
| 2 col | ~180px | Narrow sidebar element |
| 3 col | ~282px | Right stats column (hero), footer col |
| 4 col | ~384px | Sidebar (content grid), hero left col |
| 5 col | ~486px | Article sidebar |
| 6 col | ~588px | Half-width, equal split |
| 7 col | ~690px | Article body column |
| 8 col | ~792px | Article feed column |
| 9 col | ~894px | Hero center canvas (cols 4–12) |
| 12 col | 1200px | Full-width container |

---

### Grid Overlay Diagram

```
Desktop (xl · 1200px) — 12 columns, 24px gutter
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│1 │2 │3 │4 │5 │6 │7 │8 │9 │10│11│12│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘

Homepage Hero (3-zone split)
├──────────────┤────────────────────────┤──────────┤
│  Cols 1–4    │      Cols 5–9          │Cols 10–12│
│  ~33%        │      ~42%              │  ~25%    │
│  Hero Left   │  Hero Visual           │  Stats   │
└──────────────┴────────────────────────┴──────────┘

Content Grid (article feed + sidebar)
├────────────────────────────────────┤────────────┤
│  Cols 1–8                          │ Cols 9–12  │
│  ~66%                              │  ~34%      │
│  Article Feed                      │  Sidebar   │
└────────────────────────────────────┴────────────┘

Article Page (body + sidebar)
├──────────────────────────┤──────────────────────┤
│  Cols 1–7                │  Cols 8–12           │
│  ~58%  (max 720px)       │  ~42%                │
│  Article Body            │  Article Sidebar     │
└──────────────────────────┴──────────────────────┘

Tablet (md · 768px) — 8 columns, 16px gutter
├──┬──┬──┬──┬──┬──┬──┬──┤
│1 │2 │3 │4 │5 │6 │7 │8 │
└──┴──┴──┴──┴──┴──┴──┴──┘

Mobile (xs · 375px) — 4 columns, 16px gutter
├──┬──┬──┬──┤
│1 │2 │3 │4 │
└──┴──┴──┴──┘
```

---

### Special Grid Rules

**Full-bleed zones:** Hero section, hero image, and footer extend to 100% viewport width. The 1200px container lives inside them for text content only. The background image is always `width: 100vw`.

**Overlap zone:** Zone 3 (Dashboard Cards) overlaps Zone 2 (Hero) by `40px` using `margin-top: -40px`. This is the only intentional negative margin in the system.

**Data pages (Live Prices, Heatmap):** Extend max-width to `1400px` on `2xl` only. Standard `1200px` on `xl`.

**Calculator tool:** Single centered column, max-width `640px`, minimum left/right padding `24px`.

---

## 2. Container System

### Container Hierarchy

The system uses three container types. Every page element must explicitly belong to one.

```
Level 1 — Viewport Container    (100vw, no max-width)
  Used for: hero bg image, footer bg, nav bg, page background color

Level 2 — Content Container     (max-width 1200px, centered, auto margin)
  Used for: all readable content, nav content, hero text+stats, card rows, footer columns

Level 3 — Reading Container     (max-width 720px, within Level 2)
  Used for: article body text, prose, long-form reading column
```

### Container Widths by Page Type

| Page | Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| Homepage | Full viewport bg | 1200px content | — |
| Article Page | Full viewport bg | 1200px outer | 720px body column |
| Live Prices / Heatmap | Full viewport bg | 1400px (2xl only), 1200px (xl) | — |
| Calculator | Full viewport bg | 640px centered | — |
| Error / 404 | Full viewport bg | 640px centered | — |

### Container Padding Rules

```
Level 2 container horizontal padding:
  xs / sm  →  16px each side
  md       →  24px each side
  lg       →  32px each side
  xl / 2xl →  0 (max-width handles containment)

Level 3 container:
  No additional horizontal padding — inherits from Level 2
  Vertical margins: 48px top from article header bottom, 64px bottom before related articles
```

### Safe Zones

```
Navigation safe zone: top 64px (desktop) / 56px (mobile) — content below only
Hero ATF viewport: 100vh − 64px nav = available canvas height
Sidebar sticky start: top 88px (64px nav + 24px gap)
Reading progress bar: fixed, top 64px, z-index 99
```

---

## 3. Spacing System

### Scale Definition

The spacing system is strictly based on the **8px base unit**, with 4px available for micro-contexts only.

| Token | Value | Ratio | Primary Usage |
|---|---|---|---|
| `space-1` | 4px | 0.5× | Micro: icon-to-label gap, badge internal H-padding, dot margin |
| `space-2` | 8px | 1× base | Tight: stacked label rows, inline meta separators, tag row gaps |
| `space-3` | 12px | 1.5× | Compact: tag/pill padding (0 12px), list item padding, input icon gap |
| `space-4` | 16px | 2× | Standard: card internal padding, button horizontal padding, grid gutter (mobile) |
| `space-5` | 24px | 3× | Related: gap between sibling components, section sub-gap, grid gutter (tablet) |
| `space-6` | 32px | 4× | Component: between independent components in a block |
| `space-7` | 40px | 5× | Sub-section: article heading margins, hero element stacking gap |
| `space-8` | 48px | 6× | Section: major section internal padding, hero padding-top |
| `space-9` | 56px | 7× | — (avoid unless needed for custom one-off contexts) |
| `space-10` | 64px | 8× | Large section: footer padding-top, hero headline spacing, nav height |
| `space-12` | 96px | 12× | Page: large section separations, full-page vertical breaks |

---

### Spacing Application Map

#### Component Internal Spacing

| Component | Top/Bottom Padding | Left/Right Padding | Internal Gap |
|---|---|---|---|
| **Button — Standard** | `space-2` (8px) | `space-5` (24px) | — |
| **Button — Large** | `space-3` (12px) | `space-6` (32px) | — |
| **Button — Compact** | `space-1` (4px) | `space-4` (16px) | — |
| **Tag / Badge** | `space-1` (4px) | `space-3` (12px) | `space-1` (4px) between icon + text |
| **Nav Link** | 0 | `space-4` (16px) | — |
| **Nav Bar** | auto (height: 64px) | `space-5` (24px) | `space-5` (24px) between links |
| **Card — Standard** | `space-4` (16px) | `space-4` (16px) | `space-3` (12px) between elements |
| **Card — Dashboard** | `space-4` (16px) | `space-4` (16px) | `space-3` (12px) between elements |
| **Sidebar Widget** | `space-4` (16px) | `space-4` (16px) | `space-3` (12px) between rows |
| **Input Field** | auto (height: 44px) | `space-4` (16px) | — |
| **Dropdown Item** | `space-2` (10px) | `space-4` (16px) | — |
| **Footer Column** | `space-10` (64px) top | `space-5` (24px) | `space-4` (16px) between links |
| **Status Pill** | 6px | 14px | `space-1` (4px) between dot + text |

#### Section Vertical Spacing

| Context | Spacing |
|---|---|
| Between hero and dashboard card row | `-40px` (overlap effect) |
| Between dashboard card row and content grid | `space-8` (48px) |
| Between content sections in feed | `space-8` (48px) |
| Between article section header and top story | `space-5` (24px) |
| Between story cards in a grid | `space-4` (16px) |
| Between compact list items | 0 (border-bottom divider only) |
| Between sidebar widgets | `space-4` (16px) |
| Between article headings (H2) and preceding paragraph | `space-7` (40px) |
| Between article headings (H3) and preceding paragraph | `space-6` (32px) |
| Between article paragraphs | `space-4` (16px) |
| Article first paragraph after H2 | `space-3` (12px) |
| Image bottom to caption top | `space-2` (8px) |
| Caption bottom to next paragraph | `space-5` (24px) |
| Footer padding top | `space-10` (64px) |
| Footer padding bottom | `space-8` (48px) |

---

### Spacing Anti-Patterns

```
✗ Do not use: 5px, 7px, 9px, 11px, 13px, 15px (not multiples of 4)
✗ Do not use: 1px, 2px, 3px for spacing (use only for borders/strokes)
✗ Do not mix margin and padding for the same purpose on the same element
✗ Do not use auto margins for element-to-element spacing — use gap or explicit values
✗ Do not exceed space-12 (96px) without editorial review
```

---

## 4. Typography System

### Typefaces

| Role | Family | Fallback Stack | Load Strategy |
|---|---|---|---|
| **Primary (UI + Editorial)** | Inter | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif` | Variable font, subset for Latin |
| **Data / Monospace** | JetBrains Mono | `'Fira Code', 'Courier New', monospace` | Regular weight only |

**Inter variable font axes used:**
- Weight axis: 400, 500, 600, 700, 800 only. Never 300 (too thin on dark) or 900 (too heavy).
- No italic axis on UI elements. Italic used only for: image captions, blockquotes, disclaimer text.

---

### Type Scale — Full Specification

| Level | Name | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing | Font | Color Default |
|---|---|---|---|---|---|---|---|---|
| D | **Display** | 64px | 40px (lg) / 32px (md) / 28px (xs) | 800 | 1.05 | −0.03em | Inter | White `#FFFFFF` |
| H1 | **Heading 1** | 48px | 32px | 700 | 1.1 | −0.02em | Inter | White `#FFFFFF` |
| H2 | **Heading 2** | 32px | 24px | 700 | 1.2 | −0.01em | Inter | White `#FFFFFF` |
| H3 | **Heading 3** | 24px | 20px | 600 | 1.3 | −0.01em | Inter | White `#FFFFFF` |
| H4 | **Heading 4** | 18px | 18px | 600 | 1.4 | 0 | Inter | White `#FFFFFF` |
| BL | **Body Large** | 18px | 17px | 400 | 1.75 | 0 | Inter | White `#FFFFFF` |
| B | **Body** | 16px | 16px | 400 | 1.7 | 0 | Inter | White `#FFFFFF` |
| BS | **Body Small** | 14px | 14px | 400 | 1.6 | 0 | Inter | Mist `#A0A0A0` |
| LB | **Label** | 13px | 13px | 500 | 1.5 | +0.02em | Inter | Mist `#A0A0A0` |
| CP | **Caption** | 12px | 12px | 400 | 1.5 | +0.01em | Inter | Mist `#A0A0A0` |
| MC | **Micro** | 11px | 11px | 500 | 1.4 | +0.04em | Inter | Varies by context |
| DP | **Data / Price** | 14–32px | 14–24px | 500 | 1.2 | 0 | JetBrains Mono | White / semantic |

---

### Type Scale — Visual Hierarchy Diagram

```
Display    64px / wt 800 / lh 1.05   ████████████████████████████████████
H1         48px / wt 700 / lh 1.10   ███████████████████████████
H2         32px / wt 700 / lh 1.20   ██████████████████
H3         24px / wt 600 / lh 1.30   █████████████
H4         18px / wt 600 / lh 1.40   ██████████
Body Lg    18px / wt 400 / lh 1.75   ██████████  (same size, different weight+leading)
Body       16px / wt 400 / lh 1.70   █████████
Body Sm    14px / wt 400 / lh 1.60   ███████
Label      13px / wt 500 / lh 1.50   ██████
Caption    12px / wt 400 / lh 1.50   █████
Micro      11px / wt 500 / lh 1.40   ████
```

---

### Typography Usage Rules

#### Case Rules

| Context | Case | Example |
|---|---|---|
| Hero Display headline | UPPERCASE (forced) | UNDERSTAND. VERIFY. INVEST. |
| Article H1 | Sentence case | "Bitcoin hits new all-time high" |
| Section H2, H3 | Sentence case | "What the data shows" |
| Navigation links | Sentence case | "Live prices" |
| Tags, Labels, Badges | UPPERCASE | "BREAKING", "ANALYSIS", "SPONSORED" |
| Button labels | UPPERCASE | "READ TOP STORIES →" |
| Card header labels | UPPERCASE | "FLEET STATUS", "NEXT MISSION" |
| Body text | Natural sentence case | Standard prose rules |
| Micro labels | UPPERCASE | "LIVE", "NEW", "PR" |

> **Rule:** UPPERCASE is exclusively for UI controls, status labels, and the hero headline. Never use uppercase for body content, article text, or headings below Display level.

#### Heading Hierarchy Rules

```
Page structure:         Only one <h1> per page (article title or hero tagline)
Article body:           H2 for major sections, H3 for subsections — no skipping
UI sections:            H4 for widget headers, sidebar titles (not in document flow)
Card titles:            Styled like H3 but semantically <p> or <span> unless navigable
Status badges:          Never a heading — always <span> or <div>
```

#### Max Column Widths for Reading Comfort

| Content type | Max width | Rationale |
|---|---|---|
| Article body text | 720px | ~65–75 chars per line optimal |
| Sidebar content | 360px | Compact reference scanning |
| Hero subheadline | ~420px (col 1–4) | Contains within left column |
| Footer body text | 280px | Per column, short lines |
| Calculator label | 480px | Centered, conversational |

#### Line Height Context Rules

| Situation | Line Height | Reason |
|---|---|---|
| Display / hero headlines | 1.05 | Tight, monumental block |
| Headings (H1–H3) | 1.1–1.3 | Visually grouped, structured |
| Body text | 1.7–1.75 | Long-form reading comfort |
| UI labels (tags, nav) | 1.4–1.5 | Compact, single-line treatment |
| Data / prices | 1.2 | Tabular scanning, no wrapping |

#### Letter Spacing Rules

| Context | Value | Visual Effect |
|---|---|---|
| Display / H1 | −0.03em to −0.02em | Tight, monumental |
| H2–H3 | −0.01em | Slightly tightened |
| H4–Body | 0 | Default inter-character |
| Labels (uppercase) | +0.02em to +0.04em | Legible small caps feel |
| Data (JetBrains Mono) | 0 | Monospaced, tabular |

---

### Typography + Color Pairing Matrix

| Text Level | On Void `#0A0A0A` | On Carbon `#1A1A1A` | On Obsidian `#111111` | Accessible? |
|---|---|---|---|---|
| White `#FFFFFF` | 21:1 | 15.8:1 | 18:1 | ✅ AAA all |
| Mist `#A0A0A0` | 4.6:1 | 3.2:1 | 3.9:1 | ✅ AA (normal) |
| Slate `#666666` | 2.3:1 | 1.6:1 | 1.9:1 | ❌ Decorative only |
| Bitcoin Amber `#F7931A` | 4.6:1 | 3.2:1 | 3.9:1 | ✅ AA large text only |
| Aurora Green `#00C896` | 6.8:1 | 4.7:1 | 5.8:1 | ✅ AA all |
| Alert Red `#FF4D4D` | 4.1:1 | 2.8:1 | 3.4:1 | ✅ AA large text |
| Signal Blue `#3B9EFF` | 5.2:1 | 3.6:1 | 4.3:1 | ✅ AA all |

> **Minimum standard:** All body text and labels must pass WCAG 2.1 AA (4.5:1 normal, 3:1 large). Use Mist for secondary text on Carbon only with large text (18px+). Never use Slate for readable text.

---

### Data / Price Typography

All numeric data (prices, percentages, volumes, hashrate) uses **JetBrains Mono**:

| Data context | Size | Weight | Color |
|---|---|---|---|
| Hero stats column | 32px | 500 | White |
| Sidebar price widget | 24px | 500 | White |
| Price change % | 14px | 500 | `#00C896` (up) / `#FF4D4D` (down) |
| Card data value | 20px | 500 | White |
| Table data cell | 14px | 400 | White |
| Compact price inline | 14px | 400 | White |
| Top movers table | 13px | 400 | White + semantic for % |

---

## 5. Sizing System

### Fixed Heights

All fixed heights are multiples of 8px:

| Component | Desktop Height | Mobile Height | Notes |
|---|---|---|---|
| **Navigation bar** | 64px | 56px | Sticky, always present |
| **Reading progress bar** | 3px | 3px | Fixed below nav |
| **Button — Large** | 48px | 48px | Hero CTAs, primary actions |
| **Button — Standard** | 40px | 40px | Most button contexts |
| **Button — Compact** | 32px | 32px | Tight spaces, inline |
| **Input field** | 44px | 44px | Minimum touch target |
| **Tag / Badge** | 24px | 24px | All label variants |
| **Status pill** | 28px | 28px | Hero status badge |
| **Nav dropdown item** | 40px | — | Desktop only |
| **Mobile nav item** | 56px | 56px | Full-width tap target |
| **Sidebar widget divider** | 1px | — | Between sidebar sections |
| **Card progress bar** | 4px | 4px | Story count indicator |
| **Timeline connector line** | 1px | 1px | Between timeline dots |
| **Timeline dot** | 8px | 8px | Status indicator circle |
| **Avatar — Standard** | 48px | 40px | Author bio, profile |
| **Avatar — Small** | 32px | 32px | Compact contexts |
| **Logo in nav** | 32px | 28px | Height, auto width |
| **Social icon** | 20px | 20px | Footer social icons |

### Hero Section Sizing

| Property | Value | Notes |
|---|---|---|
| Hero total height | `100vh` | Desktop |
| Hero min height | `640px` | Prevents collapse on short viewports |
| Hero max height | `860px` | Caps on ultra-tall screens |
| Hero at md | `85vh` | Tablet |
| Hero at xs/sm | `90vh` | Mobile |
| Usable canvas | `100vh − 64px` | Below nav |
| Left column width | ~33% of 1200px = ~396px | Cols 1–4 |
| Center canvas width | ~42% of 1200px = ~504px | Cols 5–9 |
| Right stats width | ~25% of 1200px = ~300px | Cols 10–12 |
| Floating info card width | ~220px | Positioned bottom-right of center |
| Floating info card height | ~80px | Label + value stacked |

### Card Sizing

| Card type | Width | Min height | Notes |
|---|---|---|---|
| Dashboard card (4-up) | ~25% − gutter = ~288px | 280px | Equal, fixed-width row |
| Feed top story | Full col 8 width = ~792px | auto | 16:9 thumbnail |
| Feed secondary card (2-up) | ~50% − 8px = ~388px | auto | Grid layout |
| Compact list item | Full col 8 width | 80px | Fixed height row |
| Sidebar widget | Full col 4 = ~384px | auto | Varies by content |
| Featured article (hero card) | Full col 8 | 320px | Min height enforced |

### Icon Sizes

| Token | Size | Stroke | Usage |
|---|---|---|---|
| `icon-xs` | 12px | 1.5px | Inline badges, micro labels |
| `icon-sm` | 16px | 1.5px | Beside body text, compact nav |
| `icon-md` | 20px | 1.5px | Standard list items, compact actions |
| `icon-base` | 24px | 1.5px | **Default** — nav, buttons, actions |
| `icon-lg` | 32px | 1.5px | Card header icons, feature callouts |
| `icon-xl` | 48px | 2px | Empty states, hero illustrations |

### Border & Stroke Widths

| Context | Width | Color | Notes |
|---|---|---|---|
| Card default border | 1px | `#2A2A2A` | All standard cards |
| Card hover border | 1px | `rgba(247,147,26,0.4)` | Amber glow border on hover |
| Card focus border | 2px | `#F7931A` | Keyboard focus, accessibility |
| Accent border (card top) | 2px | Semantic per type | PR (blue), Sponsored (amber) |
| Blockquote border | 3px | `#F7931A` | Left-side border on quotes |
| Data card border (left) | 2px | `#F7931A` | Price widget left accent |
| Nav border-bottom | 1px | `#2A2A2A` | Below nav bar |
| Divider / HR | 1px | `#2A2A2A` | Horizontal separators |
| Input default border | 1px | `#2A2A2A` | Form inputs |
| Input focus border | 1px | `#F7931A` | Active input state |
| Progress bar height | 3px | `#F7931A` | Reading progress |
| Timeline connector | 1px | `#2A2A2A` | Vertical line between dots |

### Border Radius Scale

| Token | Value | Component usage |
|---|---|---|
| `radius-none` | 0 | Full-bleed images, hero background |
| `radius-sm` | 4px | Tags, badges, code inline, compact chips |
| `radius-md` | 8px | Buttons, inputs, compact thumbnails |
| `radius-lg` | 12px | Standard cards, modals, sidebar widgets |
| `radius-xl` | 16px | Featured cards, large modals, hero panels |
| `radius-full` | 9999px | Status pills, avatar circles, toggle buttons |

**Anti-pattern:** Do not apply `radius-lg` or higher to elements with a single-side border accent (border-top or border-left). Set `border-radius: 0` when using directional borders.

### Touch Target Sizes (Mobile)

All interactive elements must meet minimum 44×44px touch target, even if visual size is smaller:

| Element | Visual size | Touch target |
|---|---|---|
| Nav hamburger | 24px | 44×44px |
| Icon button | 20–24px | 44×44px |
| Tag / label (linked) | 24px H | 44px H minimum |
| Compact card link | varies | min 44px H |
| Footer link | 14px text | 40px H row |
| Social icon | 20px | 44×44px |
| Timeline dot (interactive) | 8px | 32×32px minimum |

---

## 6. Responsive System

### Breakpoint Definitions

| Name | Min-Width | Device target | Grid | Max Container |
|---|---|---|---|---|
| `xs` | 375px | Small mobile (iPhone SE) | 4 col / 16px gutter | 100% |
| `sm` | 480px | Standard mobile | 4 col / 16px gutter | 100% |
| `md` | 768px | Tablet portrait | 8 col / 16px gutter | 100% |
| `lg` | 1024px | Tablet landscape / small laptop | 12 col / 20px gutter | 960px |
| `xl` | 1280px | Desktop | 12 col / 24px gutter | 1200px |
| `2xl` | 1440px | Wide desktop | 12 col / 24px gutter | 1200px (1400px for data pages) |

**Implementation note:** Use min-width media queries exclusively. Never use max-width queries. Build mobile-first and layer up.

---

### Responsive Behavior — Full Matrix

| Element | xs (375px) | sm (480px) | md (768px) | lg (1024px) | xl (1280px) |
|---|---|---|---|---|---|
| **Navigation** | Hamburger overlay | Hamburger overlay | Hamburger overlay | Hamburger overlay | Full horizontal bar |
| **Nav hamburger** | Visible | Visible | Visible | Visible | Hidden |
| **Nav height** | 56px | 56px | 56px | 56px | 64px |
| **Logo in nav** | 28px height | 28px | 28px | 32px | 32px |
| **Hero height** | 90vh | 90vh | 85vh | 100vh | 100vh |
| **Hero layout** | 1 column stacked | 1 column | 2 col (no stats) | 3 col | 3 col |
| **Hero headline size** | 28px | 32px | 40px | 56px | 64px |
| **Hero stats column** | Horizontal scroll strip below | Horizontal scroll strip | Hidden | Visible right col | Visible right col |
| **Floating info card** | Hidden | Hidden | Visible | Visible | Visible |
| **Scroll indicator** | Hidden | Hidden | Visible | Visible | Visible |
| **Dashboard cards** | 1-up, full width | 1-up, full width | 2×2 grid | 2×2 grid | 4-up horizontal |
| **Content grid** | 1 col, full width | 1 col, full width | 1 col, full width | 8+4 sidebar | 8+4 sidebar |
| **Sidebar position** | Below article feed | Below article feed | Below article feed | Sticky right | Sticky right |
| **Sidebar sticky offset** | — | — | — | 88px | 88px |
| **Article body width** | 100% | 100% | 100% | 720px | 720px |
| **Article sidebar** | Below body | Below body | Below body | Sticky right | Sticky right |
| **Footer layout** | 1 col | 1 col | 2×2 grid | 4 col | 4 col |
| **Footer logo** | Full lockup | Full lockup | Full lockup | Full lockup | Full lockup |
| **Card grid (feed 2-up)** | 1 col | 1 col | 2 col | 2 col | 2 col |
| **Card image** | 16:9 full width | 16:9 full width | 16:9 full width | 16:9 full width | 16:9 full width |
| **Compact list thumb** | 64×64px | 72×72px | 80×80px | 80×80px | 80×80px |
| **Touch targets** | 44px min | 44px min | 44px min | 44px min | Standard |

---

### Responsive Typography Scaling

| Level | xs | sm | md | lg | xl |
|---|---|---|---|---|---|
| Display | 28px | 32px | 40px | 56px | 64px |
| H1 | 26px | 28px | 32px | 40px | 48px |
| H2 | 20px | 22px | 24px | 28px | 32px |
| H3 | 18px | 18px | 20px | 22px | 24px |
| H4 | 16px | 16px | 18px | 18px | 18px |
| Body Large | 16px | 16px | 17px | 18px | 18px |
| Body | 16px | 16px | 16px | 16px | 16px |
| Body Small | 14px | 14px | 14px | 14px | 14px |
| Label | 12px | 12px | 13px | 13px | 13px |
| Caption | 11px | 11px | 12px | 12px | 12px |
| Micro | 11px | 11px | 11px | 11px | 11px |

**Rule:** Body text minimum is 16px across all breakpoints. Never scale body below 16px on any screen size.

---

### Responsive Component Behavior

#### Navigation
```
xs → lg:  Hamburger icon (24px) right-aligned in 56px nav bar
           Tap opens full-screen overlay: rgba(10,10,10,0.98)
           Overlay slides in from right: translateX(100%→0), 250ms ease-out
           Close button top-right of overlay
           Links: 20px Inter 500, 56px row height, border-bottom divider

xl+:      Full horizontal layout, 64px height
           Links: 14px Inter 500, color Mist, active: Amber
           Hover: White, 150ms transition
           Calculators: dropdown on hover
```

#### Hero Section
```
xs/sm:    Single column, content stacked vertically
           Headline at 28–32px, all three lines still visible
           Stats hidden — moved to thin horizontal strip below hero
           CTA pair stacked vertically (100% width each)
           Floating info card: hidden

md:       Two column — content left, image right
           Stats column removed
           Floating card: appears over image

lg+:      Three column — content / image / stats
           Full spec as per Layout_Blueprint.md
```

#### Dashboard Card Row
```
xs/sm:    1-up: cards stacked vertically, full width, 12px gap
           Horizontal scroll on xs if viewport too narrow

md/lg:    2×2 grid, 16px gap, equal columns

xl+:      4-up horizontal row, 16px gap, equal columns
           Overlaps hero by 40px (margin-top: -40px)
```

#### Sidebar
```
xs → md:  Sidebar removed from aside position
           All sidebar widgets stack below article feed in a 2-column grid
           Exception: Newsletter signup stays full-width

lg+:      4-column right sidebar, sticky at top: 88px
           Each widget full sidebar width
           Scrolls independently until footer
```

---

### Viewport-Specific Visual Adjustments

| Property | Mobile adjustment | Desktop |
|---|---|---|
| Card border-radius | 8px (radius-md) | 12px (radius-lg) |
| Card internal padding | 12px | 16px |
| Section gaps | `space-6` (32px) | `space-8` (48px) |
| Hero padding top | `space-6` (32px) | `space-8` (48px) |
| Display letter-spacing | −0.02em | −0.03em |
| Display line-height | 1.1 | 1.05 |

---

## 7. Token Reference

Complete token set for designers (Figma) and developers (CSS variables / design token JSON). All values sourced from Brand.md and Layout_Blueprint.md.

### Color Tokens

#### Surface Colors
| Token | Value | Usage |
|---|---|---|
| `color-surface-void` | `#0A0A0A` | Page background, hero, footer |
| `color-surface-obsidian` | `#111111` | Nav bar, sidebar widgets, code bg |
| `color-surface-carbon` | `#1A1A1A` | Cards, panels, modals, inputs |
| `color-surface-graphite` | `#242424` | Hover states, elevated cards, active states |

#### Text Colors
| Token | Value | WCAG on Void | Usage |
|---|---|---|---|
| `color-text-primary` | `#FFFFFF` | 21:1 AAA | Headlines, body, primary UI text |
| `color-text-secondary` | `#A0A0A0` | 4.6:1 AA | Meta, captions, labels, timestamps |
| `color-text-tertiary` | `#666666` | 2.3:1 ❌ | Placeholder, disabled — decorative only |

#### Accent Colors
| Token | Value | Usage |
|---|---|---|
| `color-accent-primary` | `#F7931A` | Logo, CTAs, active nav, links, progress bar |
| `color-accent-positive` | `#00C896` | Price up, bullish, success, guide category |
| `color-accent-negative` | `#FF4D4D` | Price down, bearish, error, breaking badge |
| `color-accent-warning` | `#FFB800` | Caution, in-progress, sponsored label |
| `color-accent-info` | `#3B9EFF` | PR border, PR badge, info labels, links |

#### Border Colors
| Token | Value | Usage |
|---|---|---|
| `color-border-default` | `#2A2A2A` | All default borders, dividers |
| `color-border-hover` | `rgba(247,147,26,0.4)` | Card hover border |
| `color-border-focus` | `#F7931A` | Focus ring base color |
| `color-border-glass` | `rgba(255,255,255,0.12)` | Glassmorphism card border |

#### Glow Tokens
| Token | Value | Usage |
|---|---|---|
| `glow-primary` | `rgba(247,147,26,0.20)` | Hero accent radial, CTA zone |
| `glow-hover` | `rgba(247,147,26,0.12)` | Card hover ambient |
| `glow-bg` | `rgba(247,147,26,0.05)` | Newsletter widget bg tint |
| `glow-focus` | `rgba(247,147,26,0.20)` | Focus ring spread `0 0 0 3px` |

---

### Spacing Tokens
| Token | Value |
|---|---|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 24px |
| `space-6` | 32px |
| `space-7` | 40px |
| `space-8` | 48px |
| `space-10` | 64px |
| `space-12` | 96px |

---

### Typography Tokens
| Token | Value |
|---|---|
| `font-sans` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif` |
| `font-mono` | `'JetBrains Mono', 'Fira Code', 'Courier New', monospace` |
| `font-size-display` | `64px` (desktop) / `40px` (lg) / `32px` (md) / `28px` (xs) |
| `font-size-h1` | `48px` / `32px` (mobile) |
| `font-size-h2` | `32px` / `24px` (mobile) |
| `font-size-h3` | `24px` / `20px` (mobile) |
| `font-size-h4` | `18px` |
| `font-size-body-lg` | `18px` / `17px` (mobile) |
| `font-size-body` | `16px` |
| `font-size-body-sm` | `14px` |
| `font-size-label` | `13px` |
| `font-size-caption` | `12px` |
| `font-size-micro` | `11px` |
| `font-weight-display` | `800` |
| `font-weight-heading` | `700` |
| `font-weight-subheading` | `600` |
| `font-weight-label` | `500` |
| `font-weight-body` | `400` |
| `line-height-display` | `1.05` |
| `line-height-heading` | `1.1` |
| `line-height-subheading` | `1.2–1.3` |
| `line-height-body` | `1.7` |
| `line-height-body-lg` | `1.75` |
| `line-height-ui` | `1.4–1.5` |
| `line-height-data` | `1.2` |
| `letter-spacing-display` | `−0.03em` |
| `letter-spacing-h1` | `−0.02em` |
| `letter-spacing-h2-h3` | `−0.01em` |
| `letter-spacing-body` | `0` |
| `letter-spacing-label` | `+0.02em` |
| `letter-spacing-micro` | `+0.04em` |

---

### Sizing Tokens
| Token | Value |
|---|---|
| `size-nav-desktop` | `64px` |
| `size-nav-mobile` | `56px` |
| `size-sidebar-offset` | `88px` (64px nav + 24px gap) |
| `size-button-lg` | `48px` |
| `size-button-md` | `40px` |
| `size-button-sm` | `32px` |
| `size-input` | `44px` |
| `size-tag` | `24px` |
| `size-status-pill` | `28px` |
| `size-icon-xs` | `12px` |
| `size-icon-sm` | `16px` |
| `size-icon-md` | `20px` |
| `size-icon-base` | `24px` |
| `size-icon-lg` | `32px` |
| `size-icon-xl` | `48px` |
| `size-avatar-sm` | `32px` |
| `size-avatar-md` | `48px` |
| `size-progress-bar` | `3px` |
| `size-timeline-dot` | `8px` |
| `size-border-default` | `1px` |
| `size-border-accent` | `2px` |
| `size-border-quote` | `3px` |

---

### Grid & Container Tokens
| Token | Value |
|---|---|
| `grid-columns-desktop` | `12` |
| `grid-columns-tablet` | `8` |
| `grid-columns-mobile` | `4` |
| `grid-gutter-desktop` | `24px` |
| `grid-gutter-tablet` | `16px` |
| `grid-gutter-mobile` | `16px` |
| `container-max` | `1200px` |
| `container-article` | `720px` |
| `container-data` | `1400px` |
| `container-tool` | `640px` |
| `container-padding-mobile` | `16px` |
| `container-padding-tablet` | `24px` |

---

### Border Radius Tokens
| Token | Value |
|---|---|
| `radius-none` | `0` |
| `radius-sm` | `4px` |
| `radius-md` | `8px` |
| `radius-lg` | `12px` |
| `radius-xl` | `16px` |
| `radius-full` | `9999px` |

---

### Z-Index Tokens
| Token | Value |
|---|---|
| `z-base` | `0` |
| `z-card` | `10` |
| `z-sidebar` | `20` |
| `z-progress-bar` | `30` |
| `z-floating-card` | `40` |
| `z-scroll-indicator` | `50` |
| `z-tooltip` | `60` |
| `z-dropdown` | `70` |
| `z-search` | `80` |
| `z-toast` | `90` |
| `z-nav` | `100` |
| `z-mobile-nav` | `110` |
| `z-modal` | `200` |
| `z-alert-banner` | `300` |

---

*Design Spec v1.0 — June 2026*
*Synthesized from Brand.md v2.1 · Layout_Blueprint.md v2.0 · style.md v1.0*
*BitcoinInfoNews Design System*
*Next scheduled review: December 2026*
