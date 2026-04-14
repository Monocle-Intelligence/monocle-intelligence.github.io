import React from 'react';
import { homeContent } from '../../content/home';
import { PageLayout } from '../../components/layout/PageLayout';
import { Button } from '../../components/ui/Button';
import { LensEffect } from '../../components/ui/LensEffect';
import styles from './Home.module.css';
import { Map, Radar, Aperture, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Map: <Map size={32} className={styles.pillarIcon} />,
  Radar: <Radar size={32} className={styles.pillarIcon} />,
  Aperture: <Aperture size={32} className={styles.pillarIcon} />
};

export const Home: React.FC = () => {
  return (
    <PageLayout>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <LensEffect className={styles.lensBackground} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className="text-gradient">{homeContent.hero.title}</span>
          </h1>
          <p className={styles.subtitle}>{homeContent.hero.subtitle}</p>
          <div className={styles.heroActions}>
            <Button variant="primary">
              {homeContent.hero.ctaPrimary}
              <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Button>
            <Link to="/products">
              <Button variant="secondary">{homeContent.hero.ctaSecondary}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionWrapper}>
          <h2 className={styles.sectionTitle}>{homeContent.mission.title}</h2>
          <p className={styles.missionText}>{homeContent.mission.description}</p>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className={styles.pillarsGrid}>
          {homeContent.pillars.map((pillar) => (
            <div key={pillar.id} className={`${styles.pillarCard} glass-panel`}>
              <div className={styles.iconWrapper}>
                {iconMap[pillar.icon]}
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};
