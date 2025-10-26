import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const whatsappNumber = '919380505004';
  const whatsappMessage = 'Hi, I want to book a laundry service';

  return (
    <section id="contact" className={styles.downloadSection}>
      <h2>Ready to Get Started?</h2>
      <p>Contact us now and experience hassle-free laundry service</p>
      <div className={styles.appButtons}>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          className={styles.appButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontSize: '32px' }}>💬</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>Message us on</div>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>WhatsApp</div>
          </div>
        </a>
        <a 
          href={`tel:+${whatsappNumber}`}
          className={styles.appButton}
        >
          <span style={{ fontSize: '32px' }}>📞</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>Call us at</div>
            <div style={{ fontSize: '18px', fontWeight: 700 }}>+91 9380505004</div>
          </div>
        </a>
      </div>
      <p className={styles.availability}>Available 10:00 AM - 8:00 PM, 7 Days a Week</p>
    </section>
  );
};

export default Contact;
