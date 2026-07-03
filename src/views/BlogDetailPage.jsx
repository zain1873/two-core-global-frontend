"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import { Link } from "@/lib/link";
import { getRelatedPosts } from "@/data/blogPosts";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/Blog.css";
import "../css/PagesCss/BlogDetail.css";

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
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

function ContentBlock({ block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="bd-heading">{block.text}</h2>;
    case "paragraph":
      return <p className="bd-paragraph">{block.text}</p>;
    case "list":
      return (
        <ul className="bd-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote className="bd-quote">{block.text}</blockquote>;
    default:
      return null;
  }
}

function RelatedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="bl-card">
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
          <div className="bl-card-meta">
            <span className="bl-card-readtime">
              <ClockIcon />
              {post.readTime}
            </span>
          </div>
          <span className="bl-card-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogDetailPage({ post }) {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 80 });
    const t = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(t);
  }, []);

  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="blog-detail-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bd-hero">
        <div
          className="bd-hero-bg"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="bd-hero-overlay" />
        <div className="bd-hero-glow" />

        <div className="bd-hero-inner">
          <p className="blog-hero-breadcrumb">
            <Link to="/">Home</Link> <span>/</span>{" "}
            <Link to="/blog">Blog</Link> <span>/</span> {post.category}
          </p>

          <div className="bd-hero-chip">
            <span className="blog-hero-chip-dot" />
            {post.category}
          </div>

          <h1 className="bd-hero-title">{post.title}</h1>

          <div className="bd-hero-meta">
            <span className="bl-card-author">
              <span className="bl-card-avatar">{post.author.initials}</span>
              {post.author.name}
            </span>
            <span className="bl-card-meta-dot" />
            <span>{post.date}</span>
            <span className="bl-card-meta-dot" />
            <span className="bl-card-readtime">
              <ClockIcon />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="bd-article">
        <div className="bd-article-inner" data-aos="fade-up">
          <p className="bd-lead">{post.excerpt}</p>
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}

          <div className="bd-share">
            <Link to="/blog" className="bd-back-link">
              <span className="bd-back-arrow" aria-hidden="true">←</span>
              Back to all articles
            </Link>
            <Link to="/contact" className="bd-cta-link">
              Work With Us
              <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </article>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="bd-related">
          <div className="bl-section-header" data-aos="fade-up">
            <span className="bl-eyebrow">Keep Reading</span>
            <h2 className="bl-section-title">
              Related <span>Articles</span>
            </h2>
          </div>
          <div className="bd-related-grid" data-aos="fade-up">
            {related.map((p) => (
              <RelatedCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </div>
  );
}
