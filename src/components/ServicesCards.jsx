"use client";
import { useEffect, useRef } from 'react';
 import '../css/servicecards.css'
const webDevelopmentImg = "/assets/two-core-services/web%20develop%20services.png";
const appDevelopImg = "/assets/two-core-services/app%20develop%20service.png";
const brandIdentityImg = "/assets/two-core-services/brand%20identity%20services.png";
const uiUxImg = "/assets/two-core-services/ui%20ux%20service.png";
const seoImg = "/assets/two-core-services/seo%20service.png";
const socialMediaImg = "/assets/two-core-services/social%20media%20services.png";

/* ─── Data ───────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 1,
    eyebrow: 'Services — 01',
    title: ['Web', 'Development'],
    body: 'We create powerful, scalable websites and web applications designed to drive your business forward. From responsive design to seamless functionality, we build digital experiences that engage and convert.',
    image: webDevelopmentImg,
    alt: 'Web development services',
  },
  {
    id: 2,
    eyebrow: 'Services — 02',
    title: ['Mobile', 'Apps'],
    body: 'Custom mobile applications for iOS and Android that deliver exceptional user experiences. We build apps that are fast, intuitive, and built to grow with your business needs.',
    image: appDevelopImg,
    alt: 'Mobile app development',
  },
  {
    id: 3,
    eyebrow: 'Services — 03',
    title: ['Brand &', 'Identity'],
    body: 'We develop distinctive brand identities that resonate with your audience. From logo design to complete brand systems, we create cohesive visual languages that tell your story.',
    image: brandIdentityImg,
    alt: 'Brand and identity development',
  },
  {
    id: 4,
    eyebrow: 'Services — 04',
    title: ['UI/UX', 'Design'],
    body: 'Beautiful and functional user interfaces that create meaningful interactions. We design experiences that are intuitive, accessible, and delight your users at every touchpoint.',
    image: uiUxImg,
    alt: 'UI/UX design services',
  },
  {
    id: 5,
    eyebrow: 'Services — 05',
    title: ['SEO', 'Services'],
    body: 'Comprehensive SEO strategies that increase your online visibility and drive organic traffic. We optimize your digital presence to help you rank higher and reach more customers.',
    image: seoImg,
    alt: 'SEO services',
  },
  {
    id: 6,
    eyebrow: 'Services — 06',
    title: ['Social Media', 'Management'],
    body: 'Strategic social media management that builds community and drives engagement. We create compelling content and manage your presence across all platforms to grow your brand.',
    image: socialMediaImg,
    alt: 'Social media management',
  },
];

const CARD_COUNT = SERVICES.length;

/* ─── Component ──────────────────────────────────────────────── */
export default function ServicesStack() {
  const wrapperRefs = useRef([]);

  // IntersectionObserver: when the next card's wrapper enters the sticky zone,
  // add .is-covered to the current card to scale it down slightly.
  useEffect(() => {
    const observers = [];

    wrapperRefs.current.forEach((el, i) => {
      if (!el || i === CARD_COUNT - 1) return;
      const nextWrapper = wrapperRefs.current[i + 1];
      if (!nextWrapper) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          // Mark the current card as covered when the next one enters view
          const card = el.querySelector('.ss-card');
          if (card) card.classList.toggle('is-covered', entry.isIntersecting);
        },
        {
          rootMargin: '-58px 0px 0px 0px',
          threshold: 0,
        }
      );

      obs.observe(nextWrapper);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="ss-section">
      <div className="ss-inner">

        {/* ── Sticky "Services" label ─────────────────────── */}
        <div className="ss-label">
          <h2>Services</h2>
        </div>

        {/* ── Cards column ────────────────────────────────── */}
        <div className="ss-col">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className="ss-wrapper"
              ref={(el) => (wrapperRefs.current[i] = el)}
              style={{
                zIndex: i + 1,
                top: `${60 + i * 4}px`,
                marginBottom: i < CARD_COUNT - 1 ? '20px' : 0,
              }}
            >
              <article
                className="ss-card"
                aria-label={svc.title.join(' ')}
              >
                {/* Left: text */}
                <div className="ss-text">
                  <span className="ss-eyebrow">{svc.eyebrow}</span>
                  <h3 className="ss-title">
                    {svc.title.map((line, idx) => (
                      <span key={idx}>{line}</span>
                    ))}
                  </h3>
                  <p className="ss-body">{svc.body}</p>
                </div>

                {/* Right: image */}
                <div className="ss-image">
                  <img src={svc.image} alt={svc.alt} loading="lazy" />
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}