"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "@/lib/link";
import "../css/PagesCss/testimonials.css";

// ── SVG Icon Components ──
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const StarIcon = ({ filled = true }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 11c-1.5 0-3 1-3 3.5S5.5 18 7 18s3-1 3-3.5C10 12 8.8 10 7 9M17 11c-1.5 0-3 1-3 3.5S15.5 18 17 18s3-1 3-3.5c0-2.5-1.2-4.5-3-5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg {...iconProps}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const UsersIcon = () => (
  <svg {...iconProps}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);

const RepeatIcon = () => (
  <svg {...iconProps}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </svg>
);

// ── Data ──
const STATS = [
  { icon: CheckCircleIcon, number: "50+", label: "Projects Delivered" },
  { icon: StarIcon, number: "4.9/5", label: "Average Client Rating" },
  { icon: GlobeIcon, number: "6+", label: "Countries Served" },
  { icon: RepeatIcon, number: "85%", label: "Repeat Clients" },
];

const CATEGORIES = ["All", "Web Dev", "Marketing", "Branding", "Support"];

const TESTIMONIALS = [
  {
    name: "Ahmed R.",
    role: "CEO, Retail Startup",
    initials: "AR",
    rating: 5,
    category: "Web Dev",
    quote:
      "Two Core Global rebuilt our online store from the ground up. Load times dropped, conversions climbed, and the team communicated clearly at every step.",
  },
  {
    name: "Sara L.",
    role: "Marketing Director, UK",
    initials: "SL",
    rating: 5,
    category: "Marketing",
    quote:
      "Our social presence went from inconsistent to a real growth channel within two months. The content calendar and reporting made everything transparent.",
  },
  {
    name: "Faisal M.",
    role: "Founder, Automotive Marketplace",
    initials: "FM",
    rating: 5,
    category: "Web Dev",
    quote:
      "They understood a complex listings platform quickly and shipped a full-stack solution on time. Post-launch support has been just as responsive.",
  },
  {
    name: "Emily T.",
    role: "Operations Lead, USA",
    initials: "ET",
    rating: 4,
    category: "Branding",
    quote:
      "The rebrand gave us a visual identity that actually matches how we talk to customers. Every touchpoint feels consistent now, from the site to our decks.",
  },
  {
    name: "Zubair K.",
    role: "Co-founder, Restaurant Group",
    initials: "ZK",
    rating: 5,
    category: "Marketing",
    quote:
      "Google Ads spend finally makes sense — we can see exactly which campaigns bring in bookings, and the team adjusts strategy weekly.",
  },
  {
    name: "Hana Y.",
    role: "Product Manager, Real Estate",
    initials: "HY",
    rating: 5,
    category: "Support",
    quote:
      "Even six months after launch, support tickets get resolved same-day. It's rare to find a dev partner that stays this engaged after go-live.",
  },
  {
    name: "Daniyal S.",
    role: "Director, Agency Partner",
    initials: "DS",
    rating: 4,
    category: "Web Dev",
    quote:
      "We white-label their dev team for client projects now. Clean code, honest timelines, and they flag risks before they become problems.",
  },
  {
    name: "Noor H.",
    role: "Founder, Wellness Brand",
    initials: "NH",
    rating: 5,
    category: "Branding",
    quote:
      "From logo to launch, they made a small brand feel established. The strategy behind every design choice was explained, not just handed over.",
  },
  {
    name: "Bilal T.",
    role: "CTO, SaaS Startup",
    initials: "BT",
    rating: 5,
    category: "Support",
    quote:
      "Automation work they set up now saves our team roughly ten hours a week. Documentation was thorough enough that we could maintain it ourselves.",
  },
];

// ── Sub-components ──
function StatCard({ item, index }) {
  const Icon = item.icon;
  return (
    <div className="ts-stat-card" data-aos="fade-up" data-aos-delay={String((index % 4) * 100)}>
      <div className="ts-stat-icon">
        <Icon />
      </div>
      <span className="ts-stat-num">{item.number}</span>
      <span className="ts-stat-label">{item.label}</span>
    </div>
  );
}

function TestimonialCard({ item, index }) {
  return (
    <div className="ts-card" data-aos="fade-up" data-aos-delay={String((index % 3) * 100)}>
      <div className="ts-card-top">
        <div className="ts-quote-icon">
          <QuoteIcon />
        </div>
        <div className="ts-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`ts-star${i < item.rating ? " ts-star--filled" : ""}`}>
              <StarIcon filled={i < item.rating} />
            </span>
          ))}
        </div>
      </div>
      <p className="ts-quote">{item.quote}</p>
      <div className="ts-author">
        <div className="ts-avatar">{item.initials}</div>
        <div className="ts-author-info">
          <span className="ts-author-name">{item.name}</span>
          <span className="ts-author-role">{item.role}</span>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export default function TestimonialsPage() {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 80 });
    const t = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="ts-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="ts-hero">
        <div className="ts-hero-overlay" />
        <div className="ts-hero-glow-green" />
        <div className="ts-hero-glow-cyan" />
        <div className="ts-hero-glow-pink" />

        <div className="ts-hero-inner">
          <p className="ts-hero-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Testimonials
          </p>

          <div className="ts-hero-chip">
            <span className="ts-hero-chip-dot" />
            Client Feedback
          </div>

          <h1 className="ts-hero-title">
            What Our Clients <span className="ts-gradient-text">Say</span>
          </h1>

          <p className="ts-hero-subtitle">
            Real feedback from the founders, marketers, and teams we've
            partnered with — across web development, marketing, branding,
            and ongoing support.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ts-stats-section">
        <div className="ts-stats-grid">
          {STATS.map((item, i) => (
            <StatCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="ts-section">
        <div className="ts-section-header" data-aos="fade-up">
          <span className="ts-eyebrow">Trusted By Teams Worldwide</span>
          <h2 className="ts-section-title">
            Stories From Our <span>Clients</span>
          </h2>
          <p className="ts-section-desc">
            Every project is different, but the outcome is the same: clear
            communication and work that moves the needle.
          </p>
        </div>

        <div className="ts-grid">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Featured Quote ── */}
      <section className="ts-featured" data-aos="fade-up">
        <div className="ts-featured-glow" />
        <div className="ts-featured-inner">
          <div className="ts-featured-quote-icon">
            <QuoteIcon />
          </div>
          <blockquote className="ts-featured-quote">
            Two Core Global didn't just deliver a project — they became a
            long-term partner who understands our business as well as our
            own team does.
          </blockquote>
          <div className="ts-featured-author">
            <div className="ts-avatar ts-avatar--lg">MK</div>
            <div className="ts-author-info">
              <span className="ts-author-name">Maria K.</span>
              <span className="ts-author-role">Managing Director, E-commerce Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ts-cta" data-aos="fade-up">
        <div className="ts-cta-glow" />
        <div className="ts-cta-inner">
          <span className="ts-eyebrow">Get Started</span>
          <h2>Ready to Become Our Next Success Story?</h2>
          <p>
            Tell us about your project and we'll show you exactly how we can
            help you get there.
          </p>
          <Link to="/contact" className="ts-cta-btn">
            Start a Project
            <ArrowUpRightIcon />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}