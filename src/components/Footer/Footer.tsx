import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.gradientText}>Laundry Bloom</h3>
          <p className={styles.tagline}>
            Fresh & Clean, Always! Your trusted partner for all laundry needs.
          </p>
          {/* <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">f</a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">𝕏</a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">in</a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">📷</a>
          </div> */}
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li><a href="#services">Washing</a></li>
            <li><a href="#services">Dry Cleaning</a></li>
            <li><a href="#services">Ironing</a></li>
            <li><a href="#services">Premium Care</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact & Hours</h3>
          <ul>
            <li><a href="tel:+919999900000">+91 9380505004</a></li>
            <li>
              <a 
                href="https://wa.me/919380505004"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </li>
            <li><a href="mailto:laundrybloom2025@gmail.com">laundrybloom2025@gmail.com</a></li>
            <li className={styles.hours}>10 AM - 8 PM Daily</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {currentYear} Laundry Bloom. All rights reserved. | {' '}
          <a href="#privacy">Privacy Policy</a> | {' '}
          <a href="#terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
