import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../content/site';
import styles from './Navbar.module.css';
import { Aperture } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <Link to="/" className={styles.logoLink}>
            <Aperture className={styles.logoIcon} size={24} />
            <span className={styles.logoText}>{siteConfig.name}</span>
          </Link>
        </div>

        <ul className={styles.navLinks}>
          {siteConfig.navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
