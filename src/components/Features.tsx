import React from 'react';
import styles from '../styles/Home.module.css';

const FeatureCard: React.FC<{title:string;desc:string}> = ({title, desc}) => (
  <div className={styles.featureCard}>
    <div className={styles.featureIcon} />
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <h2>Recursos</h2>
        <p className={styles.lead}>Materiais, eventos e suporte para sua vida cristã.</p>
        <div className={styles.featuresGrid}>
          <FeatureCard title="Comunidade" desc="Conecte-se com irmãos e participe de encontros." />
          <FeatureCard title="Conteúdo" desc="Sermões, estudos e devocionais." />
          <FeatureCard title="Eventos" desc="Participe de retiros e encontros locais." />
        </div>
      </div>
    </section>
  );
};

export default Features;