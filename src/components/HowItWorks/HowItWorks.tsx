import React from 'react';
import styles from './HowItWorks.module.css';

interface Step {
  number: number;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Contact Us',
      description: 'Reach out via WhatsApp or call us to book your laundry service.'
    },
    {
      number: 2,
      title: 'We Pickup',
      description: 'Our team collects your laundry from your doorstep at the scheduled time.'
    },
    {
      number: 3,
      title: 'We Clean',
      description: 'Your clothes are professionally cleaned with care and attention to detail.'
    },
    {
      number: 4,
      title: 'We Deliver',
      description: 'Fresh, clean laundry delivered back to you, ready to wear!'
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>
        How It <span className={styles.gradientText}>Works</span>
      </h2>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
