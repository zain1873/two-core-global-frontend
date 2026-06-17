"use client";

import React from "react";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import WhyChoosePaidAds from "../components/WhyChoosePaidAds";
import PaidAdsServices from "../components/PaidAdsServices";
import PaidAdsProcess from "../components/PaidAdsProcess";
import PaidAdsPakages from "../components/PaidAdsPakages";
const paidAdsBanner = "/assets/paid-advertising-banner.jpeg";
import "../css/PagesCss/webDev.css";

function PaidAdvertisingPage() {
  return (
    <div className="paid-advertising-page">
      <Navbar />

      {/* Banner */}
      <section
        className="web-banner"
        style={{
          backgroundImage: `url(${paidAdsBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb
              items={[{ label: "Home", to: "/" }, { label: "Paid Advertising" }]}
            />
            <h1>High-Performance Paid Advertising Services</h1>
            <Link to="/contact" className="banner-btn">Start Your Campaign</Link>
          </div>
        </div>
      </section>

      <WhyChoosePaidAds />
      <PaidAdsServices />
      <PaidAdsProcess />
      <PaidAdsPakages />
      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default PaidAdvertisingPage;
