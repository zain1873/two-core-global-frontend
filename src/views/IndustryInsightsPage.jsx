"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import { Link } from "@/lib/link";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/IndustryInsights.css";

// ── Category icons (SVG, replacing emoji) ──
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
);

const SearchIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg {...iconProps}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

const CartIcon = () => (
  <svg {...iconProps}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

const PaletteIcon = () => (
  <svg {...iconProps}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2a2 2 0 0 0-.7-1.5A2 2 0 0 1 14.5 15H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8Z" />
  </svg>
);

const BarChartIcon = () => (
  <svg {...iconProps}>
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const ZapIcon = () => (
  <svg {...iconProps}>
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
  </svg>
);

const CpuIcon = () => (
  <svg {...iconProps}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
  </svg>
);

const PlayIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
  </svg>
);

const LockIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const RocketIcon = () => (
  <svg {...iconProps}>
    <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-1 3-2-3H10l-2 3-1-3c-1-1-2-3-2-5 0-4 2-8 5-10Z" />
    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
  </svg>
);

// ── Industry data ──
const INSIGHTS = [
  {
    id: 1,
    icon: GlobeIcon,
    title: "Web Development Trends 2026",
    category: "Web Development",
    summary:
      "Edge computing, AI-driven interfaces, and WebGL are reshaping how brands build for the browser. Discover what's next in web tech.",
    stat: "+64%",
    statLabel: "Faster Load Times",
    gradient: "linear-gradient(135deg, #7CFF00, #00F5FF)",
  },
  {
    id: 2,
    icon: SearchIcon,
    title: "SEO in the Age of AI Overviews",
    category: "SEO & Search",
    summary:
      "Google's SGE and AI Overviews are changing organic search. Learn how to adapt your content strategy for zero-click and AI-curated results.",
    stat: "8.5B",
    statLabel: "AI Search Queries/Day",
    gradient: "linear-gradient(135deg, #00F5FF, #7CFF00)",
  },
  {
    id: 3,
    icon: SmartphoneIcon,
    title: "Mobile-First Indexing: Still Winning",
    category: "Mobile",
    summary:
      "With Google fully mobile-first, your site's mobile UX directly impacts rankings. We break down the latest mobile performance benchmarks.",
    stat: "61%",
    statLabel: "Mobile Traffic Share",
    gradient: "linear-gradient(135deg, #ff0080, #7CFF00)",
  },
  {
    id: 4,
    icon: CartIcon,
    title: "The Rise of Conversational Commerce",
    category: "Ecommerce",
    summary:
      "Chatbots, voice search, and AI-powered recommendations are transforming how people shop online. Here's how to stay ahead of the curve.",
    stat: "$290B",
    statLabel: "Projected Market by 2027",
    gradient: "linear-gradient(135deg, #7CFF00, #ff0080)",
  },
  {
    id: 5,
    icon: PaletteIcon,
    title: "Design Systems That Scale",
    category: "Design & Branding",
    summary:
      "Why leading brands are investing in design systems — and how a unified visual language reduces friction, speeds delivery, and strengthens recognition.",
    stat: "6x",
    statLabel: "Faster Design Delivery",
    gradient: "linear-gradient(135deg, #00D9FF, #7CFF00)",
  },
  {
    id: 6,
    icon: BarChartIcon,
    title: "Zero-Party Data: The New Gold",
    category: "Marketing",
    summary:
      "As third-party cookies fade, zero-party data is becoming the cornerstone of ethical, high-performing marketing strategies.",
    stat: "83%",
    statLabel: "Consumers Will Share",
    gradient: "linear-gradient(135deg, #ff0080, #00F5FF)",
  },
  {
    id: 7,
    icon: ZapIcon,
    title: "Core Web Vitals & User Experience",
    category: "Web Development",
    summary:
      "Google's Core Web Vitals are now tightly coupled with search rankings. See how LCP, FID, and CLS impact real-world user retention.",
    stat: "53%",
    statLabel: "Lower Bounce Rate",
    gradient: "linear-gradient(135deg, #A8FF00, #00D9FF)",
  },
  {
    id: 8,
    icon: CpuIcon,
    title: "AI-Powered Personalization in 2026",
    category: "Marketing",
    summary:
      "From dynamic content to predictive product recommendations, AI is enabling personalization at scale. Explore the tools and tactics driving ROI.",
    stat: "40%",
    statLabel: "Revenue Uplift",
    gradient: "linear-gradient(135deg, #00F5FF, #ff0080)",
  },
  {
    id: 9,
    icon: ShieldIcon,
    title: "Cybersecurity UX: Trust by Design",
    category: "Design & Branding",
    summary:
      "How transparent security design — passwordless auth, clear data policies — builds user trust and reduces friction in digital products.",
    stat: "74%",
    statLabel: "Users Value Security UX",
    gradient: "linear-gradient(135deg, #7CFF00, #A8FF00)",
  },
  {
    id: 10,
    icon: PlayIcon,
    title: "Video Marketing: Short-Form Dominance",
    category: "Marketing",
    summary:
      "Short-form video continues to outperform all other content types. Learn the formats, platforms, and metrics that matter most.",
    stat: "2.5x",
    statLabel: "Higher Engagement",
    gradient: "linear-gradient(135deg, #00D9FF, #7CFF00)",
  },
  {
    id: 11,
    icon: LockIcon,
    title: "Privacy-First Analytics: What's Working",
    category: "SEO & Search",
    summary:
      "With cookie consent and privacy regulations tightening, brands need analytics solutions that respect user privacy without sacrificing data quality.",
    stat: "70%",
    statLabel: "Adopt Privacy Analytics",
    gradient: "linear-gradient(135deg, #ff0080, #00D9FF)",
  },
  {
    id: 12,
    icon: RocketIcon,
    title: "Jamstack & Serverless: Production Insights",
    category: "Web Development",
    summary:
      "Real-world performance data from Jamstack and serverless architectures — when they shine, where they struggle, and how to choose.",
    stat: "3.2s",
    statLabel: "Avg. Load Time (Jamstack)",
    gradient: "linear-gradient(135deg, #A8FF00, #ff0080)",
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "SEO & Search",
  "Marketing",
  "Design & Branding",
  "Mobile",
  "Ecommerce",
];

const HERO_STATS = [
  { number: "12+", label: "Reports" },
  { number: "6", label: "Sectors" },
  { number: "Monthly", label: "Updated" },
];

const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

function InsightCard({ item, index }) {
  const Icon = item.icon;
  return (
    <div
      className="ii-card"
      data-aos="fade-up"
      data-aos-delay={String((index % 3) * 110)}
    >
      <div className="ii-card-glow" style={{ background: item.gradient }} />
      <div className="ii-card-inner">
        <div className="ii-card-header">
          <span className="ii-card-icon">
            <Icon />
          </span>
          <span className="ii-card-category">{item.category}</span>
        </div>
        <h3 className="ii-card-title">{item.title}</h3>
        <p className="ii-card-summary">{item.summary}</p>
        <div className="ii-card-stat">
          <span className="ii-card-stat-icon">
            <StatIcon />
          </span>
          <span className="ii-card-stat-value">{item.stat}</span>
          <span className="ii-card-stat-label">{item.statLabel}</span>
        </div>
        <div className="ii-card-footer">
          <span className="ii-card-readmore">
            Read Report
            <ArrowIcon size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function IndustryInsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const gridRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 80 });
    const t = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(t);
  }, []);

  const selectTopic = (cat) => {
    setActiveFilter(cat);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filtered =
    activeFilter === "All"
      ? INSIGHTS
      : INSIGHTS.filter((item) => item.category === activeFilter);

  return (
    <div className="ii-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="ii-hero">
        <div className="ii-hero-overlay" />
        <div className="ii-hero-glow-green" />
        <div className="ii-hero-glow-cyan" />
        <div className="ii-hero-glow-pink" />
        <div className="ii-hero-grid" />

        <div className="ii-hero-inner">
          <p className="ii-hero-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Industry Insights
          </p>

          <div className="ii-hero-chip">
            <span className="ii-hero-chip-dot" />
            Research & Trends
          </div>

          <h1 className="ii-hero-title">
            Industry <span className="ii-gradient-text">Insights</span>
          </h1>

          <p className="ii-hero-subtitle">
            Data-backed reports, emerging trends, and strategic intelligence across
            web, marketing, design, and technology — curated by the Two Core Global team.
          </p>

          <div className="ii-hero-topics">
            {CATEGORIES.filter((c) => c !== "All").map((cat) => (
              <button
                key={cat}
                className="ii-hero-topic"
                onClick={() => selectTopic(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="ii-hero-stats">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="ii-hero-stat">
                <span className="ii-hero-stat-num">{s.number}</span>
                <span className="ii-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ii-hero-scroll">
          <div className="ii-hero-scroll-line" />
          Explore
        </div>
      </section>

      {/* ── Insights Grid ── */}
      <section className="ii-section" ref={gridRef}>
        <div className="ii-section-header" data-aos="fade-up">
          <span className="ii-eyebrow">Trending Intelligence</span>
          <h2 className="ii-section-title">
            What's Shaping <span>Digital Today</span>
          </h2>
          <p className="ii-section-desc">
            Curated reports from across the digital landscape — from AI and SEO to
            design systems and privacy-first analytics.
          </p>
        </div>

        <div className="ii-grid">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <InsightCard key={item.id} item={item} index={i} />
            ))
          ) : (
            <p className="ii-no-results">No insights found in this category.</p>
          )}
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="ii-stats-banner" data-aos="fade-up">
        <div className="ii-stats-glow" />
        <div className="ii-stats-inner">
          <span className="ii-eyebrow">By the Numbers</span>
          <h2 className="ii-stats-title">
            Digital in <span>Motion</span>
          </h2>
          <div className="ii-stats-grid">
            <div className="ii-stat-item">
              <span className="ii-stat-number">87%</span>
              <span className="ii-stat-desc">Of brands prioritize digital experience</span>
            </div>
            <div className="ii-stat-item">
              <span className="ii-stat-number">4.5x</span>
              <span className="ii-stat-desc">Higher engagement with personalized content</span>
            </div>
            <div className="ii-stat-item">
              <span className="ii-stat-number">62%</span>
              <span className="ii-stat-desc">Of marketers invest in AI tools</span>
            </div>
            <div className="ii-stat-item">
              <span className="ii-stat-number">2.8s</span>
              <span className="ii-stat-desc">Target Core Web Vitals load time</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="ii-newsletter" data-aos="fade-up">
        <div className="ii-newsletter-glow" />
        <div className="ii-newsletter-inner">
          <span className="ii-eyebrow">Stay Informed</span>
          <h2>Get the Latest Insights</h2>
          <p>
            Receive monthly intelligence briefs, trend reports, and actionable
            strategies delivered straight to your inbox.
          </p>
          <div className="ii-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="ii-newsletter-input"
            />
            <button type="button" className="ii-newsletter-btn">
              Subscribe
              <ArrowIcon size={18} />
            </button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}