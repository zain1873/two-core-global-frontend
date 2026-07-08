# Two Core Global — Next.js Project Context

## Project Overview

Two Core Global is a full-service digital agency website migrated from Create React App (CRA) to Next.js 14 App Router. The site showcases agency services (web development, SEO, marketing, branding, UI/UX, etc.), a blog with detail pages, portfolio, and informational pages. It uses a futuristic neon design system with dark backgrounds, neon green/cyan/pink accents, and glow effects.

**Purpose:** Agency marketing website — generate leads, showcase portfolio, publish blog content, and provide service information.

---

## Folder Structure

```
two-core-global-next/
├── public/
│   ├── assets/              # Static images (logos, banners, icons)
│   ├── favicon.png
│   ├── tcg-favicon.jpeg
│   └── tcg-favicon.png
├── src/
│   ├── app/                 # Next.js 14 App Router (page.jsx files)
│   │   ├── layout.jsx       # Root layout (metadata, WhatsApp button)
│   │   ├── page.jsx         # Homepage
│   │   ├── globals.css      # Tailwind directives
│   │   ├── sitemap.js       # Dynamic sitemap generator
│   │   ├── robots.js        # Robots config
│   │   ├── about/
│   │   ├── blog/            # Blog listing + dynamic [slug]/ detail
│   │   ├── brand-identity/
│   │   ├── contact/
│   │   ├── crm-automation/
│   │   ├── ecommerce/
│   │   ├── email-marketing/
│   │   ├── industry-insights/  # NEW — Industry Insights page
│   │   ├── mobile-app-development/
│   │   ├── paid-advertising/
│   │   ├── portfolio/
│   │   ├── privacy-policy/
│   │   ├── sem-services/
│   │   ├── seo-services/
│   │   ├── services/
│   │   ├── social-media-services/
│   │   ├── terms-and-conditions/
│   │   ├── ui-ux-design/
│   │   ├── video-production/
│   │   └── website-development/
│   ├── components/          # Reusable React components
│   │   ├── navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CtaSection.jsx
│   │   ├── contactForm.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Faqs.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── ServicesCards.jsx
│   │   ├── ProjectSlider.jsx
│   │   ├── StatsCounter.jsx
│   │   ├── HeroBannerText.jsx
│   │   ├── banner-video.jsx
│   │   ├── HeroTagline.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── ContactStats.jsx
│   │   ├── MarketingSection.jsx
│   │   ├── SeoExpertise.jsx
│   │   ├── SeoPakages.jsx
│   │   ├── SeoProcess.jsx
│   │   ├── SeoService.jsx
│   │   ├── SeoTagline.jsx
│   │   ├── ... (service-specific components)
│   ├── views/               # Page view components (client components)
│   │   ├── home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   ├── IndustryInsightsPage.jsx  # NEW
│   │   ├── ... (all other page views)
│   ├── css/
│   │   ├── global.css       # Design system CSS variables + globals
│   │   ├── footer.css
│   │   ├── navbar.css
│   │   ├── home.css
│   │   ├── PagesCss/        # Page-specific CSS files
│   │   │   ├── Blog.css
│   │   │   ├── BlogDetail.css
│   │   │   ├── IndustryInsights.css  # NEW
│   │   │   ├── BrandIdentity.css
│   │   │   ├── Contact.css
│   │   │   ├── Services.css
│   │   │   ├── webDev.css
│   │   │   ├── Seo.css
│   │   │   ├── UiUx.css
│   │   │   ├── ... (other page CSS)
│   ├── data/
│   │   └── blogPosts.js     # Frontend blog data (temporary, will be replaced by Django API)
│   └── lib/
│       ├── link.jsx         # CRA-compatible <Link> wrapper using next/link
│       └── seo.js           # Centralized SEO config, routes list, metadata builder
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── PROJECT_CONTEXT.md       # This file
```

---

## Technologies & Frameworks

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.2 | React framework (App Router) |
| **React** | ^18.3.1 | UI library |
| **Tailwind CSS** | ^3.4.15 | Utility CSS (minimal usage — most styling via custom CSS) |
| **AOS** | ^2.3.4 | Scroll animations (Animate On Scroll) |
| **GSAP** | ^3.12.5 | Advanced animations (limited usage) |
| **Lucide React** | ^0.460.0 | Icon library |
| **React Icons** | ^5.4.0 | Additional icons (WhatsApp, social) |
| **PostCSS** | ^8.4.49 | CSS processing |
| **Autoprefixer** | ^10.4.20 | CSS vendor prefixes |

