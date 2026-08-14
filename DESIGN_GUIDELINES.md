# ML@Purdue — Design Guidelines (v2 style)

This document defines the visual style established on the **home page** (`src/pages/index.astro`
+ `src/components/Carousel.astro`) and tells you how to bring the other pages
(`about`, `projects`, `reading-group`, `workshops`, `accelerator`, `sponsor`, `team`, blog, …)
in line with it.

Treat the home page as the source of truth. When in doubt, open `src/pages/index.astro`
and copy the exact class recipe rather than inventing a new one.

---

## 1. The look in one paragraph

Bold, flat, high-contrast, editorial. The page is a vertical stack of **full-screen
color panels** that alternate **black → white → mlp-purple**. Type is large and set in
**Inter** (the block/space font, Orbitron, is retired everywhere except the `ML@PURDUE`
wordmark). **Nothing is rounded**, there are **no boxes-for-the-sake-of-boxes** and **no
decorative animation** (the old starfield/float is gone). The only motion is functional:
hover color changes, a CTA arrow that nudges right, and the carousel slide. Buttons are
**square, outlined, transparent**, with a trailing arrow.

---

## 2. Foundations (apply these globally)

### 2.1 Typography
- **Orbitron (`.orbitron`) is reserved for two things only:** the `ML@PURDUE` wordmark, and a
  **page's single hero title** (the big page name in a page's first/hero panel — e.g.
  "Accelerator", "Field Lab"). Everything else — subsection headings, card headings, nav,
  labels, body — uses **Inter** (the default `font-sans`), so you just delete the `orbitron`
  class and add weight/size utilities. Do **not** put Orbitron on subsection headings.
