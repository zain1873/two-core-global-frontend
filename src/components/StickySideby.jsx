"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  {
    phase: "CEO & Digital Marketing",
    title: "Ayesha",
    desc: "Ayesha drives the company's digital marketing vision and SEO strategy, leading growth initiatives that connect brands with their audiences through data-driven campaigns and measurable results.",
    image: "/assets/avatar/ayesha.png",
    linkedin: "https://linkedin.com",
    features: [
      "Digital Marketing Strategy",
      "SEO & SEM Leadership",
      "Brand Growth & Awareness",
      "Team Leadership & Vision",
      "Content & Campaign Strategy",
    ],
  },
  {
    phase: "Graphic Designer",
    title: "Nosheen Liaqat", 
    desc: "Nosheen crafts compelling visual identities and design systems that communicate brand stories with clarity, creativity, and consistency across digital and print media.",
    image: "/assets/avatar/nosheen liaqat.png",
    linkedin: "https://linkedin.com",
    features: [
      "Brand Identity Design",
      "Visual Communication",
      "Adobe Creative Suite",
      "Motion Graphics",
      "Print & Digital Design",
    ],
  },
  {
    phase: "Full Stack Developer",
    title: "M Zain Saleem",
    desc: "Zain builds end-to-end web solutions using Python, Django, Django REST Framework, and React — delivering scalable APIs, performant frontends, and clean system architecture.",
    image: "/assets/avatar/zain saleem.png",
    linkedin: "https://linkedin.com",
    features: [
      "Python & Django Development",
      "React.js Frontend",
      "Django REST Framework",
      "Database Architecture",
      "API Development & Integration",
    ],
  },
  {
    phase: "SEO Specialist",
    title: "Omar Farooq",
    desc: "Omar drives organic growth through technical SEO, keyword strategy, and on-page optimization — helping clients rank higher, attract quality traffic, and convert visitors into customers.",
    image: "/assets/avatar/omar farooq.png",
    linkedin: "https://linkedin.com",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Link Building",
      "SEO Analytics & Reporting",
    ],
  },
];

const FeatureItem = ({ text }) => (
  <div className="feature-item">
    <span>▶</span>
    <p>{text}</p>
  </div>
);

/* Measures the left-side panel height and writes --card-h to :root
   so the content-track offset is always correct on every breakpoint. */
