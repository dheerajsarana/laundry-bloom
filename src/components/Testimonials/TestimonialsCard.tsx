import React from 'react';
import styles from './Testimonials.module.css';

interface TestimonialCardProps {
  author: string;
  location: string;
  text: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  location,
  text,
  avatar
}) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.stars}>★★★★★</div>
      <p className={styles.testimonialText}>{text}</p>
      <div className={styles.testimonialAuthor}>
        <div className={styles.authorAvatar}>{avatar}</div>
        <div className={styles.authorInfo}>
          <h4>{author}</h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
