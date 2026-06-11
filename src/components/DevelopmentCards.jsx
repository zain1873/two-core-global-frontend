"use client";



import '../css/developmentCards.css';

const SERVICES = [
  {
    id: 1,
    label: 'Development',
    title: 'Custom Web Development',
    description:
      'We specialize in building custom websites tailored to your unique business requirements. Our team works closely with you to create a fully customized web solution that meets both your functional and aesthetic goals.',
    image: '/assets/web-dev-page/custom web development.png',
    alt: 'Two professionals reviewing work at a computer',
  },
  {
    id: 2,
    label: 'Development',
    title: 'Mobile App Development',
    description:
      'From concept to launch, we craft high-performance mobile apps for iOS and Android. Cross-platform expertise ensures your app is scalable, intuitive, and drives real engagement on every device.',
    image: '/assets/web-dev-page/mobile app develop.png',
    alt: 'Mobile phones and development tools',
  },
  {
    id: 3,
    label: 'Development',
    title: 'Ecommerce Development',
    description:
      'Launch high-converting online stores built for scale. We architect ecommerce experiences that are fast, secure, and optimised to turn browsers into buyers — on every screen size.',
    image: '/assets/web-dev-page/ecommerce development.png',
    alt: 'Shopping cart and ecommerce concept',
  },
  {
    id: 4,
    label: 'Design',
    title: 'UI / UX Design',
    description:
      'We design interfaces that are as beautiful as they are functional. Through deep user research and iterative prototyping, every interaction feels natural, delightful, and perfectly on-brand.',
    image: '/assets/web-dev-page/ui ux develop.png',
    alt: 'Designer working on a UI mockup',
  },
  {
    id: 5,
    label: 'Design',
    title: 'Graphic Design',
    description:
      'Bold visuals that tell your brand story. From logos and brand identities to marketing collateral, we create graphics that leave a lasting impression across every touchpoint.',
    image: '/assets/web-dev-page/graphic design.png',
    alt: 'Graphic design tools and color palette',
  },
  {
    id: 6,
    label: 'Marketing',
    title: 'Digital Marketing & SEO',
    description:
      'Drive measurable growth with data-driven strategies. We combine SEO, SEM, and social media marketing to maximise your online visibility and convert traffic into loyal customers.',
    image: '/assets/web-dev-page/digital marketing & seo.png',
    alt: 'Analytics dashboard showing growth metrics',
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
          <button className="service-card__cta">Get in Touch</button>
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