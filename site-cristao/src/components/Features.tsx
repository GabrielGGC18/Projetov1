import React from 'react';
import styles from '../styles/Home.module.css';

const featuresData = [
  {
    title: 'Feature One',
    description: 'Description of feature one.',
  },
  {
    title: 'Feature Two',
    description: 'Description of feature two.',
  },
  {
    title: 'Feature Three',
    description: 'Description of feature three.',
  },
];

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featureList}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;