---

## Architecture & Data Flow

### Routing
- **Next.js App Router** with `page.jsx` files in each route directory.
- Each route folder contains a thin `page.jsx` that imports a view component from `src/views/`.
- Route metadata is centralized in `src/lib/seo.js` (the `routes` array) and consumed via `buildMetadata(path)`.
- `sitemap.js` generates the sitemap from the `routes` array + blog posts.

### Component Pattern
```
app/<route>/page.jsx  →  (server component, exports metadata)
  └── views/<View>.jsx  →  (client component, "use client")
        ├── components/Navbar
        ├── components/<page-specific>
        ├── components/CTASection
        └── components/Footer
```

### Data Flow
- **Blog data** is currently served from `src/data/blogPosts.js` (hardcoded array).
- The data file includes a proposed backend contract for future Django REST API integration.
- `getAllPosts()` and `getPostBySlug()` functions are exported from `blogPosts.js`.

### State Management
- No global state management library (no Redux, Zustand, etc.).
- Component-local state via `useState` and `useRef`.
- Filter state in Blog page (`activeFilter`) and Industry Insights page.

---

## Pages & Routes

| Route | View Component | Description |
|---|---|---|
| `/` | `home.jsx` | Homepage with hero, services, projects, testimonials, FAQ |
| `/about` | `AboutPage.jsx` | About agency, team, mission |
| `/services` | `ServicesPage.jsx` | All services overview |
| `/website-development` | `websiteDevelopment.jsx` | Web dev service |
| `/seo-services` | `SeoPage.jsx` | SEO service |
| `/sem-services` | `SemPage.jsx` | SEM/PPC service |
| `/social-media-services` | `SocialMediaPage.jsx` | Social media service |
| `/mobile-app-development` | `MobileDevelopmentPage.jsx` | Mobile app development |
| `/paid-advertising` | `PaidAdvertisingPage.jsx` | Paid ads service |
| `/email-marketing` | `EmailMarketingPage.jsx` | Email marketing service |
| `/brand-identity` | `BrandIdentityPage.jsx` | Branding service |
| `/ui-ux-design` | `UiUxPage.jsx` | UI/UX design service |
| `/ecommerce` | `EcommercePage.jsx` | Ecommerce service |
| `/crm-automation` | `CrmPage.jsx` | CRM/automation service |
| `/video-production` | `VideoProductionPage.jsx` | Video production service |
| `/industry-insights` | `IndustryInsightsPage.jsx` | **Industry insights & trends** |
| `/blog` | `BlogPage.jsx` | Blog listing with filtering |
| `/blog/[slug]` | `BlogDetailPage.jsx` | Blog article detail |
| `/portfolio` | `PortfolioPage.jsx` | Portfolio/case studies |
| `/contact` | `ContactPage.jsx` | Contact form + info |
| `/privacy-policy` | `PrivacyPolicyPage.jsx` | Legal page |
| `/terms-and-conditions` | `TermsPage.jsx` | Legal page |

---

## Components & Responsibilities

### Global/Layout Components
| Component | File | Responsibility |
|---|---|---|
| `Navbar` | `components/navbar.jsx` | Navigation with mega-menu dropdown for services, mobile hamburger menu, scroll hide/show |
| `Footer` | `components/Footer.jsx` | 4-column footer with links, social icons, CTA button |
| `CTASection` | `components/CtaSection.jsx` | Call-to-action banner with gradient animation, noise texture |
| `contactForm` | `components/contactForm.jsx` | Contact form component |
| `Breadcrumb` | `components/Breadcrumb.jsx` | Breadcrumb navigation |

### Homepage Components
| Component | File | Responsibility |
|---|---|---|
| `HeroBannerText` | `components/HeroBannerText.jsx` | Hero heading/subtitle |
| `banner-video` | `components/banner-video.jsx` | Hero background video |
| `HeroTagline` | `components/HeroTagline.jsx` | Tagline section |
| `ServicesCards` | `components/ServicesCards.jsx` | Service cards grid |
| `IndustriesSection` | `components/IndustriesSection.jsx` | Industries we serve |
| `ProjectSlider` | `components/ProjectSlider.jsx` | Portfolio project carousel |
| `Testimonials` | `components/Testimonials.jsx` | Client testimonials |
| `Faqs` | `components/Faqs.jsx` | FAQ accordion |
| `StatsCounter` | `components/StatsCounter.jsx` | Animated stats counter |

