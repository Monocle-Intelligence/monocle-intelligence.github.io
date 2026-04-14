import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
      <span className={styles.content}>{children}</span>
      {variant === 'primary' && <div className={styles.glow} />}
    </button>
  );
};
