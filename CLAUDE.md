@AGENTS.md

# BitcoinInfoNews — CLAUDE.md

Bitcoin-first news website. Dark cinematic UI ("Aurora UI"). Deploy on Vercel free tier.
Reference docs: `Brand.md`, `Layout_Blueprint.md`, `style.md`, `Design_Spec.md`

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript — strict mode, no `any`
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (variable) + JetBrains Mono — load via `next/font/google`
- **Icons:** Phosphor Icons (`@phosphor-icons/react`) — Regular (outline) weight only
- **Price data:** CoinGecko public API (no key required, free tier safe)
- **Deployment:** Vercel free tier — static-first, no paid serverless beyond Vercel hobby limits

---

## Commands

```bash
npm run dev        # local dev, http://localhost:3000
npm run build      # production build — must pass before deploy
npm run lint       # ESLint check — run before every commit
npm run typecheck  # tsc --noEmit — run after major changes
```

Run `npm run build` before pushing. Vercel free tier fails hard on build errors.

---

## Project Structure

```
src/
  app/               # App Router pages & layouts
    page.tsx         # Homepage
    [slug]/page.tsx  # Article page
    layout.tsx       # Root layout (fonts, nav, footer)
  components/
    ui/              # Primitive components (Button, Badge, Card...)
    layout/          # Nav, Footer, Sidebar, Hero
    sections/        # Page-level sections (DashboardCards, ArticleFeed...)
    data/            # Price widgets, sparklines, market stats
  lib/
    api.ts           # CoinGecko + mock article data fetching
    tokens.ts        # Design token constants (colors, spacing, radii)
    utils.ts         # cn(), formatPrice(), formatDate() helpers
  types/
    index.ts         # Article, PriceData, MarketStatus types
public/
  images/            # Hero bg, placeholder thumbnails
```

---

## Design Tokens — Critical Values

Never hardcode colors or spacing. Always use these values:

### Colors
```ts
// Surfaces (darkest → lightest)
void:     '#0A0A0A'   // page bg, hero bg, footer bg
obsidian: '#111111'   // nav, sidebar widgets
carbon:   '#1A1A1A'   // cards, panels, inputs
graphite: '#242424'   // hover states, elevated cards

// Text
white:    '#FFFFFF'   // headlines, body
mist:     '#A0A0A0'   // meta, captions, labels
slate:    '#666666'   // placeholder only — never readable text

// Accent
amber:    '#F7931A'   // logo, CTAs, active nav, progress bar, h3 accent
green:    '#00C896'   // price up, success, live dot
red:      '#FF4D4D'   // price down, error, breaking badge
yellow:   '#FFB800'   // warning, sponsored
blue:     '#3B9EFF'   // PR badge, info

// Border
border:   '#2A2A2A'   // all default borders and dividers
```

### Spacing — 8px base, all values multiples of 4px
```ts
space1: 4,  space2: 8,  space3: 12, space4: 16,
space5: 24, space6: 32, space7: 40, space8: 48,
space10: 64, space12: 96
// NEVER: 5px, 7px, 9px, 11px, 13px, 15px
```

### Border Radius
```ts
sm: 4, md: 8, lg: 12, xl: 16, full: 9999
```

### Z-Index
```ts
card: 10, sidebar: 20, progressBar: 30, floatingCard: 40,
dropdown: 70, nav: 100, mobileNav: 110, modal: 200
```

---

## Typography Rules

- **Primary font:** Inter (all UI + editorial)
- **Mono font:** JetBrains Mono (all prices, % changes, timestamps, data values)
- **Display/hero headline:** `text-[64px] lg:text-[56px] md:text-[40px] font-[800] leading-[1.05] tracking-[-0.03em]` — UPPERCASE only for this element
- **H1 article title:** `text-[48px] font-[700] leading-[1.1] tracking-[-0.02em]` — sentence case
- **Body:** `text-[16px] font-[400] leading-[1.7]` — 16px minimum on all screens, never lower
- **Labels/badges:** `text-[11px] font-[500] uppercase tracking-[0.04em]`
- **Body max-width:** 720px for article reading columns — never exceed
- Hero headline line 3 is always Bitcoin Amber `#F7931A`, lines 1–2 are White

---

## Page Templates

### Homepage (`/`)
5 zones stacked vertically:
1. **Nav** — sticky 64px, z-100, blurs backdrop on scroll
2. **Hero** — `100vh` (min 640px / max 860px), 3-column asymmetric (33% / 42% / 25%)
3. **Dashboard Cards** — 4-up row, `margin-top: -40px` overlapping hero, z-10
4. **Content Grid** — 8-col article feed + 4-col sticky sidebar (`top: 88px`)
5. **Footer** — 4-column, `bg-[#0A0A0A]`

### Article Page (`/[slug]`)
4 zones:
1. Nav (same)
2. Article Header — full-width hero image + breadcrumb + H1 + meta
3. Article Body + Sidebar — 7-col body (max 720px) + 5-col sticky sidebar
4. Post-Article — share buttons + related articles
5. Footer (same)

---

## Key Components

### Nav
- Desktop (`≥1024px`): full horizontal, `h-[64px]`, `bg-[#111111]`, `border-b border-[#2A2A2A]`
- Mobile (`<1024px`): hamburger, overlay slides in `translateX(100%→0)` 250ms ease-out, `bg-[rgba(10,10,10,0.98)]`
- Logo: `h-[32px]` desktop / `h-[28px]` mobile
- Active link: `text-[#F7931A]`

