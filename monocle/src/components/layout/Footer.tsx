import React from 'react';
import { siteConfig } from '../../content/site';
import styles from './Footer.module.css';
import { Aperture } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Aperture className={styles.logoIcon} size={20} />
          <span className={styles.brandName}>{siteConfig.name}</span>
        </div>
        <div className={styles.text}>
          {siteConfig.footerText}
        </div>
      </div>
    </footer>
  );
};
