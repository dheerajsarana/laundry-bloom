import React from 'react';
import styles from './Services.module.css';
import ServiceCard from './ServicesCard';

interface Service {
  icon: string;
  bgColor: string;
  iconColor: string;
  title: string;
  price: string;
  duration: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: '👕',
      bgColor: '#f3e8ff',
      iconColor: '#8b5cf6',
      title: 'Washing',
      price: '₹50/kg',
      duration: '24 hours turnaround'
    },
    {
      icon: '✨',
      bgColor: '#fdf2f8',
      iconColor: '#ec4899',
      title: 'Dry Cleaning',
      price: '₹80/piece',
      duration: '48 hours turnaround'
    },
    {
      icon: '🔥',
      bgColor: '#f0f4ff',
      iconColor: '#6366f1',
      title: 'Ironing',
      price: '₹15/piece',
      duration: '12 hours turnaround'
    },
    {
      icon: '⭐',
      bgColor: '#fef7ff',
      iconColor: '#c026d3',
      title: 'Premium Care',
      price: '₹120/piece',
      duration: 'Special handling'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.sectionTitle}>
        Our <span className={styles.gradientText}>Services</span>
      </h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            bgColor={service.bgColor}
            iconColor={service.iconColor}
            title={service.title}
            price={service.price}
            duration={service.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
