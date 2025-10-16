import React from 'react';
import styles from '../styles/Home.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Bem-vindo ao Site Cristão</h1>
                <p className={styles.heroSubtitle}>Encontre inspiração e comunidade aqui.</p>
                <a href="#cta" className={styles.heroButton}>Saiba Mais</a>
            </div>
        </section>
    );
};

export default Hero;