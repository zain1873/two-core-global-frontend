"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Contact from "../components/contactForm";
import TestimonialSlider from "../components/Testimonials";
import CTASection from "../components/CtaSection";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/Portfolio.css";
const tcgBanner = "/assets/portfolio%20banner.png";
const noorrixProjectImg = "/assets/noorrix-project.png";
const cycleProjectImg = "/assets/cycle-project.jpeg";
const parallelProjectImg = "/assets/paralell-project.jpeg";
const workoutProjectImg = "/assets/workout-project.jpg";
const jocoImg = "/assets/joco.png";
const helmImg = "/assets/helm.png";
const megLogisticsImg = "/assets/meg-logistics.png";
const futureClinicImg = "/assets/future-clinic.png";
const patientCareImg = "/assets/patient-care-system.png";
const cutsAndBruisesImg = "/assets/cuts%20and%20bruises.png";
const georginaBexonImg = "/assets/georgina-bexon.png";

const PROJECTS = [
  {
    id: 0,
    title: "Noorrix Motors",
    year: "2025",
    category: "Web Development",
    tags: ["Web Development"],
    image: noorrixProjectImg,
    link: "https://www.noorrixmotors.co.uk/",
  },
  {
    id: 1,
    title: "JOCO Cups",
    year: "2025",
    category: "Web Development",
    tags: ["Ecommerce", "Web Development"],
    image: jocoImg,
    link: "https://jococups.com/",
  },
  {
    id: 2,
    title: "Helm Boots",
    year: "2025",
    category: "Web Development",
    tags: ["Ecommerce", "Web Development"],
    image: helmImg,
    link: "https://helmboots.com/",
  },
  {
    id: 3,
    title: "MEG Logistics",
    year: "2025",
    category: "Web Development",
    tags: ["Logistics", "Web Development"],
    image: megLogisticsImg,
    link: "https://www.meglogistic.com/",
  },
  {
    id: 4,
    title: "Future Clinic",
    year: "2025",
    category: "Web Development",
    tags: ["Healthcare", "Web Development"],
    image: futureClinicImg,
    link: "https://futureclinic.com/",
  },
  {
    id: 5,
    title: "Humwell — Patient Care System",
    year: "2025",
    category: "Web Development",
    tags: ["Healthcare", "Web App"],
    image: patientCareImg,
    link: "https://www.humwell.com/",
  },
  {
    id: 6,
    title: "Cuts & Bruises Barbershop",
    year: "2024",
    category: "Design & Branding",
    tags: ["Brand Identity", "Web Development"],
    image: cutsAndBruisesImg,
    link: "https://www.cutsandbruisesbarbershop.com/",
  },
  {
    id: 7,
    title: "Georgina Bexon",
    year: "2024",
    category: "Design & Branding",
    tags: ["UI/UX", "Portfolio"],
    image: georginaBexonImg,
    link: "https://georginabexon.com/",
  },
  {
    id: 8,
    title: "Pure Cycles",
    year: "2025",
    category: "Design & Branding",
    tags: ["UI/UX", "Brand Identity"],
    image: cycleProjectImg,
    link: "https://www.purecycles.com/",
  },
  {
    id: 9,
    title: "Parallel",
    year: "2024",
    category: "Web Development",
    tags: ["SaaS Platform", "Dashboard"],
    image: parallelProjectImg,
    link: "https://www.useparallel.com/",
  },
  {
    id: 10,
    title: "8fit",
    year: "2024",
    category: "Mobile App",
    tags: ["Development", "Mobile App"],
    image: workoutProjectImg,
    link: "https://apps.apple.com/us/app/8fit-workouts-meal-planner/id866617777",
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile App",
  "Digital Marketing",
  "Design & Branding",
];

const STATS = [
  { number: "120+", label: "Projects Delivered" },
  { number: "85+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "15+", label: "Team Members" },
];

function ProjectCard({ project }) {
  const CardTag = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardTag className="pf-card" {...linkProps}>
      <div className="pf-card-image-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="pf-card-overlay" />
        <span className="pf-card-year">{project.year}</span>
      </div>
      <div className="pf-card-body">
        <div className="pf-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pf-card-tag">{tag}</span>
          ))}
        </div>
        <div className="pf-card-footer">
          <h3 className="pf-card-title">{project.title}</h3>
          <div className="pf-card-arrow" aria-label="View project">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </CardTag>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <Navbar />

      {/* Banner */}
      <section className="portfolio-banner web-banner" style={{ backgroundImage: `url(${tcgBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Portfolio" }]} />
            <h1>Our Work Speaks for Itself</h1>
            <Link to="/contact" className="banner-btn">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pf-projects-section">
        <div className="pf-section-header">
          <span className="pf-eyebrow">Selected Work</span>
          <h2 className="pf-section-title">
            Projects That <span>Drive Results</span>
          </h2>
          <p className="pf-section-desc">
            From startups to enterprises — here's a look at the digital
            experiences we've crafted across industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="pf-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pf-filter-btn${activeFilter === cat ? " active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pf-grid">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="pf-no-results">No projects found in this category.</p>
          )}
        </div>
      </section>

      <CTASection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}
