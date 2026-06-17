"use client";

import React from "react";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import SemProcess from "../components/SemProcess";
import SemPakages from "../components/SemPakages";
import WhyChooseUs from "../components/WhyChooseSem";
const tcgBanner = "/assets/tcg-banner.jpg";

function SeoSection() {
  return (
    <div className="sem-services">
      <Navbar />

      {/* Banner Section */}
      <section className="web-banner" style={{ backgroundImage: `url(${tcgBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="banner-dark-overlay"></div>
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "SEM" }]} />
            <h1>Leading Global Sem Services Company</h1>
            <Link to="/contact" className="banner-btn">Make Your Website</Link>
          </div>
        </div>
      </section>
      <WhyChooseUs/>
      <SemProcess/>
      <SemPakages/>
      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default SeoSection;