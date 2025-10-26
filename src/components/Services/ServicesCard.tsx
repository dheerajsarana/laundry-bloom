import React from 'react';
import styles from './Services.module.css';

interface ServiceCardProps {
  icon: string;
  bgColor: string;
  iconColor: string;
  title: string;
  price: string;
  duration: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  bgColor,
  iconColor,
  title,
  price,
  duration
}) => {
  return (
    <div className={styles.serviceCard}>
      <div 
        className={styles.serviceIcon}
        style={{ backgroundColor: bgColor, color: iconColor }}
      >
        {icon}
      </div>
      <h3>{title}</h3>
      <p className={styles.servicePrice}>{price}</p>
      <p className={styles.serviceDuration}>{duration}</p>
    </div>
  );
};

export default ServiceCard;
