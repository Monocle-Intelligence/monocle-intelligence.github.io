import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { productsList } from '../../content/products';
import styles from './Products.module.css';
import { Box, Layers, Cpu, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Engine': <Cpu size={24} className={styles.icon} />,
  'Perception': <Layers size={24} className={styles.icon} />,
  'Platform': <Box size={24} className={styles.icon} />
};

export const Products: React.FC = () => {
  return (
    <PageLayout>
      <section className={styles.headerSection}>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.subtitle}>
          Discover the tools bridging the physical and digital domains.
        </p>
      </section>

      <section className={styles.productSection}>
        <div className={styles.productGrid}>
          {productsList.map((product) => (
            <div key={product.id} className={`${styles.productCard} glass-panel`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {iconMap[product.category] || <Box size={24} className={styles.icon} />}
                </div>
                <div>
                  <h3 className={styles.name}>{product.name}</h3>
                  <span className={styles.category}>{product.category}</span>
                </div>
              </div>
              <p className={styles.description}>{product.description}</p>
              <ul className={styles.featureList}>
                {product.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};
