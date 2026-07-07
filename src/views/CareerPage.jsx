"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import { Link } from "@/lib/link";
import "../css/PagesCss/Career.css";

// ── SVG Icon Components ──
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const TargetIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const LightbulbIcon = () => (
  <svg {...iconProps}>
    <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const UsersIcon = () => (
  <svg {...iconProps}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg {...iconProps}>
    <path d="m22 7-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </svg>
);

const MapPinIcon = () => (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const DollarSignIcon = () => (
  <svg {...iconProps}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const HeartIcon = () => (
  <svg {...iconProps}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ZapOffIcon = () => (
  <svg {...iconProps}>
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const CoffeeIcon = () => (
  <svg {...iconProps}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const GiftIcon = () => (
  <svg {...iconProps}>
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg {...iconProps}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── New icons for added sections ──
const SendIcon = () => (
  <svg {...iconProps}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </svg>
);

const SearchIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg {...iconProps}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg {...iconProps}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 11c-1.5 0-3 1-3 3.5S5.5 18 7 18s3-1 3-3.5C10 12 8.8 10 7 9M17 11c-1.5 0-3 1-3 3.5S15.5 18 17 18s3-1 3-3.5c0-2.5-1.2-4.5-3-5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Data ──
const WHY_JOIN = [
  {
    icon: TargetIcon,
    title: "Impact-Driven Work",
    desc: "Work on real projects for global brands. Every team member's contribution directly shapes outcomes that matter.",
  },
  {
    icon: LightbulbIcon,
    title: "Culture of Innovation",
    desc: "We invest in R&D, experiment with emerging tech, and encourage every voice to bring bold ideas to the table.",
  },
  {
    icon: UsersIcon,
    title: "Collaborative Team",
    desc: "Cross-functional squads that blend design, engineering, and strategy — because the best work happens together.",
  },
  {
    icon: TrendingUpIcon,
    title: "Growth & Learning",
    desc: "Dedicated learning budgets, mentorship programs, and clear career paths to help you level up continuously.",
  },
];

const POSITIONS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    department: "Engineering",
    isNew: true,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    department: "Design",
    isNew: true,
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Full-Time",
    department: "Marketing",
    isNew: false,
  },
  {
    id: 4,
    title: "Full Stack Developer",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    department: "Engineering",
    isNew: false,
  },
  {
    id: 5,
    title: "SEO Analyst",
    location: "Remote",
    type: "Contract",
    department: "Marketing",
    isNew: false,
  },
  {
    id: 6,
    title: "Graphic Designer",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    department: "Design",
    isNew: false,
  },
];

const PERKS = [
  { icon: DollarSignIcon, label: "Competitive Salary" },
  { icon: HeartIcon, label: "Health Insurance" },
  { icon: ZapOffIcon, label: "Flexible Hours" },
  { icon: CoffeeIcon, label: "Remote/Hybrid Options" },
  { icon: BriefcaseIcon, label: "Professional Development" },
  { icon: GiftIcon, label: "Annual Bonuses" },
  { icon: BookOpenIcon, label: "Learning Budget" },
  { icon: MapPinIcon, label: "Modern Office Space" },
];

const HERO_STATS = [
  { number: "10+", label: "Team Members" },
  { number: "2", label: "Departments" },
  { number: "4.8", label: "Employee Rating" },
];

const CATEGORIES = ["All", "Engineering", "Design", "Marketing"];

// ── New data for added sections ──
const HIRING_STEPS = [
  {
    icon: SendIcon,
    step: "01",
    title: "Apply Online",
    desc: "Submit your resume and a portfolio link through our careers page. Tell us why you'd be a great fit.",
  },
  {
    icon: SearchIcon,
    step: "02",
    title: "Application Review",
    desc: "Our talent team reviews every application and reaches out within 5 business days if there's a match.",
  },
  {
    icon: MessageSquareIcon,
    step: "03",
    title: "Interviews",
    desc: "One or two conversations with the team, focused on your skills, past work, and how you like to collaborate.",
  },
  {
    icon: CheckCircleIcon,
    step: "04",
    title: "Offer & Onboarding",
    desc: "Get your offer and a personalized onboarding plan designed to set you up for success from day one.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Joining Two Core Global was the fastest I've grown as an engineer. I shipped real features for real clients in my first month.",
    name: "Hassan R.",
    role: "Frontend Developer",
  },
  {
    quote:
      "The design team trusts you with ownership from day one. Feedback is direct, fast, and always makes the work better.",
    name: "Mahnoor A.",
    role: "UI/UX Designer",
  },
  {
    quote:
      "Flexible hours and a genuinely collaborative culture. I've never worked somewhere that invests this much in learning.",
    name: "Bilal K.",
    role: "Full Stack Developer",
  },
];

const FAQS = [
  {
    q: "Do you offer remote or hybrid roles?",
    a: "Yes. Many of our positions support remote or hybrid arrangements — check the location tag on each listing, or ask during your interview.",
  },
  {
    q: "What does the interview process look like?",
    a: "Most roles involve one screening conversation followed by a skills-focused interview with the team you'd be joining. We aim to complete the full process within two weeks.",
  },
  {
    q: "Do you offer internships or entry-level roles?",
    a: "We periodically open internship and junior positions across Engineering and Design. Follow our careers page or LinkedIn for announcements.",
  },
  {
    q: "What benefits are included?",
    a: "Full-time team members receive health insurance, flexible hours, a learning budget, annual bonuses, and access to remote/hybrid work options.",
  },
  {
    q: "I don't see a role that fits — can I still apply?",
    a: "Absolutely. Send us your resume through the application form below and we'll reach out if a matching opportunity opens up.",
  },
];

// ── Sub-components ──
function WhyCard({ item, index }) {
  const Icon = item.icon;
  return (
    <div
      className="cr-why-card"
      data-aos="fade-up"
      data-aos-delay={String((index % 4) * 100)}
    >
      <div className="cr-why-icon">
        <Icon />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}

function PositionCard({ position }) {
  return (
    <div
      className="cr-position-card"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <div className="cr-position-info">
        <h3 className="cr-position-title">{position.title}</h3>
        <div className="cr-position-meta">
          <span className="cr-position-tag">
            <BriefcaseIcon />
            {position.department}
          </span>
          <span className="cr-position-tag">
            <MapPinIcon />
            {position.location}
          </span>
          <span className="cr-position-tag">
            <ClockIcon />
            {position.type}
          </span>
          {position.isNew && <span className="cr-position-badge new">New</span>}
        </div>
      </div>
      <Link to="/contact" className="cr-position-btn">
        Apply Now <ArrowUpRightIcon />
      </Link>
    </div>
  );
}

function PerkItem({ item }) {
  const Icon = item.icon;
  return (
    <div className="cr-perk-item" data-aos="fade-up" data-aos-delay="0">
      <div className="cr-perk-icon">
        <Icon />
      </div>
      <span className="cr-perk-label">{item.label}</span>
    </div>
  );
}

function ProcessStep({ item, index }) {
  const Icon = item.icon;
  return (
    <div
      className="cr-process-step"
      data-aos="fade-up"
      data-aos-delay={String((index % 4) * 100)}
    >
      <div className="cr-process-top">
        <div className="cr-process-icon">
          <Icon />
        </div>
        <span className="cr-process-num">{item.step}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}

function TestimonialCard({ item, index }) {
  return (
    <div
      className="cr-testimonial-card"
      data-aos="fade-up"
      data-aos-delay={String((index % 3) * 100)}
    >
      <div className="cr-testimonial-quote-icon">
        <QuoteIcon />
      </div>
      <p className="cr-testimonial-text">{item.quote}</p>
      <div className="cr-testimonial-author">
        <span className="cr-testimonial-name">{item.name}</span>
        <span className="cr-testimonial-role">{item.role}</span>
      </div>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`cr-faq-item${isOpen ? " cr-faq-item--open" : ""}`}>
      <button
        type="button"
        className="cr-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="cr-faq-chevron">
          <ChevronDownIcon />
        </span>
      </button>
      <div className="cr-faq-answer">
        <p>{item.a}</p>
      </div>
    </div>
  );
}

// ── Main Component ──
export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(0);
  const positionsRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 80 });
    const t = setTimeout(() => AOS.refresh(), 100);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    activeFilter === "All"
      ? POSITIONS
      : POSITIONS.filter((p) => p.department === activeFilter);

  const scrollToPositions = () => {
    if (positionsRef.current) {
      positionsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="cr-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="cr-hero">
        <div className="cr-hero-overlay" />
        <div className="cr-hero-glow-green" />
        <div className="cr-hero-glow-cyan" />
        <div className="cr-hero-glow-pink" />
        <div className="cr-hero-grid" />

        <div className="cr-hero-inner">
          <p className="cr-hero-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Careers
          </p>

          <div className="cr-hero-chip">
            <span className="cr-hero-chip-dot" />
            Join Our Team
          </div>

          <h1 className="cr-hero-title">
            Shape the Future With <span className="cr-gradient-text">Us</span>
          </h1>

          <p className="cr-hero-subtitle">
            At Two Core Global, we're building the next generation of digital
            experiences. We're looking for passionate creators, engineers, and
            strategists who want to do work that matters.
          </p>

          <div className="cr-hero-topics">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`cr-hero-topic${activeFilter === cat ? " cr-hero-topic--active" : ""}`}
                onClick={() => {
                  setActiveFilter(cat);
                  scrollToPositions();
                }}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cr-hero-stats">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="cr-hero-stat">
                <span className="cr-hero-stat-num">{s.number}</span>
                <span className="cr-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cr-hero-scroll">
          <div className="cr-hero-scroll-line" />
          Explore Roles
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="cr-section">
        <div className="cr-section-header" data-aos="fade-up">
          <span className="cr-eyebrow">Why Two Core Global</span>
          <h2 className="cr-section-title">
            Built for <span>Impact</span>
          </h2>
          <p className="cr-section-desc">
            We believe great work comes from empowered teams. Here's what makes
            Two Core Global a place where careers thrive.
          </p>
        </div>

        <div className="cr-why-grid">
          {WHY_JOIN.map((item, i) => (
            <WhyCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Culture Section ── */}
      <section className="cr-culture" data-aos="fade-up">
        <div className="cr-section-header" data-aos="fade-up">
          <span className="cr-eyebrow">Our Culture</span>
          <h2 className="cr-section-title">
            How We <span>Work</span>
          </h2>
        </div>
        <div className="cr-culture-content">
          <div className="cr-culture-text">
            <p>
              Two Core Global is more than a digital agency — we're a collective
              of designers, engineers, and strategists who believe in the power
              of great digital experiences. Our culture is built on transparency,
              continuous learning, and a shared commitment to delivering
              exceptional work.
            </p>
            <p>
              We operate in cross-functional squads where every voice matters.
              Whether you're writing code, designing interfaces, or crafting
              campaign strategy, your contribution directly shapes the outcome.
              We celebrate experimentation, learn from failure, and always push
              for better.
            </p>
            <p>
              From flexible working arrangements to dedicated learning budgets,
              we invest in our people because we know that when our team grows,
              our work grows with them.
            </p>
          </div>
          <div className="cr-culture-quote">
            <div className="cr-culture-quote-icon">"</div>
            <blockquote>
              The best work happens when talented people are given trust,
              autonomy, and a shared purpose. That's the environment we build
              every day.
            </blockquote>
            <cite>— Ayesha, Founder & CEO</cite>
          </div>
        </div>
      </section>

      {/* ── Hiring Process ── */}
      <section className="cr-section cr-process">
        <div className="cr-section-header" data-aos="fade-up">
          <span className="cr-eyebrow">How to Join</span>
          <h2 className="cr-section-title">
            Our Hiring <span>Process</span>
          </h2>
          <p className="cr-section-desc">
            A straightforward path from application to offer — transparent at
            every step, usually complete within two weeks.
          </p>
        </div>

        <div className="cr-process-grid">
          {HIRING_STEPS.map((item, i) => (
            <ProcessStep key={item.step} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="cr-testimonials" data-aos="fade-up">
        <div className="cr-section-header" data-aos="fade-up">
          <span className="cr-eyebrow">From the Team</span>
          <h2 className="cr-section-title">
            Life at <span>Two Core</span>
          </h2>
          <p className="cr-section-desc">
            Hear directly from the people building Two Core Global, one
            project at a time.
          </p>
        </div>

        <div className="cr-testimonials-grid">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Open Positions ── */}
      {/* <section className="cr-positions" ref={positionsRef}>
        <div className="cr-section-header" data-aos="fade-up">
          <span className="cr-eyebrow">Open Roles</span>
          <h2 className="cr-section-title">
            Current <span>Openings</span>
          </h2>
          <p className="cr-section-desc">
            Explore our open positions across engineering, design, and marketing.
            If you don't see a match, reach out anyway — we're always looking for
            great talent.
          </p>
        </div>

        <div className="cr-positions-list">
          {filtered.length > 0 ? (
            filtered.map((pos) => (
              <PositionCard key={pos.id} position={pos} />
            ))
          ) : (
            <p className="cr-no-positions">
              No open positions in this category right now. Check back soon or
              send us your resume.
            </p>
          )}
        </div>
      </section> */}

      {/* ── Perks Banner ── */}
      <section className="cr-perks" data-aos="fade-up">
        <div className="cr-perks-glow" />
        <div className="cr-perks-inner">
          <span className="cr-eyebrow">What We Offer</span>
          <h2 className="cr-perks-title">
            Perks & <span>Benefits</span>
          </h2>
          <div className="cr-perks-grid">
            {PERKS.map((item, i) => (
              <PerkItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cr-faq-section" data-aos="fade-up">
        <div className="cr-section-header" data-aos="fade-up">
          <span className="cr-eyebrow">Good to Know</span>
          <h2 className="cr-section-title">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div className="cr-faq-list">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openFAQ === i}
              onToggle={() => toggleFAQ(i)}
            />
          ))}
        </div>
      </section>

      {/* ── How to Apply ── */}
      <section className="cr-apply" data-aos="fade-up">
        <div className="cr-apply-glow" />
        <div className="cr-apply-inner">
          <span className="cr-eyebrow">Get Started</span>
          <h2>Ready to Join?</h2>
          <p>
            Don't see the perfect role? We're always open to connecting with
            talented individuals. Send us your resume and tell us how you can
            make an impact at Two Core Global.
          </p>
          <Link to="/contact" className="cr-apply-btn">
            Submit Your Application
            <ArrowUpRightIcon />
          </Link>
        </div>
      </section>

      {/* <CTASection /> */}
      <Footer />
    </div>
  );
}