import React from 'react';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialsCard';

interface Testimonial {
  author: string;
  location: string;
  text: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      author: 'Poorna Kumar',
      location: 'Ayyapanagar, Bangalore',
      text: "Laundry Bloom has made my life so much easier! Just a quick WhatsApp message and they handle everything. The quality of service is outstanding. Highly recommended!",
      avatar: 'PK'
    },
    {
      author: 'Punith Kumar',
      location: 'KR Puram, Bangalore',
      text: "Fast, reliable, and affordable. I've been using Laundry Bloom for 6 months now and they've never disappointed me. The pickup and delivery are always on time.",
      avatar: 'PK'
    },
    {
      author: 'Sindhu Shree',
      location: 'KR Puram, Bangalore',
      text: "The best laundry service I've used! They handle delicate fabrics with such care. My silk sarees came back looking brand new. Thank you, Laundry Bloom!",
      avatar: 'SS'
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>
        What Our <span className={styles.gradientText}>Customers Say</span>
      </h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            author={testimonial.author}
            location={testimonial.location}
            text={testimonial.text}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
