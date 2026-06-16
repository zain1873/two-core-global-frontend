"use client";

import React from "react";
import "../css/WhyChooseBrand.css";

const stats = [
  { value: "200+", label: "Brands Built" },
  { value: "96%",  label: "Client Retention" },
  { value: "8+",   label: "Years Experience" },
  { value: "50+",  label: "Industries Served" },
];

const reasons = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Strategy Before Design",
    desc: "We root every visual decision in research, positioning, and your audience — not trends.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Cohesive Visual Systems",
    desc: "Logos, palettes, type, and guidelines that speak with one consistent voice across all touchpoints.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Audience-First Thinking",
    desc: "Deep discovery sessions uncover exactly what your target market responds to emotionally and visually.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Brands That Scale",
    desc: "From startup MVP to enterprise rollout — we deliver assets ready for print, digital, and beyond.",
  },
];

export default function WhyChooseBrand() {
  return (
    <section className="wcb-section">
      <div className="wcb-inner">

        {/* ── Visual column ── */}
        <div className="wcb-visual">
          <span className="wcb-corner wcb-corner--tl" />
          <span className="wcb-corner wcb-corner--br" />

          <div className="wcb-img-wrap">
            <img
              src="/assets/brand-identity.png"
              alt="Brand Identity process"
              className="wcb-img"
            />
            <div className="wcb-img-scrim" />
          </div>

          <div className="wcb-stats-bar">
            {stats.map((s, i) => (
              <div key={i} className="wcb-stat">
                <span className="wcb-stat-val">{s.value}</span>
                <span className="wcb-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Content column ── */}
        <div className="wcb-content">
          <span className="wcb-eyebrow">
            <span className="wcb-eyebrow-line" />
            Why Choose Us
          </span>

          <h2 className="wcb-heading">
            Brands That Leave<br />
            <span className="wcb-heading-accent">A Lasting Mark</span>
          </h2>

          <p className="wcb-body">
            Your brand is more than a logo — it&apos;s the sum of every impression you make.
            We build strategic, visually compelling identities that earn trust, command
            attention, and grow with your business.
          </p>

          <div className="wcb-reasons">
            {reasons.map((r, i) => (
              <div key={i} className="wcb-reason">
                <div className="wcb-reason-icon">{r.icon}</div>
                <div className="wcb-reason-text">
                  <h4 className="wcb-reason-title">{r.title}</h4>
                  <p className="wcb-reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
