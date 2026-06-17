"use client";

import React from "react";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import CTASection from "../components/CtaSection";
import WhyChooseBrand from "../components/WhyChooseBrand";
import BrandServices from "../components/BrandServices";
import BrandProcess from "../components/BrandProcess";
import BrandPackages from "../components/BrandPackages";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/BrandIdentity.css";

const brandIdentityBanner = "/assets/brand-identity.png";

function BrandIdentityPage() {
  return (
    <div className="brand-identity-page">
      <Navbar />

      {/* Banner */}
      <section
        className="web-banner"
        style={{
          backgroundImage: `url(${brandIdentityBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "Brand Identity" }]}
            />
            <h1>Brand Identity & Design Services</h1>
            <p className="brand-banner-sub">
              Strategic branding that builds recognition, earns trust, and sets you apart in every market.
            </p>
            <Link to="/contact" className="banner-btn">Build Your Brand</Link>
          </div>
        </div>
      </section>

      <WhyChooseBrand />
      <BrandServices />
      <BrandProcess />
      <BrandPackages />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default BrandIdentityPage;
