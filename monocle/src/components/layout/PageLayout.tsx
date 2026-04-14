import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './PageLayout.module.css';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
