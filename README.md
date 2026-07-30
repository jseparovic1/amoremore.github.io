# AmoreMore Apartments

Marketing website for the AmoreMore apartments in Split, Croatia - two apartments in one family house: **Amore** (studio) and **More** (one-bedroom).

Built with Astro 7, Tailwind CSS 4 and GSAP.
Trilingual: English (`/`), Croatian (`/hr/`) and German (`/de/`).
Booking is handled by deep links to the Booking.com listing; the contact form opens the visitor's mail client via `mailto:`.

## Development

```sh
npm install
npm run dev          # http://localhost:4321
```

Or with Docker:

```sh
docker compose up dev              # hot-reloading dev server on :4321
docker compose up preview --build  # production build behind nginx on :8080
```

## Production build

```sh
npm run build        # static output in dist/
```

## Structure

- `src/i18n/translations.ts` - all site copy per locale
- `src/data/apartments.ts` - curated photo galleries per apartment
- `src/components/HomePage.astro`, `ApartmentPage.astro` - shared page components; locale pages under `src/pages/` are thin wrappers
- `src/scripts/` - GSAP animations (respecting `prefers-reduced-motion`), lightbox, contact form
- `src/assets/brand/` - logo artwork (`*-trim.png` are auto-cropped, transparent-background versions)
- `public/fonts/` - self-hosted Boska and Satoshi variable fonts (Fontshare licence)