### Service-Specific Components
- `BrandPackages`, `BrandProcess`, `BrandServices`, `WhyChooseBrand` (Brand Identity)
- `SeoPakages`, `SeoProcess`, `SeoService`, `SeoExpertise`, `SeoTagline`, `WhyChooseSeo` (SEO)
- `SemPakages`, `SemProcess`, `WhyChooseSem` (SEM)
- `SocialMediaPakages`, `SocialMediaProcess`, `WhyChooseSocial` (Social Media)
- `PaidAdsPakages`, `PaidAdsProcess`, `PaidAdsServices`, `WhyChoosePaidAds` (Paid Ads)
- `EmailPakages`, `EmailProcess`, `EmailServices`, `WhyChooseEmail` (Email Marketing)
- `UiUxPackages`, `UiUxProcess`, `UiUxServices`, `UiUxStats`, `UiUxTools`, `WhyChooseUiUx` (UI/UX)
- `webDevelopmentSideby`, `AppDevelopmentSideby`, `AppDevlopmentCards`, `DevelopmentCards`, `StickySideby` (Web/Mobile Dev)

---

## Styling Approach

### Design System (CSS Variables in `src/css/global.css`)
The project uses a **futuristic neon theme** with CSS custom properties:

| Variable Group | Examples |
|---|---|
| **Primary/Neon** | `--color-primary: #7CFF00` (green), `--color-accent: #00F5FF` (cyan) |
| **Backgrounds** | `--color-bg: #05070D` (near-black), `--color-bg-secondary: #0B1020` |
| **Text** | `--color-heading: #FFFFFF`, `--color-text: #D9D9D9`, `--color-text-muted: #999999` |
| **Borders** | `--color-border-white-alpha: rgba(255,255,255,0.1)` |
| **Glows** | `--glow-primary`, `--glow-accent`, `--glow-pink`, `--glow-orange` |
| **Gradients** | `--gradient-primary`, `--gradient-accent`, `--gradient-bg` |

### CSS Structure
- **`global.css`** — Design system variables, font imports (Inter, Barlow Condensed, Plus Jakarta Sans), base resets
- **Component CSS** — Each component has its own CSS file in `src/css/` (e.g., `footer.css`, `navbar.css`)
- **Page CSS** — Each page view uses a CSS file in `src/css/PagesCss/` (e.g., `Blog.css`, `IndustryInsights.css`)
- **Tailwind** — Minimal usage, mainly for utility classes in CTASection and WhatsApp button

### Reusable CSS Patterns (used across pages)
```
.ii-gradient-text   →  animated gradient text
.ii-hero-*          →  hero section (glows, grid overlay, chip badge, stats, scroll indicator)
.ii-eyebrow         →  section eyebrow label (green uppercase)
.ii-section-title   →  section heading with glow span
.ii-grid            →  card grid (3 cols desktop → 2 → 1 mobile)
.ii-card            →  insight card with hover glow, stat display, readmore button
```

---

## Key Libraries & Utilities

### `src/lib/link.jsx`
Custom `<Link>` and `<NavLink>` components that wrap `next/link` but accept `to` prop (CRA compatibility) in addition to `href`. Supports `className` as function `({ isActive })`.

### `src/lib/seo.js`
Centralized configuration file:
- `siteConfig` — site name, URL, description, OG image
- `routes` — ordered array of all route configurations (path, file, title, description, keywords, priority)
- `routeByPath` — lookup object `{ "/path": route }`
- `buildMetadata(path)` — generates Next.js Metadata object for a route
- `absoluteUrl(path)` — builds absolute URL from relative path

### `src/data/blogPosts.js`
- `POSTS` — array of blog post objects with slug, title, excerpt, category, date, readTime, image, content blocks
- `getAllPosts()` — returns all posts
- `getPostBySlug(slug)` — returns single post
- `getRelatedPosts(currentSlug, count)` — returns related posts (same category)
- Content blocks: `paragraph`, `heading`, `list`, `quote`
- **Note:** Frontend-only data; backend Django API contract is documented in file comments

---

## Common Commands

```bash
# Development server
npm run dev          # → http://localhost:3000

# Production build
npm run build        # → .next/ output

# Production start
npm run start        # → serves production build

# Lint
npm run lint         # → next lint
```

---

## Coding Conventions & Patterns

