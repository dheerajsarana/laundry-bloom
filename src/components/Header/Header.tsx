import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <div className={styles.logoText}>Laundry Bloom</div>
        </div>

        {/* Hamburger Icon */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
          <li>
            <a href="#contact" className={styles.btnDownload} onClick={closeMenu}>
              Book Now
            </a>
          </li>
        </ul>

        {/* Overlay for closing menu on outside click */}
        {isMenuOpen && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
