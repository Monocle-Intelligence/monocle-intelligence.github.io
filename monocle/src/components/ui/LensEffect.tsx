import React from 'react';
import styles from './LensEffect.module.css';

export const LensEffect: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${styles.lensContainer} ${className}`}>
      <div className={styles.ring1}></div>
      <div className={styles.ring2}></div>
      <div className={styles.ring3}></div>
      <div className={styles.core}></div>
      <div className={styles.crosshair}></div>
    </div>
  );
};