function CardHeightSync() {
  useEffect(() => {
    const sync = () => {
      const el = document.getElementById("st-left-side");
      if (!el) return;
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--card-h", `${h}px`);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);
  return null;
}

export default function StoryTellingSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const activeIndex = Math.round(progress * (sections.length - 1));

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = rect.height - windowH;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Inter, sans-serif; }

        /* ── SECTION HEADER ──────────────────────────────────────── */
        .story-header {
          text-align: center;
          padding: 80px 24px 48px;
          background: var(--color-bg);
        }

        .story-header-label {
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .2em;
          color: var(--color-text-muted);
          margin-bottom: 14px;
        }

        .story-header-title {
          font-size: 56px;
          font-weight: 800;
          color: var(--color-heading);
          margin: 0;
          line-height: 1.1;
          font-family: 'Syne', sans-serif;
        }

        .story-header-title span {
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .story-header { padding: 60px 24px 36px; }
          .story-header-title { font-size: 42px; }
        }

        @media (max-width: 640px) {
          .story-header { padding: 48px 20px 28px; }
          .story-header-title { font-size: 30px; }
        }

        /* ── SECTION ──────────────────────────────────────────────── */
        .story-section {
          position: relative;
          height: 550vh;
          background: var(--color-bg);
        }

        /* ── STICKY WRAPPER ───────────────────────────────────────── */
        .story-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1280px;
          margin: auto;
          padding: 80px;
          overflow: hidden;
        }

        /* ── LEFT: content ───────────────────────────────────────── */
        .left-side {
          position: relative;
          height: 100%;
          overflow: hidden;
        }

        .content-track {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          will-change: transform;
        }

        /* Card height = left-side height, driven by --card-h */
        .story-card {
          height: var(--card-h, 100vh);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .phase {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: var(--color-primary);
          margin-bottom: 20px;
          text-shadow: var(--glow-primary);
        }

        .title {
          font-size: 64px;
          line-height: 1;
          font-weight: 800;
          color: var(--color-heading);
          margin-bottom: 24px;
          font-family: 'Syne', sans-serif;
        }

        .desc {
          font-size: 15px;
          line-height: 1.8;
          color: var(--color-text);
          max-width: 500px;
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .feature-item span {
          font-size: 12px;
          margin-top: 2px;
          flex-shrink: 0;
          color: var(--color-primary);
        }

        .feature-item p {
          margin: 0;
          color: var(--color-text);
          font-size: 14px;
          line-height: 1.5;
        }

        /* ── RIGHT: image stack ──────────────────────────────────── */
        .right-side {
          position: relative;
          height: 600px;
          overflow: hidden;
        }

        .image-stack {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .image-layer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        /* ── IMAGE OVERLAY ───────────────────────────────────────── */
        .image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 28px;
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 10;
          backdrop-filter: blur(2px);
        }

        .image-stack:hover .image-overlay {
          opacity: 1;
        }

        .image-stack:hover img {
          transform: scale(1.04);
        }

        .linkedin-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-bg-dark-alt);
          color: var(--color-primary);
          font-size: 13px;
          font-weight: 600;
          font-family: Inter, sans-serif;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none;
          letter-spacing: 0.02em;
          transform: translateY(10px);
          transition: transform 0.35s ease, background 0.2s ease;
          cursor: pointer;
          border: 1px solid var(--color-primary);
          box-shadow: var(--glow-primary);
        }

        .image-stack:hover .linkedin-btn {
          transform: translateY(0);
        }

        .linkedin-btn:hover {
          background: var(--color-primary);
          color: var(--color-bg-dark-alt);
          box-shadow: var(--glow-primary-strong);
        }

        .linkedin-btn svg {
          width: 16px;
          height: 16px;
          fill: var(--color-primary);
          flex-shrink: 0;
        }

        .linkedin-btn:hover svg {
          fill: var(--color-bg-dark-alt);
        }

        /* ── TABLET (641–1024px): two-col, slightly tighter ─────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .story-wrapper {
            gap: 36px;
            padding: 48px 36px;
          }

          .right-side { height: 480px; }

          .title { font-size: 46px; }

          .desc {
            font-size: 14px;
            max-width: 100%;
          }
        }

        /* ── MOBILE (≤ 640px): image TOP, content BOTTOM ────────── */
        /*
          The SAME sticky scroll animation runs — we simply flip the
          layout to one column with two rows: image (top) + content (bottom).
          --card-h is kept in sync via CardHeightSync so the translateY
          offset always matches the real rendered panel height.
        */
        @media (max-width: 640px) {
          .story-wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: 42vh 58vh;   /* image | content */
            gap: 0;
            padding: 0;
            align-items: stretch;
          }

          /* Image moves to row 1 */
          .right-side {
            order: -1;
            height: 100%;              /* fills 42vh */
          }

          /* Content fills row 2 */
          .left-side {
            height: 100%;              /* fills 58vh */
          }

          /* Each virtual card = the 58vh content area */
          .story-card {
            height: var(--card-h, 58vh);
            padding: 22px 20px 16px;
            justify-content: flex-start;
          }

          .phase {
            font-size: 11px;
            margin-bottom: 10px;
          }

          .title {
            font-size: 28px;
            margin-bottom: 10px;
          }

          .desc {
            font-size: 13px;
            line-height: 1.65;
            margin-bottom: 12px;
            max-width: 100%;
            /* Keep the layout tight so features are visible */
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .feature-item { margin-bottom: 7px; }

          .feature-item p { font-size: 12.5px; }
        }
      ` }} />

      <div className="story-header">
        <span className="story-header-label">Our People</span>
        <h2 className="story-header-title">Meet Our <span>Team</span></h2>
      </div>

      <section className="story-section" ref={sectionRef}>
        <div className="story-wrapper">

          {/* ── Content (left on desktop, bottom on mobile) ── */}
          <div className="left-side" id="st-left-side">
            <div
              className="content-track"
              style={{
                transform: `translateY(calc(-${progress * (sections.length - 1)} * var(--card-h, 100vh)))`,
              }}
            >
              {sections.map((item, index) => (
                <div className="story-card" key={index}>
                  <div className="phase">{item.phase}</div>
                  <h2 className="title">{item.title}</h2>
                  <p className="desc">{item.desc}</p>
                  <div>
                    {item.features.map((feature) => (
                      <FeatureItem key={feature} text={feature} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Images (right on desktop, top on mobile) ── */}
          <div className="right-side">
            <div className="image-stack">
              <div className="image-overlay">
                <a
                  href={sections[activeIndex].linkedin}
                  className="linkedin-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn
                </a>
              </div>
              {sections.map((item, index) => {
                const segment = 1 / (sections.length - 1);
                const start = index === 0 ? 0 : (index - 1) * segment;
                const end = start + segment;
                let reveal = (progress - start) / (end - start);
                reveal = Math.max(0, Math.min(1, reveal));

                return (
                  <div
                    key={index}
                    className="image-layer"
                    style={{
                      clipPath:
                        index === 0
                          ? "inset(0 0 0 0)"
                          : `inset(${(1 - reveal) * 100}% 0 0 0 round 0px)`,
                      zIndex: index + 1,
                      transition: "none",
                    }}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <CardHeightSync />
    </>
  );
}