import React from 'react';
import styles from './Features.module.css';
import FeatureCard from './FeaturesCard';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🚚',
      title: 'Free Pickup & Delivery',
      description: "We come to you! Schedule pickup and delivery at your convenience, absolutely free."
    },
    {
      icon: '⚡',
      title: 'Express Service',
      description: "Need it fast? Get your laundry back in as little as 12 hours with our express service."
    },
    {
      icon: '✨',
      title: 'Premium Quality',
      description: "We use eco-friendly detergents and advanced cleaning techniques for the best results."
    },
    {
      icon: '📱',
      title: 'Easy Booking',
      description: "Book your service instantly via WhatsApp or call us. Simple, quick, and hassle-free."
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: "Transparent pricing with no hidden charges. Starting at just ₹50 per kg."
    },
    {
      icon: '🛡️',
      title: '100% Safe',
      description: "Your clothes are insured against damage. We care for your garments like they're our own."
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.sectionTitle}>
        Why Choose <span className={styles.gradientText}>Laundry Bloom?</span>
      </h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