### Card (shared base)
```tsx
bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] p-[16px]
hover:border-[rgba(247,147,26,0.4)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)]
transition-all duration-200
```

### Button — Primary (hero CTA)
```tsx
bg-white text-[#0A0A0A] h-[48px] px-[24px] rounded-[8px]
hover:bg-[#F0F0F0] uppercase font-[500] tracking-[0.04em]
```

### Button — Ghost (secondary CTA)
```tsx
bg-transparent text-white border border-[rgba(255,255,255,0.4)] h-[48px] px-[24px] rounded-[8px]
hover:border-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)]
```

### Badge / Tag
```tsx
h-[24px] px-[10px] rounded-[4px] text-[11px] font-[500] uppercase tracking-[0.04em]
```

### Status Pill (hero)
```tsx
inline-flex items-center gap-[4px] h-[28px] px-[14px] rounded-full
bg-[#1A1A1A] border border-[#2A2A2A]
text-[11px] font-[500] uppercase tracking-[0.06em]
// dot: w-[6px] h-[6px] rounded-full (green/red/yellow based on status)
```

### Glassmorphism Card (floating hero card)
```tsx
bg-[rgba(17,17,17,0.75)] backdrop-blur-[12px]
border border-[rgba(255,255,255,0.12)] rounded-[12px] p-[16px_20px]
```

### Input
```tsx
h-[44px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-[8px] px-[16px]
focus:border-[#F7931A] focus:ring-[3px] focus:ring-[rgba(247,147,26,0.15)]
placeholder:text-[#666666]
```

---

## Responsive Breakpoints

```ts
xs: 375,  sm: 480,  md: 768,  lg: 1024,  xl: 1280,  '2xl': 1440
// Add to tailwind.config.ts — these are NOT default Tailwind breakpoints
```

Key behaviors:
- Nav hamburger: `< 1024px`
- Hero layout: 1-col (xs/sm) → 2-col no stats (md) → 3-col full (lg+)
- Dashboard cards: 1-up (xs/sm) → 2×2 (md/lg) → 4-up (xl+)
- Sidebar: stacks below content (xs→md) → sticky right `top-[88px]` (lg+)
- Hero headline: 28px (xs) → 32px (sm) → 40px (md) → 56px (lg) → 64px (xl)

---

## Data & API

### CoinGecko (free, no API key)
```ts
// Bitcoin price
GET https://api.coingecko.com/api/v3/simple/price
  ?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true

// Market dominance
GET https://api.coingecko.com/api/v3/global

// Sparkline (7-day)
GET https://api.coingecko.com/api/v3/coins/bitcoin/market_chart
  ?vs_currency=usd&days=7&interval=daily
```

- Wrap in `next: { revalidate: 60 }` for ISR — keeps Vercel function calls within free limits
- Always show last-known data if fetch fails — never show blank prices
- Price up = `#00C896`, price down = `#FF4D4D`, always prefix with `+`/`–`

### Articles (demo)
Use static mock data in `lib/mock-articles.ts`. No CMS required for demo.
Article slugs must be URL-safe: lowercase, hyphens only, no special chars.

---

## Vercel Free Tier Constraints

- No background jobs or cron — use ISR (`revalidate`) for data freshness
- No Edge Runtime on hobby plan for paid features — use standard Node.js runtime
- Keep serverless function count low — consolidate API routes
- Image optimization: use `next/image` with `sizes` prop on every image — avoids Vercel image quota blowout
- Static export preferred for article pages (SSG), dynamic for homepage with ISR
- Environment variables: set in Vercel dashboard, never commit `.env.local`

```ts
// next.config.ts
const config = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}
```

---

## Code Conventions

- Named exports only — no `export default` except page components (Next.js requires it)
- `cn()` from `clsx` + `tailwind-merge` for conditional classes — never string concat
- All prices formatted with `Intl.NumberFormat` — never manual string manipulation
- Server Components by default; add `'use client'` only for interactive UI (price widgets, nav toggle, search)
- `next/image` for every `<img>` — no raw img tags
- No inline styles — Tailwind classes only, except for dynamic CSS custom properties
- Accessibility: all icon-only buttons need `aria-label`, live price regions need `aria-live="polite"`

---

## Gotchas

- IMPORTANT: Hero overlay gradient is directional (left→right), NOT top→bottom — check `bg-gradient-to-r`
- IMPORTANT: Dashboard card row uses `margin-top: -40px` to overlap hero — requires `z-[10]` on the card section and `overflow: visible` on the hero wrapper
- Status badge is NOT an `<h>` tag — it's a `<div>` or `<span>` with pill styling
- Display headline is UPPERCASE only for the hero — all other headings are sentence case
- `#666666` (Slate) is for placeholder/disabled only — never use for readable text (fails WCAG AA)
- JetBrains Mono is used ONLY for numbers/prices — never for body text or headings
- Sidebar sticky offset is `top-[88px]` (64px nav + 24px gap) — not `top-[64px]`
- Do not use `margin: auto` for component-to-component spacing — use `gap` in flex/grid

---

## Workflow

1. Read relevant component spec from `Layout_Blueprint.md` before building that component
2. Build mobile-first — `xs` base styles, layer up with `md:` `lg:` `xl:` prefixes
3. Run `npm run typecheck` after adding new types or refactoring
4. Run `npm run build` before pushing to verify Vercel will accept it
5. Never commit `.env.local`, `node_modules/`, or `.next/`
