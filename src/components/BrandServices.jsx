"use client";

import React from "react";
import "../css/PagesCss/BrandIdentity.css";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    name: "Logo Design",
    desc: "Iconic, scalable logos crafted to represent your brand's essence across every medium — print, digital, and beyond.",
    badge: "Core Identity",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    name: "Brand Strategy",
    desc: "Positioning, personality, tone of voice, and competitive differentiation — the blueprint that guides all creative decisions.",
    badge: "Strategic",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5"/><circle cx="7" cy="12" r="2.5"/><circle cx="17.5" cy="16.5" r="2.5"/>
      </svg>
    ),
    name: "Color Palette",
    desc: "Psychologically informed color systems with primary, secondary, and accent hues that evoke the right emotions.",
    badge: "Visual System",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>
      </svg>
    ),
    name: "Typography",
    desc: "Curated type pairings with hierarchy rules — headings, body, captions — ensuring readability and brand consistency.",
    badge: "Visual System",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    name: "Brand Guidelines",
    desc: "A comprehensive brand book covering usage rules, spacing, do's and don'ts — ensuring every team member stays on-brand.",
    badge: "Documentation",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    name: "Marketing Materials",
    desc: "Business cards, brochures, pitch decks, banners, and packaging designed to make a powerful first impression.",
    badge: "Collateral",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    name: "Social Media Kit",
    desc: "Profile images, cover banners, post templates, and story highlights — ready for LinkedIn, Instagram, Facebook, and more.",
    badge: "Digital",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
    name: "Brand Refresh",
    desc: "Evolve an existing identity — modernise your logo, update your palette, and realign with where your brand is heading.",
    badge: "Rebrand",
  },
];

export default function BrandServices() {
  return (
    <section className="brand-services-section">
      <div className="brand-services-inner">
        <span className="brand-services-label">What We Offer</span>
        <h2 className="brand-services-heading">
          Complete Brand Identity <br />Services
        </h2>
        <p className="brand-services-sub">
          From strategy to final asset delivery — everything your brand needs to
          look credible, feel consistent, and stand out in a crowded market.
        </p>

        <div className="brand-services-grid">
          {services.map((s, i) => (
            <div key={i} className="brand-service-card">
              <div className="brand-service-icon">{s.icon}</div>
              <h3 className="brand-service-name">{s.name}</h3>
              <p className="brand-service-desc">{s.desc}</p>
              <span className="brand-service-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="4"/>
                </svg>
                {s.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
