# AmoreMore Apartments website

## Context

Build a marketing website from scratch (repo is empty) for **AmoreMore Apartments**, two rental apartments ("Amore" and "More") in Split, Croatia.
Source material: the Booking.com listing (booking.com/hotel/hr/amoremore-apartments.en-gb.html).
Goals: modern sleek design, cool animations, Docker for local preview, photos pulled from Booking.com, booking handled by deep-linking to Booking.com.

Confirmed decisions:
- **Stack**: Astro 5 (static output) + Tailwind CSS 4 + GSAP (ScrollTrigger) for animations
- **Booking**: "Book now" buttons deep-link to the Booking.com listing
- **Contact**: `amoremore@gmail.com`; contact form composes a `mailto:` link (prefilled subject/body from form fields) that opens the visitor's mail client - no backend
- **Languages**: English, Croatian, German via Astro's built-in i18n routing (`/` = en, `/hr/`, `/de/`)
- **One website**: both apartments are units in the same house; single site with two apartment sections/pages
- **Apartment types**: **Amore** is a studio apartment; **More** is a one-bedroom apartment

## Brand identity (from the real door plaques, photos 690954610 / 690954454)

The apartments have physical branded plaques that define the visual identity:
- **Amore**: copper script wordmark + heart motif ("love")
- **More**: copper script wordmark + wave motif ("more" = "sea" in Croatian - the brand story is love & sea)
- Shared style: rose-gold/copper script on dark panel, rattan cane frame, dusty-pink walls

Reuse on the site:
- Recreate both wordmarks as SVG using an elegant script font matching the plaques (candidates from Fontshare/Google with open licenses, chosen visually during implementation)
- Heart and wave as SVG motifs: section dividers, apartment page identifiers, favicon (combined heart+wave mark)
- Palette derived from the plaques: dusty rose, copper/rose-gold, warm cream, dark charcoal
- The plaque photos themselves used in the "story" section explaining the two names

Property facts gathered from the live listing:
- Recently renovated, modern/luxury apartments in Split
- 7 min walk to Bačvice beach, <1 km to Diocletian's Palace, 23 km from Split Airport
- Amenities: free WiFi, A/C, balcony, coffee machine, dishwasher, oven, work desk, private bathroom

## Photo assets

38 gallery photos were extracted from the listing at `max1280x900` resolution (script: `/tmp/pw-runner/booking-gallery.mjs`, rerunnable).
During implementation: download all 38 into `src/assets/photos/` with a small curl script, then review them visually (Read tool) to sort into `amore/`, `more/`, and `shared/` (exterior, building, views) and pick hero shots.
Astro's built-in `<Image>` component will generate responsive AVIF/WebP variants at build time, so we store originals only.

URL pattern: `https://cf.bstatic.com/xdata/images/hotel/max1280x900/<ID>.jpg?k=<hash>&o=`
Photo IDs: 690954356, 690954394, 690954402, 690954409, 690954417, 690954426, 690954434, 690954444, 690954454, 690954462, 690954471, 690954478, 690954487, 690954495, 690954501, 690954506, 690954512, 690954523, 690954534, 690954545, 690954551, 690954556, 690954561, 690954565, 690954569, 690954573, 690954581, 690954585, 690954591, 690954594, 690954598, 690954606, 690954610, 690954614, 690954619, 690954625, 694798818, 694799033.
The full ID→URL map (with `k=` hashes) is in the conversation transcript; the extraction script regenerates it if needed.

Note: also try `max1920x1080` for the handful of hero images - bstatic often serves larger sizes with the same hash; fall back to 1280 if not.

## Site structure

Single-page-feel site with per-apartment detail pages, per locale:

- `/` - landing page:
  - Full-viewport hero with slow Ken Burns photo + staggered headline reveal
  - Intro section (the story: "Amore" + "More")
  - Two large apartment cards (Amore / More) with hover parallax, linking to detail pages
  - Amenities grid with scroll-in stagger
  - Location section: distances (beach, palace, airport) + embedded OpenStreetMap or static map
  - Contact / "Book on Booking.com" CTA
  - Footer
- `/amore/` (studio) and `/more/` (one-bedroom) - apartment detail pages: photo gallery (lightbox), amenity list, sleeps/size details, Book now CTA
- Contact section: form (name, dates, apartment, message) whose submit builds a `mailto:amoremore@gmail.com` URL with prefilled subject/body and opens the visitor's mail client
- Same tree under `/hr/` and `/de/`

## Project layout