### Component Architecture
1. **Route page** (`app/<route>/page.jsx`): Server component, exports `metadata` via `buildMetadata()`, imports view component
2. **View component** (`src/views/<Name>.jsx`): Client component with `"use client"` directive, composes Navbar + page sections + CTASection + Footer
3. **Page sections** are inline within the view file (e.g., hero, grid, newsletter)
4. Reusable components live in `src/components/`

### Naming Conventions
- **CSS classes**: `ii-*` prefix for Industry Insights, `bl-*` for Blog, `home-*` for homepage
- **Component files**: PascalCase (`Footer.jsx`, `CtaSection.jsx`)
- **CSS files**: kebab-case (`footer.css`, `IndustryInsights.css`)
- **Data files**: camelCase (`blogPosts.js`)

### Animation Pattern
```javascript
import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({ once: false, duration: 700, offset: 80 });
  const t = setTimeout(() => AOS.refresh(), 100);
  return () => clearTimeout(t);
}, []);
```
Add `data-aos="fade-up"` and `data-aos-delay="120"` to elements.

### Hero Section Pattern
Each page follows this structure:
1. Overlay div
2. 2-3 floating glow blobs (green, cyan, pink) with CSS animations
3. Grid overlay with mask-image
4. Inner content: breadcrumb → chip badge → title → subtitle → topic pills → stats bar
5. Scroll indicator at bottom

### Link Pattern
```jsx
import { Link } from "@/lib/link";
<Link to="/industry-insights">Link Text</Link>
```

---

## Environment Variables

| Variable | Purpose | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | Defaults to `https://www.twocoreglobal.com` |
| `NEXT_PUBLIC_API_URL` | Future Django backend API URL | Not yet used (blog is frontend-only) |

---

## Important Configurations

### `next.config.mjs`
- `reactStrictMode: true`
- No image optimization configured (uses plain `<img>` tags from CRA migration)

### `tailwind.config.js`
- Content: `./src/**/*.{js,jsx,ts,tsx,mdx}`
- No custom theme extensions (all design tokens in CSS variables)

### `postcss.config.js`
- Uses `tailwindcss` and `autoprefixer` plugins

---

## Development Workflow

1. Add new route in `src/app/<route>/page.jsx` (server component with metadata)
2. Create view component in `src/views/<Name>.jsx` (client component)
3. Add route config to `src/lib/seo.js` `routes` array
4. Create page CSS in `src/css/PagesCss/<Name>.css`
5. Import view component CSS at top of view file
6. Add footer link if needed in `src/components/Footer.jsx`
7. Sitemap auto-generates from `routes` array

---

## Known Issues, Limitations & TODOs

### Current Limitations
1. **No image optimization** — All images use plain `<img>` tags. `next/image` migration is a planned follow-up.
2. **No backend integration** — Blog data is hardcoded in `src/data/blogPosts.js`. Django REST API integration is pending.
3. **No i18n** — English only.
4. **No analytics** — No Google Analytics, Plausible, or similar integrated.
5. **No cookie consent banner** — Required for GDPR compliance.

### TODOs
- Migrate to `next/image` for optimized images
- Connect blog to Django backend API
- Add cookie consent banner
- Add analytics (Google Analytics or Plausible)
- Add search functionality for blog/insights
- Add pagination for blog listing
- Add proper 404 page
- Add loading states and error boundaries
- Add TypeScript (currently all JSX)
- Add tests (none currently)

---

## Recent Changes

### Industry Insights Page (Added 2026-07-07)
- **New route:** `/industry-insights`
- **New files:** `src/app/industry-insights/page.jsx`, `src/views/IndustryInsightsPage.jsx`, `src/css/PagesCss/IndustryInsights.css`
- **Updated:** `src/lib/seo.js` (added route config), `src/components/Footer.jsx` (added footer link)
- Features 12 insight cards with category filtering, hero section with pink/cyan/green glows, stats banner with hover effects, and newsletter signup form
- Fully responsive (3-col → 2-col → 1-col grid)

---

## Design Tokens Reference

### Colors
```
Primary Green:    #7CFF00
Primary Light:    #A8FF00
Accent Cyan:      #00F5FF
Accent Blue:      #00D9FF
Pink:             #ff0080
Orange:           #F06A0F
Background:       #05070D
Background Alt:   #0B1020
Text Heading:     #FFFFFF
Text Body:        #D9D9D9
Text Muted:       #999999
```

### Typography
- **Body:** DM Sans / Inter (via CSS)
- **Headings:** DM Sans (bold, tight letter-spacing)
- **Accent/KPI:** Plus Jakarta Sans (in CTA section)
- **Decorative:** Barlow Condensed (used sparingly)