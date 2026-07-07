// Centralized SEO configuration. Consumed by:
//   - src/app/layout.jsx          (global defaults + metadataBase)
//   - src/app/**/page.jsx         (per-route metadata via buildMetadata)
//   - src/app/sitemap.js          (route list -> sitemap.xml)
//   - src/app/robots.js           (sitemap reference)
//   - scripts/migrate.mjs         (generates the route wrapper files)
//
// Keep this file free of any "next"-only imports so it stays importable from
// the plain-Node migration script.

export const siteConfig = {
  name: "Two Core Global",
  shortName: "TCG",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.twocoreglobal.com").replace(/\/$/, ""),
  description:
    "Two Core Global is a full-service digital agency delivering web & mobile development, SEO, paid advertising, social media, branding and UI/UX design that grow ambitious brands.",
  ogImage: "/assets/tcg-banner.jpg",
  locale: "en_US",
  twitter: "@twocoreglobal",
};

// Order here is also the order used in the generated sitemap.
export const routes = [
  {
    path: "/",
    file: "home",
    title: "Two Core Global | Digital Agency for Web, SEO & Growth Marketing",
    description:
      "Two Core Global is a results-driven digital agency offering web development, SEO, paid ads, social media, branding and UI/UX design to scale your business online.",
    keywords: [
      "digital agency",
      "web development",
      "SEO services",
      "digital marketing",
      "branding",
      "UI/UX design",
      "Two Core Global",
    ],
    priority: 1.0,
  },
  {
    path: "/services",
    file: "ServicesPage",
    title: "Our Services | Web, Marketing & Creative Solutions | Two Core Global",
    description:
      "Explore Two Core Global's full range of services: web & app development, SEO, paid advertising, social media, branding, UI/UX and video production.",
    keywords: ["digital services", "web development services", "marketing services", "creative agency"],
    priority: 0.9,
  },
  {
    path: "/about",
    file: "AboutPage",
    title: "About Us | Meet the Team Behind Two Core Global",
    description:
      "Learn about Two Core Global — our mission, our team and the data-driven approach we use to help brands grow with technology and creativity.",
    keywords: ["about Two Core Global", "digital agency team", "our story", "company"],
    priority: 0.7,
  },
  {
    path: "/website-development",
    file: "websiteDevelopment",
    title: "Website Development Services | Custom, Fast & SEO-Ready Sites",
    description:
      "Custom website development that is fast, responsive and built to convert. From marketing sites to complex web apps, Two Core Global ships pixel-perfect, SEO-ready websites.",
    keywords: ["website development", "custom websites", "web design", "responsive websites", "React development"],
    priority: 0.8,
  },
  {
    path: "/seo-services",
    file: "SeoPage",
    title: "SEO Services | Rank Higher & Grow Organic Traffic | Two Core Global",
    description:
      "Data-driven SEO services that improve rankings, traffic and conversions. Technical SEO, on-page optimization, content and link building tailored to your goals.",
    keywords: ["SEO services", "search engine optimization", "organic traffic", "technical SEO", "on-page SEO"],
    priority: 0.8,
  },
  {
    path: "/sem-services",
    file: "SemPage",
    title: "SEM Services | Search Engine Marketing & PPC | Two Core Global",
    description:
      "Search engine marketing that puts your brand in front of buyers. PPC strategy, Google Ads management and conversion-focused campaigns that maximize ROI.",
    keywords: ["SEM services", "search engine marketing", "PPC", "Google Ads", "paid search"],
    priority: 0.8,
  },
  {
    path: "/social-media-services",
    file: "SocialMediaPage",
    title: "Social Media Marketing & Management | Two Core Global",
    description:
      "Grow your audience and engagement with social media marketing that delivers. Strategy, content, community management and paid social across every platform.",
    keywords: ["social media marketing", "social media management", "content marketing", "community management"],
    priority: 0.8,
  },
  {
    path: "/mobile-app-development",
    file: "MobileDevelopmentPage",
    title: "Mobile App Development | iOS & Android Apps | Two Core Global",
    description:
      "Native and cross-platform mobile app development for iOS and Android. We design, build and launch apps users love and businesses rely on.",
    keywords: ["mobile app development", "iOS development", "Android development", "cross-platform apps", "React Native"],
    priority: 0.8,
  },
  {
    path: "/contact",
    file: "ContactPage",
    title: "Contact Us | Start Your Project With Two Core Global",
    description:
      "Get in touch with Two Core Global. Tell us about your project and our team will get back to you with a tailored plan to help your business grow.",
    keywords: ["contact Two Core Global", "get a quote", "hire a digital agency", "start a project"],
    priority: 0.6,
  },
  {
    path: "/blog",
    file: "BlogPage",
    title: "Blog | Web, Marketing & Design Insights | Two Core Global",
    description:
      "Ideas and insights from Two Core Global on web development, SEO, growth marketing, branding and design — straight from the projects we ship every week.",
    keywords: ["digital agency blog", "web development blog", "SEO tips", "marketing insights", "design trends"],
    priority: 0.6,
  },
  {
    path: "/portfolio",
    file: "PortfolioPage",
    title: "Portfolio | Our Work & Case Studies | Two Core Global",
    description:
      "Browse Two Core Global's portfolio of websites, apps and marketing campaigns. Real projects, real results for brands across industries.",
    keywords: ["portfolio", "case studies", "our work", "digital agency projects"],
    priority: 0.7,
  },
  {
    path: "/paid-advertising",
    file: "PaidAdvertisingPage",
    title: "Paid Advertising Services | PPC & Performance Ads | Two Core Global",
    description:
      "Performance-driven paid advertising across Google, Meta and beyond. We plan, launch and optimize ad campaigns that turn spend into measurable revenue.",
    keywords: ["paid advertising", "PPC management", "performance marketing", "Google Ads", "Meta ads"],
    priority: 0.8,
  },
  {
    path: "/email-marketing",
    file: "EmailMarketingPage",
    title: "Email Marketing Services | Automation & Campaigns | Two Core Global",
    description:
      "Email marketing that nurtures leads and drives sales. Lifecycle automation, newsletters and campaigns designed, built and optimized for conversions.",
    keywords: ["email marketing", "email automation", "lifecycle marketing", "newsletters", "drip campaigns"],
    priority: 0.8,
  },
  {
    path: "/brand-identity",
    file: "BrandIdentityPage",
    title: "Brand Identity & Logo Design | Two Core Global",
    description:
      "Distinctive brand identity design — logos, visual systems and guidelines that make your brand memorable, consistent and ready to scale.",
    keywords: ["brand identity", "logo design", "branding", "visual identity", "brand guidelines"],
    priority: 0.8,
  },
  {
    path: "/ui-ux-design",
    file: "UiUxPage",
    title: "UI/UX Design Services | Product & Web Design | Two Core Global",
    description:
      "User-centered UI/UX design that turns complex ideas into intuitive, beautiful experiences. Research, wireframes, prototypes and polished interfaces.",
    keywords: ["UI/UX design", "product design", "user experience", "interface design", "web design"],
    priority: 0.8,
  },
  {
    path: "/ecommerce",
    file: "EcommercePage",
    title: "Ecommerce Development | Online Stores That Sell | Two Core Global",
    description:
      "Ecommerce development that drives sales. High-performance online stores with seamless checkout, integrations and a UX built to convert shoppers into customers.",
    keywords: ["ecommerce development", "online store", "Shopify", "ecommerce website", "online shopping"],
    priority: 0.8,
  },
  {
    path: "/crm-automation",
    file: "CrmPage",
    title: "CRM & Automation Solutions | Two Core Global",
    description:
      "CRM setup and business automation that saves time and scales revenue. Connect your tools, automate workflows and turn data into growth.",
    keywords: ["CRM", "business automation", "workflow automation", "CRM integration", "marketing automation"],
    priority: 0.8,
  },
  {
    path: "/video-production",
    file: "VideoProductionPage",
    title: "Video Production & Motion Graphics | Two Core Global",
    description:
      "Video production and motion graphics that tell your story. From brand films to social-ready content, we produce video that captivates and converts.",
    keywords: ["video production", "motion graphics", "brand video", "video marketing", "animation"],
    priority: 0.8,
  },
  {
    path: "/career",
    file: "CareerPage",
    title: "Careers | Join the Two Core Global Team",
    description:
      "Join Two Core Global and shape the future of digital experiences. Explore open positions across engineering, design, and marketing. Impact-driven work, collaborative culture, and growth opportunities await.",
    keywords: ["careers", "jobs", "digital agency jobs", "web development careers", "design jobs", "marketing jobs", "Two Core Global careers"],
    priority: 0.7,
  },
  {
    path: "/industry-insights",
    file: "IndustryInsightsPage",
    title: "Industry Insights | Trends, Research & Intelligence | Two Core Global",
    description:
      "Data-backed industry insights, emerging trends, and strategic intelligence across web development, SEO, marketing, design, and technology — curated by Two Core Global.",
    keywords: ["industry insights", "digital trends", "market research", "web development trends", "SEO insights", "marketing intelligence", "Two Core Global"],
    priority: 0.7,
  },
  {
    path: "/privacy-policy",
    file: "PrivacyPolicyPage",
    title: "Privacy Policy | Two Core Global",
    description:
      "Read the Two Core Global Privacy Policy to understand how we collect, use, protect and share your personal information when you use our website and services.",
    keywords: ["privacy policy", "data protection", "personal information", "cookies", "Two Core Global"],
    priority: 0.3,
  },
  {
    path: "/terms-and-conditions",
    file: "TermsPage",
    title: "Terms & Conditions | Two Core Global",
    description:
      "Review the Terms & Conditions that govern the use of the Two Core Global website and services, including client responsibilities, payments and intellectual property.",
    keywords: ["terms and conditions", "terms of service", "legal", "agreement", "Two Core Global"],
    priority: 0.3,
  },
];

export const routeByPath = Object.fromEntries(routes.map((r) => [r.path, r]));

export function absoluteUrl(path = "/") {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? "" : "/"}${path}`;
}

// Builds a Next.js Metadata object for a given route path.
export function buildMetadata(path) {
  const route = routeByPath[path] || routes[0];
  const url = absoluteUrl(route.path);
  const image = route.ogImage || siteConfig.ogImage;

  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: route.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [image],
      site: siteConfig.twitter,
    },
  };
}
