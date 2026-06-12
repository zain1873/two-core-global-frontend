"use client";

import Link from 'next/link';
import '../css/developmentCards.css';

const SERVICES = [
  {
    id: 1,
    label: 'App Development',
    title: 'Custom Mobile App Development',
    description:
      'We build fully custom mobile applications tailored to your business needs. From idea to deployment, we ensure smooth performance, scalable architecture, and a user-first experience.',
    image: '/assets/app-development-services/mobile app development.png',
    alt: 'Mobile app development on smartphone screen',
  },
  {
    id: 2,
    label: 'App Development',
    title: 'iOS App Development',
    description:
      'High-quality iOS applications designed for Apple devices with smooth UI, optimized performance, and compliance with Apple App Store standards.',
    image: '/assets/app-development-services/ios mobile app.png',
    alt: 'iPhone with app interface design',
  },
  {
    id: 3,
    label: 'App Development',
    title: 'Android App Development',
    description:
      'Powerful Android apps built for a wide range of devices. We focus on speed, flexibility, and seamless user experience across all Android platforms.',
    image: '/assets/app-development-services/android mobile apps.png',
    alt: 'Android smartphone with app icons',
  },
  {
    id: 4,
    label: 'App Development',
    title: 'Cross-Platform Development',
    description:
      'Build once, run everywhere. We use modern frameworks to create apps that work seamlessly on both iOS and Android, saving time and cost.',
    image: '/assets/app-development-services/cross platform develop.png',
    alt: 'Developer coding mobile application',
  },
  {
    id: 5,
    label: 'App Development',
    title: 'UI/UX for Mobile Apps',
    description:
      'We design intuitive and visually appealing mobile interfaces that enhance user engagement and ensure smooth navigation throughout your app.',
    image: '/assets/app-development-services/ui ux mobile apps.png',
    alt: 'Mobile UI design wireframes on screen',
  },
  {
    id: 6,
    label: 'App Development',
    title: 'App Maintenance & Support',
    description:
      'Continuous updates, bug fixes, and performance optimization to keep your mobile app secure, stable, and up-to-date with latest OS versions.',
    image: '/assets/app-development-services/app maintainance and support.png',
    alt: 'Developer monitoring app performance dashboard',
  },
];

function ServiceCard({ label, title, description, image, alt }) {
  return (
    <div className="service-card">
      {/* Background image */}
      <img className="service-card__img" src={image} alt={alt} />

      {/* Idle gradient overlay */}
      <div className="service-card__overlay-idle" />

      {/* Hover dark overlay */}
      <div className="service-card__overlay-hover" />

      {/* Content */}
      <div className="service-card__content">
        {/* Title — always visible */}
        <div>
          <span className="service-card__label">{label}</span>
          <h3 className="service-card__title">{title}</h3>
        </div>

        {/* Description — slides in right → left on hover */}
        <div className="service-card__desc">
          <p>{description}</p>
        </div>

        {/* CTA — always visible */}
        <div className="service-card__cta-wrap">
          <Link href="/contact">
            <button className="service-card__cta">Get in Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards() {
  return (
    <section>
      <div className="service-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}