"use client";

import React from "react";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import WhyChooseSeo from "../components/WhyChooseSeo";
import SeoExpertise from "../components/SeoExpertise";
import SeoProcess from "../components/SeoProcess";
import SEOPackages from "../components/SeoPakages";
import SeoTagline from "../components/SeoTagline";
const seoBanner = "/assets/seo-banner.png";

function SeoSection() {
  return (
    <div className="seo-services bg-[white]">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner" style={{ backgroundImage: `url(${seoBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "SEO" }]} />
            <h1>Leading Global Seo Services Company</h1>
            <Link to="/contact" className="banner-btn">Make Your Website</Link>
          </div>
        </div>
      </section>
      <WhyChooseSeo/>
      <SeoExpertise/>
      <SeoProcess/>
      <SEOPackages/>
      <TestimonialSlider />
      <SeoTagline/>
      <CTASection />
      <Footer />
    </div>
  );
}

export default SeoSection;