```
amoremore/
  docker-compose.yml        # dev (astro dev, hot reload) + preview (nginx serving dist/)
  Dockerfile                # multi-stage: node:22-alpine build -> nginx:alpine
  astro.config.mjs          # i18n: locales [en, hr, de], defaultLocale en
  package.json
  src/
    assets/photos/{amore,more,shared}/
    content/                # apartment data + per-locale UI strings (en.json, hr.json, de.json)
    i18n/                   # tiny t() helper + locale utils
    layouts/Base.astro      # <head>, fonts, nav, footer, lang switcher, SEO/hreflang
    components/             # Hero, ApartmentCard, Gallery, Lightbox, AmenityGrid, LocationMap, LangSwitcher, BookNowButton
    scripts/animations.ts   # GSAP + ScrollTrigger setup
    pages/
      index.astro, amore.astro, more.astro
      hr/... , de/...       # thin wrappers reusing the same page components with locale prop
  public/ (favicon, og-image, robots.txt)
```

## Design direction

**Hard rule: the site must not look AI-generated.** Explicitly avoid the generic "Claude/AI website" tells:
- No Inter, Roboto, Open Sans, Poppins, Montserrat, or system-ui typography
- No purple/indigo gradients, no glassmorphism cards, no emoji-as-icons, no identical rounded-corner card grids
- No centered-hero-with-two-buttons boilerplate; layouts should be asymmetric and editorial (offset photos, overlapping type on imagery, oversized numerals for distances, generous negative space)

Direction:
- Aesthetic: editorial, driven by the real brand identity - warm cream background, dark charcoal text, dusty rose and copper/rose-gold accents (from the plaques); magazine-style layouts driven by the photography
- Typography (self-hosted, distinctive, free-licensed): an elegant script face for the Amore/More wordmarks (matching the plaques), a display serif such as **Boska** or **Zodiak** for oversized headlines, and **Satoshi** or **General Sans** for body; letter-spaced small-caps for labels. Final pairing chosen during implementation by screenshotting 2-3 candidates and picking the best
- Heart (Amore) and wave (More) SVG motifs used consistently: section markers, list bullets, page transitions
- Details that sell "designed, not generated": huge type crossing image edges, thin rule lines, a rotating circular "book now" badge, photo captions in small caps, custom cursor hover states on gallery images
- Animations (GSAP + ScrollTrigger, all respecting `prefers-reduced-motion`):
  - Hero: Ken Burns zoom + clip-path headline reveal
  - Scroll: section fade/slide-ins with stagger, parallax on large photos
  - Apartment cards: hover image scale + subtle tilt
  - Smooth-scroll anchor nav
- Gallery lightbox: lightweight (PhotoSwipe or a small custom one), keyboard + swipe support

## Docker

- `Dockerfile` (multi-stage): `node:22-alpine` → `npm ci && npm run build` → `nginx:alpine` serving `dist/` with gzip + cache headers
- `docker-compose.yml` with two services:
  - `dev`: node image, mounts source, runs `astro dev --host` on :4321 (hot reload)
  - `preview`: builds the Dockerfile, serves production build on :8080
- Usage: `docker compose up dev` while designing, `docker compose up preview --build` for the production check

## Implementation steps

1. Scaffold Astro 5 project (`npm create astro@latest`), add Tailwind 4 (`@tailwindcss/vite`), GSAP, @fontsource fonts; configure i18n in `astro.config.mjs`
2. Download the 38 photos via curl script into `src/assets/photos/`; visually review and sort into amore/more/shared; pick hero + card images
3. Write content data: apartment descriptions, amenities, distances (from the listing facts above); translate UI strings + copy to HR and DE
4. Build `Base.astro` layout: nav, footer, language switcher, SEO meta + `hreflang` alternates, OG image
5. Build landing page sections (Hero, intro, apartment cards, amenities, location, contact/CTA)
6. Build apartment detail pages with gallery + lightbox
7. Wire up GSAP animations in `scripts/animations.ts` with `prefers-reduced-motion` guard
8. Create `hr/` and `de/` page wrappers reusing shared components
9. Add Dockerfile + docker-compose; verify production build serves correctly
10. Polish pass: responsive check (mobile-first), Lighthouse, favicon/OG image

## Autonomous execution (no user input required)

The whole implementation runs as a self-correcting loop with zero questions to the user:
1. Build a section/page
2. Screenshot it with the headless-browser skill at 1440px desktop and iPhone 13 mobile, plus capture console errors
3. Self-critique against the design brief (the "not AI-generated" rules, brand palette, typography)
4. Fix and re-screenshot until it passes, then move to the next section
Decisions that would normally be questions (font pairing, hero photo choice, photo sorting) are made visually by comparing screenshots and picking the best. The user is only shown the finished site running in Docker.

## Verification

- `docker compose up dev` → browse http://localhost:4321 in all three locales
- Use the headless-browser skill to screenshot every page at desktop (1440px) and mobile (iPhone 13) widths and visually inspect layout + animations, plus check for console errors
- `docker compose up preview --build` → confirm the nginx production image serves the built site on :8080
- `npm run build` must pass with zero warnings; spot-check generated responsive images exist in `dist/`

## Notes

- Photos are copied from the owner's own Booking.com listing (user owns the property/photos)
- No em dashes in copy; headings in sentence case (per user's global instructions)
