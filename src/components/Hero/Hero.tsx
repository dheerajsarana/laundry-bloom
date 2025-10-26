import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const whatsappNumber = '919380505004';
  const whatsappMessage = 'Hi, I want to book a laundry service';
  
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Your Laundry,<br />
          <span className={styles.gradientText}>Blooming Fresh!</span>
        </h1>
        <p>
          Professional laundry service at your doorstep. Book via WhatsApp or 
          call us for fresh, clean clothes delivered with care.
        </p>
        <div className={styles.ctaButtons}>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp Us
          </a>
          <a 
            href={`tel:+${whatsappNumber}`} 
            className={styles.btnSecondary}
          >
            📞 Call Now
          </a>
        </div>
      </div>

      <div className={styles.heroImage}>
            <div className={styles.heroCard}>
                <div className={styles.heroCardIcon}>👕</div>
                <h3>Premium Washing</h3>
                <p>Gentle care for all your clothes</p>
            </div>
            <div className={styles.heroCard}>
                <div className={styles.heroCardIcon}>✨</div>
                <h3>Expert Cleaning</h3>
                <p>Professional quality guaranteed</p>
            </div>
            <div className={styles.heroCard}>
                <div className={styles.heroCardIcon}>🚚</div>
                <h3>Free Delivery</h3>
                <p>Pickup and drop at your door</p>
            </div>
        </div>
    </section>
  );
};

export default Hero;