- Headings get their emphasis from **weight + size**, not from the block font:
  - **Page hero title** (`<h2>`, Orbitron): `orbitron font-bold text-6xl sm:text-8xl`
  - **Subsection heading** (`<h2>` within a page): `font-bold text-4xl sm:text-6xl`
  - **Landing panel heading** (home page's one-idea panels): `font-bold text-5xl sm:text-7xl`
  - **Section heading in a narrow column**: `font-bold text-4xl sm:text-6xl`
  - **Card heading** (`<h3>`): `font-bold text-2xl` (small cards) or `text-3xl sm:text-4xl` (larger)
  - **Hero intro / lead paragraph**: `text-base sm:text-lg opacity-90` (kept small and tight)
  - **Section body / blurb**: `text-lg sm:text-xl opacity-90` or `text-xl sm:text-2xl` (larger panels)
  - **Bullet lists**: `list-disc space-y-2 pl-5 opacity-90`
- The `ML@PURDUE` wordmark keeps `orbitron` and is built from three spans (see the hero in
  `index.astro`): `ML` largest, `@` smaller and top-aligned, `PURDUE` medium.

### 2.2 Color
Only three panel backgrounds exist. Use them literally:

| Role        | Value        | Tailwind            | Text on it        |
|-------------|--------------|---------------------|-------------------|
| Black       | `#000000`    | `bg-black`          | `text-white`      |
| White       | `#ffffff`    | `bg-white`          | `text-black`      |
| MLP purple  | `#A45DF5`    | `bg-[#A45DF5]`      | `text-white`      |

- The canonical accent / "mlp purple" is **`#A45DF5`**. Use it for the purple panels and for
  button hover states. (It matches the club's translucent "glass" purple.)
- Panels **cycle in order down the page**: 1st black, 2nd white, 3rd purple, 4th black, …
  Reuse the `palette` array pattern from `index.astro`:
  ```ts
  const palette = [
    { bg: "bg-black",        text: "text-white" },
    { bg: "bg-white",        text: "text-black" },
    { bg: "bg-[#A45DF5]",    text: "text-white" },
  ];
  // panel i uses palette[i % palette.length]
  ```
- Text color always flips for contrast: **white on black/purple, black on white**.
- Contrast caveat: white text on `#A45DF5` is fine for large headings but borderline for
  small/long body text. Keep purple-panel body copy short and large.
- The theme tokens (`bg-default`, `text-offset`, `text-secondary`, etc. from
  `src/styles/theme.css`) still exist and the site root is `data-theme="dark"`. You may keep
  using `text-secondary` (purple) for links inside dark content, but **panels use the explicit
  black/white/purple above**, not the tokens.

### 2.3 Hard rules
- **No rounded corners anywhere.** Do not use `rounded-*`. Strip existing `rounded-md`,
  `rounded-lg`, `rounded-full`, and the `border-radius` inside `.glass`/embeds. Straight edges only.
- **No decorative animation.** Do not add entrance animations, parallax, floats, or the
  starfield. Motion is limited to the functional transitions in §5.
- **No gratuitous boxes ("bento").** A card must justify itself (it groups a title + content +
  action). Don't wrap plain text in a panel/box. Retire the `.glass` treatment on these pages.
- **Nav lives at the top and is sticky.** Use `<Header fixed />` (most pages already do).
- **Panels don't have to be full-viewport tall.** Landing panels (home) fill the screen; on a
  normal content page, size panels to their content with `py-20` instead — see §3.4.

---

## 3. Layout system

### 3.1 The full-screen panel (primary building block)
Each major section is a full-width panel that fills the viewport below the fixed header:

```astro
<section class={`flex min-h-[calc(100vh-6rem)] w-full items-center ${theme.bg} ${theme.text}`}>
  <div class="mx-auto w-[90vw] max-w-6xl">
    <h2 class="mb-10 font-bold text-5xl sm:text-7xl">Heading</h2>
    <!-- content -->
  </div>
</section>
```

- **`6rem`** is the fixed header height (logo `h-[4rem]` + `py-4`). That's why panels are
  `min-h-[calc(100vh-6rem)]` and the hero uses `pt-24` to clear the header.
- **Content container is always `mx-auto w-[90vw] max-w-6xl`.** This gives a consistent
  `5vw` gutter on the left/right (until `max-w-6xl` = 72rem caps it on wide screens).
- `flex items-center` vertically centers the content in the panel.

### 3.2 Split panels (two columns)
When a panel has two sides (e.g. Sponsor = text left / logo strip right; Events = calendar
left / cards right), make the `<section>` a flex row that **stacks on mobile**:
`flex flex-col … sm:flex-row` (or a `grid gap-6 md:grid-cols-2`).

To make a left column's text line up with the standard container's left edge even though the
panel is full-bleed, use this left padding:
```
pl-[5vw] sm:pl-[max(5vw,calc((100vw-72rem)/2))]
```
That equals the left gutter of a `w-[90vw] max-w-6xl` centered container at any width.

### 3.3 Content-heavy pages (team, projects, blog)
Not every page is a set of one-idea landing panels. For pages that are lists/grids of real
content, **don't force one 100vh panel per item.** Instead:
- Use a single dark (`bg-black text-white`) page body, or a small number of colored panels
  to break up major sections.
- Keep the same container (`mx-auto w-[90vw] max-w-6xl`), the same type scale, the same
  square outlined buttons, straight-edged cards, and Inter headings.
- The goal is stylistic consistency (flat, straight, high-contrast, Inter, purple accent),
  not literally reproducing the color-cycling hero on a data page.

### 3.4 Content-page pattern (sized panels) — the standard "info page" template
This is the pattern used by `accelerator.astro` and `field-lab.astro`. Use it for a focused
informational page (an initiative, a program) rather than the full-viewport landing hero:

- **Panels are sized to their content, not the viewport.** Use `w-full … py-20` and **drop**
  `min-h-[calc(100vh-6rem)]`, `items-center`, and `justify-center`. Sections flow compactly.
- **Colors still cycle** black → white → purple across the (now shorter) sections.
- **First/hero panel clears the fixed header** with `pt-28 pb-20` (no `min-h`).
- Structure that works well and reads consistently:
  1. **Hero — black.** `orbitron` page title (§2.1), a short intro paragraph
     (`text-base sm:text-lg`), and the **primary filled Apply/CTA button** (§4.1) up top.
  2. **Middle — white.** A subsection heading + a `grid gap-6 sm:grid-cols-3` (or `-cols-2`)
     of straight-edged cards (here: inverted `bg-black text-white` cards — §4.2 — with a square
     phase badge — §4.6).
  3. **Closing — purple.** A subsection heading + short copy (with inline links, §4.5) and a
     second **white-filled** CTA so it pops on purple.

```astro
<!-- hero panel -->
<section class="w-full bg-black pt-28 pb-20 text-white">
  <div class="mx-auto w-[90vw] max-w-6xl">
    <h2 class="orbitron font-bold text-6xl sm:text-8xl">Page Title</h2>
    <p class="mt-6 max-w-2xl text-base opacity-90 sm:text-lg">…intro…</p>
    <!-- filled primary CTA (§4.1) -->
  </div>
</section>

<!-- middle panel -->
<section class="w-full bg-white py-20 text-black">
  <div class="mx-auto w-[90vw] max-w-6xl">
    <h2 class="font-bold text-4xl sm:text-6xl">Subsection</h2>
    <!-- cards grid -->
  </div>
</section>

<!-- closing panel -->
<section class="w-full bg-[#A45DF5] py-20 text-white">
  <div class="mx-auto w-[90vw] max-w-6xl">
    <h2 class="font-bold text-4xl sm:text-6xl">Subsection</h2>
    <!-- copy + white-filled CTA -->
  </div>
</section>
```

---

## 4. Components

### 4.1 CTA button — square, outlined, arrow (the default button)
```astro
<a
  href={href}
  class="group inline-flex items-center gap-2 border-2 border-current px-5 py-2.5 font-semibold
         transition hover:border-[#A45DF5] hover:!text-[#A45DF5]"
>
  {label}
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
       class="transition-transform duration-200 group-hover:translate-x-1">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</a>
```
- **Transparent fill, `border-2 border-current`** so it inherits the panel's text color
  (white on dark, black on white). No rounding.
- **Hover = turn mlp purple**: `hover:border-[#A45DF5] hover:!text-[#A45DF5]`. The `!` is
  required to beat the global `a:hover { color: secondary }` rule in `global.css`.
- **Arrow nudges right on hover**: parent has `group`; the arrow SVG has
  `transition-transform duration-200 group-hover:translate-x-1`. Every arrow CTA does this.
- **Exception — on a purple panel**, the purple hover would vanish. There, use
  `hover:!text-current hover:opacity-60` instead (see the Sponsor CTA). Keep the arrow nudge.
- Size variants seen on the home page: `px-4 py-2` (small card), `px-5 py-2.5` (card),
  `px-6 py-3` (panel-level, with `gap-3` and a 20px arrow).

**Filled primary variant (THE action).** When a page has one dominant action (e.g. "Apply
now"), make it a **solid** button so it clearly outranks outlined links. This is a deliberate
exception to the outlined-default. Same `group` + arrow-nudge; larger padding
(`px-8 py-4 text-lg`, 22px arrow). Color it to pop against its panel:
- On a **black/dark** panel: `bg-[#A45DF5] text-white … hover:opacity-90 hover:!text-white`
- On a **purple** panel: `bg-white text-[#A45DF5] … hover:opacity-90 hover:!text-[#A45DF5]`
```astro
<a href={href}
   class="group inline-flex items-center gap-3 bg-[#A45DF5] px-8 py-4 text-lg font-semibold
          text-white transition hover:opacity-90 hover:!text-white">
  Apply now
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"
       class="transition-transform duration-200 group-hover:translate-x-1">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</a>
```
Place the primary CTA **near the top** of the page (in/after the hero), not only at the
bottom; repeat it once at a natural closing moment if useful — don't scatter it in every panel.

### 4.2 Cards / sub-boxes (straight-edged, two treatments)
Cards are `display:flex; flex-direction:column`, `p-6`, **no rounding**, with the CTA pushed to
the bottom via `mt-auto` (when the card has a fixed height). Two visual treatments:

- **Translucent (on a dark panel):** `border border-white/25 bg-white/5`
- **Solid inverted (contrast against panel):** e.g. black card on the white panel:
  `bg-black text-white` (or `bg-white text-black` on a dark panel).

Choose translucent for a subtle grouping on black; choose solid-inverted when you want the
cards to pop against a white/light panel. Buttons inside inherit `border-current`, so they
read correctly either way.

### 4.3 Fixed-proportion cards
Landing cards can use a portrait ratio on desktop, dropped on mobile so they size to content:
`class="flex flex-col … p-6 sm:aspect-[4/5]"`. When you drop the fixed height on mobile,
`mt-auto` collapses — so give the button an explicit mobile gap: `mt-8 sm:mt-auto`.

### 4.4 Images
- Use the optimizing `<Image>` component (`@astrojs/image/components`), not raw `<img>`, for
  photos. Downscale + `format="webp"`; crop to fill with `object-cover` and a height class.
  See `Carousel.astro` (`width={1600} format="webp" quality={70}`).
- Logos that must stay legible on a colored panel go on plain **white tiles** (`bg-white`,
  padded, straight-edged) — see the Sponsor logo strip.
- Source images live in `src/…` and are imported (optimized path); only truly static files
  (favicons, PDFs, `social.png`) belong in `public/`.

### 4.5 Inline text links (inside body copy)
Links embedded in a paragraph are underlined, not buttons. On a colored panel the global
`a:hover` turns text purple, which disappears on the purple panel — so override it:
```astro
<a href="/projects"
   class="font-semibold underline decoration-2 underline-offset-4 hover:opacity-70 hover:!text-white">
  project team
</a>
```
Use `hover:!text-white` on dark/purple panels and `hover:!text-black` on white panels so the
link keeps its base color and just dims on hover. (See the "Who is Accelerator for?" copy.)

### 4.6 Square labels / badges (pills without the pill)
Small metadata chips (a phase, a tag, a status) are **square** — never `rounded-full`:
```astro
<span class="self-start bg-[#A45DF5] px-3 py-1 text-sm font-semibold">Weeks 1–9</span>
```
Purple fill + white text is the default; keep them small and left-aligned (`self-start` in a
flex column). See the Accelerator timeline cards.

---

## 5. Motion

Allowed, and only these:
- **Color/opacity transitions** on hover: `transition` / `transition-colors`, ~200ms.
- **CTA arrow**: `group-hover:translate-x-1` (200ms).
- **Carousel**: horizontal slide (`transition-transform duration-500`), 5s autoplay,
  seamless infinite loop, pause on hover.

Not allowed: entrance/scroll animations, floats, parallax, the starfield, spinners for flair.
Respect `prefers-reduced-motion` if you add anything new.

---

## 6. Responsive rules

- **Stack on mobile:** two-column panels become `flex-col` / single-column grids; use
  `sm:` / `md:` to restore columns (`sm:flex-row`, `sm:grid-cols-3`, `md:grid-cols-2`).
- **Drop fixed heights/ratios on mobile:** e.g. `sm:aspect-[4/5]`, `md:h-[80vh]`, so mobile
  content sizes naturally instead of leaving big blank space.
- **Don't force 100vh on mobile when it creates empty filler:** the hero uses
  `pt-24 sm:min-h-screen` (full height only from `sm`).
- **Match mobile vertical padding to the side gutter:** a panel that adds top/bottom padding
  on mobile uses `py-[5vw]` (equals the `5vw` side gutter) — see the white Events panel.
- **Center the wordmark on mobile, left-align on desktop:** `left-1/2 -translate-x-1/2`
  → `sm:left-20 sm:translate-x-0` (see hero).

---

## 7. Do / Don't

**Do**
- Use `bg-black` / `bg-white` / `bg-[#A45DF5]` and flip text color for contrast.
- Use `orbitron` only for the wordmark and a page's single hero title; Inter for everything else.
- Keep every corner square; strip `rounded-*` and embed `border-radius`.
- Make buttons square, outlined, arrow-suffixed, purple-on-hover — and use **one filled**
  primary button for the page's dominant action (§4.1), placed near the top.
- On a content/info page, size panels to content with `py-20` (§3.4); reserve full-viewport
  panels for the home-style landing.
- Keep the `mx-auto w-[90vw] max-w-6xl` container and the large type scale.
- Use `<Header fixed />` and clear it with top padding on the first section.

**Don't**
- Don't reintroduce Orbitron on subsection headings, body, or nav.
- Don't add rounded corners, the `.glass` panel, gradients-as-decoration, or the starfield.
- Don't box plain text or build filler cards.
- Don't use filled buttons for secondary actions — the default remains outlined + transparent;
  filled is reserved for the single primary CTA.
- Don't leave small body text on a purple background.

---

## 8. Converting an existing page — checklist

1. **Header/nav:** ensure the page renders `<Header fixed />`; give the first section enough
   top padding (`pt-24`) to clear the 6rem fixed header.
2. **Fonts:** find every `orbitron` usage; remove it except on the `ML@PURDUE` wordmark.
   Re-express those headings with Inter (`font-bold` + `text-*`).
3. **Backgrounds:** decide the page type (§3.3). For landing-style pages, wrap each section in
   a full-screen panel and apply the black/white/purple cycle. For content pages, use a dark
   body with occasional colored section breaks.
4. **Containers:** put content in `mx-auto w-[90vw] max-w-6xl`; use split-panel + gutter-match
   padding where a section is two columns.
5. **Corners:** remove all `rounded-*` and any `border-radius` in inline styles / `.glass`.
6. **Cards:** restyle to straight-edged flex-column cards (§4.2), translucent or solid-inverted.
7. **Buttons/links-as-CTAs:** replace with the square outlined arrow button (§4.1); wire the
   `group` + arrow nudge + purple hover (or the purple-panel hover variant).
8. **Images:** move to `<Image>` with webp + `object-cover`; put logos on white tiles.
9. **Motion:** delete decorative animation; keep only hover/arrow/carousel transitions.
10. **Responsive:** stack columns, drop fixed ratios on mobile, match mobile padding to the
    gutter, verify no empty 100vh filler on phones.
11. **Verify:** `npm run build` must pass; spot-check the page against `index.astro` for
    identical tokens.

---

## 9. Reference files
- `src/pages/index.astro` — canonical landing panels, palette cycle, hero, split panels, CTA recipes.
- `src/pages/accelerator.astro` / `src/pages/field-lab.astro` — the **content-page template**
  (§3.4): sized panels, Orbitron hero title, filled primary CTA, timeline cards + badges, inline links.
- `src/components/Carousel.astro` — image optimization, `object-cover` cropping, infinite-loop JS.
- `src/components/header.astro` — the fixed top nav (6rem tall).
- `src/styles/theme.css` / `src/styles/global.css` — theme tokens, `.orbitron`, retired `.glass`.
- `tailwind.config.cjs` — fluid type plugin, color tokens.
