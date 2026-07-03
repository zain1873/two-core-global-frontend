"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import { Link } from "@/lib/link";
import { POSTS } from "@/data/blogPosts";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/Blog.css";

const CATEGORIES = [
  "All",
  "Web Development",
  "SEO",
  "Marketing",
  "Design & Branding",
  "Mobile Apps",
];

const HERO_STATS = [
  { number: "50+", label: "Articles" },
  { number: "6", label: "Topics" },
  { number: "Weekly", label: "New Drops" },
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

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

function PostMeta({ post, light }) {
  return (
    <div className={`bl-card-meta${light ? " bl-card-meta--light" : ""}`}>
      <span className="bl-card-author">
        <span className="bl-card-avatar">TC</span>
        Two Core Team
      </span>
      <span className="bl-card-meta-dot" />
      <span className="bl-card-readtime">
        <ClockIcon />
        {post.readTime}
      </span>
    </div>
  );
}

function BlogCard({ post, index }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="bl-card"
      data-aos="fade-up"
      data-aos-delay={String((index % 3) * 120)}
    >
      <div className="bl-card-image-wrap">
        <img src={post.image} alt={post.title} loading="lazy" />
        <div className="bl-card-overlay" />
        <span className="bl-card-category">{post.category}</span>
      </div>
      <div className="bl-card-body">
        <span className="bl-card-date">{post.date}</span>
        <h3 className="bl-card-title">{post.title}</h3>
        <p className="bl-card-excerpt">{post.excerpt}</p>
        <div className="bl-card-footer">
          <PostMeta post={post} />
          <span className="bl-card-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedPost({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="bl-featured" data-aos="fade-up">
      <div className="bl-featured-image-wrap">
        <img src={post.image} alt={post.title} loading="lazy" />
        <div className="bl-featured-overlay" />
        <span className="bl-featured-badge">
          <span className="bl-featured-badge-dot" />
          Featured
        </span>
      </div>
      <div className="bl-featured-body">
        <span className="bl-featured-category">{post.category}</span>
        <h2 className="bl-featured-title">{post.title}</h2>
        <p className="bl-featured-excerpt">{post.excerpt}</p>
        <PostMeta post={post} light />
        <span className="bl-featured-readmore">
          Read Full Article
          <ArrowIcon size={18} />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
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

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);
  const filtered =
    activeFilter === "All" ? rest : rest.filter((p) => p.category === activeFilter);

  return (
    <div className="blog-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="blog-hero-glow-green" />
        <div className="blog-hero-glow-cyan" />
        <div className="blog-hero-grid" />

        <div className="blog-hero-inner">
          <p className="blog-hero-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Blog
          </p>

          <div className="blog-hero-chip">
            <span className="blog-hero-chip-dot" />
            Our Blog
          </div>

          <h1 className="blog-hero-title">
            Ideas That Move <span className="bl-gradient-text">Brands Forward</span>
          </h1>

          <p className="blog-hero-subtitle">
            Sharp, practical thinking on web, growth marketing and design —
            straight from the projects our team ships every single week.
          </p>

          <div className="blog-hero-topics">
            {CATEGORIES.filter((c) => c !== "All").map((cat) => (
              <button
                key={cat}
                className="blog-hero-topic"
                onClick={() => selectTopic(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-hero-stats">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="blog-hero-stat">
                <span className="blog-hero-stat-num">{s.number}</span>
                <span className="blog-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-hero-scroll">
          <div className="blog-hero-scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── Featured + Grid ── */}
      <section className="bl-section" ref={gridRef}>
        <div className="bl-section-header" data-aos="fade-up">
          <span className="bl-eyebrow">Featured Reading</span>
          <h2 className="bl-section-title">
            Fresh From <span>The Studio</span>
          </h2>
        </div>

        {featured && <FeaturedPost post={featured} />}

        <div className="bl-filters" data-aos="fade-up">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`bl-filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bl-grid">
          {filtered.length > 0 ? (
            filtered.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)
          ) : (
            <p className="bl-no-results">No articles found in this category.</p>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bl-newsletter" data-aos="fade-up">
        <div className="bl-newsletter-glow" />
        <div className="bl-newsletter-inner">
          <span className="bl-eyebrow">Stay in the loop</span>
          <h2>Never Miss an Insight</h2>
          <p>
            Get our latest thinking on web, marketing and design delivered
            straight to your inbox — no spam, just value.
          </p>
          <Link to="/contact" className="bl-newsletter-btn">
            Subscribe Now
            <ArrowIcon size={18} />
          </Link>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
