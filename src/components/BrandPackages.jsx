"use client";

import React, { useState } from "react";
import "../css/BrandPackages.css";

const plans = [
  {
    name: "Starter",
    tagline: "Essential identity for new brands",
    popular: false,
    features: [
      "Logo design (3 concepts)",
      "Color palette (primary + secondary)",
      "Basic typography selection",
      "Business card design",
      "2 revision rounds",
      "PNG & SVG file exports",
      "Mini brand guide (PDF)",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Business",
    tagline: "Full identity for growing brands",
    popular: true,
    features: [
      "Everything in Starter",
      "Extended logo variations",
      "Full color system & palette",
      "Typography hierarchy",
      "Social media kit (8 templates)",
      "Letterhead & email signature",
      "3 revision rounds",
      "Complete brand guidelines",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Enterprise",
    tagline: "Comprehensive brand ecosystem",
    popular: false,
    features: [
      "Everything in Business",
      "Brand strategy workshop",
      "Tone of voice & messaging",
      "Marketing collateral suite",
      "Packaging & signage design",
      "Motion & icon guidelines",
      "Unlimited revisions",
      "Source files (AI, EPS, Figma)",
    ],
    cta: "Get a Quote",
  },
];

export default function BrandPackages() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="brand-pkgs-section">
      <div className="brand-pkgs-inner">

        <div className="brand-pkgs-header">
          <span className="brand-pkgs-label">Transparent Pricing</span>
          <h2 className="brand-pkgs-heading">
            Brand Identity <span className="brand-pkgs-accent">Packages</span>
          </h2>
          <p className="brand-pkgs-sub">
            Flat-rate project pricing — no surprise invoices, no hourly billing.
            Pick the scope that fits your stage.
          </p>
        </div>

        <div className="brand-pkgs-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`brand-pkg-card ${plan.popular ? "brand-pkg-card--popular" : ""} ${hovered === i ? "brand-pkg-card--hovered" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {plan.popular && (
                <div className="brand-pkg-popular-badge">Most Popular</div>
              )}

              <div className="brand-pkg-top">
                <span className="brand-pkg-name">{plan.name}</span>
                <p className="brand-pkg-tagline">{plan.tagline}</p>
              </div>

              <div className="brand-pkg-divider" />

              <ul className="brand-pkg-features">
                {plan.features.map((f) => (
                  <li key={f} className="brand-pkg-feature">
                    <span className="brand-pkg-check">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact" className="brand-pkg-cta">
                {plan.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="brand-pkgs-note">
          Need something custom?{" "}
          <a href="/contact" className="brand-pkgs-note-link">
            Let&apos;s talk scope →
          </a>
        </p>

      </div>
    </section>
  );
}
