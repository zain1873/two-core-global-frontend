"use client";

import React from "react";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import SocialMediaPackages from "../components/SocialMediaPakages";
import WhyChooseUs from "../components/WhyChooseSocial";
import SocialMediaProcess from "../components/SocialMediaProcess";
const marketingBanner = "/assets/marketing_banner.png";
const developmentBanner = "/assets/development-banner.png";

function SocialMedia() {
  return (
    <div className="seo-services bg-[white]">
      <Navbar />

      {/* Banner Section */}
      <section
        className="web-banner"
        style={{ backgroundImage: `url(${marketingBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Social Media" }]} />
            <h1>Social Media Management</h1>
            <Link to="/contact" className="banner-btn">Make Your Website</Link>
          </div>
        </div>
      </section>
      <WhyChooseUs/>
      <SocialMediaProcess/>
      <SocialMediaPackages/>
      <TestimonialSlider />
      <CTASection />
      <Footer />
    </div>
  );
}

export default SocialMedia;