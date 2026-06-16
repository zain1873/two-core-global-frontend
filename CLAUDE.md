# Two Core Global — Project Guide

Marketing/agency website for **Two Core Global**. Migrated from a CRA (react-router) app to **Next.js 14 App Router**. Contact email: `twocoreglobal@gmail.com`.

## Stack
- **Next.js 14.2** (App Router), **React 18**
- Plain CSS (no CSS modules / Tailwind in practice — `tailwindcss` is installed but pages use hand-written CSS files)
- `gsap`, `aos`, `lucide-react`, `react-icons` for animations/icons
- Path alias: `@/` → `src/`

## Scripts
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — `next lint`

## Architecture: the "wrapper + view" pattern
Every route has **three layers**. To follow conventions, touch all three:

1. **Route wrapper** — `src/app/<route>/page.jsx`. Tiny file, server component. Imports the view and exports metadata:
   ```jsx
   import PageComponent from "@/views/SomePage";
   import { buildMetadata } from "@/lib/seo";
   export const metadata = buildMetadata("/some-route");
   export default function Page() { return <PageComponent />; }
   ```
2. **View** — `src/views/SomePage.jsx`. `"use client"` component holding the full page (Navbar + sections + Footer). This is where the actual page content lives.
3. **SEO entry** — an object in the `routes` array in [src/lib/seo.js](src/lib/seo.js). `buildMetadata(path)` looks the path up here; **a route missing from this array silently falls back to the home page's metadata.** Adding it here also auto-adds the page to `sitemap.xml` ([src/app/sitemap.js](src/app/sitemap.js)) and robots.

### Adding a new page — checklist
1. Create `src/views/XPage.jsx` (`"use client"`, include `<Navbar/>` … `<Footer/>`).
2. Create `src/app/<route>/page.jsx` wrapper (above).
3. Add a `{ path, file, title, description, keywords, priority }` entry to `routes` in `src/lib/seo.js`.
4. If it should be in the footer/nav, add a `<Link to="/route">` (see Links below).

## Folder layout
- `src/app/**` — route wrappers + `layout.jsx`, `sitemap.js`, `robots.js`, `globals.css`
- `src/views/**` — full page components (one per route)
- `src/components/**` — shared/section components (Navbar, Footer, Breadcrumb, contactForm, CtaSection, Testimonials, etc.)
- `src/css/**` — stylesheets. Page-specific CSS lives in `src/css/PagesCss/`. Imported directly at the top of the view (`import "../css/PagesCss/webDev.css"`).
- `src/lib/` — `seo.js` (central route/metadata config), `link.jsx` (router shim)
- `public/assets/**` — images. **Some filenames contain spaces** (e.g. `about banner.png`, `contact banner.png`, `portfolio banner.png`) — reference these URL-encoded: `/assets/about%20banner.png`.

## Conventions & gotchas
- **Imports are case-sensitive in spirit:** Navbar is `../components/navbar` (lowercase file), Footer is `../components/Footer` (capital F). Match existing casing.
- **Links:** use `import { Link } from "@/lib/link"` with `to="/path"` (a shim over `next/link` that keeps the old react-router `to=` API). `NavLink` also available with `isActive`.
- **Breadcrumb:** `import Breadcrumb from "@/components/Breadcrumb"`, usage: `<Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Current" }]} />`.
- Views start with `"use client";`.

## Theming (the design system)
Defined as CSS variables in [src/css/global.css](src/css/global.css) `:root`. **Always use these tokens, not hardcoded colors.** Key ones:
- `--color-primary: #7CFF00` (neon green — the brand/theme color), `--color-primary-light: #A8FF00`
- `--color-accent: #00F5FF` (cyan)
- `--color-bg: #05070D`, `--color-bg-secondary: #0B1020` (dark backgrounds)
- `--color-heading: #FFF`, `--color-text: #D9D9D9`, `--color-text-muted: #999`
- Glows: `--glow-primary-strong`, `--glow-accent`, etc.
- Gradients: `--gradient-primary`, `--gradient-hero`, etc.

## Banners (page heroes)
Most pages use a shared `.web-banner` section (styles in [src/css/PagesCss/webDev.css](src/css/PagesCss/webDev.css)). Pattern:
```jsx
<section className="web-banner" style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
  <div className="banner-dark-overlay" />
  <div className="banner-glass">
    <div className="banner-content">
      <Breadcrumb items={[...]} />
      <h1>Title</h1>
      <button className="banner-btn">CTA</button>
    </div>
  </div>
</section>
```
- All banners use `background-attachment: fixed` (parallax). A few pages have their own banner class instead of `.web-banner`: `.video-banner`, `.ecom-banner`, `.crm-banner`, `.sp-banner` (Services), `.contact-banner` — each has the fixed attachment set in its own CSS file. Keep these in sync when changing banner behavior.
- `.banner-btn` uses the theme green background; styled once in `webDev.css` and shared everywhere.
- Note: `background-attachment: fixed` is ignored by most mobile browsers (falls back to normal scroll) — expected.

## Legal pages
`/terms-and-conditions` and `/privacy-policy` share [src/css/PagesCss/legal.css](src/css/PagesCss/legal.css) (`.legal-*` classes). Content is a generic template — not lawyer-reviewed.
